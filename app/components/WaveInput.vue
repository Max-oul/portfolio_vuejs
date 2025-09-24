<template>
    <div class="wave-group">
        <input 
            :id="inputId" 
            :type="type" 
            :placeholder="placeholder" 
            :value="modelValue" 
            @input="updateValue"
            class="wave-input" 
            :required="required" 
        />
        <span class="wave-bar"></span>
        <label :for="inputId" class="wave-label">
            <span 
                v-for="(char, index) in labelChars" 
                :key="index" 
                class="wave-label-char"
                :style="{ '--index': index }"
            >
                {{ char }}
            </span>
        </label>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text',
        validator: value => ['text', 'email', 'password', 'textarea', 'tel', 'url', 'search'].includes(value)
    },
    required: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    }
})

// Emits
const emit = defineEmits(['update:modelValue']);

// Generate unique ID if not provided
const inputId = computed(() => props.id || `wave-input-${Math.random().toString(36).substr(2, 9)}`);

// Split label into individual characters for animation
const labelChars = computed(() => {
    return props.label ? props.label.split('') : [];
});

// Update value method
const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
};
</script>

<style lang="scss" scoped>
.wave-group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
}

.wave-input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .wave-label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
}

.wave-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
    pointer-events: none;
}

.wave-label-char {
    opacity: 0;
    animation: char-appear 0.2s ease forwards;
    animation-delay: calc(var(--index) * 0.05s);
}

.wave-input:focus ~ .wave-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
}

.wave-input:focus ~ .wave-label .wave-label-char,
.wave-input:valid ~ .wave-label .wave-label-char {
    animation: char-wave 0.5s ease-in-out;
    animation-delay: calc(var(--index) * 0.1s);
}

.wave-input:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
}

.wave-input:valid {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
}

@keyframes char-appear {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes char-wave {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
</style>