const controller = {
    init() {
        listView.render();
        mainView.render();
        //setTimeout(() => alert('Click a Dragon to display'), 200);
    },
    getDragons(callback = ()=>true){
      return model.dragons
              .filter(d => callback(d))
              // .sort((a,b) => b.clicks - a.clicks ) // Business Logic
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
          let auth = prompt('Please enter password:', 'dragon')
          if(auth == 'dragon'){
            this.openAdmin(Number(id))
          } else {
            alert('Authentication failed.')
          }
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
      model.addDragonToArena(model.dragons.find(d => d.id == dragon.id))
      mainView.render()
    },
    openAdmin(id){
      adminView.render(id)
    },
    submit(id) {
        let form = document.querySelector('#modify')
        // DOM selector way:
        // let type = form.querySelector('#type').value
        // let clicks = form.querySelector('#clicks').value
        // let visible = form.querySelector('#visible').checked
        // let deleted = form.querySelector('#deleted').checked
        // this.modifyDragon(id, 'type', type)
        // this.modifyDragon(id, 'clicks', clicks)
        // this.modifyDragon(id, 'visible', visible)
        // this.modifyDragon(id, 'deleted', deleted)

        // new FormData Iterator way:
        let it = new FormData(form).entries()
        let data = it.next()
        while(!data.done){
          console.log(data.value, data.done)
          this.modifyDragon(id, data.value[0], data.value[1])
          data = it.next()
        }
        adminView.closeModal()
    },
    modifyDragon(id, property, newVal){
      console.log(id, property, newVal)
      this.modifiers[property](id, newVal)
      mainView.render();
      listView.render();
    },
    modifiers: {
      type: model.changeType,
      clicks: model.changeClicks,
      deleted: model.deleteDragon, 
      visible: model.showDragon
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