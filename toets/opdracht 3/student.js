function Student(naam, studentId) {

    let obj = this;
    this.name = naam + 'Hi';
    this.id = studentId;
    obj.cijfers = [];

    let klas = '';

}

let student = new Student('myName', '0001');

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
student.klas="MD2";
    
/* Hier moet de variabele klas getoond worden */
console.log(student.klas);





/*
a. Public en Private variabelen (1 punt)
Pas de code aan in het JavaScript student.js aan zodat er geen public variabelen meer in staan en alle variabelen private variabelen zijn.
Maak ook methods waarmee je de klas variabele een waarde geeft en kunt tonen.
*/

class MyCounter {
    #obj = 20;
    showCount() {
        return this.#count;
    }
}
let counter = new MyCounter();
console.log(counter.showCount());