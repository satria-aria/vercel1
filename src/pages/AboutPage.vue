<template>
  <div class="about-page">

    <!-- Cerita Kami -->
    <section class="story">
      <div class="story-text">
        <h1>Cerita Kami</h1>
        <p>
          Wonderwall adalah toko yang kami buat untuk menyediakan berbagai
          produk menarik dengan kualitas yang baik dan harga yang terjangkau.
          Kami ingin menciptakan pengalaman berbelanja yang mudah, nyaman,
          dan menyenangkan bagi setiap pelanggan.
        </p>
        <p>
          Toko ini berawal dari ide sederhana untuk membuat tempat belanja
          yang modern dan mudah digunakan. Bersama-sama, kami mengembangkan
          Wonderwall menjadi toko yang terus berusaha memberikan pelayanan
          terbaik.
        </p>
      </div>

      <div class="story-image">
        <img src="/meow.jpg" alt="Toko Wonderwall">
      </div>
    </section>

    <!-- Tim Kami -->
    <section class="team">
      <h2>Tim Kami</h2>
      <p class="team-description">
        Kenali anggota tim yang berada di balik Wonderwall.
      </p>

      <div class="team-list">
        <TeamCard
          v-for="anggota in anggotaTim"
          :key="anggota.nama"
          :nama="anggota.nama"
          :jabatan="anggota.jabatan"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import TeamCard from '../components/TeamCard.vue'

const anggotaTim = [
  {
    nama: 'Satria',
    jabatan: 'Project Manager'
  },
  {
    nama: 'Raka',
    jabatan: 'UI/UX Designer'
  },
  {
    nama: 'Dimas',
    jabatan: 'Web Developer'
  }
]
</script>

<style scoped>
.about-page {
  padding: 50px;
}

/* Cerita Kami */
.story {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
}

.story-text {
  flex: 1;
}

.story-text h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.story-text p {
  line-height: 1.7;
  color: #555;
}

.story-image {
  flex: 1;
}

.story-image img {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 20px;
}

/* Tim Kami */
.team {
  text-align: center;
}

.team h2 {
  font-size: 35px;
  margin-bottom: 10px;
}

.team-description {
  color: #2c329f;
  margin-bottom: 30px;
}

.team-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}










.about-page {
  min-height: 100vh;
  padding: 40px 45px;
  background: #252525;
  color: #f1f1f1;
}

/* Cerita Kami */
.story {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}

.story-text {
  flex: 1;
}

.story-text h1 {
  color: #a9c7ee;
  font-size: 38px;
  margin-bottom: 20px;
}

.story-text p {
  color: #ddd;
  line-height: 1.7;
  font-size: 17px;
}

/* Gambar */
.story-image {
  flex: 1;
}

.story-image img {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid #777;
}

/* Tim */
.team {
  text-align: center;
}

.team h2 {
  color: #a9c7ee;
  font-size: 35px;
}

.team-description {
  color: #ccc;
  margin-bottom: 30px;
}

.team-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 700px) {
  .story {
    flex-direction: column;
  }

  .about-page {
    padding: 25px;
  }
}






</style>