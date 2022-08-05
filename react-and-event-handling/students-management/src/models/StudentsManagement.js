class StudentsManagement {
    constructor() {
        this._students = [];
    }

    get students(){
        return this._students;
    }
    set students(students) {
        this._students = students;
    }

    addNewStudent = (student) => {
        if(this.students.find(ele => {
            if(ele.name === student.name || ele.email === student.email) return ele;
            else return undefined;
        }) === undefined){
            this.students = [...this.students, student];
            return true;
        } else return false;
    };

    deleteStudent = (studentIndex) => {
        this.students = this.students.filter((ele, index) => index !== studentIndex);
    };

    editStudent = (studentIndex, student) => {
        for(let i = 0; i < this.students.length; i++){
            if(i === studentIndex){
                this.students[i] = student;
                return true;
            }
        }
        return false;
    };
}

export default StudentsManagement;