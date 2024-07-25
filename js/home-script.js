// home-script.js

document.addEventListener("DOMContentLoaded", function () {
    const goButton = document.getElementById("go-button");
    const countrySelect = document.getElementById("country-select");

    goButton.addEventListener("click", function () {
        // Redirige a index.html sin importar el país seleccionado
        window.location.href = "index.html";
    });


function getTargetUrl(country) {
    switch (country) {
        case 'us':
            return 'us-page.html'; // Página específica para EE.UU.
        case 'uk':
            return 'uk-page.html'; // Página específica para Reino Unido.
        case 'ca':
            return 'ca-page.html'; // Página específica para Canadá.
        case 'au':
            return 'au-page.html'; // Página específica para Australia.
        case 'fr':
            return 'fr-page.html'; // Página específica para Francia.
        case 'de':
            return 'de-page.html'; // Página específica para Alemania.
        default:
            return 'default-page.html'; // Página por defecto.
    }
}
});
