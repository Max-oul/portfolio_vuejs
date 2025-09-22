<template>
    <nav :class="navClass">
        <div class="container">
            <ul>
                <li v-for="item in navigationItems" :key="item.path">
                    <NuxtLink :to="item.path">{{ item.label  }}</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script setup>
//Props
 const props = defineProps({
    navClass: {
        type: String,
        default: 'default',
        validator: value => ['default','darky'].includes(value)
    }
 });
//Navigation Items
const navigationItems = [
    { label: 'About me', path: '/about' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '/contact' }
];

//Conditional class
const navClass = computed(()=>{
    return{
        'navbar-default': props.navClass === 'default',
        'navbar-darky': props.navClass === 'darky'
    }
})
</script>