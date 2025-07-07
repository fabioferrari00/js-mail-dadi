//definizione variabili
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;


//logica
if (pcNumber > userNumber) {
  console.log(`il pc ha vinto: Numero pc ${pcNumber}. Il tuo numero ${userNumber}`)
} else if (pcNumber < userNumber) {
  console.log(`Hai vinto: Numero pc ${pcNumber}. Il tuo numero ${userNumber}`)
} else {
  console.log(`Pareggio: Numero pc ${pcNumber}. Il tuo numero ${userNumber}`)
}