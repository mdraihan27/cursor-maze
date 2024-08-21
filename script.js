const ball = document.createElement('div')

// ball.innerHTML = `
// <div class="w-[100px] h-[100px] bg-black p-[20px] rounded-full" id="">

//  </div>

// `

ball.className = 'w-[30px] h-[30px] bg-black  rounded-full'

// for(let i = 0 ; i<2200 ; i++){
//     const ball$ = ball.cloneNode(true)
//     document.getElementById('ball-container').appendChild(ball$)
//     console.log(i)

//     ball$.addEventListener('mouseover' , function(event) {
//         ball$.style.backgroundColor = 'white';
//     })

//     // ball$.addEventListener('mouseout' , function(event) {
//     //     ball$.style.backgroundColor = 'black';
//     // })
    

// }
const footer = document.getElementById('footer')
const sblocks = document.getElementsByClassName('sblock');
const end = document.getElementById('end')

let count=30
let startButtonCheck = false

const header = document.getElementById('header')
const countdown = document.getElementById('countdown')

const cursor = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="%23FFF" stroke="%23000" stroke-width="2"></circle></svg>') ,auto !important`

console.log(cursor)

const body = document.querySelector('body')
const startButton = document.querySelector('#start-button')
let intervalId = 
startButton.addEventListener('click' , function(event){
    if(startButtonCheck === false){
        body.setAttribute('style' , `cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 30 30"><circle cx="15" cy="15" r="10" fill="%23FFF" stroke="%23000" stroke-width="0"></circle></svg>') 30 30 ,auto !important;`)
    
        startButton.setAttribute('style' , `cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="%23FFF" stroke="%23000" stroke-width="0"></circle></svg>') 24 24 ,auto !important;`)
        footer.setAttribute('style' , `cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="%23FFF" stroke="%23000" stroke-width="0"></circle></svg>') 24 24 ,auto !important;`)
    
    
        startButtonCheck = true 

        event.target.innerText = 'Stop'

        count = 30

        countdown.innerText = count

        intervalId = setInterval(updateTimer, 1000)
        
    }else {
        body.setAttribute('style' , `cursor: auto`)
    
        startButton.setAttribute('style' , `cursor: auto`)
    
        startButtonCheck = false

        event.target.innerText = 'Restart'

        clearInterval(intervalId)

        for(sblock of sblocks){
            sblock.style.removeProperty('color')
        }
    }
})


for(sblock of sblocks){
    sblock.addEventListener('mouseover' , function(event){

            if(startButtonCheck){
                event.target.style.backgroundColor = 'red'
            }
    })
}



function updateTimer(){
    count--

    if(count>10){
        countdown.innerText = count
    }
    else if(count >= 0){
         countdown.style.color = 'red'
        countdown.innerText = count

    }


    
    
    
}

end.addEventListener('mouseover' , function(event){
    if(startButtonCheck===true && count>0){
        clearInterval(intervalId)

        countdown.innerText = 'Congratulations!! You have completed in '+ (30-count)+ ' second(s)'
    }
})
