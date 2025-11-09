Projeto exemplo: Next.js (TypeScript) como servidor API + Angular (TypeScript) como cliente.

Estrutura:
- server-next/   -> Next.js (TypeScript) API na porta 3000
- client-angular/-> Angular (TypeScript) app na porta 4200

Instruções:
1) Abra dois terminais.
2) Server: 
   cd server-next
   npm install
   npm run dev
3) Client:
   cd client-angular
   npm install
   npm run start
4) Acesse: http://localhost:4200 (cliente) que consome a API em http://localhost:3000/api/mensagem

Observações:
- Estes são skeletons mínimos. Após npm install, poderá usar os comandos apresentados.
- Se preferir rodar ambos com um único comando, instale 'concurrently' na raiz e ajuste scripts.


## 🏃 Rodar ambos simultaneamente

Na raiz do projeto, execute:

```bash
npm install
npm run install-all
npm run dev
```

Isso iniciará:
- Servidor Next.js na porta 3000
- Cliente Angular na porta 4200
