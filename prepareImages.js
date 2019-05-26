/* eslint-disable */
const fs = require("fs");
const files = fs
  .readdirSync("./src/assets/icons/crypto/color")
  .filter(x => x.includes("png"));
const ex =
  "{\n" +
  files.map(x => `"${x.split(".png")[0]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("./src/assets/icons/crypto/color/index.js", res);
