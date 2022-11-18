let namePeople = prompt ("Qual'è il tuo nome?"); //Chiedo il nome
console.log (namePeople); //Console Print

let surnamePeople = prompt ("Qual'è il tuo cognome?"); //Chiedo il cognome
console.log (surnamePeople); //Console Print

let colorLove = prompt ("Qual'è il tuo colore preferito?"); //Chiedo il colore preferito
console.log (colorLove); //Console Print

document.getElementById("name") .innerHTML = namePeople + " " + surnamePeople + " " + colorLove + " " + "22";

