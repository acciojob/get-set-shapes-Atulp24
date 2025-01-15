//complete this code
class Rectangle {
	constructor(a, b) {
		this._width = a
		this._height = b
	}
	get width() {
		return this._width
	}
	get height() {
		return this._height
	}
	getArea() {
		return this.width*this.height
	}
}

class Square extends Rectangle {
	constructor(s) {
		super(s,s)
	}
	getPerimeter() {
		return this.width*4
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
