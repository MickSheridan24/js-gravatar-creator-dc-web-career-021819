function updateDOM(identicon) {
  console.log("updating");
  const color = identicon.color;
  const blocks = identicon.blocks;

  const html = document.querySelector("html");
  html.style.setProperty("--bottom-color", color[1]);
  html.style.setProperty("--top-color", color[2]);

  for (block in blocks) {
    const b = document.getElementById(block);
    b.setAttribute("class", "empty");
    if (blocks[block]) {
      b.setAttribute("class", `fill`);
      b.style.setProperty("--fill-color", color[0]);
      console.log("this shoudl be");
    }
  }
}
