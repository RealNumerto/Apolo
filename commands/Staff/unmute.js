module.exports = ({
  name: "unmute",
  code: `
  $channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Unmute Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Unmutovan/a: **$tag[$mentioned[1]]**:no}
{field:Razlog:$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]:no}
{field:Moderator: **$tag[$authorID]**:no}
{field:ID-ovi:\`\`\`
User ID = $mentioned[1]
Moderator ID = $authorID\`\`\`:no}
{color:ff0000}
{timestamp}]

  $title[Unmute!!!]
  $color[00ff00]
  $footer[$serverName[];https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif]
  $description[<@$findUser[$message[1]]> je unmutiran/a
Razlog: **$messageSlice[>1]**]
  $unmute[$findUser[$message[1]];$roleID[Muted];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>2]]]
  $onlyIf[$hasRole[$replaceText[$findUser[$message[]];undefined;$authorID];$roleID[Muted]]!=;{title:Greška}{description:Ova osoba nije mutirana.}{footer:$serverName[]}{color:ff0000}]
  $argsCheck[>2;{title:Greška}{description:Pogresno napisana komanda. Probaj: **!!unmute (@username) (razlog)**. () ne trebas da koristis.}{footer:$serverName[]}{color:ff0000}]
  $onlyIf[$getServerVar[regmodlogs]!={title:Greška}{description:Nije setovan kanal za logovanje. Setuj komandom: **$getServerVar[prefix]setlogs <#taguj kanal>**.}{footer:$serverName[]}{color:ff0000}]
  $onlyBotPerms[manageroles;{title:Perms Greška}{description::x:Bot Nema \`Manage Roles\` Permisiju}{color:#17A589}]
  $onlyForRoles[809542479384281119;809542278774915185;805395974759383042;805249119786369024;805225433191940116;805220500728578088;{title::x: Greška!}{description:**Nemaš dozvolu da koristiš ovu komandu!!!**}{footer:$serverName[]}{color:ff0000}]
  
  $suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
  `
})

//$onlyIf[$getServerVar[regmodlogs]!={title:Greška}{description:Nije setovan kanal za logovanje. Setuj komandom: **$getServerVar[prefix]setlogs <#taguj kanal>**.}{footer:$serverName[]}{color:ff0000}]///
