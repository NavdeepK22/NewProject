let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

// download file
const download = document.getElementById("fileRequest");

download.addEventListener('click', request);

function request() {
    window.location = 'resume.pdf';
}

$("#button").click(function() {
    $('.transform').toggleClass('transform-active');
  });

  AOS.init({
    duration: 1200,
  })