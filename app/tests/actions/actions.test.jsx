var expect = require('expect');
var actions = require('actions');

describe("Actions", ()=> {
  it('should generate search text action', ()=> {
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should add text to todo', ()=> {
    var action = {
      type:'ADD_TODO',
      text: 'Some text'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should toggle showCompleted', ()=> {
    var action = {
      type:'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.toggleShowCompleted(action.type);
    expect(res).toEqual(action);
  });

  it('should toggle todo', ()=> {
    var action = {
      type:'TOGGLE_TODO',
      id: 2
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});