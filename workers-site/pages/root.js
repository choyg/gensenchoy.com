import { html } from "../html.js";

/**
 *
 * @param {Request} request
 * @returns
 */
export const root = (request) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Hello</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          min-height: 100vh;
          font-size: 16px;
          color: rgb(15 23 42);
          background-color: #fafafa;
        }
        main {
          padding: 3rem;
        }
        p {
          padding: 4px 0px;
          margin: 0;
        }
        .divider {
          margin: 1rem 0px;
          height: 1px;
          width: 40vw;
          background-color: #cbd5e1;
        }
        @media (prefers-color-scheme: dark) {
          body {
            color: rgb(248 250 252);
            background-color: #171717;
          }
          .divider {
            background-color: #475569;
          }
        }
      </style>
    </head>
    <body>
      <main>
        <h1>hello.</h1>
        <p>${new Date().toISOString()}</p>
        <p><b>${request.headers.get("x-real-ip")}</b></p>
        ${[...request.headers.entries()]
          .map(([key, value]) => `<p>${key}: ${value}</p>`)
          .join("\n")}
        <div class="divider"></div>

        <p>ASN: ${request.cf.asn}</p>
        <p>ASN Name: ${request.cf.asOrganization}</p>
        <p>TCP RTT: ${request.cf.clientTcpRtt}</p>
        <p>Zipcode: ${request.cf.postalCode}</p>
      </main>
    </body>
  </html>
`;
