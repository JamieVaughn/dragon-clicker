const controller = {
    init() {
        listView.render();
        mainView.render();
        setTimeout(() => alert('Click Dragons to display'), 200);
    },
    getDragons(callback = ()=>true){
      return model.dragons.filter(d => callback(d))
    },
    getList(callback = ()=>true){
      return model.list.filter(d => callback(d))
    },
    increment(id){
      let cur = model.dragons.filter(d => d.id == id)[0]
      cur.clicks += 1
      mainView.render()
    },
    dispatch(type){
      let dragon = {
        id: model.dragons.length,
        type: type,
        clicks: 0
      }
      model.addDragon(dragon)
      mainView.render()
    },
    sumClicks(callback){
      let sum =  model.dragons.reduce((a, c) => a+=c.clicks, 0)
      sumView.render(sum)
    },
    checkDragon(type){
      return type ==='Fluffykins' ? '🐇':'🐉'
    }
  }

  controller.init()