"use strict";

const {
  db,
  models: { User, Item },
  Cart,
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      shippingAddress: "123 Example Lane, Great Neck, NY",
      billingAdress: "123 Example Lane, Great Neck, NY",
    }),
    User.create({
      username: "murphy",
      password: "123",
      shippingAddress: "123 Example Lane, Great Neck, NY",
      billingAdress: "123 Example Lane, Great Neck, NY",
    }),
  ]);
  // const user = User.create({ username: 'cody', password: '123', shippingAddress: '123 Example Lane, Great Neck, NY', billingAdress: '123 Example Lane, Great Neck, NY'})

  // console.log("magic methods", users[0].__proto__)

  const watch = await Promise.all([
    Item.create({
      name: "Speedmaster Moonwatch",
      brand: "Omega",
      price: 6300,
      decription:
        "Loved on Earth and beyond, the Speedmaster Moonwatch remains a true icon in the world of watchmaking.",
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-l.png",
    }),
    Item.create({
      name: "Seamaster Diver 300M",
      brand: "Omega",
      price: 5500,
      decription:
        "Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.",
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-21030422003001-l.png",
    }),
    Item.create({
      name: "Aqua Terra 150M",
      brand: "Omega",
      price: 4900,
      decription:
        'Clean, simple and balanced. Discover the impressive redesign of the latest Seamaster Aqua Terra Gents" Collection.',
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-aqua-terra-150m-22010382003001-l.png",
    }),
    Item.create({
      name: "Planet Ocean",
      brand: "Omega",
      price: 5500,
      decription:
        'Continuing OMEGA"s rich legacy of ocean exploration, these sleek new models run deep with modern design, creative touches and Master Chronometer movements.',
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-planet-ocean-600m-21590465199001-l.png",
    }),
    Item.create({
      name: "GlobeMaster",
      brand: "Omega",
      price: 7000,
      decription:
        'As the world"s first Master Chronometer, the Globemaster has set incredible new standards of watchmaking.',
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-constellation-globemaster-13033412206001-l.png",
    }),
    Item.create({
      name: "Constellation",
      brand: "Omega",
      price: 4300,
      decription: "Discover the new look of these famous watches for women.",
      ImageURL:
        "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-constellation-13163412103001-l.png",
    }),

    Item.create({
      name: "Submariner",
      brand: "Rolex",
      price: 8100,
      decription: 'The reference among diver"s watches',
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/1/m126610ln-0001_modelpage_front_facing_landscape_1.png",
    }),
    Item.create({
      name: "Cosmograpgh Daytona",
      brand: "Rolex",
      price: 34050,
      decription:
        "Introduced in 1963, the Cosmograph Daytona was designed to meet the demands of professional racing drivers",
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/1/m116500ln-0001_modelpage_front_facing_landscape_2.png",
    }),
    Item.create({
      name: "Datejust 36",
      brand: "Rolex",
      price: 7050,
      decription: "The classic watch of reference",
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/1/m126334-0001_modelpage_front_facing_landscape_1.png",
    }),
    Item.create({
      name: "Yacht-Master II",
      brand: "Rolex",
      price: 15000,
      decription:
        "The Rolex Yacht-Master and Yacht-Master II models embody the spirit of the sailor.",
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/1/m126622-0001_modelpage_front_facing_landscape_1.png",
    }),
    Item.create({
      name: "GMT-Master II",
      brand: "Rolex",
      price: 25000,
      decription:
        "Heir to the original model, the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. ",
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/1/m126710blro-0001_modelpage_front_facing_landscape_2.png",
    }),
    Item.create({
      name: "Explorer",
      brand: "Rolex",
      price: 10800,
      decription:
        "Some of the world’s most intrepid explorers, mountaineers and scientists took Explorer and Explorer II watches to places that tested their reliability in the toughest conditions.",
      ImageURL:
        "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/cache/721c34ebe1290f580642f66e6bd1de5f/m/2/m226570-0001_modelpage_front_facing_landscape.png",
    }),

    Item.create({
      name: "Aquanaut",
      brand: "Patek Phillipe",
      price: 28000,
      decription:
        "With the rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial, the Nautilus has epitomized the elegant sports watch since 1976.",
      ImageURL:
        "https://static.patek.com/images/articles/gallery/1000/5167A_001_1.jpg",
    }),
    Item.create({
      name: "Complication",
      brand: "Patek Phillipe",
      price: 53000,
      decription:
        "The patented annual calendar was launched in 1996 and has been a success story for the past 20 years.",
      ImageURL:
        "https://static.patek.com/images/articles/gallery/1000/5905P_001_1.jpg",
    }),
    Item.create({
      name: "Grand Complication",
      brand: "Patek Phillipe",
      price: 97000,
      decription:
        "A new self-winding perpetual calendar has been added to the Patek Philippe collection.",
      ImageURL:
        "https://static.patek.com/images/articles/gallery/1000/5271P_001_1.jpg",
    }),

    Item.create({
      name: "Royal Oak",
      brand: "Audemars Piguet",
      price: 23000,
      decription:
        "The Royal Oak overturned the prevailing codes in 1972 and took its rightful place as a modern icon.",
      ImageURL:
        "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTU1MDBTVC5PTy4xMjIwU1QuMDM=/importer/watch.png.transform.appdpmaintabwide.png",
    }),
    Item.create({
      name: "[RE] Master01",
      brand: "Audemars Piguet",
      price: 60000,
      decription:
        "The [RE] Master01 reinterprets one of Audemars Piguet’s rare chronograph wristwatches with the latest chronograph technology and a dial design increasing legibility.",
      ImageURL:
        "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MjY1OTVTUi5PTy5BMDMyVkUuMDE=/importer/watch.png.transform.appdpmaintabwide.png",
    }),

    Item.create({
      name: "Overseas",
      brand: "Vacheron Constantin",
      price: 21000,
      decription:
        "Perfectly suited to active lifestyles, this steel watch houses an automatic movement with an oscillating weight in 22K gold, inspired by the wind rose, a tribute to the spirit of travel.",
      ImageURL:
        "https://www.vacheron-constantin.com/content/dam/rcq/vac/16/19/63/4/1619634.png.scale.780.1275.png",
    }),
    Item.create({
      name: "FiftySix Tourbillon",
      brand: "Vacheron Constantin",
      price: 21000,
      decription:
        "A tribute to a model from 1956, this 18K pink gold watch is the first tourbillon from the Fiftysix collection.",
      ImageURL:
        "https://www.vacheron-constantin.com/content/dam/rcq/vac/17/46/89/1/1746891.png",
    }),

    Item.create({
      name: "Reverso",
      brand: "Jaeger LeCoultre",
      price: 5350,
      decription:
        "the Reverso Classic Small watch is dressed in the unfailing brightness of stainless steel.",
      ImageURL:
        "https://www.jaeger-lecoultre.com/content/dam/rcq/jlc/18/10/91/9/1810919.png",
    }),
    Item.create({
      name: "Master Control",
      brand: "Jaeger LeCoultre",
      price: 117000,
      decription:
        "The new Master Control Calendar offers its complications their most beautiful role.",
      ImageURL:
        "https://www.jaeger-lecoultre.com/content/dam/rcq/jlc/20/27/65/2/2027652.png.crop.750.high.png",
    }),

    Item.create({
      name: "Tank",
      brand: "Cartier",
      price: 4000,
      decription:
        'The Tank Solo honors the unique aesthetic that lies behind the collection"s success, while reworking the model with a number of variations.',
      ImageURL:
        "https://www.cartier.com/content/dam/cartier_dam/catalogue_assets/manhattan-update/2-watches/facelift-components/mens-watches/tank/tank_CLP_common/FC1_A/FC1_A_01_MH_tank_CLP_2021.png.scale.768.high.png",
    }),
    Item.create({
      name: "Santos De Cartier",
      brand: "Cartier",
      price: 7000,
      decription:
        "The rounded angles of the dial, the seamless curve of the horns, and the exposed screws made for an iconic watch that would inspire countless reinterpretations.",
      ImageURL:
        "https://www.cartier.com/content/dam/cartier_dam/catalogue_assets/manhattan-update/2-watches/facelift-components/mens-watches/SANTOS_common_landing_CLP/FC1/FC1_01_MH_santos_CLP_2021.png.scale.768.high.png",
    }),

    Item.create({
      name: "1815",
      brand: "A.Lange & Sohne",
      price: 23000,
      decription:
        "With its name, the 1815 refers to the birth year of Ferdinand Adolph Lange, the manufactory’s founder.",
      ImageURL:
        "https://mediastorage.richemont.com/damdatastore/PrD/als/14/66/1466807.png?impolicy=cropresize&cropheight=1230&height=1210&cropwidth=800&width=800&type=normal",
    }),
    Item.create({
      name: "DATOGRAPH",
      brand: "A.Lange & Sohne",
      price: 81000,
      decription:
        "With their cutting-edge technology, combined with the prominence of the dial and the calibre design, the DATOGRAPH models epitomise a separate category of mechanical chronographs.",
      ImageURL:
        "https://mediastorage.richemont.com/damdatastore/PrD/als/14/66/1466501.png?impolicy=cropresize&cropheight=1230&height=1210&cropwidth=800&width=800&type=normal",
    }),
    Item.create({
      name: "Grand Lange 1",
      brand: "A.Lange & Sohne",
      price: 49400,
      decription:
        "The GRAND LANGE 1 owes its elegance not only to the harmonious dial layout but also to its slender silhouette.",
      ImageURL:
        "https://mediastorage.richemont.com/damdatastore/PrD/als/19/23/1923191.png",
    }),

    Item.create({
      name: "RM 52-05",
      brand: "Richard Mille",
      price: 300000,
      decription:
        "The development of the RM 52-05 is special for the way it hinges on interpreting an idea, a symbol and a desire.",
      ImageURL:
        "https://media.richardmille.com/wp-content/uploads/2019/11/08164954/richard-mille-rm-52-05-tourbillon-pharrell-williams-21236.png",
    }),
    Item.create({
      name: "RM 055",
      brand: "Richard Mille",
      price: 420000,
      decription:
        "The RM 055 Bubba Watson is inspired by the RM 038 Bubba Watson tourbillon watch presented in 2011.",
      ImageURL:
        "https://media.richardmille.com/wp-content/uploads/2019/01/23171231/richard-mille-rm-055-bubba-watson-14412.png",
    }),
  ]);

  await users[0].addItem(watch[0]);
  await users[0].addItem(watch[0]);
  await users[0].addItem(watch[0]);
  await watch[0].addUser(users[0]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
