export function toAvatarUrl(url:string, width:number, height:number, format:string):string {
    return `${url}?w=${width}&h=${height}&fit=thumb&fm=${format}`;
}
