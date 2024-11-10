// Static data for user cards
const users = [
  {
    name: "Alice Johnson",
    email: "alice@gmail.com",
    age: 25,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    img: "https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png?f=webp",
  },
  {
    name: "Bob Smith",
    email: "bob@yahoo.com",
    age: 35,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyhijBK7m30rmhridXjD2mJ8UDGs_sj_ZZQ&s",
  },
  {
    name: "Cathy Brown",
    email: "cathy@tempmail.com",
    age: 20,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    img: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg",
  },
  {
    name: "James Brown",
    email: "James@tempmail.com",
    age: 28,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s",
  },
  {
    name: "Boniface Judas",
    email: "Bonife@hotmail.com",
    age: 22,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    img: "https://www.creativefabrica.com/wp-content/uploads/2022/03/09/Woman-Icon-Teen-Profile-Graphics-26722130-1.jpg",
  },
];

const fallbackImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s";
function renderCards() {
  const container = document.querySelector(".users-container");
  const template = document.querySelector("#user-template");

  users.forEach((user, index) => {
    const userElement = template.content.cloneNode(true);
    userElement.querySelector(".user-image").src = user.img ?? fallbackImage;
    userElement.querySelector(".user-name").textContent = user.name;
    userElement.querySelector(".user-email").textContent = user.email;
    userElement.querySelector(
      ".user-age"
    ).textContent = `${user.age} years old`;
    userElement.querySelector(".user-info").textContent = user.info;

    const userContainer = userElement.querySelector(".user-container");
    userContainer.dataset.index = index;

    userElement.querySelector(".btn-close").addEventListener("click", () => {
      container.removeChild(
        document.querySelector(`.user-container[data-index="${index}"]`)
      );
    });

    container.appendChild(userElement);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
