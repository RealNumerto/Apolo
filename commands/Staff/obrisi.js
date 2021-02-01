module.exports = ({
 name:"obrisi",
 aliases:["obrisati"],
 code:`
 $clear[$message[]]
 $title[Brisanje Poruka Uspešno]
 $description[Uspešno Obrisano **$message[]** Poruka U <#$channelID[]>]
 $color[#17A589]
 $onlyIf[$isNumber[$message[]]==true;{title:Greška}{description:To Nije Validan Broj!}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$message[]!=;{title:Greška}{description:Nisi Napisao/la Koliko Poruka Oćeš Da Obrišeš}{footer:Apolo Community™}{color:ff0000}]
 $onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Permissions\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
 $onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Community™}{color:ff0000}]
 `
})
