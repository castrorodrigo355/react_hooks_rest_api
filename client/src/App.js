import React, { useState, useEffect } from 'react';
import service from './Services/Service';
import StudentsForm from './Components/StudentsForm';
import StudentsList from './Components/StudentsList';
import './App.css';

const App = () => {

  const [students, setStudents] = useState([]);

  async function getDataStudents(){
    var students;
    try { students = await service.getStudents()} 
    catch(e) { console.error(e); students = null }
    setStudents(students)
  }

  useEffect(() => {    
    getDataStudents();
  },[]);

  async function onDeleteStudent(id){
    try { 
      var student = await service.deleteStudent(id)
      console.log(`Eliminaste a ${student.name}`)
    } catch(e) { 
      console.error(e);
    }
    getDataStudents();
  }

  async function onGetStudent(id){
    try { 
      var student = await service.getStudent(id)
      console.log(student)
    } catch(e) { 
      console.error(e);
    }
    getDataStudents();
  }

  async function onPostStudent(student){
    try { 
      var student = await service.postStudent(student)
      console.log(student)
    } catch(e) { 
      console.error(e);
    }
    getDataStudents();
  }

  return (
    <div className="App">
      <hr/>
        <StudentsForm onPostStudent={onPostStudent}/>
      <hr/>
        <StudentsList students={students} 
                      onDeleteStudent={onDeleteStudent}
                      onGetStudent={onGetStudent}/>
      <hr/>
      
    </div>
  );
}

export default App;