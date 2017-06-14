function FordFactory(model) {
  if (model === 'escort') {
    return new Ford(model, 108000, 180);
  }

  if (model === 'focus') {
    return new Ford(model, 111000, 220);
  }

}

function Ford(model, price, maxSpeed) {
  this.model = model;
  this.price = price;
  this.maxSpeed = maxSpeed;
}

module.exports = FordFactory;