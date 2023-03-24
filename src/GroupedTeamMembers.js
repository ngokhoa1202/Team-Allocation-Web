import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedEmployees] = useState(groupedTeamMembers())

  function groupedTeamMembers() {
    let teams = [];
    let teamAMembers = employees.filter((employee) => employee.teamName === 'Team A');
    let teamA = {team: "Team A", members: teamAMembers, collasped: (selectedTeam !== teamAMembers)};

    let teamBMembers = employees.filter((employee) => employee.teamName === 'Team B');
    let teamB = {team: "Team B", members: teamBMembers, collasped: (selectedTeam !== teamBMembers)};

    let teamCMembers = employees.filter((employee) => employee.teamName === 'Team C');
    let teamC = {team: "Team C", members: teamCMembers, collasped: (selectedTeam !== teamCMembers)};

    let teamDMembers = employees.filter((employee) => employee.teamName === 'Team D');
    let teamD = {team: "Team D", members: teamDMembers, collasped: (selectedTeam !== teamDMembers)};

    teams.push(teamA);
    teams.push(teamB);
    teams.push(teamC);
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    const tranformedGroupedEmployees = groupedEmployees.map((groupedEmployee) => (groupedEmployee.team === event.currentTarget.id) 
                        ? {...groupedEmployee, collasped: !groupedEmployee.collasped}
                        : groupedEmployee);
    setGroupedEmployees(tranformedGroupedEmployees);
    setTeam(event.currentTarget.id) // current team
  }

  return (
    <main className="container">
    {
      groupedEmployees.map((item) => {
        return (
          <div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team name: {item.team}
            </h4>
            <div id={"collasped_" + item.team} className={item.collasped?"collapse":""}>
              <hr/>
              {
                item.members.map((member) => {
                  return (
                    <div className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark"> Full name: {member.fullName}</span>
                      </h5>
                      <p className="card-text text-dark mt-2 d-flex justify-content-center">
                      Designation: {member.designation}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>
        )
      })
    }
    </main>
  );
}

export default GroupedTeamMembers;