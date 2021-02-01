module.exports = ({
  name: "@@bandana@@",
  code: `
$channelSendMessage[606892028848111638;{title:User Banovan}{description:<@$findUser[$message[1]]> je banovan/a.
Razlog: **$messageSlice[>1]**}{footer:Banovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$onlyIf[$findUser[$message[1]]!=$ownerID;]
$onlyIf[$findUser[$message[1]]!=$client[id];]
$onlyIf[$findUser[$message[1]]!=$authorID;]
$argsCheck[>2;]
$onlyBotPerms[ban;{title: }{description: }{color:#17A589}]
$onlyPerms[ban;{title: }{description: }{color:#17A589}]
`
})
