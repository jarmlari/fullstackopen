sequenceDiagram
  participant browser
  participant server
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  server-->>browser: 302 Found, redirect /notes
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  server-->>browser: HTML document
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server-->>browser: CSS file
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  server-->>browser: js file
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/axe.js
  server-->>browser: axe.js
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  server-->>browser: data.json
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/highlighter.js
  server-->>browser: highlighter.js
