// this module contains the structure of the rocky state that will be used throughout the app

class rockyState {
  constructor() {
    this.tri = {hasTri: false, data: [], active: 0, length: 0};
    this.mod = {hasMod: false, data: [], active: 0, length: 0};
  }

  // TRIANGLE METHODS

  // ======== ADD TRIANGLE ==================================================================================================
  addTriangle(triangle, setActive = false) {
    if (!this.tri.hasTri) {
      this.tri.data = [triangle]
      this.tri.hasTri = true;
      this.tri.length = 1;
    } else {
      this.tri.data.push(triangle);
      this.tri.length++;
    }
    if (setActive) {
      this.tri.active = this.tri.length - 1;
    }
  }

  // alias for addTriangle
  addTri(triangle, setActive = false) {
    this.addTriangle(triangle, setActive);
  }

  // ======== REMOVE TRIANGLE ==================================================================================================
  removeTriangle(triangle) {
    if(!this.tri.hasTri) {
      return;
    } else if (this.tri.length === 1) {
      this.tri.data = [];
      this.tri.hasTri = false;
      this.tri.length = 0;
    } else {
      this.tri.data.splice(this.tri.data.indexOf(triangle), 1);
      this.tri.length--;
    }
  }

  // alias for removeTriangle
  removeTri(triangle) {
    this.removeTriangle(triangle);
  }

  // ======== LIST TRIANGLE ==================================================================================================
  listTriangles() {
    return this.tri.data;
  }

  activeTriangle() {
    return this.tri.data[this.tri.active];
  }

  isSelectedTriangle(triangle) {
    return this.tri.data[this.tri.active] === triangle;
  }


}


export default rockyState;