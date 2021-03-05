module.exports = ({
 name:"obrisi",
 aliases:["obrisati"],
 code:`
 $channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Obrisati/Obriši Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Obrisano: **$message[1]** poruka:no}
{field:Moderator: **$tag[$authorID]**:no}
{color:ff0000}
{timestamp}]

 $clear[$message[]]
 $title[Brisanje Poruka Uspešno]
 $description[Uspešno Obrisano **$message[]** Poruka U <#$channelID[]>]
 $color[00ff00]
 $onlyIf[$isNumber[$message[]]==true;{title:Greška}{description:To Nije Validan Broj!}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$message[]!=;{title:Greška}{description:Nisi Napisao/la Koliko Poruka Oćeš Da Obrišeš}{footer:Apolo Community™}{color:ff0000}]
 $onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
 $onlyForRoles[809542479384281119;805395974759383042;805249119786369024;805225433191940116;805220500728578088;{title::x: Greška!}{description:**Nemaš dozvolu da koristiš ovu komandu!!!**}{footer:Apolo Community™}{color:ff0000}]
 
 $suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
 `
})
