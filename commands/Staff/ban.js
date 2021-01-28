module.exports = ({
  name: "ban",
  code: `
$channelSendMessage[$channelID[];<@$findUser[$message[1]]> je banovan/a.
Razlog: **$messageSlice[>1]**]
$ban[$findUser[$message[1]];$messageSlice[>1]]
$onlyIf[$findUser[$message[1]]!=$ownerID;{title:Ban Error}{description:Dobar pokusaj. Ne mozes da banujes server vlasnika.}]
$onlyIf[$findUser[$message[1]]!=$client[id];{title:Ban Error}{description:Banaj me ako mozes xD. Ne mogu ja da banam sam sebe.}]
$onlyIf[$findUser[$message[1]]!=$authorID;{title:Ban Error}{description:Ne mozes da banujes sebe. LoL}]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!ban (@username) (razlog)**. () ne trebas da koristis]
$onlyForRoles[782775328116047892;801810495354306591;782778612361330768;802194924539871254;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
`
})
