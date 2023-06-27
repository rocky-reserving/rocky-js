// this module defines a rockyTriangle object that will be used to store the triangle data
// in the rockyState object

class rockyTriangle {
  constructor() {
    this.hasTri=false
    this.tri={}
    this.activeTri=[]
    this.activeTriName=''
    this.length=0
  }

  // ======== ADD TRIANGLE ==================================================================================================
  addTriangle (triangle, triangleName, setActive = false) {
    if (!this.hasTri) {
      if (triangleName) {
        this.tri = {[triangleName]: triangle}
        this.hasTri = true;
        this.length = 1;
    } else {
      this.tri[triangleName] = triangle;
      this.length++;
    }
    if (setActive) {
      this.activeTri = triangle;
      this.activeTriName = triangleName;
    }}
  }

  // ======== REMOVE TRIANGLE ==================================================================================================
  clearActiveTriangle(triangleName) {
    if (this.activeTriName === triangleName) {
      this.activeTri = [];
      this.activeTriName = '';
    }
  }

  removeTriangle(triangleName) {
    if(!this.hasTri) {
      return;
    } else if (this.length === 1) {
      this.tri = {};
      this.hasTri = false;
      this.length = 0;
    } else if (this.tri[triangleName]) {
      this.tri.splice(this.tri.indexOf(triangleName), 1);
      this.length--;
    }
    this.clearActiveTriangle(triangleName); // clear the active triangle if it is the one being removed
  }

  
  // ======== LIST TRIANGLE ==================================================================================================
  listTriangles() {
    // return the indices of the triangles
    return Object.keys(this.tri);
  }

  activeTriangle() {
    return this.activeTri;
  }

  isSelectedTriangle(triangle) {
    return this.tri.data[this.tri.active] === triangle;
  }
}

export default rockyTriangle;