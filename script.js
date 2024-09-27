// script.js
const typewriterText = document.getElementById('typewriter-text');
const text = "Happy Birthday ma'am!!  We just wanted to say how much we all appreciate you. You're not just an amazing teacher, you're one of the coolest and sweetest people we know. You always make learning so much fun, and we feel really lucky to have you guiding us. Thank you for always having our backs and believing in us. We hope you have the best birthday ever, filled with lots of happiness and love!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriterText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();