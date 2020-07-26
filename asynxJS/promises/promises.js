// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => alert(`${script.src} загружен!`),
//   error => alert(`Ошибка: ${error.message}`)
// );

// promise.then(script => alert('Ещё один обработчик...'));
// ////////////////////////////////////////////////

// function getRequest(url) {

//   return new Promise((resolve, reject) => {
//               const xhr = new XMLHttpRequest();
//               xhr.open('GET', url);
//               xhr.send();

//               xhr.addEventListener('load', () => resolve(JSON.parse(xhr.responseText)));
//               xhr.addEventListener('error', () => reject({status: xhr.status, url}));
//   });

//   }

//   getRequest('https://jsonplaceholder.typicode.com/users')
//       .then((users) => {
//           console.log(users);
//       })
//       .catch((err) => console.log(err));

function promiseCreator(ms, res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(res), ms);
  });
}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);