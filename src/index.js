import "./index.pug";
import "./console.css"
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/white.css'
import Reveal from "reveal.js"
import hljs from "highlight.js";
import "highlight.js/styles/idea.css";

Reveal.initialize({
    transitionSpeed: "fast"
});
hljs.initHighlightingOnLoad();
