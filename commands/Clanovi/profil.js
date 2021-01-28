module.exports = ({
  name: "profil",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] profil!!!]
  $color[$random[0;999999]]
  $description[
  $addField[Broj Poruka:;**$getUserVar[msg;$replaceText[$findUser[$message[]];undefined;$authorID]]**]
  $addField[Broj Poena:;**$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]**]
  $addField[Level:;**$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]]**]]
  `
})
