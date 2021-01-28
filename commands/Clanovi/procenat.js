module.exports = ({
   name: "procenat",
   code: `
$title[$username[]#$discriminator[$authorID] je postavio/la pitanje]
$footer[Pitanje postavio/la $username[]#$discriminator[$authorID];$userAvatar[userID;png;true;512]]
$color[772773]
$description[]
$addField[Odgovor bota:;$random[0;100]%;no]
$addField[Pitanje:;$message[];no]
$argsCheck[>1;Napisi neko pitanje koje ti padne na pamet]
`
})
