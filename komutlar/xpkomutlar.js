module.exports = [{
  name:"$alwaysExecute",
  code:`
  $setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];$random[1;5]]]
  
  `},
                  {
                    name:"rank",
                    code:`              $addField[Toplam Xp:;$getGlobalUserVar[xp;$mentioned[1];main]]
                    $reply[$messageID;no]
                    `
                  }]