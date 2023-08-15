// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

// COMMENT: JSDoc을 사용하여 타입 지정
/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

// fetch user data
function fetchUser() {
  return axios.get(url);
}

// COMMENT: JSDoc을 통해 지정된 타입 확인 가능
fetchUser().then(function (response) {
  response.address.city;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
