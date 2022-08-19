import Layout from "../../components/layout";
import getStudents from "../mock-data/data";
import styles from '../../styles/Students.module.css';
import Link from "next/link";

const Students = () => (
    <Layout>
        <h2>Students</h2>
        <table className={styles.studentDisplay}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {
                getStudents().map((stu, index) => (
                    <tr key={`student-${index}`}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>
                            <Link href={`/students/${encodeURIComponent(stu.id)}`}>
                                <a>Show detail</a>
                            </Link>
                        </td>
                    </tr>
                ))
            }
        </table>
    </Layout>
);
export default Students;