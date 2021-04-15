module.exports = ({
  name: "@with",
  code: `
$setUserVar[bank;$sub[$getUserVar[bank];$message[1]]]
$setUserVar[cash;$sum[$getUserVar[cash];$message[1]]]
You have withdrawn $\`$message[1]\`
$argsCheck[>1;Please type a number of cash to withdraw!]
$onlyIf[$message[1]<=$getUserVar[bank];You dont have that amount of money on bank!]
$onlyForUsers[452811602723471390;]
`
})
