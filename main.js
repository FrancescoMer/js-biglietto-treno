// Funzione che calcola il prezzo del biglietto
function calcolaPrezzo() {
  // Ottieni i valori dagli input HTML
  const km = parseFloat(document.getElementById("km").value);
  const eta = parseInt(document.getElementById("eta").value);
  const prezzoKm = 0.21; // Prezzo per km

  // Controllo validità input
  if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
    // Avviso per input non valido
    document.getElementById("risultato").textContent = "Inserisci valori validi.";
    return;
  }

  let prezzo = km * prezzoKm; // Calcolo del prezzo base
  let sconto = 0;
  let tipoSconto = "Nessuno sconto"; // Descrizione dello sconto applicato

  // Applica sconto in base all'età
  if (eta < 18) {
    sconto = 0.20;
    tipoSconto = "Sconto 20% per minorenni";
  } else if (eta > 65) {
    sconto = 0.40;
    tipoSconto = "Sconto 40% per over 65";
  }

  const prezzoFinale = prezzo * (1 - sconto); // Prezzo con sconto applicato

  // Mostra il risultato
  document.getElementById("risultato").textContent =
    `${tipoSconto}. Prezzo del biglietto: €${prezzoFinale.toFixed(2)}`;
}
