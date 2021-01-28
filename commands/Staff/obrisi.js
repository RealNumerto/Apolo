module.exports = ({
name: "obrisi",
code: `
  $title[Poruke Obrisane!!!]
  $color[$random[0;999999]]
  $description[Obrisano **$message[1]** poruka]
  $clear[$message[]]
  $onlyIf[$message[1]!=;Pogresno napisana komanda. Probaj: ** !!obrisi (neki broj)**. () ne trebas da koristis]
  $onlyForRoles[794558765961314314;782778612361330768;801810495354306591;782775328116047892;**:x: Nemas dozvolu da koristis ovu komandu!!!**]
  `
  })
