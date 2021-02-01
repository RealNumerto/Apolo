module.exports = ({
 name: "mute",
 code: `
$takeRole[$mentioned[1];$roleID[Muted]]
$channelSendMessage[$channelID[];{title:__Mute__}{description:**<@$mentioned[1]> je automatski unmutiran!**}{thumbnail:$userAvatar[$mentioned[1];png;true;512]}{color:00faff}{footer:$serverName[]}]
$replyIn[$message[2]]
$channelSendMessage[$channelID[];{title:__Mute__}{thumbnail:$userAvatar[$mentioned[1];png;true;512]}{description:**Mutiran/a: <@$mentioned[1]> 
Od strane: <@$authorID>
Razlog: \`$replaceText[$replaceText[$checkCondition[$messageSlice[>2]==];true;bez razloga];false;$messageSlice[>2]]\`
Vreme: $message[2]**}{color:00faff}{footer:$serverName[]}]
$giveRole[$mentioned[1];$roleID[Muted]]
$onlyBotPerms[manageroles;{title::x: Greška!}{description:**Tebam imati __Manage Roles__ permisiju da bih mutovao!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$mentioned[1]!=$authorID;{title::x: Greška!}{description:**Ne mozeš mutovati sam/a sebe**}{footer:Apolo Community™}{color:ff0000}]
$onlyPerms[managemessages;{title::x: Greška!}{description:**Nemaš permisiju da koristiš ovu komandu. Trebaš imati __Manage Messages__ permisiju!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$mentioned[1]!=;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$message[2]!=;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
$textSplit[$noMentionMessage[];:]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$roleID[Muted]];{title::x: Greška!}{description:**Moj role nije iznad rola <@&$roleID[Muted]>!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1]]];{title::x: Greška!}{description:**Moj role nije iznad rola od <@$mentioned[1]>!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$roleExists[Muted]==true;{title::x: Greška!}{description:**Muted role ne postoji!**}{footer:Apolo Community™}{color:ff0000}]
$onlyIf[$userExists[$mentioned[1]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]mute <@user> <vreme> <razlog>\`**}{footer:Apolo Community™}{color:ff0000}]
`
})
