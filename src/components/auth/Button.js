import styled from "styled-components";

const SButton = styled.input`
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

const Button = (props) => {
    return <SButton {...props}></SButton>;
};

export default Button;
