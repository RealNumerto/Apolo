module.exports = ({
  name: "@crime",
  code: `
Ti si $randomText[opljackao/la svoju babu;obio/la sef svog sefa;hakovao/la drzavu;hakovao/la profesora;opljackao/la mamu;opljackao/la tatu;obio/la prodavnicu] i dobio/la $\`$random[600;2500]\`
$setUserVar[cash;$sum[$getUserVar[cash];$random[25;500]]]
$cooldown[15m;Ako budes spamao/la uhvatice te $randomText[mama;tata;baba;profesor;policija;drug]. Plackaj opet za **{time}**]
$onlyForUsers[452811602723471390;]
`
})
