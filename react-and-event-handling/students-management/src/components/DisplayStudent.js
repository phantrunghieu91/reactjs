import { Component } from "react";

class DisplayStudent extends Component {
    render() {

        return (
            <div className='management__content__display'>
                <h3 className='management__content__display__title'>Student List</h3>
                <div className="management__content__display__table-container">
                <table className='management__content__display__students-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((student, index) => {
                                return (
                                    <tr 
                                        className="management__content__display__students-table__student"
                                        key={`student-${index}`}>
                                        <td className='management__content__display__students-table__student__name'>{student.name}</td>
                                        <td className='management__content__display__students-table__student__email'>{student.email}</td>
                                        <td className='management__content__display__students-table__student__phone'>{student.phone}</td>
                                        <td className='management__content__display__students-table__student__btn-grp'>
                                            <a className="management__content__display__students-table__student__btn-grp__edit"
                                                onClick={() => this.props.handleEditClick(index)}>
                                                <i class="bi bi-pencil-square text-success"></i>
                                            </a>
                                            <a className="management__content__display__students-table__student__btn-grp__remove"
                                                onClick={() => this.props.handleRemoveClick(index)}>
                                                <i class="bi bi-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default DisplayStudent;