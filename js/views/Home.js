//@ts-check
import { WRender, ComponentsManager, WAjaxTools, WArrayF } from "../WDevCore/WModules/WComponentsTools.js";
import { StylesControlsV2, StylesControlsV3, StyleScrolls } from "../WDevCore/StyleModules/WStyleComponents.js"
import { css } from "../WDevCore/WModules/WStyledRender.js";
/**
 * @typedef {Object} ComponentConfig
 * * @property {Object} [propierty]
 */
class Home extends HTMLElement {
    /**
     * 
     * @param {ComponentConfig} props 
     */
    constructor(props) {
        super();
        this.attachShadow({ mode: 'open' });     
        this.OptionContainer = WRender.Create({ className: "OptionContainer" });
        this.TabContainer = WRender.Create({ className: "TabContainer", id: 'TabContainer' });
        this.Manager = new ComponentsManager({ MainContainer: this.TabContainer, SPAManage: false });        
        this.shadowRoot?.append(this.CustomStyle);        
        this.shadowRoot?.append(
            StylesControlsV2.cloneNode(true),
            StyleScrolls.cloneNode(true),
            StylesControlsV3.cloneNode(true),
            this.OptionContainer,
            this.TabContainer
        );
        this.Draw();
    }
    Draw = async () => {
        this.SetOptions();
        //ejecuto la vista inicial
        this.firstPanel()

    }  
    SetOptions() {
        this.OptionContainer.append(WRender.Create({
            tagName: 'button', className: 'Block-Primary', innerText: 'Primer panel',
            onclick: async () => this.firstPanel()
        }))        
    }
   
    CustomStyle = css`
        .component{
           display: block;
        }           
    `

    firstPanel() {
        return this.Manager.NavigateFunction("id", WRender.Create({ className: "component", innerHTML: "HOME - Hola mundo" }));
    }
}
customElements.define('w-home', Home);
export { Home }