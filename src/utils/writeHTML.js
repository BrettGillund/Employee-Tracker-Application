const fs = require('fs/promises');

function writeBaseHtml () {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <link rel="stylesheet" type="text/css" href="styles.css">
      <title>Document</title>
    </head>
    <body>
      <header>
      <h1>Employees</h1>
      </header>
      inject employees here -- NOTE
      <footer>
      <p>0.0.1</p>
      </footer>
      <script src="scripts.js"></script>
    </body>
    </html>
    `;
}