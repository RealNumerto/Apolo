module.exports = ({
  name: "unmute",
  code: `
  $title[Unmute!!!]
  $color[$random[0;999999]]
  $description[<@$mentioned[1]> je unmutiran/a
Razlog: **$messageSlice[>1]**]
  $takeRole[$mentioned[1];$roleID[Muted]]
  $setUserVar[autounmute;no;$mentioned[1]]
  $onlyIf[$hasRole[$replaceText[$findUser[$message[]];undefined;$authorID];$roleID[Muted]]!=;Ova osoba nije mutirana]
  $argsCheck[>2;Pogresno napisana komanda. Probaj: **!!unmute (@username) (razlog)**. () ne trebas da koristis]
  $onlyBotPerms[manageroles;{title:Perms Greška}{description::x:Bot Nema \`Manage Roles\` Permisiju}{color:#17A589}]
  $onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
  `
})
