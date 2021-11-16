import styled from "styled-components";

const BaseFormError = styled.span`
    color: tomato;
    font-weight: 600;
    font-size: 12px;
    margin: 5px 0px 10px 0px;
    width: 100%;
`;

const FormError = ({ message }) => {
    return message === "" || !message ? null : <BaseFormError>{message}</BaseFormError>;
};

export default FormError;
