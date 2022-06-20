class PartyPlanner {
  constructor() {
    this.guestList = [];
  }

  addToGuestList(name) {
    this.guestList.push(name);
  }

  throwParty() {
    if (!this.guestList.length) {
      return "Gotta add people to the guest list";
    } else {
      return `Welcome to the party ${this.guestList.join()}`;
    }
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}
