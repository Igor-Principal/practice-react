import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetAllCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";

// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const { data: comments, isFetching } = useGetAllCommentsQuery();
  const filter = useSelector(selectFilter);
  const getFilteredComments = (comments, filter) => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <Grid>
      {isFetching && <Loader />}
      {comments &&
        getFilteredComments(comments, filter) &&
        getFilteredComments(comments, filter).map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
