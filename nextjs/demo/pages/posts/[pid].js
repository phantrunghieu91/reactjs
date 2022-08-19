import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { pid } = router.query;

    return <h4>Post: {pid} </h4>
};

export default Post;