import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@kennynguyen/bar-chart-race-with-scrubber.js?v=3";
new Runtime().module(define, name => {
  if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-c13324a3"));
  if (name === "data") return new Inspector(document.querySelector("#observablehq-data-c13324a3"));
  if (name === "bars") return new Inspector(document.querySelector("#observablehq-bars-c13324a3"));
  if (name === "labels") return new Inspector(document.querySelector("#observablehq-labels-c13324a3"));
  if (name === "axis") return new Inspector(document.querySelector("#observablehq-axis-c13324a3"));
  if (name === "ticker") return new Inspector(document.querySelector("#observablehq-ticker-c13324a3"));
  if (name === "keyframes") return new Inspector(document.querySelector("#observablehq-keyframes-c13324a3"));
  if (name === "viewof keyframe") return new Inspector(document.querySelector("#observablehq-viewof-keyframe-c13324a3"));
  return ["update","names","rank","datevalues","color"].includes(name);
});