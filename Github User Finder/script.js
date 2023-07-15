// Get DOM elements
const searchBtn = document.getElementById("searchBtn");
const userNameInput = document.getElementById("userName");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("displayUserName");
const userPortfolio = document.getElementById("userPortfolio");
const userRepo = document.getElementById("repo");
const userFollower = document.getElementById("userFollower");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");
const userData = document.querySelector(".userData");

// Add click event listener to search button
searchBtn.addEventListener("click", () => {
  const username = userNameInput.value.trim();
  if (username === "") return;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      // Extract relevant user information from the API response
      const avatarUrl = data.avatar_url;
      const name = data.name;
      const portfolioUrl = data.html_url;
      const repoCount = data.public_repos;
      const followerCount = data.followers;
      const bio = data.bio;
      const location = data.location;

      // Create avatar element
      const avatar = document.createElement("img");
      avatar.setAttribute("src", avatarUrl);
      avatar.classList.add("avatarImg");
      userAvatar.appendChild(avatar);

      // Update the HTML elements with the user information
      userName.innerHTML = `Name: ${name}`;
      userPortfolio.innerHTML = `Portfolio: <a href="${portfolioUrl}" target="_blank">Portfolio</a>`;
      userRepo.innerHTML = `Repositories: ${repoCount}`;
      userFollower.innerHTML = `Followers: ${followerCount}`;
      userBio.innerHTML = `Bio: ${bio || "No Bio Available"}`;
      userLocation.innerHTML = `Location: ${location || "Not available"}`;

      // Make user data visible
      userData.style.opacity = "1";

      // Clear input field
      userNameInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
