(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(n,t,e){"use strict";e.r(t);e(25);var r={name:"PrimaryButton",props:{name:{type:String,default:"Buy tickets"}}},o=(e(290),e(22)),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("Button",{staticClass:"primary-btn"},[t("p",[n._v(n._s(n.name))]),n._v(" "),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"}},[t("path",{attrs:{d:"M12.025 4.94165L17.0834 9.99998L12.025 15.0583",stroke:"white","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),n._v(" "),t("path",{attrs:{d:"M2.91669 10H16.9417",stroke:"white","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})])])}),[],!1,null,"2872974c",null);t.default=component.exports},191:function(n,t,e){var content=e(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(45).default)("6457360e",content,!0,{sourceMap:!1})},192:function(n,t,e){var content=e(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(45).default)("439d0214",content,!0,{sourceMap:!1})},193:function(n,t,e){var content=e(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(45).default)("8e6608be",content,!0,{sourceMap:!1})},194:function(n,t,e){var content=e(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(45).default)("0a150590",content,!0,{sourceMap:!1})},209:function(n,t,e){"use strict";var r=[function(){var n=this._self._c;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:e(286),alt:"NUESA"}}),this._v(" "),n("img",{attrs:{src:e(287),alt:"NAAS"}})])}],o={data:function(){return{showModal:!1}}},c=(e(288),e(22)),component=Object(c.a)(o,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"wrapper"},[t("header",[n._m(0),n._v(" "),t("div",{staticClass:"cta"},[t("primary-button",{nativeOn:{click:function(t){n.showModal=!0}}})],1)]),n._v(" "),t("modal",{directives:[{name:"show",rawName:"v-show",value:n.showModal,expression:"showModal"}],on:{closeModal:function(t){n.showModal=!1}}},[t("buy-ticket")],1),n._v(" "),t("Nuxt")],1)}),r,!1,null,"555a079e",null);t.a=component.exports;installComponents(component,{PrimaryButton:e(137).default,BuyTicket:e(211).default,Modal:e(210).default})},210:function(n,t,e){"use strict";e.r(t);var r={name:"ModalView",methods:{closeModal:function(){this.$emit("closeModal")}}},o=(e(296),e(22)),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"top"},[t("span",{staticClass:"close",on:{click:function(t){return n.closeModal()}}},[n._v("×")])]),n._v(" "),t("div",{staticClass:"modal-body"},[n._t("default")],2)])])}),[],!1,null,"0177c554",null);t.default=component.exports},211:function(n,t,e){"use strict";e.r(t);e(84),e(40);var r=[function(){var n=this._self._c;return n("div",{staticClass:"top"},[n("h3",[this._v("Buy FYB-Dinner tickets")])])},function(){var n=this._self._c;return n("div",{staticClass:"icon"},[n("img",{attrs:{src:e(292),alt:"ticket"}})])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"ticket-body"},[t("div",{staticClass:"ticket-body-top"},[t("p",[n._v("Regular (Solo ticket)")]),n._v(" "),t("p",[n._v("₦5,000")])]),n._v(" "),t("div",{staticClass:"ticket-description"},[t("p",[n._v("\n            This type of ticket will be used per person at entry. Select this\n            ticket option and proceed.\n          ")])])])},function(){var n=this._self._c;return n("div",{staticClass:"icon"},[n("img",{attrs:{src:e(293),alt:"ticket"}})])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"ticket-body"},[t("div",{staticClass:"ticket-body-top"},[t("p",[n._v("Me and Mine")]),n._v(" "),t("p",[n._v("₦8,000")])]),n._v(" "),t("div",{staticClass:"ticket-description"},[t("p",[n._v("\n            Duoble-end ticket. Select this\n            ticket option and proceed.\n            "),t("br"),n._v(" "),t("i",[n._v("Note: Not available for same-gender pairs and same-faculty pairs.")])])])])}],o={name:"BuyTicket",data:function(){return{regular1:!1,regular2:!1,regular1Link:"https://selar.co/kj6j30",regular2Link:"https://selar.co/1c12f3"}},methods:{selectTicket:function(n){switch(n){case"regular":this.regular1=!0,this.regular2=!1;break;case"me-and-mine":this.regular1=!1,this.regular2=!0}},buyTicket:function(){this.regular1?window.location.href=this.regular1Link:this.regular2?window.location.href=this.regular2Link:alert("select a ticket")}}},c=(e(294),e(22)),component=Object(c.a)(o,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"modal-wrapper"},[n._m(0),n._v(" "),t("div",{staticClass:"body"},[t("div",{class:["ticket-category",n.regular1?"selected":""],on:{click:function(t){return n.selectTicket("regular")}}},[n._m(1),n._v(" "),n._m(2),n._v(" "),t("div",{staticClass:"ticket-sign"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.regular1,expression:"regular1"}],attrs:{id:"ticket-check",type:"checkbox",name:"check"},domProps:{checked:Array.isArray(n.regular1)?n._i(n.regular1,null)>-1:n.regular1},on:{change:function(t){var e=n.regular1,r=t.target,o=!!r.checked;if(Array.isArray(e)){var c=n._i(e,null);r.checked?c<0&&(n.regular1=e.concat([null])):c>-1&&(n.regular1=e.slice(0,c).concat(e.slice(c+1)))}else n.regular1=o}}}),n._v(" "),t("span",{staticClass:"geekmark"})])]),n._v(" "),t("div",{class:["ticket-category",n.regular2?"selected-green":""],on:{click:function(t){return n.selectTicket("me-and-mine")}}},[n._m(3),n._v(" "),n._m(4),n._v(" "),t("div",{staticClass:"ticket-sign green"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.regular2,expression:"regular2"}],attrs:{id:"ticket-check",type:"checkbox",name:"check"},domProps:{checked:Array.isArray(n.regular2)?n._i(n.regular2,null)>-1:n.regular2},on:{change:function(t){var e=n.regular2,r=t.target,o=!!r.checked;if(Array.isArray(e)){var c=n._i(e,null);r.checked?c<0&&(n.regular2=e.concat([null])):c>-1&&(n.regular2=e.slice(0,c).concat(e.slice(c+1)))}else n.regular2=o}}})])]),n._v(" "),t("primary-button",{staticClass:"continue-btn",nativeOn:{click:function(t){return n.buyTicket()}}})],1)])}),r,!1,null,"7b6f5434",null);t.default=component.exports;installComponents(component,{PrimaryButton:e(137).default})},218:function(n,t,e){e(219),n.exports=e(220)},282:function(n,t,e){var content=e(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(45).default)("028393d5",content,!0,{sourceMap:!1})},283:function(n,t,e){var r=e(44),o=e(284),c=e(285),l=r((function(i){return i[1]})),d=o(c);l.push([n.i,':root {\n    --padding: 10vw;\n    --dark-grey: #303237;\n    --light-grey: #565C69;\n    --dark-purple: #1C1132;\n    --light-purple: #A29DAB;\n    --grey-6: #F3F3F5;\n}\n\n@font-face {\n    font-family: "Inter";\n    src: url('+d+');\n}\n\n*,\n*::before,\n*::after {\n    font-family: "Inter", Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: none !important;\n    -ms-overflow-style: none;\n    transition: all 0.3s;\n    scrollbar-width: none;\n}\n\n*::-webkit-scrollbar {\n    display: none;\n}\n\n@keyframes moveUp {\n    0% {\n        transform: translateY(150px);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n}\n\n@keyframes moveDown {\n    0% {\n        transform: translateY(0px);\n    }\n\n    100% {\n        transform: translateY(150px);\n    }\n}',""]),l.locals={},n.exports=l},285:function(n,t,e){n.exports=e.p+"fonts/Inter-VariableFont_slnt,wght.ba8d154.ttf"},286:function(n,t,e){n.exports=e.p+"img/nuesa.752f273.jpg"},287:function(n,t,e){n.exports=e.p+"img/naas.8567b91.jpg"},288:function(n,t,e){"use strict";e(191)},289:function(n,t,e){var r=e(44)((function(i){return i[1]}));r.push([n.i,"\n.wrapper[data-v-555a079e] {\n  width: 90%;\n  margin: auto;\n}\nheader[data-v-555a079e] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  align-items: center;\n}\n.logo[data-v-555a079e] {\n  display: flex;\n  justify-content: space-between;\n}\n.logo img[data-v-555a079e] {\n  width: 60px;\n}\n@media (max-width: 500px) {\n.cta[data-v-555a079e] {\n    display: none;\n}\n}\n",""]),r.locals={},n.exports=r},290:function(n,t,e){"use strict";e(192)},291:function(n,t,e){var r=e(44)((function(i){return i[1]}));r.push([n.i,"\n.primary-btn[data-v-2872974c] {\n  padding: 16px 24px;\n  background: var(--dark-grey);\n  cursor: pointer;\n  height: 50px;\n  color: white;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 14px;\n  border: 1px solid var(--light-grey);\n  letter-spacing: 0.5px;\n  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.10), 0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;\n}\n.primary-btn p[data-v-2872974c] {\n  font-size: 15px;\n}\n.primary-btn[data-v-2872974c]:hover {\n  gap: 20px;\n}\n",""]),r.locals={},n.exports=r},292:function(n,t,e){n.exports=e.p+"img/ticket.44c5c79.png"},293:function(n,t,e){n.exports=e.p+"img/green-ticket.efcebb9.png"},294:function(n,t,e){"use strict";e(193)},295:function(n,t,e){var r=e(44)((function(i){return i[1]}));r.push([n.i,'\n.top h3[data-v-7b6f5434] {\n  font-size: 30px;\n  font-weight: 420;\n  letter-spacing: 0.5px;\n}\n.body[data-v-7b6f5434] {\n  margin-top: 40px;\n}\n.ticket-category[data-v-7b6f5434] {\n  display: flex;\n  width: 100%;\n  border: 1px solid #bdc0ce;\n  border-radius: 16px;\n  padding: 20px 15px;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 15px;\n}\n\n/* .ticket-category:hover {\n  cursor: pointer;\n  background: #F4F5F8;\n  border: 1px solid var(--dark-grey)\n} */\n.selected[data-v-7b6f5434] {\n  cursor: pointer;\n  background: #F4F5F8;\n  border: 1px solid var(--dark-grey)\n}\n.selected-green[data-v-7b6f5434] {\n  cursor: pointer;\n  background: #E6F7E499;\n  border: 1px solid #20AF0B;\n}\n.icon img[data-v-7b6f5434] {\n  width: 68px;\n}\n.ticket-body-top[data-v-7b6f5434] {\n  display: flex;\n  justify-content: space-between;\n}\n.ticket-body-top p[data-v-7b6f5434] {\n  font-weight: 500;\n  font-size: 18px;\n  color: var(--dark-grey);\n}\n.ticket-description[data-v-7b6f5434] {\n  margin-top: 5px;\n}\n.ticket-description p[data-v-7b6f5434] {\n  font-size: 14px;\n  color: var(--light-purple);\n  line-height: 20px;\n}\n.ticket-sign[data-v-7b6f5434] {\n  width: 68px;\n  /* background: rebeccapurple; */\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.ticket-sign input[type="checkbox"][data-v-7b6f5434] {\n  accent-color: var(--dark-grey);\n  opacity: 0.1;\n  width: 18px;\n  height: 18px;\n}\n.ticket-sign input[type="checkbox"][data-v-7b6f5434]:checked {\n  accent-color: var(--dark-grey);\n  border-radius: 10px;\n  opacity: 1;\n}\n.ticket-sign.green input[type="checkbox"][data-v-7b6f5434]:checked {\n  accent-color: #20AF0B;\n  border-radius: 10px;\n  opacity: 1;\n  color: #fff !important;\n}\n.continue-btn[data-v-7b6f5434] {\n  width: 100%;\n  margin-top: 30px;\n  height: 55px;\n}\n@media (max-width: 500px) {\n.icon img[data-v-7b6f5434] {\n    width: 48px;\n}\n.ticket-body-top p[data-v-7b6f5434] {\n    font-size: 14px;\n}\n.ticket-description p[data-v-7b6f5434] {\n    font-size: 12px;\n}\n}\n\n',""]),r.locals={},n.exports=r},296:function(n,t,e){"use strict";e(194)},297:function(n,t,e){var r=e(44)((function(i){return i[1]}));r.push([n.i,"\n.modal[data-v-0177c554] {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.6);\n}\n.modal-content[data-v-0177c554] {\n  background-color: #fff;\n  margin: 80px auto;\n  padding: 0 30px 30px;\n  /* border: 1px solid #888; */\n  width: 508px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  animation: moveUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;\n  box-shadow: 0px 0px 0px 0px rgba(0, 2, 46, 0.10), 0px 9px 19px 0px rgba(0, 2, 46, 0.10), 0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05), 0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0.00);\n}\n.top[data-v-0177c554] {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    /* background: rebeccapurple; */\n    height: 80px;\n}\n.close[data-v-0177c554] {\n  color: var(--dark-purple);\n  font-size: 38px;\n  font-weight: 200;\n}\n.close[data-v-0177c554]:hover,\n.close[data-v-0177c554]:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n@media(max-width: 500px) {\n.modal-content[data-v-0177c554] {\n        width: 90%;\n}\n.modal-content[data-v-0177c554] {\n      margin: 20px auto;\n}\n}\n",""]),r.locals={},n.exports=r}},[[218,10,2,11]]]);