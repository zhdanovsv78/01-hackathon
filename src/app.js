import './styles.css'
import {ContextMenu} from "./menu";
import {TestModule} from './modules/test.module'
import {BackgroundModule} from "@/modules/background.module";
import {ClicksModule} from "@/modules/clicks.module";
import {ShapeModule} from "@/modules/shape.module";


console.log('working')

//CREATE MENU
const menu = new ContextMenu('ul')

//menu.el = <ul class="menu" id="menu"></ul>

//CREATE MODULES

const module_1  = new TestModule ('a', 'Test module')
const module_2  = new BackgroundModule ('a', 'Change color')
const module_3  = new ClicksModule ('a', 'Count cliks (for 3 sec)')
const module_4  = new ShapeModule ('a', 'Create a shape')
const modules = [module_1, module_2, module_3, module_4]

// ADD MODULES TO MENU IN HTML
menu.el.insertAdjacentHTML("beforeend", module_1.toHTML());
menu.el.insertAdjacentHTML("beforeend", module_2.toHTML());
menu.el.insertAdjacentHTML("beforeend", module_3.toHTML());
menu.el.insertAdjacentHTML("beforeend", module_4.toHTML());

// RIGHT CLICK LOGIC
menu.open();

//MENU CLICK LOGIC
menu.el.addEventListener('click', (event) =>{
    if (event.target.nodeName === 'LI'){
        const clickedText = event.target.outerText
        const clickedModule = modules.filter((element) =>{return element.text === clickedText})
        // console.log('clickedModule', clickedModule)

// TRIGGER LOGIC SHOULD BE HERE. TODO: trigger function

        clickedModule[0].trigger()
        menu.close()
    }

})

// menu.close()
