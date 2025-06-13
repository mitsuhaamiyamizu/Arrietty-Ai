// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const paket = document.getElementById('paket').value;
    const pesan = document.getElementById('pesan').value;

    const whatsappPattern = /^[0-9]{10,13}$/;
    if (nama && whatsapp && paket && whatsappPattern.test(whatsapp)) {
        const ownerNumber = '6283833382033'; // Nomor owner
        const message = encodeURIComponent(
            `Halo Sho! Saya mau pesan bot Arrietty - AI\nNama: ${nama}\nNomor WhatsApp: ${whatsapp}\nPaket: ${paket}\nPesan: ${pesan || 'Tidak ada pesan tambahan'}`
        );
        const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        alert(`Hai ${nama}! Pesanmu siap dikirim ke Sho via WhatsApp. Tinggal klik 'Kirim' di WA ya!`);
        this.reset();
    } else {
        alert('Isi semua kolom dengan benar ya! Pastikan nomor WhatsApp berisi 10-13 angka.');
    }
});

// Order Button di Tabel Harga
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', () => {
        const paket = button.getAttribute('data-paket').toLowerCase();
        document.getElementById('paket').value = paket;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});
