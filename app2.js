/*
Om de ska säga/tänka samma saker kan jag ha en gemensam class och därmed const.
Svårast att klura ut functions och looparna. 
Function = separat
addEvent = separat
loop = i/under addEvent, alltså ex forEach(func 'think') ???
   - vill kunna köra shuffle/random i loopen

   <!--<div class="girl1">
                <p >"IMG1 OF GIRL1"</p>
            </div>
            <div class="talkBubble-one">
                <p>TALK</p>
            </div>
            <div class="girl2">
                <p >"IMG1 OF GIRL2"</p>
            </div>
            <div class="talkBubble-two">
                <p>TALK</p>-->
*/

// Variables, objects?, array
const girl1 = document.querySelector(".girl1");
const girl2 = document.querySelector(".girl2");

thoughts = [
    'Did she look at me?',
    'Omg she´s so pretty',
    'I wish I could talk to her'
];

lines = [
    '-I really want a gf -OMG me too! *crickets*', 

]
// Functions
function think() {

}

function talk() {

}
// Call on Functions
girl1.addEventListener("mouseover", () => {
    think();
});

girl1.addEventListener("click", () => {
    talk();
});