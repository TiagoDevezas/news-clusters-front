webpackJsonp([1],[,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"eventBus",function(){return f}),a.d(t,"localStore",function(){return h});var n=a(9),s=a(28),o=a.n(s),r=a(21),i=a(27),l=a.n(i),c=a(25),u=(a.n(c),a(24)),d=(a.n(u),a(22)),m=(a.n(d),a(23)),p=(a.n(m),a(26)),v=a.n(p),f=new n.a,h=v.a;n.a.use(l.a),new n.a({el:"#app",router:r.a,render:function(e){return e(o.a)}})},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(9),s=a(144),o=a(128),r=a.n(o);n.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"MainView",component:r.a}]})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,a){a(100);var n=a(0)(a(50),a(141),null,null);e.exports=n.exports},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";function n(e){return void 0!==s.localStore.get("params")&&s.localStore.get("params").lingoParams&&s.localStore.get("params").lingoParams.length?s.localStore.get("params").lingoParams:o[e]}t.a=n;var s=a(2),o={lingo:[{id:"desiredClusterCountBase",label:"Nº base de clusters",description:"Factor base usado para calcular o número de clusters.",defaultValue:5,storedValue:5,minValue:2,maxValue:50,step:1,type:"integer"},{id:"minClusterSize",label:"Nº mínimo de artigos por cluster",description:"Determina o número mínimo de artigos por cluster.",defaultValue:2,storedValue:2,minValue:1,maxValue:50,step:1,type:"integer"},{id:"maxWordDf",label:"Frequência máxima das palavras nos documentos",description:"Palavras que apareçam em mais do que o valor percentual deste atributo serão ignoradas. Um valor de 1.0 significa que todas as palavras serão levadas em conta, independentemente do número de documentos em que apareçam.",defaultValue:.01,storedValue:.01,minValue:.01,maxValue:1,step:.01,type:"float"},{id:"PhraseExtractor.dfThreshold",label:"Frequência limite das frases nos documentos",description:"Frases que apareçam em menos documentos do que o valor deste atributo serão ignoradas.",defaultValue:1,storedValue:1,minValue:1,maxValue:100,step:5,type:"integer"},{id:"CaseNormalizer.dfThreshold",label:"Frequência limite das palavras nos documentos",description:"Palavras que apareçam em menos documentos do que o valor deste atributo serão ignoradas.",defaultValue:1,storedValue:1,minValue:1,maxValue:100,step:5,type:"integer"}]}},function(e,t,a){"use strict";function n(e){return o.a.get(r,{params:e})}t.a=n;var s=a(29),o=a.n(s),r="http://irlab.fe.up.pt/p/mediaviz/api/clusters"},function(e,t,a){"use strict";function n(e){var t=void 0;return void 0!==s.localStore.get("sources")?s.localStore.get("sources").sources&&s.localStore.get("sources").sources.length&&(t=s.localStore.get("sources").sources):t=o.filter(function(t){return t.type===e}).map(function(e){return{name:e.name,selected:!0}}),t}t.a=n;var s=a(2),o=[{name:"31 da Armada",type:"blogs",acronym:"31daarmada"},{name:"A Bola",type:"national",acronym:"abola"},{name:"AEIOU",type:"archive",acronym:"aeiou"},{name:"Al Jazeera English",type:"international",acronym:"aljazeeraen"},{name:"Antena 1",type:"national",acronym:"antena1"},{name:"Aspirina B",type:"blogs",acronym:"aspirinab"},{name:"Associated Press",type:"international",acronym:"ap"},{name:"Aventar",type:"blogs",acronym:"aventar"},{name:"BBC",type:"international",acronym:"bbc"},{name:"Blasfémias",type:"blogs",acronym:"blasfemias"},{name:"Corporações",type:"blogs",acronym:"corporacoes"},{name:"Correio da Manhã",type:"national",acronym:"cm"},{name:"Corta-Fitas",type:"blogs",acronym:"cortafitas"},{name:"Destak",type:"archive",acronym:"destak"},{name:"Diário Digital",type:"national",acronym:"dd"},{name:"Diário de Notícias",type:"national",acronym:"dn"},{name:"Do Portugal Profundo",type:"blogs",acronym:"doportugalprofundo"},{name:"Económico",type:"national",acronym:"economico"},{name:"El Mundo",type:"international",acronym:"elmundo"},{name:"El País",type:"international",acronym:"elpais"},{name:"Euronews",type:"international",acronym:"euronews"},{name:"Expresso",type:"national",acronym:"expresso"},{name:"Folha de São Paulo",type:"research",acronym:"folhasp"},{name:"Futebol 365",type:"archive",acronym:"futebol365"},{name:"Globo G1",type:"research",acronym:"g1"},{name:"JPN",type:"archive",acronym:"jpn"},{name:"Jornal Digital",type:"archive",acronym:"jornaldigital"},{name:"Jornal de Negócios",type:"national",acronym:"negocios"},{name:"Jornal de Notícias",type:"national",acronym:"jn"},{name:"Jugular",type:"blogs",acronym:"jugular"},{name:"Ladrões de Bicicletas",type:"blogs",acronym:"ladroesdebicicletas"},{name:"Maisfutebol",type:"national",acronym:"maisfutebol"},{name:"New York Times",type:"international",acronym:"nyt"},{name:"Notícias ao Minuto",type:"archive",acronym:"noticiasaominuto"},{name:"O Insurgente",type:"blogs",acronym:"insurgente"},{name:"O JUMENTO",type:"blogs",acronym:"ojumento"},{name:"O Jogo",type:"national",acronym:"ojogo"},{name:"OJE",type:"archive",acronym:"oje"},{name:"Observador",type:"national",acronym:"observador"},{name:"P3",type:"national",acronym:"p3"},{name:"PT Jornal",type:"archive",acronym:"ptjornal"},{name:"Portadaloja",type:"blogs",acronym:"portadaloja"},{name:"Porto Canal",type:"national",acronym:"portocanal"},{name:"Porto24",type:"archive",acronym:"porto24"},{name:"Portugal dos Pequeninos",type:"blogs",acronym:"portugaldospequeninos"},{name:"Público",type:"national",acronym:"publico"},{name:"RTP",type:"national",acronym:"rtp"},{name:"Record",type:"national",acronym:"record"},{name:"Relvado",type:"archive",acronym:"relvado"},{name:"Renascença",type:"national",acronym:"renascenca"},{name:"Reuters",type:"international",acronym:"reuters"},{name:"SAPO Desporto",type:"national",acronym:"sapodesporto"},{name:"SAPO Notícias",type:"national",acronym:"saponoticias"},{name:"SIC Notícias",type:"national",acronym:"sicn"},{name:"Sol",type:"national",acronym:"sol"},{name:"Spiegel International",type:"international",acronym:"spiegelinternational"},{name:"Sábado",type:"national",acronym:"sabado"},{name:"TSF",type:"national",acronym:"tsf"},{name:"TVI24",type:"national",acronym:"tvi24"},{name:"The Economist",type:"international",acronym:"economist"},{name:"The Guardian",type:"international",acronym:"guardian"},{name:"The Wall Street Journal",type:"international",acronym:"wsj"},{name:"UOL",type:"research",acronym:"uol"},{name:"VAI E VEM",type:"blogs",acronym:"vaievem"},{name:"Visão",type:"national",acronym:"visao"},{name:"Washington Post",type:"international",acronym:"wpost"},{name:"iOnline",type:"national",acronym:"jornali"},{name:"zerozero",type:"archive",acronym:"zerozero"}]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),s=a(114),o=a.n(s);t.default={props:{params:{type:Array}},data:function(){return{infoIcon:o.a}},updated:function(){n.eventBus.$emit("algoParamsUpdated",this.params)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pickerOpts:{defaultDate:this.$route.query.day?this.$route.query.day:(new Date).toISOString().slice(0,10),minDate:"2014-12-05",maxDate:(new Date).toISOString().slice(0,10),onChange:function(e,t,a){t!==this.$route.query.day&&this.setRouteQuery(t)}.bind(this),locale:{weekdays:{shorthand:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],longhand:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]},months:{shorthand:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],longhand:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},rangeSeparator:" até "}}}},methods:{setRouteQuery:function(e){this.$router.push({query:{day:e}})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{label:{type:String},sourceList:{type:Array}},data:function(){return{sliderOpen:!1}},methods:{toggleSlider:function(){this.sliderOpen=!this.sliderOpen}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);t.default={props:{itemLabels:{type:Array}},data:function(){return{selectedLabel:"",sortParams:"",open:!1}},methods:{setDefaultLabel:function(){this.selectedLabel?this.selectedLabel:this.selectedLabel=this.itemLabels[0].label},toggleDropdown:function(){this.open=!this.open},selectLabel:function(e,t){e!==this.selectedLabel&&(this.selectedLabel=e,this.sortParams=t,n.eventBus.$emit("sortClusters",this.sortParams)),this.toggleDropdown()}},mounted:function(){this.setDefaultLabel()}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),s=a(125),o=a.n(s),r=a(116),i=a.n(r);t.default={props:{sourceList:{type:Array},algorithmParams:{type:Array}},components:{SourcesCheckboxes:o.a,AlgorithmParams:i.a},data:function(){return{currentView:"sources",sourcesSet:[]}},methods:{setCurrentView:function(e){this.currentView=e},updateSettings:function(){n.localStore.set("sources",{sources:this.sourcesSet}),n.localStore.set("params",{lingoParams:this.algorithmParams}),n.eventBus.$emit("settingsChanged",0),n.eventBus.$emit("fetchNewData")},cancelSettings:function(){n.eventBus.$emit("settingsCanceled",0),n.eventBus.$emit("fetchNewData")}},mounted:function(){var e=this;n.eventBus.$on("sourcesUpdated",function(t){e.sourcesSet=t})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(122),s=a.n(n),o=a(123),r=a.n(o);t.default={props:{items:{type:Array},labels:{type:Array}},components:{ItemMain:s.a,ItemRelated:r.a},computed:{mainItem:function(){return this.items[0]},relatedItems:function(){return this.items.slice(1,this.items.length)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{itemMainData:{type:Object}},data:function(){return{showSnippet:!1}},methods:{displaySnippet:function(){this.showSnippet=!0},hideSnippet:function(){this.showSnippet=!1}},computed:{truncateSummary:function(){var e=this.itemMainData.summary;return e<=140?e+" ...":e.substr(0,e.lastIndexOf(" ",140))+" ..."},formatDate:function(){return this.itemMainData.pub_date.slice(0,10)+" - "+this.itemMainData.pub_date.slice(11,16)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{itemRelatedData:{type:Array}},data:function(){return{activeItemIndex:""}},methods:{showSnippet:function(e){this.activeItemIndex=e},hideSnippet:function(e){this.activeItemIndex=""}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);t.default={props:{labels:{type:Array}},data:function(){return{selectedLabel:"",labelClicked:!1}},methods:{filterClusters:function(e){this.selectedLabel=this.selectedLabel!==e?e:"",this.labelClicked=this.selectedLabel===e,n.eventBus.$emit("labelClicked",this.selectedLabel)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);t.default={props:{sourceList:{type:Array}},updated:function(){n.eventBus.$emit("sourcesUpdated",this.sourceList)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{tabLabel:{type:String},href:{type:String}},data:function(){return{show:!1,tabIndex:null}},methods:{setIndex:function(e){this.tabIndex=e},showContent:function(e){this.show=e}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);t.default={data:function(){return{activeIndex:0,tabs:[]}},mounted:function(){var e=this;this.tabs=this.$children;for(var t=0;t<this.tabs.length;t++)this.tabs[t].setIndex(t);this.setActive(this.activeIndex),n.eventBus.$on("settingsChanged",function(t){e.clickOnTab(t)}),n.eventBus.$on("settingsCanceled",function(t){e.clickOnTab(t)}),n.eventBus.$on("showInfo",function(t){e.clickOnTab(t)})},methods:{setActive:function(e){var t=this;this.activeIndex=e,this.tabs[e].showContent(),this.tabs.forEach(function(e){e.tabIndex===t.activeIndex?e.showContent(!0):e.showContent(!1)})},clickOnTab:function(e){this.$refs.tabIndex[e].click()}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(64),s=a.n(n),o=a(48),r=a(49),i=a(47),l=a(2),c=a(121),u=a.n(c),d=a(117),m=a.n(d),p=a(124),v=a.n(p),f=a(119),h=a.n(f),y=a(118),b=a.n(y),_=a(127),g=a.n(_),C=a(126),x=a.n(C),w=a(120),I=a.n(w),P=a(115),D=a.n(P);t.default={components:{ItemCluster:u.a,DatePicker:m.a,LabelList:v.a,DropdownSorter:h.a,DropdownSlider:b.a,TabsContainer:g.a,TabItem:x.a,EditSettings:I.a,AlgorithmInformation:D.a},data:function(){return{clusters:[],filteredClusters:[],labels:[],sources:[],algorithmParams:[],loading:!0,dropdownLabels:[{label:"Pontuação: mais alta",sort:["score","desc"]},{label:"Pontuação: mais baixa",sort:["score","asc"]},{label:"Data: mais recente",sort:["date","desc"]},{label:"Data: mais antiga",sort:["date","asc"]}]}},mounted:function(){var e=this;this.fetchData(),l.eventBus.$on("labelClicked",function(t){e.showClusterForLabel(t)}),l.eventBus.$on("sortClusters",function(t){e.sortClusters(t)}),l.eventBus.$on("fetchNewData",function(){e.fetchData()})},watch:{"$route.query":"fetchData"},methods:{fetchData:function(){var e=this;this.loading=!0,this.sources=a.i(r.a)("national"),this.algorithmParams=a.i(i.a)("lingo");var t=this.$route.query,n={lingo:this.algorithmParams},l=this.sources.filter(function(e){return e.selected}).map(function(e){return e.name}),c=this.sources.filter(function(e){return!e.selected}).map(function(e){return e.name}),u={sourcesToShow:l,sourcesToHide:c},d=s()(t,u,n);a.i(o.a)(d).then(function(t){e.clusters=t.data.clusters.filter(function(e){return e.labels[0].split(" ").length>1}),e.filteredClusters=e.clusters,e.labels=e.getLabelsFromClusters(e.clusters),e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},showInfo:function(){l.eventBus.$emit("showInfo",2)},sortClusters:function(e){var t=e[0],a=e[1];this.clusters.sort(function(e,n){return"score"===t?"asc"===a?e.score-n.score:n.score-e.score:"date"===t?"asc"===a?Date.parse(e.latest_date)-Date.parse(n.latest_date):Date.parse(n.latest_date)-Date.parse(e.latest_date):void 0})},getLabelsFromClusters:function(e){return[].concat.apply([],e.map(function(e){return e.labels}))},showClusterForLabel:function(e){e.length?this.filteredClusters=this.clusters.filter(function(t){return t.labels[0]===e}):this.filteredClusters=this.clusters}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+CiAgICA8bGluZSB4MT0iMTIiIHkxPSIxNiIgeDI9IjEyIiB5Mj0iMTIiLz4KICAgIDxsaW5lIHgxPSIxMiIgeTE9IjgiIHgyPSIxMiIgeTI9IjgiLz4KPC9zdmc+Cg=="},function(e,t,a){var n=a(0)(null,a(140),null,null);e.exports=n.exports},function(e,t,a){a(101);var n=a(0)(a(51),a(142),"data-v-bb879702",null);e.exports=n.exports},function(e,t,a){a(102);var n=a(0)(a(52),a(143),"data-v-f4b51cbc",null);e.exports=n.exports},function(e,t,a){a(96);var n=a(0)(a(53),a(134),"data-v-48b1ae18",null);e.exports=n.exports},function(e,t,a){a(92);var n=a(0)(a(54),a(129),"data-v-0a6579fc",null);e.exports=n.exports},function(e,t,a){a(95);var n=a(0)(a(55),a(133),"data-v-4609b813",null);e.exports=n.exports},function(e,t,a){a(93);var n=a(0)(a(56),a(130),"data-v-10a7e5de",null);e.exports=n.exports},function(e,t,a){a(97);var n=a(0)(a(57),a(137),"data-v-742766b2",null);e.exports=n.exports},function(e,t,a){a(99);var n=a(0)(a(58),a(139),"data-v-7e0e16c2",null);e.exports=n.exports},function(e,t,a){var n=a(0)(a(59),a(136),null,null);e.exports=n.exports},function(e,t,a){var n=a(0)(a(60),a(131),null,null);e.exports=n.exports},function(e,t,a){a(98);var n=a(0)(a(61),a(138),null,null);e.exports=n.exports},function(e,t,a){var n=a(0)(a(62),a(135),null,null);e.exports=n.exports},function(e,t,a){a(94);var n=a(0)(a(63),a(132),"data-v-3bf81462",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[{active:e.open},"dropdown"]},[a("a",{staticClass:"btn btn-primary",on:{click:function(t){t.preventDefault(),e.toggleDropdown(t)}}},[e._v("\n    "+e._s(e.selectedLabel)+" "),a("i",{staticClass:"icon icon-caret"})]),e._v(" "),a("ul",{class:[{hide:!e.open},"menu"]},e._l(e.itemLabels,function(t){return a("li",{staticClass:"menu-item"},[a("a",{class:[t.label===e.selectedLabel?"active":""],attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.selectLabel(t.label,t.sort)}}},[e._v(e._s(t.label))])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cluster"},[a("item-main",{attrs:{"item-main-data":e.mainItem}}),e._v(" "),a("item-related",{attrs:{"item-related-data":e.relatedItems}}),e._v(" "),a("div",{staticClass:"line-separator"})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},e._l(e.sourceList,function(t){return a("div",{staticClass:"form-group col-6"},[a("label",{staticClass:"form-switch"},[a("input",{attrs:{type:"checkbox"},domProps:{value:t.name,checked:t.selected},on:{click:function(e){t.selected=!t.selected}}}),e._v(" "),a("i",{staticClass:"form-icon"}),e._v(" "+e._s(t.name)+"\n      ")])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-main"},[a("div",{staticClass:"clusters"},[a("div",{staticClass:"container grid-980"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-overlay"},[e._v("A criar página...")]),e._v(" "),a("div",{staticClass:"columns"},[a("label-list",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{labels:e.labels}}),e._v(" "),a("div",{staticClass:"column col-7 col-sm-12"},[a("tabs-container",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[a("tab-item",{attrs:{"tab-label":"Notícias",href:"#"}},[a("h1",[e._v("As principais notícias de "),a("date-picker"),e._v(" *")],1),e._v(" "),a("p",{staticClass:"indication-algorithm"},[e._v("* segundo um "),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.showInfo(t)}}},[a("strong",[e._v("algoritmo")])])]),e._v(" "),a("dropdown-sorter",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{"item-labels":e.dropdownLabels}}),e._v(" "),e._l(e.filteredClusters,function(t){return a("item-cluster",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{items:t.items,labels:t.labels}})})],2),e._v(" "),a("tab-item",{attrs:{"tab-label":"Definições",href:"#"}},[a("edit-settings",{attrs:{"source-list":e.sources,"algorithm-params":e.algorithmParams}})],1),e._v(" "),a("tab-item",{attrs:{"tab-label":"Informação",href:"#"}},[a("algorithm-information")],1)],1)],1)],1)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"edit-settings"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"side-nav column col-3"},[a("ul",{staticClass:"nav"},[a("li",{staticClass:"nav-item",class:{active:"sources"===e.currentView}},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentView="sources"}}},[e._v("Fontes")])]),e._v(" "),a("li",{staticClass:"nav-item",class:{active:"algorithm"===e.currentView}},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentView="algorithm"}}},[e._v("Algoritmo")])])])]),e._v(" "),a("div",{staticClass:"settings-content column col-9"},[a("sources-checkboxes",{directives:[{name:"show",rawName:"v-show",value:"sources"===e.currentView,expression:"currentView === 'sources'"}],attrs:{"source-list":e.sourceList}}),e._v(" "),a("algorithm-params",{directives:[{name:"show",rawName:"v-show",value:"algorithm"===e.currentView,expression:"currentView === 'algorithm'"}],attrs:{params:e.algorithmParams}})],1)]),e._v(" "),a("div",{staticClass:"settings-submit"},[a("div",[a("button",{staticClass:"btn btn-primary",on:{click:e.updateSettings}},[e._v("Guardar")]),e._v(" "),a("button",{staticClass:"btn btn-link",on:{click:e.cancelSettings}},[e._v("Cancelar")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropdown"},[a("div",{staticClass:"slider-wrapper"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#",tabindex:"0"},on:{click:function(t){t.preventDefault(),e.toggleSlider(t)}}},[e._v("\n      "+e._s(e.label)+" "),a("i",{staticClass:"icon icon-caret"})]),e._v(" "),a("div",{class:[{visible:e.sliderOpen},"slider-content"]},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},e._l(e.sourceList,function(t){return a("div",{staticClass:"form-group col-3"},[a("label",{staticClass:"form-switch"},[a("input",{attrs:{type:"checkbox",checked:"true"}}),e._v(" "),a("i",{staticClass:"form-icon"}),e._v(" "+e._s(t)+"\n            ")])])}))])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"tab"},e._l(e.tabs,function(t,n){return a("li",{class:[{active:n===e.activeIndex},"tab-item"]},[a("a",{ref:"tabIndex",refInFor:!0,attrs:{href:t.href},on:{click:function(t){t.preventDefault(),e.setActive(n)}}},[e._v(e._s(t.tabLabel))])])})),e._v(" "),a("div",[e._t("default")],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column col-3 col-sm-12"},[a("ul",{staticClass:"menu"},[e._m(0),e._v(" "),a("li",{staticClass:"divider"}),e._v(" "),e._l(e.labels,function(t){return a("li",{staticClass:"menu-item"},[a("a",{class:[e.selectedLabel===t&&e.labelClicked?"active":""],attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.filterClusters(t)}}},[e._v(e._s(t))])])})],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"menu-item"},[a("strong",[e._v("Tópicos")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-main"},[a("div",{staticClass:"item-main-source"},[e._v(e._s(e.itemMainData.source_name)+" · "+e._s(e.formatDate))]),e._v(" "),a("div",{staticClass:"popover"},[a("h1",[a("a",{attrs:{href:e.itemMainData.url}},[a("span",{domProps:{innerHTML:e._s(e.itemMainData.title)}})])]),e._v(" "),a("div",{staticClass:"popover-container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("span",{domProps:{innerHTML:e._s(e.truncateSummary)}})])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-related"},[a("span",[e._v("Mais: ")]),e._v(" "),e._l(e.itemRelatedData,function(t,n){return a("div",{staticClass:"popover popover-top"},[a("a",{attrs:{href:t.url}},[e._v(e._s(t.source_name))]),e._v(e._s(n<e.itemRelatedData.length-1?", ":"")+"\n    \n    "),a("div",{staticClass:"popover-container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"card-title",domProps:{innerHTML:e._s(t.title)}})]),e._v(" "),a("div",{staticClass:"card-body"},[a("span",{staticClass:"item-related-summary",domProps:{innerHTML:e._s(t.summary)}})])])])])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column"},[a("h4",[e._v("Algoritmo")]),e._v(" "),a("p",[e._v("A lista de notícias apresentada foi gerada pelo Lingo, um algoritmo que faz parte da framework open-source "),a("a",{attrs:{href:"https://project.carrot2.org/"}},[e._v("Carrot2")]),e._v(".")]),e._v(" "),a("h4",[e._v("Como funciona?")]),e._v(" "),a("p",[e._v("O funcionamento do algoritmo Lingo pode ser descrito, de forma simplificada, como uma sequência de 4 passos.")]),e._v(" "),a("h5",[e._v("Pré-processamento")]),e._v(" "),a("p",[e._v("Em primeiro lugar, as notícias são pré-processadas. Nesta fase são aplicadas ao texto técnicas como a "),a("i",[e._v("tokenização")]),e._v(" - transformar o texto numa lista de palavras individuais -, a "),a("i",[e._v("stemização")]),e._v(" - reduzir palavras flexionadas ao seu tronco -, e a remoção de "),a("i",[e._v("stop words")]),e._v(" - as palavras mais comuns de uma língua. O objectivo é reduzir a lista de unidades de texto a analisar sem afectar a relevância.")]),e._v(" "),a("h5",[e._v("Extração de frases")]),e._v(" "),a("p",[e._v("Após o pré-processamento, são extraídas as frases mais frequentes do texto. Estas frases são usadas para determinar as "),a("i",[e._v("labels")]),e._v(' (os "Tópicos" que aparecem na barra lateral da aplicação) dos grupos de notícias ('),a("i",[e._v("clusters")]),e._v(").")]),e._v(" "),a("h5",[e._v("Descoberto do conteúdo dos "),a("i",[e._v("clusters")])]),e._v(" "),a("p",[e._v("Com base na proximidade entre as "),a("i",[e._v("labels")]),e._v(" identificadas e o texto dos documentos, o algoritmo determina quais os documentos a associar a cada "),a("i",[e._v("label")]),e._v(". Os documentos aos quais não é possível atribuir uma "),a("i",[e._v("label")]),e._v(" não são incluídos nos "),a("i",[e._v("clusters")]),e._v(".\n\n    ")]),a("h5",[e._v("Formação final dos "),a("i",[e._v("clusters")])]),e._v(" "),a("p",[e._v("Por fim, o algoritmo forma os "),a("i",[e._v("clusters")]),e._v(", avalia a pontuação de cada um, ordena-os, e exibe-os.")]),e._v(" "),a("h4",[e._v("Referências")]),e._v(" "),a("p",[e._v("As seguintes referências permitem inspecionar com maior detalhe o funcionamento do algoritmo:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.cs.put.poznan.pl/dweiss/site/publications/slides/iipwm2004-dweiss-lingo.pdf"}},[e._v("Lingo: Search Results Clustering Algorithm\nBased on Singular Value Decomposition (Presentation)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://pdfs.semanticscholar.org/34f5/4619167ea03f99f6e5706d31df16a80b15a2.pdf"}},[e._v("Lingo: Search results clustering algorithm based on singular value decomposition (Paper)")])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"col-8"},e._l(e.params,function(t){return a("div",{staticClass:"form-group"},[a("div",{staticClass:"icon-label"},[a("div",{staticClass:"popover popover-top"},[a("img",{staticClass:"info-icon",attrs:{src:e.infoIcon,alt:""}}),e._v(" "),a("div",{staticClass:"popover-container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body",domProps:{innerHTML:e._s(t.description)}})])])]),e._v(" "),a("label",{staticClass:"form-label"},[e._v("\n            "+e._s(t.label)+": "+e._s(t.storedValue)+"\n          ")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.storedValue,expression:"p.storedValue"}],staticClass:"slider",attrs:{id:t.id,type:"range",min:t.minValue,max:t.maxValue,step:t.step},domProps:{value:t.storedValue},on:{__r:function(e){t.storedValue=e.target.value}}})])}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"date-picker"},[a("Flatpickr",{attrs:{options:e.pickerOpts}})],1)},staticRenderFns:[]}}],[2]);
//# sourceMappingURL=app.464f52578f78902d5b94.js.map