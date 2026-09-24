<template>
  <div class="contact-page">
    <section class="contact-container">

      <!-- Info Kontak -->
      <div class="contact-info">
        <h1>Contact Us</h1>
        <p>
          Jika kamu memiliki pertanyaan atau ingin mengetahui lebih lanjut
          tentang Wonderwall, silakan hubungi kami melalui informasi berikut.
        </p>

        <div class="info-item">
          <h3>📍 Alamat</h3>
          <p>Jl. Braga No. 12</p>
        </div>

        <div class="info-item">
          <h3>📞 08? berapa</h3>
          <p>0813-9549-8929</p>
        </div>

        <div class="info-item">
          <h3>🌐 Instagram</h3>
          <p>@bn_98162</p>
        </div>
      

      <div class="info-item">
          <h3>Ⓜ Email</h3>
          <p>satriaaaw24@gmail.com</p>
        </div>
        </div>

      <!-- Formulir -->
      <div class="contact-form">
        <h2>Kirim Pesan</h2>

        <form>
          <label for="nama">Nama</label>
          <input
            id="nama"
            type="text"
            placeholder="Masukkan nama"
          />

          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email"
          />

          <label for="pesan">Pesan</label>
          <textarea
            id="pesan"
            rows="6"
            placeholder="Tulis pesan kamu..."
          ></textarea>

          <button type="button">Kirim</button>
        </form>
      </div>

    </section>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 50px;
}

/* Layout 2 kolom */
.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  align-items: stretch;
}

/* Info Kontak */
.contact-info {
  flex: 1;
  padding: 30px;
}

.contact-info h1 {
  font-size: 40px;
  margin-bottom: 15px;
}

.contact-info > p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 30px;
}

.info-item {
  margin-bottom: 25px;
}

.info-item h3 {
  margin-bottom: 5px;
}

.info-item p {
  color: #666;
}

/* Form */
.contact-form {
  flex: 1;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
}

input,
textarea {
  padding: 12px;
  margin-bottom: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}











.contact-page {
  min-height: 100vh;
  padding: 40px 45px;
  background: #252525;
  color: #f1f1f1;
}

.contact-page h1 {
  color: #a9c7ee;
  font-size: 38px;
  margin-bottom: 25px;
}

/* Garis */
.contact-page hr {
  border: none;
  border-top: 3px solid #24567d;
  margin-bottom: 25px;
}

.contact-page > p {
  color: #ddd;
  font-size: 17px;
  line-height: 1.7;
}

/* Dua kolom */
.contact-container {
  display: flex;
  gap: 30px;
  margin: 35px 0;
}

.contact-info,
.contact-form {
  flex: 1;
  padding: 30px;
  background: #292929;
  border: 1px solid #777;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.contact-info h2,
.contact-form h2 {
  color: #a9c7ee;
  margin-top: 0;
}

.contact-info p {
  color: #ccc;
  line-height: 1.6;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-bottom: 6px;
  color: #ddd;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  margin-bottom: 18px;

  border: 1px solid #777;
  border-radius: 8px;

  background: #333;
  color: white;

  font-size: 15px;
  font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #00bcd4;
}

/* Tombol */
.contact-form button {
  padding: 12px 25px;

  border: none;
  border-radius: 8px;

  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  transition: 0.2s;
}

.contact-form button:hover {
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 700px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-page {
    padding: 25px;
  }
}
</style>