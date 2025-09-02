class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce((acc, currentValue) => acc + currentValue, 0);
    }
}


class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    const [a, b, c] = this.array;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;

    const [a, b, c, d] = this.array;
    return a === b && b === c && c === d;
  }

  get area() {
    if (this.isValid) {
      return this.array[0] ** 2;
    }
    return null;
  }
}