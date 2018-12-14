import {Action} from '@ngrx/store';
import {ReducerType} from './types';

export type ReducerTestSuiteType = () => void;

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

        it('should create an initial state', () => {
            expectedState = reducer(null, dummyAction);
            expect(expectedState).toBeDefined();
            expectedState = reducer(null, action);
            expect(expectedState).toBeDefined();
        });

        it('should not mutate the source state', () => {
            expectedState = reducer(initialState, action);
            expect(expectedState).not.toBe(initialState);
        });

        it('should return the source state as a response to an unknown action', () => {
            expectedState = reducer(initialState, dummyAction);
            expect(expectedState).toBe(initialState);
        });
    };
}
