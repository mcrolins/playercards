const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
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
    },
    {
      name: "Harry Maguire",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: null,
      image: "maguire.jpg",
    },
    {
      name: "Lisandro Martinez",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: "Licha",
      image: "Lisandro_Martinez-2095863409.jpg",
    },
    {
      name: "Aaron Wan-Bissaka",
      position: "defender",
      number: 29,
      isCaptain: false,
      nickname: "Spiderman",
      image: "Aaron-Wan-Bissak-Man-Utd-transfer-landscape-1043885119.jpg",
    },
    {
      name: "Diogo Dalot",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: null,
      image: "Dalot.jpg",
    },
    {
      name: "Kobbie Mainoo",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: null,
      image: "mainoo.jpg",
    },
    {
      name: "Mason Mount",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: null,
      image: "mount.jpg",
    },
    {
      name: "Antony Martial",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "Tony Martial",
      image: "martial.jpg",
    },
    {
      name: "Scott McTominay",
      position: "midfielder",
      number: 39,
      isCaptain: false,
      nickname: "Terminator",
      image: "Scott-McTominay.jpg",
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      number: 8,
      isCaptain: true,
      nickname: "El Magnifico",
      image: "Fernandes.jpg",
    },
    {
      name: "Rasmus Hojlund",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: null,
      image: "Hojlund.jpg",
    },
    {
      name: "Marcus Rashford",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "Rashy",
      image: "Rashford.jpg",
    },
    {
      name: "Amad Diallo",
      position: "forward",
      number: 16,
      isCaptain: false,
      nickname: null,
      image: "Amad.jpg",
    },
    {
      name: "Alejandro Garnacho",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
      image: "Garnacho.jpg",
    },

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
      ({ name, position, number, isCaptain, nickname, image}) =>
        `
        <div class="player-card">
        <img src="${image}" alt="${name}" />
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
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
        setPlayerCards(
          players.filter((player) => player.position === "midfielder")
        );
        break;
      case "defender":
        setPlayerCards(
          players.filter((player) => player.position === "defender")
        );
        break;
      case "goalkeeper":
        setPlayerCards(
          players.filter((player) => player.position === "goalkeeper")
        );
        break;
  
  default: setPlayerCards();
  
    }
  });
  