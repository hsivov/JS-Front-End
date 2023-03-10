function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let count = input.shift();
    let songs = [];

    for (let i = 0; i < count; i++) {
        let [type, name, time] = input[i].split('_');
        songs.push(new Song(type, name, time));
    }

    let songType = input.pop();
    songs
        .filter((song) => song.type === songType)
        .forEach((song) => console.log(song.name));

    if (songType === 'all') {
        songs
            .forEach((song) => console.log(song.name));
    }
}

songs(
    [4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
);
