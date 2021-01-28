module.exports = ({
  name: "serverinfo",
  code: `$title[$serverName[]]
  $description[$addField[Server Verification Level;$serverVerificationLvl[]]
  $addField[Members Count;**$membersCount[human]**]
  $addField[Boost Level;$serverBoostLevel[]]
  $addField[Boost Count;$serverBoostCount[]]
  $addField[Region;$region]
  $addField[Creation Date;$creationDate[$guildID[];guild]]
  $addField[Owner;<@$ownerID>]]
`
})
