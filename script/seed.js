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

  // console.log("magic methods", users[0].__proto__)

  const watch = await Promise.all([
    Item.create({ name: 'Seamaster Diver 300M', brand: 'Omega', price: 5500, decription: 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.'}),
    Item.create({ name: 'Aqua Terra 150M', brand: 'Omega', price: 4900, decription: 'Clean, simple and balanced. Discover the impressive redesign of the latest Seamaster Aqua Terra Gents" Collection.'}),
    Item.create({ name: 'Constellation', brand: 'Omega', price: 4300, decription: 'Discover the new look of these famous watches for women.'}),
    Item.create({ name: 'GlobeMaster', brand: 'Omega', price: 7000, decription: 'As the world"s first Master Chronometer, the Globemaster has set incredible new standards of watchmaking.'}),
    Item.create({ name: 'Planet Ocean', brand: 'Omega', price: 5500, decription: 'Continuing OMEGA"s rich legacy of ocean exploration, these sleek new models run deep with modern design, creative touches and Master Chronometer movements.'}),
    Item.create({ name: 'Speedmaster Moonwatch', brand: 'Omega', price: 6300, decription: 'Loved on Earth and beyond, the Speedmaster Moonwatch remains a true icon in the world of watchmaking.'}),
    Item.create({ name: 'Submariner', brand: 'Rolex', price: 8100, decription: 'The reference among diver"s watches'}),
    Item.create({ name: 'Datejust 36', brand: 'Rolex', price: 7050, decription: 'The classic watch of reference'}),
    Item.create({ name: 'Yacht-Master II', brand: 'Rolex', price: 15000, decription: 'The Rolex Yacht-Master and Yacht-Master II models embody the spirit of the sailor.'}),
    Item.create({ name: 'Cosmograpgh Daytona', brand: 'Rolex', price: 34050, decription: 'Introduced in 1963, the Cosmograph Daytona was designed to meet the demands of professional racing drivers'}),
    Item.create({ name: 'GMT-Master II', brand: 'Rolex', price: 25000, decription: 'Heir to the original model, the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. '}),
    Item.create({ name: 'Explorer', brand: 'Rolex', price: 10800, decription: 'Some of the world’s most intrepid explorers, mountaineers and scientists took Explorer and Explorer II watches to places that tested their reliability in the toughest conditions.'}),
    Item.create({ name: 'Aquanaut', brand: 'Patek Phillipe', price: 28000, decription: 'With the rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial, the Nautilus has epitomized the elegant sports watch since 1976.'}),
    Item.create({ name: 'Complication', brand: 'Patek Phillipe', price: 53000, decription: 'The patented annual calendar was launched in 1996 and has been a success story for the past 20 years.'}),
    Item.create({ name: 'Grand Complication', brand: 'Patek Phillipe', price: 97000, decription: 'A new self-winding perpetual calendar has been added to the Patek Philippe collection.'}),
    Item.create({ name: 'Datejust 36', brand: 'Rolex', price: 7050, decription: 'The classic watch of reference'}),
    Item.create({ name: 'Royal Oak', brand: 'Audemars Piguet', price: 23000, decription: 'The Royal Oak overturned the prevailing codes in 1972 and took its rightful place as a modern icon.'}),
    Item.create({ name: '[RE] Master01', brand: 'Audemars Piguet', price: 60000, decription: 'The [RE] Master01 reinterprets one of Audemars Piguet’s rare chronograph wristwatches with the latest chronograph technology and a dial design increasing legibility.'}),
    Item.create({ name: 'Overseas', brand: 'Vacheron Constantin', price: 21000, decription: 'Perfectly suited to active lifestyles, this steel watch houses an automatic movement with an oscillating weight in 22K gold, inspired by the wind rose, a tribute to the spirit of travel.'}),
    Item.create({ name: 'Reverso', brand: 'Jaeger LeCoultre', price: 5350, decription: 'the Reverso Classic Small watch is dressed in the unfailing brightness of stainless steel.'}),
    Item.create({ name: 'Master Control', brand: 'Jaeger LeCoultre', price: 11000, decription: 'The new Master Control Calendar offers its complications their most beautiful role.'}),
    Item.create({ name: 'Tank', brand: 'Cartier', price: 4000, decription: 'The Tank Solo honors the unique aesthetic that lies behind the collection"s success, while reworking the model with a number of variations.'}),
    Item.create({ name: 'Santos De Cartier', brand: 'Cartier', price: 7000, decription: 'The rounded angles of the dial, the seamless curve of the horns, and the exposed screws made for an iconic watch that would inspire countless reinterpretations.'}),
    Item.create({ name: '1815', brand: 'A.Lange & Sohne', price: 23000, decription: 'With its name, the 1815 refers to the birth year of Ferdinand Adolph Lange, the manufactory’s founder.'}),
    Item.create({ name: 'DATOGRAPH', brand: 'A.Lange & Sohne', price: 81000, decription: 'With their cutting-edge technology, combined with the prominence of the dial and the calibre design, the DATOGRAPH models epitomise a separate category of mechanical chronographs. '}),
    Item.create({ name: 'Grand Lange 1', brand: 'A.Lange & Sohne', price: 49400, decription: 'The GRAND LANGE 1 owes its elegance not only to the harmonious dial layout but also to its slender silhouette.'}),
    Item.create({ name: 'RM 52-05', brand: 'Richard Mille', price: 300000, decription: 'The development of the RM 52-05 is special for the way it hinges on interpreting an idea, a symbol and a desire.'}),
    Item.create({ name: 'RM 055', brand: 'Richard Mille', price: 420000, decription: 'The RM 055 Bubba Watson is inspired by the RM 038 Bubba Watson tourbillon watch presented in 2011.'}),
  ])

  await users[0].addItem(watch[0])
  await users[0].addItem(watch[0])
  await users[0].addItem(watch[0])
  await watch[0].addUser(users[0])

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

