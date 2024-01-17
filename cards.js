const cards = [
  // CRITERIA FOR CLASSIFYING CARDS: 
  // name: easy
  // rarity: easy
  // elixir: easy
  // target:
  //    options -> None | Air and Ground | Ground
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
        rarity: '', // common | rare | epic | legendary | champion,
        elixir: 0, // integer 1-9
        target: '', // None | Air and Ground | Ground
        type: '', // Troop | Building | Spell
        range: 0, // float 0-12
        aoe: false // true | false
    },
    {
        name: 'Archers',
        rarity: 'a',
        elixir: 3,
        target: 'Air and Ground',
        type: 'Troop',
        range: 5.0,
        aoe: false
    },
    {
        name: 'Archer Queen',
        rarity: 'aaaaa',
        elixir: 5,
        target: 'Air and Ground',
        type: 'Troop',
        range: 5.0,
        aoe: false
    },
    {
      name: 'Arrows',
      rarity: 'a',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Spell',
      range: 4.0,
      aoe: true
    },
    {
      name: 'Baby Dragon',
      rarity: 'aaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 3.5,
      aoe: true
  },
    {
      name: 'Balloon',
      rarity: 'aaa',
      elixir: 5,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Bandit',
    rarity: 'aaaa',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 5.0,
    aoe: false
},
{
  name: 'Bats',
  rarity: 'a',
  elixir: 2,
  target: 'Air and Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
  {
    name: 'Battle Ram',
    rarity: 'aa',
    elixir: 4,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Battle Healer',
  rarity: 'aa',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
  {
    name: 'Barbarians',
    rarity: 'a',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Barbarian Barrel',
      rarity: 'aaa',
      elixir: 2,
      target: 'Ground',
      type: 'Spell',
      range: 2.6,
      aoe: true
    },
    {
      name: 'Barbarian Hut',
      rarity: 'aa',
      elixir: 7,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Bomb Tower',
      rarity: 'aa',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 6.0,
      aoe: true
    },
    {
      name: 'Bomber',
      rarity: 'a',
      elixir: 2,
      target: 'Ground',
      type: 'Troop',
      range: 4.5,
      aoe: true
  },
  {
    name: 'Bowler',
    rarity: 'aaa',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 4.0,
    aoe: true
},
    {
      name: 'Cannon',
      rarity: 'a',
      elixir: 3,
      target: 'Ground',
      type: 'Building',
      range: 5.5,
      aoe: false
    },
    {
      name: 'Cannon Cart',
      rarity: 'aaa',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 5.5,
      aoe: false
  },
    {
      name: 'Clone',
      rarity: 'aaa',
      elixir: 3,
      target: 'None',
      type: 'Spell',
      range: 3.0,
      aoe: false
    },
    {
      name: 'Dark Prince',
      rarity: 'aaa',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
  {
    name: 'Dart Goblin',
    rarity: 'aa',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.5,
    aoe: false
},

    {
      name: 'Earthquake',
      rarity: 'aa',
      elixir: 3,
      target: 'Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true
    },
    {
      name: 'Elixir Collector',
      rarity: 'aa',
      elixir: 6,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Elixer Golem',
      rarity: 'aa',
      elixir: 3,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Elite Barbarians',
      rarity: 'a',
      elixir: 6,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Electro Dragon',
    rarity: 'aaa',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 3.5,
    aoe: false
},
{
  name: 'Electro Giant',
  rarity: 'aaa',
  elixir: 7,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Electro Spirit',
  rarity: 'a',
  elixir: 1,
  target: 'Air and Ground',
  type: 'Troop',
  range: 2.5,
  aoe: false
},
    {
      name: 'Electro Wizard',
      rarity: 'aaaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.0,
      aoe: false
  },
  {
    name: 'Executioner',
    rarity: 'aaa',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 4.5,
    aoe: true
},
{
  name: 'Firecracker',
  rarity: 'a',
  elixir: 3,
  target: 'Air and Ground',
  type: 'Troop',
  range: 6.0,
  aoe: true
},
    {
      name: 'Fireball',
      rarity: 'aa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Fire Spirit',
      rarity: 'a',
      elixir: 1,
      target: 'Air and Ground',
      type: 'Troop',
      range: 2.0,
      aoe: true
  },
  {
    name: 'Fisherman',
    rarity: 'aaaa',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Flying Machine',
    rarity: 'aa',
    elixir: 4,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.0,
    aoe: false
},
    {
      name: 'Freeze',
      rarity: 'aaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Furnace',
      rarity: 'aa',
      elixir: 4,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Giant',
      rarity: 'aa',
      elixir: 5,
      target: 'Building',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Giant Snowball',
      rarity: 'a',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Giant Skeleton',
      rarity: 'aaa',
      elixir: 6,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Golem',
      rarity: 'aaa',
      elixir: 8,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Golden Knight',
    rarity: 'aaaaa',
    elixir: 4,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Goblins',
      rarity: 'a',
      elixir: 2,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Goblin Gang',
    rarity: 'a',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: false
},
{
  name: 'Goblin Giant',
  rarity: 'aaa',
  elixir: 6,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Goblin Barrel',
      rarity: 'aaa',
      elixir: 3,
      target: 'None',
      type: 'Spell',
      range: -1,
      aoe: false
    },
    {
      name: 'Goblin Cage',
      rarity: 'aa',
      elixir: 4,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Goblin Drill',
      rarity: 'aaa',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 0.5,
      aoe: true
    },
    {
      name: 'Goblin Hut',
      rarity: 'aa',
      elixir: 5,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Guards',
      rarity: 'aaa',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Graveyard',
      rarity: 'aaaa',
      elixir: 5,
      target: 'None',
      type: 'Spell',
      range: 4.0,
      aoe: false
    },
    {
      name: 'Heal Spirit',
      rarity: 'aa',
      elixir: 1,
      target: 'Air and Ground',
      type: 'Troop',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Hunter',
      rarity: 'aaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 4.0,
      aoe: true
  },
    {
      name: 'Hog Rider',
      rarity: 'aa',
      elixir: 4,
      target: 'Buildings',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Ice Golem',
    rarity: 'aa',
    elixir: 2,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Ice Spirit',
    rarity: 'a',
    elixir: 1,
    target: 'Air and Ground',
    type: 'Troop',
    range: 2.5,
    aoe: true
},
  {
    name: 'Ice Wizard',
    rarity: 'aaaa',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: true
},
    {
      name: 'Inferno Tower',
      rarity: 'aa',
      elixir: 5,
      target: 'Air and Ground',
      type: 'Building',
      range: 6.0,
      aoe: false
    },
    {
      name: 'Inferno Dragon',
      rarity: 'aaaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 3.5,
      aoe: false
  },
    {
      name: 'Knight',
      rarity: 'a',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 1.2,
      aoe: false
    },
    {
      name: 'Lava Hound',
      rarity: 'aaaa',
      elixir: 7,
      target: 'Buildings',
      type: 'Troop',
      range: 3.5,
      aoe: false
  },
  //lil bro
  {
    name: 'Little Prince',
    rarity: 'aaaaa',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 6.0,
    aoe: false
},
    {
      name: 'Lightning',
      rarity: 'aaa',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true         // DOES LIGHTNING DO SPLASH DAMAGE?
    },
    {
      name: 'Lumberjack',
      rarity: 'aaaa',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Magic Archer',
    rarity: 'aaaa',
    elixir: 4,
    target: 'Air and Ground',
    type: 'Troop',
    range: 7.0,
    aoe: true
},
  {
    name: 'Mega Minion',
    rarity: 'aa',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
//Racist
{
  name: 'Mega Knight',
  rarity: 'aaaa',
  elixir: 7,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: true
},
{
  name: 'Mighty Miner',
  rarity: 'aaaaa',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Minions',
      rarity: 'a',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Minion Horde',
    rarity: 'a',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Mini P.E.K.K.A',
    rarity: 'aa',
    elixir: 4,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Mirror',
      rarity: 'aaa',
      elixir: 0,
      target: 'None',
      type: 'Spell',
      range: -1,
      aoe: false
    },
    {
      name: 'Miner',
      rarity: 'aaaa',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Musketeer',
      rarity: 'aa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 6.0,
      aoe: false
  },
  {
    name: 'Monk',
    rarity: 'aaaaa',
    elixir: 5,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Mother Witch',
  rarity: 'aaaa',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 5.5,
  aoe: false
},
    {
      name: 'Mortar',
      rarity: 'a',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 11.5,
      aoe: true
    },
    {
      name: 'Night Witch',
      rarity: 'aaaa',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'P.E.K.K.A',
      rarity: 'aaa',
      elixir: 7,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Poison',
      rarity: 'aaa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true
    },
    {
      name: 'Prince',
      rarity: 'aaa',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Princess',
    rarity: 'aaaa',
    elixir: 3,
    target: 'Air and Ground',
    type: 'Troop',
    range: 9.0,
    aoe: true
},
{
  name: 'Phoenix',
  rarity: 'aaaa',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Ram Rider',
  rarity: 'aaaa',
  elixir: 5,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
    {
      name: 'Rage',
      rarity: 'aaa',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Rascals',
      rarity: 'a',
      elixir: 5,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
    {
      name: 'Rocket',
      rarity: 'aa',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.0,
      aoe: true
    },
    {
      name: 'Royal Delivery',
      rarity: 'a',
      elixir: 3,
      target: 'Ground',
      type: 'Spell',
      range: 3.0,
      aoe: true
    },
    {
      name: 'Royal Ghost',
      rarity: 'aaaa',
      elixir: 3,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
    {
      name: 'Royal Giant',
      rarity: 'a',
      elixir: 6,
      target: 'Buildings',
      type: 'Troop',
      range: 5.0,
      aoe: false
  },
  {
    name: 'Royal Hoge',
    rarity: 'aa',
    elixir: 5,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: false
},
  {
    name: 'Royal Recruits',
    rarity: 'a',
    elixir: 7,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
    {
      name: 'Spear Goblins',
      rarity: 'a',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.5,
      aoe: false
  },
  {
    name: 'Sparky',
    rarity: 'aaaa',
    elixir: 6,
    target: 'Ground',
    type: 'Troop',
    range: 5.0,
    aoe: true
},
    {
      name: 'Skeletons',
      rarity: 'a',
      elixir: 1,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: false
  },
  {
    name: 'Skeleton Army',
    rarity: 'aaa',
    elixir: 3,
    target: 'Ground',
    type: 'Troop',
    range: 0,
    aoe: false
},
{
  name: 'Skeleton Barrel',
  rarity: 'a',
  elixir: 3,
  target: 'Buildings',
  type: 'Troop',
  range: 0,
  aoe: false
},
{
  name: 'Skeleton Dragons',
  rarity: 'a',
  elixir: 4,
  target: 'Air and Ground',
  type: 'Troop',
  range: 3.5,
  aoe: true
},
{
  name: 'Skeleton King',
  rarity: 'aaaaa',
  elixir: 4,
  target: 'Ground',
  type: 'Troop',
  range: 0,
  aoe: true
},
    {
      name: 'Tesla',
      rarity: 'a',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Building',
      range: 5.5,
      aoe: false
    },
    {
      name: 'Three Musketeers',
      rarity: 'aa',
      elixir: 9,
      target: 'Air and Ground',
      type: 'Troop',
      range: 6.0,
      aoe: false
  },
    {
      name: 'The Log',
      rarity: 'aaaa',
      elixir: 2,
      target: 'Ground',
      type: 'Spell',
      range: 10.1,
      aoe: true
    },
    {
      name: 'Tombstone',
      rarity: 'aa',
      elixir: 3,
      target: 'None',
      type: 'Building',
      range: -1,
      aoe: false
    },
    {
      name: 'Tornado',
      rarity: 'aaa',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Spell',
      range: 5.5,
      aoe: true
    },
    {
      name: 'Valkyrie',
      rarity: 'aa',
      elixir: 4,
      target: 'Ground',
      type: 'Troop',
      range: 0,
      aoe: true
  },
  {
    name: 'Wall Breakers',
    rarity: 'aaa',
    elixir: 2,
    target: 'Buildings',
    type: 'Troop',
    range: 0,
    aoe: true
},
    {
      name: 'Witch',
      rarity: 'aaa',
      elixir: 5,
      target: 'Air and Ground',
      type: 'Troop',
      range: 5.5,
      aoe: true
  },
  {
    name: 'Wizard',
    rarity: 'aa',
    elixir: 5,
    target: 'Air and Ground',
    type: 'Troop',
    range: 5.5,
    aoe: true
},
    {
      name: 'X-Bow',
      rarity: 'aaa',
      elixir: 6,
      target: 'Ground',
      type: 'Building',
      range: 11.5,
      aoe: false
    },
    {
      name: 'Zap',
      rarity: 'a',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Zappies',
      rarity: 'aa',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Troop',
      range: 4.5,
      aoe: false
  }
]

module.exports = cards;
