let title = document.querySelector('#titoloArticolo');
let textArea = document.querySelector('#areaTesto');
let bottone = document.querySelector('#btnAggiungi');
let article = document.querySelector('#spazio_vuoto');

bottone.addEventListener("click",()=>{
    let testoInserito_uno = title.value;
    let testoInserito_due = textArea.value;

    if(testoInserito_uno !=="" && testoInserito_due !==""){

        let nuovoItem = document.createElement("div");

        let nuovoItem_due = document.createElement("div");

        let nuovoItem_tre = document.createElement("div");

        nuovoItem_due.textContent = testoInserito_uno;

        nuovoItem_tre.textContent = testoInserito_due;

        nuovoItem_due.classList.add('titolo_nuovo');

        nuovoItem_tre.classList.add('contenuto_nuovo');

        nuovoItem.appendChild(nuovoItem_due);

        nuovoItem.appendChild(nuovoItem_tre);

        article.appendChild(nuovoItem);
      

        title.value = "";

        textArea.value = "";
    }else{
        alert("Hai lasciato uno o entrambi i campi vuoti !!");
    }
})