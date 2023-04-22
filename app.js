const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    for(let i=0; i < sectBtn.length; i++){ 
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.classList.add('active-btn')
            const id = this.dataset.id;
            if(id){
                sections.forEach(section=>{
                    section.classList.remove('active')
                })
                
                const element = document.getElementById(id)
                element.classList.add('active')
            }
        })
    }
}

PageTransition()