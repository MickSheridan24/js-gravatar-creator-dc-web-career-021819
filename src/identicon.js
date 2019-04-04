class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html

  constructor(str) {
    this.inputString = str;
    this.genMD5 = md5.array(str);
    this.color = this.setColor(this.genMD5);
    this.blockValues = this.setBlockValues(this.genMD5);
    this.blocks = this.setBlocks(this.blockValues);
    updateDOM(this);
  }

  setColor(arr) {
    this.colors = [arr[0], arr[1], arr[2]];
    const central = `rgb(${this.colors[0]},${this.colors[1]},${this.colors[2]})`;
    const low = `rgb(${this.colors[0] - 25},${this.colors[1] + 25},${this.colors[2] - 25})`;
    const high = `rgb(${this.colors[0] + 25},${this.colors[1] - 25},${this.colors[2] + 25})`;
    return [central, low, high];
  }

  setBlockValues(arr) {
    const wArr = [...arr];
    const out = [];
    wArr.shift();
    for (const el of wArr) {
      out.push(el % 2 === 0);
    }

    console.log(out);
    return out;
  }
  setBlocks(arr) {
    const blockConfig = {};
    for (let i = 0; i < 5; i++) {
      blockConfig[`${i}-0`] = arr[i];
      blockConfig[`${i}-4`] = arr[i];
      blockConfig[`${i}-1`] = arr[i + 5];
      blockConfig[`${i}-3`] = arr[i + 5];
      blockConfig[`${i}-2`] = arr[i + 10];
    }
    return blockConfig;
  }
}
