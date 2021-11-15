import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
    accent: "#0095f6",
    borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
    borderColor: "#0095f6",
    accent: "rgb(219, 219, 219)",
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
        color: rgb(38, 38, 38)
    }
    a {
        text-decoration: none;
    }
`;
