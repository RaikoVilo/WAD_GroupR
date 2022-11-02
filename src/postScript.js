function addimage(src) {
  var img = new Image();
  img.src = src
  return img
}

let posts

window.onload = function() {

  postlist = document.getElementsByClassName('posts')[0]
  console.log(postlist)

  //fetch('https://api.npoint.io/ddedb538de456ca0b63a')
  fetch('res/json/posts.json')
    .then((response) => response.json())
    .then(json => {
        console.log(json);

        for (var i in json) {

          const post = json[i]
          const postDiv = document.createElement("div");
          postDiv.classList.add('post', `post${i}`)
          const postBodyDiv = document.createElement("div");
          postBodyDiv.classList.add('post-body')
          const postProfileDiv = document.createElement("div");
          postProfileDiv.classList.add('post-profile')
          postBodyDiv.appendChild(postProfileDiv)
          const postProfileImg = document.createElement("img")
          postProfileImg.src = "/res/images/profile_filler.png"
          postProfileImg.style.height = "50px"
          postProfileImg.style.width = "50px"
          postProfileDiv.appendChild(postProfileImg)
          const dateSpan = document.createElement("span")
          const date = document.createTextNode(post.created)
          dateSpan.appendChild(date)
          postProfileDiv.appendChild(dateSpan)
          const titleH1 = document.createElement("h1")
          const titleText = document.createTextNode(post.title)
          titleH1.appendChild(titleText)
          postBodyDiv.appendChild(titleH1)
          const bodyP = document.createElement("p")
          const bodyText = document.createTextNode(post.body)
          bodyP.appendChild(bodyText)
          postBodyDiv.appendChild(bodyP)
          if (post.hasOwnProperty('picture')) {
            const photoImg = document.createElement("img")
            photoImg.src = post.picture
            postBodyDiv.appendChild(photoImg)
          }
          const likeImg = document.createElement("img")
          likeImg.src = "res/images/like.png"
          likeImg.style.height = "auto"
          likeImg.style.width = "30px"
          postBodyDiv.appendChild(likeImg)
          postDiv.appendChild(postBodyDiv)
          postlist.appendChild(postDiv)
        }
    })
    // .catch(err => {
    //   let errDiv = document.createElement("div");
    //   errDiv.className = 'post';
    //   errDiv.innerText = err;
    //   document.body.appendChild(errDiv);
    // })
}
