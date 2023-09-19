const data = document.querySelector("#text");
const qrCode = document.querySelector("#qrCode");
const generator = document.querySelector("#generator");

const url = "https://api.qrserver.com/v1/create-qr-code/";

generator.addEventListener("click", function () {
  generate();
});

data.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    generate();
  }
});

function generate() {
  const size = `350x350`;
  qrCode.src = `${url}?size=${size}&data=${data.value}`;

  if (data.value === "") {
    qrCode.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=https://shahadat-murshed.github.io/Portfolio/";
  }
}
