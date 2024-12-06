let counter = 0;
let counterInterval = null;
const color = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF", "#33FFA8", "#57FF33", "#5733FF", "#FF8C33", "#8C33FF", "#33FF8C", "#FF3333",
    "#33FF33", "#3333FF", "#FF33F6", "#33F6FF", "#F633FF", "#33FFFF", "#FFFF33", "#FF33AB", "#33ABFF", "#ABFF33", "#FF8333", "#8333FF", 
    "#33FF83", "#8333AB", "#33AB33", "#AB3333", "#33FF66", "#66FF33", "#33FFB8", "#FFB833", "#B833FF", "#33FFB8", "#33FF99", "#99FF33",
    "#9933FF", "#33FF99", "#33FFBB", "#BBFF33", "#33FFAA", "#AAFF33", "#33FFDD", "#DDFF33", "#33FFCC", "#CCFF33", "#33FFEE", "#EEFF33",
    "#33FFFF", "#33FFDD", "#FFDD33", "#33FFEE", "#33FF77", "#77FF33", "#33FFDD", "#FFDD33", "#33FFBB", "#BBFF33", "#33FF88", "#88FF33",
    "#33FF99", "#99FF33", "#FF3399", "#3399FF", "#99FF33", "#339933", "#FF33BB", "#33BBFF", "#BBFF33", "#3333FF", "#FF33F6", "#33F6FF",
    "#F633FF", "#33FFFF", "#FFFF33", "#FF33AB", "#33ABFF", "#ABFF33", "#FF8333", "#8333FF", "#33FF83", "#8333AB", "#33AB33", "#AB3333",
    "#33FF66", "#66FF33", "#33FFB8", "#FFB833", "#B833FF", "#33FFB8", "#33FF99", "#99FF33", "#9933FF", "#33FF99", "#33FFBB", "#BBFF33",
    "#33FFAA", "#AAFF33", "#33FFDD", "#DDFF33", "#33FFCC", "#CCFF33", "#33FFEE", "#EEFF33", "#33FFFF", "#33FFDD", "#FFDD33", "#33FFEE",
    "#33FF77", "#77FF33", "#33FFDD", "#FFDD33", "#33FFBB", "#BBFF33", "#33FF88", "#88FF33", "#33FF99", "#99FF33", "#FF3399", "#3399FF",
    "#99FF33", "#339933", "#FF33BB", "#33BBFF", "#BBFF33", "#FF33CC", "#33CCFF", "#CCFF33", "#FF3399", "#3399FF", "#99FF33", "#339933",
    "#FF33BB", "#33BBFF", "#BBFF33", "#3333FF", "#FF33F6", "#33F6FF", "#F633FF", "#33FFFF", "#FFFF33", "#FF33AB", "#33ABFF", "#ABFF33",
    "#FF8333", "#8333FF", "#33FF83", "#8333AB", "#33AB33", "#AB3333"];

    const emoji =["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😜", "🤪", 
        "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "😴", "🤤", "😷", "🤒", 
        "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", 
        "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", 
        "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", 
        "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", 
        "💨", "🕳️", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", 
        "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👣", "👂", "🦻", "👃", "🧠", 
        "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄"];

const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const reset = document.getElementById("reset");
const colors = document.getElementById("color-code");
const counterText = document.getElementById("counter");
const emojiContainer = document.getElementById("Emoji");

function updateCounter(){
    counterText.textContent = counter;
}

incBtn.addEventListener("click",() =>{
    counter++;
    updateCounter();
});

decBtn.addEventListener("click",() =>{
    counter--;
    updateCounter();
});

reset.addEventListener("click",() =>{
    counter=0;
    updateCounter();

    if(counterInterval){
        clearInterval(counterInterval);
        counterInterval=null;
    }
});

start.addEventListener("click", () =>{
    if(counterInterval){
        clearInterval(counterInterval);
    }

    counterInterval=setInterval(() =>{
        if(counter>0){
            counter--;
        }else if(counter<0){
            counter++;
        }else{
            clearInterval(counterInterval);
            counterInterval=null;
        }
        const randomIndex=Math.floor(Math.random()*color.length);
        const selectedColor = color[randomIndex];

        const emojiIndex=Math.floor(Math.random()*emoji.length);
        const selectedemoji = emoji[emojiIndex];

        document.body.style.backgroundColor=selectedColor;
        colors.textContent=selectedColor;
        emojiContainer.textContent = selectedemoji;
        updateCounter();

    },1000);
});

