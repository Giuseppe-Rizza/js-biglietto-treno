// richiesta info all'utente (km da percorrere ed età)
    let kmViaggio = parseInt(prompt ("Inserisci i km che intendi percorrere (un numero)"));
    let etaUtente = parseInt(prompt ("Inserisci la tua età (un numero)"));

    console.log(kmViaggio, etaUtente);


// variabile di messaggio/risultato
    let result;


// variabili di prezzo
    let costoKm = parseFloat(kmViaggio * 0.21);
    let sconto20 = parseInt((costoKm * 20) / 100);
    let sconto40 = parseInt((costoKm * 40) / 100);


// valutare i parametri che compongono il prezzo del viaggio

    // SE ciascun km percorso ha un costo di 0.21 €
    if (kmViaggio) {
        // setto il risultato sul numero dei km che il passeggero intende percorrere
        // console.log(costoKm);
        result = costoKm;
    }

    // SE il passeggero è minorenne
    if (etaUtente < 18) {
        // setto il risultato su sconto 20%
        // console.log(sconto20);
        result = sconto20;
        // SE il passeggero è over 65
    } else if (etaUtente >= 65) {
        // setto il risultato su sconto 40%
        // console.log(sconto40);
        result = sconto40;
        // SE il passeggero non è minorenne né over 65
    } else (etaUtente >= 18 && etaUtente < 65) {
        // setto il risultato su sconto 0%
        // console.log(costoKm);
        result = costoKm;
    }


// indicare all'utente il prezzo totale del viaggio
    console.log(result);
    