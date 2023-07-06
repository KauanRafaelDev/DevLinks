function toggleMode() {
  // Forma de realizar a mudança por condicionais
  //  if(html.classList.contains('light')) {
  //    html.classList.remove('light')
  //  } else {
  //    html.classList.add('light')
  //  }
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/maia-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maia, uma cadela da raça Golden Retriver, olhando para a câmera."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Kauan Rafael, no espelho, com roupa social."
    )
  }
}
