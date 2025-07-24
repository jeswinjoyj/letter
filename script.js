


function checkPassword() {
    const input = document.getElementById("user-password").value;
    if (input === "LunDanMass") {
        document.getElementById("container").style.display = "flex";
        document.getElementById("password").style.opacity = 0;

        const scrambleElement = document.getElementById("h2");
        const scrambleElement1 = document.getElementById("p1");
        const scrambleElement2 = document.getElementById("p2");
        const scrambleElement3 = document.getElementById("p3");
        const scrambleElement4 = document.getElementById("p4");
        const img = document.getElementById("img");
        
        setTimeout(() => {
            scrambleElement.style.opacity = 1;
        }, 1000);

        setTimeout(() => {
            scrambleElement1.style.opacity = 1;
        }, 3000);

        setTimeout(() => {
            scrambleElement2.style.opacity = 1;
        }, 7000);

        setTimeout(() => {
            scrambleElement3.style.opacity = 1;
        }, 13000);

        setTimeout(() => {
            scrambleElement4.style.opacity = 1;
            img.style.opacity = 1;
        }, 16000);
    } else {
        alert("Incorrect password. Try again.");
        document.getElementById("user-password").value = "";
    }
}


const h2 = "Aha!! എന്താരു അനുസരണ?!!";
const p1 = "വേഷമിച്ചിരിക്കണോ അതോ ആ നാറി പോയല്ലോ എന്ന് പറഞ്ഞു ചിരിക്കണോ എന്ന് അറിയില്ല😂(just kidding ee), but inte panic attack um menakatta depression um okke mattan sahayicha reshma ചേച്ചിക്കും Arjun ചേട്ടനും( EHHH?!!!, cringe alle) venda, Lundanum Massinum oru gift 😊";
const p2 = "Inniyum വേഷമിച്ചിരിക്കണേങ്കിൽ ആ ഗ്ലാസിൽ ഒരു large ozhich randu flowers um pidich oru fujifilm photo edukku. Color avatee!!";
const p3 = "Ennna sheri gooyyss, എപ്പോഴെങ്കിലും kanaam😉";
const p4 = "Variety Cringe Item: brought you by Jeswin Joy";


