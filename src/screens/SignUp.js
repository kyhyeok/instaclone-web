import {
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import AuthButton from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/PageTitle";
import { FacebookLoginButton, FatLink } from "../components/shared";
import { gql, useMutation } from "@apollo/client";
import routes from "../routes";
import { useHistory } from "react-router-dom";
import FormError from "../components/auth/FormError";
import { emailReg, numEnglishReg } from "../components/regExp";

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

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $firstName: String!
        $lastName: String
        $username: String!
        $email: String!
        $password: String!
    ) {
        createAccount(
            firstName: $firstName
            lastName: $lastName
            username: $username
            email: $email
            password: $password
        ) {
            ok
            error
        }
    }
`;

const SignUp = () => {
    const history = useHistory();
    const { register, handleSubmit, errors, formState, setError, getValues } =
        useForm({
            mode: "onChange",
        });
    const onCompleted = (data) => {
        const { username, password } = getValues();
        const {
            createAccount: { ok, error },
        } = data;
        if (!ok) {
            return setError("result", {
                message: error,
            });
        }
        history.push(routes.home, {
            message: "Account created. Please log in.",
            username,
            password,
        });
    };
    const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = (data) => {
        if (loading) {
            return;
        }
        const { firstName, lastName, username, email, password } = data;
        createAccount({
            variables: {
                firstName,
                lastName,
                username,
                email,
                password,
            },
        });
    };
    return (
        <AuthLayout>
            <PageTitle title="Sign up" />
            <FormBox>
                <HeaderContaineer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <Subtitle>
                        Sign up to see photos and videos from your friends.
                    </Subtitle>
                </HeaderContaineer>
                <FacebookLogin>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Log in with Facebook</span>
                </FacebookLogin>
                <Separator />
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        ref={register({
                            required: "First Name is required.",
                        })}
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <FormError message={errors?.firstName?.message} />
                    <Input
                        ref={register({})}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <Input
                        ref={register({
                            required: "username is required.",
                            minLength: {
                                value: 5,
                                message:
                                    "Username should be longer than 5 chars.",
                            },
                            pattern: {
                                value: numEnglishReg,
                                message: "invalid username",
                            },
                        })}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <FormError message={errors?.username?.message} />
                    <Input
                        ref={register({
                            required: "Email is required.",
                            pattern: {
                                value: emailReg,
                                message: "invalid email",
                            },
                        })}
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <FormError message={errors?.email?.message} />
                    <Input
                        ref={register({
                            required: "password is required.",
                        })}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <FormError message={errors?.password?.message} />
                    <AuthButton
                        type="submit"
                        value={loading ? "Loading..." : "Sign Up"}
                        disabled={!formState.isValid || loading}
                    />
                    <FormError message={errors?.result?.message} />
                </form>
            </FormBox>
            <BottomBox
                cta="Have an account?"
                linkText="Log in"
                link={routes.home}
            />
        </AuthLayout>
    );
};

export default SignUp;
