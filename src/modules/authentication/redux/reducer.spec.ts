import {ReducerTestSuite} from 'yet-another-redux-helpers';
import {AuthenticationState} from './state';
import {reducer} from './reducer';
import {SetUserData} from './actions';
import {UserData} from '../types';

describe('AuthenticationReducer', ReducerTestSuite(
    reducer,
    new AuthenticationState(),
    new SetUserData(new UserData())
));
