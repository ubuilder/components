import {
  queryAttr,
  query,
  toggleAttr,
  removeAttr,
  register,
  getAttr,
  addMethods,
} from "./helpers";

const header = "u-accordion-header";
const content = "u-accordion-content";
const headerOpen = "u-accordion-header-open";
const contentOpen = "u-accordion-content-open";

export function Accordion($el) {
  function toggle(id) {
    const persistent = getAttr($el, "persistent");

    if (!persistent) {
      // remove open attribute
      queryAttr($el, headerOpen, (el) => removeAttr(el, headerOpen, ""));
      queryAttr($el, contentOpen, (el) => removeAttr(el, contentOpen, ""));
    }

    // toggle open of header
    toggleAttr(el, headerOpen);

    // toggle open of related content
    query($el, `[${content}][id="${id}"]`, (el) => toggleAttr(el, contentOpen));
  }

  queryAttr($el, header, (el) => {
    el.onclick = () => {
      const id = getAttr(el, "id");

      toggle(id);
    };
  });

  return addMethods($el, toggle);
}

register("u-accordions", Accordion);
