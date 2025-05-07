
import { Team } from "@/types/team";

export const teams: Team[] = [
  {
    id: 1,
    name: "Manchester United",
    shortName: "MUN",
    logo: "🔴",
    primaryColor: "#DA291C",
    secondaryColor: "#FBE122",
    formation: "4-3-3",
    overallRating: 83,
    players: [
      {
        id: 101,
        name: "David De Gea",
        position: "GK",
        attributes: {
          pace: 58,
          shooting: 25,
          passing: 70,
          dribbling: 45,
          defending: 30,
          physical: 78,
          goalkeeping: 89,
          aerial: 85,
          technique: 72,
          composure: 85,
          tackling: 20,
          vision: 68
        },
        condition: 95,
        fitness: 92,
        morale: 80
      },
      {
        id: 102,
        name: "Luke Shaw",
        position: "DEF",
        attributes: {
          pace: 80,
          shooting: 60,
          passing: 78,
          dribbling: 76,
          defending: 81,
          physical: 82,
          aerial: 76,
          technique: 75,
          composure: 78,
          tackling: 83,
          vision: 75
        },
        condition: 90,
        fitness: 88,
        morale: 75
      },
      {
        id: 103,
        name: "Raphael Varane",
        position: "DEF",
        attributes: {
          pace: 78,
          shooting: 45,
          passing: 70,
          dribbling: 65,
          defending: 86,
          physical: 83,
          aerial: 88,
          technique: 70,
          composure: 85,
          tackling: 87,
          vision: 72
        },
        condition: 85,
        fitness: 82,
        morale: 78
      },
      {
        id: 104,
        name: "Bruno Fernandes",
        position: "MID",
        attributes: {
          pace: 75,
          shooting: 83,
          passing: 89,
          dribbling: 84,
          defending: 68,
          physical: 74,
          aerial: 65,
          technique: 87,
          composure: 83,
          tackling: 65,
          vision: 90
        },
        condition: 92,
        fitness: 90,
        morale: 85
      },
      {
        id: 105,
        name: "Marcus Rashford",
        position: "FWD",
        attributes: {
          pace: 91,
          shooting: 85,
          passing: 78,
          dribbling: 85,
          defending: 45,
          physical: 77,
          aerial: 70,
          technique: 84,
          composure: 80,
          tackling: 40,
          vision: 75
        },
        condition: 95,
        fitness: 93,
        morale: 82
      }
    ]
  },
  {
    id: 2,
    name: "Liverpool FC",
    shortName: "LIV",
    logo: "🔴",
    primaryColor: "#C8102E",
    secondaryColor: "#00B2A9",
    formation: "4-3-3",
    overallRating: 85,
    players: [
      {
        id: 201,
        name: "Alisson",
        position: "GK",
        attributes: {
          pace: 60,
          shooting: 20,
          passing: 82,
          dribbling: 55,
          defending: 32,
          physical: 85,
          goalkeeping: 90,
          aerial: 88,
          technique: 75,
          composure: 87,
          tackling: 25,
          vision: 75
        },
        condition: 94,
        fitness: 92,
        morale: 85
      },
      {
        id: 202,
        name: "Virgil van Dijk",
        position: "DEF",
        attributes: {
          pace: 81,
          shooting: 63,
          passing: 78,
          dribbling: 72,
          defending: 90,
          physical: 88,
          aerial: 92,
          technique: 75,
          composure: 90,
          tackling: 89,
          vision: 78
        },
        condition: 90,
        fitness: 88,
        morale: 82
      },
      {
        id: 203,
        name: "Trent Alexander-Arnold",
        position: "DEF",
        attributes: {
          pace: 80,
          shooting: 72,
          passing: 90,
          dribbling: 80,
          defending: 78,
          physical: 75,
          aerial: 70,
          technique: 85,
          composure: 82,
          tackling: 79,
          vision: 88
        },
        condition: 92,
        fitness: 90,
        morale: 85
      },
      {
        id: 204,
        name: "Mohamed Salah",
        position: "FWD",
        attributes: {
          pace: 92,
          shooting: 89,
          passing: 83,
          dribbling: 90,
          defending: 45,
          physical: 78,
          aerial: 72,
          technique: 88,
          composure: 85,
          tackling: 42,
          vision: 82
        },
        condition: 96,
        fitness: 94,
        morale: 90
      },
      {
        id: 205,
        name: "Fabinho",
        position: "MID",
        attributes: {
          pace: 75,
          shooting: 70,
          passing: 82,
          dribbling: 78,
          defending: 86,
          physical: 85,
          aerial: 80,
          technique: 80,
          composure: 84,
          tackling: 87,
          vision: 83
        },
        condition: 88,
        fitness: 86,
        morale: 80
      }
    ]
  },
  {
    id: 3,
    name: "Arsenal FC",
    shortName: "ARS",
    logo: "🔴",
    primaryColor: "#EF0107",
    secondaryColor: "#FFFFFF",
    formation: "4-2-3-1",
    overallRating: 82,
    players: [
      {
        id: 301,
        name: "Aaron Ramsdale",
        position: "GK",
        attributes: {
          pace: 57,
          shooting: 22,
          passing: 78,
          dribbling: 50,
          defending: 30,
          physical: 80,
          goalkeeping: 85,
          aerial: 82,
          technique: 72,
          composure: 80,
          tackling: 22,
          vision: 70
        },
        condition: 90,
        fitness: 88,
        morale: 82
      },
      {
        id: 302,
        name: "Ben White",
        position: "DEF",
        attributes: {
          pace: 76,
          shooting: 55,
          passing: 78,
          dribbling: 75,
          defending: 82,
          physical: 78,
          aerial: 78,
          technique: 76,
          composure: 80,
          tackling: 83,
          vision: 75
        },
        condition: 88,
        fitness: 86,
        morale: 85
      },
      {
        id: 303,
        name: "Gabriel",
        position: "DEF",
        attributes: {
          pace: 75,
          shooting: 62,
          passing: 70,
          dribbling: 65,
          defending: 83,
          physical: 85,
          aerial: 85,
          technique: 68,
          composure: 78,
          tackling: 84,
          vision: 70
        },
        condition: 92,
        fitness: 90,
        morale: 80
      },
      {
        id: 304,
        name: "Martin Odegaard",
        position: "MID",
        attributes: {
          pace: 75,
          shooting: 80,
          passing: 87,
          dribbling: 87,
          defending: 68,
          physical: 70,
          aerial: 60,
          technique: 87,
          composure: 85,
          tackling: 65,
          vision: 88
        },
        condition: 94,
        fitness: 92,
        morale: 88
      },
      {
        id: 305,
        name: "Bukayo Saka",
        position: "FWD",
        attributes: {
          pace: 88,
          shooting: 83,
          passing: 82,
          dribbling: 87,
          defending: 65,
          physical: 76,
          aerial: 68,
          technique: 85,
          composure: 83,
          tackling: 60,
          vision: 82
        },
        condition: 95,
        fitness: 93,
        morale: 90
      }
    ]
  },
  {
    id: 4,
    name: "Manchester City",
    shortName: "MCI",
    logo: "🔵",
    primaryColor: "#6CABDD",
    secondaryColor: "#FFFFFF",
    formation: "4-3-3",
    overallRating: 87,
    players: [
      {
        id: 401,
        name: "Ederson",
        position: "GK",
        attributes: {
          pace: 62,
          shooting: 25,
          passing: 88,
          dribbling: 60,
          defending: 35,
          physical: 83,
          goalkeeping: 88,
          aerial: 85,
          technique: 80,
          composure: 90,
          tackling: 25,
          vision: 82
        },
        condition: 92,
        fitness: 90,
        morale: 85
      },
      {
        id: 402,
        name: "Ruben Dias",
        position: "DEF",
        attributes: {
          pace: 75,
          shooting: 60,
          passing: 78,
          dribbling: 72,
          defending: 88,
          physical: 85,
          aerial: 85,
          technique: 76,
          composure: 87,
          tackling: 89,
          vision: 78
        },
        condition: 94,
        fitness: 92,
        morale: 88
      },
      {
        id: 403,
        name: "Kyle Walker",
        position: "DEF",
        attributes: {
          pace: 92,
          shooting: 65,
          passing: 78,
          dribbling: 78,
          defending: 82,
          physical: 84,
          aerial: 75,
          technique: 76,
          composure: 80,
          tackling: 83,
          vision: 75
        },
        condition: 90,
        fitness: 88,
        morale: 85
      },
      {
        id: 404,
        name: "Kevin De Bruyne",
        position: "MID",
        attributes: {
          pace: 78,
          shooting: 88,
          passing: 94,
          dribbling: 88,
          defending: 68,
          physical: 80,
          aerial: 75,
          technique: 90,
          composure: 88,
          tackling: 65,
          vision: 95
        },
        condition: 90,
        fitness: 88,
        morale: 85
      },
      {
        id: 405,
        name: "Erling Haaland",
        position: "FWD",
        attributes: {
          pace: 89,
          shooting: 93,
          passing: 75,
          dribbling: 80,
          defending: 45,
          physical: 92,
          aerial: 88,
          technique: 84,
          composure: 88,
          tackling: 40,
          vision: 75
        },
        condition: 96,
        fitness: 94,
        morale: 90
      }
    ]
  },
  {
    id: 5,
    name: "Tottenham Hotspur",
    shortName: "TOT",
    logo: "⚪",
    primaryColor: "#FFFFFF",
    secondaryColor: "#132257",
    formation: "4-2-3-1",
    overallRating: 81,
    players: [
      {
        id: 501,
        name: "Hugo Lloris",
        position: "GK",
        attributes: {
          pace: 58,
          shooting: 20,
          passing: 72,
          dribbling: 45,
          defending: 30,
          physical: 80,
          goalkeeping: 86,
          aerial: 83,
          technique: 70,
          composure: 82,
          tackling: 20,
          vision: 68
        },
        condition: 88,
        fitness: 86,
        morale: 80
      },
      {
        id: 502,
        name: "Cristian Romero",
        position: "DEF",
        attributes: {
          pace: 78,
          shooting: 55,
          passing: 72,
          dribbling: 68,
          defending: 85,
          physical: 86,
          aerial: 82,
          technique: 72,
          composure: 80,
          tackling: 88,
          vision: 72
        },
        condition: 90,
        fitness: 88,
        morale: 82
      },
      {
        id: 503,
        name: "Eric Dier",
        position: "DEF",
        attributes: {
          pace: 65,
          shooting: 65,
          passing: 75,
          dribbling: 65,
          defending: 80,
          physical: 82,
          aerial: 83,
          technique: 70,
          composure: 78,
          tackling: 82,
          vision: 74
        },
        condition: 85,
        fitness: 83,
        morale: 78
      },
      {
        id: 504,
        name: "Son Heung-min",
        position: "FWD",
        attributes: {
          pace: 90,
          shooting: 88,
          passing: 82,
          dribbling: 87,
          defending: 50,
          physical: 76,
          aerial: 70,
          technique: 87,
          composure: 85,
          tackling: 45,
          vision: 80
        },
        condition: 94,
        fitness: 92,
        morale: 85
      },
      {
        id: 505,
        name: "Pierre-Emile Hojbjerg",
        position: "MID",
        attributes: {
          pace: 70,
          shooting: 72,
          passing: 82,
          dribbling: 75,
          defending: 82,
          physical: 85,
          aerial: 78,
          technique: 75,
          composure: 83,
          tackling: 83,
          vision: 80
        },
        condition: 92,
        fitness: 90,
        morale: 82
      }
    ]
  },
  {
    id: 6,
    name: "Chelsea FC",
    shortName: "CHE",
    logo: "🔵",
    primaryColor: "#034694",
    secondaryColor: "#EE242C",
    formation: "4-2-2-2",
    overallRating: 82,
    players: [
      {
        id: 601,
        name: "Kepa Arrizabalaga",
        position: "GK",
        attributes: {
          pace: 58,
          shooting: 22,
          passing: 70,
          dribbling: 48,
          defending: 30,
          physical: 76,
          goalkeeping: 83,
          aerial: 78,
          technique: 72,
          composure: 75,
          tackling: 20,
          vision: 65
        },
        condition: 85,
        fitness: 83,
        morale: 75
      },
      {
        id: 602,
        name: "Thiago Silva",
        position: "DEF",
        attributes: {
          pace: 65,
          shooting: 60,
          passing: 80,
          dribbling: 75,
          defending: 85,
          physical: 78,
          aerial: 85,
          technique: 80,
          composure: 88,
          tackling: 86,
          vision: 80
        },
        condition: 85,
        fitness: 80,
        morale: 82
      },
      {
        id: 603,
        name: "Reece James",
        position: "DEF",
        attributes: {
          pace: 82,
          shooting: 75,
          passing: 82,
          dribbling: 80,
          defending: 82,
          physical: 85,
          aerial: 78,
          technique: 80,
          composure: 80,
          tackling: 83,
          vision: 78
        },
        condition: 88,
        fitness: 85,
        morale: 82
      },
      {
        id: 604,
        name: "Kai Havertz",
        position: "FWD",
        attributes: {
          pace: 80,
          shooting: 82,
          passing: 80,
          dribbling: 85,
          defending: 60,
          physical: 78,
          aerial: 82,
          technique: 85,
          composure: 83,
          tackling: 55,
          vision: 80
        },
        condition: 90,
        fitness: 88,
        morale: 80
      },
      {
        id: 605,
        name: "N'Golo Kanté",
        position: "MID",
        attributes: {
          pace: 85,
          shooting: 70,
          passing: 80,
          dribbling: 80,
          defending: 87,
          physical: 85,
          aerial: 65,
          technique: 78,
          composure: 82,
          tackling: 88,
          vision: 80
        },
        condition: 85,
        fitness: 83,
        morale: 80
      }
    ]
  }
];
