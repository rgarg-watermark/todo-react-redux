import reducer from './searchTodo'
import { SEARCH_TODO } from "../actions/actionTypes";

describe('search todo reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      search: ''
    })
  })

	it('handle searchTodo', () => {
		const expectedResult = {"search": "work"};
		expect(reducer(undefined, {type: SEARCH_TODO, payload: {keyword: 'work'}})).toEqual(expectedResult);
	});
})

