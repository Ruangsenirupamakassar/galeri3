
  // Menunggu halaman selesai dimuat
  window.addEventListener('load', function() {
    // Menghapus kelas "loading" dari elemen "body" saat halaman selesai dimuat
    document.body.classList.remove('loading');

    // Menambahkan kelas "loaded" ke elemen "body" setelah sedikit waktu untuk memicu efek transisi
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 100);
  });

