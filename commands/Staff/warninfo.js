module.exports = ({
  name: "warninfo",
  code: `
  $title[Userinfo]
$description[** **]
$addField[Broj Upozorenja:;$getUserVar[warnings];yes]

$addField[Account napravljen:;$creationDate[$replaceText[$findUser[$message[1]];undefined;$authorID]];yes]

$addField[Usao/la na server:;$creationTime[$replaceText[$findUser[$message[1]];undefined;$authorID];member];yes]

$addField[Server nickname:;<@$replaceText[$findUser[$message[1]];undefined;$authorID]>;yes]

$addField[Discord tag:;**$tag[$replaceText[$findUser[$message[1]];undefined;$authorID]]**;yes]
$color[46FF00]
$thumbnail[$userAvatar[$replaceText[$findUser[$message[1]];undefined;$authorID];png;true;512]]
$footer[Komandu izvrsio/la: $tag[$authorID]] 
$addTimestamp

$onlyBotPerms[managemessages;{title:Perms Greška}{description::x:Bot Nema \`Manage Messages\` Permisiju}{footer:$serverName[]}{color:ff0000}]
$onlyPerms[managemessages;{title:Perms Greška}{description::x:Nemaš dozvolu da koristiš ovu komandu}{footer:$serverName[]}{color:ff0000}]
`
})
