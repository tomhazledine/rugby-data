import { css } from "react-emotion";

import * as utils from "./utils";
import defaultColors from "./colours";

const globals = css`
    .visuallyhidden {
        ${utils.visuallyhidden};
    }
    // Global Box Sizing
    box-sizing: border-box;
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    font-size: 16px;
    color: ${defaultColors.black};
    button {
        font-family: inherit;
    }
    a {
        text-decoration: none;
        color: ${defaultColors.black};
        transition: color 0.2s;
        &:hover {
            color: ${defaultColors.black};
        }
    }
    h2 {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
`;

export default globals;
