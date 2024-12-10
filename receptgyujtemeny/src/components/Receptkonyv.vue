<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Receptkönyv</a>
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

    <div class="mb-3">
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Keress egy recepetet...">
    </div>

    <select class="form-select" aria-label="Default select example">
      <option selected>Minden nehézség</option>
      <option value="1">Könyű</option>
      <option value="2">Közepes</option>
      <option value="3">Nehéz</option>
    </select>

    <select class="form-select" aria-label="Default select example">
      <option selected>Elkészítési idő szerint</option>
      <option value="1">Csökenő</option>
      <option value="2">Növekvő</option>
    </select>
  </header>
  
  <main>
    <div class="card" style="width:400px">
      <img class="card-img-top" src="../assets/palacsinta.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Palacsinta</h4>
        <p class="card-text">e text some example text. John Some examplDoe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div>

    <div class="card" style="width:400px">
      <img class="card-img-top" src="../assets/palacsinta.jpg" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Palacsinta</h4>
        <p class="card-text">e text some example text. John Some examplDoe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div>

  </main>

  <footer></footer>
</template>

<style scoped></style>
