module.exports = ({
  name: "ban",
  code: `
  $ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]

 $author[USER ID: $findUser[$message[1]]]
 $color[576ec9]
 $thumbnail[$userAvatar[$findUser[$message[1]]]]
 $title[$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] je banovan/a!]
 $description[
 Razlog: $replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;Nije napisano];false;$messageSlice[>1]]
 ]
 $footer[Banovan/a od strane: *$username[]#$discriminator[]*]
 
 $onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$highestRole[$findUser[$message[1]]]];Ne mogu da banujem **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]**. Postavite role od **$username[$client[id]]** Role: **$roleName[$highestRole[$client[id]]]** iznad **$roleName[$highestRole[$findUser[$message[1]]]]** rola.]
 
 $onlyIf[$findUser[$message[1]]!=$ownerID;Dobar pokušaj xD, ne mogu banati server ownera.]
 $onlyIf[$findUser[$message[1]]!=$client[id];Ako uspeš banuj me, ne mogu banati sam sebe.]

 $onlyIf[$findUser[$message[1]]!=$authorID;Ne možeš banati samog sebe]
 $onlyIf[$userExists[$findUser[$message[1]]]==true;*$message[1]* ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$findUser[$message[1]]!=undefined;*$message[1]* ta osoba ne postoji ili nije na serveru. Pokušaj opet.\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyIf[$message[]!=;Koga trebam da banujem?\n\`!!ban <userID/mention> (razlog)\` - Razlog je obavezan!]
 $onlyBotPerms[ban;{title:Perms Greška}{description::x:Bot Nema \`Ban Members\` Permisiju}{color:#17A589}]
 $onlyPerms[ban;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{color:#17A589}]
  `
})
