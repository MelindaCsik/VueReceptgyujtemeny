<script setup>
import { computed, defineProps } from 'vue';
import Recipe from '../classes/Recipe';

const props = defineProps({
    recipe: Recipe
})


</script>

<template>
    <div class="card rounded" width="18rem">
        <img :src="props.recipe.getImage()" class="card-img-top" alt="Recept kép">
        <div class="card-body">
            <h5 class="card-title">{{ props.recipe.getName() }}</h5>
            <p class="card-text">
                <small class="text-muted">
                    Elkészítési idő: {{ props.recipe.getPreparation_time() }} perc
                </small>
            </p>
            <p class="card-text">
                <span class="badge" :class="props.recipe.getDifficultyClass()">{{ props.recipe.getDifficultyName() }}</span>

            </p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                :data-bs-target="'#receptmodal' + props.recipe.getId()">Részletek</button>
        </div>
    </div>


    <div class="modal fade" :id="'receptmodal' + props.recipe.getId()" tabindex="-1"
        :aria-labelledby="'receptmodal' + props.recipe.getId()" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'receptmodal' + props.recipe.getId()">{{ props.recipe.getName() }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Elkészítési idő:</strong> {{ props.recipe.getPreparation_time() }} perc</p>
                    <p><strong>Leírás:</strong> {{ props.recipe.getDetails() }}</p>
                    <p><strong>Nehézség:</strong> <span class="badge" :class="[
                        { 'text-bg-success': props.recipe.getDifficulty() == 0 },
                        { 'text-bg-warning': props.recipe.getDifficulty() == 1 },
                        { 'text-bg-danger': props.recipe.getDifficulty() == 2 }
                    ]">{{ props.recipe.getDifficultyName() }}</span></p>
                    <p><img :src="props.recipe.getImage()" class="w-100 img-fluid "></p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.card-img-top {
    height: 200px;
}

.img-fluid {
    height: 400px;
}

.card-img-top,
.img-fluid {
    object-fit: cover;
}
</style>