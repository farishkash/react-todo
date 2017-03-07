var expect = require('expect');

var TodoAPI = require('TodoAPI');



  describe('filterTodos',() => {
    var todos = [ {
      id: 1,
      text: 'some text here',
      completed: true
    },
    {
      id: 2,
      text: 'some other text here',
      completed: false
    },
    {
      id: 3,
      text: 'Third text here',
      completed: true
    }];

    it('should return all items if showCompleted is true', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);

    });

    it('should return one item if showCompleted is false', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);

    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filtered todos by search text', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);

    });
    it('should return all todos if searchText is empty', ()=> {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);

    });
  })
