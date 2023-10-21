import { Home } from "./js/views/Home.js"
import {Footer} from "./js/views/footer.js"
import {headerData} from "./js/views/header.data.js"
import {Logo} from "./js/views/logo.js"


window.onload = ()=>{
    AppMain.append(new Home())
    AppMain.append(new Footer())
    AppMain.append(new Logo())
    AppMain.append(new headerData())
}