import { Home } from "./js/views/Home.js"
import {menu} from "./js/views/menu.js"
import {slider} from "./js/views/slider.js"


window.onload = ()=>{
    // AppMain.append(new Home())
    AppMain.append(new slider())
}