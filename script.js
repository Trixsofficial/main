// Mendapatkan semua elemen dengan kelas "subject"
const subjectLinks = document.querySelectorAll('.subject');

// Fungsi untuk mengarahkan ke halaman mata pelajaran
function redirectToSubjectPage(event) {
    event.preventDefault();
    const subjectId = this.getAttribute('data-content');
    // Mengarahkan pengguna ke berkas HTML yang sesuai dengan tautan yang diklik
    window.location.href = subjectId + '.html';
}

// Tambahkan event click pada setiap tautan mata pelajaran
subjectLinks.forEach((link) => {
    link.addEventListener('click', redirectToSubjectPage);
});
