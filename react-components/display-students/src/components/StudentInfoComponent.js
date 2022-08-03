import React from 'react';

class StudentInfoComponent extends React.Component {
    render() {
        return (
            <div className='students'>
                <h1 className='students__header'>Hiển thị danh sách sinh viên</h1>
                <table className='students__table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Tuổi</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map(student => {
                            return (
                                <tr className='students__table__student'>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.address}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default StudentInfoComponent;