const controller = {
    init() {
        listView.render();
        mainView.render();
        setTimeout(() => alert('Drag a Dragon into the Arena'), 200);
    },
    editDragons(e, flag) {
      console.log(e.target.dataset.id)
      if(e.target.dataset.id) {
        e.preventDefault();
        let menu = document.querySelector('.menu')
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
        this.toggleMenu("block");
        this.editDragon = (flag) => {
          switch(flag) {
            case "edit":
              return controller.dispatch(e.target.dataset.id, 'modify')
            case "hide":
              return controller.modifyDragon(e.target.dataset.id, 'visible', 'on')
            case "delete":
              return controller.modifyDragon(e.target.dataset.id, 'deleted', true)
          }
        }
        return false;
      }
    },
    editDragon(flag) {},
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
          if(!dragon.inArena) {
            alert('This dragon has not been summoned yet. You must summon the dragon before you can edit it.')
            return
          }
          let auth = prompt('Please enter password: (hint: dragon)', model.auth)
          model.auth = auth
          if(auth == 'dragon'){
            adminView.render(Number(id))
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
      // console.log(dragon)
      model.addDragonToArena(model.dragons.find(d => d.id == dragon.id))
      mainView.render()
    },
    drag(e) {
      e.dataTransfer.setData('text/plain', e.currentTarget.dataset.id)
    },
    drop(e) {
      e.preventDefault()
      let id = e.dataTransfer.getData("text/plain")
      document.querySelector('main.arena').classList.remove('dropping')
      this.dispatch(id, "add")
    },
    submit(e, id) {
      e.preventDefault()
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
      let it = new FormData(form).entries() // ["type", "toy"], ["clicks", 500]
      let data = it.next()
      while(!data.done){
        console.log(data.value, data.done)
        this.modifyDragon(id, data.value[0], data.value[1])
        data = it.next()
      }
      adminView.closeModal()
    },
    menuVisible: "none",
    toggleMenu(command) {
      console.log(command)
      this.menuVisible = command
      let menuStyle = document.querySelector('.menu').style
      if(command === "block") menuStyle.display = this.menuVisible
      if(command === "none") setTimeout(() => menuStyle.display = this.menuVisible, 1000)
    },
    modifyDragon(id, property, newVal){
      console.log(id, property, newVal)
      this.modifiers[property](id, newVal)
      mainView.render();
      listView.render();
      sumView.render();
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
        a.levels += typeof c.level == 'number' ? c.level : 11
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