const usuario = [
  {nome: "Dheyme", tecnologias: ["Java","Css"]},
  {nome: "Jobs", tecnologias: ["C++","Css"]},
  {nome: "Mark", tecnologias: ["Ruby",".Net"]}
]


function checaSeUsuarioUsaCss(usuario) {
  // Percorra um Array de tecnologias para saber se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false

  for (let i = 0; i < usuario.tecnologias.length; i++) {
    
    if (usuario.tecnologias[i] === "Css") {
      return true
    }

  }

  return false  
}


for (let i = 0;i < usuario.length; i++) {
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuario[i]);

  if (usuarioTrabalhaComCss) {
    console.log(`Usuario ${usuario[i].nome} trabalha com CSS`)
  }

}

