module.exports = ({
 name: "mute",
 code: `
$unmute[$findUser[$message[1]];$roleID[Muted];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - Automatski unmute]]
$channelSendMessage[$channelID[];{author:Auto Unmute}{authoricon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}{description:**<@$findUser[$message[1]]> je automatski unmutiran!**}{thumbnail:$userAvatar[$findUser[$message[1]];png;true;512]}{color:00ff00}{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
$replyIn[$message[2]]
$onlyIf[$hasRole[$authorID;$roleID[Muted]]==true;]

$channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Mute Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Mutovan/a: **$tag[$mentioned[1]]**:no}
{field:Razlog:$replaceText[$replaceText[$checkCondition[$messageSlice[>2]==];true;bez razloga];false;$messageSlice[>2]]:no}
{field:Vreme:$message[2]}
{field:Moderator: **$tag[$authorID]**:no}
{field:ID-ovi:\`\`\`
User ID = $mentioned[1]
Moderator ID = $authorID\`\`\`:no}
{color:ff0000}
{timestamp}]

$channelSendMessage[$channelID[];{author:Mute}{authoricon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}{thumbnail:$userAvatar[$findUser[$message[1]];png;true;512]}{description:**Mutiran/a: <@$findUser[$message[1]]> 
Od strane: <@$authorID>
Razlog: \`$replaceText[$replaceText[$checkCondition[$messageSlice[>2]==];true;bez razloga];false;$messageSlice[>2]]\`
Vreme: $message[2]**}{color:00ff00}{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
$mute[$findUser[$message[1]];$roleID[Muted];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>2]]]
$onlyIf[$findUser[$message[1]]!=$authorID;{title::x: Greška!}{description:**Ne mozeš mutovati sam/a sebe**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$findUser[$message[1]]!=;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$message[2]!=;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];sec;];min;];hour;];days;];wweeks;];day;];week;];d;];s;];w;];m;];h;]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> *<vreme>* <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$textSplit[$noMentionMessage[];:]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$roleID[Muted]];{title::x: Greška!}{description:**Moj role nije iznad rola <@&$roleID[Muted]>!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title::x: Greška!}{description:**Moj role nije iznad rola od <@$findUser[$message[1]]>!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$roleExists[Muted]==true;{title::x: Greška!}{description:**Muted role ne postoji!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$userExists[$findUser[$message[1]]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$onlyBotPerms[manageroles;{title::x: Greška!}{description:**Tebam imati __Manage Roles__ permisiju da bih mutovao!**}{footer:Apolo Community™}{color:ff0000}]
$onlyForRoles[809542479384281119;809542278774915185;805395974759383042;805249119786369024;805225433191940116;805220500728578088;{title::x: Greška!}{description:**Nemaš dozvolu da koristiš ovu komandu!!!**}{footer:Apolo Community™}{color:ff0000}]

$suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
`
})

//$onlyPerms[managemessages;{title::x: Greška!}{description:**Nemaš permisiju da koristiš ovu komandu. Trebaš imati __Manage Messages__ permisiju!**}{footer:Apolo Community™}{color:ff0000}]//
//<@$mentioned[1]//Kick Members/kick//
//Razlog za mute/ban/kick//
//$onlyForRoles[809542479384281119;805395974759383042;805249119786369024;805225433191940116;805220500728578088;{title::x: Greška!}{description:**Nemaš permisiju da koristiš ovu komandu. Trebaš imati __Manage Messages__ permisiju!**}{footer:Apolo Community™}{color:ff0000}]//
////$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>2]]///
//$giveRole[$mentioned[1];$roleID[Muted]]///
//$takeRole[$mentioned[1];$roleID[Muted]]///
//$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];sec;];min;];hour;];days;];wweeks;];day;];week;];d;];s;];w;];m;];h;]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> *<vreme>* <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]//

//$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];h;];m;];s;];d;];w;];min;];hour;];day;];sec;];week;]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> *<vreme>* <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]//
//$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];h;];m;];s;];d;]]==true;Pogresno napisana komanda. Probaj: **!!mute (@username) (razlog)**. () ne trebas da koristis]//
