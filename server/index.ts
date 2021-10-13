import express from 'express';

const app = express();

app.get('*', (req, res) => {
    const markup = `
    <!DOCTYPE html>
    <html>
        <head>
            <title></title>
        </head>
        <body>
            <div id="react">Hello world!</div>
        </body>
    </html>
    `;

    res.send(markup);
});

app.listen(3000, 'localhost');