let magicBall = document.createElement('div');
document.body.appendChild(magicBall);
magicBall.style.width = '250px';
magicBall.style.height = '250px';
magicBall.style.borderRadius = '50%';
magicBall.style.boxShadow = '0 0 5px 10px rgba(218, 182, 248, 0.3)';
magicBall.style.backgroundImage = "url('ball-background.jpg')";
magicBall.style.backgroundSize = 'cover';
magicBall.style.textAlign = 'center';
magicBall.style.position = 'absolute';
magicBall.style.top = '0';
magicBall.style.left = '50%';
magicBall.style.transform = 'translate(-50%, -50%)';
magicBall.style.display = 'flex';
magicBall.style.justifyContent = 'center';
magicBall.style.alignItems = 'center';
magicBall.style.fontSize = '20px';
magicBall.style.color = 'white';
magicBall.style.transition = 'top 2s ease-in-out'; 

let question = document.createElement('div');
question.innerText = 'Чи любите Ви пиво?';
document.body.appendChild(question);
question.style.backgroundColor = 'rgba(227, 197, 247, 0.5)';
question.style.borderRadius = '70px';
question.style.maxWidth = '300px';
question.style.textAlign = 'center';
question.style.margin = '270px auto';
question.style.padding = '5px';
question.style.fontSize = '25px';
question.style.color = 'purple';

document.body.style.backgroundImage = "url('space-background.jpg')";
document.body.style.backgroundSize = "cover";

function getRandomAnswer() {
    const random = Math.random();
    if (random < 0.5) {
        return 'Так';
    } else {
        return 'Ні';
    }
}
magicBall.addEventListener('click', () => {
    const answer = getRandomAnswer();

    magicBall.style.top = '50vh';

setTimeout(() => {
    let answerElement = document.createElement('div');
    answerElement.innerText = answer;
    answerElement.style.fontSize = '24px';

    magicBall.innerHTML = '';
    magicBall.appendChild(answerElement);
}, 2000);
});
