import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
    accent: "#0095f6",
    bgColor: "#f2f2f2",
    fontColor: "rgb(38, 38, 38)",
    borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
    fontColor: "white",
    borderColor: "#0095f6",
    bgColor: "#000",
    accent: "#0095f6",
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
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        color: ${(props) => props.theme.fontColor};
    }
    a {
        text-decoration: none;
    }
`;
