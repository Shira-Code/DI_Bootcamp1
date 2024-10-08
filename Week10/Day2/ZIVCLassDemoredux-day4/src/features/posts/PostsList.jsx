import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./state/slice";
import RectionButton from "./ReactionButton";
import { selectPosts, selectStatus } from "./state/selectors";

const PostsList = (props) => {
  const posts = useSelector(selectPosts);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "failed") return <h2>We are working on it, stay alert...</h2>;

  return (
    <>
      <h2>Posts</h2>
      <section>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <RectionButton post={post} />
            </article>
          );
        })}
      </section>
    </>
  );
};
export default PostsList;
