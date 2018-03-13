class Loader {
  constructor () {
    this.loader = document.getElementById('loader')
    if (this.loader != null) {
      this.progress = document.getElementById('progress')
      Turbolinks.setProgressBarDelay(200)
      this.event()
    }
  }
  event () {
    document.addEventListener('turbolinks:load', () => {
      this.startEvent()
    })
  }
  startEvent () {
    this.loader.classList.add('visible')
    this.engine()
  }
  stopEvent () {
    this.loader.classList.remove('visible')
  }
  engine () {
    let value = null,
        turboValue = null,
        backupValue = 0,
        width = 0
    let progress = setInterval(() => {
      turboValue = Turbolinks.controller.adapter.progressBar.value
      turboValue == null || turboValue == 1 ? value = backupValue : value = turboValue

      backupValue += .05
      width += 5
      this.progress.style.width = width + '%'
      if (value >= 1 && width >= 100) {
        clearInterval(progress)
        this.stopEvent()
      }
    }, 70)
  }
}

export default new Loader
