import { environment } from '../environments/environment.prod';

export class urlServices {
    getCall = `${environment.serviceUrl}/posts`;
    postcall = `${environment.serviceUrl}/addMember`;
}