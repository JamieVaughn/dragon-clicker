const model = {
    dragons: [
        {id: 0, type: "Forest", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 1, type: "Mountain", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 2, type: "Sand", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 3, type: "Water", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 4, type: "Fire", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 5, type: "Metallic", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 6, type: "Sky", clicks: 0, level: 0, inArena: false, deleted: false},
        {id: 7, type: "Fluffykins", clicks: 0, level: 0, inArena: false, deleted: false}
    ],
    addDragon(dragon){
      this.dragons.push(dragon)
    },
    addToList(name){
        this.list.push(name)
    },
    deleteDragon(dragon){
        dragon ? dragon.deleted = true : console.log('no dragon found')
    },
    showDragon(dragon){
        dragon ? dragon.inArena = true : console.log('no dragon displayed')
    }
  }