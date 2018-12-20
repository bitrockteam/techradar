const MalformedDataError = function(message :string) {
  this.message = message;
};

Object.setPrototypeOf(MalformedDataError, Error);
MalformedDataError.prototype = Object.create(Error.prototype);
MalformedDataError.prototype.name = "MalformedDataError";
MalformedDataError.prototype.message = "";
MalformedDataError.prototype.constructor = MalformedDataError;

export { MalformedDataError };
