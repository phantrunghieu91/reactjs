import { Link } from 'react-router-dom';

const ViewPost = ({ id, isEdit }) =>
  isEdit ? (
    <Link to={`/edit/${id}`}>Edit post</Link>
  ) : (
    <Link to={`/post/${id}`}>View post</Link>
  );

export default ViewPost;
