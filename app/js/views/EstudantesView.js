class EstudantesView extends View {
    
  constructor(elemento) {
     super(elemento);
  }
  
 template(model) {
     
   return `
   ${model._lista.map(n => `
   <p>${n.nome}</p><br>
   <p>${n.cidade}</p>
   `)}
   `;
 }
}