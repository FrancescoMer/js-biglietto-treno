function calcolaPrezzo() {
  const km = parseFloat(document.getElementById("km").value);
  const eta = parseInt(document.getElementById("eta").value);
  const prezzoKm = 0.21;

  if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
    document.getElementById("risultato").textContent = "Inserisci valori validi.";
    return;
  }

  let prezzo = km * prezzoKm;
  let sconto = 0;
  let tipoSconto = "Nessuno sconto";

  if (eta < 18) {
    sconto = 0.20;
    tipoSconto = "Sconto 20% per minorenni";
  } else if (eta > 65) {
    sconto = 0.40;
    tipoSconto = "Sconto 40% per over 65";
  }

  const prezzoFinale = prezzo * (1 - sconto);
  document.getElementById("risultato").textContent =
    `${tipoSconto}. Prezzo del biglietto: €${prezzoFinale.toFixed(2)}`;
}
