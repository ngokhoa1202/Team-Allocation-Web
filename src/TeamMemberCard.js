import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';
import reportWebVitals from './reportWebVitals.js';

const TeamMemberCard = ({employee, selectedTeam, handleTeamCardClick}) => {
  return (
    // ternary operator
    <div id={employee.id} key={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleTeamCardClick}> {
      (employee.gender === 'male') ? <img src={femaleProfile} className="card-img-top"/>
                                  : <img src={maleProfile} className="card-img-top"/>
    }
    <div className="card-body">
      <h5 className="card-title">Full Name: {employee.fullName}</h5>
      <p className="card-text"><b>Designation: </b>{employee.designation}</p>
    </div>
    </div>
  )
}

export default TeamMemberCard