// ==UserScript==
// @name         🦊 MH - Load from localhost
// @namespace    https://github.com/hymccord
// @version      0.0.0
// @description  try to take over the world!
// @author       Xellis
// @match        https://www.mousehuntgame.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

"use strict";

const INJECT = true;

function log(...args) {
    console.log("%cLocalhost Userscript:", "color: purple; font-weight: bold", ...args);
}

log("Dev mode started");

async function main() {
    if (INJECT) {
        const inject = document.createElement('script');
        inject.src = 'http://localhost:6857/main.js';
        (document.head || document.documentBody).appendChild(inject);
    } else {
        const resp = await fetch("http://localhost:6857/main.js");
        const script = await resp.text();
        log("Got Dev script");
        // eslint-disable-next-line no-eval
        eval(script);
        log("Dev script evaled");
    }
}

try {
    await main();
} catch (e) {
    log("ERROR", e);
}
