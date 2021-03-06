const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

var sortedRobots = robots.map(function(robot) {
  var decept = knownDecepticons.includes(robot.name)
  return Object.assign({}, robot, {

    alliance: decept ? 'decepticon' : 'autobot'
  })
})

// var sortedRobots = robots.map(function(robot){
//   if( knownDecepticons.indexOf(robot.name) > -1 ){
//     return Object.assign({}, robot,{ alliance: "decepticon"})
//   }else {
//     return Object.assign({}, robot, { alliance: "autobot"})
//   }
// })


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

var coloredZebraStripes = zebraStripes.map(function(zeb, index)
{ 
  const even = (index % 2) === 0; 
  return Object.assign({}, zeb, {
    color: even ? 'black' : 'white'
  })
})


// var coloredZebraStripes = zebraStripes.map(function (bra, index) {
//     let ze = Object.assign({}, bra)

//     if (index % 2 === 0) {
//       ze.color = "black"
//     } else {
//       ze.color = "white"
//     }
//   return ze
// });