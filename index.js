const model = {
    list: ['Forest', 'Mountain', 'Sand', 'Water', 'Fire', 'Metallic', 'Sky', 'Fluffykins'],
    dragons: [],
    addDragon(dragon){
      this.dragons.push(dragon)
    }
  }
  
  const mainView = {
    main: document.querySelector('main'),
    init(){
      this.main.innerHTML = ''
    },
    template(dragons){
      return dragons.reduce((acc, dragon) => acc += `
          <div class="${dragon.type}" data-id="${dragon.id}">
            <h1>${dragon.type} Dragon</h1>
            <div onclick='controller.increment(${dragon.id})'>
          ${controller.checkDragon(dragon.type)}
          <span>${dragon.clicks}</span></div>
          </div>
        `, '')
    },
    render(){
      this.init()
      this.main.innerHTML = this.template(controller.getDragons())
    }
  }
  
  const listView = {
    list: document.querySelector('ul'),
    init(html){
      this.list.innerHTML = ''
    },
    template(arr){
      return arr.reduce((acc, cur) => acc += `
          <li onclick='controller.dispatch("${cur}")'>${cur}</li>`, '')
    },
    render(){
      this.init()
      this.list.innerHTML = this.template(controller.getList())
    }
  }
  
  const controller = {
    init() {
      alert('Click Dragons to display')
    },
    getDragons(callback = ()=>true){
      return model.dragons//.filter(d => callback(d))
    },
    getList(callback = ()=>true){
      return model.list//.filter(d => callback(d))
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
      return model.dragons.reduce((a, c) => a+=c.clicks, 0)
    },
    checkDragon(type){
      return type ==='Fluffykins' ? '🐇':'🐉'
    }
  }
  
  listView.render();