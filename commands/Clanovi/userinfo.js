module.exports = ({
  name: "userinfo",
  code: `
  $title[Userinfo]
$description[** **]

$addField[Da li je boostovao/la **$serverName[]**:;**$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;Jeste];false;Nije]**;yes]

$addField[Platforma; $replaceText[$replaceText[$replaceText[$platform[$mentioned[1]];mobile; 📱 mobile];web; 💻 web];desktop; 🖥️ desktop];yes]

$addField[Da li je bot:;**$replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;Nije];true;Jeste]**;yes]

$addField[User badges:;$getUserBadges[$mentioned[1;yes]];yes]

$addField[User roles:;$memberRoles[$mentioned[1;yes]];yes]

$addField[Account napravljen:;$creationDate[$mentioned[1;yes]];yes]

$addField[Usao/la na server:;$creationTime[$mentioned[1;yes];member];yes]

$addField[Server nickname:;<@$mentioned[1;yes]>;yes]

$addField[Discord tag:;**$tag[$mentioned[1]]**;yes]
$color[46FF00]
$thumbnail[$userAvatar[$mentioned[1;yes];png;true;512]]
$footer[Komandu izvrsio/la: $username[$authorID]] 
$addTimestamp
`
})
