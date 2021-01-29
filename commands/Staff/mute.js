module.exports = ({
name: "mute",
code: `
$channelSendMessage[$channelID[];<@$mentioned[1]> je mutiran/a.
Razlog: **$messageSlice[>2]**]
$giveRole[$mentioned[1];$roleID[Muted]]
$argsCheck[>2;Pogresno napisana komanda. Probaj: **!!mute (@username) (razlog)**. () ne trebas da koristis]
$onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{color:#17A589}]
$onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
`
})
