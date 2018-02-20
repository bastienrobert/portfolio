class Loader {
  constructor () {
    this.border = document.getElementById('border')
    this.loader = document.getElementById('loader')
    this.progress = document.getElementById('progress')
    Turbolinks.setProgressBarDelay(200)
    this.event()
  }
  event () {
    document.addEventListener('turbolinks:load', () => {
      this.startEvent()
    })
  }
  startEvent () {
    this.border.style.zIndex = 1001
    this.loader.classList.add('visible')
    this.engine()
  }
  stopEvent () {
    this.border.style.zIndex = -1
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
