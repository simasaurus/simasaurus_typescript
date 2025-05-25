window.onload = function () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let clickCount = 0;
    let LikesLemons = false;

    make_base();

    function make_base() {
        const base_image = new Image();
        base_image.src = 'images/Simmy.png';
        base_image.onload = function () {
            context.drawImage(base_image, 100, 0);
        };
    }

    canvas.addEventListener('click', function () {
        clickCount++;
        switch (clickCount) {
            case 1:
                window.alert("Hello! My name is Simmy! I am the mascot for Simasaurus! Right now this website does not do a whole bunch. Expect way more in the future!");
                break;
            case 2:
                window.alert("You know, I can't wait for this site to be all up and working!");
                break;
            case 3:
                window.alert("Hey, if you do want something that does work, how about you try LemmBox! you can find that over at lemmbox.github.io");
                break;
            case 4:
                window.alert("I use it to make all of my music. It honestly works quite well!");
                break;
            case 5:
                window.alert("I have a question for you.");
                window.alert("I can only talk to you through the browser, so you will have to work with me on this as I am limited in what I can do.");
                window.alert("I sadly can't ask yes or no, so just click 'okay' for yes and 'cancel' for no.");
                const answer = window.confirm("Do you like lemons?");
                if (answer) {
                    LikesLemons = true;
                    window.alert("Nice! You know, this place was made by a lemon. Kind of interesting if you ask me.");
                    window.alert("I have another question for you.")
                    break;
                } else {
                    window.alert("Interesting. I guess I have another question for you then.");
                    break;
                }
            case 6:
                const answer2 = window.confirm("Do you like Limes?");
                if (LikesLemons && answer2) {
                window.alert("so, you like both?");
                    window.alert("I see...");
                } else {
                    window.alert("Anyways... it is getting pretty late so I am going to go for a little bit.");
                }
                break;
            case 26:
                window.alert("If you are wanting me to talk more, just refresh the page. The dev was too lazy to add any local storage that records how many times you have chatted with me.");
                break;
        }

        console.log(clickCount);
    });
};
