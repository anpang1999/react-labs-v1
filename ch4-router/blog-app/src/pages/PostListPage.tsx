import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function PostListPage() {
  return (
    <div>
      <h2 className="mb-4">전체 게시글</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
