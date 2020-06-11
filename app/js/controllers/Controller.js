class Controller{
  constructor(){
  this._inputTryberName = document.querySelector('#tryberName');
  this._inputCidade = document.querySelector('#tryberCity');
  this._inputSoftDevNumber = document.querySelector('#sDevNumber')
  this._listaEstudantes = new ListaEstudantes();
  this._estudantesView = new EstudantesView(document.querySelector('#estudantesView'));
  this._randomizeView = new RandomizeView(document.querySelector('#randomView'))
  }

  criarEstudante(){

    // event.preventDefault(evt);
    this._listaEstudantes.adicionaEstudante(
      new Estudante(
      this._inputTryberName.value,
      this._inputCidade.value,
      this._inputSoftDevNumber.value
      ));
      this.updateEstudantesView();
      this.limpaFormulario();
  }

  limpaFormulario(){
    this._inputTryberName.value ='';
    this._inputCidade.value = '';
    this._inputSoftDevNumber.value = null;
    this._inputTryberName.focus();
  }

  updateEstudantesView(){
    this._estudantesView.update(this._listaEstudantes);
  }
  
  updateRandomizeView(nomes){
    this._randomizeView.update(nomes);
  }

  // randomize(array) {
    // console.log('array parametro randomize func', array);
    // let nomes = array.map(element => element.nome);
    // console.log('nomes', nomes);
    // let currentIndex = nomes.length, temporaryValue, randomIndex;
  
    // while (0 !== currentIndex) {
  
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   console.log(randomIndex);
    //   while (randomIndex == currentIndex) {
    //     console.log('A' + randomIndex);
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     console.log('b' + randomIndex);
    //   } 
    //   currentIndex -= 1;
  
    //   temporaryValue = nomes[currentIndex];
    //   nomes[currentIndex] = nomes[randomIndex];
    //   nomes[randomIndex] = temporaryValue;
  // }
   randomize(array){
      const original = [...array];
      let result = [];
      let index = 0;
      while (array.length > 0) {
        const i = Math.floor(Math.random() * array.length);
        result[index] = array[i];
        if(result[index] !== original[index]) {
          index++;
          array.splice(i, 1);
        }
      }
      this.updateRandomizeView(result);
    }
    
    // function randomize(array) {
    //   const originalPositions = array.map((user) => user.nome);
    //   const nomes = originalPositions;
    //   var currentIndex = nomes.length,
    //     temporaryValue,
    //     randomIndex;
    //   // While existem itens
    //   while (0 !== currentIndex) {
    //     // Seleciona um item restante e aleatório
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     // Verifica se os itens trocados estão em posições diferentes do array original (originalPositions[])
    //     if (
    //       originalPositions[currentIndex - 1] !== nomes[randomIndex] &&
    //       originalPositions[randomIndex] !== nomes[currentIndex - 1]
    //     ) {
    //       // Seleciona o proximo item do array
    //       currentIndex -= 1;
    //       // Troca a posição dos elementos.
    //       temporaryValue = nomes[currentIndex];
    //       nomes[currentIndex] = nomes[randomIndex];
    //       nomes[randomIndex] = temporaryValue;
    //       // Se currentPosition - 1 for igual a 0, sai do loop
    //     } else if (currentIndex - 1 === 0) {
    //       currentIndex = 0;
    //     }
    //   }
    //   return nomes;
    // }
}
