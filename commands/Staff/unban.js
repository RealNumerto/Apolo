module.exports = ({
  name: "unban",
  code: `
  $channelSendMessage[$channelID[];**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan/a.
Razlog: **$messageSlice[>1]**]
$unban[$message[1];$messageSlice[>1]]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!unban (USER ID) (razlog)**. () ne trebas da koristis]
$onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{color:#17A589}]
$onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
`
})
