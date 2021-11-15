import styled from "styled-components";

const SInput = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 8px;
    background-color: #fafafa;
    border: 0.5px solid ${(props) => props.theme.borderColor};
    margin-top: 5px;
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
`;

const Input = (props) => {
    return <SInput {...props}></SInput>;
};

export default Input;