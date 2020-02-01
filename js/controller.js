var controller = (function (model, view) {
    var DOM = view.getDOMstrings();
    var render = function () {
        view.renderList(model.list)
    }
    var setUpListeners = function () {
        document.querySelector(DOM.list).addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                model.addDragon(e.target.innerText);
                view.renderDragon(model.dragons[model.dragons.length - 1])
            }
        })
        document.querySelector(DOM.arena).addEventListener('click', (e) => {
            console.log(e.target);
            let id;
            if(e.target.tagName === 'SECTION'){
                return
            }
            else if (e.target.id) {
                id = e.target.id;
            } else if (e.target.parentNode.id) {
                id = e.target.parentNode.id;
            }
            model.increment(id);
            view.updateDragon(id, model.dragons[id].value);
        })
    }
    return {
        init: function () {
            render();
            setUpListeners();
        },
    }
})(model, view);

controller.init();