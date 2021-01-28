module.exports = ({
  name: "userinfo",
  code: `
  $author[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Info;$userAvatar[$replaceText[$findUser[$message[]];undefined;$authorID]]]
  $description[<@$replaceText[$findUser[$message[]];undefined;$authorID]>
  $addField[User ID;$replaceText[$findUser[$message[]];undefined;$authorID]]
  $addField[Napravljen acc:;$creationTime[$replaceText[$findUser[$message[]];undefined;$authorID];user]
  $creationDate[$replaceText[$findUser[$message[]];undefined;$authorID];user]]
  $addField[Usao/la na server:;$creationTime[$replaceText[$findUser[$message[]];undefined;$authorID];member]
  $creationDate[$replaceText[$findUser[$message[]];undefined;$authorID];member]]
  $addField[Najveci role:;<@&$highestRole[$replaceText[$findUser[$message[]];undefined;$authorID]]>]]
  `
})
