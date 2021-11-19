import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/d/8dab4cb24eb8c6ce.js?v=3";
new Runtime().module(define, name => {
	if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-6c037dd6"));
	if (name === "viewof keyframe") return new Inspector(document.querySelector("#observablehq-viewof-keyframe-6c037dd6"));
	if (name === "data") return new Inspector(document.querySelector("#observablehq-data-6c037dd6"));
	if (name === "names") return new Inspector(document.querySelector("#observablehq-names-6c037dd6"));
	return ["update","rank","keyframes","ticker","datevalues","color","bars"].includes(name);
});