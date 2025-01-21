const progress=document.getElementById("progress")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const circles=document.querySelectorAll(".circle")

 let currentActive=1

 // next btn add click event listener
 next.addEventListener("click",()=>{
  currentActive++
  if(currentActive>circles.length){
    currentActive=circles.length
  }
  update()
})

// prev btn add click event listener
prev.addEventListener("click",()=>{
    currentActive--
    if(currentActive<1){
      currentActive=1
    }
    update()
})

function update(){
    circles.forEach((circle,index)=>{
      if(index<currentActive){
        circle.classList.add("active")
      }else{
        circle.classList.remove("active")
      }  
    })

    const active=document.querySelectorAll(".active")

    progress.style.width=(active.length-1)/(circles.length-1)*100+"%"
    
    // judge prev or next btn should be disabled
    if(currentActive===1){
        prev.disabled=true
    }else if(currentActive===circles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}