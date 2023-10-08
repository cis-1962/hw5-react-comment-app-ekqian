import { useState } from 'react';
import Counter from './counter';
import CommentForm from './comment-form';

export type Comment = {
  name: string;
  text: string;
  depth: number;
};

function RecursiveComment({ name, text, depth }: Comment) {
  const [showReply, setShowReply] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  return (
    <div className="border-2 border-gray-800">
      <div className="px-4 py-2 flex flex-row place-items-start justify-between ">
        <div className="items-start">
          <p className="text-blue-800">{name}</p>
          <p>{text}</p>
        </div>
        <div className="flex flex-row place-items-start justify-between">
          <Counter />
        </div>
      </div>
      <div>
        {depth < 3 && (
          <button
            className="py-2.5 px-4 text-xs font-medium text-center rounded-lg"
            type="button"
            onClick={() => setShowReply(!showReply)}
          >
            Reply
          </button>
        )}
      </div>
      {showReply && (
        <CommentForm
          addComment={(comment) => {
            setComments([comment, ...comments]);
            setShowReply(!showReply);
          }}
        />
      )}
      <ul>
        {comments.map((comment) => (
          <RecursiveComment
            name={comment.name}
            text={comment.text}
            depth={depth + 1}
            key={1000 * Math.random()}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecursiveComment;
