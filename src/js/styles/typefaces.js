import { css } from "react-emotion";

export const typefaces = css`
    @font-face {
        font-family: "Decima";
        src: url("./fonts/decima-bold-webfont.eot");
        src: url("./fonts/decima-bold-webfont.eot?#iefix")
                format("embedded-opentype"),
            url("./fonts/decima-bold-webfont.woff") format("woff"),
            url("./fonts/decima-bold-webfont.ttf") format("truetype");
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: "Decima";
        src: url("./fonts/decima-light-webfont.eot");
        src: url("./fonts/decima-light-webfont.eot?#iefix")
                format("embedded-opentype"),
            url("./fonts/decima-light-webfont.woff") format("woff"),
            url("./fonts/decima-light-webfont.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "DecimaMono";
        src: url("./fonts/decimamono-light-webfont.eot");
        src: url("./fonts/decimamono-light-webfont.eot?#iefix")
                format("embedded-opentype"),
            url("./fonts/decimamono-light-webfont.woff") format("woff"),
            url("./fonts/decimamono-light-webfont.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
`;

export const display = css`
    font-family: "Decima", Helvetica, Arial, sans-serif;
    font-weight: normal;
`;

export const utility = css`
    font-family: "DecimaMono", "Decima", Helvetica, Arial, sans-serif;
`;
