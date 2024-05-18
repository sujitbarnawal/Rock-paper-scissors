let rock = document.querySelector(".img_rock")
let paper = document.querySelector(".img_paper")
let scissor = document.querySelector(".img_scissor")
let footer = document.querySelector(".footer")



rock.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    if (computer_choice == "rock") {
        footer.innerText = "Game is draw"
    }
    else if (computer_choice == "paper") {
        footer.innerText = "Paper beats Rock. You lost"
    }

    else {
        footer.innerText = "Rock beats Scissor. You won"
    }
})

paper.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    console.log(computer_choice)
    if (computer_choice == "paper") {
        footer.innerText = "Game is draw"
    }
    else if (computer_choice == "scissor") {
        footer.innerText="Scissor beats paper. You lost"
    }

    else {
        footer.innerText="Paper beats Rock. You won"  }
})

scissor.addEventListener("click", () => {
    let arr = ["rock", "paper", "scissor"]
    let a = Math.floor(Math.random() * 3)
    let computer_choice = arr[a]
    if (computer_choice == "scissor") {
        footer.innerText = "Game is draw"
    }
    else if (computer_choice == "rock") {
        footer.innerText="Rock beats Scissor. You lost"
    }

    else {
        footer.innerText="Scissor beats paper. You won"
    }
})
