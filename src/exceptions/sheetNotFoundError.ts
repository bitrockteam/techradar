const SheetNotFoundError = function (message :string) {
    this.message = message;
};

Object.setPrototypeOf(SheetNotFoundError, Error);
SheetNotFoundError.prototype = Object.create(Error.prototype);
SheetNotFoundError.prototype.name = "SheetNotFoundError";
SheetNotFoundError.prototype.message = "";
SheetNotFoundError.prototype.constructor = SheetNotFoundError;

export { SheetNotFoundError };
