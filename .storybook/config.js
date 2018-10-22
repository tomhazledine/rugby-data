import { configure } from "@storybook/react";

function loadStories() {
    require("../stories/graphs.js");
}

configure(loadStories, module);
