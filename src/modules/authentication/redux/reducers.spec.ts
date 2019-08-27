import {AuthenticationState} from './state';
import {setUserData} from './reducers';
import {SetUserData} from './actions';
import {UserData} from '../types';

describe('Authentication reducers', () => {
    let state:AuthenticationState;

    beforeEach(() => {
        state =  new AuthenticationState();
    });

    it('should set UserData', () => {
        const userData = new UserData();
        userData.username = 'username';

        setUserData(state, new SetUserData(userData));
        expect(state.isAuthenticated).toBeTruthy();
        expect(state.userData.username).toBe(userData.username);
    });
});
