class OhMyPi {
	constructor() {
		this.pi = document.getElementById('oh-my-pi')
		if (this.pi != null) {
			this.projects = document.getElementsByClassName('project')
			this.images = {}
			this.title = this.pi.getElementsByClassName('pi-title')[0]
			this.imageContainer = this.pi.getElementsByClassName('pi-image-parent')[0]
			this.image = this.pi.getElementsByClassName('pi-image')[0]
			this.color = this.pi.getElementsByClassName('pi-image-color')[0]
			this.preload()
			this.events()
		}
	}
	events() {
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
	setImage(slug) {
		this.image && this.imageContainer.removeChild(this.image)
		if (slug !== null) {
			this.image = this.imageContainer.appendChild(this.images[slug])
		} else {
			this.image = this.imageContainer.appendChild(this.images['default'])
		}
	}
	preload() {
		this.def = {
			class: this.image.getAttribute('class'),
			mask: this.image.getAttribute('mask'),
			x: this.image.getAttribute('x'),
			y: this.image.getAttribute('y'),
			width: this.image.getAttribute('width'),
			height: this.image.getAttribute('height')
		}
		for (let i = 0; i < this.projects.length; i++) {
			this.registerSvgImage(this.projects[i].dataset.project)
		}
		this.registerSvgImage('default')
	}
	registerSvgImage(url) {
		let img = document.createElementNS('http://www.w3.org/2000/svg', 'image')
		img.setAttribute('class', this.def.class)
		img.setAttribute('mask', this.def.mask)
		img.setAttribute('x', this.def.x)
		img.setAttribute('y', this.def.y)
		img.setAttribute('width', this.def.width)
		img.setAttribute('height', this.def.height)
		url === 'default'
			? img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#')
			: img.setAttributeNS(
					'http://www.w3.org/1999/xlink',
					'href',
					'/images/' + url + '/cover.jpg'
			  )
		this.images[url] = img
	}
}

module.exports = new OhMyPi()
