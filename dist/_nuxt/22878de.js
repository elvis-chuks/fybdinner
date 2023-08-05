(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{316:function(t,n,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("5b7d8a2c",content,!0,{sourceMap:!1})},317:function(t,n,e){"use strict";e.r(n);e(25);var r={name:"PrimaryButton",props:{name:{type:String,default:"Contact Sales"}}},o=(e(318),e(22)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("button",{staticClass:"primary-btn"},[n("p",[t._v(t._s(t.name))])])}),[],!1,null,"ac4e3c78",null);n.default=component.exports},318:function(t,n,e){"use strict";e(316)},319:function(t,n,e){var r=e(44)((function(i){return i[1]}));r.push([t.i,"\n.primary-btn[data-v-ac4e3c78] {\n  /* width: 165px; */\n  padding: 16px 24px;\n  background: var(--grey-6);\n  cursor: pointer;\n  height: 50px;\n  color: var(--dark-purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  border: 1px solid var(--light-purple, #A29DAB);\n  letter-spacing: 0.5px;\n  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.10), 0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;\n}\n.primary-btn p[data-v-ac4e3c78] {\n  font-size: 15px;\n  font-weight: 500;\n}\n",""]),r.locals={},t.exports=r},320:function(t,n,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("0d6a002f",content,!0,{sourceMap:!1})},321:function(t,n,e){"use strict";e.r(n);var r=e(325),o=e(324),d=e.n(o),l=e(137),c={name:"TicketView",components:{secondaryButton:e(317).default,PrimaryButton:l.default},props:{fullname:{type:String,default:""},email:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},amount:{type:String,default:""},date:{type:String,default:""}},computed:{qrString:function(){var t=JSON.stringify({fullname:this.fullname,email:this.email,id:this.id,type:this.type});return"https://api.qrserver.com/v1/create-qr-code/?data=".concat(t,"&size=150x150")}},methods:{downloadTicket:function(){var html=document.getElementById("pdf");html.style.margin=30,d()(html,{useCORS:!0}).then((function(canvas){var img=canvas.toDataURL("image/png"),t=new r.a("p","px",[700,540]);t.addImage(img,"JPEG",20,20),t.save("test.pdf")}))}}},f=(e(322),e(22)),component=Object(f.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"wrapper",attrs:{id:"pdf"}},[n("div",{staticClass:"qr-code"},[n("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.fullname,expression:"fullname != ''"}],attrs:{src:t.qrString,alt:"",title:""}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"body"},[n("table",[n("tbody",[n("tr",[n("td",[t._v("Date")]),t._v(" "),n("td",[t._v(t._s(t.date))])]),t._v(" "),n("tr",[n("td",[t._v("Amount")]),t._v(" "),n("td",[t._v("₦"+t._s(t.amount))])]),t._v(" "),n("tr",[n("td",[t._v("Ticket type")]),t._v(" "),n("td",[t._v(t._s(t.type))])])])])]),t._v(" "),n("div",{staticClass:"ctas"},[n("secondary-button",{staticClass:"btn",attrs:{name:"Download Ticket"},nativeOn:{click:function(n){return t.downloadTicket.apply(null,arguments)}}}),t._v(" "),n("primary-button",{staticClass:"btn",attrs:{name:"Send to me"}})],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"top"},[n("h2",[t._v("Ticket purchased!")]),t._v(" "),n("p",[t._v("Check your mail, we just sent you a receipt of your ticket!")])])}],!1,null,"0e62d017",null);n.default=component.exports;installComponents(component,{SecondaryButton:e(317).default,PrimaryButton:e(137).default})},322:function(t,n,e){"use strict";e(320)},323:function(t,n,e){var r=e(44)((function(i){return i[1]}));r.push([t.i,"\n.wrapper[data-v-0e62d017] {\n  display: flex;\n  flex-direction: column;\n}\n.qr-code[data-v-0e62d017] {\n  display: flex;\n  align-items: center;\n}\n.qr-code img[data-v-0e62d017] {\n  margin: auto;\n  border-radius: 16px;\n  box-shadow: 0px 2px 6px 0px rgba(47, 43, 67, 0.1),\n    0px 4px 0px 0px rgba(234, 234, 234, 0.25) inset;\n  /* width: 150px; */\n}\n.top[data-v-0e62d017] {\n  margin: 40px auto;\n  text-align: center;\n  width: 80%;\n  /* background: rebeccapurple; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.top h2[data-v-0e62d017] {\n  font-size: 24px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n}\n.top p[data-v-0e62d017] {\n  color: #565c69;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 24px; /* 150% */\n  letter-spacing: -0.192px;\n  width: 250px;\n  margin-top: 10px;\n  word-spacing: 0.5px;\n}\n.body[data-v-0e62d017] {\n  margin-top: 10px;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid var(--untitled-g-5, #e5e7ef);\n  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),\n    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;\n  color: #7e8494;\n}\n.body table[data-v-0e62d017] {\n  /* background: rebeccapurple; */\n  width: 100%;\n}\ntr[data-v-0e62d017] {\n  height: 40px;\n}\ntr td[data-v-0e62d017] {\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.14px;\n}\ntr td[data-v-0e62d017]:nth-child(1) {\n  font-weight: 300;\n}\ntr td[data-v-0e62d017]:nth-child(2) {\n  display: flex;\n  justify-content: flex-end;\n  color: #303237;\n  font-weight: 500;\n}\n.ctas[data-v-0e62d017] {\n  display: flex;\n  gap: 10px;\n  margin-top: 30px;\n  width: 100%;\n  justify-content: space-between;\n}\n.btn[data-v-0e62d017] {\n  width: 100%;\n}\n",""]),r.locals={},t.exports=r},353:function(t,n,e){"use strict";e.r(n);e(14);var r=e(210),o={name:"Regular",components:{ticketView:e(321).default,Modal:r.default},data:function(){return{email:"",fullname:"",type:"",id:"",date:"",showModal:!0}},mounted:function(){""===this.$route.params.id&&this.$router.push("/"),this.id=this.$route.params.id,this.getTicket(this.$route.params.id)},methods:{createTicket:function(t){},getTicket:function(t){var n=this;fetch("https://fybdinner.fly.dev/".concat(t)).then((function(t){return t.json()})).then((function(data){if(!data.error){n.email=data.data.email,n.fullname=data.data.fullname,n.type=data.data.type;var t=new Date(data.data.created_at);n.date=t.toDateString()}}))}}},d=e(22),component=Object(d.a)(o,(function(){var t=this,n=t._self._c;return n("div",[1==t.showModal?n("modal",{on:{closeModal:function(n){t.showModal=!1}}},[n("ticket-view",{attrs:{id:t.id,fullname:t.fullname,email:t.email,type:t.type,amount:"5,000",date:t.date}})],1):t._e()],1)}),[],!1,null,"32a829aa",null);n.default=component.exports;installComponents(component,{TicketView:e(321).default,Modal:e(210).default})}}]);