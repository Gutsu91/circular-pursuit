<template>
    <h1>joueur</h1>
    <a href="#" @click.prevent="alerteParent"></a>
</template>

<script setup>
    import { useGameStore } from '@/stores/game'
    const gameStore = useGameStore()
    const props = defineProps(['ident'])
    const theJoueur = gameStore.oneJoueur(props.ident)
    const emits = defineEmits(['clickjoueur'])

    const alerteParent = () => {
        emits('clickjoueur', props.ident)
    }
</script>

