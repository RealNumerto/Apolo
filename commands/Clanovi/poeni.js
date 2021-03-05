module.exports = ({
  name: "@poeni",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Poeni]
  $footer[Brojanje je pocelo od 8.2.2021;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $color[$random[0;999999]]
  $description[
  <@$replaceText[$findUser[$message[]];undefined;$authorID]> ima: **$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]** poena!!!]
  `
})
