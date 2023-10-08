import { useState } from 'react';

function CommentForm({ addComment }: { addComment: (string) => void }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  return (
    <form
      className="px-6 py-2 mb-4 font-light dark:font-extralight w-1/2 shadow-2xl"
      onSubmit={(evt) => {
        evt.preventDefault();
        if (name.trim() !== '' && text.trim() !== '') {
          setName('');
          setText('');
          addComment({ name, text });
        }
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="py-2.5 px-4 mb-4 flex-block font-light dark:font-extralight md:mb-0 md:ml-8"
        onChange={(evt) => setName(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Write a new post ..."
        value={text}
        className="py-2.5 px-4 mb-4 flex-block font-light dark:font-extralight md:mb-0 md:ml-8 w-10/12"
        onChange={(evt) => setText(evt.target.value)}
      />
      <button
        className="py-2.5 px-4 my-2 block bg-indigo-600 text-white text-xs font-medium text-center md:mb-0 md:ml-8 rounded-md"
        type="submit"
      >
        Post
      </button>
    </form>
  );
}

export default CommentForm;
