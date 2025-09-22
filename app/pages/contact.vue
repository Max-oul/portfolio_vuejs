<template>
  <div>
    <h1>Contact</h1>
    
    <div>
      <h2>Contactez-moi</h2>
      <p>N'hésitez pas à me contacter pour vos projets</p>
      
      <div>
        <p>Email: votre.email@exemple.com</p>
        <p>Téléphone: +33 X XX XX XX XX</p>
        <p>LinkedIn: votre-profil-linkedin</p>
        <p>GitHub: votre-username-github</p>
      </div>
      
      <form>
        <div>
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        
        <button type="submit" @click.prevent="submitForm">Envoyer</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', message: '' } // Reset form
}
</script>