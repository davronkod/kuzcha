
const openEye = document.querySelector(".bi-eye");
const closeEye = document.querySelector(".bi-eye-slash");
const passwordEl = document.querySelector(".password");

closeEye.addEventListener("click", () => {
  openEye.style.display = "block";
  closeEye.style.display = "none";
  passwordEl.setAttribute("type", "text");
});

openEye.addEventListener("click", () => {
  closeEye.style.display = "block";
  openEye.style.display = "none";
  passwordEl.setAttribute("type", "password");
});