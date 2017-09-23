
Feature('Angulartest');

Before((I) => {
  I.amOnPage('/');
});

var createTodo = function (I, name) {
  I.fillField({model: 'newTodo'}, name);
  I.pressKey('Enter');
}

Scenario('create todo item', (I) => {
  I.dontSeeElement('#todo-count');
  I.createTodo( 'Write a guide');
  I.see('Write a guide', {repeater: "todo in todos"});
  I.see('1 item left', '#todo-count');
});

Scenario('edit todo', (I) => {
  I.createTodo('write a review');
  I.see('write a review', {repeater: "todo in todos"});
  I.doubleClick('write a review');
  I.pressKey(['Control', 'a']);
  I.pressKey('write old review');
  I.pressKey('Enter');
  I.see('write old review', {repeater: "todo in todos"});
});

Scenario('check todo item', (I) => {
  I.createTodo( 'my new item');
  I.see('1 item left', '#todo-count');
  I.checkOption({model: 'todo.completed'});
  I.see('0 items left', '#todo-count');
});

