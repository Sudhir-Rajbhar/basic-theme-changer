const header = document.querySelector(".header")
const main = document.querySelector(".main")
const body = document.querySelector("body")
const colorBoxes = document.querySelectorAll(".color-switcher")


colorBoxes.forEach((box)=>{
    box.addEventListener("click", function(colorName){
        switch (colorName.target.id) {
            case "red":
                header.style.backgroundColor=colorName.target.id
                main.style.borderColor=colorName.target.id
                body.style.backgroundColor="white"
                break;
            case "blue":
                header.style.backgroundColor=colorName.target.id
                main.style.borderColor=colorName.target.id
                body.style.backgroundColor="white"
                break;
            case "yellow":
                header.style.backgroundColor=colorName.target.id
                header.style.color="black"
                main.style.borderColor=colorName.target.id
                body.style.backgroundColor="white"
                break;
            case "white":
                header.style.backgroundColor=colorName.target.id
                header.style.color="black"
                main.style.borderColor=colorName.target.id
                body.style.backgroundColor="#212121"
                break;
            case "blueviolet":
                header.style.backgroundColor="blueviolet"
                main.style.borderColor="blueviolet"
                body.style.backgroundColor="white"
                break; 
            default:
                header.style.backgroundColor="#212121"
                header.style.color="white"
                main.style.borderColor="#212121"
                body.style.backgroundColor="white"
                break;
        }
    })
} )
