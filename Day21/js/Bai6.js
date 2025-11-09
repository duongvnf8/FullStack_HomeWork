const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];
// - Tính số trận thắng, hòa, thua của mỗi đội.
const teamResult = (matches) => {
  const teams = {};
  matches.forEach((match) => {
    [match.teamA, match.teamB].forEach((item) => {
      teams[item] = teams[item] || {
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goals: 0,
      };
    });
    teams[match.teamA].goals += match.scoreA;
    teams[match.teamB].goals += match.scoreB;
    if (match.scoreA > match.scoreB) {
      teams[match.teamA].wins++;
      teams[match.teamA].points += 3;
      teams[match.teamB].losses++;
    } else if (match.scoreA < match.scoreB) {
      teams[match.teamB].wins++;
      teams[match.teamB].points += 3;
      teams[match.teamA].losses++;
    } else {
      teams[match.teamA].draws++;
      teams[match.teamB].draws++;
      teams[match.teamA].points++;
      teams[match.teamB].points++;
    }
  });
  return teams;
};
console.log(teamResult(matches));

// - Xếp hạng các đội bóng theo số điểm, với quy tắc:
// * Thắng: +3 điểm
// * Hòa: +1 điểm
// * Thua: +0 điểm
const Ranking = (matches) => {
  const teams = teamResult(matches);
  const teamsMap = Object.entries(teams).map((item) => {
    return Object.assign(
      {},
      {
        team: item[0],
      },
      item[1]
    );
  });
  return teamsMap.sort((a, b) => {
    return b.points - a.points;
  });
};

console.log(Ranking(matches));

// - Tìm đội có số bàn thắng nhiều nhất.
const topGoals = (matches) => {
  return Ranking(matches).reduce((acc, cur) => {
    return cur.goals > acc.goals ? cur : acc;
  });
};
console.log(topGoals(matches));
