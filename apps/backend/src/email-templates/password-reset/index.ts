import fs from "fs";
import path from "path";
import mjml2html from "mjml";

const text = fs.readFileSync(path.resolve(__dirname, "./index.mjml"), {
  encoding: "utf-8",
});
export default mjml2html(text).html;
