  function resp(x) {
    const aboutsec = document.querySelector(".about_content");
  
     window.addEventListener("scroll", () => {
    if (window.pageYOffset < 50 && x.matches){
      aboutsec.style.display = 'none';
    }
    else{
        aboutsec.style.display = 'flex'; 
    }
});

const aboutimg = document.querySelector(".about_img");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 100 && x.matches){
      aboutimg.style.display = 'none';
    }
    else{
        aboutimg.style.display = 'block'; 
    }
});

const featuredcover = document.querySelector(".featured_cover");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 380 && x.matches){
      featuredcover.style.display = 'none';
    }
    else{
        featuredcover.style.display = 'block'; 
    }
});


const featuredimg = document.querySelector(".featured_img-container");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 440 && x.matches){
      featuredimg.style.display = 'none';
    }
    else{
        featuredimg.style.display = 'grid'; 
    }
});



const projectstitle = document.querySelector(".work_title");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 1980 && x.matches){
      projectstitle.style.display = 'none';
    }
    else{
        projectstitle.style.display = 'block'; 
    }
});

const projectsdescription = document.querySelector(".work_description");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 1980 && x.matches){
      projectsdescription.style.display = 'none';
    }
    else{
        projectsdescription.style.display = 'block'; 
    }
});

const projectscontainer = document.querySelector(".work_container");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 1700 && x.matches){
      projectscontainer.style.display = 'none';
    }
    else{
        projectscontainer.style.display = 'grid'; 
    }
});



const contact = document.querySelector(".contact");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 2850 && x.matches){
      contact.style.display = 'none';
    }
    else{
       contact.style.display = 'flex'; 
    }
});


const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 2850 && x.matches){
      footer.style.display = 'none';
    }
    else{
       footer.style.display = 'block'; 
    }
});
  }
    


        

    var x = window.matchMedia("(min-width: 769px)")
    resp(x);

    x.addListener(resp);

