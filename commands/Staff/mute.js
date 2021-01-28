module.exports = ({
name: "mute",
code: `
$channelSendMessage[$channelID[];<@$mentioned[1]> je automatski unmutiran/a posle **$message[2]**]
$takeRole[$mentioned[1];$roleID[Muted]]
$onlyIf[$getUserVar[autounmute;$mentioned[1]]==yes;]
$replyIn[$message[2]]
$onlyIf[$hasRole[$mentioned[1];$roleID[Muted]]!=;]
$channelSendMessage[$channelID[];<@$mentioned[1]> je mutiran na **$message[2]**.
Razlog: **$messageSlice[>2]**]
$giveRole[$mentioned[1];$roleID[Muted]]
$setUserVar[autounmute;yes;$mentioned[1]]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!mute (@username) (na koliko mute(vreme)) (razlog)**. () ne trebas da koristis]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];h;];m;];s;];d;]]==true;Pogresno napisana komanda. Probaj: **!!mute (@username) (na koliko mute(vreme)) (razlog)**. () ne trebas da koristis]
$onlyForRoles[802193550250999808;782778612361330768;801810495354306591;782775328116047892;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})
