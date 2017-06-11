import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';
import * as express from 'express';
import * as path from 'path';
import { ngUniversalEngine } from './universal-engine';
enableProdMode();
const server = express();
// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [AppServerModuleNgFactory]
}));
// set default view directory
server.set('views', 'src');
// handle requests for routes in the app.  ngExpressEngine does the rendering.

server.get(['/'], (req, res) => {
    res.render('index-aot.html', {req});
});
// handle requests for static files
server.get(['/*.js', '/*.css', '/*.html'], (req, res, next) => {
    let fileName: string = req.originalUrl;
    console.log(fileName);
    let root = fileName.startsWith('/node_modules/') ? '.' : 'src';
    res.sendFile(fileName, { root: root }, function (err) {
        if (err) {
            next(err);
        }
    });
});

const port = process.env.PORT || 3200;
server.listen(port, () => {
    console.log('listening on port ' + port);
});