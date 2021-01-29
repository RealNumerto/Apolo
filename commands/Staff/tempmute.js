module.exports = ({
 name: "tempmute",
 code: `
$takeRole[$mentioned[1];$roleID[Muted]]
$channelSendMessage[$channelID[];{title:__Tempmute__}{description:**<@$mentioned[1]> je automatski unmutiran!**}{thumbnail:$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID];png;true;512]}{color:00faff}{footer:$serverName[]}]
$replyIn[$message[2]]
$channelSendMessage[$channelID[];{title:__Tempmute__}{thumbnail:$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID];png;true;512]}{description:**Mutiran/a: <@$mentioned[1]> 
Od strane: <@$authorID>
Razlog: \`$replaceText[$replaceText[$checkCondition[$messageSlice[>2]==];true;bez razloga];false;$messageSlice[>2]]\`
Vreme: $message[2]**}{color:00faff}{footer:$serverName[]}]
$giveRole[$mentioned[1];$roleID[Muted]]
$onlyBotPerms[manageroles;{title::x: Greška!}{description:**Tebam imati __Manage Roles__ permisiju da bih mutovao!**}{color:d0321d}]
$onlyIf[$mentioned[1]!=$authorID;{title::x: Greška!}{description:**Ne mozeš mutovati sam/a sebe**}{color:d0321d}]
$onlyPerms[kick;{title::x: Greška!}{description:**Nemaš permisiju da koristiš ovu komandu. Trebaš imati __Kick Members__ permisiju!**}{color:d0321d}]
$onlyIf[$mentioned[1]!=;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]tempmute <@user> <vreme> <razlog>\`**}{color:d0321d}]
$onlyIf[$message[2]!=;{title::x: Missing arguments!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]tempmute <@user> <vreme> <razlog>\`**}{color:d0321d}]
$textSplit[$noMentionMessage[];:]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$roleID[Muted]];{title::x: Greška!}{description:**Moj role nije iznad rola <@&$roleID[Muted]>!**}{color:d0321d}]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1]]];{title::x: Greška!}{description:**Moj role nije iznad rola od <@$mentioned[1]>!**}{color:d0321d}]
$onlyIf[$roleExists[Muted]==true;{title::x: Greška!}{description:**Muted role ne postoji!**}{color:d0321d}]
$onlyIf[$userExists[$mentioned[1]]==true;{title::x: Greška!}{description:**Pogrešno napisana komanda. Probaj ovako: \n\`$getServerVar[prefix]tempmute <@user> <vreme> <razlog>\`**}{color:d0321d}]
`
})
