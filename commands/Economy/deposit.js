module.exports = ({
  name: "@dep",
  code: `
$setUserVar[cash;$sub[$getUserVar[cash];$message[1]]]
$setUserVar[bank;$sum[$getUserVar[bank];$message[1]]]
You have deposited $\`$message[1]\` in Bank.
$onlyIf[$message[1]<=$getUserVar[cash];You dont have that amount of money to deposit!]
$argsCheck[>1;Please type a number of cash to deposit!]
$onlyIf[$message[1]<=$getUserVar[cash];You dont have that amount of money on cash!]
$onlyForUsers[452811602723471390;]
`
})
