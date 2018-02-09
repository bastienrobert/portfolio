class Loader {
  constructor () {
    this.value = Turbolinks.controller.adapter.progressBar.value
    this.loader = document.getElementById('progress')
    this.turbolinks = document.getElementsByClassName('turbolinks-progress-bar')[0]
    this.event()
  }
  event () {
    // this.turbolinks.addEventListener('change', () => {
    //   console.log(this.turbolinks.style)
    // })
  }
}

export default new Loader
