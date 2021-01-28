module.exports = ({
  name: "unban",
  code: `
  $channelSendMessage[$channelID[];**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan/a.
Razlog: **$messageSlice[>1]**]
$unban[$message[1];$messageSlice[>1]]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!unban (USER ID) (razlog)**. () ne trebas da koristis]
$onlyForRoles[782775328116047892;801810495354306591;782778612361330768;802194924539871254;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})
