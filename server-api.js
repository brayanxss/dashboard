const http = require("http");

const PORT = 8080;
// Ajuste para a origem exata do frontend.
// Local: http://localhost:3000
// Codespaces: use a URL pública da porta 3000.
const ORIGIN_PERMITIDA = "http://localhost:3000";

http.createServer((req, res) => {
  // Preflight CORS: precisa vir antes da rota GET.
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": ORIGIN_PERMITIDA,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "X-Identificador-Estudante, Content-Type",
      "Access-Control-Max-Age": "60"
    });
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/dados") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": ORIGIN_PERMITIDA
    });
    res.end(JSON.stringify({
      matricula: "SUBSTITUA_PELA_SUA_MATRICULA_REAL",
      status: "dados_sensiveis"
    }));
    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": ORIGIN_PERMITIDA
  });
  res.end(JSON.stringify({ erro: "Nao encontrado" }));
}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
});
