export default class Recipe {
    #id
    #name
    #preparation_time
    #difficulty
    #details
    #image
    constructor(id, name, preparation_time, difficulty, details, image) {
        this.setId(id)
        this.setName(name)
        this.setPreparation_time(preparation_time)
        this.setDifficulty(parseInt(difficulty))
        this.setDetails(details)
        this.setImage(image)
    }
    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setPreparation_time(preparation_time) {
        this.#preparation_time = preparation_time
    }

    getPreparation_time() {
        return this.#preparation_time
    }

    setDifficulty(difficulty) {
        this.#difficulty = difficulty
    }

    getDifficulty() {
        return this.#difficulty
    }

    setDetails(details) {
        this.#details = details
    }

    getDetails() {
        return this.#details
    }

    setImage(image) {
        this.#image = image
    }

    getImage() {
        return this.#image;
    }
}