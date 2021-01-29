module.exports = ({
  name: "unban",
  code: `
  $channelSendMessage[794551111038009404;{title:User Unbanovan}{description:**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan/a.
Razlog: **$messageSlice[>1]**}{footer:Unbanovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$argsCheck[>2;]
$onlyBotPerms[ban;{title: }{description: }{color:#17A589}]
$onlyPerms[ban;{title: }{description: }{color:#17A589}]
`
})
