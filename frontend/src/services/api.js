import axios from 'axios';

const url = () => {

  const apiprod = 'http://ec2-18-231-107-221.sa-east-1.compute.amazonaws.com:3002/';
  const apilocal = '127.0.0.1:3002/';

  let base = '';
  let urllocal = '';

  urllocal = window.location.href.split(":");

  base = apiprod

  if (urllocal[1] === '//127.0.0.1' || urllocal[1] === '//localhost') {
    base = 'http://' + apilocal
  }

  return base
}

const api = axios.create({

  baseURL: url()
});

export default api;