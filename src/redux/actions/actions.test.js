import * as actions from './actions'
import { ADD_TODO, TOGGLE_TODO, CHANGE_TODO_STATUS, SEARCH_TODO, SET_FILTER } from "./actionTypes";


describe('actions', () => {
  it('should create an action to add a todo', () => {
    const content = 'meeting'
    const tags = 'work, assignment'
    const expectedAction = {
      type: ADD_TODO,
      payload: {
		    id: 1,
		    content,
		    tags
	  	}
    }
    expect(actions.addTodo(content, tags)).toEqual(expectedAction)
  })
  it('should mark todo item as deleted', () => {
    const content = 'meeting'
    const tags = 'work, assignment'
    const id = 1
    const expectedAction = {
      type: TOGGLE_TODO,
      payload: {
	    	id
			}
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
    // expect(actions.toggleTodo(1).deleted).toEqual(true)
  })
  it('should change status from not_start to start', () => {
    const content = 'meeting'
    const tags = 'work, assignment'
    const status = 'start'
    const id = 1
    const expectedAction = {
      type: CHANGE_TODO_STATUS,
      payload: {
	    	id,
	    	status
			}
    }
    expect(actions.changeTodoStatus(id, 'start')).toEqual(expectedAction)
  })
  it('should search the todo items by tags', () => {
    const content = 'meeting'
    const tags = 'work, assignment'
    const keyword = 'work'
    const expectedAction = {
      type: SEARCH_TODO,
      payload: {
	    	keyword
			}
    }
    expect(actions.search('work')).toEqual(expectedAction)
  })
})