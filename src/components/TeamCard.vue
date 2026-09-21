<template>
  <div class="team-card">
    <div class="avatar">
      {{ nama.charAt(0) }}
    </div>

    <h3>{{ nama }}</h3>
    <p>{{ jabatan }}</p>
  </div>
</template>

<script setup>
defineProps({
  nama: {
    type: String,
    required: true
  },
  jabatan: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.team-card {
  width: 220px;
  padding: 24px;
  text-align: center;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}

.team-card h3 {
  margin: 10px 0 5px;
}

.team-card p {
  margin: 0;
  color: #666;
}









.team-card {
  width: 220px;
  padding: 25px;
  text-align: center;
  background: #292929;
  border: 1px solid #777;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}

.team-card:hover {
  transform: translateY(-5px);
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a5acd, #00bcd4);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: bold;
}

.team-card h3 {
  color: #a9c7ee;
  margin-bottom: 5px;
}

.team-card p {
  color: #ccc;
}
</style>