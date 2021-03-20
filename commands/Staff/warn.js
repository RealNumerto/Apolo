module.exports = ({
  name: "warn",
  code: `

$setUserVar[warnings;$sum[$getUserVar[warnings;$mentioned[1]];1];$mentioned[1]]

$channelSendMessage[$channelID[];{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
{author:Upozorenje}
  {thumbnail:$serverIcon}
  {field:Upozorenje zapisano u: <#$getServerVar[regmodlogs]>:no}
  {field:Upozoren/a: <@$mentioned[1]>:no}
  {field:Razlog:$messageSlice[>1]:no}
  {field:Upozoren/a od strane: <@$authorID>:no}
  {color:ff0000}
  {timestamp}]

$channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Warn Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Upozoren/a: **$tag[$mentioned[1]]**:no} 
{field:Broj upozorenja: $sum[$getUserVar[warnings;$mentioned[1]];1]:no} 
{field:Razlog:$messageSlice[>1]}
{field:Moderator: **$tag[$authorID]**:no} 
{field:ID-ovi:\`\`\`
User ID = $mentioned[1]
Moderator ID = $authorID\`\`\`:no} 
{color:ff0000}]

$onlyIf[$messageSlice[>1]!=;{title:Greška}{description:Obavezno je napisati razlog upozorenja.}{footer:$serverName[]}{color:ff0000}]
$onlyIf[$mentioned[1]!=$client[id];{title:Greška}{description:Što bih ja dobio upozorenje?}{footer:$serverName[]}{color:ff0000}]
$onlyIf[$mentioned[1]!=$authorID;{title:Greška}{description:Ne možes sam sebe da upozoriš.}{footer:$serverName[]}{color:ff0000}]
$onlyIf[$mentioned[1]!=;{title:Greška}{description:Taguj nekoga da bih ga/je upozorio.}{footer:$serverName[]}{color:ff0000}]
$onlyIf[$getServerVar[regmodlogs]!={title:Greška}{description:Nije setovan kanal za logovanje. Setuj komandom: **$getServerVar[prefix]setlogs <#taguj kanal>**.}{footer:$serverName[]}{color:ff0000}]
$onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Messages\` Permisiju}{footer:$serverName[]}{color:ff0000}]
$onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]

$suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
`
})
