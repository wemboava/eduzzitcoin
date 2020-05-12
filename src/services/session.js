import Cookies from 'js-cookie'
import axios from 'axios'

const TOKEN_KEY = "client_token";
class SessionService {
  // Cookies
  getCookie (name) {
    const data = Cookies.get(name)
    return data || null
  }

  setCookie (name, data) {
    Cookies.set(name, JSON.stringify(data.token), {
      expires: 99999,
      domain: window.location.hostname
    })
  }

  removeCookie (name) {
    Cookies.remove(name, {
      expires: 99999,
      domain: window.location.hostname
    })
  }

  isAuthenticated = () => this.getCookie(TOKEN_KEY) !== null;

  getToken = () => this.getCookie(TOKEN_KEY);

  configAxios = () => {
    let token = JSON.parse(this.getCookie(TOKEN_KEY))

    token = (token) ? `Bearer ${token}` : token

    axios.defaults.headers.common.Authorization = token
  }
}

export default new SessionService();
