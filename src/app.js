import './styles.css';
import { ContextMenu } from './menu';
import { TestModule } from './modules/test.module';
import { BackgroundModule } from '@/modules/background.module';
import { ClicksModule } from '@/modules/clicks.module';
import { ShapeModule } from '@/modules/shape.module';


//CREATE MENU
const menu = new ContextMenu('ul');


//CREATE MODULES
const module_1 = new TestModule('a', 'BURATINO!')
const module_2 = new BackgroundModule('a', 'Change color')
const module_3 = new ClicksModule('a', 'Count cliks (for 3 sec)')
const module_4 = new ShapeModule('a', 'Create a shape')
const modules = [module_1, module_2, module_3, module_4]

// ADD MODULES TO MENU IN HTML
modules.forEach((module) => {
	menu.add(module)
}
)

// RIGHT CLICK LOGIC
menu.open();

//MENU CLICK LOGIC
menu.el.addEventListener('click', (event) => {
	if (event.target.nodeName === 'LI') {
		const clickedText = event.target.outerText;
		const clickedModule = modules.filter((element) => {
			return element.text === clickedText;
		});

		clickedModule[0].trigger();
		menu.close();
	}
});

