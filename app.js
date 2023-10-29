import { Home } from "./js/views/Home.js"
import {menu} from "./js/views/menu.js"



window.onload = ()=>{
    AppMain.append(new Home())
    AppMain.append(new menu())
}