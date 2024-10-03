// Script para exibir e ocultar o modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("addMovieModal");
    const btnAddMovie = document.getElementById("addMovieBtn");
    const spanClose = document.querySelector(".modal .close");

    // Exibe o modal quando clicar em "Adicionar Filmes"
    btnAddMovie.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    // Fecha o modal quando clicar no "x"
    spanClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fecha o modal quando clicar fora do conteúdo do modal
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});