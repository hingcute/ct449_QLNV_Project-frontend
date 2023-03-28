import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }
    async createUser(data) {
        return (await this.api.post("/", data)).data;
    }
    async get(email) {
        return (await this.api.get(`/${email}`)).data;
    }               
}
export default new UserService();
