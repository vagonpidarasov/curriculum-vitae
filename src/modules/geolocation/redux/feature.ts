import {GeolocationState} from './state';

export const FeatureStateName = 'geolocation';
export interface FeatureState {
    [FeatureStateName]:GeolocationState;
}
