const nome = 'Edgar';
const sexo = 'Masculino';
const idade = 70;
const contribuicao = 34;

const tempo_contribuicao_masculino = 35;
const tempo_contribuicao_feminino = 30;

if (sexo === 'Masculino') {
  if (contribuicao >= tempo_contribuicao_masculino) {
    if (contribuicao + idade >= 95) {
      console.log(`${nome}, você pode se aposentar!`)
    }else{
      console.log(`${nome}, você ainda não pode se aposentar!`)
    } 
  }else{
    console.log(`${nome}, a sua contribuicao é de ${contribuicao} anos, 
    você precisa de no mínimo ${tempo_contribuicao_masculino} anos de contribuição`)
  }
}else{
    if (contribuicao >= tempo_contribuicao_feminino) {
      if (contribuicao + idade >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
      }else{
        console.log(`${nome}, você ainda não pode se aposentar!`);
      }
    }else{
      console.log(`${nome}, sua contribuição é de ${contribuicao} anos,
      você precisa de no mínimo ${tempo_contribuicao_feminino} anos de contribuição`)
    }
}

