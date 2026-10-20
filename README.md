# Atlante — IA a scuola

Pagina editoriale a confronto tra Italia, media europea e Australia sul ruolo dell'intelligenza
artificiale nella scuola secondaria di secondo grado, con il quadro normativo del
D.Lgs. 179/2026 (artt. 36–38).

**Realizzato da Prof. Giovanni Riefolo** — Referente per l'innovazione digitale,
IIS Ferraris Fermi Verona.

## Link pubblici

- Sito: <https://riefolog-cyber.github.io/DecretoLegislativo179/>
- Codice sorgente: <https://github.com/riefolog-cyber/DecretoLegislativo179>

Il sito viene pubblicato automaticamente da GitHub Actions: ogni push su `main` ricostruisce
`packages/web` e lo deploya su GitHub Pages.

## Struttura

Progetto Bun + Turborepo. Il pacchetto `packages/web` contiene API, database e interfaccia web;
`packages/mobile` è un client Expo; `packages/desktop` è una shell Electron attorno all'app web.
I servizi usano le porte fisse definite in `__ports.cjs` e l'endpoint di health check è `/api/health`.

Le segreti stanno nel file `.env` alla root. I valori letti dal browser devono usare il prefisso `VITE_`.

## Comandi

- `bun run dev` avvia l'app web
- `bun run dev:desktop` e `bun run dev:mobile` avviano i client di piattaforma
- `bun run build` compila ogni pacchetto
- `bun run start` avvia o riavvia il server di produzione
- `bun run stop` ferma il server di produzione
- `bun run lint` e `bun run typecheck` validano il progetto
- I comandi `db:generate`, `db:migrate` e `db:push` gestiscono il database

I comandi con prefisso `internal:` servono alla manutenzione del template.

## Deploy

Il build statico si genera con `bun run build:web` e finisce in `packages/web/dist`.
Per GitHub Pages la variabile `VITE_BASE_PATH` imposta il percorso pubblico
(ad esempio `/DecretoLegislativo179/`): il router (`wouter`) si adatta automaticamente al base path.
