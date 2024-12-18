// richiesta info all'utente (km da percorrere ed età)
    let kmViaggio = parseFloat(prompt ("Inserisci i km che intendi percorrere (un numero)"));
    let etaUtente = parseInt(prompt ("Inserisci la tua età (un numero)"));

    console.log(kmViaggio, etaUtente);


// variabile di messaggio/risultato
    let result;


// variabili di prezzo
    let costoKm = kmViaggio * 0.21;
    let discount20 = costoKm * 0.2;
    let discount40 = costoKm * 0.4;


// valutare i parametri che compongono il prezzo del viaggio

    // SE il passeggero è minorenne
    if (etaUtente < 18) {
        // setto il risultato su sconto 20%
        result = costoKm - discount20;
        // SE il passeggero è over 65
    } else if (etaUtente > 65) {
        // setto il risultato su sconto 40%
        result = costoKm - discount40;
    } else {
        // SE il passeggero non è minorenne né over 65 setto il risultato su sconto 0%
        result = costoKm
    }


// indicare all'utente il prezzo totale del viaggio
    console.log(result);
    