let database = [
    {
        id: 1,
        title: "Tabun",
        artist: "Yoasobi",
        image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/27/438502707.jpg",
        song: "tot.mp3"
    },
    {
        id: 2,
        title: "Glimpse of Us",
        artist: "Joji",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_qzoyxP1ZWEggIbJFIgNdULwVTn4ZjGyww&usqp=CAU",
        song: "glimpse.mp3"
    }

]

// TEMPLATE OBJ - isi yg kalian mau add songnya ya terus copy ke database
// {
//     id: ,
//     title: "",
//     artist: "",
//     image: "",
//     song: ""
// }

let playlist = [

]


let check = `play`;

function addHtml(){
    let data = ``
    for (let i = 0; i < database.length; i++) {
        let listLagu = database[i];
        data += `<div class="card">
        <div class="profile">
            <img src="${listLagu.image}" onclick="playPause(${i})">
            <span class="penyanyi">${listLagu.artist}</span>
            <span class="judul">${listLagu.title}</span>
            <audio src="${listLagu.song}" id ="song-${i}"></audio>
            <!-- <button id='add-btn' onclick='addPlaylist()'>add</button> -->
        </div>
    </div>`
    }
    document.querySelector(".cards").innerHTML = data
 }

 addHtml()

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

 playPause(index)

//  function addPlaylist(){
//     for (let i = 0; i < database.length; i++) {
//         let perList = database[i];
//         playlist.push(perList)
        
//     }
//  }

//  addPlaylist()

