let main = document.querySelector('main')
let list = document.querySelector('ul')
// let dragons = [{id: 1234, type: 'Woodland', clicks: 0}]
const genId = () => Math.random().toFixed(4).slice(2)
const getDragon = (name) => name ==='Fluffykins' ? '🐇':'🐉'
let dragonCard = (name, id) => `<div class=${name} data-id=${id}><h1>${name} Dragon</h1>
<div>${getDragon(name)}<span>0</span></div></div>`

list.addEventListener('click', (e) => {
  if(e.target.tagName.match(/li/i)){
    let dragon = e.target.innerText.split(' ')[0];
    let id = genId()
    // main.innerHTML += dragonCard(dragon, id);
    main.insertAdjacentHTML('beforeEnd', dragonCard(dragon, id))
    listen(id);
  }
})


function listen(id){
  main.querySelector(`[data-id="${id}"]`).addEventListener('click', function(e) {
    let output = e.target.querySelector('span')
    let num = output.innerText
    output.innerText = Number(output.innerText)+1
  })
}

listen('1234')