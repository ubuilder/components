import { register } from "./helpers";

export function Action($el) {
  Array.from($el.attributes).forEach((attribute) => {
    if (attribute.name.startsWith("u-on-")) {
      const trigger = attribute.name.substring(5);
      const [target, method] = attribute.value.split(".");

      $el.addEventListener(trigger, (ev) => {
        if (target === "$methods") {
          console.log("run global method"), target;
        }

        queryAttr(document, `u-id=` + target, (targetEl) => {
          const [methodName, paramsStr = ")"] = method.split("(");
          const params = paramsStr
            .substring(0, paramsStr.length - 1)
            .split(",")
            .filter((x) => x !== "");
          console.log({ target, methodName, params });
          targetEl["$" + methodName](...params);
        });
      });
    }
  });
}

query(document, "*", (el) => {
  Action(el);
});
