import {ReducerTestSuite} from 'src/modules/redux/test';
import {AuthenticationState} from './state';
import {reducer} from './reducer';
import {SetUserData} from './actions';
import {UserData} from '../types';

describe('AuthenticationReducer', ReducerTestSuite(
    reducer,
    new AuthenticationState(),
    new SetUserData(new UserData())
));
