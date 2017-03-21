import axios from 'axios';

const URL = 'http://localhost:4000/api';
const ITEMS_URL = `${URL}/items`;

export function fetchItems() {
  return axios.get(ITEMS_URL);
}

export function appendItem(item) {
  return axios.post(ITEMS_URL, item);
}

export function updateItem(item) {
  return axios.put(ITEMS_URL, item);
}

export function getItem(id) {
  return axios.get(ITEMS_URL, { id });
}
