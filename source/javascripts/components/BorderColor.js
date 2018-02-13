class BorderColor {
  constructor () {
    this.border = document.getElementById('border')
    this.color = this.getColor()
    this.boxShadowData = this.parseBorderBox()
    this.colorEngine(this.color)
    this.projects = document.getElementsByClassName('project')
    this.projects != null ? this.projectsEvents() : null
  }
  getColor () {
    let sections = document.getElementsByTagName('section')
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].dataset.borderColor != null) {
        return sections[i].dataset.borderColor
      } else {
        return this.parseBorderBox(true)
      }
    }
  }
  colorEngine (color) {
    Turbolinks.clearCache()
    this.border.style.boxShadow = color + ' ' + this.boxShadowData
  }
  projectsEvents () {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i]
      project.addEventListener('mouseover', () => {
        this.colorEngine(project.dataset.borderColor)
      })
      project.addEventListener('mouseout', () => {
        this.colorEngine(this.color)
      })
    }
  }
  parseBorderBox (onlyColor = false) {
    let property = window.getComputedStyle(this.border).boxShadow.split(/ (?![^\(]*\))/)
    if (onlyColor == true) {
      return property[0]
    } else {
      return property.slice(1).join(' ')
    }
  }
}

export default new BorderColor
