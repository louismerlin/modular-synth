var e,t,s,n,o={},i=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function l(e,t){for(var s in t)e[s]=t[s];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,s){var n,o,i,r=arguments,l={};for(i in t)"key"==i?n=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>3)for(s=[s],i=3;i<arguments.length;i++)s.push(r[i]);if(null!=s&&(l.children=s),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return c(e,l,n,o,null)}function c(t,s,n,o,i){var r={type:t,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++e.__v:i};return null!=e.vnode&&e.vnode(r),r}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function p(e,t){if(null==t)return e.__?p(e.__,e.__.__k.indexOf(e)+1):null;for(var s;t<e.__k.length;t++)if(null!=(s=e.__k[t])&&null!=s.__e)return s.__e;return"function"==typeof e.type?p(e):null}function _(e){var t,s;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(s=e.__k[t])&&null!=s.__e){e.__e=e.__c.base=s.__e;break}return _(e)}}function f(o){(!o.__d&&(o.__d=!0)&&t.push(o)&&!v.__r++||n!==e.debounceRendering)&&((n=e.debounceRendering)||s)(v)}function v(){for(var e;v.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,s,n,o,i,r;e.__d&&(i=(o=(t=e).__v).__e,(r=t.__P)&&(s=[],(n=l({},o)).__v=o.__v+1,S(r,o,n,t.__n,void 0!==r.ownerSVGElement,null!=o.__h?[i]:null,s,null==i?p(o):i,o.__h),C(s,o),o.__e!=i&&_(o)))}))}function m(e,t,s,n,r,l,a,u,h,_){var f,v,m,y,g,k,w,C=n&&n.__k||i,N=C.length;for(s.__k=[],f=0;f<t.length;f++)if(null!=(y=s.__k[f]=null==(y=t[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?c(null,y,null,null,y):Array.isArray(y)?c(d,{children:y},null,null,null):y.__b>0?c(y.type,y.props,y.key,null,y.__v):y)){if(y.__=s,y.__b=s.__b+1,null===(m=C[f])||m&&y.key==m.key&&y.type===m.type)C[f]=void 0;else for(v=0;v<N;v++){if((m=C[v])&&y.key==m.key&&y.type===m.type){C[v]=void 0;break}m=null}S(e,y,m=m||o,r,l,a,u,h,_),g=y.__e,(v=y.ref)&&m.ref!=v&&(w||(w=[]),m.ref&&w.push(m.ref,null,y),w.push(v,y.__c||g,y)),null!=g?(null==k&&(k=g),"function"==typeof y.type&&null!=y.__k&&y.__k===m.__k?y.__d=h=b(y,h,e):h=$(e,y,m,C,g,h),_||"option"!==s.type?"function"==typeof s.type&&(s.__d=h):e.value=""):h&&m.__e==h&&h.parentNode!=e&&(h=p(m))}for(s.__e=k,f=N;f--;)null!=C[f]&&("function"==typeof s.type&&null!=C[f].__e&&C[f].__e==s.__d&&(s.__d=p(n,f+1)),M(C[f],C[f]));if(w)for(f=0;f<w.length;f++)x(w[f],w[++f],w[++f])}function b(e,t,s){var n,o;for(n=0;n<e.__k.length;n++)(o=e.__k[n])&&(o.__=e,t="function"==typeof o.type?b(o,t,s):$(s,o,o,e.__k,o.__e,t));return t}function $(e,t,s,n,o,i){var r,l,a;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==s||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),r=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<n.length;a+=2)if(l==o)break e;e.insertBefore(o,i),r=i}return void 0!==r?r:o.nextSibling}function y(e,t,s){"-"===t[0]?e.setProperty(t,s):e[t]=null==s?"":"number"!=typeof s||r.test(t)?s:s+"px"}function g(e,t,s,n,o){var i;e:if("style"===t)if("string"==typeof s)e.style.cssText=s;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)s&&t in s||y(e.style,t,"");if(s)for(t in s)n&&s[t]===n[t]||y(e.style,t,s[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=s,s?n||e.addEventListener(t,i?w:k,i):e.removeEventListener(t,i?w:k,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==s?"":s;break e}catch(e){}"function"==typeof s||(null!=s&&(!1!==s||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,s):e.removeAttribute(t))}}function k(t){this.l[t.type+!1](e.event?e.event(t):t)}function w(t){this.l[t.type+!0](e.event?e.event(t):t)}function S(t,s,n,o,i,r,a,u,c){var p,_,f,v,b,$,y,g,k,w,S,C=s.type;if(void 0!==s.constructor)return null;null!=n.__h&&(c=n.__h,u=s.__e=n.__e,s.__h=null,r=[u]),(p=e.__b)&&p(s);try{e:if("function"==typeof C){if(g=s.props,k=(p=C.contextType)&&o[p.__c],w=p?k?k.props.value:p.__:o,n.__c?y=(_=s.__c=n.__c).__=_.__E:("prototype"in C&&C.prototype.render?s.__c=_=new C(g,w):(s.__c=_=new h(g,w),_.constructor=C,_.render=q),k&&k.sub(_),_.props=g,_.state||(_.state={}),_.context=w,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=C.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=l({},_.__s)),l(_.__s,C.getDerivedStateFromProps(g,_.__s))),v=_.props,b=_.state,f)null==C.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(g,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(g,_.__s,w)||s.__v===n.__v){_.props=g,_.state=_.__s,s.__v!==n.__v&&(_.__d=!1),_.__v=s,s.__e=n.__e,s.__k=n.__k,s.__k.forEach((function(e){e&&(e.__=s)})),_.__h.length&&a.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(g,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(v,b,$)}))}_.context=w,_.props=g,_.state=_.__s,(p=e.__r)&&p(s),_.__d=!1,_.__v=s,_.__P=t,p=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=l(l({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||($=_.getSnapshotBeforeUpdate(v,b)),S=null!=p&&p.type===d&&null==p.key?p.props.children:p,m(t,Array.isArray(S)?S:[S],s,n,o,i,r,a,u,c),_.base=s.__e,s.__h=null,_.__h.length&&a.push(_),y&&(_.__E=_.__=null),_.__e=!1}else null==r&&s.__v===n.__v?(s.__k=n.__k,s.__e=n.__e):s.__e=N(n.__e,s,n,o,i,r,a,c);(p=e.diffed)&&p(s)}catch(t){s.__v=null,(c||null!=r)&&(s.__e=u,s.__h=!!c,r[r.indexOf(u)]=null),e.__e(t,s,n)}}function C(t,s){e.__c&&e.__c(s,t),t.some((function(s){try{t=s.__h,s.__h=[],t.some((function(e){e.call(s)}))}catch(t){e.__e(t,s.__v)}}))}function N(e,t,s,n,r,l,u,c){var d,h,p,_,f=s.props,v=t.props,b=t.type,$=0;if("svg"===b&&(r=!0),null!=l)for(;$<l.length;$++)if((d=l[$])&&(d===e||(b?d.localName==b:3==d.nodeType))){e=d,l[$]=null;break}if(null==e){if(null===b)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),l=null,c=!1}if(null===b)f===v||c&&e.data===v||(e.data=v);else{if(l=l&&i.slice.call(e.childNodes),h=(f=s.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=l)for(f={},_=0;_<e.attributes.length;_++)f[e.attributes[_].name]=e.attributes[_].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,s,n,o){var i;for(i in s)"children"===i||"key"===i||i in t||g(e,i,null,s[i],n);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||s[i]===t[i]||g(e,i,t[i],s[i],n)}(e,v,f,r,c),p)t.__k=[];else if($=t.props.children,m(e,Array.isArray($)?$:[$],t,s,n,r&&"foreignObject"!==b,l,u,e.firstChild,c),null!=l)for($=l.length;$--;)null!=l[$]&&a(l[$]);c||("value"in v&&void 0!==($=v.value)&&($!==e.value||"progress"===b&&!$)&&g(e,"value",$,f.value,!1),"checked"in v&&void 0!==($=v.checked)&&$!==e.checked&&g(e,"checked",$,f.checked,!1))}return e}function x(t,s,n){try{"function"==typeof t?t(s):t.current=s}catch(t){e.__e(t,n)}}function M(t,s,n){var o,i,r;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||x(o,null,s)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,s)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&M(o[r],s,n);null!=i&&a(i)}function q(e,t,s){return this.constructor(e,s)}e={__e:function(e,t){for(var s,n,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&null!=n.getDerivedStateFromError&&(s.setState(n.getDerivedStateFromError(e)),o=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e),o=s.__d),o)return s.__E=s}catch(t){e=t}throw e},__v:0},h.prototype.setState=function(e,t){var s;s=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof e&&(e=e(l({},s),this.props)),e&&l(s,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},h.prototype.render=d,t=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var A=function(e,t,s,n){var o;t[0]=0;for(var i=1;i<t.length;i++){var r=t[i++],l=t[i]?(t[0]|=r?1:2,s[t[i++]]):t[++i];3===r?n[0]=l:4===r?n[1]=Object.assign(n[1]||{},l):5===r?(n[1]=n[1]||{})[t[++i]]=l:6===r?n[1][t[++i]]+=l+"":r?(o=e.apply(l,A(e,l,s,["",null])),n.push(o),l[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):n.push(l)}return n},T=new Map;var I=function(e){var t=T.get(this);return t||(t=new Map,T.set(this,t)),(t=A(this,t.get(e)||(t.set(e,t=function(e){for(var t,s,n=1,o="",i="",r=[0],l=function(e){1===n&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,e,o):3===n&&(e||o)?(r.push(3,e,o),n=2):2===n&&"..."===o&&e?r.push(4,e,0):2===n&&o&&!e?r.push(5,0,!0,o):n>=5&&((o||!e&&5===n)&&(r.push(n,0,o,s),n=6),e&&(r.push(n,e,0,s),n=6)),o=""},a=0;a<e.length;a++){a&&(1===n&&l(),l(a));for(var u=0;u<e[a].length;u++)t=e[a][u],1===n?"<"===t?(l(),r=[r],n=3):o+=t:4===n?"--"===o&&">"===t?(n=1,o=""):o=t+o[0]:i?t===i?i="":o+=t:'"'===t||"'"===t?i=t:">"===t?(l(),n=1):n&&("="===t?(n=5,s=o,o=""):"/"===t&&(n<5||">"===e[a][u+1])?(l(),3===n&&(r=r[0]),n=r,(r=r[0]).push(2,0,n),n=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),n=2):o+=t),3===n&&"!--"===o&&(n=4,r=r[0])}return l(),r}(e)),t),arguments,[])).length>1?t:t[0]}.bind(u);function D(e){if("undefined"==typeof document)wmr.ssr.head.elements.add({type:"link",props:{rel:"stylesheet",href:e}});else{if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}D("/assets/Module.63622faa.css");class E extends h{constructor(e){super(e),this.state={rotate:{bottom:90*Math.random(),top:90*Math.random()}}}render({pos:e,handleClick:t},{rotate:s}){return I`<svg class=${`screw ${e}`} style=${{transform:`rotate(${s[e]}deg)`}} onClick=${t}><circle fill="black" r="1.6mm" cx="1.6mm" cy="1.6mm"/><line x1="30%" y1="30%" x2="70%" y2="70%" stroke="white" stroke-width="2"/><line x1="30%" y1="70%" x2="70%" y2="30%" stroke="white" stroke-width="2"/></svg>`}}const P=({children:e,hp:t,mId:s})=>I`<div class="module" style=${t?`width:${5.08*t}mm`:""} mId=${s}><${E} pos="top" handleClick=${()=>se(s)}/>${e}<${E} pos="bottom" handleClick=${()=>se(s)}/></div>`,V=()=>I`<${P} hp=${6}><h2>/</h2><div class="subset"></div><//>`,F=({color:e,blink:t})=>I`<svg width="2mm" height="2mm" style="overflow: visible; margin: 0.1cm;"><circle cx="1mm" cy="1mm" r="1mm" fill=${t?e:"white"} stroke="black" stroke-width="2"/></svg>`;null;const U={frequency:{minValue:0,maxValue:1760},gain:{minValue:0,maxValue:1},lfo:{minValue:1/6,maxValue:12},filterFrequency:{minValue:0,maxValue:12e3},qFactor:{minValue:1e-4,maxValue:20}};class H extends h{constructor(e){super(e);const t=U[e.type]||{};this.state={range:t.maxValue-t.minValue||1,properties:t},this.handleMouseMove=this.handleMouseMove.bind(this)}handleMouseMove(e){if(e.buttons){const{param:t}=this.props,{range:s,properties:n}=this.state;let o=("number"==typeof t.value?t.value:t[0].value)-e.movementY*s/1e3;o>n.maxValue&&(o=n.maxValue),o<n.minValue&&(o=n.minValue),t.update?t.update({knob:{value:o}}):t instanceof Array?t.forEach((e=>e.value=o)):t.value=o,this.forceUpdate()}}render({param:e,small:t},{range:s,properties:n}){const o=`rotate(${300*((e=e instanceof Array?e[0]||{}:e||{}).value-n.minValue)/s-150}deg)`,i=t?"0.4cm":"0.8cm";return I`<div class=${"control "+(t?"small":"")}><div class="knob"><svg class="knob" style=${{transform:o}}><circle cx=${i} cy=${i} r=${i} stroke="black" stroke-width="2" fill="white"/><line x1=${i} y1="0" x2=${i} y2=${t?"0.35cm":"0.7cm"} stroke-width="2" stroke="black"/></svg><input onMouseMove=${this.handleMouseMove} class="knob" type="range"/></div></div>`}}null;class L extends h{constructor(e){super(e),this.onConnect=this.onConnect.bind(this)}onConnect(e){ie(this.props.node,this.props.input,this.props.output,e,this)}render({output:e}){return I`<div class="socket" onMouseDown=${()=>this.onConnect(!0)} onMouseUp=${()=>this.onConnect(!1)} onTouchStart=${()=>this.onConnect(!0)} onTouchEnd=${()=>this.onConnect(!1)}><svg class=${"socket "+(e?"output":"")}><circle cx="3.5mm" cy="3.5mm" r="3.5mm" stroke="black" stroke-width=${e?3:2} fill="#efefef"/></svg></div>`}}null;class W extends h{constructor(e){super(e),this.state={on:e.on||!1},this.handleClick=this.handleClick.bind(this)}handleClick(){const{param:e,action:t}=this.props;e?(e.value=!e.value,this.forceUpdate()):(t(!this.state.on),this.setState((({on:e})=>({on:!e}))))}render({param:e},{on:t}){const s="2mm",n=(t=e?e.value:t)?"black":"white";return I`<div class="switch"><svg class="switch" onClick=${this.handleClick}><circle cx=${s} cy=${s} r=${s} stroke="black" stroke-width="2" fill="white"/><circle cx=${s} cy=${t?"0.5mm":"3.5mm"} r=${"1mm"} stroke="black" stroke-width="1" fill=${n}/></svg></div>`}}class O{constructor(){this.trig=!0,this.frequency={value:1},this.outs=[],this.beep=()=>{},this.clock=this.clock.bind(this),this.update=this.update.bind(this),this.start=this.start.bind(this),this.pause=this.pause.bind(this),this.paused=!1}connect(e){e.update&&this.outs.push(e)}disconnect(e){this.outs=this.outs.filter((t=>t!=e))}update(){this.paused||(this.beep(),this.outs.forEach((e=>e.update())))}clock(){window.setTimeout((()=>this.clock()),1/this.frequency.value*1e3),this.update()}start(e){this.beep=e,this.clock()}pause(e){this.paused=e}}class B{constructor(e,t){this.index=e,this.sequencer=t,this.value=440}update({knob:e}){this.value=e.value,this.sequencer.updateNote(this.index)}}class R{constructor(e,t){this.trig=!0,this.clk=t,this.outs=[],this.notes=new Array(e),this.notes.fill(0),this.notes=this.notes.map(((e,t)=>new B(t,this))),this.currentStep=0,this.connect=this.connect.bind(this),this.update=this.update.bind(this),this.sendSignal=this.sendSignal.bind(this),this.updateNote=this.updateNote.bind(this)}connect(e){e.update&&(e.update({frequency:this.notes[this.currentStep]}),this.outs.push(e))}disconnect(e){this.outs=this.outs.filter((t=>t!=e))}update(){this.clk(),this.sendSignal()}sendSignal(){this.outs.forEach((e=>e.update({frequency:this.notes[this.currentStep]})))}updateNote(e){e===this.currentStep&&this.sendSignal()}}class G{constructor(e,t){this.trig=!0,this.clk=t,this.outs=[],this.stepTrigs=new Array(e).fill(0).map((()=>({value:!1}))),this.currentStep=0}connect(e){e.update&&this.outs.push(e)}disconnect(e){this.outs=this.outs.filter((t=>t!=e))}update(){this.clk(),this.sendSignal()}sendSignal(){this.stepTrigs[this.currentStep].value&&this.outs.forEach((e=>e.update()))}}class j{constructor(){this.trig=!0,this.attack={value:.05},this.hold={value:0},this.decay={value:.4},this.outs=[],this.update=this.update.bind(this)}connect(e){e.update&&this.outs.push(e)}disconnect(e){this.outs=this.outs.filter((t=>t!=e))}update(){this.outs.forEach((e=>e.update({attack:this.attack,hold:this.hold,decay:this.decay})))}}class z{constructor(e){this.trig=!0,this.nodes=e,this.value=e[0].frequency.value,this.addedFrequency=0,this.update=this.update.bind(this)}update({frequency:e,knob:t}){if(t){const e=t.value-this.value;this.value=t.value,this.nodes.forEach((t=>t.frequency.value+=e))}else if(e){const t=e.value-this.addedFrequency;this.addedFrequency=e.value,this.nodes.forEach((e=>e.frequency.value+=t))}}}class K{constructor(e){this.trig=!0,this.gainNode=e}update(e){this.gainNode.gain.setTargetAtTime(1,te.currentTime,e.attack.value),this.gainNode.gain.setTargetAtTime(0,te.currentTime+e.attack.value+e.hold.value,e.decay.value)}}const Q=[{name:"Clock",description:"A simple clock",component:class extends h{constructor(e){super(e),this.state={clockNode:{},beep:!1},this.beep=this.beep.bind(this)}componentDidMount(){const e=new O;this.setState({clockNode:e}),e.start(this.beep)}beep(){this.setState({beep:!0}),window.setTimeout((()=>this.setState({beep:!1})),1/30*1e3)}render({mId:e},{clockNode:t,beep:s}){return I`<${P} hp=${6} mId=${e}><h2>clk</h2><${F} blink=${s} color="black"/><div class="subset"><h3>freq</h3><${H} type="lfo" param=${t.frequency}/></div><div class="subset"><h4>pause</h4><${W} action=${t.pause}/></div><div class="subset"><h4>out</h4><${L} output node=${t}/></div><//>`}}},{name:"Sequencer",description:"A 16-step sequencer for creating melodies",component:class extends h{constructor(e){super(e),this.state={sequencerNode:{notes:[]},currentStep:0},this.clk=this.clk.bind(this)}componentDidMount(){const e=new R(this.props.steps,this.clk);this.setState({sequencerNode:e})}clk(){const{steps:e}=this.props,{currentStep:t,sequencerNode:s}=this.state,n=(t+1)%e;s.currentStep=n,this.setState((()=>({currentStep:n})))}render({steps:e,mId:t},{currentStep:s,sequencerNode:n}){const o=new Array(Math.ceil(e/4));return o.fill(0),I`<${P} hp=${14} mId=${t}><h2>seq</h2><div class="subset">${o.map(((e,t)=>I`<div class="h-subset">${n.notes.slice(4*t,4*t+4).map(((e,n)=>I`<div class="subset"><${F} color="black" blink=${4*t+n==s}/><${H} small type="frequency" param=${e}/></div>`))}</div>`))}</div><div class="h-subset"><div class="subset"><div class="subset"><h4>trig</h4><${L} input node=${n}/></div><div class="subset"><h4>reset</h4><${L} input/></div></div><div class="subset"><h4>out</h4><${L} output node=${n}/></div></div><//>`}},props:{steps:16}},{name:"Trigger Sequencer",description:"A 16-step trigger sequencer for creating rythms",component:class extends h{constructor(e){super(e),this.state={triggerNode:{stepTrigs:[]},currentStep:0},this.clk=this.clk.bind(this)}componentDidMount(){const e=new G(this.props.steps,this.clk);this.setState({triggerNode:e})}clk(){const{steps:e}=this.props,{currentStep:t,triggerNode:s}=this.state,n=(t+1)%e;s.currentStep=n,this.setState((()=>({currentStep:n})))}render({steps:e,mId:t},{currentStep:s,triggerNode:n}){const o=new Array(Math.ceil(e/4));o.fill(0);const{stepTrigs:i}=n;return I`<${P} hp=${10} mId=${t}><h2>trg</h2><div class="subset">${o.map(((e,t)=>I`<div class="h-subset">${i.slice(4*t,4*t+4).map(((e,n)=>I`<div class="subset"><${F} color="black" blink=${4*t+n==s}/><${W} param=${e}/></div>`))}</div>`))}</div><div class="h-subset"><div class="subset"><div class="subset"><h4>trig</h4><${L} input node=${n}/></div><div class="subset"><h4>reset</h4><${L} input/></div></div><div class="subset"><h4>out</h4><${L} output node=${n}/></div></div><//>`}},props:{steps:16}},{name:"Envelope",description:"An AHD envelope generator",component:class extends h{constructor(e){super(e),this.state={envelopeNode:{}}}componentDidMount(){const e=new j;this.setState({envelopeNode:e})}render({mId:e},{envelopeNode:t}){return I`<${P} hp=${4} mId=${e}><h2>env</h2><div class="subset"><div class="subset"><h3>attack</h3><${H} small type="gain" param=${t.attack}/></div><div class="subset"><h3>hold</h3><${H} small type="gain" param=${t.hold}/></div><div class="subset"><h3>decay</h3><${H} small type="gain" param=${t.decay}/></div></div><div class="subset"><h4>trig</h4><${L} input node=${t}/></div><div class="subset"><h4>out</h4><${L} output node=${t}/></div><//>`}}},{name:"Oscillator",description:"A simple multi-wave oscillator",component:class extends h{constructor(e){super(e),this.state={sineNode:{},squareNode:{},triangleNode:{},sawNode:{}}}componentDidMount(){const e=te.createOscillator(),t=te.createOscillator(),s=te.createOscillator(),n=te.createOscillator(),o=new z([e,t,s,n]);e.type="sine",t.type="square",s.type="triangle",n.type="sawtooth",this.setState({sineNode:e,squareNode:t,triangleNode:s,sawNode:n,frequencyControlNode:o}),e.start(),t.start(),s.start(),n.start()}render({mId:e},{sineNode:t,squareNode:s,triangleNode:n,sawNode:o,frequencyControlNode:i}){return t.frequency,s.frequency,n.frequency,o.frequency,I`<${P} hp=${6} mId=${e}><h2>osc</h2><div class="subset"><h3>freq</h3><${H} type="frequency" param=${i}/></div><div class="subset"><h4>v/oct</h4><${L} input node=${i}/></div><div class="subset"><div class="subset"><h4>sine</h4><${L} output node=${t}/></div><div class="subset"><h4>square</h4><${L} output node=${s}/></div><div class="subset"><h4>triangle</h4><${L} output node=${n}/></div><div class="subset"><h4>saw</h4><${L} output node=${o}/></div></div><//>`}}},{name:"Noise",description:"A white noise generator",component:class extends h{constructor(e){super(e),this.state={bufferSource:{}}}componentDidMount(){const e=te.createBuffer(1,te.sampleRate,te.sampleRate);e.getChannelData(0).forEach(((e,t,s)=>s[t]=2*Math.random()-1));const t=te.createBufferSource();t.loop=!0,t.buffer=e,this.setState({bufferSource:t}),t.start()}render({mId:e},{bufferSource:t}){return I`<${P} hp=${3} mId=${e}><h2>noi</h2><div class="subset"><h4>out</h4><${L} output node=${t}/></div><//>`}}},{name:"VCA",description:"A voltage-controlled amplifier",component:class extends h{constructor(e){super(e),this.state={envelopeNode:{}}}componentDidMount(){const e=te.createGain(),t=new K(e);e.gain.value=0,this.setState({vcaNode:t,gainNode:e})}render({mId:e},{vcaNode:t,gainNode:s}){return I`<${P} hp=${3} mId=${e}><h2>vca</h2><div class="subset"><h4>in</h4><${L} input node=${s}/></div><div class="subset"><h4>cv</h4><${L} input node=${t}/></div><div class="subset"><h4>out</h4><${L} output node=${s}/></div><//>`}}},{name:"Filter",description:"A low-pass and high-pass filter",component:class extends h{constructor(e){super(e),this.state={lowpassNode:{},highpassNode:{}}}componentDidMount(){const e=te.createBiquadFilter(),t=te.createBiquadFilter();e.type="lowpass",t.type="highpass",this.setState({lowpassNode:e,highpassNode:t})}render({mId:e},{lowpassNode:t,highpassNode:s}){const n=[t,s],o=n.map((e=>e.frequency)),i=n.map((e=>e.Q));return I`<${P} hp=${6} mId=${e}><h2>flt</h2><div class="subset"><h3>freq</h3><${H} type="filterFrequency" param=${o}/></div><div class="subset"><h3>res</h3><${H} type="qFactor" param=${i}/></div><div class="subset"><h4>in</h4><${L} input node=${n}/></div><div class="subset"><h4>lp</h4><${L} output node=${t}/></div><div class="subset"><h4>hp</h4><${L} output node=${s}/></div><//>`}}},{name:"Distortion",description:"A distortion effect",component:class extends h{constructor(e){super(e),this.state={waveShaperNode:{}}}componentDidMount(){const e=te.createWaveShaper();e.curve=function(e){for(var t,s="number"==typeof e?e:50,n=44100,o=new Float32Array(n),i=Math.PI/180,r=0;r<n;++r)t=2*r/n-1,o[r]=(3+s)*t*20*i/(Math.PI+s*Math.abs(t));return o}(50),e.oversample="4x",this.setState({waveShaperNode:e})}render({mId:e},{waveShaperNode:t}){return I`<${P} hp=${3} mId=${e}><h2>dis</h2><div class="subset"><h4>in</h4><${L} input node=${t}/></div><div class="subset"><h4>out</h4><${L} output node=${t}/></div><//>`}}}],Y=({addModule:e})=>I`<${P} hp=${6}><div class="subset"><h2>+</h2></div>${Q.map((t=>I`<div class="subset" onClick=${()=>e(I`<${t.component} ...${t.props} mId=${Math.random()*Math.pow(10,17)}/>`)}><h5 title=${t.description}>${t.name}</h5></div>`))}<//>`,J=({hideCables:e})=>I`<${P} hp=${6}><h2>~</h2><div class="subset"><h3>hide cables</h3><${W} action=${e}/></div><//>`;class X extends h{constructor(e){super(e),this.state={gainNode:{}},this.mute=this.mute.bind(this)}mute(e){e?te.suspend():te.resume()}componentDidMount(){const e=te.createGain(),t=te.destination;e.connect(t),e.gain.value=.1,this.setState({gainNode:e})}render(e,{gainNode:t}){return I`<${P}><h2>out</h2><div class="subset"><h3>mute</h3><${W} on=${!0} action=${this.mute}/></div><div class="subset"><h3>gain</h3><${H} type="gain" param=${t.gain}/></div><div class="subset"><h4>in</h4><${L} input node=${t}/></div><//>`}}null;const Z=({hideCables:e,cables:t,removeCable:s})=>I`<svg class=${"overlay "+(e?"hidden":"")}>${t.map((({nodes:e,id:t})=>{const n=e[0].component.base,o=n.offsetLeft+n.offsetParent.offsetLeft+n.offsetWidth/2-1,i=n.offsetTop+n.offsetParent.offsetTop+n.offsetHeight/2-1,r=e[1].component.base,l=r.offsetLeft+r.offsetParent.offsetLeft+r.offsetWidth/2-1,a=r.offsetTop+r.offsetParent.offsetTop+r.offsetHeight/2-1;return I`<line class="cable" x1=${o} y1=${i} x2=${l} y2=${a} onClick=${()=>s(t)}/>`}))}</svg>`;null;const ee=window.AudioContext||window.webkitAudioContext;let te,se,ne={node:{},input:!1,output:!1,component:{}},oe=()=>{};const ie=(e,t,s,n,o)=>{n?ne={node:e,input:t,output:s,component:o}:ne.node!=={}&&ne.node.trig===e.trig&&(s&&ne.input&&(e.connect(ne.node),oe(ne,{node:e,input:t,output:s,down:n,component:o})),t&&ne.output&&(e instanceof Array?e.forEach((e=>ne.node.connect(e))):ne.node.connect(e),oe(ne,{node:e,input:t,output:s,down:n,component:o})))},re=e=>"module"===e.className?e:re(e.parentNode);!function(t,s,n){var r,l,a;e.__&&e.__(t,s),l=(r="function"==typeof n)?null:n&&n.__k||s.__k,a=[],S(s,t=(!r&&n||s).__k=u(d,null,[t]),l||o,o,void 0!==s.ownerSVGElement,!r&&n?[n]:l?null:s.firstChild?i.slice.call(s.childNodes):null,a,!r&&n?n:l?l.__e:s.firstChild,r),C(a,t)}(I`<${class extends h{constructor(e){var t;super(e),this.state={modules:[],hideCables:!1,cables:[]},this.addModule=this.addModule.bind(this),this.removeModule=this.removeModule.bind(this),se=this.removeModule,this.toggleHideCables=this.toggleHideCables.bind(this),te=new ee,te.suspend(),this.addCable=this.addCable.bind(this),this.removeCable=this.removeCable.bind(this),t=this.addCable,oe=t}componentWillUnmount(){te.close()}addModule(e){this.setState((({modules:t})=>({modules:t.concat(e)})))}removeModule(e){this.setState((({modules:t,cables:s})=>({modules:t.filter((t=>t.attributes.mId!==e))}))),this.state.cables.filter((t=>t.nodes.some((t=>re(t.component.base).attributes.mid!==e)))).forEach((({id:e})=>this.removeCable(e)))}toggleHideCables(){this.setState((({hideCables:e})=>({hideCables:!e})))}addCable(e,t){this.setState((({cables:s})=>({cables:s.concat({nodes:[e,t],id:Math.random()*Math.pow(10,17)})}))),this.forceUpdate()}removeCable(e){const[t,s]=this.state.cables.find((({id:t})=>t===e)).nodes;this.setState((({cables:t})=>({cables:t.filter((({id:t})=>t!==e))}))),((e,t)=>{e.output&&t.input&&e.node.disconnect(t.node),t.output&&e.input&&t.node.disconnect(e.node)})(t,s)}render(e,{modules:t,hideCables:s,cables:n}){return I`<div class="rack"><${V}/><${J} hideCables=${this.toggleHideCables}/><${Y} addModule=${this.addModule}/>${t}<${X}/><${Z} hideCables=${s} cables=${n} removeCable=${this.removeCable}/></div>`}}}/>`,document.body);