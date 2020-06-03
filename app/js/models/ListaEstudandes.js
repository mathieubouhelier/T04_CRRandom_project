class ListaEstudantes {
  constructor(){
  this._lista = [];
  }
  
  adicionaEstudante(obj) {
  this._lista.push(obj);
  }
  get lista() {
  return [].concat(this._lista);
  }
  set lista(lista) {
    this._lista = lista;
  }
  }
  