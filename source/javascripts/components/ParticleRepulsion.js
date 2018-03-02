class ParticleRepulsion {
  constructor () {
    this.container = document.getElementById('repulsion')
    this.strength = 1000
    if (this.container != null) {
      this.dots = this.container.getElementsByTagName('circle')
      this.points = this.getPoints()
      this.event()
    }
  }
  getPoints () {
    return Array.from(this.dots, (el) => {
      return {
        circle: el,
        x: Number(el.getAttribute('cx')),
        y: Number(el.getAttribute('cy')),
        ox: Number(el.getAttribute('cx')),
        oy: Number(el.getAttribute('cy'))
      }
    })
  }
  event () {
    window.addEventListener('mousemove', (e) => {
      let x = e.pageX
      let y = e.pageY
      this.engine(x, y)
    })
  }
  engine (x, y) {
    let dx,
        dy,
        dist,
        angle
    this.points.forEach((el, i) => {
      // start repulsion calculation
      dx = el.x - x
      dy = el.y - y
      angle = Math.atan2(dy, dx)
      dist = this.strength / Math.sqrt(dx * dx + dy * dy)
      el.x += Math.cos(angle) * dist
      el.y += Math.sin(angle) * dist
      el.x += (el.ox - el.x) * .1
      el.y += (el.oy - el.y) * .1
      // end repulsion calculation
      el.circle.setAttribute('cx', el.x)
      el.circle.setAttribute('cy', el.y)
    })
    window.requestAnimationFrame(this.engine)
  }
}

export default new ParticleRepulsion
