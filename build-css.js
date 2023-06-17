import postcss from "postcss";
import mixins from "postcss-mixins";
import imports from "postcss-import";
import insert from "postcss-insert";
import tailwindcss from 'tailwindcss';

import fs from "fs";

// const file = '@define-mixin red {color: red};.blue {@mixin red;}; @define-mixin button { @mixin red;}; .test { @mixin button; }'
const file = "./src/scss/index.css";



// @define-mixin colors $name $variable {
//     [u-$(name)="primary"] {
//       --$(variable): var(--color-primary);
//     }  
//     [u-$(name)="secondary"] {
//       --$(variable): var(--color-secondary);
//     }
//     [u-$(name)="warning"] {
//       --$(variable): var(--color-warning);
//     }
//     [u-$(name)="info"] {
//       --$(variable): var(--color-info);
//     }
//     [u-$(name)="danger"] {
//       --$(variable): var(--color-danger);
//     }
//     [u-$(name)="success"] {
//       --$(variable): var(--color-success);
//     }
//   }
    
const css = `


    @mixin colors name value;

`

const colors = ['primary', 'secondary','info', 'warning', 'danger', 'success']

// mixins({
//     // mixins: {
//     //     colors(mixin, dir) {
//     //         const params = mixin.params.split(' ');
//     //         const name = params[1]
//     //         const property = params[2]
//     //         for(let color of colors) {
//     //             var rule = postcss.rule({ selector: `[${name}="${color}"]` });
//     //             rule.append({
//     //                 prop:  '--' + property,
//     //                 value: 'var(--color-' + color + ');'
//     //             });
//     //             mixin.parent.append(rule)
//     //         }
//     //     }
//     // }
// })

const sizes = {
    "xxs": (0.25 * 1.5) + 'rem',
    "xs": (0.5 * 1.5) + 'rem',
    "sm": (0.75 * 1.5) + 'rem',
    "md": (1 * 1.5) + 'rem',
    "lg": (1.5 * 1.5) + 'rem',
    "xl": (2 * 1.5) + 'rem',
    "2xl": (3 * 1.5) + 'rem',
    "3xl": (4 * 1.5) + 'rem',
    "4xl": (6 * 1.5) + 'rem',
    "5xl": (8 * 1.5) + 'rem',
    "6xl": (2 * 1.5) + 'rem',
}

postcss([imports({ root: "./src/scss" }), tailwindcss('./tailwind.config.js')])
//   .process(css)
  .process(fs.readFileSync(file, "utf-8"))
  .then((result) => {
    // console.log(result.css)
    fs.writeFileSync("./build/styles.css", result.css);
  });
