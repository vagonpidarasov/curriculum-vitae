import {isAuthenticated} from './selectors';
import {AuthenticationState} from './state';
import {FeatureStateName, FeatureState} from './feature';

describe('Authentication selectors', () => {
    let appState:FeatureState;

    beforeEach(() => {
        appState = {
            [FeatureStateName]: new AuthenticationState(),
        };
    });

    it('should select isAuthenticated value', () => {
        expect(isAuthenticated(appState)).toBeFalsy();
        appState[FeatureStateName].isAuthenticated = true;
        expect(isAuthenticated(appState)).toBeTruthy();
    });
});
