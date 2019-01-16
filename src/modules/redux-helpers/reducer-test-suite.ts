import {ReducerType, Action, ReducerTestSuiteType} from './types';
/**
 * Returns a test suite which should test some basic reducer features
 * @param {ReducerType<S>} reducer
 * @param {S} state
 * @param {Action} action
 * @returns {ReducerTestSuiteType}
 * @constructor
 */
export function ReducerTestSuite<S>(reducer:ReducerType<S>, state:S, action:Action):ReducerTestSuiteType {
    return function() {
        const dummyAction:Action = {type: 'DUMMY'};
        let initialState:S;
        let expectedState:S;

        beforeEach(() => {
            initialState = Object.assign({}, state);
        });

        it('should create an initial state in response to a dummy action', () => {
            expectedState = reducer(null, dummyAction);
            expect(expectedState).toBeDefined();
        });

        it('should create an initial state in response to a known action', () => {
            expectedState = reducer(null, action);
            expect(expectedState).toBeDefined();
        });

        it('should not return the source state in response to a known action', () => {
            expectedState = reducer(initialState, action);
            expect(expectedState).not.toBe(initialState);
        });

        it('should return the source state in response to a dummy action', () => {
            expectedState = reducer(initialState, dummyAction);
            expect(expectedState).toBe(initialState);
        });
    };
}
