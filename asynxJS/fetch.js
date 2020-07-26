fetch('./api/some.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response  
      response.json().then(function (data) {
        console.log(data);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

fetch('users.json').then(function (response) {
  console.log(response.headers.get('Content-Type'));
  console.log(response.headers.get('Date'));

  console.log(response.status);
  console.log(response.statusText);
  console.log(response.type);
  console.log(response.url);
});


fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'foo=bar&lorem=ipsum'
  })
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });