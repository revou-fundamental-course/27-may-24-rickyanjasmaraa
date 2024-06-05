//FUNGSI JAVACRIPT PADA MENU TOGGLE, KETIKA UKURAN BERUBAH AKAN MENAMPILKAN MENU NAV YANG DISEMBUNYIKAN DAN BISA DI KLIK

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle ('open');
}