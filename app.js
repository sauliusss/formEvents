const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("click", function (e) {
  const usernameInput = document.querySelectorAll("input")[0];
  const tweetInput = document.querySelectorAll("input")[1];
  console.log(usernameInput.value, tweetInput.value);
  e.preventDefault();
});
