// Update components to use Redux actions and state
// Example: CommentSection.js
import React from 'react';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../Redux/ActionsType.jsx'; // Action creator for adding comments

const CommentSection = (props) => {
  const { comments, addComment } = props;

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Dispatch action to add comment
    addComment('New comment'); // Pass the comment text here
  };

  return (
    <div>
      <h2>Comment Section</h2>
      <form onSubmit={handleCommentSubmit}>
        {/* Your comment input form */}
      </form>
      {comments.map((c, index) => (
        <p key={index}>{c}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(ADD_COMMENT(comment)),
  // Add other action dispatchers here
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
