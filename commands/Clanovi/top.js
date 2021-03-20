module.exports = ({
  name: "@top",
  code: `
  $author[Top Liste;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $footer[$serverName[] | Brojanje je pocelo od 8.2.2021;https://media.discordapp.net/attachments/794585038812479539/796688558869446666/gif_apolo.gif]
  $color[00ff00]
  $description[$addField[Top Liste;\`poruke\` **|** \`level\` **|** \`poeni\`]
  $addField[Komanda;Da vidis top liste sledeca je komanda: \`!!top <lista>\`]]
  $onlyIf[$message[1]!=poeni;{execute:poeni}]
  $onlyIf[$message[1]!=level;{execute:level}]
  $onlyIf[$message[1]!=poruke;{execute:poruke}]
  `
})
