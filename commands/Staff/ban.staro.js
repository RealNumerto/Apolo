module.exports = ({
  name: "@@bandana@@",
  code: `
$channelSendMessage[$channelID[];<@$findUser[$message[1]]> je banovan/a.
Razlog: **$messageSlice[>1]**]
$ban[$findUser[$message[1]];$messageSlice[>1]]
$onlyIf[$findUser[$message[1]]!=$ownerID;{title:Ban Error}{description:Dobar pokusaj. Ne mozes da banujes server vlasnika.}]
$onlyIf[$findUser[$message[1]]!=$client[id];{title:Ban Error}{description:Banaj me ako mozes xD. Ne mogu ja da banam sam sebe.}]
$onlyIf[$findUser[$message[1]]!=$authorID;{title:Ban Error}{description:Ne mozes da banujes sebe. LoL}]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!ban (@username) (razlog)**. () ne trebas da koristis]
$onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{color:#17A589}]
$onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
`
})
