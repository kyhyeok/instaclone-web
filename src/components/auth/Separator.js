import styled from "styled-components";

const SSeparator = styled.div`
    margin: 30px 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    div {
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.borderColor};
    }
    span {
        margin: 0 10px;
        font-weight: 600;
        font-size: 12px;
        color: ${(props) => props.theme.borderColor};
    }
`;

const Separator = () => {
    return (
        <SSeparator>
            <div></div>
            <span>Or</span>
            <div></div>
        </SSeparator>
    );
};

export default Separator;
