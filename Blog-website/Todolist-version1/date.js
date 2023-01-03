//jshint esversion:6

exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

//module.exports is the same thing as exports
exports.getDay = function() {
  const today = new Date();

  const options = {
    day: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
};
