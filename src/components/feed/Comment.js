import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "../shared";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  a::after,
  span::after {
    content: " ";
  }
`;

const Comment = ({ author, payload }) => {
  const hashTagLink = payload.split(" ").map((word, index) =>
    /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/.test(word) ? (
      <React.Fragment key={index}>
        <Link to={`/hashtags/${word}`}>{word} </Link>
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{word} </React.Fragment>
    )
  );
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>{hashTagLink}</CommentCaption>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
