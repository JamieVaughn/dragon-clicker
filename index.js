let main = document.querySelector('main')
let list = document.querySelector('ul')
const getDragon = (name) => name ==='Fluffykins' ? '🐇':'🐉'


let dragons = [{id: 0, type: 'Forest', clicks: 0}]


let dragonCard = dragon => `
<div class=${dragon.type} data-id=${dragon.id}>
  <h1>${dragon.type} Dragon</h1>
  <div onclick='increment(${dragon.id})'>
${getDragon(dragon.type)}
<span>${dragon.clicks}</span></div>
</div>`


list.addEventListener('click', (e) => {
  if(e.target.tagName.match(/li/i)){
    let dragonType = e.target.innerText.split(' ')[0];
    dragons.push({
      id: dragons.length,
      type: dragonType,
      clicks: 0
    })
    console.log(dragons)
        render()
  }
})


function increment(id){
    let cur = dragons.filter(d => d.id == id)[0]
    cur.clicks += 1
    render()
}

function render() {
  main.innerHTML = ''
  dragons.forEach(d => {
    console.log(d)
    main.innerHTML += dragonCard(d)
  })
}

render()