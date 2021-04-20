'use strict'

const {db, models: {User, Item}, Cart } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', shippingAddress: '123 Example Lane, Great Neck, NY', billingAdress: '123 Example Lane, Great Neck, NY'}),
    User.create({ username: 'murphy', password: '123', shippingAddress: '123 Example Lane, Great Neck, NY', billingAdress: '123 Example Lane, Great Neck, NY' }),
  ])
  // const user = User.create({ username: 'cody', password: '123', shippingAddress: '123 Example Lane, Great Neck, NY', billingAdress: '123 Example Lane, Great Neck, NY'})

  console.log("magic methods", users[0].__proto__)

  const watch = await Promise.all([
    Item.create({ name: 'Seamaster', brand: 'Omega', price: 5000, decription: 'this watch is $$$'}),

  ])

  await users[0].addItem(watch[0])
  await users[0].addItem(watch[0])
  await watch[0].addItem(users[0])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

// JON WAS HERE part 2
