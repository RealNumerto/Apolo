module.exports = ({
  name: "rwarn",
  code: `
  Uspesko obrisana upozorenja gospodinu/gospodji <@$findUser[$message[1]]>
  $resetUserVar[warnings]
  `
})
