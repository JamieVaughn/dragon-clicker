const model = {
// const model = function(){
    // let self = this
    auth: '',
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
    changeType(id, type) {
        model.dragons.find(d => d.id == id).type = type
    },
    changeClicks(id, clicks){
        let dragon = model.dragons.find(d => d.id == id)
        dragon.clicks = Number(clicks)
        dragon.level = controller.levelUp(Number(clicks)) || 'Maxed'
    },
    deleteDragon(id){
        model.dragons.find(d => d.id == id).deleted = true
    },
    showDragon(id, flag){
        flag = flag == 'on' ? false : true;
        model.dragons.find(d => d.id == id).inArena = flag
    },
    addDragonToArena(dragon, flag = true){
        dragon ? dragon.inArena = flag : console.log('no dragon displayed')
    }
  }