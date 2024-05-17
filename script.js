

function get_computer_choices(){
    objects = ['rock', 'paper','scissor']
    return objects[Math.floor(Math.random() * objects.length)]
}


var computer_choice = get_computer_choices()

function rock() {
    if (computer_choice == 'rock') {
        alert("Draw")
    }
    else if (computer_choice == 'paper') {
        alert("You lose!!")
    }
    else {
        alert("you win!!")
    }
}

function paper() {
    if (computer_choice == 'paper') {
        alert("Draw")
    }
    else if (computer_choice == 'scissor') {
        alert("You lose!!")
    }
    else {
        alert("you win!!")
    }
}
function scissor() {
    if (computer_choice == 'scissor') {
        alert("Draw")
    }
    else if (computer_choice == 'rock') {
        alert("You lose!!")
    }
    else {
        alert("you win!!")
    }
}