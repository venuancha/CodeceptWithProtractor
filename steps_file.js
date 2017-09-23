'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    createTodo: function(title) {
      this.fillField({model: 'newTodo'}, title);
      this.pressKey('Enter');
    }
  });
}
