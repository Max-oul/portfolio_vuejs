<template>
    <nav :class="navClass">
        <div class="container">
            <div class="navbar-content">
                <!-- Brand name  -->
                <div class="navbar-brand">
                    <NuxtLink to="/" class="brand-link">
                        <img src="/ZokyZenHack.svg" alt="logo" class="navbar-brand-logo">
                    </NuxtLink>
                </div>
                <!-- Navigation items in the center -->
                <ul>
                    <li v-for="item in navigationItems" :key="item.path">
                        <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
                    </li>
                </ul>
                <!-- Download cv buttons -->
                <div class="navbar-actions">
                    <a :href="cvUrl" :download="cvFileName" class="btn-download-cv">
                        <span class="btn-text">Download CV</span>
                        <Icon name="heroicons:arrow-down-tray"/>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
// Props
const props = defineProps({
    navClass: {
        type: String,
        default: 'default',
        validator: value => ['default', 'darky'].includes(value)
    },
    brandName: {
        type: String,
        default: 'ZokZenZ`Hack'
    },
    cvUrl: {
        type: String,
        default: '/path/to/cv.pdf'
    },
    cvFileName: {
        type: String,
        default: 'cv.pdf'
    }
});

// Navigation Items - Correction des routes
const navigationItems = [
    { label: 'About me', path: '/' },
    { label: 'Works', path: '/work' },
    { label: 'Contact', path: '/contact' }
];

// Conditional class
const navClass = computed(() => {
    return {
        'navbar-default': props.navClass === 'default',
        'navbar-darky': props.navClass === 'darky'
    }
})
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables";
@use "../assets/scss/mixins";

nav {
    background-color: variables.$bg-color;
    padding: variables.$spacing-sm 0;
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @include mixins.mobile {
        flex-direction: column;
        gap: variables.$spacing-sm;
    }
}

// Brand style
.navbar-brand {
    .brand-link {
        font-size: variables.$font-size-h2;
        font-weight: bold;
        display: flex;
        align-items: center;
        color: variables.$secondary-color;
        text-decoration: none;
        
        &:hover {
            color: variables.$primary-color;
        }

        .navbar-brand-logo{
            width: 40px;
            height: 40px;
            object-fit: contain;
            transform: scale(4.5);
        }
    }
}

// Navigation links
ul {
    list-style: none;
    display: flex;
    gap: variables.$spacing-md;
    
    @include mixins.mobile {
        flex-direction: column;
        gap: variables.$spacing-sm;
    }
    
    li {
        a {
            color: variables.$text-color;
            text-decoration: none;
            padding: variables.$spacing-xs variables.$spacing-sm;
            transition: all 0.3s ease;
            position: relative;
            //animation
            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width:0;
                height: 2px;
                background-color: variables.$bg-color-variant-3;
                transition: width 0.3s ease;
            }
            &:hover {
                &::after{
                    width: 100%;
                }
            }
            &.router-link-active {
                &::after{
                    width: 100%;
                }
            }
        }
    }
}

// Download CV button
.navbar-actions {
    .btn-download-cv {
        @include mixins.button(variables.$bg-color-variant-3);
        text-decoration: none;
        font-size: variables.$font-size-base;
        display: flex;
        align-items: center;
        gap: variables.$spacing-xs;
        &:hover {
            transform: translateY(-1px);
        }
    }
}

// Navbar variants
.navbar-default {
    background-color: variables.$bg-color;
}

.navbar-darky {
    background-color: variables.$secondary-color;
    
    .navbar-brand .brand-link {
        color: white;
    }
    
    ul li a {
        color: white;
        &:hover {
            background-color: rgba(255,255,255,0.1);
        }
    }
}
</style>