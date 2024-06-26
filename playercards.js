const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const closeButton = document.querySelector('.close-button');  
const playerName = document.getElementById('player-name');
const playerInfo = document.getElementById('player-info');
const modal = document.getElementById('player-info-modal');


const myFavoriteFootballTeam = {
  team: "Manchester United FC",
  sport: "Football",
  year: 2023,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Erik Ten-Hag",
    matches: 51,
  },
  players: [
    {
      name: "Andre Onana",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
      image: "Andre-Onana-2-2048x1365-3602182772.jpg",
      info: {
        goals: 0,
        assists: 0,
        matches: 38,
        shots: 0,
      }
    },
    {
      name: "Harry Maguire",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: null,
      image: "maguire.jpg",
      info: {
        goals: 2,
        assists: 2,
        matches: 22,
        shots: 15,
      }
    },
    {
      name: "Lisandro Martinez",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: "Licha",
      image: "Lisandro_Martinez-2095863409.jpg",
      info: {
        goals: 0,
        assists: 1,
        matches: 11,
        shots: 1,
      }
    },
    {
      name: "Aaron Wan-Bissaka",
      position: "defender",
      number: 29,
      isCaptain: false,
      nickname: "Spiderman",
      image: "Aaron-Wan-Bissak-Man-Utd-transfer-landscape-1043885119.jpg",
      info: {
        goals: 0,
        assists: 2,
        matches: 20,
        shots: 2,
      }
    },
    {
      name: "Diogo Dalot",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: null,
      image: "Dalot.jpg",
      info: {
        goals: 2,
        assists: 3,
        matches: 36,
        shots: 7,
      }
    },
    {
      name: "Kobbie Mainoo",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: null,
      image: "mainoo.jpg",
      info: {
        goals: 3,
        assists: 1,
        matches: 24,
        shots: 5,
      }
    },
    {
      name: "Mason Mount",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: null,
      image: "mount.jpg",
      info: {
        goals: 1,
        assists: 0,
        matches: 14,
        shots: 1,
      }
    },
    {
      name: "Antony Martial",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "Tony Martial",
      image: "martial.jpg",
      info: {
        goals: 1,
        assists: 0,
        matches: 13,
        shots: 4,
      }
    },
    {
      name: "Scott McTominay",
      position: "midfielder",
      number: 39,
      isCaptain: false,
      nickname: "Terminator",
      image: "Scott-McTominay.jpg",
      info: {
        goals: 7,
        assists: 1,
        matches: 32,
        shots: 19,
      }
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      number: 8,
      isCaptain: true,
      nickname: "El Magnifico",
      image: "Fernandes.jpg",
      info: {
        goals: 10,
        assists: 8,
        matches: 35,
        shots: 41,
      }
    },
    {
      name: "Rasmus Hojlund",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: null,
      image: "Hojlund.jpg",
      info: {
        goals: 10,
        assists: 2,
        matches: 30,
        shots: 21,
      }
    },
    {
      name: "Marcus Rashford",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "Rashy",
      image: "Rashford.jpg",
      info: {
        goals: 7,
        assists: 2,
        matches: 33,
        shots: 21,
      }
    },
    {
      name: "Amad Diallo",
      position: "forward",
      number: 16,
      isCaptain: false,
      nickname: null,
      image: "Amad.jpg",
      info: {
        goals: 1,
        assists: 1,
        matches: 9,
        shots: 4,
      }
    },
    {
      name: "Alejandro Garnacho",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
      image: "Garnacho.jpg",
      info: {
        goals: 7,
        assists: 4,
        matches: 36,
        shots: 28,
      }
    }
  ],
};
Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, number, isCaptain, nickname, image }) =>
        `
        <div class="player-card" data-player="${players.findIndex(p => p.name === name)}">
          <img src="${image}" alt="${name}" />
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");

  document.querySelectorAll('.player-card').forEach(playerCard => {
    playerCard.addEventListener("click", () => {
      const playerId = playerCard.getAttribute('data-player');
      const player = players[playerId];

      playerName.textContent = player.name;
      playerInfo.textContent = `
        Goals: ${player.info.goals}
        Assists: ${player.info.assists}
        Matches: ${player.info.matches}
        Shots: ${player.info.shots}
      `;
      modal.style.display = 'block';
    });
  });
};

setPlayerCards();

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    default:
      setPlayerCards();
  }
});

closeButton.addEventListener("click", () => {
  console.log("Close button clicked");
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
})
