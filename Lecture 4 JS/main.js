let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
let title = "Hello Vanilla";

function render(n) {
  document.getElementById("demo").innerHTML = renderProductList(n);
}
let renderProductList = function (productCount) {
  let list = "";
  for (let i = 0; i <= productCount; i++) {
    list += renderProduct(title, lorem);
  }
  return list;
};
let renderProduct = function (title, lorem) {
  return `<h1>${title}</h1>
  <div>
  ${lorem}
  </div>`;
};
