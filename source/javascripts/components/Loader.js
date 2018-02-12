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
    this.value = window.getComputedStyle(document.getElementsByClassName('turbolinks-progress-bar')[0])
                  .width
                  .replace(/\D+/g, '')
    this.border = document.getElementById('border')
    this.loader = document.getElementById('progress')
    this.event()
  }
  event () {
    this.loader.addEventListener('change', () => {
      alert('HE')
    })
  }
}

export default new Loader
