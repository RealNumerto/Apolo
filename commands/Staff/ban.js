module.exports = ({
  name: "ban",
  code: `
  $ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]

 $author[USER ID: $findUser[$message[1]]]
 $color[576ec9]
 $thumbnail[$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID];png;true;512]]
 $title[$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] je banovan/a!]
 $description[
 Razlog: $replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]
 ]
 $footer[Banovan/a od strane: *$username[]#$discriminator[]*]
 
 $onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$highestRole[$findUser[$message[1]]]];{title:Greška}{description:Ne mogu da banujem **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]**. Postavite role od **$username[$client[id]]** Role: **$roleName[$highestRole[$client[id]]]** iznad **$roleName[$highestRole[$findUser[$message[1]]]]** rola.}{footer:Apolo Community™}{color:ff0000}]
 
 $onlyIf[$findUser[$message[1]]!=$ownerID;{title:Greška}{description:Dobar pokušaj xD, ne mogu banati server ownera.}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$findUser[$message[1]]!=$client[id];{title:Greška}{description:Ako uspeš banuj me, ne mogu banati sam sebe.}{footer:Apolo Community™}{color:ff0000}]

 $onlyIf[$findUser[$message[1]]!=$authorID;{title:Greška}{description:Ne možeš banati samog sebe}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$userExists[$findUser[$message[1]]]==true;**$message[1]** <-- ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$findUser[$message[1]]!=undefined;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** <-- ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$findUser[$message[1]]!=undefined;{title:Greška}{description:Ta osoba ne postoji ili nije na serveru.}{footer:Apolo Community™}{color:ff0000}]
 $onlyIf[$message[]!=;{title:Koga trebam da banujem?}{description:\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!}{footer:Apolo Community™}{color:ff0000}]
 $onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{footer:Apolo Community™}{color:ff0000}]
 $onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:Apolo Community™}{color:ff0000}]
  `
})
