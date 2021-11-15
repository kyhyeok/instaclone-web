import styled from "styled-components";

export const BaseBox = styled.div`
    background-color: white;
    border: 1px solid ${(props) => props.theme.borderColor};
    width: 100%;
`;

export const FatLink = styled.span`
    font-weight: 600;
    color: rgb(142, 142, 142);
`;

export const Button = styled.input`
    width: 100%;
    border-radius: 3px;
    border: none;
    margin-top: 15px;
    background-color: ${(props) => props.theme.accent};
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    cursor: pointer;
`;

export const FacebookLoginButton = styled.div`
    color: #385285;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 18px;
    }
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;
