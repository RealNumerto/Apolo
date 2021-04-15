module.exports = ({
  name: "@leaderboard",
  aliases: ['lb'], 
  code: `
$title[Economy Leaderboard]
$description[$replaceText[$userLeaderboard[total;asc;\`{top}.\` **{tag}** • $\`{value}\`];";]]
$footer[$tag[$mentioned[1;yes]];$authorAvatar]
$addTimestamp
$color[ffffff]
$onlyForUsers[452811602723471390;]
`
})

//$description[$userLeaderboard[$message[1];asc/;{top}.- {username} - ＄{value}]]//
//$onlyIf[$checkContains[$message[1];cash;bank]==true;Please add a leaderboard value! (cash / bank / total)]//
