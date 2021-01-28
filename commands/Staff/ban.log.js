module.exports = ({
  name: "ban",
  code: `
$channelSendMessage[794551111038009404;{title:User Banovan}{description:<@$findUser[$message[1]]> je banovan/a.
Razlog: **$messageSlice[>1]**}{footer:Banovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$onlyIf[$findUser[$message[1]]!=$ownerID;]
$onlyIf[$findUser[$message[1]]!=$client[id];]
$onlyIf[$findUser[$message[1]]!=$authorID;]
$argsCheck[>2;]
$onlyForRoles[782775328116047892;801810495354306591;782778612361330768;802194924539871254;]
`
})
