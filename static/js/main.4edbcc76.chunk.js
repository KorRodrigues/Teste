(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){e.exports=a(291)},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a(33),i=a(31),l=a(57),s=a(18),u=a(132),m=a.n(u),p=a(20),h=a(88),g=a(119),d=a(30),f=a(17);var b={baseUrl:"https://gateway.marvel.com",apiKey:"1a92684bc27ee9d6631c7bdd9a812433",itemsPerPage:20},E="/v1/public/characters";var O=function(e,t,a,n){var r="".concat(b.baseUrl).concat(E),o="?apikey=".concat(b.apiKey),c="&limit=".concat(b.itemsPerPage),i="&offset=".concat((e-1)*b.itemsPerPage),l=t?"&nameStartsWith=".concat(t):"",s="".concat(r).concat(o).concat(c).concat(i).concat(t).concat(l);fetch(s).then(function(e){return e.json()}).then(function(e){return a(e)}).catch(n)};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j={catalog:null,isRequestingCatalog:!1,catalogRequestError:null,page:parseInt(function(e,t){var a={};return t||(t=window.location.href),(t=(t=t.split("#")[0]).split("?")[1])?(t=(t="?"+t).replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,t,n){a[t]=void 0!==n?n:""}),e?a[e]?a[e]:null:a):e?"":a}("page"))||1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"heroCatalog/CATALOG_REQUESTED":return y({},e,{isRequestingCatalog:!0});case"heroCatalog/CATALOG":return y({},e,{catalog:t.catalog,isRequestingCatalog:!1});case"heroCatalog/CATALOG_REQUEST_ERROR":return y({},e,{catalog:t.catalog,catalogRequestError:t.catalogRequestError});case"heroCatalog/CATALOG_PAGE":return y({},e,{page:t.page});default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(a){return a({type:"heroCatalog/CATALOG_REQUESTED"}),O(e,t,function(e){a({type:"heroCatalog/CATALOG",catalog:e})},function(){a({type:"heroCatalog/CATALOG_REQUEST_ERROR",catalogRequestError:"Houve um erro ao buscar os her\xf3is, Tony Stark logo resolver\xe1 isso :D"})})}},k=function(e){return function(t){t({type:"heroCatalog/CATALOG_PAGE",page:e})}};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w,R={},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=C({},e);switch(t.type){case"heroesData/HERO_REQUESTED":return a[t.heroId]={loading:!0,error:""},a;case"heroesData/HERO_REQUESTED_ERROR":return a[t.heroId]={loading:!1,error:t.error},a;case"heroesData/HERO_ADDED":return a[t.heroId]=C({},t.heroData,{loading:!1,error:""}),a;case"heroesData/HERO_DETAIL_CHANGE":return a[t.heroId]=C({},a[t.heroId],{},t.heroData),a;default:return e}},N=function(e){return function(t){return t({type:"heroesData/HERO_REQUESTED",heroId:e}),function(e,t,a){var n="".concat(b.baseUrl).concat(E,"/").concat(e),r=b.apiKey,o="".concat(n,"?apikey=").concat(r);fetch(o).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return a(e)})}(e,function(a){t({type:"heroesData/HERO_ADDED",heroId:e,heroData:a.data.results[0]})},function(){t({type:"heroesData/HERO_REQUESTED_ERROR",heroId:e,error:"Personagem n\xe3o encontrado! Thanos deve ter estalado os dedos e iremos reverter isso de alguma forma!"})})}},S=function(e,t){return function(a){a({type:"heroesData/HERO_DETAIL_CHANGE",heroId:e,heroData:t})}},T=Object(d.a)({basename:"/Marvel-API-Test"}),A=[g.a,Object(h.a)(T)],I=p.d.apply(void 0,[p.a.apply(void 0,A)].concat([])),H=Object(p.e)((w=T,Object(p.c)({router:Object(l.b)(w),heroCatalog:P,heroesData:L})),{},I),B=a(21),_=a(12),q=a.n(_),M=a(124),G=a.n(M),U=a(23),F=a(24),W=a(27),V=a(25),Q=a(28),K=a(52),z=a.n(K),J=a(121),X=a.n(J),$=a(122),Y=a.n($),Z=a(123),ee=a.n(Z),te="RGBA(255,255,255,0.9)",ae=function(e){return{cssLabel:{color:"RGBA(240,240,240,0.7)","&$cssFocused":{color:te}},cssFocused:{color:"white"},cssUnderline:{"&:hover:before":{borderBottomColor:"RGBA(240,240,240,0.7)!important"},"&:before":{borderBottomColor:"RGBA(240,240,240,0.7)"},"&:after":{borderBottomColor:te}},input:{color:te},button:{color:te,"&:hover":{background:"transparent"}}}},ne=function(e){function t(e){var a;return Object(U.a)(this,t),(a=Object(W.a)(this,Object(V.a)(t).call(this,e))).handleValueChange=function(e){return a.setState({formValue:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),T.push({pathname:"/".concat(a.state.formValue)}),a.setState({formValue:""})},a.state={formValue:""},a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state,a=this.handleValueChange,n=this.handleSubmit,o=t.formValue,c=e.classes;return r.a.createElement("form",{onSubmit:n},r.a.createElement(z.a,{type:"text",value:o,onChange:a,label:"Buscar her\xf3i",fullWidth:!0,InputLabelProps:{classes:{root:c.cssLabel,focused:c.cssFocused}},InputProps:{classes:{underline:c.cssUnderline,input:c.input},endAdornment:r.a.createElement(X.a,{position:"end"},r.a.createElement(Y.a,{className:c.button,"aria-label":"Enviar",type:"submit",disableRipple:!0},r.a.createElement(ee.a,null)))}}))}}]),t}(n.Component),re=Object(s.withStyles)(ae)(ne),oe=function(e){return{header:{paddingTop:"15px",paddingBottom:"15px"},logoLink:{display:"block"},logo:Object(f.a)({display:"block",maxHeight:"27px"},e.breakpoints.up("sm"),{maxHeight:"50px"}),content:{minHeight:"calc(100vh - 85px)",paddingTop:"130px",paddingBottom:"50px"},footer:{background:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important"},footerLink:{color:e.palette.secondary.contrastText,textDecoration:"none"}}},ce=Object(s.withStyles)(oe)(function(e){var t=e.children,a=e.classes;return r.a.createElement("div",null,r.a.createElement(G.a,{position:"fixed",color:"secondary",className:a.header},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12,sm:3,md:2},r.a.createElement(B.a,{to:"/",className:a.logoLink},r.a.createElement("img",{src:"//i.annihil.us/u/prod/misc/marvel.svg",alt:"Marvel",className:a.logo}))),r.a.createElement(q.a,{item:!0,xs:12,sm:!0},r.a.createElement(re,null)))),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:!0,className:a.content},t)),r.a.createElement("footer",{className:a.footer},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:!0},r.a.createElement("p",null,"APP created by Tiago A. Rodrigues"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://marvel.com",className:a.footerLink},"Data provided by Marvel. \xa9 2019 MARVEL"))))))}),ie=a(50),le=a.n(ie),se=a(43),ue=a.n(se),me=a(37),pe=a.n(me),he=a(51),ge=a.n(he),de=a(26),fe=a.n(de),be=a(128),Ee=a.n(be),Oe=a(127),ve=a.n(Oe),ye=function(e,t,a,n,r){return t?n&&r?t+r+"&":t:"?"},je=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.replace(/([?&])(page=\d+)(&)?(.+)?/i,ye);if(!(t<1||a&&t>a))return 1===t?n:(n+=-1!==n.indexOf("?")?"&"!==n[n.length-1]&&"?"!==n[n.length-1]?"&":"":"?"!==n[n.length-1]?"?":"",n+="page=".concat(t))},Pe=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(r)))).state={initPage:0,pageLength:0,midPages:[]},a.definePages=function(e,t,a){for(var n=[],r=Math.floor(t/2),o=e-r,c=o>=1?e+r+1:e+r-o+1,i=o;i<c;i++)i<=a&&i>0&&n.push(i);return 1!==n[0]&&(n[0]=1),n[n.length-1]!==a&&(n[n.length-1]=a),n},a.configuration=function(){var e=a.props,t=e.curPage,n=e.paginationLength,r=e.itemsPerPage,o=e.itemsMax,c=Math.ceil(o/r),i=a.definePages(t,n,c);a.changeHrefLinkRel(),a.setState({pageLength:c,midPages:i})},a.changeHrefLinkRel=function(){var e=a.props,t=e.curPage,n=e.itemsPerPage,r=e.itemsMax,o=e.href,c=Math.ceil(r/n),i=document.querySelector("link[rel=prev]"),l=document.querySelector("link[rel=next]"),s=je(o,t-1),u=je(o,t+1);t>1?(i||((i=document.createElement("link")).rel="prev",document.getElementsByTagName("head")[0].appendChild(i)),i.href=s):i&&i.parentNode.removeChild(i),t<c?(l||((l=document.createElement("link")).rel="next",document.getElementsByTagName("head")[0].appendChild(l)),l.href=u):l&&l.parentNode.removeChild(l)},a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.curPage===this.props.curPage&&e.itemsMax===this.props.itemsMax&&e.paginationLength===this.props.paginationLength||this.configuration()}},{key:"componentDidMount",value:function(){this.configuration()}},{key:"render",value:function(){var e=this.props,t=e.Item,a=e.List,n=e.changePage,o=e.curPage,c=e.href,i=e.PageAbreviation,l=e.PrevContent,s=e.NextContent,u=this.state,m=u.pageLength,p=u.midPages,h={onChangePage:n,changeHrefLinkRel:this.changeHrefLinkRel,curPage:o,href:c,pageLength:m},g=0;return r.a.createElement(a,null,l&&r.a.createElement(t,Object.assign({},h,{page:o-1,isDisabled:1===o,isPrevNextBtn:!0}),r.a.createElement(l,null)),p.reduce(function(e,a){var n=[];return g!==a-1&&n.push(r.a.createElement(i,{key:"abv-".concat(g)})),n.push(r.a.createElement(t,Object.assign({},h,{page:a,key:a,midItemIndex:a}),a)),g=a,e.concat(n)},[]),s&&r.a.createElement(t,Object.assign({},h,{page:o+1,isDisabled:o===m,isPrevNextBtn:!0}),r.a.createElement(s,null)))}}]),t}(n.Component);Pe.defaultProps={paginationLength:5,itemsPerPage:12,showPrevNext:!0,PrevContent:function(){return r.a.createElement("svg",{className:"icon icon-arrow-left"},r.a.createElement("use",{xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"#icon-arrow-left"}))},NextContent:function(){return r.a.createElement("svg",{className:"icon icon-arrow-right"},r.a.createElement("use",{xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"#icon-arrow-right"}))},PageAbreviation:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"bf-pagination__link"},"\u2026"))}};var xe=Pe,ke=function(e){function t(){return Object(U.a)(this,t),Object(W.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(q.a,{container:!0,justify:"flex-end",role:"navigation",itemScope:!0,itemType:"http://schema.org/SiteNavigationElement"},this.props.children))}}]),t}(n.Component),De=a(35),Ce=a.n(De),we=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(W.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(r)))).changePage=function(e){var t=a.props,n=t.page,r=t.onChangePage,o=t.pageLength;n<=0||n>o||r(n)},a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.curPage,n=e.page;return r.a.createElement(Ce.a,{variant:a===n?"outlined":"text",onClick:this.changePage,itemProp:"url"},t)}}]),t}(n.Component),Re=a(48),Le=a.n(Re),Ne=a(67),Se=a.n(Ne),Te=a(125),Ae=a.n(Te),Ie=a(126),He=a.n(Ie),Be=a(49),_e=a.n(Be),qe=function(e){return{cardMedia:{height:200},cardLink:{textDecoration:"none",color:"inherit"},cardTitle:{height:"2.9rem",overflow:"hidden"},cardFooter:{marginTop:32}}},Me=Object(s.withStyles)(qe)(function(e){var t=e.id,a=e.name,n=e.thumbnail,o=e.classes,c="/character/".concat(t),i="/character/edit/".concat(t);return r.a.createElement(Le.a,null,r.a.createElement(Ae.a,null,r.a.createElement(B.a,{to:c,className:o.cardLink},r.a.createElement(Se.a,{className:o.cardMedia,image:n,title:a}),r.a.createElement(_e.a,null,r.a.createElement(fe.a,{className:o.cardTitle,gutterBottom:!0,variant:"title",component:"h2",color:"default"},a)))),r.a.createElement(He.a,null,r.a.createElement(B.a,{to:c,className:o.cardLink},r.a.createElement(Ce.a,{size:"small",color:"primary"},"Ver")),r.a.createElement(B.a,{to:i,className:o.cardLink},r.a.createElement(Ce.a,{size:"small",color:"primary"},"Editar"))))}),Ge=Object(i.c)(function(e,t){var a=e.heroesData,n=t.name,r=t.thumbnail,o=a[t.id];return o&&(n=o.name,r=o.thumbnail),r&&(r="".concat(r.path).concat(r.extension?".".concat(r.extension):"")),{name:n,thumbnail:r}},function(e){return Object(p.b)({},e)})(Me),Ue=function(e){return{paper:{padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),marginBottom:2*e.spacing.unit},link:{color:"inherit",textDecoration:"none"},footer:{marginTop:32}}},Fe=function(e){function t(e){var a;Object(U.a)(this,t);var n=(a=Object(W.a)(this,Object(V.a)(t).call(this,e))).props,r=n.page,o=n.searchName;return e.requestCatalog(r,o),a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.changeCatalogPage,n=t.requestCatalog,r=t.page,o=t.searchName;e.page!==r&&n(r,o),e.match.params.name!==o&&(a(1),n(1,o))}},{key:"render",value:function(){var e=this.props,t=e.heroesList,a=e.heroesTotal,n=e.page,o=e.isRequesting,c=e.error,i=e.changeCatalogPage,l=e.location,s=e.classes,u=e.searchName;return o?r.a.createElement(le.a,null):c?r.a.createElement(ue.a,{color:"secondary",label:c}):t.length?r.a.createElement("main",null,u&&r.a.createElement(pe.a,{className:s.paper},r.a.createElement(ge.a,{"aria-label":"Breadcrumb"},r.a.createElement(B.a,{color:"inherit",to:"/",className:s.link},"Her\xf3is"),r.a.createElement(fe.a,{color:"textPrimary"},"Busca: ",u))),r.a.createElement("section",null,r.a.createElement(q.a,{container:!0,spacing:16},t.map(function(e,t){return r.a.createElement(q.a,{item:!0,xs:!0,sm:6,md:4,lg:3,key:t},r.a.createElement(Ge,{id:e.id,name:e.name,thumbnail:e.thumbnail}))}))),a>b.itemsPerPage&&r.a.createElement("footer",{className:s.footer},r.a.createElement(xe,{curPage:n,itemsMax:a,itemsPerPage:b.itemsPerPage,href:l?l.pathname:"",changePage:i,Item:we,List:ke,PrevContent:ve.a,NextContent:Ee.a,paginationLength:6}))):r.a.createElement(ue.a,{color:"secondary",label:"Nenhum resultado encontrado"})}}]),t}(n.Component),We=Object(s.withStyles)(Ue)(Fe),Ve=Object(i.c)(function(e,t){var a=e.heroCatalog,n=a.catalog,r=a.page,o=a.catalogRequestError,c=a.isRequestingCatalog,i=t.match;return{heroesList:n&&n.data&&n.data.results||[],heroesTotal:n&&n.data&&n.data.total||0,attributionHTML:n&&n.attributionHTML||"",page:r,searchName:i?i.params.name:"",error:o,isRequesting:c}},function(e){return Object(p.b)({requestCatalog:x,changeCatalogPage:k},e)})(We),Qe=a(85),Ke=a.n(Qe),ze=a(130),Je=a.n(ze),Xe=a(131),$e=a.n(Xe),Ye=a(129),Ze=a.n(Ye),et=function(e){return{editIcon:{height:"0.9rem"},paper:{padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),marginBottom:2*e.spacing.unit},link:{color:"inherit",textDecoration:"none"},editLink:Object(f.a)({color:"inherit",display:"block",marginBottom:12,textDecoration:"none"},e.breakpoints.up("sm"),{float:"right",marginLeft:15}),pre:{whiteSpace:"pre-wrap"}}},tt=function(e){function t(e){var a;return Object(U.a)(this,t),a=Object(W.a)(this,Object(V.a)(t).call(this,e)),!e.alreadyFetched&&e.heroId&&e.requestHero(e.heroId),a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.alreadyFetched,a=e.loading,n=e.error;if(!t||a)return r.a.createElement(le.a,null);if(n)return r.a.createElement(ue.a,{color:"secondary",label:n});var o=this.props,c=o.id,i=o.name,l=o.description,s=o.thumbnail,u=o.series.items,m=o.classes,p="".concat(s.path).concat(s.extension?".".concat(s.extension):"");return r.a.createElement("main",null,r.a.createElement(pe.a,{className:m.paper},r.a.createElement(ge.a,{"aria-label":"Breadcrumb"},r.a.createElement(B.a,{color:"inherit",to:"/",className:m.link},"Her\xf3is"),r.a.createElement(fe.a,{color:"textPrimary"},i))),r.a.createElement(Le.a,null,r.a.createElement(_e.a,null,r.a.createElement(q.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(q.a,{item:!0,xs:12,md:6,lg:5},r.a.createElement(Se.a,{component:"img",alt:i,image:p,title:i})),r.a.createElement(q.a,{item:!0,xs:12,md:6,lg:5},r.a.createElement(fe.a,{variant:"h4",component:"h1",gutterBottom:!0},r.a.createElement(B.a,{to:"/character/edit/".concat(c),className:m.editLink},r.a.createElement(Ce.a,{variant:"contained",color:"primary"},"Editar",r.a.createElement(Ze.a,{className:m.editIcon}))),i),r.a.createElement(fe.a,{variant:"body1",component:"h1",gutterBottom:!0,className:m.pre},l),u&&!!u.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{variant:"h6",component:"h2",gutterBottom:!0},"Series:"),r.a.createElement(Ke.a,{dense:!0},u.map(function(e,t){return r.a.createElement(Je.a,{key:t},r.a.createElement($e.a,{primary:e.name}))}))))))))}}]),t}(n.Component),at=Object(s.withStyles)(et)(tt);function nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var rt=Object(i.c)(function(e,t){var a=e.heroesData,n=t&&t.match&&t.match.params&&t.match.params.heroId||null,r=a[n];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?nt(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},r,{heroId:n,alreadyFetched:!!r})},function(e){return Object(p.b)({requestHero:N},e)})(at),ot=function(e){return{paper:{padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),marginBottom:2*e.spacing.unit},link:{color:"inherit",textDecoration:"none"}}},ct=function(e){function t(e){var a;return Object(U.a)(this,t),(a=Object(W.a)(this,Object(V.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.changeHeroDetail,r=t.heroId;n(r,a.state),T.push({pathname:"/character/".concat(r)})},a.handleChangeInputText=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleChangeThumbnail=function(e){var t=e.target.value.split("."),n=t.length>1?t.pop():"",r=t.join(".");a.setState({thumbnail:{extension:n,path:r}})},a.state={name:"",description:"",thumbnail:{extension:"",path:""}},!e.alreadyFetched&&e.heroId?e.requestHero(e.heroId):e.alreadyFetched&&!e.loading&&(a.state={name:e.name,description:e.description,thumbnail:e.thumbnail}),a}return Object(Q.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.heroId!==this.props.heroId||!e.name&&this.props.name){var t=this.props;this.setState({name:t.name,description:t.description,thumbnail:t.thumbnail})}}},{key:"render",value:function(){var e=this.props,t=this.state,a=this.handleChangeInputText,n=this.handleChangeThumbnail,o=this.handleSubmit,c=e.id,i=e.alreadyFetched,l=e.loading,s=e.error,u=e.name,m=e.classes;if(!i||l)return r.a.createElement(le.a,null);if(s)return r.a.createElement(ue.a,{color:"secondary",label:s});var p=t.name,h=t.description,g=t.thumbnail,d="".concat(g.path).concat(g.extension?".".concat(g.extension):"");return r.a.createElement("main",null,r.a.createElement(pe.a,{className:m.paper},r.a.createElement(ge.a,{"aria-label":"Breadcrumb"},r.a.createElement(B.a,{color:"inherit",to:"/",className:m.link},"Her\xf3is"),r.a.createElement(B.a,{color:"inherit",to:"/character/".concat(c),className:m.link},u),r.a.createElement(fe.a,{color:"textPrimary"},"Editar"))),r.a.createElement(Le.a,null,r.a.createElement(_e.a,null,r.a.createElement("form",{onSubmit:o},r.a.createElement(q.a,{container:!0,spacing:16},r.a.createElement(q.a,{item:!0,xs:12,md:7},r.a.createElement(z.a,{type:"text",name:"name",value:p,onChange:a,label:"Nome",fullWidth:!0})),r.a.createElement(q.a,{item:!0,xs:12,md:7},r.a.createElement(z.a,{type:"text",name:"description",value:h,onChange:a,rows:3,label:"Descri\xe7\xe3o",fullWidth:!0,multiline:!0}))),r.a.createElement(q.a,{container:!0,spacing:16},r.a.createElement(q.a,{item:!0,xs:9,md:6,lg:6},r.a.createElement(z.a,{type:"text",name:"thumbnail",value:d,onChange:n,label:"Url da imagem",fullWidth:!0})),r.a.createElement(q.a,{item:!0,xs:3,md:1,lg:1},r.a.createElement("img",{src:d,height:"50",alt:p})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(Ce.a,{variant:"contained",color:"primary",type:"submit"},"Salvar")))))))}}]),t}(n.Component),it=Object(s.withStyles)(ot)(ct);function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var st=Object(i.c)(function(e,t){var a=e.heroesData,n=t&&t.match&&t.match.params&&t.match.params.heroId||null,r=a[n];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?lt(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},r,{heroId:n,alreadyFetched:!!r})},function(e){return Object(p.b)({requestHero:N,changeHeroDetail:S},e)})(it);var ut=function(){var e,t=Object(s.createMuiTheme)({});return t.overrides.MuiGrid={container:(e={width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},Object(f.a)(e,t.breakpoints.up("xs"),{maxWidth:"540px"}),Object(f.a)(e,t.breakpoints.up("sm"),{maxWidth:"720px"}),Object(f.a)(e,t.breakpoints.up("md"),{maxWidth:"960px"}),Object(f.a)(e,t.breakpoints.up("lg"),{maxWidth:"1140px"}),Object(f.a)(e,t.breakpoints.up("xl"),{maxWidth:"1300px"}),e)},t},mt=document.querySelector("#root");mt&&Object(o.render)(r.a.createElement(i.a,{store:H},r.a.createElement(l.a,{history:T},r.a.createElement(s.MuiThemeProvider,{theme:ut()},r.a.createElement(m.a,null),r.a.createElement(ce,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/character/edit/:heroId",component:st}),r.a.createElement(c.a,{exact:!0,path:"/character/:heroId",component:rt}),r.a.createElement(c.a,{exact:!0,path:"/:name",component:Ve}),r.a.createElement(c.a,{exact:!0,path:"/",component:Ve}),r.a.createElement(c.a,{component:function(){return"PAGE 404"}})," "))))),mt)}},[[133,1,2]]]);
//# sourceMappingURL=main.4edbcc76.chunk.js.map