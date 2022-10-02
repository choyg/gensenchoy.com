import {html} from '../html'

export default () => html`
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Hello</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      min-height: 100vh;
      font-size: 16px;
      color: rgb(15 23 42);
      background-color: #FAFAFA;
    }
    main {
      padding: 3rem;
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: rgb(248 250 252);
        background-color: #171717;
      }
    }
  </style>
</head>
<body>
  <main>
    <h1>bye.</h1>
  </main>  
</body>
</html>
`