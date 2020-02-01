  const mainView = {
    main: document.querySelector('main'),
    init: function(){
      this.main.innerHTML = ''
    },
    render(){
      this.init()
      this.main.innerHTML = this.template(controller.getDragons((d)=>d.inArena))
    },
    template(dragons){
      return dragons.reduce((acc, dragon) => acc += `
          <div class="${dragon.type} level${dragon.level}" data-id="${dragon.id}">
            <h1>${dragon.type} Dragon</h1>
            <h2>Level: ${dragon.level}</h2>
            <div onclick='controller.increment(${dragon.id})'>
          <span>${controller.checkDragon(dragon.type)}</span>
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
          <li 
          onclick='controller.dispatch("${cur.id}", "add")'
          ondblclick='controller.dispatch("${cur.id}", "modify")'
          >${cur.type}</li>`, '')
    },
    render(){
      this.init()
      this.list.innerHTML = this.template(controller.getDragons((d)=>!d.deleted))
    }
  }

  const sumView = {
    sum: document.querySelector('.sum'),
    init(){
      this.sum.innerHTML = ''
    },
    template(obj){
      return `<div>${obj.clicks} total clicks</div>
              <div>${obj.levels} total levels</div>`
    },
    render(){
      this.init()
      this.sum.innerHTML = this.template(controller.getSums())
    }
  }

  const adminView = {
    modal: document.querySelector('.modalMask'),
    init(){
      this.modal.style.display = 'flex';
      setTimeout(() => this.modal.classList.add('modalOpacity'), 10);
    },
    closeModal() {
      this.modal.classList.remove('modalOpacity');
      setTimeout(()=>this.modal.style.display = 'none', 350);
    },
    template(dragon){
      return `
      <div class="brandModal">
        <div class="closeModal" onclick="adminView.closeModal()">╳</div>
        <main>
          <form class='flex'>
            <h1 class='modalBold'>Modify ${dragon.type} Dragon</h1><br>
            <label>Type</label><input type="text" value="${dragon.type}"/>
            <label>Clicks</label><input type="text" value="${dragon.clicks}"/>
            <label>Hide<input type="checkbox" value="${!dragon.inArena}"/></label>
            <label>Delete Dragon<input type="checkbox" value="${dragon.deleted}"/></label>
          </form>
          <button onclick="controller.modifyDragon(${dragon.id})">Submit ›</button>
        </main>
      </div>
      `
    },
    render(id){
      this.modal.innerHTML = this.template(controller.getDragons(d=>d.id==id)[0])
      this.init()
    }
  }