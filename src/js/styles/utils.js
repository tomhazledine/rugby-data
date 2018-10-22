import { css } from "react-emotion";
// import { transparentize } from "polished";

export const buttonReset = css`
    appearance: none;
    background: none;
    display: inline-block;
    border: none;
    border-radius: 0;
    font-family: inherit;
    font-size: 1em;
    &:focus {
        outline: none;
    }
`;

// Clearfix
export const cf = css`
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
    // For IE 6/7 only – Include this rule to trigger hasLayout and contain floats.
    zoom: 1;
`;

export const imgBg = css`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

// General Utilities

// Hiding things sensibly
// Hide from both screenreaders and browsers:h5bp.com/u
export const hidden = css`
    display: none !important;
    visibility: hidden;
`;
// Hide only visually, but have it available for screenreaders
export const visuallyhidden = css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    // Extends the .visuallyhidden class to allow the element to be focusable
    // when navigated to via the keyboard
    &.focusable:active,
    &.focusable:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
    }
`;
// Hide visually and from screenreaders, but maintain layout
export const invisible = css`
    visibility: hidden;
`;

// Clearfix
export const clearfix = `
    ${cf}
`;
