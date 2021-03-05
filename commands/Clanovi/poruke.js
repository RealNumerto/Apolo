module.exports = ({
  name: "@poruke",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] broj poruka]
  $color[$random[0;999999]]
  $footer[Brojanje je pocelo od 8.2.2021;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $description[
  Ukupno poruka poslato od strane <@$replaceText[$findUser[$message[]];undefined;$authorID]>:
  **$getUserVar[msg;$replaceText[$findUser[$message[]];undefined;$authorID]]** poruka]
  `
})
