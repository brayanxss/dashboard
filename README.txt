ENTREGA 3 — CORS, PREFLIGHT E CACHE

Antes de executar:
1. Substitua SUBSTITUA_PELA_SUA_MATRICULA_REAL nos dois arquivos pela matrícula real.
2. Confira ORIGIN_PERMITIDA em api/server-api.js. Em ambiente local, use exatamente http://localhost:3000. No Codespaces, use a URL pública real da porta 3000.
3. Em client/index.html, ajuste API_URL para a URL real da API na porta 8080, se estiver usando Codespaces.

Execução local:
- Terminal 1: node api/server-api.js
- Terminal 2: node client/server-client.js
  Observação: o arquivo client/server-client.js precisa existir; se você ainda não o tem, crie-o conforme o roteiro fornecido ou use um servidor estático equivalente na porta 3000.
- Abra http://localhost:3000.

Validação:
- DevTools > Network; deixe "Disable cache" desmarcado.
- Primeiro clique: OPTIONS /dados (204) seguido de GET /dados (200).
- Clique novamente dentro de 60 segundos: espera-se novo GET sem novo OPTIONS, desde que o navegador aplique o cache de preflight.
- Para o teste de fronteira, adicione temporariamente o cabeçalho X-Chave-Nao-Autorizada: teste ao fetch. O navegador deve rejeitar o preflight porque esse cabeçalho não consta em Access-Control-Allow-Headers. Depois remova-o.

Captura:
A captura print-entrega3.png precisa ser feita no seu próprio navegador após executar os testes; ela não foi fabricada nem incluída neste ZIP. Mostre a página com o JSON e a aba Network com OPTIONS 204 e GETs 200.

Importante: o cache de preflight pode variar conforme navegador e configurações. Não marque "Disable cache" durante esse teste.
