import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {

	trigger() {

		class Component {
			constructor(selector) {
				this.$el = document.querySelector(selector)
			}

			hide() {
				this.$el.style.display = 'none'
			}

			show() {
				this.$el.style.display = 'block'
			}
		}

		class Box extends Component {
			constructor(options) {
				super(options.selector)

				this.$el.style.height = this.$el.style.width = options.size + 'px'
				this.$el.style.background = options.color
				this.$el.style.top = options.posY + 'px'
				this.$el.style.left = options.posX + 'px'
				this.$el.style.position = 'relative'
			}
		}

		class Circle extends Box {
			constructor(options) {
				super(options)
				this.$el.style.borderRadius = '50%'
			}
		}


		const num = random(1, 3)

		switch (num) {
			case 1:
				const box1 = new Box({
					selector: '#box1',
					size: 200,
					color: 'green',
					posX: 100,
					posY: 200,

				})
				box1.show()
				break
			case 2:
				const box2 = new Box({
					selector: '#box1',
					size: 120,
					color: 'blue',
					posX: 100,
					posY: 100,
				})
				box2.show()
				break
			default:
				const circle1 = new Circle({
					selector: '#box1',
					size: 120,
					color: 'yellow',
					posX: 150,
					posY: 150,
				})
				circle1.show()
		}

		setTimeout(() => {
			const box = document.querySelector('#box1')
			box.style.display = 'none'
		}, 2000)





	}

}

