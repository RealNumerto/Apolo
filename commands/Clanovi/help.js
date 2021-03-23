module.exports = ({
name: "help",
code: `
$title[Pomoc]
$footer[$serverName[];https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
$color[$random[0;999999]]
$description[
$addField[Komande za membere;<a:desno:800552273955782666> **$getServerVar[prefix]help clanovi** (Ovde su sve komande koje clanovi Apolo Kingdom-a mogu da koriste)]
$addField[Komande za staff;<a:desno:800552273955782666> **$getServerVar[prefix]help staff** (Ako si deo staffa moci ces da koristis ovu komandu)]]
$onlyIf[$message[1]!=clanovi;{execute:clanovi}]
$onlyIf[$message[1]!=staff;{execute:staff}]
$onlyIf[$message[1]!=nema;{execute:nema}]
`
})
