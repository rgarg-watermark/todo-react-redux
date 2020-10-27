import reducer from './visibilityFilter'
import { SEARCH_TODO } from "../actions/actionTypes";

describe('visibility Filter todo reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual("all")
  })
})