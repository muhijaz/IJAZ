// Data Lagu
const favoriteSongs = [
    {
        title: "Everyting u are",
        artist: "Hindia",
        reason:"tentang cinta tanpa syarat dan penerimaan diri apa ada nya.",
        imageUrl: "hindia.jpg  ", // URL Gambar Cover Hindia
        spotifyUrl: "https://open.spotify.com/track/5WOSNVChcadlsCRiqXE45K?si=be99d147c4d6450f" // Ganti dengan URL Spotify lagu ini
    },
    {
        title: "Lantas",
        artist: "Juicy luicy",
        reason: "tentang cinta bertepuk sebelah tangan, di mana seseorang diam-diam menyukai orang yang sudah memiliki pasangan",
        imageUrl: "juicy luicy.jpg", // URL Gambar Cover Juicy luicy
        spotifyUrl: "https://open.spotify.com/track/1ZPVEo8RfmrEz8YAD5n6rW?si=a2f18b2a18a54b0b"
    },
    {
        title: "Kita usahakan rumah itu",
        artist: "Sal priadi",
        reason: "yang bermakna membangun rumah tangga yang harmonis dan kuat melalui komitmen bersama, bukan hanya sekadar bangunan fisik.",
        imageUrl: "sal priadi.jpg", // URL Gambar Cover sal priadi
        spotifyUrl: "https://open.spotify.com/track/1x9jnpPOAMSrr7DuIG5jMl?si=885aceaa04fa4fee"
    },
    {
        title: "Bertaut",
        artist: "Nadin amizah",
        reason: "tentang ikatan batin yang kuat antara seorang anak dan ibunya, yang digambarkan melalui ungkapan rasa syukur dan pengakuan akan peran besar ibu dalam hidup sang anak.",
        imageUrl: "Nadin amizah.jpg", // URL Gambar Cover Nadin amizah
        spotifyUrl: "https://open.spotify.com/track/630DpnzdfjdVqv2yLfPbAX?si=7d36d9db117744bb"
    },
    {
        title: "Diri",
        artist: "Tulus",
        reason: "tentang penerimaan diri, cinta diri, dan menghargai diri sendiri.",
        imageUrl: "tulus.jpg", // URL Gambar Cover Tulus
        spotifyUrl: "https://open.spotify.com/track/2qgjqbi96IAOBzZFC6H57U?si=24537529119c43ec"
    },
    {
        title: "Tarot",
        artist: "Feast",
        reason: "tentang bertahan dalam hubungan yang rumit dan penuh luka, di mana cinta masih ada namun diwarnai kebingungan dan stagnasi.",
        imageUrl: "feast.jpg", // URL Gambar Cover Feast.
        spotifyUrl: "https://open.spotify.com/track/4XHijJfABTtUCW3Bp6KFvr?si=d451750d135a4c92"
    },
    {
        title: "Fix you",
        artist: "Clodplay",
        reason: "tentang dukungan, harapan, dan cinta sejati di tengah kesulitan hidup.",
        imageUrl: "fix you.jpg", // URL Gambar Cover Coldplay
        spotifyUrl: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=d086cf6958654206"
    },
    {
        title: "33x",
        artist: "Perunggu",
        reason: "tentang perjuangan, motivasi, dan spiritualitas yang terinspirasi dari jumlah wirid harian, dengan pesan untuk tidak terburu-buru dalam hidup sambil tetap mengingat Tuhan dan berserah diri.",
        imageUrl: "33x.jpg", // URL Gambar Cover Perunggu
        spotifyUrl: "https://open.spotify.com/track/0I3I9hgBRat6HR5Gzy26jx?si=756bfe043172431b"
    },

];

// Fungsi untuk membuat kartu (card) HTML dari data lagu
function createMusicCard(song) {
    // Membuat elemen div utama untuk kartu
    const card = document.createElement('div');
    card.classList.add('music-card');

    // Menggunakan template literal untuk membuat struktur HTML di dalam kartu
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

// Menjalankan fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('music-grid');
    
    // Loop melalui array favoriteSongs dan tambahkan kartu ke kontainer
    favoriteSongs.forEach(song => {
        const cardElement = createMusicCard(song);
        gridContainer.appendChild(cardElement);
    });
});