let rock = document.querySelector(".img_rock")
let paper = document.querySelector(".img_paper")
let scissor = document.querySelector(".img_scissor")




rock.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    if(computer_choice=="rock"){
        alert("Draw")
    }
    else if(computer_choice=="paper"){
        alert("You Lost")
    }

    else{
        alert("You win")
    }
})

paper.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    if(computer_choice=="paper"){
        alert("Draw")
    }
    else if(computer_choice=="scissor"){
        alert("You Lost")
    }

    else{
        alert("You win")
    }
})

scissor.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    if(computer_choice=="scissor"){
        alert("Draw")
    }
    else if(computer_choice=="rock"){
        alert("You Lost")
    }

    else{
        alert("You win")
    }
})
