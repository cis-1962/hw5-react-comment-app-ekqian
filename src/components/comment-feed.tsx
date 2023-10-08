import { useState } from 'react';
import CommentForm from './comment-form';
import RecursiveComment, { Comment } from './comment';

function CommentFeed() {
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <div>
      <CommentForm
        addComment={(comment) => setComments([comment, ...comments])}
      />
      {comments.map((comment) => (
        <RecursiveComment
          name={comment.name}
          text={comment.text}
          depth={1}
          key={1000 * Math.random()}
        />
      ))}
    </div>
  );
}

export default CommentFeed;
