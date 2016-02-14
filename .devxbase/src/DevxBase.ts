/// <reference path="../../typings/main/ambient/node/node.d.ts" />

import Main = require('./Main');

var main: Main = null;

export function getMain(): Main {
    if (main === null) {
        main = new Main();
    }
    return main;
}