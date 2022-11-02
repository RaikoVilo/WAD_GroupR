window.onload = function() {

  fetch('https://api.npoint.io/9ef1fe73432616acbbcb')
  //fetch('res/json/posts.json')
  .then((response) => response.json())
  .then(json => {
      console.log(json);
  })
}
