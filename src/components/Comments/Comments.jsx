import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetAllCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";
// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const { data: comments, isFetching } = useGetAllCommentsQuery();
  return (
    <Grid>
      {isFetching && <Loader />}
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
