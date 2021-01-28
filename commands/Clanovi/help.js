module.exports = ({
name: "help",
code: `
$title[Pomoc]
$footer[Apolo Community™;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[
$addField[Komande za membere;<a:point:781135170052292609> **!!help clanovi** (Ovde su sve komande koje clanovi Apolo Community-a mogu da koriste)]
$addField[Komande za staff;<a:point:781135170052292609> **!!help staff** (Ako si deo staffa moci ces da koristis ovu komandu)]]
$onlyIf[$message[1]!=clanovi;{execute:clanovi}]
$onlyIf[$message[1]!=staff;{execute:staff}]
$onlyIf[$message[1]!=nema;{execute:nema}]
`
})