console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const secondPost = document.createElement("article");
secondPost.classList.add("post");

const secondPostContent = document.createElement("p");
secondPostContent.classList.add("post__content");
secondPostContent.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const secondPostFooter = document.createElement("footer");
secondPostFooter.classList.add("post__footer");

const secondPostSpan = document.createElement("span");
secondPostSpan.classList.add("post__username");
secondPostSpan.textContent = "@username";

const secondPostButton = document.createElement("button");
secondPostButton.classList.add("post__button");
secondPostButton.textContent = "♥ Like";

secondPostButton.addEventListener("click", handleLikeButtonClick);

secondPostFooter.append(secondPostSpan, secondPostButton);
secondPost.append(secondPostContent, secondPostFooter);
document.body.append(secondPost);
