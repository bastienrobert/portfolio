class OhMyPi {
  constructor () {
    this.pi = document.getElementById('oh-my-pi')
    if (this.pi != null) {
      this.projects = document.getElementsByClassName('project')
      this.title = this.pi.getElementsByClassName('pi-title')[0]
      this.image = this.pi.getElementsByClassName('pi-image')[0]
      this.events()
    }
  }
  events () {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i]
      project.addEventListener('mouseover', () => {
        this.title.style.color = project.dataset.borderColor
        this.title.style.top = project.getBoundingClientRect().top + 'px'
        this.setImage(project.dataset.project)
        this.pi.classList.add('visible')
      })
      project.addEventListener('mouseout', () => {
        this.pi.classList.remove('visible')
      })
    }
  }
  setImage (slug) {
    this.image.src = '/images/' + slug + '/main.jpg'
    let x = document.documentElement.clientWidth - this.image.width
    let y = document.documentElement.clientHeight - this.image.height
    this.image.style.filter
    this.image.style.left = Math.random() * x + 'px'
    this.image.style.top = Math.random() * y + 'px'
  }
}

export default new OhMyPi
