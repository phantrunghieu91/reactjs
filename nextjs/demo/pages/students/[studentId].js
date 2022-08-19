import { useRouter } from "next/router";
import Layout from "../../components/layout";

const StudentDetail = () => {
    const router = useRouter();
    const { studentId } = router.query;
    return (
        <Layout>
            <h2>Student Detail</h2>
            <p>Student: {studentId}</p>
        </Layout>
    );
};

export default StudentDetail;