class Loader {
  constructor () {
    this.border = document.getElementById('border')
    this.loader = document.getElementById('loader')
    this.progress = document.getElementById('progress')
    this.event()
  }
  event () {
    document.addEventListener('turbolinks:load', () => {
      this.startEvent()
    })
    document.addEventListener('turbolinks:click', () => {
      this.startEvent()
    })
  }
  startEvent () {
    Turbolinks.clearCache()
    this.engine()
  }
  stopEvent () {
    this.border.style.zIndex = -1
    this.loader.classList.remove('visible')
  }
  engine () {
    let value = null,
        backupValue = 0,
        progress = null,
        width = 0

    progress = setInterval(() => {
      value = Turbolinks.controller.adapter.progressBar.value || backupValue
      if (value >= 1 ) {
        value = backupValue
      } else if (value > .05) {
        this.border.style.zIndex = 1001
        this.loader.classList.add('visible')
      }
      width += 5
      this.progress.style.width = width + '%'
      backupValue += .03
      if ((value >= 1 && width >= 100) || backupValue >= 4) {
        value = 0
        width = 0
        clearInterval(progress)
        this.stopEvent()
      }
    }, 70)
  }
}

export default new Loader
