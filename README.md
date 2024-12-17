# js-biglietto-treno
Biglietto del treno


// TRACCIA
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km);
- va applicato uno sconto del 20% per i minorenni;
- va applicato uno sconto del 40% per gli over 65.

N.B.: l’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//


STEPS:

// richiesta info all'utente (km da percorrere ed età) --- INPUT


// verifica dei parametri che compongono il prezzo del viaggio

    // SE ciascun km percorso ha un costo di 0.21 €
        // setto il risultato sul numero dei km che il passeggero intende percorrere

    // SE il passeggero è minorenne 
        // setto il risultato su sconto 20%

    // SE il passeggero è over 65
        // setto il risultato su sconto 40%

    // SE il passeggero non è minorenne né over 65
        // setto il risultato su sconto 0%


// indicare all'utente il prezzo totale del viaggio --- OUTPUT