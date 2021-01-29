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
$onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{color:#17A589}]
$onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
`
})
