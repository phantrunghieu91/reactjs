import Student from './models/Student';
import StudentsManagement from './models/StudentsManagement';
import './App.css';
import {Component} from 'react';
import DisplayStudent from './components/DisplayStudent';

const regex = {
  name: /[A-Za-z\s]{6,}/,
  email: /^[A-Za-z0-9]+[A-Za-z0-9]*@{1}[A-Za-z0-9]+(\.{1}[A-Za-z]+)$/,
  phone: /^[0]{1}([0-9]{9,10})$/
};
const studentList = new StudentsManagement();
studentList.addNewStudent(new Student('Kim Rae Jin', 'jin@gmail.com', '0913111111'));
studentList.addNewStudent(new Student('Lee Hee Mii', 'heemii@gmail.com', '0913255111'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: studentList,
      student: {
        name: '',
        email: '',
        phone: ''
      },
      isValid: false,
      actionText: 'add',
      editId: undefined
    }
  }

  handleOnChange = (e) => {
    const selfInput = e.currentTarget;
    this.setState(prevState => {
      let { student } = prevState;
      student[selfInput.name] = selfInput.value;
      return { student };
    }, this.isValid);
  };

  handleFormAction = (e) => {
    e.preventDefault();
    if(this.state.isValid) {
      if(this.state.actionText === 'add'){
        this.setState(state => {
          let { students, student } = state;
          const newStudent = new Student(student.name, student.email, student.phone);
          const funcReturn = students.addNewStudent(newStudent);
          if(funcReturn){
            student.name = '';
            student.email = '';
            student.phone = '';
          } else {
            alert('This email or name already exist!')
          }
          return { student, students};
        });
      } else if(this.state.actionText === 'edit'){
        this.setState(state => {
          let { students, student, editId, actionText } = state;
          const newStudent = new Student(student.name, student.email, student.phone);
          const funcReturn = students.editStudent(editId, newStudent);
          if(funcReturn){
            student.name = '';
            student.email = '';
            student.phone = '';
            editId = undefined;
            actionText = 'add';
          } else {
            alert('Ko edit dc!')
          }
          return { student, students, editId, actionText};
        });
      }
    } else {
      alert('Info not valid!');
    }
  };

  handleEditClick = (index) => {
    this.setState(state => {
      let { students, student, actionText, editId } = state;
      const editingStudent = students.students[index];
      for(let [key, value] of Object.entries(editingStudent)){
        key = key.slice(1);
        student[key] = value;
      }
      actionText = 'edit';
      editId = index;
      return { students, student, actionText, editId };
    });
  };

  handleRemoveClick = (index) => {
    this.setState(state => {
      let { students } = state;
      students.deleteStudent(index);
      return { students };
    });
  };

  isValid = () => {
    this.setState(prevState => {
      let { student, isValid } = prevState;
      isValid = regex.name.test(student.name) && 
        regex.email.test(student.email) && 
        regex.phone.test(student.phone);
      return { student, isValid};
    });
  };

  render() {
    const { students, student, actionText, editId } = this.state;
    return (
      <div className='management'>
        <h1 className='management__header'>Student Management</h1>
        <div className='management__content'>
          <form className='management__content__form' method='POST'>
            <h3 className='management__content__form__title'>
              {actionText === 'add' ? `add new student` : `edit ${students.students[editId].name}'s info:`}
            </h3>
            <input type='text' 
              className='management__content__form__name'
              value={student.name}
              name='name'
              pattern='[A-Za-z\s]{6,}'
              onChange={this.handleOnChange}
              placeholder='Student name, more than 6 character...'
            />
            <input type='text' 
              className='management__content__form__email'
              value={student.email}
              name='email'
              onChange={this.handleOnChange}
              pattern='^[A-Za-z0-9]+[A-Za-z0-9]*@{1}[A-Za-z0-9]+(\.{1}[A-Za-z]+)$'
              placeholder='Student email, must have valid email...'
            />
            <input type='text' 
              className='management__content__form__phone'
              value={student.phone}
              name='phone'
              onChange={this.handleOnChange}
              pattern='^[0]{1}([0-9]{9,10})$'
              placeholder='Student phone number, valid phone number...'
            />
            <button className='management__content__form__submit'
              onClick={this.handleFormAction}
            >{actionText}</button>
          </form>
          <DisplayStudent 
            students={students.students}
            handleEditClick = {this.handleEditClick}
            handleRemoveClick = {this.handleRemoveClick}
          />
        </div>
      </div>
    );
  }
};

export default App;