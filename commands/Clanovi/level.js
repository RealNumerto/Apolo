module.exports = ({
  name: "level",
  code: `
  $title[$username[$replaceText[$findUser[$message[]];undefined;$authorID]]#$discriminator[$replaceText[$findUser[$message[]];undefined;$authorID]] Level]
  $color[$random[0;999999]]
  $description[
  <@$replaceText[$findUser[$message[]];undefined;$authorID]> level je **$getUserVar[rank;$replaceText[$findUser[$message[]];undefined;$authorID]]**
  Za level up potrebno je **$getUserVar[lvl;$replaceText[$findUser[$message[]];undefined;$authorID]]\`/\`$sum[$getUserVar[req;$replaceText[$findUser[$message[]];undefined;$authorID]];300]** poena skupiti!!!]
  $replyIn[1s]
  `
})
