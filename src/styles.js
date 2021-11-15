import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
    fontColor: "#1c1c1c",
    bgColor: "lightgray",
};

export const darkTheme = {
    fontColor: "lightgray",
    bgColor: "#1c1c1c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
        all: unset;
    }
    * {
        box-sizing: border-box
    }
    body {
        background-color: #fafafa;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
    }
    a {
        text-decoration: none;
    }
`;
