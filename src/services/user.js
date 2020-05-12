import BaseService from './api'

class UserService extends BaseService {
  create (data) {
    return this.post(`${this.getUrl()}/users`, data)
  }
  update (data) {
    return this.put(`${this.getUrl()}/users`, data)
  }
}

export default new UserService();
