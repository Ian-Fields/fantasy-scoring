function calcPassingScore(player) {
  const passYards = player.stats.passing.yards / 25
  const passTds = player.stats.passing.touchdowns * 6
  const passInterceptions = player.stats.passing.interceptions * -3

  return passYards + passTds + passInterceptions
}

function calcRushingScore(player) {
  const rushYards = player.stats.rushing.yards / 10
  const rushTds = player.stats.rushing.touchdowns * 6
  const rushFumbles = player.stats.rushing.fumbles * -3

  return rushYards + rushTds + rushFumbles
}

function calcReceivingScore(player) {
  const recYards = player.stats.receiving.yards / 10
  const recTds = player.stats.receiving.touchdowns * 6
  const recFumbles = player.stats.receiving.fumbles * -3
  const receptions = player.stats.receiving.receptions

  return recYards + recTds + recFumbles + receptions
}

function calcReturnScore(player) {
  const kickReturnYards = player.stats.return.kickreturn.yards / 15
  const kickReturnTds = player.stats.return.kickreturn.touchdowns * 6
  const kickReturnFumbles = player.stats.return.kickreturn.fumbles * -3
  const puntReturnYards = player.stats.return.puntreturn.yards / 15
  const puntReturnTds = player.stats.return.puntreturn.touchdowns * 6
  const puntReturnFumbles = player.stats.return.puntreturn.fumbles * -3


  return kickReturnYards + kickReturnTds + kickReturnFumbles + puntReturnYards + puntReturnTds + puntReturnFumbles
}

function calculateScore(player) {

  switch (player.position) {
    case 'QB':
      return calcPassingScore(player) + calcRushingScore(player)
    case 'RB':
    //return calcRushingScore(player) + calcReceivingScore(player) + calcReturnScore(player)
    case 'WR':
      return calcRushingScore(player) + calcReceivingScore(player) + calcReturnScore(player)
    case 'TE':
      return calcReceivingScore(player)
    default:
      return 0
  }

}

module.exports = calculateScore