<script setup>
import ProductCard from "../components/ProductCard.vue";
const daftarProduk = [
  { id: 1, nama: "Newjeans 1st EP", harga: 75000, gambar: "cover album biru.jpg" },
  { id: 2, nama: "Newjeans Ditto", harga: 35000, gambar: "Ditto.jpg" },
  { id: 3, nama: "Newjeans NJWMX", harga: 120000, gambar: "newjeans green.jpg" },
  
];


</script>
<template>
  <main class="product-page">
    <h1>Produk Kami </h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>



</template>
<style scoped>
.grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}






.product-page {
  min-height: 100vh;
  padding: 40px 45px;
  background: #252525;
  color: #f1f1f1;
}

.product-page h1 {
  text-align: center;
  color: #a9c7ee;
  font-size: 38px;
  margin-bottom: 35px;
}

.product-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.product-card {
  width: 240px;
  padding: 20px;

  background: #292929;
  border: 1px solid #777;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  transition: 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}

.product-card h3 {
  color: #a9c7ee;
  margin-top: 15px;
}

.product-card p {
  color: #ccc;
}

.product-card .price {
  color: #00bcd4;
  font-weight: bold;
  font-size: 18px;
}


.product-card button {
  width: 100%;
  padding: 10px;

  border: none;
  border-radius: 8px;

  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;

  font-weight: bold;
  cursor: pointer;

  transition: 0.2s;
}

.product-card button:hover {
  transform: translateY(-2px);
}
</style>