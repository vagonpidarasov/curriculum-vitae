import {ActivatedRouteSnapshot} from '@angular/router';
import {FeatureState, FeatureStateName} from './feature';

export function requestedRoute(state:FeatureState):ActivatedRouteSnapshot {
    return state[FeatureStateName].requestedRoute;
}
