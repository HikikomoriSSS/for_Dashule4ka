let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let leftImage = document.getElementById("leftImage");
let rightImage = document.getElementById("rightImage");
let counterText = document.getElementById("counter");
let counter = 1000;
let countdownStarted = false; 


counterText.innerText = "Будешь моей валентинкой?";

leftButton.addEventListener("click", function() {
    leftButton.classList.add("enlarged");
    leftImage.style.display = "block";
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    rightImage.style.display = "none";
    counterText.innerText = `
            Спасибо, я ни капельки не жалею о том, что осмелился познакомиться с тобой! Ты мне очень дорога, и я хочу, чтобы у тебя в дальнейшем было всё замечательно!
            Я хочу, чтобы мы дальше общались, хочу с тобой пойти погулять, посидеть где-нибудь, поболтать о разном. (Хотя я ебаный фрик, я даже не могу в дискорде с тобой нормально пообщаться.) Но я хочу переосилить себя, чтобы у нас складывались нормальные диалоги.
            Спасибо за этот месяц. (Да, я сам в ахуе, что мы общаемся почти месяц, и честно, мне каждый раз стрёмно писать. Я думаю, что я очень назойливый и боюсь из-за этого потерять наше общение.)
            Надеюсь, что в скором времени мы сможем прогуляться, и ты не убежишь от меня из-за моей стеснительности и моей неуверенности в себе.
            Спасибо за уделённое время!! <3 <3 <3
    `;
});

rightButton.addEventListener("click", function() {
    if (!countdownStarted) {
        countdownStarted = true; 
        counterText.innerText = "" + counter; 
    } else {
        counter -= 7;
        counterText.innerText = "" + counter;
    }
    rightImage.style.display = "block";
});
