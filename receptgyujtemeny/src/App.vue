<script setup>
import Kereses from './components/Kereses.vue';
import { recipes as recipesData } from './data/recipes';
import Recipe from './classes/Recipe';
import { ref } from 'vue'


const recipes = ref([]);
recipesData.forEach((recipe) => {
  recipes.value.push(new Recipe(
    recipe.id,
    recipe.name,
    recipe.preparation_time,
    recipe.difficulty,
    recipe.details,
    recipe.image
  ));
})

const ujRecipe = ref({
  name: "",
  prepTime: 0,
  difficulty: -1,
  details: "",
  image: ""
})

const addRecipe = () => {
  const newRecipe = new Recipe(
    recipes.value.length + 1,
    ujRecipe.value.name,
    ujRecipe.value.prepTime,
    ujRecipe.value.difficulty,
    ujRecipe.value.details,
    ujRecipe.value.image
  )
  console.log(newRecipe.getDetails());
  

  if (newRecipe.megfelelo()) {
    alert("Hibás recept adatok!")
  }
  else{
    alert(`Recept sikeresen hozzáadva: ${ujRecipe.value.name}`)
    recipes.value.push(newRecipe);
  }


  ujRecipe.value = {
    name: "",
    prepTime: 0,
    difficulty: -1,
    details: "",
    image: ""
  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Receptek</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="modal" data-bs-target="#addRecipeModal">Új recept</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kedvencek</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="modal fade" id="addRecipeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="addRecipeModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addRecipeModalLabel">Recept hozzáadása</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="form-floating" id="recipeForm" novalidate>
              <div class="mb-3 form-floating">
                <input v-model="ujRecipe.name" type="text" class="form-control" id="recipeName" placeholder="Név" required />
                <label for="recipeName" class="form-label">Név</label>
              </div>
              <div class="mb-3 form-floating">
                <input v-model="ujRecipe.prepTime" min="0" type="number" class="form-control" id="prepTime" placeholder="Elkészítési Idő" required />
                <label for="prepTime" class="form-label">Elkészítési Idő (perc)</label>
              </div>
              <div class="mb-3 form-floating">
                <select v-model="ujRecipe.difficulty" class="form-select" id="difficulty" required >
                  <option value="-1" disabled selected>Válassz...</option>
                  <option value="0">Könnyű</option>
                  <option value="1">Közepes</option>
                  <option value="2">Nehéz</option>
                </select>
                <label for="difficulty" class="form-label">Nehézség</label>
              </div>
              <div class="mb-3 form-floating">
                <textarea v-model="ujRecipe.details" class="form-control" id="details" rows="3" placeholder="Részletek" required></textarea>
                <label for="details" class="form-label">Leírás</label>
              </div>
              <div class="mb-3 form-floating">
                <input v-model="ujRecipe.image" type="url" class="form-control" id="imageUrl" placeholder="Kép URL" required />
                <label for="imageUrl" class="form-label">Kép URL</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Mégse</button>
            <button @click="addRecipe" type="button" class="btn btn-primary" data-bs-dismiss="modal" form="recipeForm">Mentés</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="row">
    <Kereses :recipes="recipes" />
  </main>
  <footer>
  </footer>
</template>

<style scoped>
.nav-link {
  transition: 0.2s all ease;
}
select:hover,
.nav-link:hover {
  cursor: pointer;
}

</style>
