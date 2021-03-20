module.exports = ({
  name: 'setlogs',
  description: "Setuje kanal za logovanje. Logs: \`ban\`, \`kick\`, \`obrisi/obrisati\`, \`lock\`, \`unlock\`.",
  usage: "$getServerVar[prefix]setlogs <#taguj-kanal>.",
  code: `
  Kanal za logovanje je postavljen u <#$mentionedChannels[1]>. Logovi: \`ban\`, \`kick\`, \`obrisi/obrisati\`, \`lock\`, \`unlock\`.
  $setServerVar[regmodlogs;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{title:Greška}{description:Moraš tagovat kanal!}{footer:$serverName[]}{color:ff0000}]
  $onlyBotPerms[administrator;{title:Perms Greška}{description::x:Bot Nema \`Administrator\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
  $onlyPerms[administrator;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Community™}{color:ff0000}]
  
  $suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
  `
})
