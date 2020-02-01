
  
  const mainView = {
    main: document.querySelector('main'),
    init: function(){
      this.main.innerHTML = ''
    },
    render(){
      this.init()
      this.main.innerHTML = this.template(controller.getDragons())
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
  }
  
  const listView = {
    list: document.querySelector('ul'),
    init(){
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