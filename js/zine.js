//
//
//

//test buttons work
$("#next-btn").click(function() {
    console.log("next button")
});

$("#prev-btn").click(function() {
    console.log("previous button")
});

//JS done by following along video by Coding Star on Youtube

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {

}

function closeBook() {

}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1
                break;
            case 2: 
                paper2.classList.add("flipped");
                break;
            case 3: 
                paper3.classList.add("flipped");
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        
        }
        currentLocation++;
    }

}

function goPrevPage () {

}