import React from 'react'
import './App.css';
import Employees from './Employees.js'
import Header from './Header.js'
import Footer from './Footer.js'
import {useState} from 'react'

function App() {
  // define a hook: current state of employee and function references that will change state of employee
  // if change: re-render employee
  const [selectedTeam, setTeam] = useState("Team B");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "Team A"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "Team A"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "Team A"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "Team B"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "Team B"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "Team B"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "Team C"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "Team C"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "Team C"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "Team D"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "Team D"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "Team D"
    }
  ])

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value); 
  }
  function handleTeamCardClick(event) {
    const tranformedEmployees = employees.map((employee) => (employee.id === parseInt(event.currentTarget.id))
                                            ?(employee.teamName === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
                                            :employee);
    console.log(tranformedEmployees);
    setEmployees(tranformedEmployees);
  }
  // pass props to Employee
  return (
    <div>
      <Header selectedTeam = {selectedTeam}
              teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      
      <Employees employees = {employees} 
                 selectedTeam = {selectedTeam}
                 handleTeamCardClick = {handleTeamCardClick}
                 handleTeamSelectionChange = {handleTeamSelectionChange} 
      />
      <Footer />
    </div>
  );
}

export default App;
