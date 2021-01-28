module.exports = ({
  name: "poeni",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Poeni]
  $color[$random[0;999999]]
  $description[
  <@$replaceText[$findUser[$message[]];undefined;$authorID]> ima: **$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]** poena!!!]
  `
})
