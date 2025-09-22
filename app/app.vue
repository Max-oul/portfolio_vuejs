<template>
  <div>
    <nav>
      <div class="container">
        <ul>
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/work">Work</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
    
    <main>
      <div class="container">
        <NuxtPage />
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2025 Mon Portfolio</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>