import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/layout";
import getStudents from "../mock-data/data";

const StudentDetail = () => {
    const router = useRouter();
    const { studentId } = router.query;
    const students = getStudents();
    let student = students[studentId];
    console.log(student);
    return (
        <Layout>
            <h2>Student Detail</h2>
            <p>Student ID: {student.id}</p>
            <p>Student name: {student.name}</p>
        </Layout>
    );
};

export default StudentDetail;