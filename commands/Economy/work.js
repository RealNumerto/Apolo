module.exports = ({
  name: "@work",
  code: `
Radio/la si kao $randomText[Farmer;Developer;Investigator;Hemicar;Discord Staff;Ekonomista;Prodavac na kasi;Pekar] i zaradio/la $\`$random[100;600]\`
$setUserVar[cash;$sum[$getUserVar[cash];$random[100;600]]]
$setUserVar[total;$sum[$getUserVar[total];$random[100;600]]]
$cooldown[1m;Kako te ne mrzi da radis? Smena ti pocinje opet za **{time}**]
$onlyForUsers[452811602723471390;]
`
})
