module.exports = ({
 name:"obrisi",
 aliases:["obrisati"],
 code:`
 $clear[$message[]]
 $title[Brisanje Poruka Uspešno]
 $description[Uspešno Obrisano **$message[]** Poruka U <#$channelID[]>]
 $color[#17A589]
 $onlyIf[$isNumber[$message[]]==true;{title:Greška}{description:To Nije Validan Broj!}{color:#17A589}]
 $onlyIf[$message[]!=;{title:Greška}{description:Nisi Napisao/la Koliko Poruka Oćeš Da Obrišeš}{color:#17A589}]
 $onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{color:#17A589}]
 $onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
 `
})
