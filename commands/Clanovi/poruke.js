module.exports = ({
  name: "poruke",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] broj poruka]
  $color[$random[0;999999]]
  $description[
  Ukupno poruka poslato od strane <@$replaceText[$findUser[$message[]];undefined;$authorID]>:
  **$getUserVar[msg;$replaceText[$findUser[$message[]];undefined;$authorID]]** poruka]
  `
})
