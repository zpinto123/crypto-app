import { start } from "./App";

// Enable network requests with chrome network tab
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

start();
