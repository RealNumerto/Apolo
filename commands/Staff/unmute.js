module.exports = ({
  name: "unmute",
  code: `
  $title[Unmute!!!]
  $color[$random[0;999999]]
  $description[<@$mentioned[1]> je unmutiran/a
Razlog: **$messageSlice[>1]**]
  $takeRole[$mentioned[1];$roleID[Muted]]
  $setUserVar[autounmute;no;$mentioned[1]]
  $onlyIf[$getUserVar[autounmute;$mentioned[1]]==yes;**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** nije mutiran/a]
  $onlyIf[$hasRole[$replaceText[$findUser[$message[]];undefined;$authorID];$roleID[Muted]]!=;Ova osoba nije mutirana]
  $argsCheck[>2;Pogresno napisana komanda. Probaj: **!!unmute (@user) (razlog)**. () ne trebas da koristis]
  $onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{color:#17A589}]
  $onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
  `
})
