function calcularMudanca() {
  const comodos = parseInt(document.getElementById("comodos").value) || 0;
  const distancia = parseInt(document.getElementById("distancia").value) || 0;
  const montagem = document.getElementById("montagem").value;

  if (comodos < 1 || distancia < 1) {
    document.getElementById("resultado").textContent = "Preencha todos os campos corretamente.";
    return;
  }

  let preco = comodos * 200 + distancia * 2;
  if (montagem === "sim") preco += 300;

  document.getElementById("resultado").textContent = "Orçamento estimado: € " + preco.toFixed(2);
}
