const controller = {
    init() {
        listView.render();
        mainView.render();
        //setTimeout(() => alert('Click a Dragon to display'), 200);
    },
    getDragons(callback = ()=>true){
      return model.dragons.filter(d => callback(d))
    },
    getList(callback = ()=>true){
      return model.list.filter(d => callback(d))
    },
    increment(id){
      let cur = model.dragons.find(d => d.id == id)
      cur.clicks += 1
      cur.level = this.levelUp(cur.clicks) || 'Maxed'
      mainView.render()
      sumView.render()
    },
    levelUp(num){
      return [1,2,3,4,5,6,7,8,9,10].find(n => 2**n > num)
    },
    dispatch(id, flag){
      let dragon = model.dragons.find(d => d.id == id)
      switch(flag){
        case 'modify':
          console.log(dragon)
          this.openAdmin(Number(id))
          break;
        case 'add':
          this.displayDragon(dragon)
          break;
        default:
          break;
      }
      mainView.render()
    },
    displayDragon(dragon){
      console.log(dragon)
      model.showDragon(model.dragons.find(d => d.id == dragon.id))
      mainView.render()
    },
    openAdmin(id){
      adminView.render(id)
    },
    modifyDragon(type){
      console.log(type)
      // model.addDragon(dragon)
    },
    removeDragon(id){
      model.deleteDragon(model.dragons.find(d => d.id == id)[0])
    },
    getSums(){
      return model.dragons.reduce((a, c) => {
        a.clicks += c.clicks
        a.levels += c.level
        return a;
      }, {clicks:0, levels:0})
    },
    checkDragon(type){
      return type ==='Fluffykins' ? '🐇':'🐉'
    }
  }

  const errorHandler = {

  }
  controller.init()