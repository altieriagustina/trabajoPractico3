const paragraph: string =
    `Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. 
  A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. 
  Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? 
  ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, 
  que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? 
  Su padre le contó que su madre era quien escogió su nombre. 
  Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. 
  A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. 
  En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.`;

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
    let contador: number = 0;
    
    for (let i = 0; i < paragraph.length; i++) { //ciclo for para recorrer el string
        if (paragraph.indexOf(searchTerm, i) != -1) { //Evalúo si en paragraph está o no el termino de búsqueda empezando en posición 0
            contador++ //Se incrementa cada vez que encuentra searchTerm en Paragraph
            i = paragraph.indexOf(searchTerm, i) + searchTerm.length //Suma la cantidad de letras de searchTerm y me ubica al final de searchTerm para vovler a buscar searchTerm
        }
    }

    return contador
}

console.log(`Se encuentra searchTerm en Paragrapsh?: ${isTextInPara(paragraph, ` la `)}`); //Escribo la palabra entre espacios para que no sume las palabras que contienen searchTerm
console.log(`Que cantidad de veces se repite searchTerm en Paragraph?: ${howManyTextInPara(paragraph, ` la `)}`);