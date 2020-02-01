var model = (function () {
    var Dragon = function (type, id) {
        this.type = type
        this.value = 0
        this.id = id
    }
    return {
        list: ['Forest', 'Mountain', 'Sand', 'Water', 'Fire', 'Metallic', 'Sky', 'Fluffykins'],
        dragons: [],
        addDragon(type) {
            let newDragon = new Dragon(type, this.dragons.length)
            this.dragons.push(newDragon);
        },
        increment(index) {
            this.dragons[index].value = this.dragons[index].value + 1;
        }
    }
})();