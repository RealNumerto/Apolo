module.exports = ({
  name: "unban",
  code: `
  $channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Unban Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Unbanovan/a: **$tag[$findUser[$message[1]]]**:no}
{field:Razlog:$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;bez razloga];false;$messageSlice[>1]]:no}
{field:Moderator: **$tag[$authorID]**:no}
{field:ID-ovi:\`\`\`
User ID = $findUser[$message[1]]
Moderator ID = $authorID\`\`\`:no}
{color:ff0000}
{timestamp}]

  $channelSendMessage[$channelID[];**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** je unbanovan/a.
Razlog: **$messageSlice[>1]**]
$unban[$message[1];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]
$onlyIf[$isBanned[$message[1]]!=false;{title:Greška}{description:Ta osoba nije banovana.}{footer:$serverName[]}{color:ff0000}]
$argsCheck[>2;{title:Greška}{description:Pogresno napisana komanda. Probaj: **!!unban (USER ID) (razlog)**. () ne trebas da koristis.}{footer:$serverName[]}{color:ff0000}]
$onlyIf[$getServerVar[regmodlogs]!={title:Greška}{description:Nije setovan kanal za logovanje. Setuj komandom: **$getServerVar[prefix]setlogs <#taguj kanal>**.}{footer:$serverName[]}{color:ff0000}]
$onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{footer:$serverName[]}{color:#17A589}]
$onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:#17A589}]

$suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{footer:$serverName[]}{color:RED}]
`
})

//Apolo///
