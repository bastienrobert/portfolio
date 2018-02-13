class Favicon {
  constructor () {
    this.time = this.formatTime()
    this.favicon = document.querySelector("link[rel*='icon']") || this.createFavicon()
    this.engine()
  }
  engine () {
    this.favicon.href = '/images/favicons/' + this.time + '.ico'
  }
  createFavicon () {
    let link = document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    document.getElementsByTagName('head')[0].appendChild(link)
    return link
  }
  formatTime () {
    let date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    hours = hours % 12
    minutes = minutes < 30 ? null : 5
    let strTime = hours
    strTime += (minutes != null ? '-' + minutes : '')
    return strTime
  }
}

export default new Favicon
