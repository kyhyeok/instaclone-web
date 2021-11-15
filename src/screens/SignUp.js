import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import AuthButton from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import { FacebookLoginButton, FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContaineer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled(FatLink)`
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
`;

const FacebookLogin = styled(FacebookLoginButton)`
    width: 100%;
    border-radius: 3px;
    border: none;
    margin-top: 30px;
    background-color: ${(props) => props.theme.accent};
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    cursor: pointer;
`;

const SignUp = () => {
    return (
        <AuthLayout>
            <FormBox>
                <HeaderContaineer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>
                </HeaderContaineer>
                <FacebookLogin>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Log in with Facebook</span>
                </FacebookLogin>
                <Separator />
                <form>
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="username" />
                    <Input type="password" placeholder="Password" />
                    <AuthButton type="submit" value="Sign Up" />
                </form>
            </FormBox>
            <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
        </AuthLayout>
    );
};

export default SignUp;
