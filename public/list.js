const deleteButtons = querySelectorAll(".delete-btn");

deleteButtons.addEventListener("click", (e) => {
    const article = e.target.parentElement;//select the whole section of html that is associated with that button 
    const author = article.querySelector(".post-title").text_content;
    const saying = article.querySelector(".post-message").text_content;
    const sendData = {saying: saying, author: author};
    fetch("/delete", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendData,
      })
        .then(location.reload())
        .catch(err => console.error(err));
});
