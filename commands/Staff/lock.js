module.exports = ({
  name: "lock",
  code: `
  $channelSendMessage[$getServerVar[regmodlogs];
{author:Moderator komanda izvršena: Lock Komanda} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Moderator: **$tag[$authorID]**:no}
{field:Kanal:<#$channelID>}
{color:ff0000}
{timestamp}]

  $title[Lockdown!!!]
  $footer[Apolo Community™ lockdown]
  $color[00ff00]
  $description[Uspesno zakljucan kanal <#$channelID>]
  $modifyChannelPerms[$channelID;-sendmessages;782754905932562442]
  $onlyBotPerms[administrator;{title:Perms Greška}{description::x:Bot Nema \`Administrator\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
  $onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Community™}{color:ff0000}]
  
  $suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
  `
})
