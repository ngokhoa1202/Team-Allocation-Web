

import 'bootstrap/dist/css/bootstrap.css'
import Team from './Team.js'
import TeamMemberCard from './TeamMemberCard.js';


// define employees with such param (props)
const Employees = ({employees, selectedTeam, handleTeamCardClick, handleTeamSelectionChange}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Team selectedTeam={selectedTeam} 
                handleTeamSelection={handleTeamSelectionChange} 
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => <TeamMemberCard employee={employee}
                                                      selectedTeam = {selectedTeam} 
                                                      handleTeamCardClick = {handleTeamCardClick} />)
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees