import { useNavigate, useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate(); // Use useNavigate hook for navigation
    const post = useLoaderData();
    const { postId } = useParams();
    const { id, title, body } = post;

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1); // Use navigate(-1) for going back
    };

    return (
        <div>
            <h3>Post Details: {id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;
