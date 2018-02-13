/*
WHAT IT HAS TODO ?

- Listen on the turbolinks bar value width change
=> Perhaps with listening if data-turbolinks-value as been added to the HTML ??
  - Z-INDEX the border to be in front of all
  - Display the loader view
  - Get the turbolinks value
  - Set it on this.loader during the progress
- On progress over
  - Hide the loader view
  - Z-INDEX the border to be in back of all


LISTENER ?
window.getComputedStyle(document.getElementsByClassName('turbolinks-progress-bar')[0]).width
-> Width of the turbolinks progress bar
*/

class Loader {
  constructor () {
    this.border = document.getElementById('border')
    this.loader = document.getElementById('loader')
    this.progress = document.getElementById('progress')
    this.event()
  }
  event () {
    document.addEventListener('turbolinks:request-start', () => {
      if (Turbolinks.controller.adapter.progressBar.value > 0) {
        this.border.style.zIndex = 1001
        this.loader.classList.add('visible')
        this.engine()
      }
    })
    document.addEventListener('turbolinks:request-end', () => {
      this.border.style.zIndex = -1
      this.loader.classList.remove('visible')
    })
  }
  engine () {
    let value,
        progress = null,
        width = 0

    progress = setInterval(() => {
      value = Turbolinks.controller.adapter.progressBar.value
      width += 5
      this.progress.style.width = width + '%'

      if (value >= 1) {
        clearInterval(progress)
        value = 0
      }
    }, 50)
  }
}

export default new Loader
