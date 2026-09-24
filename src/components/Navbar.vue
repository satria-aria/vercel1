<template>
      <nav>
        <h2>NewJeans Official</h2>
        <div class="menu">
       | <RouterLink to="/">Landing</RouterLink> |
        
          <RouterLink to="/product">Product</RouterLink> |
         <RouterLink to="/about">About</RouterLink> |
           <RouterLink to="/contact">Contact</RouterLink> |
           <RouterLink to="/testimoni">Testimoni</RouterLink> |
           <RouterLink to="/NewJeans">NewJeans</RouterLink> |
           </div>
      </nav>
  <hr />
</template>
<style>
nav {
  position:relative;
  display: flex;
  align-items: center;
  padding: 15px 30px;
}

.menu {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  display: flex;
  gap: 30px;
}
</style>