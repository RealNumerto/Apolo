module.exports = ({
  name: "@bal",
//  aliases: "--balance",
  code: `
$title[$username[$mentioned[1;yes]]'s balance]
$description[Cash: \`$$getUserVar[cash;$mentioned[1;yes]]\`

Bank: \`$$getUserVar[bank;$mentioned[1;yes]]\`

Total: \`$$sum[$getUserVar[cash;$mentioned[1;yes]];$getUserVar[bank;$mentioned[1;yes]]]\`
]
$footer[$username;$authorAvatar]
$color[ff00ff]
$addTimestamp
$onlyForUsers[452811602723471390;]
`
})
