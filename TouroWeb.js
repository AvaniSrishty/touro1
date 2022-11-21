user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!" ;
  
function logout()  {
    localStorage.removeItem("user_name");
        window.location = "index.html";
    }

const btnScrollToTop = document.querySelector("#top");

btnScrollToTop.addEventListener("click", function () {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"
    });
});

const shareBtn = document.querySelector('.share-btn');
const shareOption = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOption.classList.toggle('active');
})
  
const whatsappBtn = document.querySelector(".whatsapp-btn");
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const instagramBtn = document.querySelector(".instagram-btn");


