module.exports = ({
name: "@@@@mute",
code: `
$channelSendMessage[$channelID[];<@$message[1]> je mutiran/a.
Razlog: **$messageSlice[>1]**]
$giveRole[$mentioned[1];$roleID[Muted]]
$argsCheck[>1;Pogresno napisana komanda. Probaj: **!!mute (@username) (razlog)**. () ne trebas da koristis]
$onlyBotPerms[manageroles;{title:Perms Greška}{description::x:Bot Nema \`Manage Roles\` Permisiju}{color:#17A589}]
$onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
`
})

///KOD ZA VREME: (TREBA VREME UPISATI DA BI KOMANDA RADILA)////
//$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];h;];m;];s;];d;]]==true;Pogresno napisana komanda. Probaj: **!!mute (@username) (razlog)**. () ne trebas da koristis]///
