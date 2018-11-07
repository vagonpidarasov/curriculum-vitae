import {ActivatedRouteSnapshot} from '@angular/router';
import {FeatureState, FeatureStateName} from './feature';

export function currentRoute(state:FeatureState):ActivatedRouteSnapshot {
    return state[FeatureStateName].currentRoute;
}
