import CommentFeed from './components/comment-feed';

export default function App() {
  return (
    <main className="container px-4 py-2">
      <h1 className="px-4 py-2 mb-4 font-bold text-green-700">Welcome!</h1>
      <CommentFeed />
    </main>
  );
}
