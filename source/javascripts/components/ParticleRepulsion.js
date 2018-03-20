class ParticleRepulsion {
  constructor () {
    this.container = document.getElementById('repulsion')
    this.strength = 800
    if (this.container != null) {
      this.points = this.getPoints()
      this.origin = {
        x: null,
        y: null
      }
      this.event()
      this.engine()
    }
  }
  getPoints () {
    return Array.from(this.container.getElementsByTagName('circle'), el => {
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
    document.addEventListener('mousemove', (e) => {
      this.updateOrigin(e)
    })
  }
  updateOrigin (e) {
    this.origin = {
      x: e.clientX,
      y: e.clientY - this.container.getBoundingClientRect().top
    }
  }
  engine () {
    let dx,
        dy,
        dist,
        angle
    this.points.forEach((el, i) => {
      dx = el.x - this.origin.x
      dy = el.y - this.origin.y
      angle = Math.atan2(dy, dx)
      dist = this.strength / Math.sqrt(dx * dx + dy * dy)
      el.x += Math.cos(angle) * dist
      el.y += Math.sin(angle) * dist
      el.x += (el.ox - el.x) * .1
      el.y += (el.oy - el.y) * .1
      el.circle.setAttribute('cx', el.x)
      el.circle.setAttribute('cy', el.y)
    })
    window.requestAnimationFrame(this.engine.bind(this))
  }
}

module.exports = new ParticleRepulsion
