class Estudante {
  
  constructor(nome, cidade, softDevNumber){
    this._nome = nome;
    this._cidade = cidade;
    this._sdn = softDevNumber;
    this._codeCollection = [];
  }
  
  get nome() {
    return this._nome;
  }
  get cidade() {
    return this._cidade;
  }
  get sdn() {
    return this._sdn;
  }
  get codeCollection() {
    return this._codeCollection;
  }

  // set nome(nome) {
  //   this._nome = nome; 
  // }
  // set cidade(cidade) {
  //   this._cidade = cidade; 
  // }
  // set sdn(sdn) {
  //   this._sdn = sdn; 
  // }

  adicionaCodigo(codigo) {
    this.codeCollection.push(codigo);
  }
}