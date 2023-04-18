document.addEventListener('DOMContentLoaded', function () {
            let accordions = document.querySelectorAll('.accordion');

            accordions.forEach(function (accordion) {
                accordion.addEventListener('click', function () {
                    let container = this.nextElementSibling;
                    if (container.style.display === 'block') {
                        container.style.display = 'none';
                    } else {
                        container.style.display = 'block';
                    }
                          // Toggle "+" and "-" symbols
                    if (accordion.innerHTML.includes('+')) {
                      accordion.innerHTML = accordion.innerHTML.replace('+', '-');
                    } else {
                      accordion.innerHTML = accordion.innerHTML.replace('-', '+');
                    }
                });
            });
        });




const factions = [
  {
    name: "Alliance",
    races: [
      "Human",
      "Dwarf",
      "Night Elf",
      "Gnome",
      "Draenei",
      "Worgen",
      "Pandaren",
      "Dracthyr",
      "Void Elf",
      "Lightforged Draenei",
      "Dark Iron Dwarf",
      "Kul Tiran",
      "Mechagnome",
    ],
  },
  {
    name: "Horde",
    races: [
      "Orc",
      "Undead",
      "Tauren",
      "Troll",
      "Blood Elf",
      "Goblin",
      "Pandaren",
      "Dracthyr",
      "Nightborne",
      "Highmountain Tauren",
      "Mag'har Orc",
      "Zandalari Troll",
      "Vulpera",
    ],
  },
];

const raceClasses = {
  "Human": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Monk", "Death Knight"],
  "Dwarf": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Shaman", "Monk", "Death Knight"],
  "Night Elf": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Druid", "Monk", "Demon Hunter", "Death Knight"],
  "Gnome": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Monk", "Death Knight"],
  "Draenei": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Paladin", "Shaman", "Monk", "Death Knight"],
  "Worgen": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Druid", "Monk", "Death Knight"],
  "Pandaren": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Shaman", "Monk", "Death Knight"],
  "Dracthyr": ["Evoker"],
  "Void Elf": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Monk", "Death Knight"],
  "Lightforged Draenei": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Paladin", "Monk", "Death Knight"],
  "Dark Iron Dwarf": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Shaman", "Monk", "Death Knight"],
  "Kul Tiran": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Druid", "Shaman", "Monk", "Death Knight"],
  "Mechagnome": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Monk", "Death Knight"],
  "Orc": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Shaman", "Monk", "Death Knight"],
  "Undead": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Monk", "Death Knight"],
  "Tauren": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Paladin", "Druid", "Shaman", "Monk", "Death Knight"],
  "Troll": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Druid", "Shaman", "Monk", "Death Knight"],
  "Blood Elf": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Monk", "Demon Hunter", "Death Knight"],
  "Goblin": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Shaman", "Monk", "Death Knight"],
  "Nightborne": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Monk", "Death Knight"],
  "Highmountain Tauren": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Druid", "Shaman", "Monk", "Death Knight"],
  "Mag'har Orc": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Shaman", "Monk", "Death Knight"],
  "Zandalari Troll": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Paladin", "Druid", "Shaman", "Monk", "Death Knight"],
  "Vulpera": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Warlock", "Shaman", "Monk", "Death Knight"],
};

