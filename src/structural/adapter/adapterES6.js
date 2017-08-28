class Soldier {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class SuperSoldier {
  constructor(level) {
    this.level = level;
  }

  attackWithKnife() {
    return this.level * 100;
  }
}

class SuperSoldierAdapter {
  constructor(superSoldier) {
    this.superSoldier = superSoldier;
  }

  attack() {
    return this.superSoldier.attackWithKnife();
  }
}

export { Soldier, SuperSoldier, SuperSoldierAdapter };