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
    const paket = document.getElementById('paket').value;
    const pesan = document.getElementById('pesan').value;
    const loading = document.getElementById('loading');
    const success = document.getElementById('success');

    if (nama && paket) {
        // Tampilkan loading
        loading.classList.remove('hidden');
        success.classList.add('hidden');

        // Simulasi delay untuk pengalaman otomatis (1 detik)
        setTimeout(() => {
            // Sembunyikan loading
            loading.classList.add('hidden');

            // Format pesan WhatsApp
            const ownerNumber = '6283833382033'; // Nomor owner
            const message = encodeURIComponent(
                `Halo Sho! Saya mau pesan bot Arrietty - AI\nNama: ${nama}\nPaket: ${paket}\nPesan: ${pesan || 'Tidak ada pesan tambahan'}`
            );
            const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;

            // Buka WhatsApp
            window.open(whatsappUrl, '_blank');

            // Tampilkan notifikasi sukses
            success.classList.remove('hidden');
            setTimeout(() => success.classList.add('hidden'), 3000); // Sembunyikan setelah 3 detik

            // Reset form
            this.reset();
        }, 1000);
    } else {
        alert('Isi nama dan pilih paket ya, biar Sho bisa bantu! 😊');
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
