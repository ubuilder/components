import { query, queryAttr, register } from "./helpers";

function runAction(actionString) {
  const [target, method] = actionString.split(".");

  if (target.startsWith("$")) {
    const [methodName, paramsStr = ")"] = target.split("(");
    const params = paramsStr
      .substring(0, paramsStr.length - 1)
      .split(",")
      .filter((x) => x !== "");

    window[methodName](...params);
  } else {
    queryAttr(document, `u-id=` + target, (targetEl) => {
      const [methodName, paramsStr = ")"] = method.split("(");
      const params = paramsStr
        .substring(0, paramsStr.length - 1)
        .split(",")
        .filter((x) => x !== "");

      targetEl["$" + methodName](...params);
    });
  }
}

export function Action($el) {
  Array.from($el.attributes).forEach((attribute) => {
    if (attribute.name.startsWith("u-on-")) {
      const trigger = attribute.name.substring(5);

      $el.addEventListener(trigger, (ev) => {
        attribute.value.split("|").map((str) => runAction(str));
      });
      //
    }
  });
}

query(document, "*", (el) => {
  Action(el);
});
