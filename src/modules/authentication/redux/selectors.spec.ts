import {isAuthenticated} from './selectors';
import {AppState} from './app-state';
import {AuthenticationStateName} from './feature-state-name';
import {AuthenticationState} from './feature-state';

describe('Authentication selectors', () => {
    let appState:AppState;

    beforeEach(() => {
        appState = {
            [AuthenticationStateName]: new AuthenticationState(),
        };
    });

    it('should select isAuthenticated value', () => {
        expect(isAuthenticated(appState)).toBeFalsy();
        appState[AuthenticationStateName].isAuthenticated = true;
        expect(isAuthenticated(appState)).toBeTruthy();
    });
});
