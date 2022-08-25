import { __decorate } from "tslib";
import { html, css, LitElement, customElement, property } from 'lit-element';
import { config } from './_config';
let SnapbotButton = 
// @ts-ignore
class SnapbotButton extends LitElement {
    constructor() {
        super();
        this.icon = config.icon;
        this.hash = '';
        this.preview = false;
        this.title = 'Estamos online!';
        this.message = 'Fala com o nosso robô';
        this.titleFeedback = 'Verifique seu WhatsApp!';
        this.messageFeedback = 'Já vamos te chamar por lá...';
        this.type = 'full';
        this.button = 'INICIAR ATENDIMENTO';
        this.textCancel = 'Não quero falar pelo WhatsApp!';
        this.accountNumber = '';
        this.cc = '55';
        this.styleClassSnapbotWhtasappIcon = '';
        this.styleClassContainerSnapbot = '';
        this.styleIdHeaderSnapbot = '';
        this.styleIdActionSnapbot = '';
        this.styleIdTituloSnapbot = '';
        this.styleIdMensagemSnapbot = '';
    }
    render() {
        return html `
      <img id="icon-wpp" @click="${this.__clickIcon}" src="${this.icon}" 
        class="snapbot-whtasapp-icon" 
        width="90px" 
        style="opacity: 0; ${this.styleClassSnapbotWhtasappIcon}"
      >

      <div id="container-snapbot" style="${this.styleClassContainerSnapbot}">
        <div id="header-snapbot" style="${this.styleIdHeaderSnapbot}">
          <div id="detalhe-snapbot"></div>
          <img src="${this.icon}" id="snapbot-icon">
          <div id="text-content-snapbot">
            <p id="titulo-snapbot" style="${this.styleIdTituloSnapbot}">${this.title}</p>
            <p id="mensagem-snapbot" style="${this.styleIdMensagemSnapbot}">${this.message}</p>
          </div>
            
        </div>
        <div id="content">
          <form @submit="${this.__submit}" action="post">
            <input name="name" type="text" id="name-snapbot" placeholder="Nome" required>
            <input name="phone" @keyup="${this.__mascara}" maxlength="15" type="tel" pattern="[(][0-9]{2}[)][ ][0-9]{4}[-][0-9]{4,}" name="phonenumber-snapbot" placeholder="(99) 99999-9999" required>
            <button id="action-snapbot" class="shadow" style="${this.styleIdActionSnapbot}">${this.button}</button>
          </form>
          <div id="output-snapbot">
            <hr>
            <p @click="${this.__cancelForm}" id="text-output-snapbot">${this.textCancel}</p>
          </div>
        </div>
      </div>
    `;
    }
    firstUpdated() {
        if (!this.preview) {
            this.loadConfig();
        }
        else {
            this.loadPreview();
        }
    }
    loadPreview() {
        if (this.shadowRoot) {
            let butt = this.shadowRoot.getElementById('icon-wpp');
            this.__fadeIn(butt, 1);
        }
    }
    async loadConfig() {
        const result = await fetch(`${config.baseUrl}/widget/load`, {
            method: 'get',
            headers: {
                'X-HASH-Widget': this.hash,
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.status === 403) {
                throw new Error('Domínio não permitido.');
            }
            if (response.status === 404) {
                throw new Error('Widget não encontrado.');
            }
            if (response.status >= 500) {
                throw new Error('Falha no carregamento.');
            }
            return response;
        }).catch((err) => {
            console.log(err);
        });
        ;
        const data = await result.json();
        if (typeof data.data.configuration.type != 'undefined')
            this.type = data.data.configuration.type;
        if (typeof data.data.configuration.title != 'undefined')
            this.title = data.data.configuration.title;
        if (typeof data.data.configuration.message != 'undefined')
            this.message = data.data.configuration.message;
        if (typeof data.data.configuration.button != 'undefined')
            this.button = data.data.configuration.button;
        if (typeof data.data.configuration.textCancel != 'undefined')
            this.textCancel = data.data.configuration.textCancel;
        if (typeof data.data.configuration.icon != 'undefined')
            this.icon = data.data.configuration.icon;
        if (typeof data.data.configuration.titleFeedback != 'undefined')
            this.titleFeedback = data.data.configuration.titleFeedback;
        if (typeof data.data.configuration.messageFeedback != 'undefined')
            this.messageFeedback = data.data.configuration.messageFeedback;
        this.accountNumber = data.data.account_number;
        this.fillStyleConfigs(data.data.configuration);
        if (this.shadowRoot) {
            let butt = this.shadowRoot.getElementById('icon-wpp');
            this.__fadeIn(butt, 1);
        }
    }
    fillStyleConfigs(configs) {
        if (configs.styleClassSnapbotWhtasappIcon) {
            const snapbotWhatsappIcon = JSON.parse(configs.styleClassSnapbotWhtasappIcon);
            Object.keys(snapbotWhatsappIcon).forEach(prop => {
                const cssProp = `${prop}:${snapbotWhatsappIcon[prop]};`;
                this.styleClassSnapbotWhtasappIcon += cssProp;
            });
        }
        if (configs.styleClassContainerSnapbot) {
            const containerSnapbot = JSON.parse(configs.styleClassContainerSnapbot);
            Object.keys(containerSnapbot).forEach(prop => {
                const cssProp = `${prop}:${containerSnapbot[prop]};`;
                this.styleClassContainerSnapbot += cssProp;
            });
        }
        if (configs.styleIdHeaderSnapbot) {
            const headerSnapbot = JSON.parse(configs.styleIdHeaderSnapbot);
            Object.keys(headerSnapbot).forEach(prop => {
                const cssProp = `${prop}:${headerSnapbot[prop]};`;
                this.styleIdHeaderSnapbot += cssProp;
            });
        }
        if (configs.styleIdActionSnapbot) {
            const actionSnapbot = JSON.parse(configs.styleIdActionSnapbot);
            Object.keys(actionSnapbot).forEach(prop => {
                const cssProp = `${prop}:${actionSnapbot[prop]};`;
                this.styleIdActionSnapbot += cssProp;
            });
        }
        if (configs.styleIdTituloSnapbot) {
            const tituloSnapbot = JSON.parse(configs.styleIdTituloSnapbot);
            Object.keys(tituloSnapbot).forEach(prop => {
                const cssProp = `${prop}:${tituloSnapbot[prop]};`;
                this.styleIdTituloSnapbot += cssProp;
            });
        }
        if (configs.styleIdMensagemSnapbot) {
            const mensagemSnapbot = JSON.parse(configs.styleIdMensagemSnapbot);
            Object.keys(mensagemSnapbot).forEach(prop => {
                const cssProp = `${prop}:${mensagemSnapbot[prop]};`;
                this.styleIdMensagemSnapbot += cssProp;
            });
        }
    }
    async getLinkToRedirect() {
        let result = await fetch(`${config.baseUrl}${config.linkRedirect}`, {
            method: 'get',
            headers: {
                'X-HASH-Widget': this.hash,
                'Accept': 'application/json'
            }
        }).catch((err) => {
            console.log(err);
            return;
        });
        let data = await result.json();
        window.open(data.data.link);
    }
    async sendForm(form) {
        let formData = new FormData(form);
        formData.set('phone', `${this.cc}${formData.get('phone')}`);
        let result = await fetch(`${config.baseUrl}${config.linkActive}`, {
            method: 'post',
            headers: {
                'X-HASH-Widget': this.hash,
                'Accept': 'application/json'
            },
            body: formData
        }).catch((err) => {
            console.log(err);
            return;
        });
        await result.json();
        this.__sendForm();
    }
    __clickIcon(event) {
        switch (this.type) {
            case 'full':
                if (this.shadowRoot) {
                    let form = this.shadowRoot.getElementById('container-snapbot');
                    this.__fadeOut(event.target, 0.5);
                    this.__openForm(form, 0.5);
                }
                break;
            case 'basic':
                if (!this.preview) {
                    this.getLinkToRedirect();
                }
                break;
        }
    }
    __sendForm() {
        if (this.shadowRoot) {
            let form = this.shadowRoot.getElementById('container-snapbot');
            this.__closeForm(form, 0.5, 0, -305);
            let title = this.shadowRoot.getElementById('titulo-snapbot');
            let message = this.shadowRoot.getElementById('mensagem-snapbot');
            if (title) {
                this.__fadeOut(title, 0.5);
                title.innerHTML = this.titleFeedback;
                setTimeout(() => {
                    this.__fadeIn(title, 0.5);
                }, 500);
            }
            if (message) {
                this.__fadeOut(message, 0.5);
                message.innerHTML = this.messageFeedback;
                setTimeout(() => {
                    this.__fadeIn(message, 0.5);
                }, 500);
            }
            setTimeout(() => {
                this.__closeForm(form, 1, -305, -500);
            }, 3000);
        }
    }
    __cancelForm() {
        if (this.shadowRoot) {
            let icon = this.shadowRoot.getElementById('icon-wpp');
            let form = this.shadowRoot.getElementById('container-snapbot');
            this.__closeForm(form, 0.2);
            this.__fadeIn(icon, 0.5);
        }
    }
    __openForm(form, time = 0.5, startBottom = -500, endBottom = 0) {
        this.__fadeIn(form, time);
        let diff = startBottom - endBottom;
        if (diff < 0)
            diff *= -1;
        let timeByIncrement = ((1000 * time) / diff) * 10;
        let intervalo = setInterval(function () {
            if (startBottom >= endBottom) {
                clearInterval(intervalo);
            }
            else {
                startBottom += 10;
                form.style.bottom = `${startBottom}px`;
            }
        }, timeByIncrement);
    }
    __closeForm(form, time = 0.5, startBottom = 0, endBottom = -500) {
        let diff = startBottom - endBottom;
        if (diff < 0)
            diff *= -1;
        let timeByIncrement = ((1000 * time) / diff) * 10;
        let intervalo = setInterval(function () {
            if (startBottom <= endBottom) {
                clearInterval(intervalo);
            }
            else {
                startBottom -= 10;
                form.style.bottom = `${startBottom}px`;
            }
        }, timeByIncrement);
    }
    __fadeIn(element, time) {
        this.__processFade(element, time, 0, 100);
    }
    __fadeOut(element, time) {
        this.__processFade(element, time, 100, 0);
    }
    __processFade(element, time, initial, end) {
        let increment;
        if (initial == 0) {
            increment = 2;
            element.style.display = "block";
        }
        else {
            increment = -2;
        }
        let opc = initial;
        let intervalo = setInterval(function () {
            if ((opc == end)) {
                if (end == 0) {
                    element.style.display = "none";
                }
                clearInterval(intervalo);
            }
            else {
                opc += increment;
                element.style.opacity = opc / 100;
                element.style.filter = "alpha(opacity=" + opc + ")";
            }
        }, time * 10);
    }
    __mascara(event) {
        this.__telefone(event.target);
    }
    __telefone(element) {
        let value = element.value;
        value = value.replace(/\D/g, ""); //Remove tudo o que não é dígito
        value = value.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        value = value.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        element.value = value;
        return value;
    }
    __submit(event) {
        event.preventDefault();
        if (!this.preview) {
            if (this.shadowRoot) {
                let btn = this.shadowRoot.getElementById('action-snapbot');
                if (btn)
                    this.disabledElement(btn);
            }
            this.sendForm(event.target);
        }
        else
            this.previewSend();
    }
    previewSend() {
        this.__sendForm();
    }
    disabledElement(element) {
        element.disabled = true;
    }
    enbledElement(element) {
        element.disabled = false;
    }
};
SnapbotButton.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--snapbot-widget-text-color, #000);
    }

    .snapbot-whtasapp-icon{
      padding: 15px;
      position: fixed;
      right: 35px;
      bottom: 35px;
      cursor: pointer;
      -webkit-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -moz-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -ms-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -o-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
    }

    .snapbot-whtasapp-icon:hover{
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3);
      -ms-transform: scale(1.3);
      -o-transform: scale(1.3);
      transform: scale(1.3);
    }

    @media (pointer: coarse) {
      .snapbot-whtasapp-icon{
         width:20%;
         right: 5px;
         bottom: 5px;
      }
    }

    #container-snapbot{
      width: 320px;
      height: 400px;
      position: fixed;
      right: 25px;
      bottom: -500px;
      background: transparent;
      -webkit-box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      -moz-box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      font-family: 'Roboto', sans-serif !important;
      font-weight: 500;
    }

    #container-snapbot #header-snapbot{
      height: 7%;
      background: #00E676;
      padding: 7% 10% 15%;
      border-radius: 10px 10px 0px 0px;
      -moz-border-radius: 10px 10px 0px 0px;
      -webkit-border-radius: 10px 10px 0px 0px;
      border: 0px solid #000000;
      border-top-right-radius: 30px;
    }

    #container-snapbot #header-snapbot #detalhe-snapbot{
      width: 25px;
      height: 25px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 0;
      border-bottom-left-radius: 65px;
      border-top-right-radius: 65px;
    }

    #container-snapbot #header-snapbot #snapbot-icon{
      width: 20%;
      float: left;
    }

    #container-snapbot #header-snapbot #text-content-snapbot{
      width: 75%;
      float: left;
      height: 50px;
      padding: 8px 0 5px 5px;
    }

    #container-snapbot #header-snapbot #titulo-snapbot{
      text-align:left;
      font-size: 20px;
      letter-spacing: -1px;
      color: #fff;
      font-weight: bolder;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: Ellipsis;
    }

    #container-snapbot #header-snapbot #mensagem-snapbot{
      text-align:left;
      font-size: 14px;
      letter-spacing: -1px;
      color: #fff;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: Ellipsis;
    }

    #container-snapbot #header-snapbot .dark{
      color:#383838;
    }

    #container-snapbot #header-snapbot .white{
      color:#fff;
    }

    #container-snapbot #header-snapbot img{
      width: 100px;
    }

    #container-snapbot #content{
      height: 60%;
      background: #fff;
      padding: 10%;
    }

    #container-snapbot #content form input{
      width: 90%;
      height: 40px;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      padding: 0 5%;
      font-size: 16px;
    }

    #container-snapbot #content form input:focus{
      animation: treme 0.1s;
      animation-iteration-count: 2;
    }

    @keyframes treme {
      0% {margin-left: 0;}
      25% {margin-left: 2px;}
      50% {margin-left: 0;}
      75% {margin-left: -2px;}
      100% {margin-left: 0;}
   }

    #container-snapbot #content form #name-snapbot{
      margin-bottom: 10px;
    }

    #container-snapbot #content form #action-snapbot{
      width: 100%;
      height: 50px;
      background: #00BF54;
      font-size: 16px;
      padding: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #fff;
      margin-top: 5%;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      cursor: pointer;
    }

    #container-snapbot #content form #action-snapbot:hover{
      background: #00bf96;
    }

    #container-snapbot #content .shadow{
      -webkit-box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
      -moz-box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
      box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
    }

    #container-snapbot #content #output-snapbot{
      padding: 10% 0;
    }

    #container-snapbot #content #output-snapbot hr{
      width: 10%;
      text-align: center;
      opacity: 0.5;
    }

    #container-snapbot #content #output-snapbot #text-output-snapbot{
      text-align: center;
      font-size: 12px;
      opacity: 0.5;
      cursor: pointer;
    }

    #container-snapbot #content #output-snapbot #text-output-snapbot:hover{
      color: #00E676;
    }
  `;
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "hash", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "preview", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "title", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "message", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "titleFeedback", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "messageFeedback", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "type", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "button", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "textCancel", void 0);
__decorate([
    property({ type: Number })
], SnapbotButton.prototype, "accountNumber", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "cc", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleClassSnapbotWhtasappIcon", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleClassContainerSnapbot", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleIdHeaderSnapbot", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleIdActionSnapbot", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleIdTituloSnapbot", void 0);
__decorate([
    property({ type: String })
], SnapbotButton.prototype, "styleIdMensagemSnapbot", void 0);
SnapbotButton = __decorate([
    customElement('snapbot-button')
    // @ts-ignore
], SnapbotButton);
export { SnapbotButton };
//# sourceMappingURL=SnapbotButton.js.map