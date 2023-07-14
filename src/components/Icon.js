import { Base } from "../utils.js";
import { View } from "./View.js";

export const Icon = Base({
  render({ name, size = "md" }) {
    const result = View({
      tag: "span",
      component: "icon",
      cssProps: { size },
      name,
    });
    return result;
  },
});
