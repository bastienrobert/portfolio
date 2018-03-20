class Loader {
  constructor () {
    this.loader = document.getElementById('loader')
    if (this.loader != null) {
      this.progress = document.getElementById('progress')
      this.engine()
    }
  }
  engine () {
    this.loader.classList.add('visible')
    let progress = setTimeout(() => {
      this.loader.classList.remove('visible')
      clearInterval(progress)
    }, 2000)
  }
}

module.exports = new Loader
