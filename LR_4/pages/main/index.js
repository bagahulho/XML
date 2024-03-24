import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    getData() {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            this.renderData(data.response)
        })
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
        const data = this.getData()
    
        const productPage = new ProductPage(this.parent)
        productPage.render(data[cardId - 1])
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        
        this.getData()
    }
}