const dolarBolsa = document.querySelector("#dolarBolsa");

dolarBolsa.addEventListener("click", mostrarDolarBolsa);

function mostrarDolarBolsa() {
  dolarInfo.innerHTML = "";

  const dolarBolsaDescription = document.createElement("p");
  dolarBolsaDescription.innerText = `
  El dólar bolsa o dólar MEP en Argentina es un tipo de cambio que se obtiene a través de la compra y venta de bonos en el mercado financiero. 
  Este tipo de dólar es legal y se realiza dentro del marco regulado por la Comisión Nacional de Valores (CNV). 
  Es una alternativa para adquirir dólares sin las restricciones del mercado oficial y refleja un valor basado en la oferta y demanda de los bonos.
  Aunque generalmente es más alto que el dólar oficial, suele ser más bajo que el dólar blue.`;
  dolarInfo.append(dolarBolsaDescription);
}
