let cariSual = 0;
let bal = 0;

const sualElement = document.getElementById("sual");
const sayElement = document.getElementById("say");
const neticeElement = document.getElementById("netice");
const butonlar = document.querySelectorAll("#variantlar button");

function sualiGoster() {

    if (cariSual >= suallar.length) {
        document.getElementById("variantlar").style.display = "none";
        sualElement.innerHTML = "🎉 Test tamamlandı!";
        sayElement.innerHTML = "";
        neticeElement.innerHTML =
        "Nəticəniz: <b>" + bal + " / " + suallar.length + "</b>";
        return;
    }

    const s = suallar[cariSual];

    sayElement.innerHTML = (cariSual + 1) + " / " + suallar.length;
    sualElement.innerHTML = s.sual;

    for (let i = 0; i < 4; i++) {
        butonlar[i].innerHTML = s.variantlar[i];

        butonlar[i].onclick = function () {

            if (s.variantlar[i] === s.cavab) {
                bal++;
            }

            cariSual++;
            sualiGoster();

        };
    }

}

sualiGoster();
