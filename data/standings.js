const soccerStandings = [
    {
        PremierLeague: 
        `1-Tottenham 
        2-Liverpool
        3-Chelsea
        4-Leicster City
        5-West Ham
        6-Southhampton
        7-Wolves
        8-Everton
        9-Man United
        10-Aston Villa
    `},
    {
        LaLiga:
        `1-Real Sociedad
        2-Altetico Madrid
        3-Villarreal
        4-Real Madrid
        5-Sevilla
        6-Cadiz
        7-Bracelona
        8-Granada
        9-Athetic Club
        10-Elche`
    },
]


module.exports = {
    getAll: function() {
        return soccerStandings
    }
}