class Email {
  constructor() {
    this.container = document.getElementById('email')
    this.actions = document.getElementById('email-actions')
    if (this.container != null) {
      this.link = this.container.getElementsByClassName('copy')[0]
      this.copied = this.container.getElementsByClassName('copied')[0]
      this.content = this.createElement()
      this.events()
    }
  }

  events() {
    this.link.addEventListener('click', () => {
      this.content.select()
      document.execCommand('copy')
      this.copied.classList.add('visible')
      this.actions.style.display = 'none'
    })
    this.container.addEventListener('mouseleave', () => {
      this.copied.classList.remove('visible')
      this.actions.style.display = 'inline-block'
    })
  }

  createElement() {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = this.link.dataset.email
    input.style.position = 'fixed'
    input.style.left = '-100%'
    input.style.top = '-100%'
    input.style.opacity = '0'
    this.link.appendChild(input)
    return input
  }
}

module.exports = new Email()
