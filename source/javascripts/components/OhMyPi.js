class OhMyPi {
  constructor () {
    this.pi = document.getElementById('oh-my-pi')
    if (this.pi != null) {
      this.projects = document.getElementsByClassName('project')
      this.preload()
      this.title = this.pi.getElementsByClassName('pi-title')[0]
      this.image = this.pi.getElementsByClassName('pi-image')[0]
      this.color = this.pi.getElementsByClassName('pi-image-color')[0]
      this.events()
    }
  }
  events () {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i]
      project.addEventListener('mouseover', () => {
        this.title.innerHTML = project.getElementsByTagName('h2')[0].innerHTML
        this.title.style.color = project.dataset.borderColor
        this.color.style.fill = project.dataset.borderColor
        this.title.style.top = project.getBoundingClientRect().top + 'px'
        this.setImage(project.dataset.project)
        this.pi.classList.add('visible')
      })
      project.addEventListener('mouseout', () => {
        this.setImage(null)
        this.pi.classList.remove('visible')
      })
    }
  }
  setImage (slug) {
    if (slug != null) {
      slug = '/images/' + slug + '/cover.jpg'
    } else {
      slug = ''
    }
    this.image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', slug)
  }
  preload () {
    for (let i = 0; i < this.projects.length; i++) {
      let img = new Image()
      img.src = '/images/' + this.projects[i].dataset.project + '/cover.jpg'
    }
  }
}

export default new OhMyPi
