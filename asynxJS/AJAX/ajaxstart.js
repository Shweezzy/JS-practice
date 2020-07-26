  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


  xhr.addEventListener('load', users);

  function users(e) {
    const infoUsers = JSON.parse(xhr.responseText);
    const objOfUsers = infoUsers.reduce((acc, info) => {
      acc[info.id] = info;
      return acc;
    }, {});

    function renderUsers({
      username,
      email,
      website,
      phone
    } = {}) {

      const div = document.createElement('div');
      div.classList.add('card-body', 'd-none', 'text-center');

      const span = document.createElement('span');
      span.textContent = `username: ${username}, email: ${email}, website: ${website}, phone: ${phone}`;

      div.appendChild(span);

      return div
    }

    const usersDiv = document.querySelector('.container');
    const divForInfo = document.querySelector('.global');
    const h6 = document.createElement('h6');
    h6.textContent = '<--- click for more info';
    h6.classList.add('text-right', 'col-2');
    divForInfo.appendChild(h6);

    function createCardOfUsers(listOfUsers) {
      const fragment = document.createDocumentFragment();
      Object.values(listOfUsers).forEach(user => {
        const nameUser = document.createElement('h6');
        nameUser.textContent = user.name;
        nameUser.classList.add('handler', 'border', 'p-2', 'text-center');

        const div = renderUsers(user);

        usersDiv.insertAdjacentElement('afterbegin', div);
        usersDiv.insertAdjacentElement('afterbegin', nameUser);

      });


    };
    createCardOfUsers(objOfUsers);

    usersDiv.addEventListener('click', handler);

    function handler(e) {
      if (e.target.classList.contains('handler')) {
        e.target.nextSibling.classList.toggle('d-none');
      }
    }
    const form = document.forms['addUser'];
    for (let i = 0; i < form.children.length - 1; i++) {
      form.children[i].classList.add('form-control', 'form-control-sm', 'col', 'm-1');
    }

    const inputName = form.elements['name'];
    const inputEmail = form.elements['email'];
    const inputUsername = form.elements['username'];
    const inputPhone = form.elements['phone'];
    const inputWebsite = form.elements['website'];

    form.addEventListener('submit', inputsValue);
    let i = 10;

    function inputsValue(e) {
      e.preventDefault()

      const name = inputName.value;
      const email = inputEmail.value;
      const username = inputUsername.value;
      const phone = inputPhone.value;
      const website = inputWebsite.value;

      if (!name || !email || !username || !phone || !website) {
        alert('fill in all input fields');
        return
      }

      i += 1;
      const newUser = [{
        id: i,
        name: name,
        username: username,
        email: email,
        website: website,
        phone: phone,
      }];

      setUsers(newUser, response => {
        const news = newUser.reduce((acc, info) => {
          acc[info.id] = info;
          return acc;
        }, {});
        createCardOfUsers(news)

      })
      form.reset();
    }
    const divForms = document.querySelector('.ontainer');
    divForms.classList.add('col-3')
  }

  xhr.send();

  function setUsers(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      cb(response);
    });

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    xhr.addEventListener('error', () => {
      console.log('ERROR')
    });

    xhr.send(JSON.stringify(body));
  }