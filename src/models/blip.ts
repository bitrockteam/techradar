const IDEAL_BLIP_WIDTH :number = 22;

const Blip = function (
  name :string, 
  ring :number, 
  isNew :boolean, 
  topic :string, 
  description :string
) {
  var self, number;

  self = {};
  number = -1;

  self.width = IDEAL_BLIP_WIDTH;

  self.name = function () {
    return name;
  };

  self.topic = function () {
    return topic || '';
  };

  self.description = function () {
    return description || '';
  };

  self.isNew = function () {
    return isNew;
  };

  self.ring = function () {
    return ring;
  };

  self.number = function () {
    return number;
  };

  self.setNumber = function (newNumber) {
    number = newNumber;
  };

  return self;
};

export { Blip };