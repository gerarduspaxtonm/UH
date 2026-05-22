document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Profil Siswa TIK telah diload.");

  const btnHello = document.getElementById("btnHello");

  if (btnHello) {
    btnHello.addEventListener("click", function () {
      alert("Halo! Selamat datang di website profil saya.");
      console.log("Tombol sapa diklik.");
    });
  }
});