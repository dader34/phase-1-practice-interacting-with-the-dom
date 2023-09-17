// add like counter that increments every second
//add plus and minus like buttons
//add heart button that adds a note under the counter saying howmany times that number has been liked
//add comment functionality
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
pause.textContent = "pause"
const commentSubmit = document.querySelector("#comment-form")
const timer = document.querySelector("#counter")
timer.textContent = "0"
let likeCounter = 0

let counter = setInterval(() => {
    timer.textContent = parseInt(timer.textContent) + 1
}, 1000);

minus.addEventListener("click",()=>{
    timer.textContent = parseInt(timer.textContent) - 1
})
plus.addEventListener("click",()=>{
    timer.textContent = parseInt(timer.textContent) + 1
})
heart.addEventListener("click",()=>{
    const parentList = document.querySelector(".likes")
    if(parentList.querySelector(`li[data-num='${parseInt(timer.textContent)}']`)){
        const list = parentList.querySelector(`li[data-num='${parseInt(timer.textContent)}'`)
        likeCounter++
        list.textContent = `${list.getAttribute("data-num")} has been liked ${likeCounter} times`
    }else{
        const list = document.createElement("li")
        likeCounter = 1
        list.setAttribute("data-num",timer.textContent)
        list.textContent = `${list.getAttribute("data-num")} has been liked ${likeCounter} time`
        parentList.append(list)
    }
    

})
pause.addEventListener("click",()=>{
    
    if(pause.textContent == "pause"){
        clearInterval(counter)
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.textContent = "resume"
    }else{
        counter = setInterval(() => {
            timer.textContent = parseInt(timer.textContent) + 1
        }, 1000);
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pause.textContent = "pause"
    }
    
})

commentSubmit.addEventListener("submit",(e)=>{
    e.preventDefault()
    const commentDiv = document.querySelector("#list")
    const newComment = document.createElement("p")
    newComment.textContent = e.target.comment.value 
    commentDiv.append(newComment)
})