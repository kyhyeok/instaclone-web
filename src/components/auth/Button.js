import styled from "styled-components";
import { Button } from "../shared";

const AuthButton = styled(Button)`
    opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

export default AuthButton;
