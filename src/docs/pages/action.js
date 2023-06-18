import {
  Button,
  Modal,
  Input,
  ModalBody,
  View,
} from "../../components/index.js";
import { DocPage } from "../components/DocPage.js";

export default function () {
  return DocPage({ name: "Action" }, [
    Button(
      { m: "xl", color: "primary", "u-on-click": "my-modal.open" },
      "Toggle Modal"
    ),
    Modal({ "u-id": "my-modal" }, [
      ModalBody([
        Input({ "u-bind-value": "name", label: "name" }),
        Input({ "u-bind-value": "username", label: "username" }),
        Button(
          {
            "u-on-click": "my-modal.close|$log(closing...)",
            color: "error",
          },
          "Close"
        ),
        Button(
          {
            "u-on-click": "my-modal.close|$login|$log(login)",
            color: "primary",
          },
          "Login"
        ),
      ]),
    ]),

    View(
      { tag: "script" },
      `    
    function $log(...params) {
        console.log('log: ', ...params)
    }

    function $login(...params) {
        console.log('login: ', params[0])
    }

    `
    ),
  ]);
}
// {
/* <button u-button u-view-m="xl" u-button-color="primary" u-on-click="my-modal.open">Toggle</button>

<div u-modal u-id="my-modal">
    <div u-modal-backdrop></div>
    <div u-modal-content>
        <div u-modal-body>

            name: <input u-on-value="form.name" />
            username: <input u-on-value="form.username" />

            Modal content <span u-bind-text="name"></span>
            <button u-button u-button-color="error" u-on-click="my-modal.close(name,2)">
                Close
            </button>
            <button u-button u-button-color="primary" u-on-click="$methods.login(form)">Login</button>
        </div>

    </div>
</div> */
// }
