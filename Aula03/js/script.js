trocaTema = () => {
  // alert("Mudei o tema e você não viu.")
  //   const html = document.documentElement;

  //   document.querySelector("body").style.background = "Pink" //troca a propriedade do background

  document.documentElement.classList.toggle("light");
  
  const isLight = document.documentElement.classList.contains("light");

  const imagem = isLight ? "./img/fotoPerfil.png" : "./img/perfildark.jpg";
  document.querySelector("#perfil img").setAttribute("src", imagem)

  const textNight = "foto preto e branca de uma menina com cabelos lisos e roupa preta";
  const textLight = "foto de uma menina com cabelos lisos, blusa vermelha xadrez e fundo neutro";
  
   isLight ? document.querySelector("#perfil img").setAttribute("alt", textLight) : document.querySelector("#perfil img").setAttribute("alt", textNight);
};
