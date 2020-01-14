const whoLivesLoop = (people = 0) => {
    let peopleArr = Array.from({ length: people }, (_, idx) => idx + 1)
    while (peopleArr.length > 1) peopleArr = peopleArr.filter((_, idx, original) => (
      !(idx === 0 && original.length % 2 || idx % 2)
    ))
    return peopleArr[0] || null
  }

  const whoLivesRecursive = people => {
    let peopleArr = Array.isArray(people) ? people : Array.from({ length: people || 0 }, (_, idx) => idx + 1)
    return peopleArr.length > 1
      ? whoLivesRecursive(peopleArr.filter((_, idx, original) => (
        !(idx === 0 && original.length % 2 || idx % 2)
      )))
    : peopleArr[0] || null
  }

  console.log(whoLivesLoop(100))
  console.log(whoLivesRecursive(100))