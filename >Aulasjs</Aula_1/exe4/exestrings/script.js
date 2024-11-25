function adicionarImagem() {
    // Local da imagem
    const imagem = "/Volumes/DIRECTORI/>Aulasjs</Aula_1/exe4/exestrings"; // Substitua pelo caminho correto da sua imagem
    
    // Seleciona a tag <img> pelo id
    const imgElement = document.getElementById("minhaImagem");

    // Altera o atributo "src" para o caminho da imagem
    imgElement.src = imagem;
}
