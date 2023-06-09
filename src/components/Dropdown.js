import { Base } from "../utils.js";
import { View } from "./View.js";
import { Icon } from "./Icon.js";
import { Button } from "./Button.js";

export const Dropdown = Base({
  render($props, $slots) {
    const {
      component = "dropdown",
      label,
      size = "md",
      arrow = true,
      trigger = "click", //click or hover
      open = false,
      ...restProps
    } = $props;

    const props = {
      ...restProps,
      component,
      arrow,
      trigger,
      "u-data":
        "{ open: false, trigger: 'hover', timeout: undefined, toggle(){if(this.open){ return this.close()} else{ return this.show()}},show(){this.open = true; console.log('open', this.open)},close(){this.open = false; console.log('close', this.open)},}",
      "u-ref": "dropdown",
      "u-on:click": "toggle()",
      "u-on:hover": "if(trigger == 'hover'){clearTimeout(timeout); open()}",
      "u-on:hover.outside": "timeout = setTimout(()=>{close()},300)",
      cssProps: {
        size,
      },
    };

    if (trigger == "hover") {
      props["u-on:hover"] = "open()";
    }

    $slots = [DropdownLabel({ text: label, arrow }), $slots];

    return View(props, $slots);
  },
});

export const DropdownItem = Base({
  render($props, $slots) {
    const {
      component = "dropdown-item",
      label = undefined,
      size = "md",
      href = undefined,
      icon = undefined,
      ...restProps
    } = $props;

    const props = {
      ...restProps,
      component,
      href,
      icon,
      cssProps: {
        size,
      },
    };

    $slots = [
      icon && Icon({ name: icon }),
      label && View({ tag: "span" }, label),
      $slots,
    ];

    let content = href
      ? View({ ...props, tag: "a", href }, $slots)
      : Button(props, $slots);
    return content;
  },
});

export const DropdownPanel = Base({
  render($props, $slots) {
    const { component = "dropdown-panel", size = "md", ...restProps } = $props;

    const props = {
      ...restProps,
      component,
      "u-show": "open",
      "@click.outside": "close()",
      "@hover": "clearTimeout(timeout)",
      "@hover.outside":
        "if(trigger == 'hover') {timeout = setTimeout(()=>{close()}, 300)}",
      cssProps: {
        size: size,
      },
    };

    return View(props, $slots);
  },
});

const DropdownLabel = Base({
  render($props, $slots) {
    const {
      component = "dropdown-label",
      text,
      arrow = true,
      size = "md",
      ...restProps
    } = $props;

    const props = {
      ...restProps,
      component,
      cssProps: {
        size: size,
      },
    };

    $props = [
      View({ tag: "span" }, text),
      arrow
        ? [
            View(
              { tag: "span", "u-arrow-down": "true", "u-show": "!open" },
              ">"
            ),
            View({ tag: "span", "u-arrow-up": "true", "u-show": "open" }, "<"),
          ]
        : "",
      $slots,
    ];

    return View(props, $props);
  },
});
