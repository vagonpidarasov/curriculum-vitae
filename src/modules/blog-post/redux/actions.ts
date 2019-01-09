import {Action, ActionWithPayload} from 'src/modules/redux-helpers';
import {RESOLVE, RESOLVE_FAIL, RESOLVE_SUCCESS, SET} from './action-types';

export class ResolvePosts implements Action {
    readonly type = RESOLVE;
}

export class ResolvePostsSuccess implements Action {
    readonly type = RESOLVE_SUCCESS;
    constructor(public payload:any[]) {}
}

export class ResolvePostsFail implements Action {
    readonly type = RESOLVE_FAIL;
    constructor(public payload:any) {}
}

export class SetPosts implements ActionWithPayload {
    readonly type = SET;
    constructor(public payload:any[]) {}
}