const classSpecs = {
  "Warrior": ["Arms", "Fury", "Protection"],
  "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
  "Mage": ["Arcane", "Fire", "Frost"],
  "Rogue": ["Assassination", "Outlaw", "Subtlety"],
  "Priest": ["Discipline", "Holy", "Shadow"],
  "Warlock": ["Affliction", "Demonology", "Destruction"],
  "Paladin": ["Holy", "Protection", "Retribution"],
  "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
  "Shaman": ["Elemental", "Enhancement", "Restoration"],
  "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
  "Demon Hunter": ["Havoc", "Vengeance"],
  "Death Knight": ["Blood", "Frost", "Unholy"],
  "Evoker": ["Devastation", "Preservation"],
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeCharacter() {
  const faction = getRandomItem(factions);
  const race = getRandomItem(faction.races);
  const characterClass = getRandomItem(raceClasses[race]);
  const spec = getRandomItem(classSpecs[characterClass]);

  return {
    faction: faction.name,
    race,
    class: characterClass,
    spec,
  };
}

document.getElementById("randomizer-button").addEventListener("click", () => {
  const character = randomizeCharacter();

  document.getElementById("random-faction").textContent = `Faction: ${character.faction}`;
  document.getElementById("random-race").textContent = `Race: ${character.race}`;
  document.getElementById("random-class").textContent = `Class: ${character.class}`;
  document.getElementById("random-spec").textContent = `Spec: ${character.spec}`;

  // Remove the hidden class from each box
  document.getElementById("random-faction").classList.remove("hidden");
  document.getElementById("random-race").classList.remove("hidden");
  document.getElementById("random-class").classList.remove("hidden");
  document.getElementById("random-spec").classList.remove("hidden");
});



const factionsClassic = [
  {
    name: "Alliance",
    races: [
      "Human",
      "Dwarf",
      "Night Elf",
      "Gnome",
      "Draenei",
    ],
  },
  {
    name: "Horde",
    races: [
      "Orc",
      "Undead",
      "Tauren",
      "Troll",
      "Blood Elf",
    ],
  },
];

const raceClassesClassic = {
  "Human": ["Warrior", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Monk", "Death Knight"],
  "Dwarf": ["Warrior", "Hunter", "Rogue", "Priest", "Paladin","Death Knight"],
  "Night Elf": ["Warrior", "Hunter", "Rogue", "Priest", "Druid", "Death Knight"],
  "Gnome": ["Warrior", "Mage", "Rogue", "Warlock", "Death Knight"],
  "Draenei": ["Warrior", "Hunter", "Mage", "Priest", "Paladin", "Shaman", "Death Knight"],
  "Orc": ["Warrior", "Hunter", "Rogue", "Shaman", "Warlock", "Death Knight"],
  "Undead": ["Warrior", "Mage", "Rogue", "Priest", "Warlock", "Death Knight"],
  "Tauren": ["Warrior", "Hunter", "Druid", "Shaman", "Death Knight"],
  "Troll": ["Warrior", "Hunter", "Mage", "Rogue", "Priest", "Shaman", "Death Knight"],
  "Blood Elf": ["Hunter", "Mage", "Rogue", "Priest", "Warlock", "Paladin", "Death Knight"],
};

const classSpecsClassic = {
  "Warrior": ["Arms", "Fury", "Protection"],
  "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
  "Mage": ["Arcane", "Fire", "Frost"],
  "Rogue": ["Assassination", "Combat", "Subtlety"],
  "Priest": ["Discipline", "Holy", "Shadow"],
  "Warlock": ["Affliction", "Demonology", "Destruction"],
  "Paladin": ["Holy", "Protection", "Retribution"],
  "Druid": ["Balance", "Feral", "Restoration"],
  "Shaman": ["Elemental", "Enhancement", "Restoration"],
  "Death Knight": ["Blood", "Frost", "Unholy"],
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeCharacter() {
  const factionClassic = getRandomItem(factionsClassic);
  const raceClassic = getRandomItem(factionClassic.races); 
  const characterClassClassic = getRandomItem(raceClassesClassic[raceClassic]);
  const specClassic = getRandomItem(classSpecsClassic[characterClassClassic]);

  return {
    faction: factionClassic.name,
    race: raceClassic,
    class: characterClassClassic,
    spec: specClassic,
  };
}

document.getElementById("randomizer-button-classic").addEventListener("click", () => {
  const characterClassic = randomizeCharacter();

  document.getElementById("random-faction-classic").textContent = `Faction: ${characterClassic.faction}`; 
  document.getElementById("random-race-classic").textContent = `Race: ${characterClassic.race}`; 
  document.getElementById("random-class-classic").textContent = `Class: ${characterClassic.class}`; 
  document.getElementById("random-spec-classic").textContent = `Spec: ${characterClassic.spec}`;

  // Remove the hidden class from each box
  document.getElementById("random-faction-classic").classList.remove("hidden");
  document.getElementById("random-race-classic").classList.remove("hidden");
  document.getElementById("random-class-classic").classList.remove("hidden");
  document.getElementById("random-spec-classic").classList.remove("hidden");
});


