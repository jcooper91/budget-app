import '../styles/styles.css'

class testClass {

    constructor(id, note) {
        this.id = id
        this.note = note
    }

    init () {
        console.log(`${this.id}: ${this.note} this is the print method`)
    }
}
  
export default testClass 