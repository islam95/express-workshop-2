const send = document.querySelector("#sendPost");
send.addEventListener("click", function(e) {
  e.preventDefault();
  var url = "http://localhost:3000/posts";

  var data = {};
  data.title = document.querySelector("#title").value;
  data.summary = document.querySelector("#summary").value;
  data.content = document.querySelector("#contents").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function() {
    var posts = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      console.table(posts);
    } else {
      console.error(posts);
    }
  };
  xhr.send(json);
  document.querySelector("#title").value = "";
  document.querySelector("#summary").value = "";
  document.querySelector("#contents").value = "";
  document.querySelector("#success").innerHTML = "New post is created!"
});
