function Soldier(lvl) {
  this.lvl = lvl;
}

Soldier.prototype.attack = function() {
  return this.lvl * 1;
};

function SuperSoldier(lvl) {
  this.lvl = lvl;
}

SuperSoldier.prototype.attackWithKnife = function() {
  return this.lvl * 100;
};

function SuperSoldierAdapter(superSoldier) {
  this.superSoldier = superSoldier;
}

SuperSoldierAdapter.prototype.attack = function() {
  return this.superSoldier.attackWithKnife();
};

module.exports = [Soldier, SuperSoldier, SuperSoldierAdapter];