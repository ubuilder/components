import { addMethods, attr, getAttr, register } from "./helpers";

export function Icon($el) {
  function set(name) {
    fetch(`https://unpkg.com/@tabler/icons@2.19.0/icons/${name}.svg`)
      .then((res) => res.text())
      .then((svg) => {
        const size = attr($el, "u-icon-size");
        $el.outerHTML = svg.replace(
          "<svg xmlns",
          `<svg u-icon u-icon-size="${size}" xmlns`
        );
      });
  }

  const name = getAttr($el, "name");
  set(name);

  return addMethods($el, { set });
}

register("u-icon", Icon);
