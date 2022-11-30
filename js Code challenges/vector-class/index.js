let Vector = function (components) {
  this.vectorValues = components;
  this.result = Array(components.length).fill(0);

  this.add = (vector) => {
    return this.compute(vector, "+");
  };

  this.subtract = (vector) => {
    return this.compute(vector, "-");
  };

  this.dot = (vector) => {
    return this.vectorValues.reduce((acc, _, currIdx) => {
      return acc + this.compute(vector, "*").vectorValues[currIdx];
    }, 0);
  };

  this.norm = () => {
    this.result = Math.sqrt(
      this.vectorValues.reduce((acc, curr) => {
        return acc + curr ** 2;
      }, 0)
    );

    return this.result;
  };

  this.equals = (result) => {
    return this.vectorValues.toString() === result.vectorValues.toString();
  };

  this.toString = () => {
    return (this.result = "(" + this.vectorValues + ")");
  };

  this.lengthMatches = (vector) => {
    if (vector.vectorValues.length !== this.vectorValues.length) {
      throw Error("Array length not matching");
    }
  };

  this.compute = (vector, symbol) => {
    this.lengthMatches(vector);
    result = this.vectorValues.map((_, idx) => {
      return parseInt(
        eval(`${this.vectorValues[idx]}${symbol}${vector.vectorValues[idx]}`)
      );
    });
    return new Vector(result);
  };
};

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([3, 4, 8]);

console.log(a.add(b).equals(new Vector([4, 6, 8])));
