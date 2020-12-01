const soccerScores = [
    {scores: `English Premier League: Man City 5 - Burnley 0`},
    {scores: `English Premier League: Chelsea 0 - Tottenham 0`},
    {scores: `English Premier League: Brighton 1 - Liverpool 1`},
    {scores: `English Premier League: West Ham 2 - Aston Villa 1`},
    {scores: `English Premier League: Arsenal 1 - Wolves 2`},
    {scores: `La Liga: Valencia 0 - Atletico Madrid 1`},
    {scores: `La Liga: Real Madrid 1 - Alves 2`},
    {scores: `La Liga: Real Betis - Eibar 2`},
    {scores: `La Liga: Barcelona 4 - Osasuma 0`},
    {scores: `La Liga: Huesca 0 - Sevilla 1`},
]

module.exports = {
    getAll: function() {
        return soccerScores
    }
}