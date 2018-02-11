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
*/

class Loader {
  constructor () {
    this.value = Turbolinks.controller.adapter.progressBar.value
    this.border = document.getElementById('border')
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
