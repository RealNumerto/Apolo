module.exports = ({
  name: "unban",
  code: `
  $channelSendMessage[794551111038009404;{title:User Unbanovan}{description:**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan/a.
Razlog: **$messageSlice[>1]**}{footer:Unbanovan/a od strane $username[$authorID]#$discriminator[$authorID]}]
$argsCheck[>2;]
$onlyForRoles[782775328116047892;801810495354306591;782778612361330768;802194924539871254;]
`
})
