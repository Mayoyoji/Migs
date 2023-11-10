const herBtnLink = document.querySelector('.her-btn');

herBtnLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor (navigating to a new page)

    const messages = [
        "Hi Marhea!",
        "First of all, of course, happy birthday:333!!",
        "I wish you a day filled with joy;DDDD",
        "May this year bring you more BLs to watch, shows, and concerts to attend heheh",
        "Most importantly, I wish you continued good health and stability. Mwahpsss",
        "As you step into your 20s, I hope your decade will be filled with laughter, genuine happiness, and loveee",
        "Moreover, may you uncover more knowledge and gain more wisdommm",
        "You're a lovely person, exuding warmth and kindnessss!!!",
        "Your existence is such a blessing. Thank you for gracing me with your company and friendship for the past yearrr QwQ",
        "I hope you'll have a wonderful day ahead. Please remember to be gentle with yourself. */points a gun at you/*",
        "I love you, a lot of us do, remember that :333",
        "Once again, happy birthday, and cheers to the amazing years you have to come.",
        "Sana hindi ka nainip kaka-click ng OK button, hehe. I love you, wag ka magalit."
    ];

    // Display each message in a sequence
    messages.forEach((message) => {
        alert(message);
    });
});
