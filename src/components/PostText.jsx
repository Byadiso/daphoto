import React, { useState } from 'react';

const PostText = () => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Text posted:', text);
    setText('');
  };

  return (
    <div>
      <h2>Post Text</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostText;
