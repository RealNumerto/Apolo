module.exports = ({
  name: "userinfo",
  code: `
  $title[Userinfo]
$description[** **]
$addField[Da li je boostovao/la **$serverName[]**:;**$replaceText[$replaceText[$isBoosting[$replaceText[$findUser[$message[]];undefined;$authorID]];true;Jeste];false;Nije]**;yes]

$addField[Platforma; $replaceText[$replaceText[$replaceText[$platform[$replaceText[$findUser[$message[]];undefined;$authorID]];mobile; 📱 mobile];web; 💻 web];desktop; 🖥️ desktop];yes]

$addField[Da li je bot:;**$replaceText[$replaceText[$isBot[$replaceText[$findUser[$message[]];undefined;$authorID]];false;Nije];true;Jeste]**;yes]

$addField[User značke:;$replaceText[$replaceText[$checkCondition[$getUserBadges[$replaceText[$findUser[$message[]];undefined;$authorID]]==];true;Nema];false;$getUserBadges[$replaceText[$findUser[$message[]];undefined;$authorID]]];yes]

$addField[User roles:;$memberRoles[$replaceText[$findUser[$message[]];undefined;$authorID]];yes]

$addField[Account napravljen:;$creationDate[$replaceText[$findUser[$message[]];undefined;$authorID]];yes]

$addField[Usao/la na server:;$creationTime[$replaceText[$findUser[$message[]];undefined;$authorID];member];yes]

$addField[Server nickname:;<@$replaceText[$findUser[$message[]];undefined;$authorID]>;yes]

$addField[Discord tag:;**$tag[$mentioned[1]]**;yes]
$color[46FF00]
$thumbnail[$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID];png;true;512]]
$footer[Komandu izvrsio/la: $tag[$authorID]] 
$addTimestamp
`
})
