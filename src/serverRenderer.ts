import { Response, Request } from 'express';

function renderHTML(): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <title>React SSR</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
 `;
}

export default (req: Request, res: Response) => {
  res.send(renderHTML());
};