//definizione variabili
const emailList = ['pippo@mail.com', 'paperino@mail.com', 'topolino@mail.com', 'pluto@mail.com',];
const userEmail = prompt('Inserisci la tua email');

let emailCheck = false;

//logica

//ciclo l'array per verificare se trovo la mail inserita dall'utente
for (let i = 0; i < emailList.length; i++) {

  if (userEmail === emailList[i]) {
    emailCheck = true;
  }

}

//effettuo il controllo sul check della email
if (emailCheck) {
  console.log(`la mail è stata trovata`);
}
else {
  console.log(`la mail non è stata trovata`);
}