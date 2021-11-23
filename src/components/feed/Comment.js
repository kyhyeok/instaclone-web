import React from "react";
import { gql, useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "../shared";

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const CommentContainer = styled.div`
  margin-bottom: 8px;
`;

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

const DeleteCommentButton = styled.button`
  appearance: none;
  margin-left: 5px;
  background: #dc3545;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const Comment = ({ id, photoId, author, payload, isMine }) => {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok },
      },
    } = result;
    if (ok) {
      cache.evict({ id: `Comment:${id}` });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, {
    variables: {
      id,
    },
    update: updateDeleteComment,
  });

  const hashTagLink = payload.split(" ").map((word, index) =>
    /#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/.test(word) ? (
      <React.Fragment key={index}>
        <Link to={`/hashtags/${word}`}>{word} </Link>
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{word} </React.Fragment>
    )
  );
  const onDeleteClick = () => {
    deleteCommentMutation();
  };
  return (
    <CommentContainer>
      <Link to={`/users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
      <CommentCaption>{hashTagLink}</CommentCaption>
      {isMine ? (
        <DeleteCommentButton onClick={onDeleteClick}>X</DeleteCommentButton>
      ) : null}
    </CommentContainer>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  photoId: PropTypes.number,
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  isMine: PropTypes.bool,
};

export default Comment;
