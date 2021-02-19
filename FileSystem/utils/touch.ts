import * as fs from "fs";
import * as util from "util";

import { writeFile } from "../evo_/wirte_file";

export default function touch(path: string) {
    writeFile(path,"")
    .then(()=>{console.log("suc")})
    .catch((err)=>{console.log(err)});
}

