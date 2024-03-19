import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {

    const {id, title} = post;
    const postStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px'
    };

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired
};

export default Post;