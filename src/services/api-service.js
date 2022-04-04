import TokenService from './token-service';
import config from '../config';

const ApiService = {
  getFloorMaterials() {
    return fetch(`${config.API_ENDPOINT}/data/floor_materials`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCeilingMaterials() {
    return fetch(`${config.API_ENDPOINT}/data/ceiling_materials`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getWallMaterials() {
    return fetch(`${config.API_ENDPOINT}/data/wall_materials`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getOtherMaterials() {
    return fetch(`${config.API_ENDPOINT}/data/other_materials`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCeilingProducts() {
    return fetch(`${config.API_ENDPOINT}/data/ceiling_products`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getBaffleUnits() {
    return fetch(`${config.API_ENDPOINT}/data/baffle_units`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getWallProducts() {
    return fetch(`${config.API_ENDPOINT}/data/wall_products`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
export default ApiService;
