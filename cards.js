const cards = [
  // CRITERIA FOR CLASSIFYING CARDS:
  // name: easy
  // rarity: easy
  // elixir: easy
  // target:
  //    options -> Building | Air and Ground | Ground
  //    if the card does not DIRECTLY do damage, it has a target of None. Elixir pump, Goblin Barrel, any Spawner, and Clone for example
  //    if the card does DIRECTLY do damage, we can note whether or not it HITS air or not
  // type: easy
  // range:
  //    troop: melee is 0, the source I am using does not list melee range
  //    building: if it's target is 'NONE', then range is automatically -1
  //    spell: generally, this is the radius listed on https://clashroyale.fandom.com/wiki/Cards. Log and Barb Barrel have non-circular ranges. Don't know what to do with that.
  //           graveyard isn't listed as a spell, nor is gob barrel. Not sure how to handle graveyard, gob barrel, and clone, for example. Clone and Graveyard have defined radii in the actual game. That's what I am using for now.
  // aoe:
  //    if the card's targeting is 'NONE', this is automatically false.
  //    if the card can damage multiple entities in one attack, then aoe is true.

  // feel free to change these criteria if they don't work. I have not covered all the cards yet. What are we gonna do about the monk :skull_emoji: or the phoenix??? :laughing_crying:





  //WHAT SHOULD WE DO FOR MULTI-PART UNITS THINK RASCALS. I AM JUST USING THE FIRST PART OF THE UNIT ON STATS ROYALE
    {
        name: '',
        rarity: '', // Common | Rare | Epic | Legendary | Champion,
        elixir: 0, // integer 1-9
        target: '', // None | Air and Ground | Ground
        type: '', // Troop | Building | Spell
        range: 0, // float 0-12
        aoe: false // true | false
    },
    {
        name: 'Archers',
        rarity: 'Common',
        elixir: 3,
        target: 'Air and Ground',
        type: 'Troop',
        range: 5.0,
        aoe: false
    },
    {
        name: 'Archer Queen',
        rarity: 'Champion',
        elixir: 5,
        target: 'Air and Ground',
        type: 'Troop',
        range: 5.0,
        aoe: false
    },
    {
      name: 'Arrows',
      rarity: 'Common',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Spell',
      range: 4.0,
      aoe: true
    },
    {
      name: 'Baby Dragon',
      rarity: 'Epic',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 3.5,
      aoe: true
  },
    {
      name: 'Balloon',
      rarity: 'Epic',
      elixir: 5,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Bandit',
    rarity: 'Legendary',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 5.0,
    aoe: false
},
{
  name: 'Bats',
  rarity: 'Common',
  elixir: 2,
  target: 'Air and Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
  {
    name: 'Battle Ram',
    rarity: 'Rare',
    elixir: 4,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Battle Healer',
  rarity: 'Rare',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
  {
    name: 'Barbarians',
    rarity: 'Common',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Barbarian Barrel',
      rarity: 'Epic',
      elixir: 2,
      target: 'Ground',
      type: 'Spell',
      range: 2.6,
      aoe: true
    },
    {
      name: 'Barbarian Hut',
      rarity: 'Rare',
      elixir: 7,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Bomb Tower',
      rarity: 'Rare',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 6.0,
      aoe: true
    },
    {
      name: 'Bomber',
      rarity: 'Common',
      elixir: 2,
      target: 'Ground',
      type: 'Troop',
      range: 4.5,
      aoe: true
  },
  {
    name: 'Bowler',
    rarity: 'Epic',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 4.0,
    aoe: true
},
    {
      name: 'Cannon',
      rarity: 'Common',
      elixir: 3,
      target: 'Ground',
      type: 'Building',
      range: 5.5,
      aoe: false
    },
    {
      name: 'Cannon Cart',
      rarity: 'Epic',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 5.5,
      aoe: false
  },
    {
      name: 'Clone',
      rarity: 'Epic',
      elixir: 3,
      target: 'None',
      type: 'Spell',
      range: 3.0,
      aoe: false
    },
    {
      name: 'Dark Prince',
      rarity: 'Epic',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
  {
    name: 'Dart Goblin',
    rarity: 'Rare',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.5,
    aoe: false
},

    {
      name: 'Earthquake',
      rarity: 'Rare',
      elixir: 3,
      target: 'Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true
    },
    {
      name: 'Elixir Collector',
      rarity: 'Rare',
      elixir: 6,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Elixir Golem',
      rarity: 'Rare',
      elixir: 3,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Elite Barbarians',
      rarity: 'Common',
      elixir: 6,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Electro Dragon',
    rarity: 'Epic',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 3.5,
    aoe: false
},
{
  name: 'Electro Giant',
  rarity: 'Epic',
  elixir: 7,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Electro Spirit',
  rarity: 'Common',
  elixir: 1,
  target: 'Air and Ground',
  type: 'Troop',
  range: 2.5,
  aoe: false
},
    {
      name: 'Electro Wizard',
      rarity: 'Legendary',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.0,
      aoe: false
  },
  {
    name: 'Executioner',
    rarity: 'Epic',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 4.5,
    aoe: true
},
{
  name: 'Firecracker',
  rarity: 'Common',
  elixir: 3,
  target: 'Air and Ground',
  type: 'Troop',
  range: 6.0,
  aoe: true
},
    {
      name: 'Fireball',
      rarity: 'Rare',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Fire Spirit',
      rarity: 'Common',
      elixir: 1,
      target: 'Air and Ground',
      type: 'Troop',
      range: 2.0,
      aoe: true
  },
  {
    name: 'Fisherman',
    rarity: 'Legendary',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Flying Machine',
    rarity: 'Rare',
    elixir: 4,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.0,
    aoe: false
},
    {
      name: 'Freeze',
      rarity: 'Epic',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Furnace',
      rarity: 'Rare',
      elixir: 4,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Giant',
      rarity: 'Rare',
      elixir: 5,
      target: 'Building',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Giant Snowball',
      rarity: 'Common',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Giant Skeleton',
      rarity: 'Epic',
      elixir: 6,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Golem',
      rarity: 'Epic',
      elixir: 8,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Golden Knight',
    rarity: 'Champion',
    elixir: 4,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Goblins',
      rarity: 'Common',
      elixir: 2,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Goblin Gang',
    rarity: 'Common',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: false
},
{
  name: 'Goblin Giant',
  rarity: 'Epic',
  elixir: 6,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Goblin Barrel',
      rarity: 'Epic',
      elixir: 3,
      target: 'None',
      type: 'Spell',
      range: -1,
      aoe: false
    },
    {
      name: 'Goblin Cage',
      rarity: 'Rare',
      elixir: 4,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Goblin Drill',
      rarity: 'Epic',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 0.5,
      aoe: true
    },
    {
      name: 'Goblin Hut',
      rarity: 'Rare',
      elixir: 5,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Guards',
      rarity: 'Epic',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Graveyard',
      rarity: 'Legendary',
      elixir: 5,
      target: 'None',
      type: 'Spell',
      range: 4.0,
      aoe: false
    },
    {
      name: 'Heal Spirit',
      rarity: 'Rare',
      elixir: 1,
      target: 'Air and Ground',
      type: 'Troop',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Hunter',
      rarity: 'Epic',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 4.0,
      aoe: true
  },
    {
      name: 'Hog Rider',
      rarity: 'Rare',
      elixir: 4,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Ice Golem',
    rarity: 'Rare',
    elixir: 2,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Ice Spirit',
    rarity: 'Common',
    elixir: 1,
    target: 'Air and Ground',
    type: 'Troop',
    range: 2.5,
    aoe: true
},
  {
    name: 'Ice Wizard',
    rarity: 'Legendary',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: true
},
    {
      name: 'Inferno Tower',
      rarity: 'Rare',
      elixir: 5,
      target: 'Air and Ground',
      type: 'Building',
      range: 6.0,
      aoe: false
    },
    {
      name: 'Inferno Dragon',
      rarity: 'Legendary',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 3.5,
      aoe: false
  },
    {
      name: 'Knight',
      rarity: 'Common',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 1.2,
      aoe: false
    },
    {
      name: 'Lava Hound',
      rarity: 'Legendary',
      elixir: 7,
      target: 'Buildings',
      type: 'Troop',
      range: 3.5,
      aoe: false
  },
  //lil bro
  {
    name: 'Little Prince',
    rarity: 'Champion',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.0,
    aoe: false
},
    {
      name: 'Lightning',
      rarity: 'Epic',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true         // DOES LIGHTNING DO SPLASH DAMAGE?
    },
    {
      name: 'Lumberjack',
      rarity: 'Legendary',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Magic Archer',
    rarity: 'Legendary',
    elixir: 4,
    target: 'Air and Ground',
    type: 'Troop',
    range: 7.0,
    aoe: true
},
  {
    name: 'Mega Minion',
    rarity: 'Rare',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
//Racist
{
  name: 'Mega Knight',
  rarity: 'Legendary',
  elixir: 7,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: true
},
{
  name: 'Mighty Miner',
  rarity: 'Champion',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Minions',
      rarity: 'Common',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Minion Horde',
    rarity: 'Common',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Mini P.E.K.K.A',
    rarity: 'Rare',
    elixir: 4,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Mirror',
      rarity: 'Epic',
      elixir: 0,
      target: 'None',
      type: 'Spell',
      range: -1,
      aoe: false
    },
    {
      name: 'Miner',
      rarity: 'Legendary',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Musketeer',
      rarity: 'Rare',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 6.0,
      aoe: false
  },
  {
    name: 'Monk',
    rarity: 'Champion',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Mother Witch',
  rarity: 'Legendary',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 5.5,
  aoe: false
},
    {
      name: 'Mortar',
      rarity: 'Common',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 11.5,
      aoe: true
    },
    {
      name: 'Night Witch',
      rarity: 'Legendary',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'P.E.K.K.A',
      rarity: 'Epic',
      elixir: 7,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Poison',
      rarity: 'Epic',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true
    },
    {
      name: 'Prince',
      rarity: 'Epic',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Princess',
    rarity: 'Legendary',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 9.0,
    aoe: true
},
{
  name: 'Phoenix',
  rarity: 'Legendary',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Ram Rider',
  rarity: 'Legendary',
  elixir: 5,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Rage',
      rarity: 'Epic',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Rascals',
      rarity: 'Common',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Rocket',
      rarity: 'Rare',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.0,
      aoe: true
    },
    {
      name: 'Royal Delivery',
      rarity: 'Common',
      elixir: 3,
      target: 'Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Royal Ghost',
      rarity: 'Legendary',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
    {
      name: 'Royal Giant',
      rarity: 'Common',
      elixir: 6,
      target: 'Buildings',
      type: 'Troop',
      range: 5.0,
      aoe: false
  },
  {
    name: 'Royal Hoge',
    rarity: 'Rare',
    elixir: 5,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Royal Recruits',
    rarity: 'Common',
    elixir: 7,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Spear Goblins',
      rarity: 'Common',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.5,
      aoe: false
  },
  {
    name: 'Sparky',
    rarity: 'Legendary',
    elixir: 6,
    target: 'Ground',
    type: 'Troop',
    range: 5.0,
    aoe: true
},
    {
      name: 'Skeletons',
      rarity: 'Common',
      elixir: 1,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Skeleton Army',
    rarity: 'Epic',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Skeleton Barrel',
  rarity: 'Common',
  elixir: 3,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Skeleton Dragons',
  rarity: 'Common',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 3.5,
  aoe: true
},
{
  name: 'Skeleton King',
  rarity: 'Champion',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: true
},
    {
      name: 'Tesla',
      rarity: 'Common',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Building',
      range: 5.5,
      aoe: false
    },
    {
      name: 'Three Musketeers',
      rarity: 'Rare',
      elixir: 9,
      target: 'Air and Ground',
      type: 'Troop',
      range: 6.0,
      aoe: false
  },
    {
      name: 'The Log',
      rarity: 'Legendary',
      elixir: 2,
      target: 'Ground',
      type: 'Spell',
      range: 10.1,
      aoe: true
    },
    {
      name: 'Tombstone',
      rarity: 'Rare',
      elixir: 3,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Tornado',
      rarity: 'Epic',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Spell',
      range: 5.5,
      aoe: true
    },
    {
      name: 'Valkyrie',
      rarity: 'Rare',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
  {
    name: 'Wall Breakers',
    rarity: 'Epic',
    elixir: 2,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: true
},
    {
      name: 'Witch',
      rarity: 'Epic',
      elixir: 5,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.5,
      aoe: true
  },
  {
    name: 'Wizard',
    rarity: 'Rare',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: true
},
    {
      name: 'X-Bow',
      rarity: 'Epic',
      elixir: 6,
      target: 'Ground',
      type: 'Building',
      range: 11.5,
      aoe: false
    },
    {
      name: 'Zap',
      rarity: 'Common',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Zappies',
      rarity: 'Rare',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 4.5,
      aoe: false
  }
]

module.exports = cards;
