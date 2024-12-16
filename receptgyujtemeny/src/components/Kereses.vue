<script setup>
import { computed, defineProps, ref } from 'vue';
import Receptkonyv from './Receptkonyv.vue';

const props = defineProps({
    recipes: Array
})

const recipes = computed(() => {
    return props.recipes;
})

const search = ref("")
const sortByPrepTime = ref(0)
const sortByDiff = ref(-1);

const resultsRecipes = computed(() => {
    return recipes.value.filter((recipe) => {
        return (recipe.getName().toLowerCase().includes(search.value.toLowerCase()) &&
            (sortByDiff.value == -1 || recipe.getDifficulty() == sortByDiff.value))
    })
})



</script>

<template>
    <div class="row gx-3 my-3">
        <div class="col-12 col-md-6 mb-3">
            <input v-model="search" type="search" class="form-control" placeholder="Keress receptet..."
                aria-label="Keress receptet...">
        </div>
        <div class="col-12 col-md-3 mb-3">
            <select v-model="sortByDiff" class="form-select">
                <option value="-1" selected>Minden nehézség</option>
                <option value="0">Könnyű</option>
                <option value="1">Közepes</option>
                <option value="2">Nehéz</option>
            </select>
        </div>
        <div class="col-12 col-md-3 mb-3">
            <select v-model="sortByPrepTime" class="form-select">
                <option value="0" selected>Elkészítési idő szerint</option>
                <option value="1">Nehézség szerint</option>
                <option value="2">Név szerint</option>
            </select>
        </div>
    </div>
    <div v-if="resultsRecipes.length != 0" v-for="recipe in resultsRecipes" class="col-12 col-md-4 mb-3">
        <Receptkonyv :recipe />
    </div>

    <div v-else class="d-flex justify-content-center">
        <div class="alert alert-danger text-center" role="alert">
            Nincs találat!
        </div>
    </div>
</template>

<style scoped></style>