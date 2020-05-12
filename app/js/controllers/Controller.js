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

  randomize(array) {
    console.log('array parametro randomize func', array);
    let nomes = array.map(element => element.nome);
    console.log('nomes', nomes);
    let currentIndex = nomes.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = nomes[currentIndex];
      nomes[currentIndex] = nomes[randomIndex];
      nomes[randomIndex] = temporaryValue;
    }
  
    this.updateRandomizeView(nomes);
  }

}