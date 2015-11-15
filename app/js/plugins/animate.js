function animate(typewriter) {
    sequence = [
        {
            text: "Checking connectivity... done.\n\n john@makerability:~$ ",
            instant: true,
            delayAfter: 800
        },
        {
            text: "cd makerability/ \n\n",
            delayAfter: 300
        },
        {
            text: "john@makerability:~$ /makerability ",
            instant: true,
            delayAfter: 300
        },
        {
            text: "rails server \n",
            delayAfter: 1000
        },
        {
            text: "=> Booting WEBrick\n=> Rails 4.0.3 application starting in development on http://0.0.0.0:3000",
            instant: true,
            delayAfter: 0
        }
    ];

    typewriter.playSequence(sequence);
}
