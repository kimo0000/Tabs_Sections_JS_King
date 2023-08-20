const content = document.querySelector('.content');
const btns = document.querySelectorAll('button');
const sections = document.querySelectorAll(".tab_content p");

// Methode 1: 
content.addEventListener('click', (e) => {
    const id = e.target.id;
    // const dataset = e.target.dataset.step;
    // console.log(id);

   btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
       addActive();
       e.target.classList.add("active");
    })
   })

   if(id) {
    //  console.log(('=> ' + id));
     sectionTab(id);
   }
})



// Methode 2: 
// btns.forEach(btn => {
//     btn.addEventListener("click", (e) => {

//       addActive()

//         e.target.classList.add('active');

//          sectionTab(e.target.id)
//     })
// })

function addActive() {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
}

function sectionTab(id) {
    sections.forEach((section) => {
      if (id === section.dataset.step) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
}