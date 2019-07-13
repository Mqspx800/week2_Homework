class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(item, quan, price) {
        let i = { name: item, quantity: quan, pricePerUnit: price }
        this.items.push(i)
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.map((item) => item.pricePerUnit * item.quantity).reduce((total, next) =>
            (total + next), 0)
    }
}
module.exports = ShoppingCart
