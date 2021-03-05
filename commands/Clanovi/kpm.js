let bot = "$randomText[kamen;papir;makaze]";
 
module.exports = ({
name: "kpm",
description: "Igraj Kamen, Papir, Makaze sa botom :D",
usage: "!!kpm <item>",
code: `
$onlyIf[$toLowercase[$message[1]]!=kamen;{title:Kamen Papir Makaze}
{description:**Ajde da vidimo ko je pobedio!**}
{color:RANDOM}
{field:$tag[$authorID] je izabrao/la:$toLowercase[$message[1]]:no}
{field:$tag[$client[id]] je izabrao:${bot}:no}
{field:🏆 Pobednik:$replaceText[$replaceText[$checkCondition[kamen==${bot}];true;Izjednaceno];false;$replaceText[$replaceText[$checkCondition[papir==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[makaze==${bot}];true;$tag[]];false;]]]}
{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
 
$onlyIf[$toLowercase[$message[1]]!=papir;{title:Kamen Papir Makaze}
{description:**Ajde da vidimo ko je pobedio!**}
{color:RANDOM}
{field:$tag[$authorID] je izabrao/la:$toLowercase[$message[1]]:no}{field:$tag[$client[id]] je izabrao:${bot}:no}
{field:🏆 Pobednik:$replaceText[$replaceText[$checkCondition[papir==${bot}];true;Izjednaceno];false;$replaceText[$replaceText[$checkCondition[makaze==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[kamen==${bot}];true;$tag[]];false;]]]}
{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
 
$onlyIf[$toLowercase[$message[1]]!=makaze;{title:Kamen Papir Makaze}
{description:**Ajde da vidimo ko je pobedio!**}
{color:RANDOM}
{field:$tag[$authorID] je izabrao/la:$toLowercase[$message[1]]:no}
{field:$tag[$client[id]] je izabrao:${bot}:no}
{field:🏆 Pobednik:$replaceText[$replaceText[$checkCondition[makaze==${bot}];true;Izjednaceno];false;$replaceText[$replaceText[$checkCondition[kamen==${bot}];true;$tag[$client[id]]];false;$replaceText[$replaceText[$checkCondition[papir==${bot}];true;$tag[]];false;]]]}
{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
 
$onlyIf[$checkContains[$toLowercase[$message[1]];kamen;papir;makaze]==true;{title:Izaberi neki od sledecih predmeta.}{description:Kamen  |  Papir  |  Makaze\n \`\`\`$getServerVar[prefix]kpm <predmet>\`\`\`}{color:RED}{footer:$serverName[]}{footericon:https://media.discordapp.net/attachments/805212375133061161/807591306280304660/gif_apolo.gif}]
 
 
$suppressErrors[{title:Greška?}{description:Nešto nije u redu. Ako se ovo nastavi, kontaktiraj bot developera.}{color:RED}]
`
})

////Tie///
