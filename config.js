export default {
  all: {
    collection: [
      {
        label: 'getFlour',
        resolution: 'fulfilled',
        reason: "Couldn't find flour on the supermarket",
        result: '🌾'
      },
      {
        label: 'getTomato',
        resolution: 'fulfilled',
        reason: "It's not tomato season",
        result: `🍅`
      },
      {
        label: 'getCheese',
        resolution: 'fulfilled',
        reason: 'We ran out of cheese',
        result: '🧀'
      }
    ],
    thenStatements: [
      'results => results.join(" + ") + "= 🍕"',
      'result => console.log(result)'
    ],
    catchStatement: 'reason => console.error(reason)',
    thenMethod: (results) => results.join(' + ') + ' = 🍕',
    catchMethod: (reason) => reason
  },
  race: {
    collection: [
      {
        label: 'turtle',
        resolution: 'fulfilled',
        reason: 'Turtle went for food',
        result: '🐢'
      },
      {
        label: 'bunny',
        resolution: 'fulfilled',
        reason: 'Bunny went for a nap',
        result: `🐇`
      },
      {
        label: 'snail',
        resolution: 'fulfilled',
        reason: 'Snail got bored',
        result: '🐌'
      }
    ],
    thenStatements: [`winner => console.log(winner + ' got first!')`],
    catchStatement:
      "reason => console.error(reason + ', the race is cancelled')",
    thenMethod: (winner) => winner + ' got first!',
    catchMethod: (reason) => reason + ', the race is cancelled'
  },
  allSettled: {
    collection: [
      {
        label: 'findOranges',
        resolution: 'fulfilled',
        reason: '🍊',
        result: '🍊'
      },
      {
        label: 'findAvocados',
        resolution: 'fulfilled',
        reason: '🥑',
        result: '🥑'
      },
      {
        label: 'findBananas',
        resolution: 'rejected',
        reason: '🍌',
        result: '🍌'
      }
    ],
    thenStatements: [
      `outcomes => {
  outcomes
    .filter(p => p.status === 'rejected')
    .map(f => console.log('No ' + f.reason + ' were found'))
  
  outcomes
    .filter(p => p.status === 'rejected')
    .map(f => console.log('We found ' + f.value))
}`
    ],
    thenMethod: (outcomes) => {
      const rejected = outcomes
        .filter((p) => p.status === 'rejected')
        .map((f) => 'No ' + f.reason + ' were found')

      const fulfilled = outcomes
        .filter((p) => p.status === 'fulfilled')
        .map((f) => 'We found ' + f.value)

      return [...rejected, ...fulfilled]
    },
    catchMethod: (reason) => console.error(reason)
  },
  any: {
    collection: [
      {
        label: 'findPastaInMenu',
        resolution: 'rejected',
        reason: '🍝',
        result: '🍝'
      },
      {
        label: 'findPancakesInMenu',
        resolution: 'fulfilled',
        reason: '🥞',
        result: '🥞'
      },
      {
        label: 'findRiceInMenu',
        resolution: 'rejected',
        reason: '🍛',
        result: '🍛'
      }
    ],
    thenStatements: [
      `firstMeal => console.log('We found ' + firstMeal + ' and we stopped!')`
    ],
    catchStatement: `allMissingMeals => console.log(\`We couldn't find any \` + allMissingMeals)`,
    thenMethod: (firstMeal) => 'We found ' + firstMeal + ' and we stopped!',
    catchMethod: (allMissingMeals) => `We couldn't find any ` + allMissingMeals
  }
}
