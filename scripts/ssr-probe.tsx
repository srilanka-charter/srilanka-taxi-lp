import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";

const route = process.argv[2] || "/";
Object.assign(globalThis, { React });
const { default: App } = await import("../client/src/App");
const html = renderToString(<Router ssrPath={route}><App /></Router>);

if (!html.includes("<h1")) {
  throw new Error(`SSR output for ${route} does not contain an H1`);
}

console.log(JSON.stringify({ route, length: html.length, hasH1: html.includes("<h1") }));
