import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import AuthButton from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator.js";
import { FacebookLoginButton } from "../components/shared";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";

const Login = () => {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange",
    });
    const onSubmitValid = (data) => {};

    return (
        <AuthLayout>
            <PageTitle title="Login" />
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        ref={register({
                            required: "Username is required.",
                            minLength: {
                                value: 5,
                                message: "Username should be longer than 5 chars.",
                            },
                        })}
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
                        name="password"
                        type="password"
                        placeholder="Password"
                        hasError={Boolean(errors?.username?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <AuthButton type="submit" value="Log in" disabled={!formState.isValid} />
                </form>
                <Separator />
                <FacebookLoginButton>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Log in with Facebook</span>
                </FacebookLoginButton>
            </FormBox>
            <BottomBox cta="Don't have an account?" linkText="Sign Up" link={routes.signUp} />
        </AuthLayout>
    );
};

export default Login;
