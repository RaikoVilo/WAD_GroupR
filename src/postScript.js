window.onload = function() {

  fetch('https://api.npoint.io/ddedb538de456ca0b63a')
  //fetch('res/json/posts.json')
  .then((response) => response.json())
  .then(json => {
      console.log(json);
  })
}
