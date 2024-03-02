import React from "react";
import styles from "./Comment.module.css";
import PropTypes from "prop-types";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { formatDateToNow } from "../../helpers/formatDateToNow";
import { Button } from "../Button/Button";
import { useDeleteCommentByIdMutation } from "../../redux/commentApi";

export const Comment = ({
  createdAt,
  content,
  author,
  avatar,
  thumbsUp,
  thumbsDown,
  id,
}) => {
  const [deleteComment, { isLoading }] = useDeleteCommentByIdMutation();
  const handleDelete = (e) => {
    deleteComment(id);
  };
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={author} />
      <div className={styles.cardWrapper}>
        <div className={styles.cardBody}>
          <h3 className={styles.author}>{author}</h3>
          <p className={styles.content}>
            <span className={styles.blockquote}>"</span>
            {content}
            <span className={styles.blockquote}>"</span>
          </p>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.date}>{formatDateToNow(createdAt)}</span>
          <button onClick={handleDelete} type="button">
            {isLoading ? "..." : "Delete"}
          </button>
          <div className={styles.buttonBox}>
            <Button counter={thumbsUp} id={id}>
              <TiThumbsUp className={styles.icon} />
            </Button>

            <Button counter={thumbsDown} role="thumbsDown" id={id}>
              <TiThumbsDown className={styles.icon} />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

Comment.propTypes = {
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};
