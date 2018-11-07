import {ReducerTestSuite} from 'src/modules/redux-helpers/test';
import {AuthenticationState} from './state';
import {AuthenticationReducer, signInSuccess} from './reducer';
import {SignInSuccess, SignOut} from './actions';

describe('AuthenticationReducer', ReducerTestSuite(
    AuthenticationReducer,
    new AuthenticationState(),
    new SignOut()
));

describe('Authentication reducers', () => {
    let state:AuthenticationState;

    beforeEach(() => {
        state =  new AuthenticationState();
    });

    it('should signInSuccess', () => {
        const username:string = 'username';
        signInSuccess(state, new SignInSuccess({username}));
        expect(state.isAuthenticated).toBeTruthy();
        expect(state.username).toBe(username);
    });
});
