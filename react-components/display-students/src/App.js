import './App.css';
import StudentInfoComponent from './components/StudentInfoComponent.js';
import Student from './models/Student.js';

const students = [
    new Student(1, 'Phan Trung Hiếu', 30, 'Hội An'),
    new Student(2, 'Nguyễn Văn Trường', 22, 'Nhật Bản'),
    new Student(3, 'Phạm Văn A', 35, 'Pháp'),
    new Student(4, 'Đinh Công Mạnh', 15, 'Hà Nội')
];

function App() {
  return (
    <div className="App">
      <StudentInfoComponent students={students}/>
    </div>
  );
}

export default App;
