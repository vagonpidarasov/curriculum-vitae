export interface Action<P = any> {
    type:string;
    payload?:P;
}
