import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const PostsList = (props) => {
    const posts = useSelector((state) => state.postsReducer.posts);
    const status = useSelector((state) => state.postsReducer.status);

    const dispatch = useDispatch();

    if(status === 'failed') {
    return  (
        <>
            <h2>Posts</h2>
            <article>
                <h3>title</h3>
                <p><body></p>
            </article>
        </>
    );
};
    
    


export default PostsList;