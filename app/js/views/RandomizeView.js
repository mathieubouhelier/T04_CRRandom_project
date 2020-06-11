class RandomizeView extends View {
    
  constructor(elemento) {
     super(elemento);
  }
  
 template(model) {
     
   return `
   ${model.map(n => `
   <p>${n.nome}</p><br>
   `)}
   `;
 }
}