```mermaid
sequenceDiagram
  participant browser
  participant server
  browser->>browser: Render new note
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  server-->>browser: "note created"

```
