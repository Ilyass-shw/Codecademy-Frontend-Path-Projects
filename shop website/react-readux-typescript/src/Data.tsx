interface Item {
  id: number;
  category: 'jewelry' | 'photoprints';
  name: string;
  price: number;
  description: string;
  imgs: string[];
}
const Items: Item[] = [
  {
    id: 1,
    category: 'jewelry',
    name: 'DESTINY – ARMCUFF',
    price: 236.64,
    description:
      'A elegant double armcuff with a curved center, crafted in sterling silver. –  Made from two 3 mm silver wires. Comes with a “Jonna Jinton Sweden” polishing cloth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/destiny-armcuff-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freya-destiny-armcuff-jonnajinton4-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/destiny-armcuff-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-destiny-armcuff-jonnajinton4-L.jpg',
    ],
  },

  {
    id: 2,
    category: 'jewelry',
    name: 'BODY, MIND, SOUL – NECKLACE',
    price: 236.64,
    description:
      'A necklace with a Quartz crystal on a faceted silver chain.In spirituality Quartz it’s known as a powerful stone of healing and a amplifier of energy and intention. Also referred to as a protector that negates bad energies.–  Diameter of pendant: 30 mm (1.18″)–  Diameter of quartz crystal: 5 mm (0.2″)–  Thickness of chain: 1,8 mm Every Quartz crystal differs and is unique.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/body-mind-soul-necklace-jonnajinton1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/body-mind-soul-jonnajinton11-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/body-mind-soul-necklace-jonnajinton3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/body-mind-soul-necklace-jonnajinton2-L.jpg',
    ],
  },

  {
    id: 3,
    category: 'jewelry',
    name: 'FJALL – RING',
    price: 157.94,
    description:
      'A powerful double banded silver ring with a heavy melted silverstone on top.–  Silverstone size: ≈ 20 x 17 mm (0.79″ x 0.67″)– Wire thickness: 2 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/fjall-ring-jonnajinton-jewelry8-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/fjall-ring-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/fjall-ring-jonnajinton17-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/fjall-ring-jonnajinton15-L.jpg',
    ],
  },

  {
    id: 4,
    category: 'jewelry',
    name: 'WAY OF THE HEART – NECKLACE',
    price: 172.74,
    description:
      'A necklace with a celtic love knot on a faceted silver chain.– Dimensions of pendant: 25 x 9 mm (1″ x 0.35″)– Thickness of chain: 1,8 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/way-of-the-heart-necklace-jonnajinton1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/way-of-the-heart-jonnajinton11-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/way-of-the-heart-necklace-jonnajinton5-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/way-of-the-heart-jonnajinton15-L.jpg',
    ],
  },

  {
    id: 5,
    category: 'jewelry',
    name: 'FREYJA – BRACELET',
    price: 94.14,
    description: 'A simple palm silver chain.– Chain thickness: 3,4 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-bracelet-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-bracelet-jonnajinton10-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2019/10/eternity-bracelet-freyja-jonnajinton12-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-bracelet-jonnajinton-jewelry3-L.jpg',
    ],
  },

  {
    id: 6,
    category: 'jewelry',
    name: 'FREYJA – EARRINGS',
    price: 147.9,
    description:
      'One pair of distinctive silver earrings with a hammered surface.– Earring dimensions: 40 x 19 mm (1.57″ x 0.75″)–Plate thickness: 1 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-earrings-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-earrings-jonnajinton10L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-earrings-jonnajinton-jewelry2-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-earrings-jonnajinton11L.jpg',
    ],
  },

  {
    id: 7,
    category: 'jewelry',
    name: 'NEW PATH – ARMCUFF',
    price: 177.48,
    description:
      'A elegant armcuff with a curved center, crafted in sterling silver.–Made from 3 mm silver wire.Comes with a “Jonna Jinton Sweden” polishing cloth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/newpath-armcuff-jonnajinton-jewelry4-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/rimfrost-celestial-armcuff-jonnajinton2-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/newpath-armcuff-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/newpath-rimfrost-armcuff-jonnajinton2-L.jpg',
    ],
  },

  {
    id: 8,
    category: 'jewelry',
    name: 'ORIGIN – ARMCUFF',
    price: 463.94,
    description:
      'A powerful armcuff crafted in sterling silver.Consists of 5 framed circles made of squared silver wire.–Dimensions silver wire: 2 x 2 mm–  Diameter (large ring): ≈ 28 mm–  Diameter (small rings): ≈ 14 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2019/10/origin-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2019/10/origin-freyja-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2019/10/origin-jonnajinton-jewelry17-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2019/10/origin-freyja-jonnajinton-jewelry11-L.jpg',
    ],
  },

  {
    id: 9,
    category: 'jewelry',
    name: 'RIMFROST – EARRINGS',
    price: 78.29,
    description:
      'One pair of silver earrings with a hammered surface.–  Plate diameter: 9,5 mm (0.37″) –  Plate thickness: 0,8 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/rimfrost-earrings-jonnajinton-jewelry4-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/rimfrost-earrings-jonnajinton13-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/rimfrost-earrings-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/rimfrost-earrings-jonnajinton20L.jpg',
    ],
  },

  {
    id: 10,
    category: 'jewelry',
    name: 'ETERNITY – EARRINGS',
    price: 177.48,
    description:
      'One pair of silver earrings with celtic love knots.–  Love knot dimensions: 35 x 12 mm– Wire thickness: 1,5 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/eternity-earrings-jonnajinton-jewelry2-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/way-of-the-heart-jonnajinton11-L-1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/eternity-earrings-jonnajinton-jewelry3-L.jpg',
    ],
  },

  {
    id: 11,
    category: 'jewelry',
    name: 'CELESTIAL – RING',
    price: 113.96,
    description: 'A classic open silver ring.–  Plate thickness: 1,5 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/Celestial-ring-jonnajinton-jewelry1-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/Celestial-ring-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/celestial-ring-jonnajinton10-L.jpg',
    ],
  },

  {
    id: 12,
    category: 'jewelry',
    name: 'FREYJA – ARMCUFF',
    price: 384.54,
    description:
      'A powerful hammered armcuff, crafted in sterling silver.–  Widest point: 28 mm–  Narrowest point: 14,5 mm–  Plate thickness: 1,2 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-armcuff-jonnajinton-jewelry3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/07/freyja-armcuff-bracelet-jonnajinton10-L.jpg',
      '',
      '',
    ],
  },

  {
    id: 13,
    category: 'jewelry',
    name: 'NORDIC SKY – NECKLACE',
    price: 158.55,
    description:
      'A necklace with a Labradorite crystal on a faceted silver chain.Legends of the Inuit peoples say it originates from the frozen fires of the Aurora Borealis. A shard of the nordic night sky.In spirituality Labradorite is referred to as a stone of high protection, strengthener of natural energies and a helping guide in self-exploration.– Dimensions pendant:Small: ≈ 16-18 x 24-30 mm (0.63″-0.70″ x 0.94″-1.18″)Medium: ≈ 19-21 x 31-35 mm (0.75″-0.82″ x 1.22″-1.37″)Large: ≈ 22-24 x 36-42 mm (0.87″-0.94″ x 1.41″-1.65″)–  Thickness of chain: 1,8 mm',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/nordic-sky-necklace-jonnajinton3-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/nordic-sky-jonnajinton10-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/nordic-sky-necklaces-jonnajinton1b-L.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/nordic-sky-necklace-jonnajinton5-L.jpg',
    ],
  },

  {
    id: 14,
    category: 'photoprints',
    name: 'A MAGICAL PLACE II',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-magical-place-II-rame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-magical-place-II-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-magical-place-II-1000.jpg',
    ],
  },

  {
    id: 15,
    category: 'photoprints',
    name: 'A MAGICAL PLACE I',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-magical-place-I-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/a-magical-place-I-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-magical-place-I-1000.jpg',
    ],
  },

  {
    id: 16,
    category: 'photoprints',
    name: 'A MAGICAL PLACE',
    price: 218.02,
    description:
      'The photo is printed on the entire paper in the size selected, with no white border.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-magical-place-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-magical-place-int.1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-magical-place-1000.jpg',
    ],
  },

  {
    id: 17,
    category: 'photoprints',
    name: 'A QUIET MIND',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-quiet-mind-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-quiet-mind-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-quiet-mind-1000.jpg',
    ],
  },

  {
    id: 18,
    category: 'photoprints',
    name: 'A NIGHT IN MAY',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-new-day-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-night-in-may-1000.jpg',
    ],
  },

  {
    id: 19,
    category: 'photoprints',
    name: 'A NIGHT IN MAY',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-night-in-may_frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/a-night-in-may.jpg',
    ],
  },

  {
    id: 20,
    category: 'photoprints',
    name: 'ANDROMEDA',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Andromeda-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Andromeda-1000.jpg',
    ],
  },

  {
    id: 21,
    category: 'photoprints',
    name: 'ANDROMEDA',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Andromeda_frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Andromeda-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Andromeda.jpg',
    ],
  },

  {
    id: 22,
    category: 'photoprints',
    name: 'AUTUMN AIR',
    price: 44.59,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Autumn-air-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Autumn-air-1000.jpg',
    ],
  },

  {
    id: 23,
    category: 'photoprints',
    name: 'AUTUMN FOREST',
    price: 218.02,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/autumn-forest-1000-1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/09/autumn-forest-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/autumn-forest-1000-1.jpg',
    ],
  },

  {
    id: 24,
    category: 'photoprints',
    name: 'BALANCE',
    price: 44.59,
    description:
      'A high quality matte and age resistant photo paper. The smooth surface gives the paper a lovely soft feel and the print a stunning sense of depth.',
    imgs: [
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Balance-frame.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/A-quiet-mind-int1.jpg',
      'https://jonnajintonsweden.com/wp-content/uploads/2020/08/Balance-1000.jpg',
    ],
  },
];
export default Items;
