function handleSubmit(e) {}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form");
  const input = document.getElementById("identicon-input");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    const val = input.value;
    console.log(val);
    new Identicon(val);
    e.preventDefault();
  }
});
