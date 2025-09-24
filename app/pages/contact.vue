<template>
  <div class="contact-wrapper">
    <div class="contact-form-wrapper">
      <h1>Contact Me</h1>
      <p>Feel free to contact me any time. We will get back to you as soon as I can!</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <WaveInput v-model="form.name" label="Name" type="text" :required="true" id="contact-name" />
        </div>
        <div class="form-group">
          <WaveInput v-model="form.email" label="Email" type="email" :required="true" id="contact-email" />
        </div>
        <div class="form-group">
          <WaveInput v-model="form.message" label="Message" type="text" :required="true" id="contact-message" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div class="contact-info-wrapper">
      <h2>Get in Touch</h2>
      <div class="contact-info-list">
        <!-- Email -->
        <div class="contact-info-item">
          <div class="contact-info-icon">
            <Icon name="heroicons:envelope" />
          </div>
          <div class="contact-info-content">
            <p>andrianilana.liantsoa@gmail.com</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="contact-info-item">
          <div class="contact-info-icon">
            <Icon name="heroicons:phone" />
          </div>
          <div class="contact-info-content">
            <p>+261 33 84 171 83</p>
          </div>
        </div>

        <!-- Address -->
        <div class="contact-info-item">
          <div class="contact-info-icon">
            <Icon name="heroicons:map-pin" />
          </div>
          <div class="contact-info-content">
            <p>II J 133 F Ter A Ambohijatovo IVANDRY<br>101 Antananarivo, Madagascar</p>
          </div>
        </div>

        <!-- Open Hours -->
        <div class="contact-info-item">
          <div class="contact-info-icon">
            <Icon name="heroicons:clock" />
          </div>
          <div class="contact-info-content">
            <p>Monday - Friday<br>9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
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
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', message: '' } // Reset form
}
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables";
@use "../assets/scss/mixins";

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form-wrapper {
  //background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;

  h1 {
    color: variables.$text-color;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  p {
    color: variables.$text-color;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

form {
  button[type="submit"] {
    @include mixins.button(variables.$bg-color-variant-3);
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
    font-weight: 700;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.contact-info-wrapper {
  //background: #2a2a2a;
  background: variables.$bg-color-variant-1;
  padding: 2rem;
  border-radius: 12px;
  height: fit-content;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -21px;
    width: 40px;
    height: 40px;
    background: #819A91;
    border-radius: 12px;
    pointer-events: none;
  }

  h2 {
    color: variables.$text-color;
    margin-bottom: variables.$spacing-md;
    font-size: variables.$font-size-h2;
  }
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: variables.$spacing-sm;
  margin-bottom: variables.$spacing-md;
  padding: variables.$spacing-sm;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
}

.contact-info-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: variables.$bg-color-darky;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.contact-info-content {
  flex: 1;
  
  h3 {
    color: variables.$secondary-color;
    font-size: variables.$font-size-base;
    font-weight: 600;
    margin-bottom: variables.$spacing-xs;
  }
  
  p {
    color: variables.$text-color;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
  }
}


</style>