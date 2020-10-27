import reducer from './todos'
import { ADD_TODO, TOGGLE_TODO, CHANGE_TODO_STATUS } from "../actions/actionTypes";

describe('todos reducer', () => {

	const mockInitialState = {"allIds": [1], "byIds": {"1": {"content": "meeting", "deleted": false, "status": "not_start", "tags": "work, assignment"}}};
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allIds: [],
      byIds: {}
    })
  })

  it('should handle ADD_TODO', () => {
    const content = 'meeting'
    const tags = 'work, assignment'
    expect(
      reducer(undefined, {
        type: ADD_TODO,
        payload: {
			    id: 1,
			    content,
			    tags
		  	}
      })
    ).toEqual({"allIds": [1], "byIds": {"1": {"content": "meeting", "deleted": false, "status": "not_start", "tags": "work, assignment"}}})
  })

	it('handle DELETE_TODO', () => {
		const expectedResult = {"allIds": [1], "byIds": {"1": {"content": "meeting", "deleted": true, "status": "not_start", "tags": "work, assignment"}}};
		expect(reducer(mockInitialState, {type: TOGGLE_TODO, payload: {id: 1}})).toEqual(expectedResult);
		// expect(reducer(mockInitialState, TOGGLE_TODO(1))).toEqual(expectedResult);
	});

	it('handle CHANGE_TODO_STATUS', () => {
		const expectedResult = {"allIds": [1], "byIds": {"1": {"content": "meeting", "deleted": false, "status": "start", "tags": "work, assignment"}}};
		expect(reducer(mockInitialState, {type: CHANGE_TODO_STATUS, payload: {id: 1, status: 'start'}})).toEqual(expectedResult);
		// expect(reducer(mockInitialState, TOGGLE_TODO(1))).toEqual(expectedResult);
	});
})

