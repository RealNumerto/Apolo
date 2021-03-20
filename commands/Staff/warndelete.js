module.exports = ({
  name: "rwarn",
  code: `
  Uspesno obrisana upozorenja gospodinu/gospodji <@$findUser[$message[1]]>
  $setUserVar[warnings;0;$findUser[$message[1]]]
  $onlyIf[$mentioned[1]!=;Taguj osobu kojoj zelis da obrises upozorenja.]
  $onlyPerms[administrator;No No No No No]
  `
})
