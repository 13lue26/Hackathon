let database = [
        {
            id: 1,
            title: "Tabun",
            artist: "Yoasobi",
            image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/27/438502707.jpg",
            song: "Tabun.mp3"
        },
        {
            id: 2,
            title: "Glimpse of Us",
            artist: "Joji",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qzoyxP1ZWEggIbJFIgNdULwVTn4ZjGyww&usqp=CAU",
            song: "glimpse.mp3"
        },
        {
            id: 3,
            title: "Tot Musica",
            artist: "Ado",
            image: "https://pic-bstarstatic.akamaized.net/ugc/574a17251c79e30beffaa1652aa22903.jpg",
            song: "tot.mp3"
        },
        {
            id: 4,
            title: "Kaikai Kitan",
            artist: "Eve",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76yFBnz2fh6YO_VNXTphFMeWHYbZQALYzYw&usqp=CAU",
            song: "kaikai-kitan.mp3"
        },
        {
            id: 5,
            title: "Orange",
            artist: "Seven oops",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2yvrYtkPAKc0_B8HYvws3vHKKodvFVv1ew&usqp=CAU",
            song: "orange.mp3"
        },
        {
            id: 6,
            title: "Gurenge",
            artist: "LiSA",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r3ruJdKbCXf5KLOE3jg3DPfSKkfaMxs8Nw&usqp=CAU",
            song: "Gurenge.mp3"
        },
        {
            id: 7,
            title: "Suzume",
            artist: "Nanoka Hara",
            image: "suzume.jpg",
            song: "suzume.mp3"
        },
        {
            id: 8,
            title: "Blue bird",
            artist: "Ikimono gakari",
            image: "naruto.jpg",
            song: "bluebird.mp3"
        },
        {
            id: 9,
            title: "ingat edit",
            artist: "Yoasobi",
            image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/27/438502707.jpg",
            song: "tot.mp3"
        },
        {
            id: 10,
            title: "ingat edit",
            artist: "Joji",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qzoyxP1ZWEggIbJFIgNdULwVTn4ZjGyww&usqp=CAU",
            song: "glimpse.mp3"
        },
    ]


// TEMPLATE OBJ - isi yg kalian mau add songnya ya terus copy ke database
// {
//     id: ,
//     title: "",
//     artist: "",
//     image: "",
//     song: ""
// }
let indexPlaylist = 0


let check = `play`;

function renderData(){
    let data = ``
    for (let i = 0; i < database.length; i++) {
        let listLagu = database[i];
        data += `
        <div class="card">
        <div class="profile">
        <img src="${listLagu.image}" onclick="playPause(${i})" id="img-${i}">
        <span class="penyanyi" id="penyanyi-${i}">${listLagu.artist}</span>
        <span class="judul" id="judul-${i}">${listLagu.title}</span>
        <audio src="${listLagu.song}" id ="song-${i}"></audio>
        <button id="add-btn" onclick="addPlaylist(${i})">add</button>
        </div>
    </div>`
            }
    document.querySelector(".cards").innerHTML = data;
    
 }

 renderData()



 function playPause(index){
    let audio = document.getElementById(`song-${index}`)
     if(check === `play`){
        audio.play();
        check = `pause`
    }
    else{
        audio.pause();
        check = `play`
    }
 }


 let playlist = []

function addPlaylist(index){
    let data = database[index]
    playlist.push(data)
    displayPlaylist()

}

function displayPlaylist(){
    let data = ""
    for (let i = 0; i < playlist.length; i++) {
        let listLagu = playlist[i];
        data +=  `
        <div class="card">
        <div class="profile">
        <img src="${listLagu.image}" onclick="playPause(${i})" id="img-${i}">
        <span class="penyanyi" id="penyanyi-${i}">${listLagu.artist}</span>
        <span class="judul" id="judul-${i}">${listLagu.title}</span>
        <audio src="${listLagu.song}" id ="song-${i}"></audio>
        <button id="add-btn" onclick="addPlaylist(${i})">add</button>
        </div>
    </div>`
    }
    document.querySelector(".cards").innerHTML = data;
}

function playNextSong(index) {

    let audio = document.getElementById(`song-${index+1}`)
    indexPlaylist = index

    audio.src=playlist[index].song;
    audio.load();
    console.log(index);
    if(index === playlist.length){
        index = 0
    }
}
