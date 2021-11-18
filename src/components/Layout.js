import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
    margin: 0 auto;
    max-width: 930px;
    width: 100%;
    margin-top: 45px;
    padding: 0 20px;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
        </>
    );
};

export default Layout;
