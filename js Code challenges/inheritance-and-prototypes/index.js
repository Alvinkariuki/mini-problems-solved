class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

let Square = class extends Rectangle {
  constructor(l) {
    super(l, l);
    this.l = l;
  }
};

let sqR = new Square(10);

console.log(sqR.area());
