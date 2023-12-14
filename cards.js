export const cards = [
  // CRITERIA FOR CLASSIFYING CARDS: at least for the ones i have changed so far:
  // name: easy
  // rarity: easy
  // elixir: easy
  // target:
  //    options -> None | Air and Ground | Ground
  //    if the card does not DIRECTLY do damage, it has a target of None. Elixir pump, Goblin Barrel, any Spawner, and Clone for example
  //    if the card does DIRECTLY do damage, we can note whether or not it HITS air or not
  // type: easy
  // range:
  //    troop: its melee range listed on https://clashroyale.fandom.com/wiki/Cards. (skeleton barrel is a troop)
  //    building: if it's target is 'NONE', then range is automatically -1
  //    spell: generally, this is the radius listed on https://clashroyale.fandom.com/wiki/Cards. Log and Barb Barrel have non-circular ranges. Don't know what to do with that.
  //           graveyard isn't listed as a spell, nor is gob barrel. Not sure how to handle graveyard, gob barrel, and clone, for example. Clone and Graveyard have defined radii in the actual game. That's what I am using for now.
  // aoe:
  //    if the card's targeting is 'NONE', this is automatically false.
  //    if the card can damage multiple entities in one attack, then aoe is true.

  // feel free to change these criteria if they don't work. I have not covered all the cards yet. What are we gonna do about the monk :skull_emoji: or the phoenix??? :laughing_crying:
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
        range: 0,
        aoe: false
    },
    {
        name: 'Archer Queen',
        rarity: 'Champion',
        elixir: 5,
        target: 'Air and Ground',
        type: 'Troop',
        range: 5,
        aoe: false
    },
    {
      name: 'Arrows',
      rarity: 'Common',
      elixir: 3,
      target: 'Air and Ground',
      type: 'Spell',
      range: 4,
      aoe: true
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
      range: 6,
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
      name: 'Clone',
      rarity: 'Epic',
      elixir: 3,
      target: 'None',
      type: 'Spell',
      range: 3,
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
      name: 'Fireball',
      rarity: 'Rare',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
    },
    {
      name: 'Freeze',
      rarity: 'Epic',
      elixir: 4,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3,
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
      name: 'Giant Snowball',
      rarity: 'Common',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2.5,
      aoe: true
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
      name: 'Graveyard',
      rarity: 'Legendary',
      elixir: 5,
      target: 'None',
      type: 'Spell',
      range: 4,
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
      name: 'Inferno Tower',
      rarity: 'Rare',
      elixir: 5,
      target: 'Air and Ground',
      type: 'Building',
      range: 6,
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
      name: 'Lightning',
      rarity: 'Epic',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3.5,
      aoe: true         // DOES LIGHTNING DO SPLASH DAMAGE?
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
      name: 'Mortar',
      rarity: 'Common',
      elixir: 4,
      target: 'Ground',
      type: 'Building',
      range: 11.5,
      aoe: true
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
      name: 'Rage',
      rarity: 'Epic',
      elixir: 2,
      target: 'Air and Ground',
      type: 'Spell',
      range: 3,
      aoe: true
    },
    {
      name: 'Rocket',
      rarity: 'Rare',
      elixir: 6,
      target: 'Air and Ground',
      type: 'Spell',
      range: 2,
      aoe: true
    },
    {
      name: 'Royal Delivery',
      rarity: 'Common',
      elixir: 3,
      target: 'Ground',
      type: 'Spell',
      range: 3,
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
    }
  ]
