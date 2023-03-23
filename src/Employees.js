import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.css'


// define employees with such param (props)
const Employees = ({employees, selectedTeam, handleTeamCardClick, handleTeamSelectionChange}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
            <option value="Team D">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                // ternary operator
                <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleTeamCardClick}>
                  {
                    (employee.gender === 'male') ? <img src={femaleProfile} className="card-img-top"/>
                                                : <img src={maleProfile} className="card-img-top"/>
                  }
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees