import express from 'express';
import fs from 'fs';
import filePaths from '../path.json';

const app = express();

const reactTag = '<div id="react"></div>';

app.get('*', (req, res) => {

    const indexFile = filePaths.indexHtml;
    fs.readFile(indexFile, (err, data) => {
        console.log(indexFile);

        if (err) {
            console.log(err);
            return;
        }

        res.send(data.toString());
    });
});

app.listen(3000, 'localhost');