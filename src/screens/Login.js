import {
    faFacebookSquare,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import AuthButton from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator.js";
import { FacebookLoginButton, Notification } from "../components/shared";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router-dom";

const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

const Login = () => {
    const location = useLocation();

    const {
        register,
        handleSubmit,
        errors,
        formState,
        getValues,
        setError,
        clearErrors,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: location?.state?.username || "",
            password: location?.state?.password || "",
        },
    });
    const onCompleted = (data) => {
        const {
            login: { ok, token, error },
        } = data;
        if (!ok) {
            return setError("result", {
                message: error,
            });
        }
        if (token) {
            logUserIn(token);
        }
    };
    const [login, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = () => {
        if (loading) {
            return;
        }
        const { username, password } = getValues();
        login({
            variables: {
                username,
                password,
            },
        });
    };
    const clearLoginError = () => {
        clearErrors("result");
    };
    return (
        <AuthLayout>
            <PageTitle title="Login" />
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <Notification message={location?.state?.message} />
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        ref={register({
                            required: "Username is required.",
                            minLength: {
                                value: 5,
                                message:
                                    "Username should be longer than 5 chars.",
                            },
                        })}
                        onChange={clearLoginError}
                        name="username"
                        type="text"
                        placeholder="Username"
                        hasError={Boolean(errors?.username?.message)}
                    />
                    <FormError message={errors?.username?.message} />
                    <Input
                        ref={register({
                            required: "Password is required.",
                        })}
                        onChange={clearLoginError}
                        name="password"
                        type="password"
                        placeholder="Password"
                        hasError={Boolean(errors?.username?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <AuthButton
                        type="submit"
                        value={loading ? "Loading..." : "Log In"}
                        disabled={!formState.isValid || loading}
                    />
                    <FormError message={errors?.result?.message} />
                </form>
                <Separator />
                <FacebookLoginButton>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Log in with Facebook</span>
                </FacebookLoginButton>
            </FormBox>
            <BottomBox
                cta="Don't have an account?"
                linkText="Sign Up"
                link={routes.signUp}
            />
        </AuthLayout>
    );
};

export default Login;
