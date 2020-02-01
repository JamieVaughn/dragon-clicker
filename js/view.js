var view = (function () {
  var domStrings = {
      list: '.list',
      arena: '.arena'
  }
  return {
      renderList: function (array) {
          let listElement = document.querySelector(domStrings.list);
          array.forEach(type => {
              var listItem = document.createElement('li');
              listItem.innerText = type;
              listElement.appendChild(listItem);
          })
      },
      renderDragon: function (dragon) {
          let arena = document.querySelector(domStrings.arena);
          let dragonCard = document.createElement('div');
          let dragonName = document.createElement('div');
          let dragonType = document.createElement('span');
          let dragonCounter = document.createElement('span')
          dragonCard.id = dragon.id;
          dragonCard.classList.add(dragon.type)
          dragonName.innerText = dragon.type
          dragonType.innerText = '🐉';
          dragonCounter.innerText = dragon.value;
          dragonCard.append(dragonName, dragonType, dragonCounter),
          // dragonCard.appendChild(dragonType),
          // dragonCard.appendChild(dragonCounter),
          arena.appendChild(dragonCard)
      },
      updateDragon: function (id, newVal) {
          document.getElementById(id).lastChild.innerText = newVal;
      },
      getDOMstrings: function () {
          return domStrings;
      }
  }
})();