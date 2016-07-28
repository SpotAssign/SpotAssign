import { userService } from './userService';

const service = () => {
    return {
        userService
    }
}
service.$inject = [ '$http' ];
export { service }
