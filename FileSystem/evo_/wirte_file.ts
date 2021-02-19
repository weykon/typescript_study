import * as fs from "fs";
import * as util from "util";
export const writeFile = util.promisify(fs.writeFile);
writeFile("./newFile.txt", "")
  .then(() => {
    console.log("suc");
  })
  .catch((err) => {
    console.log(err);
  });


  