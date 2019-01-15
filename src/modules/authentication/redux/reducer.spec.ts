import {ReducerTestSuite} from 'src/modules/redux-helpers/test';

import {AuthenticationState} from './state';
import {reducer} from './reducer';
import {setUserData} from './reducers';
import {SetUserData, SignOut} from './actions';
import {UserData} from '../types';

describe('AuthenticationReducer', ReducerTestSuite(
    reducer,
    new AuthenticationState(),
    new SignOut()
));

describe('Authentication reducers', () => {
    let state:AuthenticationState;

    beforeEach(() => {
        state =  new AuthenticationState();
    });

    it('should setUserData', () => {
        const userData = new UserData();
        userData.username = 'username';

        setUserData(state, new SetUserData(userData));
        expect(state.isAuthenticated).toBeTruthy();
        expect(state.userData.username).toBe(userData.username);
    });
});
