export default class Recipe {
    #id
    #name
    #preparation_time
    #difficulty
    #details
    #image

    constructor(id, name, preparation_time, difficulty, details, image) {
        this.#id = id
        this.#name = name
        this.#preparation_time = preparation_time
        this.#difficulty = parseInt(difficulty)
        this.#details = details
        this.#image = image

        this.setId = this.setId.bind(this)
        this.getId = this.getId.bind(this)
        this.getName = this.getName.bind(this)
        this.getPreparation_time = this.getPreparation_time.bind(this)
        this.getDifficulty = this.getDifficulty.bind(this)
        this.getDifficultyName = this.getDifficultyName.bind(this)
        this.getDifficultyClass = this.getDifficultyClass.bind(this)
        this.getDetails = this.getDetails.bind(this)
        this.getImage = this.getImage.bind(this)
        this.megfelelo = this.megfelelo.bind(this)
    }

    megfelelo() {
        return !(this.#id !== "" && this.#name !== "" && this.#preparation_time !== "" &&
            this.#difficulty !== "" && this.#details !== "" && this.#image !== "" &&
            this.#difficulty != -1 && this.#preparation_time >= 0)
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
    
    getDifficultyName() {
        switch (this.getDifficulty()) {
            case 0:
                return 'Könnyű'
            case 1:
                return 'Közepes'
            case 2:
                return 'Nehéz'
            default:
                return 'Ismeretlen'
        }
    }

    getDifficultyClass() {
        switch (this.getDifficulty()) {
            case 0:
                return 'text-bg-success'
            case 1:
                return 'text-bg-warning'
            case 2:
                return 'text-bg-danger'
            default:
                return ''
        }
    }


}