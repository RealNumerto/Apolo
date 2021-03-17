module.exports = ({
  name: "ban",
  code: `
  $ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]

 $author[Ban sa servera Apolo Community™;https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif]
 $color[00ff00]
 $footer[Ban od strane: $username[]#$discriminator[];https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif]
 $description[Razlog: $replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]]
 $dm[$findUser[$message[1]]]
 
 $onlyIf[$isUserDMEnabled[$findUser[$message[1]]]==true;$ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]]
 
 $channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Ban Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Banovan/a:**$tag[$findUser[$message[1]]]**:no}
{field:Razlog:$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]:no}
{field:Moderator:**$tag[$authorID]**:no}
{field:ID-ovi:\`\`\`
User ID = $findUser[$message[1]]
Moderator ID = $authorID\`\`\`:no}
{color:ff0000}
{timestamp}]

 $channelSendMessage[$channelID[];{author:USER ID: $findUser[$message[1]]}{authoricon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}
 {color:00ff00}
 {thumbnail:$userAvatar[$replaceText[$findUser[$message[1]];undefined;$authorID];png;true;512]}
 {title:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] je banovan/a!}
 {description: Razlog: $replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]}
 {footer:Banovan/a od strane: $username[]#$discriminator[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
 
 $onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$highestRole[$findUser[$message[1]]]];{title:Greška}{description:Ne mogu da banujem **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]**. Postavite role od **$username[$client[id]]** Role: **$roleName[$highestRole[$client[id]]]** iznad **$roleName[$highestRole[$findUser[$message[1]]]]** rola.}{footer:Apolo Community™}{color:ff0000}]
 
 $onlyIf[$findUser[$message[1]]!=$ownerID;{title:Greška}{description:Dobar pokušaj xD, ne mogu banati server ownera.}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$findUser[$message[1]]!=$client[id];{title:Greška}{description:Ako uspeš banuj me, ne mogu banati sam sebe.}{footer:Apolo Community™}{color:ff0000}]

 $onlyIf[$findUser[$message[1]]!=$authorID;{title:Greška}{description:Ne možeš banati samog sebe}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$userExists[$findUser[$message[1]]]==true;**$message[1]** <-- ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$findUser[$message[1]]!=undefined;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** <-- ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$findUser[$message[1]]!=undefined;{title:Greška}{description:Ta osoba ne postoji ili nije na serveru.}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$message[]!=;{title:Koga trebam da banujem?}{description:\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$getServerVar[regmodlogs]!={title:Greška}{description:Nije setovan kanal za logovanje. Setuj komandom: **$getServerVar[prefix]setlogs <#taguj kanal>**.}{footer:$serverName[]}{color:ff0000}]
 $onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
 $onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Community™}{color:ff0000}]
 
 $suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
  `
})

///$onlyIf[$isUserInGuild[$findUser[$message[1]];$guildID]==true;Ta osoba ne postoji ili nije na serveru.]///
//$isUserDMEnabled[$findUser[$message[1]]]///
