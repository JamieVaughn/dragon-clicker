const model = {
    list: [
        'Forest', 'Mountain', 'Sand', 'Water', 'Fire', 'Metallic', 'Sky', 'Fluffykins'
    ],
    dragons: [],
    addDragon(dragon){
      this.dragons.push(dragon)
    },
    addToList(name){
        this.list.push(name)
      },
  }