import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const siteUrl = "https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook";

const site = lume({
  src: "./docs/src",
  location: new URL(siteUrl),
});

site.use(lumocs());

export default site;
