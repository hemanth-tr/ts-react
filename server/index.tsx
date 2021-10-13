import express from 'express';
import fs from 'fs';
import RDS from 'react-dom/server';
import App from '../src/app';
import filePaths from '../path.json';

const app = express();

app.use(express.static('public', { maxAge: 5000 }));

const reactTag = '<div id="react"></div>';

app.get('*', (req, res) => {

    const indexFile = filePaths.indexHtml;
    fs.readFile(indexFile, (err, data) => {

        if (err) {
            console.log(err);
            return;
        }

        const appContent = RDS.renderToStaticMarkup(<App />);
        const fileContent = data.toString();
        const markup = fileContent.replace(reactTag, `<div id="react">${appContent}</div>`)

        res.send(markup);
    });
});

app.listen(3000, 'localhost');