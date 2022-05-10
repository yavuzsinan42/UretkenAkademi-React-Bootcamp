let parent = document.querySelector(".container");
let rowDiv = document.createElement("div");
let colDiv = document.createElement("div");
let image = document.createElement("img");

const tada = (e) => {
  const clickedImage = e.target;

  clickedImage.classList.add("animated");
  clickedImage.classList.add("tada");
  setTimeout(() => {
    clickedImage.classList.remove("animated");
    clickedImage.classList.remove("tada");
  }, 1000);
};
parent.addEventListener("click", tada);

const getImage = () => {
  let random = 0;
  for (let i = 0; i < 5; i++) {
    rowDiv = document.createElement("div");
    rowDiv.className = "row mt-3";
    parent.appendChild(rowDiv);
    for (let k = 0; k < 3; k++) {
      random += 3;
      colDiv = document.createElement("div");
      colDiv.className = "col-md-4";
      image = document.createElement("img");
      image.className = "img-thumbnail";
      image.src = `https://source.unsplash.com/random/300x300?sig=${random}`;
      colDiv.appendChild(image);
      rowDiv.appendChild(colDiv);
    }
  }
};
getImage();
