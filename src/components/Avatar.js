import styled from "styled-components";

const SAvatar = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2c2c2c;
    overflow: hidden;
`;

const Image = styled.img`
    max-width: 100%;
    align-items: center;
`;

const Avatar = ({ url = "" }) => {
    return <SAvatar>{url !== "" ? <Image src={url} /> : null}</SAvatar>;
};

export default Avatar;
