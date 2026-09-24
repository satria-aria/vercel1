```vue
<template>
  <div class="testimoni-page">
    <section class="hero-testimoni">
      <h1>Testimoni Pelanggan</h1>
      <p>
        Lihat pengalaman pelanggan yang sudah berbelanja di toko kami.
      </p>
    </section>

    <section class="testimoni-container">
      <div
        class="testimoni-card"
        v-for="testimoni in daftarTestimoni"
        :key="testimoni.id"
      >
        <div class="avatar">
          {{ testimoni.nama.charAt(0) }}
        </div>

        <div class="rating">
          ★★★★★
        </div>

        <p class="pesan">
          "{{ testimoni.pesan }}"
        </p>

        <h3>{{ testimoni.nama }}</h3>
        <span>{{ testimoni.status }}</span>
      </div>
    </section>
  </div>
</template>

<script setup>
const daftarTestimoni = [
  {
    id: 1,
    nama: "Andi",
    status: "Siswa",
    pesan: "albumnya kece dan kualitas suaranya jernih ."
  },
  {
    id: 2,
    nama: "Siti",
    status: "Siswa",
    pesan: "pembelian cepat padahal saya bru membeli lagu ini 3 menit lalu ."
  },
  {
    id: 3,
    nama: "Raka",
    status: "Siswa",
    pesan: "produk nya selalu ready stok."
  }
];
</script>

<style scoped>
.testimoni-page {
  min-height: 100vh;
  padding-bottom: 60px;
  background: #f5f7fb;
}

/* Bagian atas */
.hero-testimoni {
  text-align: center;
  padding: 60px 20px 40px;
  background: linear-gradient(135deg, #6a5acd, #8a7de8);
  color: white;
}

.hero-testimoni h1 {
  font-size: 40px;
  margin-bottom: 12px;
}

.hero-testimoni p {
  font-size: 17px;
  margin: 0;
}

/* Kumpulan testimoni */
.testimoni-container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

/* Card */
.testimoni-card {
  width: 280px;
  padding: 30px 25px;
  background: white;
  border-radius: 20px;
  text-align: center;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  transition: 0.3s;
}

.testimoni-card:hover {
  transform: translateY(-8px);
}

/* Avatar */
.avatar {
  width: 65px;
  height: 65px;
  margin: 0 auto 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #6a5acd;
  color: white;

  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
}

/* Bintang */
.rating {
  color: #f5b400;
  font-size: 20px;
  margin-bottom: 15px;
}

/* Isi testimoni */
.pesan {
  color: #555;
  line-height: 1.6;
  font-size: 15px;
  min-height: 75px;
}

.testimoni-card h3 {
  margin: 15px 0 5px;
  color: #333;
}

.testimoni-card span {
  color: #777;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 600px) {
  .hero-testimoni h1 {
    font-size: 30px;
  }

  .testimoni-card {
    width: 100%;
    max-width: 350px;
  }
}
</style>
```
