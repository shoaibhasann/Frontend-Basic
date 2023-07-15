// Get the input fields and button
const titleInput = document.getElementById("title");
const imageUrlInput = document.getElementById("imageUrl");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const storyInput = document.getElementById("story");
const submitButton = document.getElementById("submit");

// Add event listener to the submit button
submitButton.addEventListener("click", () => {
  // Get the values from the input fields
  const title = titleInput.value;
  const imageUrl = imageUrlInput.value;
  const author = authorInput.value;
  const category = categoryInput.value;
  const story = storyInput.value;

  // Update the post details section with the user's input
  const postImage = document.getElementById("postImage");
  const postTitle = document.getElementById("postTitle");
  const postStory = document.getElementById("postStory");
  const postCategory = document.getElementById("postCategory");
  const authorName = document.getElementById("authorName");

  // Set the content based on user input
  postImage.innerHTML = `<img src="${imageUrl}" alt="">`;
  postTitle.textContent = title;
  postStory.textContent = story;
  postCategory.textContent = `Category: ${category}`;
  authorName.textContent = `Written By ${author}`;

  // Clear the input fields
  titleInput.value = "";
  imageUrlInput.value = "";
  authorInput.value = "";
  categoryInput.value = "";
  storyInput.value = "";
});
