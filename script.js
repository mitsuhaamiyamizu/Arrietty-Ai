document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const paket = document.getElementById('paket').value;
    const pesan = document.getElementById('pesan').value;
    const loading = document.getElementById('loading');
    const success = document.getElementById('success');

    if (nama && paket) {
        loading.classList.remove('hidden');
        success.classList.add('hidden');

        setTimeout(() => {
            loading.classList.add('hidden');

            const ownerNumber = '6283833382033';
            const message = encodeURIComponent(
                `Halo Sho! Saya mau pesan bot Arrietty - AI\nNama: ${nama}\nPaket: ${paket}\nPesan: ${pesan || 'Tidak ada pesan tambahan'}`
            );
            const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');

            success.classList.remove('hidden');
            setTimeout(() => success.classList.add('hidden'), 3000);
            this.reset();
        }, 1000);
    } else {
        alert('Isi nama dan pilih paket ya, biar Sho bisa bantu! 😊');
    }
});

document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', () => {
        const paket = button.getAttribute('data-paket').toLowerCase();
        document.getElementById('paket').value = paket;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});
