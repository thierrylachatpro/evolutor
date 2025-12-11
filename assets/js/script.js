let result = document.querySelector("#result");

let moins10Elt = document.querySelector(".taux10 .moins");
let plus10Elt = document.querySelector(".taux10 .plus");
let moins25Elt = document.querySelector(".taux25 .moins");
let plus25Elt = document.querySelector(".taux25 .plus");
let form = document.querySelector("#formSubmit");

let calcIt = () => {
  result.innerHTML = "&nbsp;";
  let nb_1 = document.getElementById("firstValue").value.replace(",", ".");
  let nb_2 = document.getElementById("secondValue").value.replace(",", ".");
  if (nb_1 && nb_2) {
    let calc = ((nb_2 - nb_1) / nb_1) * 100;

    switch (calc) {
      case Infinity:
        result.innerHTML = `<span class="${calc > 0 ? "success" : "danger"}" >${
          0 + "%"
        }</span>`;
        break;
      default:
        result.innerHTML = `<span class="${calc > 0 ? "success" : "danger"}" >${
          calc.toFixed(2) + "%"
        }</span>`;
        break;
    }
  }

  content.innerHTML = "";
  for (i = 1; i <= 35; i += 2) {
    content.innerHTML +=
      `
        <div class="w-100 hideIt">
            <div class="taux w-100" id="elt` +
      i +
      `">
                <p class="">` +
      i +
      `% : </p>
                <p class="moins danger"></p>
                <p class="plus success"></p>
            </div>
        </div>`;
    let moinsElt = document.querySelector("#elt" + i + " .moins");
    let plusElt = document.querySelector("#elt" + i + " .plus");

    moinsElt.innerHTML = "";
    plusElt.innerHTML = "";
    let moins = Number(nb_1) - (nb_1 * i) / 100;
    let plus = Number(nb_1) + (nb_1 * i) / 100;
    if (nb_1) {
      moinsElt.innerHTML = `${moins.toFixed(2)}€`;
      plusElt.innerHTML = `${plus.toFixed(2)}€`;
    }
  }
};

let fields = document.querySelectorAll(".value");

fields.forEach((value) => {
  value.addEventListener("keyup", function (e) {
    calcIt();
  });
});
