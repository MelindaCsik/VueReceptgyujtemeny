<script setup>
</script>

<template>
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="Receptkonyv.vue">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Receptek</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Új recept</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kedvencek</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>

<main>
    <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Étel neve:</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Options</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>Nezségi szint:</option>
                <option value="1">Könyű</option>
                <option value="2">Közepes</option>
                <option value="3">Nehéz</option>
            </select>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Elkészítési idő:</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <button type="button" class="btn btn-primary">Feltöltés</button>
    </form>
</main>
</template>

<style scoped></style>