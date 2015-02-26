function animate(typewriter) {
    sequence = [
        {
            text: "john@makerability:~$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "git clone https://github.com/maker/ability.git\n",
            delayAfter: 500
        },
        {
            text: "Cloning into 'MakerAbility'...\n",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "remote: Total 336 (delta 0), reused 0 (delta 0), pack-reused 28 \nUnpacking objects: 100% (36/36), done.\n",
            instant: true,
            delayAfter: 500
        },
        {
            text: "Checking connectivity... done.\n\n john@makerability:~$ ",
            instant: true,
            delayAfter: 1000
        },
        {
            text: "cd makerability/ \n\n",
            delayAfter: 500
        },
        {
            text: "john@makerability:/makerability$ ",
            instant: true,
            delayAfter: 500
        },
        {
            text: "rails server \n",
            delayAfter: 1200
        },
        {
            text: "=> Booting WEBrick\n=> Rails 4.0.3 application starting in development on http://0.0.0.0:3000",
            instant: true,
            delayAfter: 0
        }
    ];

    typewriter.playSequence(sequence);
}
