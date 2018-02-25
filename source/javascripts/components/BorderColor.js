class BorderColor {
  constructor () {
    this.borders = document.getElementById('borders').getElementsByClassName('border')
    this.projects = document.getElementsByClassName('project')
    this.projects.length > 0 ? this.event() : null
  }
  event () {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i],
          color = project.dataset.borderColor
      console.log(color)
      project.addEventListener('mouseover', () => {
        this.engine(color)
      })
      project.addEventListener('mouseout', () => {
        this.engine(null)
      })
    }
  }
  engine (val) {
    for (let j = 0; j < this.borders.length; j++) {
      this.borders[j].style.backgroundColor = val
    }
  }
}

export default new BorderColor
