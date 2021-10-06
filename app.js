document.addEventListener("DOMContentLoaded", ()=>{
    let letter = document.querySelectorAll('.letter');

    anime({
        targets: letter,
        translateY: [-50,0],
        delay: (el, i) => 300 + 60 * i,
        opacity: [0,1] 
    })

    anime({
        targets:'#hamburger',
        translateX: [-30,0],
        opacity: [0,1],
        delay: 1000
    })

    anime({
        targets: '#profile',
        translateX: [30,0],
        opacity: [0,1],
        delay: 1000
    })

    anime({
        targets: ['p', 'h2'],
        translateY: [-20,0],
        opacity: [0,1],
        easing: 'easeOutExpo',
        delay:1000
    })

    anime({
        targets:'.brand',
        translateY: [
            {value:20, duration:1000},
            {value:0, duration:1000}
        ],
        rotate: [
            {value:-10, delay:2000,duration:500},
            {value:0}
        ],
        scale:[
            {value:1.2, delay:3000}
        ],
        opacity: [0,1],
        delay:1000
    })

    anime({
        targets:'#see-more',
        opacity: [0,1],
        translateY: [-100,0],
        rotate: '1turn',
        duration:1000,
        delay:1300
    })

    letter.forEach((n) => {
        n.addEventListener('mouseover',(e)=>{
            anime({
                targets: n,
                scale: 1.2
            })
        })
        n.addEventListener('mouseleave',(e)=>{
            anime({
                targets:n,
                scale:1
            })
        })
    })

    let seeMore = document.getElementById('see-more');
    let content = document.getElementById('content')

    seeMore.addEventListener('click',(e)=>{

        if (content.style.display = 'none'){
            content.style.display = 'block'
        } else {
            content.style.display = 'none'
        }
        anime({
            targets: e.target,
            rotate: [0, '1turn'],
            translateY: [100, 0],
            duration: [2000,1000]
        }),
        anime({
            targets: '#content',
            translateY: [200,0],
            delay: 100,
            duration: 1000
        })


    })
})