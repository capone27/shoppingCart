
class ShoppingCart {
  constructor() {
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
    return this.items.reduce(
      (acc, value) => acc + (value.pricePerUnit * value.quantity),0)
  
   

  }
}

