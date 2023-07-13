import { Base } from "../utils.js";
import { View } from "./View.js";

/**
* @type {import('.').Container}
*/
export const Container = Base(($props, $slots) => {
  $props.component = $props.component ?? "container";

  $props.cssProps = {
    size: $props.size,
  };
  delete $props["size"];

  return View($props, $slots);
});

/**
* @type {import('.').Row}
*/
export const Row = Base(($props, $slots) => {
  $props.component = $props.component ?? "row";
  $props.gutter = $props.gutter ?? "md";

  $props.cssProps = {
    gutter: $props.gutter,
  };
  delete $props["gutter"];

  return View($props, $slots);
});

/**
* @type {import('.').Col}
*/
export const Col = Base(($props, $slots) => {
  $props.component = $props.component ?? "col";

  $props.cssProps = {
    col: $props.col,
    colXs: $props.colXs,
    colSm: $props.colSm,
    colMd: $props.colMd,
    colLg: $props.colLg,
    colXl: $props.colXl,

    offset: $props.offset,
    offsetXs: $props.offsetXs,
    offsetSm: $props.offsetSm,
    offsetMd: $props.offsetMd,
    offsetLg: $props.offsetLg,
    offsetXl: $props.offsetXl,
  };
  delete $props["col"];

  delete $props["colXs"];
  delete $props["colMd"];
  delete $props["colLg"];
  delete $props["colSm"];
  delete $props["colXl"];

  delete $props["offsetXs"];
  delete $props["offsetMd"];
  delete $props["offsetLg"];
  delete $props["offsetSm"];
  delete $props["offsetXl"];

  return View($props, $slots);
});
