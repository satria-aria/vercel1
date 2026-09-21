<template>
  <div class="landing-page">

    <!-- Hero Section -->
    <section class="bg-cyan-500">
      <div class="hero-content inline-flex">
        <h1>Selamat Datang di Onlineshop SMK Yadika Soreang</h1>
        <p>
          Temukan berbagai perlengkapan sekolah dengan mudah, cepat, dan harga
          yang terjangkau.
        </p>

        <RouterLink to="/product" class="btn">
          Lihat Produk
        </RouterLink>
      </div>
    </section>

    <!-- Video Promosi -->
<section class="promo-video">
  <h2>Video Promosi</h2>
  <p>Lihat berbagai produk unggulan kami.</p>

  <video controls autoplay loop>
    <source src="/video/siuu.mp4" type="video/mp4">
  </video>
</section>


    <!-- Fitur -->
    <section class="features">
      <h2>Kenapa Memilih Kami?</h2>

      <div class="feature-list">

        <div class="card">
          <div class="icon">📚</div>
          <h3>Produk Lengkap</h3>
          <p>
            Menyediakan buku, seragam, alat tulis, dan berbagai kebutuhan sekolah.
          </p>
        </div>

        <div class="card">
          <div class="icon">🚚</div>
          <h3>Pengiriman Cepat</h3>
          <p>
            Pesanan diproses dengan cepat agar sampai tepat waktu.
          </p>
        </div>

        <div class="card">
          <div class="icon">💳</div>
          <h3>Pembayaran Mudah</h3>
          <p>
            Tersedia berbagai metode pembayaran yang aman dan praktis.
          </p>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
// Tidak perlu script jika hanya tampilan
</script>

<style scoped>
* 
.contact-page {
  min-height: 100vh;
  padding: 40px 45px;
  background: #252525;
  color: white;
}

.contact-container {
  display: flex;
  gap: 30px;
  max-width: 1100px;
  margin: 40px auto;
}

.contact-info,
.contact-form {
  flex: 1;
  padding: 30px;
  border-radius: 15px;

  background: linear-gradient(
    135deg,
    #3b82f6,
    #06b6d4,
    #20c878
  );

  color: white;
}


*

.landing-page{
  font-family: Arial, Helvetica, sans-serif;
}


.hero{
  min-height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:60px 20px;

  background:linear-gradient(135deg,#3b82f6,#06b6d4,#22c55e);
  color:white;
}

.hero-content{
  max-width:700px;
}

.hero h1{
  font-size:3rem;
  margin-bottom:20px;
}

.hero p{
  font-size:1.2rem;
  margin-bottom:30px;
}


.btn{
  display:inline-block;
  padding:14px 30px;
  background:white;
  color:#2563eb;
  text-decoration:none;
  border-radius:999px;
  font-weight:bold;
  transition:.3s;
}


.btn:hover{
  transform:translateY(-4px);
  box-shadow:0 10px 20px rgba(0,0,0,.2);
}


.features{
  padding:60px 20px;
  text-align:center;
}

.features h2{
  margin-bottom:40px;
  color:#1f2937;
}

.feature-list{
  display:flex;
  justify-content:center;
  gap:25px;
  flex-wrap:wrap;
}

.card{
  width:280px;
  padding:25px;
  border-radius:20px;
  background:#fff;
  box-shadow:0 5px 15px rgba(0,0,0,.15);
  transition:.3s;
}


.card:hover{
  transform:translateY(-8px);
}

.icon{
  font-size:40px;
  margin-bottom:15px;
}

.card h3{
  margin-bottom:10px;
  color:#2563eb;
}

.card p{
  color:#555;
  line-height:1.6;
}


@media(max-width:768px){

.hero h1{
  font-size:2.2rem;
}

.hero p{
  font-size:1rem;
}

.card{
  width:100%;
}

}







.landing-page {
  min-height: 100vh;
  padding: 40px 45px;
  background: #252525;
  color: #f1f1f1;
}


.hero {
  text-align: center;
  padding: 70px 20px;
  background: linear-gradient(135deg, #263b55, #34245c);
  border-radius: 15px;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 45px;
  color: #a9c7ee;
  margin-bottom: 15px;
}

.hero p {
  font-size: 18px;
  color: #ddd;
  line-height: 1.6;
}


.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
}


.features {
  text-align: center;
}

.features h2 {
  color: #a9c7ee;
  font-size: 32px;
  margin-bottom: 30px;
}

.feature-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.feature-card {
  width: 250px;
  padding: 25px;
  background: #292929;
  border: 1px solid #777;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.feature-card h3 {
  color: #a9c7ee;
}

.feature-card p {
  color: #ccc;
  line-height: 1.5;
}






 


</style>