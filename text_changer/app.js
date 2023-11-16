const input = document.querySelector(".input");

const resetInput = () => {
  input.value = "";
};

const upperCase = () => {
  input.style.textTransform = "uppercase";
};

const lowerCase = () => {
  input.style.textTransform = "lowercase";
};

const italicCase = () => {
  input.style.fontStyle = "italic";
};

const boldCase = () => {
  input.style.fontWeight = "800";
};
