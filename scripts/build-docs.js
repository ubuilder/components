import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "fs";
import { renderTemplate } from "@ulibs/router";

const files = readdirSync("./src/docs/pages");

if (!existsSync("./build/ui")) {
  mkdirSync("./build/ui", { recursive: true });
} else {
  rmSync("./build/ui", { recursive: true });
  mkdirSync("./build/ui");
}

for (let file of files) {
  if (file.endsWith(".js")) {
    import("./src/docs/pages/" + file).then((module) => {
      const page = renderTemplate(module.default({ prefix: "/components/" }));

      if (file == "index.js") {
        writeFileSync("./build/ui/" + "index.html", page);
      } else {
        if (!existsSync("./build/ui/" + file.replace(".js", ""))) {
          mkdirSync("./build/ui/" + file.replace(".js", ""));
        }

        writeFileSync(
          "./build/ui/" + file.replace(".js", "") + "/index.html",
          page
        );
      }
    });
  }
}

cpSync("./dist/ulibs.js", "./build/ui/ulibs.js");
cpSync("./dist/styles.css", "./build/ui/styles.css");
