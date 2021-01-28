module.exports = ({
  name: "av",
  aliases: ["avatar", "av"],
  code: `
  $author[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]];$userAvatar[$replaceText[$replaceText[$checkCondition[$findUser[$message[]]==undefined];true;$authorID];false;$findUser[$message[]]];png;true;512]]
  $title[Avatar]
  $color[$random[0;999999]]
  $description[]
  $image[$userAvatar[$replaceText[$replaceText[$checkCondition[$findUser[$message[]]==undefined];true;$authorID];false;$findUser[$message[]]];png;true;512]]
  `
})
