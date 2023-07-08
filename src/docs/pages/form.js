import { Button, ButtonGroup, Icon, Form, Input, View, Checkbox, CheckboxGroup } from "../../components/index.js";
import { DocPage } from "../components/DocPage.js";
import { Section } from "../components/Section.js";
import { tag } from "@ulibs/router";

// function Icon({ name }) {
//   return View({
//     tag: "span",
//     onMount($el, props) {
//       fetch(`https://unpkg.com/@tabler/icons@2.19.0/icons/${props}.svg`)
//         .then((res) => res.text())
//         .then((svg) => {
//           $el.outerHTML = svg.replace("icon icon-tabler", "u-icon");
//         });
//     },
//     component: "icon",
//     jsProps: name,
//   });
// }

export default function () {
  return DocPage({ name: "Button" }, [
    Section({title: 'input'}, [
        Input({value: 'Hello'}),
    ]),
    Section({title: 'form'}, [
        Form([
            Input({name: 'username'}),
            Input({name: 'password'}),

            View({border: true, p: 'sm', mb: 'sm'}, [
                View([
                    View(['Username: ', View({tag: 'span', 'u-text': 'username'})]),
                    View(['password: ', View({tag: 'span', 'u-text': 'password'})]),
                ])
            ]),
            
            Button({type: 'submit'}, 'Submit')
        ])
    ]),
    Section({title: 'form + checkbox'}, [
        Form([
            Input({name: 'username'}),
            Input({name: 'password'}),
            CheckboxGroup({name: 'group', items: ['one', 'two', 'three', 'four'], label: 'Checkbox group'}),
            Checkbox({name: 'remember_me', label: 'Remember me'}),

            View({border: true, p: 'sm', mb: 'sm'}, [
                View([
                    View(['Username: ', View({tag: 'span', 'u-text': 'username'})]),
                    View(['password: ', View({tag: 'span', 'u-text': 'password'})]),
                    View(['Remember Me: ', View({tag: 'span', 'u-text': 'remember_me'})]),
                    View(['Group: ', View({tag: 'span', 'u-text': 'JSON.stringify(group)'})]),
                    View(['Selected: ', View({tag: 'span', 'u-text': 'group.length'})])
                ])
            ]),
            
            Button({type: 'submit', color: 'primary'}, 'Submit')

        ])
    ])
]);
}
