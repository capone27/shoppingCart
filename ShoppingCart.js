
class ShoppingCart {
  constructor(name, quantity, pricePerUnit) {
    this.name = name
    this.quantity = quantity
    this.pricePerUnit = pricePerUnit
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(name, quantity, pricePerUnit) {
    this.items.push({
      name: name,
      quantity: quantity,
      pricePerUnit: pricePerUnit
    })
  }

  clear() {
    this.items = []
    return this.items
  }


  total() {

    const unitPerPrice = this.items
      .map(unit => unit.getItems())
      .reduce((a, b) => a   + b)
    const quantity = this.item
      .map(quantity => quantity.getItems())
      .reduce((a, b) => a + b)
    return unitPerPrice * quantity

  }
}

module.exports = ShoppingCart