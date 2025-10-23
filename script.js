// Data Lagu
const favoriteSongs = [
    {
        title: "Everyting u are",
        artist: "Hindia",
        reason:"tentang cinta tanpa syarat dan penerimaan diri apa ada nya.",
        imageUrl: "hindia.jpg  ",
        spotifyUrl: "https://open.spotify.com/track/5WOSNVChcadlsCRiqXE45K?si=be99d147c4d6450f" 
    },
    {
        title: "Lantas",
        artist: "Juicy luicy",
        reason: "tentang cinta bertepuk sebelah tangan, di mana seseorang diam-diam menyukai orang yang sudah memiliki pasangan",
        imageUrl: "juicyluicy.jpg",
        spotifyUrl: "https://open.spotify.com/track/1ZPVEo8RfmrEz8YAD5n6rW?si=a2f18b2a18a54b0b"
    },
    {
        title: "Kita usahakan rumah itu",
        artist: "Sal priadi",
        reason: "yang bermakna membangun rumah tangga yang harmonis dan kuat melalui komitmen bersama, bukan hanya sekadar bangunan fisik.",
        imageUrl: "salpriadi.jpg",
        spotifyUrl: "https://open.spotify.com/track/1x9jnpPOAMSrr7DuIG5jMl?si=885aceaa04fa4fee"
    },
    {
        title: "Bertaut",
        artist: "Nadin amizah",
        reason: "tentang ikatan batin yang kuat antara seorang anak dan ibunya, yang digambarkan melalui ungkapan rasa syukur dan pengakuan akan peran besar ibu dalam hidup sang anak.",
        imageUrl: "Nadinamizah.jpg", 
        spotifyUrl: "https://open.spotify.com/track/630DpnzdfjdVqv2yLfPbAX?si=7d36d9db117744bb"
    },
    {
        title: "Diri",
        artist: "Tulus",
        reason: "tentang penerimaan diri, cinta diri, dan menghargai diri sendiri.",
        imageUrl: "tulus.jpg", 
        spotifyUrl: "https://open.spotify.com/track/2qgjqbi96IAOBzZFC6H57U?si=24537529119c43ec"
    },
    {
        title: "Tarot",
        artist: "Feast",
        reason: "tentang bertahan dalam hubungan yang rumit dan penuh luka, di mana cinta masih ada namun diwarnai kebingungan dan stagnasi.",
        imageUrl: "feast.jpg", 
        spotifyUrl: "https://open.spotify.com/track/4XHijJfABTtUCW3Bp6KFvr?si=d451750d135a4c92"
    },
    {
        title: "Fix you",
        artist: "Clodplay",
        reason: "tentang dukungan, harapan, dan cinta sejati di tengah kesulitan hidup.",
        imageUrl: "fixyou.png", 
        spotifyUrl: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=d086cf6958654206"
    },
    {
        title: "33x",
        artist: "Perunggu",
        reason: "tentang perjuangan, motivasi, dan spiritualitas yang terinspirasi dari jumlah wirid harian, dengan pesan untuk tidak terburu-buru dalam hidup sambil tetap mengingat Tuhan dan berserah diri.",
        imageUrl: "33x.jpg", 
        spotifyUrl: "https://open.spotify.com/track/0I3I9hgBRat6HR5Gzy26jx?si=756bfe043172431b"
    },

];

function createMusicCard(song) { 
    const card = document.createElement('div');
    card.classList.add('music-card');


    card.innerHTML = `
        <div class="card-header">
            <a href="${song.spotifyUrl}" target="_blank">
                <img src="${song.imageUrl}" alt="Cover ${song.title}" class="album-cover">
            </a>
            <div class="song-info">
                <a href="${song.spotifyUrl}" target="_blank" class="song-title">${song.title}</a>
                <p class="song-artist">${song.artist}</p>
            </div>
        </div>
        <div class="card-body">
            <p class="alasan-label">Alasan Suka</p>
            <p class="alasan-suka">${song.reason}</p>
        </div>
    `;
    
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('music-grid');
    
    favoriteSongs.forEach(song => {
        const cardElement = createMusicCard(song);
        gridContainer.appendChild(cardElement);
    });
});