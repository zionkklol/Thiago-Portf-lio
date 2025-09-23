function sobre()
{
const t1 = "🎵 Sobre mim";

const sobreMim = ``;

Swal.fire({
title: t1,
text: sobreMim,
});
}

function mudarImagemDeFundo() {
    const body = document.body;
    const switchBtn = document.getElementById("trocar-fundo");

    if (switchBtn.checked) {
        body.style.backgroundImage = "url('../imagens/bg-desktop-light.jpg')";
        body.classList.add("modo-claro");
    } else {
        body.style.backgroundImage = "url('../imagens/bg-desktop.jpg')";
        body.classList.remove("modo-claro");
    }
}
