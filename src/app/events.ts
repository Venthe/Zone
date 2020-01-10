export const events = [
  {
    type: "Game started",
    startDate: "Wed, 08 Jan 2020 20:17:35 GMT",
    gameDate: "Wed, 03 May 2130 11:00:00 GMT",
    difficultyLevel: "medium"
  },
  {
    type: "[Entity] Entity created",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "",
    age: 25,
    sex: "male",
    status: "unfinished",
    level: 1,
    attributes: {
      strength: 5,
      perception: 5,
      endurance: 5,
      charisma: 5,
      intelligence: 5,
      agility: 5,
      luck: 5
    },
    unspent: {
      attributes: 5,
      tagSkills: 3,
      optionalTraits: 2
    }
  },
  {
    type: "[Entity] Attribute modified",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    attributes: {
      intelligence: 8
    }
  },
  {
    type: "[Entity] Attribute modified",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    attributes: {
      charisma: 6
    }
  },
  {
    type: "[Entity] Skill tagged",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    skill: "speech"
  },
  {
    type: "[Entity] Attribute modified",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    attributes: {
      strength: 6
    }
  },
  {
    type: "Name set",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "Jack"
  },
  {
    type: "[Entity] Skill tagged",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    skill: "smallGuns"
  },
  {
    type: "[Entity] Age set",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    age: 40
  },
  {
    type: "[Entity] Trait set",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "jinxed"
  },
  {
    type: "[Entity] Trait unset",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "jinxed"
  },
  {
    type: "[Entity] Skill tagged",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    skill: "barter"
  },
  {
    type: "[Entity] Attribute modified",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    attributes: {
      endurance: 4
    }
  },
  {
    type: "[Entity] Skill untagged",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    skill: "barter"
  },
  {
    type: "[Entity] Trait set",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "sexAppeal"
  },
  {
    type: "[Entity] Sex changed",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "female"
  },
  {
    type: "[Entity] Trait set",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "skilled"
  },
  {
    type: "[Entity] Attribute modified",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    attributes: {
      luck: 6
    }
  },
  {
    type: "[Entity] Sex changed",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    name: "male"
  },
  {
    type: "[Entity] Skill tagged",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
    skill: "unarmed"
  },
  {
    type: "Difficulty set",
    difficultyLevel: "easy"
  },
  {
    type: "[Entity] Entity creation finished",
    id: {uuid: "35f44025-5c6e-4470-ab47-3e7c756a7767", type: "character"},
  }
];
