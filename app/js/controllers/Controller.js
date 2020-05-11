class Controller{
  constructor(){
  this._inputTryberName = document.querySelector('#tryberName');
  this._inputCidade = document.querySelector('#tryberCity');
  this._inputSoftDevNumber = document.querySelector('#sDevNumber')
  this._listaEstudantes = new ListaEstudantes();
  this._estudantesView = new EstudantesView(document.querySelector('#estudantesView'));
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

}