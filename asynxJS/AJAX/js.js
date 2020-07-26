const container = document.querySelector('.container')


function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);

    cb(response);
  });


  xhr.addEventListener('error', () => {
    console.log('error')
  })


  xhr.send();
}


getPosts((response) => {
  const fragm = document.createDocumentFragment();
  response.forEach(({
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
    },
    phone,
    website,
    company: {
      names,
      catchPhrase,
      bs,
    }
  } = {}) => {
    const div = document.createElement('div');
    div.style.border = '1px solid black'
    div.style.margin = '10px'
    div.style.padding = '10px';
    div.classList.add('asd')
    const title = document.createElement('h5')
    title.textContent = name
    title.style.textAlign = 'center'
    title.classList.add('ds')
    const article = document.createElement('p')
    article.innerHTML = `<strong>Username:</strong> ${username}</br>Email: ${email}</br> <strong>Address:</strong></br>Street: ${street}</br>Suite: ${suite}</br>City: ${city}</br>Zipcode: ${zipcode}</br>Phone: ${phone}</br>website: ${website}</br><strong>Company:</strong></br>Names: ${names}</br>CatchPhrase: ${catchPhrase}</br>bs: ${bs}`;
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary')
    btn.textContent = 'See Profile'
    article.classList.add('d-none', 'sss')


    div.appendChild(title);
    div.appendChild(article);
    div.appendChild(btn)
    fragm.appendChild(div);
  });
  container.appendChild(fragm)
})

container.addEventListener('click', show);

function show(e) {

  if (e.target.classList.contains('btn')) {
    const dNone = e.target.closest('.asd').querySelector('.sss')
    dNone.classList.toggle('d-none');
  }


}