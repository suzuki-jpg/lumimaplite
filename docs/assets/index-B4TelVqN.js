var Oa=i=>{throw TypeError(i)};var kr=(i,e,t)=>e.has(i)||Oa("Cannot "+t);var xt=(i,e,t)=>(kr(i,e,"read from private field"),t?t.call(i):e.get(i)),$n=(i,e,t)=>e.has(i)?Oa("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Bt=(i,e,t,n)=>(kr(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Ba=(i,e,t)=>(kr(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Pt=Uint8Array,pi=Uint16Array,zl=Int32Array,qo=new Pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yo=new Pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gl=new Pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ko=function(i,e){for(var t=new pi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new zl(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},$o=Ko(qo,2),Zo=$o.b,Hl=$o.r;Zo[28]=258,Hl[258]=28;var Vl=Ko(Yo,0),Wl=Vl.b,bs=new pi(32768);for(var it=0;it<32768;++it){var gn=(it&43690)>>1|(it&21845)<<1;gn=(gn&52428)>>2|(gn&13107)<<2,gn=(gn&61680)>>4|(gn&3855)<<4,bs[it]=((gn&65280)>>8|(gn&255)<<8)>>1}var Ui=(function(i,e,t){for(var n=i.length,r=0,s=new pi(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new pi(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new pi(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[bs[h]>>c]=l}else for(o=new pi(n),r=0;r<n;++r)i[r]&&(o[r]=bs[a[i[r]-1]++]>>15-i[r]);return o}),Gi=new Pt(288);for(var it=0;it<144;++it)Gi[it]=8;for(var it=144;it<256;++it)Gi[it]=9;for(var it=256;it<280;++it)Gi[it]=7;for(var it=280;it<288;++it)Gi[it]=8;var Jo=new Pt(32);for(var it=0;it<32;++it)Jo[it]=5;var Xl=Ui(Gi,9,1),ql=Ui(Jo,5,1),zr=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},kt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Gr=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Yl=function(i){return(i+7)/8|0},_a=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Pt(i.subarray(e,t))},Kl=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Nt=function(i,e,t){var n=new Error(e||Kl[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Nt),!t)throw n;return n},$l=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Pt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Pt(r*3));var l=function(Fe){var st=t.length;if(Fe>st){var P=new Pt(Math.max(st*2,Fe));P.set(t),t=P}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,x=e.d,T=e.m,m=e.n,f=r*8;do{if(!p){u=kt(i,h,1);var L=kt(i,h+1,3);if(h+=3,L)if(L==1)p=Xl,x=ql,T=9,m=5;else if(L==2){var M=kt(i,h,31)+257,y=kt(i,h+10,15)+4,R=M+kt(i,h+5,31)+1;h+=14;for(var _=new Pt(R),g=new Pt(19),b=0;b<y;++b)g[Gl[b]]=kt(i,h+b*3,7);h+=y*3;for(var I=zr(g),N=(1<<I)-1,B=Ui(g,I,1),b=0;b<R;){var z=B[kt(i,h,N)];h+=z&15;var C=z>>4;if(C<16)_[b++]=C;else{var k=0,K=0;for(C==16?(K=3+kt(i,h,3),h+=2,k=_[b-1]):C==17?(K=3+kt(i,h,7),h+=3):C==18&&(K=11+kt(i,h,127),h+=7);K--;)_[b++]=k}}var W=_.subarray(0,M),j=_.subarray(M);T=zr(W),m=zr(j),p=Ui(W,T,1),x=Ui(j,m,1)}else Nt(1);else{var C=Yl(h)+4,A=i[C-4]|i[C-3]<<8,S=C+A;if(S>r){c&&Nt(0);break}o&&l(d+A),t.set(i.subarray(C,S),d),e.b=d+=A,e.p=h=S*8,e.f=u;continue}if(h>f){c&&Nt(0);break}}o&&l(d+131072);for(var se=(1<<T)-1,me=(1<<m)-1,be=h;;be=h){var k=p[Gr(i,h)&se],ke=k>>4;if(h+=k&15,h>f){c&&Nt(0);break}if(k||Nt(2),ke<256)t[d++]=ke;else if(ke==256){be=h,p=null;break}else{var Xe=ke-254;if(ke>264){var b=ke-257,Ue=qo[b];Xe=kt(i,h,(1<<Ue)-1)+Zo[b],h+=Ue}var Y=x[Gr(i,h)&me],Z=Y>>4;Y||Nt(3),h+=Y&15;var j=Wl[Z];if(Z>3){var Ue=Yo[Z];j+=Gr(i,h)&(1<<Ue)-1,h+=Ue}if(h>f){c&&Nt(0);break}o&&l(d+131072);var he=d+Xe;if(d<j){var ye=s-j,_e=Math.min(j,he);for(ye+d<0&&Nt(3);d<_e;++d)t[d]=n[ye+d]}for(;d<he;++d)t[d]=t[d-j]}}e.l=p,e.p=be,e.b=d,e.f=u,p&&(u=1,e.m=T,e.d=x,e.n=m)}while(!u);return d!=t.length&&a?_a(t,0,d):t.subarray(0,d)},Zl=new Pt(0),jt=function(i,e){return i[e]|i[e+1]<<8},Xt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Hr=function(i,e){return Xt(i,e)+Xt(i,e+4)*4294967296};function Jl(i,e){return $l(i,{i:2},e&&e.out,e&&e.dictionary)}var As=typeof TextDecoder<"u"&&new TextDecoder,jl=0;try{As.decode(Zl,{stream:!0}),jl=1}catch{}var Ql=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:_a(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function ec(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(As)return As.decode(i);var r=Ql(i),s=r.s,t=r.r;return t.length&&Nt(8),s}}var tc=function(i,e){return e+30+jt(i,e+26)+jt(i,e+28)},nc=function(i,e,t){var n=jt(i,e+28),r=ec(i.subarray(e+46,e+46+n),!(jt(i,e+8)&2048)),s=e+46+n,a=Xt(i,e+20),o=t&&a==4294967295?ic(i,s):[a,Xt(i,e+24),Xt(i,e+42)],c=o[0],l=o[1],u=o[2];return[jt(i,e+10),c,l,r,s+jt(i,e+30)+jt(i,e+32),u]},ic=function(i,e){for(;jt(i,e)!=1;e+=4+jt(i,e+2));return[Hr(i,e+12),Hr(i,e+4),Hr(i,e+20)]};function rc(i,e){for(var t={},n=i.length-22;Xt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Nt(13);var r=jt(i,n+8);if(!r)return{};var s=Xt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Xt(i,n-12);a=Xt(i,o)==101075792,a&&(r=Xt(i,o+32),s=Xt(i,o+48))}for(var c=0;c<r;++c){var l=nc(i,s,a),u=l[0],h=l[1],d=l[2],p=l[3],x=l[4],T=l[5],m=tc(i,T);s=x,u?u==8?t[p]=Jl(i.subarray(m,m+h),{out:new Pt(d)}):Nt(14,"unknown compression type "+u):t[p]=_a(i,m,m+h)}return t}class sc{static Load(e){const t=new TextDecoder("ascii");let n=0;function r(){let S=n;for(;n<e.length&&e[n]!==10;)n++;const M=t.decode(e.slice(S,n));return n++,M.trim()}const s=r(),a=s==="PF";if(!a&&s!=="Pf")throw new Error("Unsupported PFM format: "+s);const o=r(),[c,l]=o.split(" "),u=parseInt(c,10),h=parseInt(l,10);if(isNaN(u)||isNaN(h))throw new Error("Invalid size: "+o);const d=r(),p=parseFloat(d),x=Math.abs(p),T=p<0,m=a?3:1,f=u*h*m,L=new DataView(e.buffer,e.byteOffset+n,e.byteLength-n),C=new Float32Array(f);for(let S=0;S<f;S++)C[S]=L.getFloat32(S*4,T)*x;const A={format:s,scaleFactor:d,width:u,height:h};if(a){const S=new Float32Array(u*h),M=new Float32Array(u*h),y=new Float32Array(u*h);for(let R=0;R<h;R++){const _=h-1-R;for(let g=0;g<u;g++){const b=_*u+g,I=R*u+g;S[I]=C[b*3+0],M[I]=C[b*3+1],y[I]=C[b*3+2]}}A.rgb=[S,M,y]}else{let S=new Float32Array(u*h);for(let M=0;M<h;M++){const y=h-1-M;for(let R=0;R<u;R++){const _=y*u+R,g=M*u+R;S[g]=C[_]}}A.grayscale=S}return A}}const ac="https://ik1-127-70116.vs.sakura.ne.jp/markAnomaly";async function oc(i){const e=new FormData;return e.append("file",i),await fetch(ac,{method:"POST",body:e}).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.arrayBuffer()}).then(t=>rc(new Uint8Array(t))).then(t=>{for(const[n,r]of Object.entries(t))if(n.includes(".pfm"))return sc.Load(r);throw new Error("Could not found PFM File")}).catch(t=>{throw new Error("Failed to fetch file")})}class jo{constructor(){this.initialImageType="original",this.imageOrder=["original","luminance","luminanceRatio","illuminance","photometricOverflow"],this.imagingParameter={luminance:{max:1e3,min:1},luminanceRatio:{max:10,min:0,baseLuminance:200},illuminance:{max:300,min:1,ref:.5}}}}const ka="--invisible";class Hi{constructor(e){this.#t=!0,this.#i="",this.#n=t=>{this.onClick?.(t)},this.onClick=null,this.#e=e,this.#e.addEventListener("click",this.#n)}#e;#t;#i;get visible(){return this.#t}set visible(e){this.#t=e,e?this.#e.classList.remove(ka):this.#e.classList.add(ka)}get element(){return this.#e}get name(){return this.#i}set name(e){this.#i=e}#n}const lc="button";function cc(i){const e=document.createElement("button");return e.classList.add(lc),i&&e.classList.add(i),e}class gi extends Hi{constructor(e){const t=cc(e);super(t)}}class hc{#e;constructor(){this.#e=this.#t()}#t(){const e=document.createElement("ul");e.classList.add("controlbar");const t=document.createElement("li");t.classList.add("move"),e.appendChild(t);const n=document.createElement("li");return n.classList.add("addmarker"),e.appendChild(n),e}get element(){return this.#e}}const uc=new Map([["original","オリジナル画像"],["luminance","輝度画像"],["luminanceRatio","輝度比画像"],["illuminance","照度画像"],["photometricOverflow","測定範囲外画像"]]),fc="imageselector";class dc{#e;#t=[];#i=!0;#n=null;constructor(){this.#e=e(),this.#a(this.#t),this.#s();function e(){const t=document.createElement("select");return t.classList.add(fc),t}}#s(){this.#e.addEventListener("change",e=>{this.#n&&this.#n(e)})}get items(){return this.#t}set items(e){this.#t=e,this.#a(e)}#a(e){const t=document.createDocumentFragment();for(let n=0;n<e.length;n++){const r=document.createElement("option");r.textContent=uc.get(e[n]),t.appendChild(r)}this.#e.innerHTML="",this.#e.appendChild(t)}get visible(){return this.#i}set visible(e){this.#i=e,this.#e.style.display=e?"":"none"}get element(){return this.#e}get selectedImageType(){return this.#t[this.#e.selectedIndex]}set selectedImageType(e){this.#e.selectedIndex=this.#t.indexOf(e)}get onSelectionChanged(){return this.#n}set onSelectionChanged(e){this.#n=e}}const va="180",pc=0,za=1,mc=2,Qo=1,gc=2,un=3,wn=0,yt=1,fn=2,bn=0,_i=1,Ga=2,Ha=3,Va=4,_c=5,Bn=100,vc=101,xc=102,Sc=103,Mc=104,Ec=200,yc=201,Tc=202,bc=203,ws=204,Rs=205,Ac=206,wc=207,Rc=208,Cc=209,Pc=210,Lc=211,Dc=212,Ic=213,Uc=214,Cs=0,Ps=1,Ls=2,xi=3,Ds=4,Is=5,Us=6,Fs=7,el=0,Fc=1,Nc=2,An=0,Oc=1,Bc=2,kc=3,zc=4,Gc=5,Hc=6,Vc=7,tl=300,Si=301,Mi=302,Ns=303,Os=304,Dr=306,Bs=1e3,zn=1001,ks=1002,Lt=1003,Wc=1004,Ji=1005,Qt=1006,Vr=1007,Gn=1008,pn=1009,nl=1010,il=1011,Fi=1012,xa=1013,Xn=1014,en=1015,Vi=1016,Sa=1017,Ma=1018,Ni=1020,rl=35902,sl=35899,al=1021,ol=1022,Kt=1023,Oi=1026,Bi=1027,Ea=1028,ya=1029,ll=1030,Ta=1031,ba=1033,yr=33776,Tr=33777,br=33778,Ar=33779,zs=35840,Gs=35841,Hs=35842,Vs=35843,Ws=36196,Xs=37492,qs=37496,Ys=37808,Ks=37809,$s=37810,Zs=37811,Js=37812,js=37813,Qs=37814,ea=37815,ta=37816,na=37817,ia=37818,ra=37819,sa=37820,aa=37821,oa=36492,la=36494,ca=36495,ha=36283,ua=36284,fa=36285,da=36286,Xc=3200,qc=3201,Yc=0,Kc=1,yn="",Ct="srgb",Ei="srgb-linear",Rr="linear",$e="srgb",Zn=7680,Wa=519,$c=512,Zc=513,Jc=514,cl=515,jc=516,Qc=517,eh=518,th=519,Xa=35044,qa="300 es",tn=2e3,Cr=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,pa=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function Xr(i,e,t){return(1-t)*i+t*e}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],x=s[a+2],T=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=T;return}if(h!==T||c!==d||l!==p||u!==x){let m=1-o;const f=c*d+l*p+u*x+h*T,L=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){const S=Math.sqrt(C),M=Math.atan2(S,f*L);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S}const A=o*L;if(c=c*m+d*A,l=l*m+p*A,u=u*m+x*A,h=h*m+T*A,m===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*h+c*p-l*d,e[t+1]=c*x+u*d+l*h-o*p,e[t+2]=l*x+u*p+o*d-c*h,e[t+3]=u*x-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"YZX":this._x=d*u*h+l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h-d*p*x;break;case"XZY":this._x=d*u*h-l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new H,Ya=new Xi;class Oe{constructor(e,t,n,r,s,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],x=n[8],T=r[0],m=r[3],f=r[6],L=r[1],C=r[4],A=r[7],S=r[2],M=r[5],y=r[8];return s[0]=a*T+o*L+c*S,s[3]=a*m+o*C+c*M,s[6]=a*f+o*A+c*y,s[1]=l*T+u*L+h*S,s[4]=l*m+u*C+h*M,s[7]=l*f+u*A+h*y,s[2]=d*T+p*L+x*S,s[5]=d*m+p*C+x*M,s[8]=d*f+p*A+x*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,x=t*h+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=h*T,e[1]=(r*l-u*n)*T,e[2]=(o*n-r*a)*T,e[3]=d*T,e[4]=(u*t-r*c)*T,e[5]=(r*s-o*t)*T,e[6]=p*T,e[7]=(n*c-l*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Oe;function hl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ih(){const i=ki("canvas");return i.style.display="block",i}const Ka={};function zi(i){i in Ka||(Ka[i]=!0,console.warn(i))}function rh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const $a=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sh(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$e&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yn?Rr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:$a,fromXYZ:Za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:$a,fromXYZ:Za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}const We=sh();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class ah{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jn===void 0&&(Jn=ki("canvas")),Jn.width=e.width,Jn.height=e.height;const r=Jn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oh=0;class Aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kr(r[a].image)):s.push(Kr(r[a]))}else s=Kr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;const $r=new H;class _t extends Ti{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=zn,r=zn,s=Qt,a=Gn,o=Kt,c=pn,l=_t.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Wi(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=tl;_t.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],x=c[9],T=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-T)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+T)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,A=(p+1)/2,S=(f+1)/2,M=(u+d)/4,y=(h+T)/4,R=(x+m)/4;return C>A&&C>S?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=M/n,s=y/n):A>S?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=M/r,s=R/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=y/s,r=R/s),this.set(n,r,s,t),this}let L=Math.sqrt((m-x)*(m-x)+(h-T)*(h-T)+(d-u)*(d-u));return Math.abs(L)<.001&&(L=1),this.x=(m-x)/L,this.y=(h-T)/L,this.z=(d-u)/L,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ch extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new _t(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Aa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ul extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hh extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Qi.subVectors(this.max,Ri),jn.subVectors(e.a,Ri),Qn.subVectors(e.b,Ri),ei.subVectors(e.c,Ri),_n.subVectors(Qn,jn),vn.subVectors(ei,Qn),Pn.subVectors(jn,ei);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Zr(t,jn,Qn,ei,Qi)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,jn,Qn,ei,Qi))?!1:(er.crossVectors(_n,vn),t=[er.x,er.y,er.z],Zr(t,jn,Qn,ei,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const an=[new H,new H,new H,new H,new H,new H,new H,new H],zt=new H,ji=new qi,jn=new H,Qn=new H,ei=new H,_n=new H,vn=new H,Pn=new H,Ri=new H,Qi=new H,er=new H,Ln=new H;function Zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const o=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const uh=new qi,Ci=new H,Jr=new H;class wa{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Jr)),this.expandByPoint(Ci.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const on=new H,jr=new H,tr=new H,xn=new H,Qr=new H,nr=new H,es=new H;class fh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jr.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(jr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(tr),o=xn.dot(this.direction),c=-xn.dot(tr),l=xn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*c-o,d=a*o-c,x=s*u,h>=0)if(d>=-x)if(d<=x){const T=1/u;h*=T,d*=T,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jr).addScaledVector(tr,d),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,s){Qr.subVectors(t,e),nr.subVectors(n,e),es.crossVectors(Qr,nr);let a=this.direction.dot(es),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const c=o*this.direction.dot(nr.crossVectors(xn,nr));if(c<0)return null;const l=o*this.direction.dot(Qr.cross(xn));if(l<0||c+l>a)return null;const u=-o*xn.dot(es);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,s,a,o,c,l,u,h,d,p,x,T,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,p,x,T,m)}set(e,t,n,r,s,a,o,c,l,u,h,d,p,x,T,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=T,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,x=o*u,T=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=d-T*l,t[9]=-o*c,t[2]=T-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,x=l*u,T=l*h;t[0]=d+T*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=T+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,x=l*u,T=l*h;t[0]=d-T*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=T-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,x=o*u,T=o*h;t[0]=c*u,t[4]=x*l-p,t[8]=d*l+T,t[1]=c*h,t[5]=T*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,x=o*c,T=o*l;t[0]=c*u,t[4]=T-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+x,t[10]=d-T*h}else if(e.order==="XZY"){const d=a*c,p=a*l,x=o*c,T=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+T,t[5]=a*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=T*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,ph)}lookAt(e,t,n){const r=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Sn.crossVectors(n,At),Sn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Sn.crossVectors(n,At)),Sn.normalize(),ir.crossVectors(At,Sn),r[0]=Sn.x,r[4]=ir.x,r[8]=At.x,r[1]=Sn.y,r[5]=ir.y,r[9]=At.y,r[2]=Sn.z,r[6]=ir.z,r[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],x=n[2],T=n[6],m=n[10],f=n[14],L=n[3],C=n[7],A=n[11],S=n[15],M=r[0],y=r[4],R=r[8],_=r[12],g=r[1],b=r[5],I=r[9],N=r[13],B=r[2],z=r[6],k=r[10],K=r[14],W=r[3],j=r[7],se=r[11],me=r[15];return s[0]=a*M+o*g+c*B+l*W,s[4]=a*y+o*b+c*z+l*j,s[8]=a*R+o*I+c*k+l*se,s[12]=a*_+o*N+c*K+l*me,s[1]=u*M+h*g+d*B+p*W,s[5]=u*y+h*b+d*z+p*j,s[9]=u*R+h*I+d*k+p*se,s[13]=u*_+h*N+d*K+p*me,s[2]=x*M+T*g+m*B+f*W,s[6]=x*y+T*b+m*z+f*j,s[10]=x*R+T*I+m*k+f*se,s[14]=x*_+T*N+m*K+f*me,s[3]=L*M+C*g+A*B+S*W,s[7]=L*y+C*b+A*z+S*j,s[11]=L*R+C*I+A*k+S*se,s[15]=L*_+C*N+A*K+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],T=e[7],m=e[11],f=e[15];return x*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+T*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+f*(-r*o*u-t*c*h+t*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],T=e[13],m=e[14],f=e[15],L=h*m*l-T*d*l+T*c*p-o*m*p-h*c*f+o*d*f,C=x*d*l-u*m*l-x*c*p+a*m*p+u*c*f-a*d*f,A=u*T*l-x*h*l+x*o*p-a*T*p-u*o*f+a*h*f,S=x*h*c-u*T*c-x*o*d+a*T*d+u*o*m-a*h*m,M=t*L+n*C+r*A+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=L*y,e[1]=(T*d*s-h*m*s-T*r*p+n*m*p+h*r*f-n*d*f)*y,e[2]=(o*m*s-T*c*s+T*r*l-n*m*l-o*r*f+n*c*f)*y,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*y,e[4]=C*y,e[5]=(u*m*s-x*d*s+x*r*p-t*m*p-u*r*f+t*d*f)*y,e[6]=(x*c*s-a*m*s-x*r*l+t*m*l+a*r*f-t*c*f)*y,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*p+t*c*p)*y,e[8]=A*y,e[9]=(x*h*s-u*T*s-x*n*p+t*T*p+u*n*f-t*h*f)*y,e[10]=(a*T*s-x*o*s+x*n*l-t*T*l-a*n*f+t*o*f)*y,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*p-t*o*p)*y,e[12]=S*y,e[13]=(u*T*r-x*h*r+x*n*d-t*T*d-u*n*m+t*h*m)*y,e[14]=(x*o*r-a*T*r-x*n*c+t*T*c+a*n*m-t*o*m)*y,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*d+t*o*d)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,x=s*h,T=a*u,m=a*h,f=o*h,L=c*l,C=c*u,A=c*h,S=n.x,M=n.y,y=n.z;return r[0]=(1-(T+f))*S,r[1]=(p+A)*S,r[2]=(x-C)*S,r[3]=0,r[4]=(p-A)*M,r[5]=(1-(d+f))*M,r[6]=(m+L)*M,r[7]=0,r[8]=(x+C)*y,r[9]=(m-L)*y,r[10]=(1-(d+T))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const a=ti.set(r[4],r[5],r[6]).length(),o=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,u=1/a,h=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let x,T;if(c)x=s/(a-s),T=a*s/(a-s);else if(o===tn)x=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===Cr)x=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,T;if(c)x=1/(a-s),T=a/(a-s);else if(o===tn)x=-2/(a-s),T=-(a+s)/(a-s);else if(o===Cr)x=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new H,Gt=new ut,dh=new H(0,0,0),ph=new H(1,1,1),Sn=new H,ir=new H,At=new H,Ja=new ut,ja=new Xi;class mn{constructor(e=0,t=0,n=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mh=0;const Qa=new H,ni=new Xi,ln=new ut,rr=new H,Pi=new H,gh=new H,_h=new Xi,eo=new H(1,0,0),to=new H(0,1,0),no=new H(0,0,1),io={type:"added"},vh={type:"removed"},ii={type:"childadded",child:null},ts={type:"childremoved",child:null};class Dt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new H,t=new mn,n=new Xi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Oe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Pi,rr,this.up):ln.lookAt(rr,Pi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(ln),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(io),ii.child=e,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vh),ts.child=e,this.dispatchEvent(ts),ts.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(io),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new H,cn=new H,ns=new H,hn=new H,ri=new H,si=new H,ro=new H,is=new H,rs=new H,ss=new H,as=new ct,os=new ct,ls=new ct;class Yt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),cn.subVectors(n,t),ns.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(cn),c=Ht.dot(ns),l=cn.dot(cn),u=cn.dot(ns),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,x=(a*u-o*c)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return as.setScalar(0),os.setScalar(0),ls.setScalar(0),as.fromBufferAttribute(e,t),os.fromBufferAttribute(e,n),ls.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(as,s.x),a.addScaledVector(os,s.y),a.addScaledVector(ls,s.z),a}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),cn.subVectors(e,t),Ht.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ht.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ri.subVectors(r,n),si.subVectors(s,n),is.subVectors(e,n);const c=ri.dot(is),l=si.dot(is);if(c<=0&&l<=0)return t.copy(n);rs.subVectors(e,r);const u=ri.dot(rs),h=si.dot(rs);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ri,a);ss.subVectors(e,s);const p=ri.dot(ss),x=si.dot(ss);if(x>=0&&p<=x)return t.copy(s);const T=p*l-c*x;if(T<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(si,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return ro.subVectors(s,r),o=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(ro,o);const f=1/(m+T+d);return a=T*f,o=d*f,t.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function cs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=nh(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=cs(a,s,e+1/3),this.g=cs(a,s,e),this.b=cs(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return We.workingToColorSpace(gt.copy(this),e),Math.round(Ge(gt.r*255,0,255))*65536+Math.round(Ge(gt.g*255,0,255))*256+Math.round(Ge(gt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ct){We.workingToColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(sr);const n=Xr(Mn.h,sr.h,t),r=Xr(Mn.s,sr.s,t),s=Xr(Mn.l,sr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ze;Ze.NAMES=dl;let xh=0;class Ir extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=_i,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=Rs,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ws&&(n.blendSrc=this.blendSrc),this.blendDst!==Rs&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ur extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new H,ar=new Je;let Sh=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class pl extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wn extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mh=0;const Ft=new ut,hs=new Dt,ai=new H,wt=new qi,Li=new qi,pt=new H;class Yn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return hs.lookAt(e),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(wt.min,Li.min),wt.expandByPoint(pt),pt.addVectors(wt.max,Li.max),wt.expandByPoint(pt)):(wt.expandByPoint(Li.min),wt.expandByPoint(Li.max))}wt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)pt.fromBufferAttribute(o,l),c&&(ai.fromBufferAttribute(e,l),pt.add(ai)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new H,c[R]=new H;const l=new H,u=new H,h=new H,d=new Je,p=new Je,x=new Je,T=new H,m=new H;function f(R,_,g){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,_),x.fromBufferAttribute(s,g),u.sub(l),h.sub(l),p.sub(d),x.sub(d);const b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(T.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(b),o[R].add(T),o[_].add(T),o[g].add(T),c[R].add(m),c[_].add(m),c[g].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let R=0,_=L.length;R<_;++R){const g=L[R],b=g.start,I=g.count;for(let N=b,B=b+I;N<B;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const C=new H,A=new H,S=new H,M=new H;function y(R){S.fromBufferAttribute(r,R),M.copy(S);const _=o[R];C.copy(_),C.sub(S.multiplyScalar(S.dot(_))).normalize(),A.crossVectors(M,_);const b=A.dot(c[R])<0?-1:1;a.setXYZW(R,C.x,C.y,C.z,b)}for(let R=0,_=L.length;R<_;++R){const g=L[R],b=g.start,I=g.count;for(let N=b,B=b+I;N<B;N+=3)y(e.getX(N+0)),y(e.getX(N+1)),y(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),T=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,x=0;for(let T=0,m=c.length;T<m;T++){o.isInterleavedBufferAttribute?p=c[T]*o.data.stride+o.offset:p=c[T]*u;for(let f=0;f<u;f++)d[x++]=l[p++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new ut,Dn=new fh,or=new wa,ao=new H,lr=new H,cr=new H,hr=new H,us=new H,ur=new H,oo=new H,fr=new H;class nn extends Dt{constructor(e=new Yn,t=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ur.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(us.fromBufferAttribute(h,e),a?ur.addScaledVector(us,u):ur.addScaledVector(us.sub(t),u))}t.add(ur)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),!(or.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(or,ao)===null||Dn.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(so.copy(s).invert(),Dn.copy(e.ray).applyMatrix4(so),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const m=d[x],f=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=L,S=C;A<S;A+=3){const M=o.getX(A),y=o.getX(A+1),R=o.getX(A+2);r=dr(this,f,e,n,l,u,h,M,y,R),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),T=Math.min(o.count,p.start+p.count);for(let m=x,f=T;m<f;m+=3){const L=o.getX(m),C=o.getX(m+1),A=o.getX(m+2);r=dr(this,a,e,n,l,u,h,L,C,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const m=d[x],f=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let A=L,S=C;A<S;A+=3){const M=A,y=A+1,R=A+2;r=dr(this,f,e,n,l,u,h,M,y,R),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),T=Math.min(c.count,p.start+p.count);for(let m=x,f=T;m<f;m+=3){const L=m,C=m+1,A=m+2;r=dr(this,a,e,n,l,u,h,L,C,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Eh(i,e,t,n,r,s,a,o){let c;if(e.side===yt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===wn,o),c===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fr);return l<t.near||l>t.far?null:{distance:l,point:fr.clone(),object:i}}function dr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,lr),i.getVertexPosition(c,cr),i.getVertexPosition(l,hr);const u=Eh(i,e,t,n,lr,cr,hr,oo);if(u){const h=new H;Yt.getBarycoord(oo,lr,cr,hr,h),r&&(u.uv=Yt.getInterpolatedAttribute(r,o,c,l,h,new Je)),s&&(u.uv1=Yt.getInterpolatedAttribute(s,o,c,l,h,new Je)),a&&(u.normal=Yt.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};Yt.getNormal(lr,cr,hr,d.normal),u.face=d,u.barycoord=h}return u}class Yi extends Yn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(h,2));function x(T,m,f,L,C,A,S,M,y,R,_){const g=A/y,b=S/R,I=A/2,N=S/2,B=M/2,z=y+1,k=R+1;let K=0,W=0;const j=new H;for(let se=0;se<k;se++){const me=se*b-N;for(let be=0;be<z;be++){const ke=be*g-I;j[T]=ke*L,j[m]=me*C,j[f]=B,l.push(j.x,j.y,j.z),j[T]=0,j[m]=0,j[f]=M>0?1:-1,u.push(j.x,j.y,j.z),h.push(be/y),h.push(1-se/R),K+=1}}for(let se=0;se<R;se++)for(let me=0;me<y;me++){const be=d+me+z*se,ke=d+me+z*(se+1),Xe=d+(me+1)+z*(se+1),Ue=d+(me+1)+z*se;c.push(be,ke,Ue),c.push(ke,Xe,Ue),W+=6}o.addGroup(p,W,_),p+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function yh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Th={clone:yi,merge:St};var bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bh,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _l extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new H,lo=new Je,co=new Je;class qt extends _l{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,lo,co),t.subVectors(co,lo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class wh extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(oi,li,e,t);r.layers=this.layers,this.add(r);const s=new qt(oi,li,e,t);s.layers=this.layers,this.add(s);const a=new qt(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new qt(oi,li,e,t);o.layers=this.layers,this.add(o);const c=new qt(oi,li,e,t);c.layers=this.layers,this.add(c);const l=new qt(oi,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class vl extends _t{constructor(e=[],t=Si,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rh extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yi(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:bn});s.uniforms.tEquirect.value=t;const a=new nn(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Qt),new wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class pr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ch={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const T of e.hand.values()){const m=t.getJointPose(T,n),f=this._getHandJoint(l,T);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ch)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ph extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lh extends _t{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Lt,u=Lt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new H,Dh=new H,Ih=new Oe;class Nn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ds.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ds),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ih.getNormalMatrix(e),r=this.coplanarPoint(ds).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new wa,Uh=new Je(.5,.5),mr=new H;class xl{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],x=s[8],T=s[9],m=s[10],f=s[11],L=s[12],C=s[13],A=s[14],S=s[15];if(r[0].setComponents(l-a,p-u,f-x,S-L).normalize(),r[1].setComponents(l+a,p+u,f+x,S+L).normalize(),r[2].setComponents(l+o,p+h,f+T,S+C).normalize(),r[3].setComponents(l-o,p-h,f-T,S-C).normalize(),n)r[4].setComponents(c,d,m,A).normalize(),r[5].setComponents(l-c,p-d,f-m,S-A).normalize();else if(r[4].setComponents(l-c,p-d,f-m,S-A).normalize(),t===tn)r[5].setComponents(l+c,p+d,f+m,S+A).normalize();else if(t===Cr)r[5].setComponents(c,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);const t=Uh.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends _t{constructor(e,t,n=Xn,r,s,a,o=Lt,c=Lt,l,u=Oi,h=1){if(u!==Oi&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ml extends _t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends Yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],x=[],T=[],m=[];for(let f=0;f<u;f++){const L=f*d-a;for(let C=0;C<l;C++){const A=C*h-s;x.push(A,-L,0),T.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let L=0;L<o;L++){const C=L+l*f,A=L+l*(f+1),S=L+1+l*(f+1),M=L+1+l*f;p.push(C,A,M),p.push(A,S,M)}this.setIndex(p),this.setAttribute("position",new Wn(x,3)),this.setAttribute("normal",new Wn(T,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fh extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nh extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ps={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Oh{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Bh=new Oh;class Ra{constructor(e){this.manager=e!==void 0?e:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci=new WeakMap;class kh extends Ra{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ps.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ci.get(a);h===void 0&&(h=[],ci.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=ki("img");function c(){u(),t&&t(this);const h=ci.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}ci.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),ps.remove(`image:${e}`);const d=ci.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}ci.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class zh extends Ra{constructor(e){super(e)}load(e,t,n,r){const s=new _t,a=new kh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class El extends _l{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gh extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ho(i,e,t,n){const r=Hh(n);switch(t){case al:return i*e;case Ea:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case ll:return i*e*2/r.components*r.byteLength;case Ta:return i*e*2/r.components*r.byteLength;case ol:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case ba:return i*e*4/r.components*r.byteLength;case yr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:case Vs:return Math.max(i,16)*Math.max(e,8)/4;case zs:case Hs:return Math.max(i,8)*Math.max(e,8)/2;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case js:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oa:case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hh(i){switch(i){case pn:case nl:return{byteLength:1,components:1};case Fi:case il:case Vi:return{byteLength:2,components:1};case Sa:case Ma:return{byteLength:2,components:4};case Xn:case xa:case en:return{byteLength:4,components:1};case rl:case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);function yl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vh(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],T=h[p];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,h[d]=T)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const T=h[p];i.bufferSubData(l,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,od=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ud=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,md=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ed=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:$h,aomap_fragment:Zh,aomap_pars_fragment:Jh,batching_pars_vertex:jh,batching_vertex:Qh,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:ru,clipping_planes_fragment:su,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:fu,common:du,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,colorspace_fragment:Su,colorspace_pars_fragment:Mu,envmap_fragment:Eu,envmap_common_pars_fragment:yu,envmap_pars_fragment:Tu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Nu,envmap_vertex:Au,fog_vertex:wu,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Du,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Uu,lights_pars_begin:Fu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Bu,lights_phong_fragment:ku,lights_phong_pars_fragment:zu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Hu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:$u,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphinstance_vertex:nf,morphcolor_vertex:rf,morphnormal_vertex:sf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:ff,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:xf,premultiplied_alpha_fragment:Sf,project_vertex:Mf,dithering_fragment:Ef,dithering_pars_fragment:yf,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:wf,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Df,skinnormal_vertex:If,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Nf,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:kf,uv_pars_fragment:zf,uv_pars_vertex:Gf,uv_vertex:Hf,worldpos_vertex:Vf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Kf,cube_frag:$f,depth_vert:Zf,depth_frag:Jf,distanceRGBA_vert:jf,distanceRGBA_frag:Qf,equirect_vert:ed,equirect_frag:td,linedashed_vert:nd,linedashed_frag:id,meshbasic_vert:rd,meshbasic_frag:sd,meshlambert_vert:ad,meshlambert_frag:od,meshmatcap_vert:ld,meshmatcap_frag:cd,meshnormal_vert:hd,meshnormal_frag:ud,meshphong_vert:fd,meshphong_frag:dd,meshphysical_vert:pd,meshphysical_frag:md,meshtoon_vert:gd,meshtoon_frag:_d,points_vert:vd,points_frag:xd,shadow_vert:Sd,shadow_frag:Md,sprite_vert:Ed,sprite_frag:yd},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Jt={basic:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:St([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:St([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:St([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:St([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:St([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:St([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:St([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:St([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:St([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:St([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Jt.physical={uniforms:St([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const gr={r:0,b:0,g:0},Un=new mn,Td=new ut;function bd(i,e,t,n,r,s,a){const o=new Ze(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function x(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A)),A}function T(C){let A=!1;const S=x(C);S===null?f(o,c):S&&S.isColor&&(f(S,1),A=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,A){const S=x(A);S&&(S.isCubeTexture||S.mapping===Dr)?(u===void 0&&(u=new nn(new Yi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:yi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Un.copy(A.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Td.makeRotationFromEuler(Un)),u.material.toneMapped=We.getTransfer(S.colorSpace)!==$e,(h!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new Ki(2,2),new Ot({name:"BackgroundMaterial",uniforms:yi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=We.getTransfer(S.colorSpace)!==$e,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,A){C.getRGB(gr,gl(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,A,a)}function L(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,A=1){o.set(C),c=A,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,f(o,c)},render:T,addToRenderList:m,dispose:L}}function Ad(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(g,b,I,N,B){let z=!1;const k=h(N,I,b);s!==k&&(s=k,l(s.object)),z=p(g,N,I,B),z&&x(g,N,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,A(g,b,I,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,b,I){const N=I.wireframe===!0;let B=n[g.id];B===void 0&&(B={},n[g.id]=B);let z=B[b.id];z===void 0&&(z={},B[b.id]=z);let k=z[N];return k===void 0&&(k=d(c()),z[N]=k),k}function d(g){const b=[],I=[],N=[];for(let B=0;B<t;B++)b[B]=0,I[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:N,object:g,attributes:{},index:null}}function p(g,b,I,N){const B=s.attributes,z=b.attributes;let k=0;const K=I.getAttributes();for(const W in K)if(K[W].location>=0){const se=B[W];let me=z[W];if(me===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(me=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(me=g.instanceColor)),se===void 0||se.attribute!==me||me&&se.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function x(g,b,I,N){const B={},z=b.attributes;let k=0;const K=I.getAttributes();for(const W in K)if(K[W].location>=0){let se=z[W];se===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(se=g.instanceColor));const me={};me.attribute=se,se&&se.data&&(me.data=se.data),B[W]=me,k++}s.attributes=B,s.attributesNum=k,s.index=N}function T(){const g=s.newAttributes;for(let b=0,I=g.length;b<I;b++)g[b]=0}function m(g){f(g,0)}function f(g,b){const I=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;I[g]=1,N[g]===0&&(i.enableVertexAttribArray(g),N[g]=1),B[g]!==b&&(i.vertexAttribDivisor(g,b),B[g]=b)}function L(){const g=s.newAttributes,b=s.enabledAttributes;for(let I=0,N=b.length;I<N;I++)b[I]!==g[I]&&(i.disableVertexAttribArray(I),b[I]=0)}function C(g,b,I,N,B,z,k){k===!0?i.vertexAttribIPointer(g,b,I,B,z):i.vertexAttribPointer(g,b,I,N,B,z)}function A(g,b,I,N){T();const B=N.attributes,z=I.getAttributes(),k=b.defaultAttributeValues;for(const K in z){const W=z[K];if(W.location>=0){let j=B[K];if(j===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(j=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(j=g.instanceColor)),j!==void 0){const se=j.normalized,me=j.itemSize,be=e.get(j);if(be===void 0)continue;const ke=be.buffer,Xe=be.type,Ue=be.bytesPerElement,Y=Xe===i.INT||Xe===i.UNSIGNED_INT||j.gpuType===xa;if(j.isInterleavedBufferAttribute){const Z=j.data,he=Z.stride,ye=j.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)f(W.location+_e,Z.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let _e=0;_e<W.locationSize;_e++)C(W.location+_e,me/W.locationSize,Xe,se,he*Ue,(ye+me/W.locationSize*_e)*Ue,Y)}else{if(j.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)f(W.location+Z,j.meshPerAttribute);g.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Z=0;Z<W.locationSize;Z++)C(W.location+Z,me/W.locationSize,Xe,se,me*Ue,me/W.locationSize*Z*Ue,Y)}}else if(k!==void 0){const se=k[K];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(W.location,se);break;case 3:i.vertexAttrib3fv(W.location,se);break;case 4:i.vertexAttrib4fv(W.location,se);break;default:i.vertexAttrib1fv(W.location,se)}}}}L()}function S(){R();for(const g in n){const b=n[g];for(const I in b){const N=b[I];for(const B in N)u(N[B].object),delete N[B];delete b[I]}delete n[g]}}function M(g){if(n[g.id]===void 0)return;const b=n[g.id];for(const I in b){const N=b[I];for(const B in N)u(N[B].object),delete N[B];delete b[I]}delete n[g.id]}function y(g){for(const b in n){const I=n[b];if(I[g.id]===void 0)continue;const N=I[g.id];for(const B in N)u(N[B].object),delete N[B];delete I[g.id]}}function R(){_(),a=!0,s!==r&&(s=r,l(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:y,initAttributes:T,enableAttribute:m,disableUnusedAttributes:L}}function wd(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let x=0;for(let T=0;T<h;T++)x+=u[T]*d[T];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==Kt&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const R=y===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==pn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==en&&!R)}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=x>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:S,maxSamples:M}}function Cd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Nn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,T=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{const L=s?0:n,C=L*4;let A=f.clippingState||null;c.value=A,A=u(x,d,C,p);for(let S=0;S!==C;++S)A[S]=t[S];f.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,x){const T=h!==null?h.length:0;let m=null;if(T!==0){if(m=c.value,x!==!0||m===null){const f=p+T*4,L=d.matrixWorldInverse;o.getNormalMatrix(L),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,A=p;C!==T;++C,A+=4)a.copy(h[C]).applyMatrix4(L,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,m}}function Pd(i){let e=new WeakMap;function t(a,o){return o===Ns?a.mapping=Si:o===Os&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ns||o===Os)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Rh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const mi=4,uo=[.125,.215,.35,.446,.526,.582],kn=20,ms=new El,fo=new Ze;let gs=null,_s=0,vs=0,xs=!1;const On=(1+Math.sqrt(5))/2,hi=1/On,po=[new H(-On,hi,0),new H(On,hi,0),new H(-hi,0,On),new H(hi,0,On),new H(0,On,-hi),new H(0,On,hi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Ld=new H;class mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ld}=s;gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gs,_s,vs),this._renderer.xr.enabled=xs,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Vi,format:Kt,colorSpace:Ei,depthBuffer:!1},r=go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(s)),this._blurMaterial=Id(s,e,t)}return r}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r,s){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(fo),h.toneMapping=An,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const T=new Ur({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new nn(new Yi,T);let f=!1;const L=e.background;L?L.isColor&&(T.color.copy(L),e.background=null,f=!0):(T.color.copy(fo),f=!0);for(let C=0;C<6;C++){const A=C%3;A===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[C],s.y,s.z)):A===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[C]));const S=this._cubeSize;_r(r,A*S,C>2?S:0,S,S),h.setRenderTarget(r),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Si||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=po[(r-s-1)%po.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kn-1),T=s/x,m=isFinite(s)?1+Math.floor(u*T):kn;m>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let L=0;for(let y=0;y<kn;++y){const R=y/T,_=Math.exp(-R*R/2);f.push(_),y===0?L+=_:y<m&&(L+=2*_)}for(let y=0;y<f.length;y++)f[y]=f[y]/L;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-n;const A=this._sizeLods[r],S=3*A*(r>C-mi?r-C+mi:0),M=4*(this._cubeSize-A);_r(t,S,M,3*A,2*A),c.setRenderTarget(t),c.render(h,ms)}}function Dd(i){const e=[],t=[],n=[];let r=i;const s=i-mi+1+uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-mi?c=uo[a-i+mi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,T=3,m=2,f=1,L=new Float32Array(T*x*p),C=new Float32Array(m*x*p),A=new Float32Array(f*x*p);for(let M=0;M<p;M++){const y=M%3*2/3-1,R=M>2?0:-1,_=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];L.set(_,T*x*M),C.set(d,m*x*M);const g=[M,M,M,M,M,M];A.set(g,f*x*M)}const S=new Yn;S.setAttribute("position",new rn(L,T)),S.setAttribute("uv",new rn(C,m)),S.setAttribute("faceIndex",new rn(A,f)),e.push(S),r>mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function go(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Id(i,e,t){const n=new Float32Array(kn),r=new H(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function _o(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function vo(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ud(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ns||c===Os,u=c===Si||c===Mi;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new mo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new mo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Nd(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,x=h.attributes.position;let T=0;if(p!==null){const L=p.array;T=p.version;for(let C=0,A=L.length;C<A;C+=3){const S=L[C+0],M=L[C+1],y=L[C+2];d.push(S,M,M,y,y,S)}}else if(x!==void 0){const L=x.array;T=x.version;for(let C=0,A=L.length/3-1;C<A;C+=3){const S=C+0,M=C+1,y=C+2;d.push(S,M,M,y,y,S)}}else return;const m=new(hl(d)?ml:pl)(d,1);m.version=T;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Od(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*a,x),t.update(p,n,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,n,1)}function h(d,p,x,T){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],T[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,T,0,x);let f=0;for(let L=0;L<x;L++)f+=p[L]*T[L];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kd(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let g=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var p=g;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let A=0;x===!0&&(A=1),T===!0&&(A=2),m===!0&&(A=3);let S=o.attributes.position.count*A,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*M*4*h),R=new ul(y,S,M,h);R.type=en,R.needsUpdate=!0;const _=A*4;for(let b=0;b<h;b++){const I=f[b],N=L[b],B=C[b],z=S*M*4*b;for(let k=0;k<I.count;k++){const K=k*_;x===!0&&(r.fromBufferAttribute(I,k),y[z+K+0]=r.x,y[z+K+1]=r.y,y[z+K+2]=r.z,y[z+K+3]=0),T===!0&&(r.fromBufferAttribute(N,k),y[z+K+4]=r.x,y[z+K+5]=r.y,y[z+K+6]=r.z,y[z+K+7]=0),m===!0&&(r.fromBufferAttribute(B,k),y[z+K+8]=r.x,y[z+K+9]=r.y,y[z+K+10]=r.z,y[z+K+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Je(S,M)},n.set(o,d),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const T=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",T),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function zd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Tl=new _t,xo=new Sl(1,1),bl=new ul,Al=new hh,wl=new vl,So=[],Mo=[],Eo=new Float32Array(16),yo=new Float32Array(9),To=new Float32Array(4);function bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=So[r];if(s===void 0&&(s=new Float32Array(r),So[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fr(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),dt(t,n)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;yo.set(n),i.uniformMatrix3fv(this.addr,!1,yo),dt(t,n)}}function Yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Eo.set(n),i.uniformMatrix4fv(this.addr,!1,Eo),dt(t,n)}}function Kd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xo.compareFunction=cl,s=xo):s=Tl,t.setTexture2D(e||s,r)}function ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Al,r)}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wl,r)}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bl,r)}function ap(i){switch(i){case 5126:return Gd;case 35664:return Hd;case 35665:return Vd;case 35666:return Wd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return Kd;case 35667:case 35671:return $d;case 35668:case 35672:return Zd;case 35669:case 35673:return Jd;case 5125:return jd;case 36294:return Qd;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return sp}}function op(i,e){i.uniform1fv(this.addr,e)}function lp(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function cp(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function hp(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function up(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fp(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dp(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pp(i,e){i.uniform1iv(this.addr,e)}function mp(i,e){i.uniform2iv(this.addr,e)}function gp(i,e){i.uniform3iv(this.addr,e)}function _p(i,e){i.uniform4iv(this.addr,e)}function vp(i,e){i.uniform1uiv(this.addr,e)}function xp(i,e){i.uniform2uiv(this.addr,e)}function Sp(i,e){i.uniform3uiv(this.addr,e)}function Mp(i,e){i.uniform4uiv(this.addr,e)}function Ep(i,e,t){const n=this.cache,r=e.length,s=Fr(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Tl,s[a])}function yp(i,e,t){const n=this.cache,r=e.length,s=Fr(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Al,s[a])}function Tp(i,e,t){const n=this.cache,r=e.length,s=Fr(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wl,s[a])}function bp(i,e,t){const n=this.cache,r=e.length,s=Fr(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bl,s[a])}function Ap(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Sp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return bp}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ap(t.type)}}class Rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ap(t.type)}}class Cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function bo(i,e){i.seq.push(e),i.map[e.id]=e}function Pp(i,e,t){const n=i.name,r=n.length;for(Ss.lastIndex=0;;){const s=Ss.exec(n),a=Ss.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){bo(t,l===void 0?new wp(o,i,e):new Rp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Cp(o),bo(t,h)),t=h}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Pp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ao(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lp=37297;let Dp=0;function Ip(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const wo=new Oe;function Up(i){We._getMatrix(wo,We.workingColorSpace,i);const e=`mat3( ${wo.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ro(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ip(i.getShaderSource(e),o)}else return s}function Fp(i,e){const t=Up(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Np(i,e){let t;switch(e){case Oc:t="Linear";break;case Bc:t="Reinhard";break;case kc:t="Cineon";break;case zc:t="ACESFilmic";break;case Hc:t="AgX";break;case Vc:t="Neutral";break;case Gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new H;function Op(){We.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function kp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function Co(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(Gp,Vp)}const Hp=new Map;function Vp(i,e){let t=Be[e];if(t===void 0){const n=Hp.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(i){return i.replace(Wp,Xp)}function Xp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Do(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Yp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case Mi:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function Zp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=qp(t),l=Yp(t),u=Kp(t),h=$p(t),d=Zp(t),p=Bp(t),x=kp(s),T=r.createProgram();let m,f,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ii).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(m=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Be.tonemapping_pars_fragment:"",t.toneMapping!==An?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Fp("linearToOutputTexel",t.outputColorSpace),Op(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ma(a),a=Co(a,t),a=Po(a,t),o=ma(o),o=Co(o,t),o=Po(o,t),a=Lo(a),o=Lo(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=L+m+a,A=L+f+o,S=Ao(r,r.VERTEX_SHADER,C),M=Ao(r,r.FRAGMENT_SHADER,A);r.attachShader(T,S),r.attachShader(T,M),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function y(b){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(T)||"",N=r.getShaderInfoLog(S)||"",B=r.getShaderInfoLog(M)||"",z=I.trim(),k=N.trim(),K=B.trim();let W=!0,j=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,S,M);else{const se=Ro(r,S,"vertex"),me=Ro(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+se+`
`+me)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||K==="")&&(j=!1);j&&(b.diagnostics={runnable:W,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(S),r.deleteShader(M),R=new wr(r,T),_=zp(r,T)}let R;this.getUniforms=function(){return R===void 0&&y(this),R};let _;this.getAttributes=function(){return _===void 0&&y(this),_};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(T,Lp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dp++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=S,this.fragmentShader=M,this}let jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}}function tm(i,e,t,n,r,s,a){const o=new fl,c=new Qp,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,g,b,I,N){const B=I.fog,z=N.geometry,k=_.isMeshStandardMaterial?I.environment:null,K=(_.isMeshStandardMaterial?t:e).get(_.envMap||k),W=K&&K.mapping===Dr?K.image.height:null,j=x[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=se!==void 0?se.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let ke,Xe,Ue,Y;if(j){const Ye=Jt[j];ke=Ye.vertexShader,Xe=Ye.fragmentShader}else ke=_.vertexShader,Xe=_.fragmentShader,c.update(_),Ue=c.getVertexShaderID(_),Y=c.getFragmentShaderID(_);const Z=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,Fe=!!_.map,st=!!_.matcap,P=!!K,je=!!_.aoMap,De=!!_.lightMap,we=!!_.bumpMap,ue=!!_.normalMap,qe=!!_.displacementMap,fe=!!_.emissiveMap,Le=!!_.metalnessMap,rt=!!_.roughnessMap,Qe=_.anisotropy>0,w=_.clearcoat>0,v=_.dispersion>0,O=_.iridescence>0,q=_.sheen>0,J=_.transmission>0,X=Qe&&!!_.anisotropyMap,Ee=w&&!!_.clearcoatMap,ie=w&&!!_.clearcoatNormalMap,xe=w&&!!_.clearcoatRoughnessMap,Se=O&&!!_.iridescenceMap,te=O&&!!_.iridescenceThicknessMap,ce=q&&!!_.sheenColorMap,Ce=q&&!!_.sheenRoughnessMap,Me=!!_.specularMap,oe=!!_.specularColorMap,Ne=!!_.specularIntensityMap,D=J&&!!_.transmissionMap,ne=J&&!!_.thicknessMap,re=!!_.gradientMap,pe=!!_.alphaMap,Q=_.alphaTest>0,$=!!_.alphaHash,ve=!!_.extensions;let Ie=An;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const tt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:ke,fragmentShader:Xe,defines:_.defines,customVertexShaderID:Ue,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ei,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:st,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:W,aoMap:je,lightMap:De,bumpMap:we,normalMap:ue,displacementMap:d&&qe,emissiveMap:fe,normalMapObjectSpace:ue&&_.normalMapType===Kc,normalMapTangentSpace:ue&&_.normalMapType===Yc,metalnessMap:Le,roughnessMap:rt,anisotropy:Qe,anisotropyMap:X,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:v,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:oe,specularIntensityMap:Ne,transmission:J,transmissionMap:D,thicknessMap:ne,gradientMap:re,opaque:_.transparent===!1&&_.blending===_i&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:$,combine:_.combine,mapUv:Fe&&T(_.map.channel),aoMapUv:je&&T(_.aoMap.channel),lightMapUv:De&&T(_.lightMap.channel),bumpMapUv:we&&T(_.bumpMap.channel),normalMapUv:ue&&T(_.normalMap.channel),displacementMapUv:qe&&T(_.displacementMap.channel),emissiveMapUv:fe&&T(_.emissiveMap.channel),metalnessMapUv:Le&&T(_.metalnessMap.channel),roughnessMapUv:rt&&T(_.roughnessMap.channel),anisotropyMapUv:X&&T(_.anisotropyMap.channel),clearcoatMapUv:Ee&&T(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&T(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&T(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&T(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&T(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&T(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&T(_.sheenRoughnessMap.channel),specularMapUv:Me&&T(_.specularMap.channel),specularColorMapUv:oe&&T(_.specularColorMap.channel),specularIntensityMapUv:Ne&&T(_.specularIntensityMap.channel),transmissionMapUv:D&&T(_.transmissionMap.channel),thicknessMapUv:ne&&T(_.thicknessMap.channel),alphaMapUv:pe&&T(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||Qe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Fe||pe),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:be,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:fe&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function f(_){const g=[];if(_.shaderID?g.push(_.shaderID):(g.push(_.customVertexShaderID),g.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)g.push(b),g.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(L(g,_),C(g,_),g.push(i.outputColorSpace)),g.push(_.customProgramCacheKey),g.join()}function L(_,g){_.push(g.precision),_.push(g.outputColorSpace),_.push(g.envMapMode),_.push(g.envMapCubeUVHeight),_.push(g.mapUv),_.push(g.alphaMapUv),_.push(g.lightMapUv),_.push(g.aoMapUv),_.push(g.bumpMapUv),_.push(g.normalMapUv),_.push(g.displacementMapUv),_.push(g.emissiveMapUv),_.push(g.metalnessMapUv),_.push(g.roughnessMapUv),_.push(g.anisotropyMapUv),_.push(g.clearcoatMapUv),_.push(g.clearcoatNormalMapUv),_.push(g.clearcoatRoughnessMapUv),_.push(g.iridescenceMapUv),_.push(g.iridescenceThicknessMapUv),_.push(g.sheenColorMapUv),_.push(g.sheenRoughnessMapUv),_.push(g.specularMapUv),_.push(g.specularColorMapUv),_.push(g.specularIntensityMapUv),_.push(g.transmissionMapUv),_.push(g.thicknessMapUv),_.push(g.combine),_.push(g.fogExp2),_.push(g.sizeAttenuation),_.push(g.morphTargetsCount),_.push(g.morphAttributeCount),_.push(g.numDirLights),_.push(g.numPointLights),_.push(g.numSpotLights),_.push(g.numSpotLightMaps),_.push(g.numHemiLights),_.push(g.numRectAreaLights),_.push(g.numDirLightShadows),_.push(g.numPointLightShadows),_.push(g.numSpotLightShadows),_.push(g.numSpotLightShadowsWithMaps),_.push(g.numLightProbes),_.push(g.shadowMapType),_.push(g.toneMapping),_.push(g.numClippingPlanes),_.push(g.numClipIntersection),_.push(g.depthPacking)}function C(_,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),_.push(o.mask)}function A(_){const g=x[_.type];let b;if(g){const I=Jt[g];b=Th.clone(I.uniforms)}else b=_.uniforms;return b}function S(_,g){let b;for(let I=0,N=u.length;I<N;I++){const B=u[I];if(B.cacheKey===g){b=B,++b.usedTimes;break}}return b===void 0&&(b=new Jp(i,g,_,s),u.push(b)),b}function M(_){if(--_.usedTimes===0){const g=u.indexOf(_);u[g]=u[u.length-1],u.pop(),_.destroy()}}function y(_){c.remove(_)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:S,releaseProgram:M,releaseShaderCache:y,programs:u,dispose:R}}function nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Io(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,x,T,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:T,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=T,f.group=m),e++,f}function o(h,d,p,x,T,m){const f=a(h,d,p,x,T,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,x,T,m){const f=a(h,d,p,x,T,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||im),n.length>1&&n.sort(d||Io),r.length>1&&r.sort(d||Io)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function rm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Uo,i.set(n,[a])):r>=s.length?(a=new Uo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let om=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i){const e=new sm,t=am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new ut,a=new ut;function o(l){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,x=0,T=0,m=0,f=0,L=0,C=0,A=0,S=0,M=0,y=0;l.sort(lm);for(let _=0,g=l.length;_<g;_++){const b=l[_],I=b.color,N=b.intensity,B=b.distance,z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(b.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(b.sh.coefficients[k],N);y++}else if(b.isDirectionalLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,W=t.get(b);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=b.shadow.matrix,L++}n.directional[p]=k,p++}else if(b.isSpotLight){const k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(I).multiplyScalar(N),k.distance=B,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,n.spot[T]=k;const K=b.shadow;if(b.map&&(n.spotLightMap[S]=b.map,S++,K.updateMatrices(b),b.castShadow&&M++),n.spotLightMatrix[T]=K.matrix,b.castShadow){const W=t.get(b);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[T]=W,n.spotShadowMap[T]=z,A++}T++}else if(b.isRectAreaLight){const k=e.get(b);k.color.copy(I).multiplyScalar(N),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=k,m++}else if(b.isPointLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const K=b.shadow,W=t.get(b);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=b.shadow.matrix,C++}n.point[x]=k,x++}else if(b.isHemisphereLight){const k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(N),k.groundColor.copy(b.groundColor).multiplyScalar(N),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==T||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==L||R.numPointShadows!==C||R.numSpotShadows!==A||R.numSpotMaps!==S||R.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=T,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=A+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=y,R.directionalLength=p,R.pointLength=x,R.spotLength=T,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=L,R.numPointShadows=C,R.numSpotShadows=A,R.numSpotMaps=S,R.numLightProbes=y,n.version=om++)}function c(l,u){let h=0,d=0,p=0,x=0,T=0;const m=u.matrixWorldInverse;for(let f=0,L=l.length;f<L;f++){const C=l[f];if(C.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(C.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(C.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const A=n.hemi[T];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(m),T++}}}return{setup:o,setupView:c,state:n}}function Fo(i){const e=new cm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function hm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fo(i),e.set(r,[o])):s>=a.length?(o=new Fo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dm(i,e,t){let n=new xl;const r=new Je,s=new Je,a=new ct,o=new Fh({depthPacking:qc}),c=new Nh,l={},u=t.maxTextureSize,h={[wn]:yt,[yt]:wn,[fn]:fn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:um,fragmentShader:fm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Yn;x.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new nn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let f=this.type;this.render=function(M,y,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const _=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),I=i.state;I.setBlending(bn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==un&&this.type===un,B=f===un&&this.type!==un;for(let z=0,k=M.length;z<k;z++){const K=M[z],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const j=W.getFrameExtents();if(r.multiply(j),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,W.mapSize.y=s.y)),W.map===null||N===!0||B===!0){const me=this.type!==un?{minFilter:Lt,magFilter:Lt}:{};W.map!==null&&W.map.dispose(),W.map=new qn(r.x,r.y,me),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const se=W.getViewportCount();for(let me=0;me<se;me++){const be=W.getViewport(me);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),I.viewport(a),W.updateMatrices(K,me),n=W.getFrustum(),A(y,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===un&&L(W,R),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,g,b)};function L(M,y){const R=e.update(T);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qn(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(y,null,R,d,T,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(y,null,R,p,T,null)}function C(M,y,R,_){let g=null;const b=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)g=b;else if(g=R.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const I=g.uuid,N=y.uuid;let B=l[I];B===void 0&&(B={},l[I]=B);let z=B[N];z===void 0&&(z=g.clone(),B[N]=z,y.addEventListener("dispose",S)),g=z}if(g.visible=y.visible,g.wireframe=y.wireframe,_===un?g.side=y.shadowSide!==null?y.shadowSide:y.side:g.side=y.shadowSide!==null?y.shadowSide:h[y.side],g.alphaMap=y.alphaMap,g.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,g.map=y.map,g.clipShadows=y.clipShadows,g.clippingPlanes=y.clippingPlanes,g.clipIntersection=y.clipIntersection,g.displacementMap=y.displacementMap,g.displacementScale=y.displacementScale,g.displacementBias=y.displacementBias,g.wireframeLinewidth=y.wireframeLinewidth,g.linewidth=y.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const I=i.properties.get(g);I.light=R}return g}function A(M,y,R,_,g){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&g===un)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const N=e.update(M),B=M.material;if(Array.isArray(B)){const z=N.groups;for(let k=0,K=z.length;k<K;k++){const W=z[k],j=B[W.materialIndex];if(j&&j.visible){const se=C(M,j,_,g);M.onBeforeShadow(i,M,y,R,N,se,W),i.renderBufferDirect(R,null,N,se,M,W),M.onAfterShadow(i,M,y,R,N,se,W)}}}else if(B.visible){const z=C(M,B,_,g);M.onBeforeShadow(i,M,y,R,N,z,null),i.renderBufferDirect(R,null,N,z,M,null),M.onAfterShadow(i,M,y,R,N,z,null)}}const I=M.children;for(let N=0,B=I.length;N<B;N++)A(I[N],y,R,_,g)}function S(M){M.target.removeEventListener("dispose",S);for(const R in l){const _=l[R],g=M.target.uuid;g in _&&(_[g].dispose(),delete _[g])}}}const pm={[Cs]:Ps,[Ls]:Us,[Ds]:Fs,[xi]:Is,[Ps]:Cs,[Us]:Ls,[Fs]:Ds,[Is]:xi};function mm(i,e){function t(){let D=!1;const ne=new ct;let re=null;const pe=new ct(0,0,0,0);return{setMask:function(Q){re!==Q&&!D&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){D=Q},setClear:function(Q,$,ve,Ie,tt){tt===!0&&(Q*=Ie,$*=Ie,ve*=Ie),ne.set(Q,$,ve,Ie),pe.equals(ne)===!1&&(i.clearColor(Q,$,ve,Ie),pe.copy(ne))},reset:function(){D=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,ne=!1,re=null,pe=null,Q=null;return{setReversed:function($){if(ne!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return ne},setTest:function($){$?Z(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function($){re!==$&&!D&&(i.depthMask($),re=$)},setFunc:function($){if(ne&&($=pm[$]),pe!==$){switch($){case Cs:i.depthFunc(i.NEVER);break;case Ps:i.depthFunc(i.ALWAYS);break;case Ls:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Ds:i.depthFunc(i.EQUAL);break;case Is:i.depthFunc(i.GEQUAL);break;case Us:i.depthFunc(i.GREATER);break;case Fs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=$}},setLocked:function($){D=$},setClear:function($){Q!==$&&(ne&&($=1-$),i.clearDepth($),Q=$)},reset:function(){D=!1,re=null,pe=null,Q=null,ne=!1}}}function r(){let D=!1,ne=null,re=null,pe=null,Q=null,$=null,ve=null,Ie=null,tt=null;return{setTest:function(Ye){D||(Ye?Z(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!D&&(i.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,sn,$t){(re!==Ye||pe!==sn||Q!==$t)&&(i.stencilFunc(Ye,sn,$t),re=Ye,pe=sn,Q=$t)},setOp:function(Ye,sn,$t){($!==Ye||ve!==sn||Ie!==$t)&&(i.stencilOp(Ye,sn,$t),$=Ye,ve=sn,Ie=$t)},setLocked:function(Ye){D=Ye},setClear:function(Ye){tt!==Ye&&(i.clearStencil(Ye),tt=Ye)},reset:function(){D=!1,ne=null,re=null,pe=null,Q=null,$=null,ve=null,Ie=null,tt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],x=null,T=!1,m=null,f=null,L=null,C=null,A=null,S=null,M=null,y=new Ze(0,0,0),R=0,_=!1,g=null,b=null,I=null,N=null,B=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=K>=2);let j=null,se={};const me=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ke=new ct().fromArray(me),Xe=new ct().fromArray(be);function Ue(D,ne,re,pe){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const Y={};Y[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(xi),we(!1),ue(za),Z(i.CULL_FACE),je(bn);function Z(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function he(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ye(D,ne){return h[D]!==ne?(i.bindFramebuffer(D,ne),h[D]=ne,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function _e(D,ne){let re=p,pe=!1;if(D){re=d.get(ne),re===void 0&&(re=[],d.set(ne,re));const Q=D.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ve=Q.length;$<ve;$++)re[$]=i.COLOR_ATTACHMENT0+$;re.length=Q.length,pe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,pe=!0);pe&&i.drawBuffers(re)}function Fe(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const st={[Bn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};st[Sc]=i.MIN,st[Mc]=i.MAX;const P={[Ec]:i.ZERO,[yc]:i.ONE,[Tc]:i.SRC_COLOR,[ws]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[bc]:i.ONE_MINUS_SRC_COLOR,[Rs]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Lc]:i.CONSTANT_COLOR,[Dc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Uc]:i.ONE_MINUS_CONSTANT_ALPHA};function je(D,ne,re,pe,Q,$,ve,Ie,tt,Ye){if(D===bn){T===!0&&(he(i.BLEND),T=!1);return}if(T===!1&&(Z(i.BLEND),T=!0),D!==_c){if(D!==m||Ye!==_){if((f!==Bn||A!==Bn)&&(i.blendEquation(i.FUNC_ADD),f=Bn,A=Bn),Ye)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Va:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ha:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Va:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}L=null,C=null,S=null,M=null,y.set(0,0,0),R=0,m=D,_=Ye}return}Q=Q||ne,$=$||re,ve=ve||pe,(ne!==f||Q!==A)&&(i.blendEquationSeparate(st[ne],st[Q]),f=ne,A=Q),(re!==L||pe!==C||$!==S||ve!==M)&&(i.blendFuncSeparate(P[re],P[pe],P[$],P[ve]),L=re,C=pe,S=$,M=ve),(Ie.equals(y)===!1||tt!==R)&&(i.blendColor(Ie.r,Ie.g,Ie.b,tt),y.copy(Ie),R=tt),m=D,_=!1}function De(D,ne){D.side===fn?he(i.CULL_FACE):Z(i.CULL_FACE);let re=D.side===yt;ne&&(re=!re),we(re),D.blending===_i&&D.transparent===!1?je(bn):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){g!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),g=D)}function ue(D){D!==pc?(Z(i.CULL_FACE),D!==b&&(D===za?i.cullFace(i.BACK):D===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),b=D}function qe(D){D!==I&&(k&&i.lineWidth(D),I=D)}function fe(D,ne,re){D?(Z(i.POLYGON_OFFSET_FILL),(N!==ne||B!==re)&&(i.polygonOffset(ne,re),N=ne,B=re)):he(i.POLYGON_OFFSET_FILL)}function Le(D){D?Z(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function rt(D){D===void 0&&(D=i.TEXTURE0+z-1),j!==D&&(i.activeTexture(D),j=D)}function Qe(D,ne,re){re===void 0&&(j===null?re=i.TEXTURE0+z-1:re=j);let pe=se[re];pe===void 0&&(pe={type:void 0,texture:void 0},se[re]=pe),(pe.type!==D||pe.texture!==ne)&&(j!==re&&(i.activeTexture(re),j=re),i.bindTexture(D,ne||Y[D]),pe.type=D,pe.texture=ne)}function w(){const D=se[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(D){ke.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ke.copy(D))}function Ce(D){Xe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Xe.copy(D))}function Me(D,ne){let re=l.get(ne);re===void 0&&(re=new WeakMap,l.set(ne,re));let pe=re.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(ne,D.name),re.set(D,pe))}function oe(D,ne){const pe=l.get(ne).get(D);c.get(ne)!==pe&&(i.uniformBlockBinding(ne,pe,D.__bindingPointIndex),c.set(ne,pe))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,se={},h={},d=new WeakMap,p=[],x=null,T=!1,m=null,f=null,L=null,C=null,A=null,S=null,M=null,y=new Ze(0,0,0),R=0,_=!1,g=null,b=null,I=null,N=null,B=null,ke.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:he,bindFramebuffer:ye,drawBuffers:_e,useProgram:Fe,setBlending:je,setMaterial:De,setFlipSided:we,setCullFace:ue,setLineWidth:qe,setPolygonOffset:fe,setScissorTest:Le,activeTexture:rt,bindTexture:Qe,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Se,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:ce,viewport:Ce,reset:Ne}}function gm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,v){return p?new OffscreenCanvas(w,v):ki("canvas")}function T(w,v,O){let q=1;const J=Qe(w);if((J.width>O||J.height>O)&&(q=O/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*J.width),Ee=Math.floor(q*J.height);h===void 0&&(h=x(X,Ee));const ie=v?x(X,Ee):h;return ie.width=X,ie.height=Ee,ie.getContext("2d").drawImage(w,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Ee+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function L(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(w,v,O,q,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Ee=J?Rr:We.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Ee===$e?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(w,v){let O;return w?v===null||v===Xn||v===Ni?O=i.DEPTH24_STENCIL8:v===en?O=i.DEPTH32F_STENCIL8:v===Fi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===Ni?O=i.DEPTH_COMPONENT24:v===en?O=i.DEPTH_COMPONENT32F:v===Fi&&(O=i.DEPTH_COMPONENT16),O}function S(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function M(w){const v=w.target;v.removeEventListener("dispose",M),R(v),v.isVideoTexture&&u.delete(v)}function y(w){const v=w.target;v.removeEventListener("dispose",y),g(v)}function R(w){const v=n.get(w);if(v.__webglInit===void 0)return;const O=w.source,q=d.get(O);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(w),Object.keys(q).length===0&&d.delete(O)}n.remove(w)}function _(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const O=w.source,q=d.get(O);delete q[v.__cacheKey],a.memory.textures--}function g(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[q][J]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,J=O.length;q<J;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(w)}let b=0;function I(){b=0}function N(){const w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function z(w,v){const O=n.get(w);if(w.isVideoTexture&&Le(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function k(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function K(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function W(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Z(O,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const j={[Bs]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},se={[Lt]:i.NEAREST,[Wc]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},me={[$c]:i.NEVER,[th]:i.ALWAYS,[Zc]:i.LESS,[cl]:i.LEQUAL,[Jc]:i.EQUAL,[eh]:i.GEQUAL,[jc]:i.GREATER,[Qc]:i.NOTEQUAL};function be(w,v){if(v.type===en&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===Vr||v.magFilter===Ji||v.magFilter===Gn||v.minFilter===Qt||v.minFilter===Vr||v.minFilter===Ji||v.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,j[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==Ji&&v.minFilter!==Gn||v.type===en&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",M));const q=v.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const X=B(v);if(X!==w.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;const Ee=J[w.__cacheKey];Ee!==void 0&&(J[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&_(v)),w.__cacheKey=X,w.__webglTexture=J[X].texture}return O}function Xe(w,v,O){return Math.floor(Math.floor(w/O)/v)}function Ue(w,v,O,q){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{X.sort((te,ce)=>te.start-ce.start);let Ee=0;for(let te=1;te<X.length;te++){const ce=X[Ee],Ce=X[te],Me=ce.start+ce.count,oe=Xe(Ce.start,v.width,4),Ne=Xe(ce.start,v.width,4);Ce.start<=Me+1&&oe===Ne&&Xe(Ce.start+Ce.count-1,v.width,4)===oe?ce.count=Math.max(ce.count,Ce.start+Ce.count-ce.start):(++Ee,X[Ee]=Ce)}X.length=Ee+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,ce=X.length;te<ce;te++){const Ce=X[te],Me=Math.floor(Ce.start/4),oe=Math.ceil(Ce.count/4),Ne=Me%v.width,D=Math.floor(Me/v.width),ne=oe,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ne,D,ne,re,O,q,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(w,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const J=ke(w,v),X=v.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);const Ee=n.get(X);if(X.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const ie=We.getPrimaries(We.workingColorSpace),xe=v.colorSpace===yn?null:We.getPrimaries(v.colorSpace),Se=v.colorSpace===yn||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=T(v.image,!1,r.maxTextureSize);te=rt(v,te);const ce=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Me=C(v.internalFormat,ce,Ce,v.colorSpace,v.isVideoTexture);be(q,v);let oe;const Ne=v.mipmaps,D=v.isVideoTexture!==!0,ne=Ee.__version===void 0||J===!0,re=X.dataReady,pe=S(v,te);if(v.isDepthTexture)Me=A(v.format===Bi,v.type),ne&&(D?t.texStorage2D(i.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,ce,Ce,null));else if(v.isDataTexture)if(Ne.length>0){D&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ce,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Me,oe.width,oe.height,0,ce,Ce,oe.data);v.generateMipmaps=!1}else D?(ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,te.width,te.height),re&&Ue(v,te,ce,Ce)):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,ce,Ce,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,$=Ne.length;Q<$;Q++)if(oe=Ne[Q],v.format!==Kt)if(ce!==null)if(D){if(re)if(v.layerUpdates.size>0){const ve=ho(oe.width,oe.height,v.format,v.type);for(const Ie of v.layerUpdates){const tt=oe.data.subarray(Ie*ve/oe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ie,oe.width,oe.height,1,ce,tt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,ce,Ce,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,oe.width,oe.height,te.depth,0,ce,Ce,oe.data)}else{D&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],v.format!==Kt?ce!==null?D?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ce,Ce,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Me,oe.width,oe.height,0,ce,Ce,oe.data)}else if(v.isDataArrayTexture)if(D){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,te.width,te.height,te.depth),re)if(v.layerUpdates.size>0){const Q=ho(te.width,te.height,v.format,v.type);for(const $ of v.layerUpdates){const ve=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ce,Ce,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,ce,Ce,te.data);else if(v.isData3DTexture)D?(ne&&t.texStorage3D(i.TEXTURE_3D,pe,Me,te.width,te.height,te.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,ce,Ce,te.data);else if(v.isFramebufferTexture){if(ne)if(D)t.texStorage2D(i.TEXTURE_2D,pe,Me,te.width,te.height);else{let Q=te.width,$=te.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Me,Q,$,0,ce,Ce,null),Q>>=1,$>>=1}}else if(Ne.length>0){if(D&&ne){const Q=Qe(Ne[0]);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}for(let Q=0,$=Ne.length;Q<$;Q++)oe=Ne[Q],D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce,Ce,oe):t.texImage2D(i.TEXTURE_2D,Q,Me,ce,Ce,oe);v.generateMipmaps=!1}else if(D){if(ne){const Q=Qe(te);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,Me,ce,Ce,te);m(v)&&f(q),Ee.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Z(w,v,O){if(v.image.length!==6)return;const q=ke(w,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const X=n.get(J);if(J.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const Ee=We.getPrimaries(We.workingColorSpace),ie=v.colorSpace===yn?null:We.getPrimaries(v.colorSpace),xe=v.colorSpace===yn||Ee===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!Se&&!te?ce[$]=T(v.image[$],!0,r.maxCubemapSize):ce[$]=te?v.image[$].image:v.image[$],ce[$]=rt(v,ce[$]);const Ce=ce[0],Me=s.convert(v.format,v.colorSpace),oe=s.convert(v.type),Ne=C(v.internalFormat,Me,oe,v.colorSpace),D=v.isVideoTexture!==!0,ne=X.__version===void 0||q===!0,re=J.dataReady;let pe=S(v,Ce);be(i.TEXTURE_CUBE_MAP,v);let Q;if(Se){D&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ne,Ce.width,Ce.height);for(let $=0;$<6;$++){Q=ce[$].mipmaps;for(let ve=0;ve<Q.length;ve++){const Ie=Q[ve];v.format!==Kt?Me!==null?D?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ie.width,Ie.height,Me,oe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ne,Ie.width,Ie.height,0,Me,oe,Ie.data)}}}else{if(Q=v.mipmaps,D&&ne){Q.length>0&&pe++;const $=Qe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(te){D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Me,oe,ce[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,ce[$].width,ce[$].height,0,Me,oe,ce[$].data);for(let ve=0;ve<Q.length;ve++){const tt=Q[ve].image[$].image;D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,tt.width,tt.height,Me,oe,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ne,tt.width,tt.height,0,Me,oe,tt.data)}}else{D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,oe,ce[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,Me,oe,ce[$]);for(let ve=0;ve<Q.length;ve++){const Ie=Q[ve];D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Me,oe,Ie.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ne,Me,oe,Ie.image[$])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function he(w,v,O,q,J,X){const Ee=s.convert(O.format,O.colorSpace),ie=s.convert(O.type),xe=C(O.internalFormat,Ee,ie,O.colorSpace),Se=n.get(v),te=n.get(O);if(te.__renderTarget=v,!Se.__hasExternalTextures){const ce=Math.max(1,v.width>>X),Ce=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,xe,ce,Ce,v.depth,0,Ee,ie,null):t.texImage2D(J,X,xe,ce,Ce,0,Ee,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,te.__webglTexture,0,qe(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=A(v.stencilBuffer,J),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=qe(v);fe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,w)}else{const q=v.textures;for(let J=0;J<q.length;J++){const X=q[J],Ee=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),xe=C(X.internalFormat,Ee,ie,X.colorSpace),Se=qe(v);O&&fe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,xe,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,xe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const J=q.__webglTexture,X=qe(v);if(v.depthTexture.format===Oi)fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Bi)fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?_e(v.__webglFramebuffer[0],w):_e(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),ye(v.__webglDepthbuffer[q],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ye(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,v,O){const q=n.get(w);v!==void 0&&he(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Fe(w)}function P(w){const v=w.texture,O=n.get(w),q=n.get(v);w.addEventListener("dispose",y);const J=w.textures,X=w.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[ie][xe]=i.createFramebuffer()}else O.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[ie]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ie=0,xe=J.length;ie<xe;ie++){const Se=n.get(J[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&fe(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const xe=J[ie];O.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const Se=s.convert(xe.format,xe.colorSpace),te=s.convert(xe.type),ce=C(xe.internalFormat,Se,te,xe.colorSpace,w.isXRRenderTarget===!0),Ce=qe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),be(i.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)he(O.__webglFramebuffer[ie][xe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else he(O.__webglFramebuffer[ie],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ie=0,xe=J.length;ie<xe;ie++){const Se=J[ie],te=n.get(Se);let ce=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),be(ce,Se),he(O.__webglFramebuffer,w,Se,i.COLOR_ATTACHMENT0+ie,ce,0),m(Se)&&f(ce)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),be(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)he(O.__webglFramebuffer[xe],w,v,i.COLOR_ATTACHMENT0,ie,xe);else he(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ie,0);m(v)&&f(ie),t.unbindTexture()}w.depthBuffer&&Fe(w)}function je(w){const v=w.textures;for(let O=0,q=v.length;O<q;O++){const J=v[O];if(m(J)){const X=L(w),Ee=n.get(J).__webglTexture;t.bindTexture(X,Ee),f(X),t.unbindTexture()}}}const De=[],we=[];function ue(w){if(w.samples>0){if(fe(w)===!1){const v=w.textures,O=w.width,q=w.height;let J=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(w),ie=v.length>1;if(ie)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const xe=w.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const te=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,J,i.NEAREST),c===!0&&(De.length=0,we.length=0,De.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(De.push(X),we.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const te=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qe(w){return Math.min(r.maxSamples,w.samples)}function fe(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Le(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function rt(w,v){const O=w.colorSpace,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ei&&O!==yn&&(We.getTransfer(O)===$e?(q!==Kt||J!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=st,this.setupRenderTarget=P,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=fe}function _m(i,e){function t(n,r=yn){let s;const a=We.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ol)return i.RGB;if(n===Kt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===ll)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===yr||n===Tr||n===br||n===Ar)if(a===$e)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zs||n===Gs||n===Hs||n===Vs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ws||n===Xs||n===qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ws||n===Xs)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ys||n===Ks||n===$s||n===Zs||n===Js||n===js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ys)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Js)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===js)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qs)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===la||n===ca)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===fa||n===da)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ml(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:vm,fragmentShader:xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends Ti{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,x=null;const T=typeof XRWebGLBinding<"u",m=new Sm,f={},L=t.getContextAttributes();let C=null,A=null;const S=[],M=[],y=new Je;let R=null;const _=new qt;_.viewport=new ct;const g=new qt;g.viewport=new ct;const b=[_,g],I=new Gh;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=S[Y];return Z===void 0&&(Z=new fs,S[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=S[Y];return Z===void 0&&(Z=new fs,S[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=S[Y];return Z===void 0&&(Z=new fs,S[Y]=Z),Z.getHandSpace()};function z(Y){const Z=M.indexOf(Y.inputSource);if(Z===-1)return;const he=S[Z];he!==void 0&&(he.update(Y.inputSource,Y.frame,l||a),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const Z=M[Y];Z!==null&&(M[Y]=null,S[Y].disconnect(Z))}N=null,B=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(C),p=null,d=null,h=null,r=null,A=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&T&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ye=null,_e=null;L.depth&&(_e=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=L.stencil?Bi:Oi,ye=L.stencil?Ni:Xn);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new qn(d.textureWidth,d.textureHeight,{format:Kt,type:pn,depthTexture:new Sl(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new qn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let Z=0;Z<Y.removed.length;Z++){const he=Y.removed[Z],ye=M.indexOf(he);ye>=0&&(M[ye]=null,S[ye].disconnect(he))}for(let Z=0;Z<Y.added.length;Z++){const he=Y.added[Z];let ye=M.indexOf(he);if(ye===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=M.length){M.push(he),ye=Fe;break}else if(M[Fe]===null){M[Fe]=he,ye=Fe;break}if(ye===-1)break}const _e=S[ye];_e&&_e.connect(he)}}const W=new H,j=new H;function se(Y,Z,he){W.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const ye=W.distanceTo(j),_e=Z.projectionMatrix.elements,Fe=he.projectionMatrix.elements,st=_e[14]/(_e[10]-1),P=_e[14]/(_e[10]+1),je=(_e[9]+1)/_e[5],De=(_e[9]-1)/_e[5],we=(_e[8]-1)/_e[0],ue=(Fe[8]+1)/Fe[0],qe=st*we,fe=st*ue,Le=ye/(-we+ue),rt=Le*-we;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ(Le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Qe=st+Le,w=P+Le,v=qe-rt,O=fe+(ye-rt),q=je*P/w*Qe,J=De*P/w*Qe;Y.projectionMatrix.makePerspective(v,O,q,J,Qe,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,he=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),I.near=g.near=_.near=Z,I.far=g.far=_.far=he,(N!==I.near||B!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,B=I.far),I.layers.mask=Y.layers.mask|6,_.layers.mask=I.layers.mask&3,g.layers.mask=I.layers.mask&5;const ye=Y.parent,_e=I.cameras;me(I,ye);for(let Fe=0;Fe<_e.length;Fe++)me(_e[Fe],ye);_e.length===2?se(I,_,g):I.projectionMatrix.copy(_.projectionMatrix),be(Y,I,ye)};function be(Y,Z,he){he===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return f[Y]};let ke=null;function Xe(Y,Z){if(u=Z.getViewerPose(l||a),x=Z,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ye=!1;he.length!==I.cameras.length&&(I.cameras.length=0,ye=!0);for(let P=0;P<he.length;P++){const je=he[P];let De=null;if(p!==null)De=p.getViewport(je);else{const ue=h.getViewSubImage(d,je);De=ue.viewport,P===0&&(e.setRenderTargetTextures(A,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(A))}let we=b[P];we===void 0&&(we=new qt,we.layers.enable(P),we.viewport=new ct,b[P]=we),we.matrix.fromArray(je.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(je.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),P===0&&(I.matrix.copy(we.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ye===!0&&I.cameras.push(we)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){h=n.getBinding();const P=h.getDepthInformation(he[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(_e&&_e.includes("camera-access")&&T){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<he.length;P++){const je=he[P].camera;if(je){let De=f[je];De||(De=new Ml,f[je]=De);const we=h.getCameraImage(je);De.sourceTexture=we}}}}for(let he=0;he<S.length;he++){const ye=M[he],_e=S[he];ye!==null&&_e!==void 0&&_e.update(ye,Z,l||a)}ke&&ke(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Ue=new yl;Ue.setAnimationLoop(Xe),this.setAnimationLoop=function(Y){ke=Y},this.dispose=function(){}}}const Fn=new mn,Em=new ut;function ym(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,L,C,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),T(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,L,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const L=e.get(f),C=L.envMap,A=L.envMapRotation;C&&(m.envMap.value=C,Fn.copy(A),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Em.makeRotationFromEuler(Fn)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,L,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*L,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,L){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function T(m,f){const L=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,C){const A=C.program;n.uniformBlockBinding(L,A)}function l(L,C){let A=r[L.id];A===void 0&&(x(L),A=u(L),r[L.id]=A,L.addEventListener("dispose",m));const S=C.program;n.updateUBOMapping(L,S);const M=e.render.frame;s[L.id]!==M&&(d(L),s[L.id]=M)}function u(L){const C=h();L.__bindingPointIndex=C;const A=i.createBuffer(),S=L.__size,M=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,A),A}function h(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){const C=r[L.id],A=L.uniforms,S=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let M=0,y=A.length;M<y;M++){const R=Array.isArray(A[M])?A[M]:[A[M]];for(let _=0,g=R.length;_<g;_++){const b=R[_];if(p(b,M,_,S)===!0){const I=b.__offset,N=Array.isArray(b.value)?b.value:[b.value];let B=0;for(let z=0;z<N.length;z++){const k=N[z],K=T(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+B,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(L,C,A,S){const M=L.value,y=C+"_"+A;if(S[y]===void 0)return typeof M=="number"||typeof M=="boolean"?S[y]=M:S[y]=M.clone(),!0;{const R=S[y];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return S[y]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function x(L){const C=L.uniforms;let A=0;const S=16;for(let y=0,R=C.length;y<R;y++){const _=Array.isArray(C[y])?C[y]:[C[y]];for(let g=0,b=_.length;g<b;g++){const I=_[g],N=Array.isArray(I.value)?I.value:[I.value];for(let B=0,z=N.length;B<z;B++){const k=N[B],K=T(k),W=A%S,j=W%K.boundary,se=W+j;A+=j,se!==0&&S-se<K.storage&&(A+=S-se),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=K.storage}}}const M=A%S;return M>0&&(A+=S-M),L.__size=A,L.__cache={},this}function T(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function m(L){const C=L.target;C.removeEventListener("dispose",m);const A=a.indexOf(C.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function f(){for(const L in r)i.deleteBuffer(r[L]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class bm{constructor(e={}){const{canvas:t=ih(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),T=new Int32Array(4);let m=null,f=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let S=!1;this._outputColorSpace=Ct;let M=0,y=0,R=null,_=-1,g=null;const b=new ct,I=new ct;let N=null;const B=new Ze(0);let z=0,k=t.width,K=t.height,W=1,j=null,se=null;const me=new ct(0,0,k,K),be=new ct(0,0,k,K);let ke=!1;const Xe=new xl;let Ue=!1,Y=!1;const Z=new ut,he=new H,ye=new ct,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function st(){return R===null?W:1}let P=n;function je(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),P===null){const U="webgl2";if(P=je(U,E),P===null)throw je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let De,we,ue,qe,fe,Le,rt,Qe,w,v,O,q,J,X,Ee,ie,xe,Se,te,ce,Ce,Me,oe,Ne;function D(){De=new Fd(P),De.init(),Me=new _m(P,De),we=new Rd(P,De,e,Me),ue=new mm(P,De),we.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),qe=new Bd(P),fe=new nm,Le=new gm(P,De,ue,fe,we,Me,qe),rt=new Pd(A),Qe=new Ud(A),w=new Vh(P),oe=new Ad(P,w),v=new Nd(P,w,qe,oe),O=new zd(P,v,w,qe),te=new kd(P,we,Le),ie=new Cd(fe),q=new tm(A,rt,Qe,De,we,oe,ie),J=new ym(A,fe),X=new rm,Ee=new hm(De),Se=new bd(A,rt,Qe,ue,O,p,c),xe=new dm(A,O,we),Ne=new Tm(P,qe,we,ue),ce=new wd(P,De,qe),Ce=new Od(P,De,qe),qe.programs=q.programs,A.capabilities=we,A.extensions=De,A.properties=fe,A.renderLists=X,A.shadowMap=xe,A.state=ue,A.info=qe}D();const ne=new Mm(A,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=De.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=De.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(k,K,!1))},this.getSize=function(E){return E.set(k,K)},this.setSize=function(E,U,G=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,K=U,t.width=Math.floor(E*W),t.height=Math.floor(U*W),G===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(k*W,K*W).floor()},this.setDrawingBufferSize=function(E,U,G){k=E,K=U,W=G,t.width=Math.floor(E*G),t.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,U,G,V){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,U,G,V),ue.viewport(b.copy(me).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(be)},this.setScissor=function(E,U,G,V){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,U,G,V),ue.scissor(I.copy(be).multiplyScalar(W).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){ue.setScissorTest(ke=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,G=!0){let V=0;if(E){let F=!1;if(R!==null){const ee=R.texture.format;F=ee===ba||ee===Ta||ee===ya}if(F){const ee=R.texture.type,le=ee===pn||ee===Xn||ee===Fi||ee===Ni||ee===Sa||ee===Ma,ge=Se.getClearColor(),de=Se.getClearAlpha(),Re=ge.r,Pe=ge.g,Te=ge.b;le?(x[0]=Re,x[1]=Pe,x[2]=Te,x[3]=de,P.clearBufferuiv(P.COLOR,0,x)):(T[0]=Re,T[1]=Pe,T[2]=Te,T[3]=de,P.clearBufferiv(P.COLOR,0,T))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),G&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),X.dispose(),Ee.dispose(),fe.dispose(),rt.dispose(),Qe.dispose(),O.dispose(),oe.dispose(),Ne.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",$t),ne.removeEventListener("sessionend",La),Rn.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=qe.autoReset,U=xe.enabled,G=xe.autoUpdate,V=xe.needsUpdate,F=xe.type;D(),qe.autoReset=E,xe.enabled=U,xe.autoUpdate=G,xe.needsUpdate=V,xe.type=F}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const U=E.target;U.removeEventListener("dispose",$),ve(U)}function ve(E){Ie(E),fe.remove(E)}function Ie(E){const U=fe.get(E).programs;U!==void 0&&(U.forEach(function(G){q.releaseProgram(G)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,V,F,ee){U===null&&(U=_e);const le=F.isMesh&&F.matrixWorld.determinant()<0,ge=Ul(E,U,G,V,F);ue.setMaterial(V,le);let de=G.index,Re=1;if(V.wireframe===!0){if(de=v.getWireframeAttribute(G),de===void 0)return;Re=2}const Pe=G.drawRange,Te=G.attributes.position;let ze=Pe.start*Re,Ke=(Pe.start+Pe.count)*Re;ee!==null&&(ze=Math.max(ze,ee.start*Re),Ke=Math.min(Ke,(ee.start+ee.count)*Re)),de!==null?(ze=Math.max(ze,0),Ke=Math.min(Ke,de.count)):Te!=null&&(ze=Math.max(ze,0),Ke=Math.min(Ke,Te.count));const lt=Ke-ze;if(lt<0||lt===1/0)return;oe.setup(F,V,ge,G,de);let nt,et=ce;if(de!==null&&(nt=w.get(de),et=Ce,et.setIndex(nt)),F.isMesh)V.wireframe===!0?(ue.setLineWidth(V.wireframeLinewidth*st()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(F.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),ue.setLineWidth(Ae*st()),F.isLineSegments?et.setMode(P.LINES):F.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else F.isPoints?et.setMode(P.POINTS):F.isSprite&&et.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,at=F._multiDrawCounts,Ve=F._multiDrawCount,Tt=de?w.get(de).bytesPerElement:1,Kn=fe.get(V).currentProgram.getUniforms();for(let bt=0;bt<Ve;bt++)Kn.setValue(P,"_gl_DrawID",bt),et.render(Ae[bt]/Tt,at[bt])}else if(F.isInstancedMesh)et.renderInstances(ze,lt,F.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,at=Math.min(G.instanceCount,Ae);et.renderInstances(ze,lt,at)}else et.render(ze,lt)};function tt(E,U,G){E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=yt,E.needsUpdate=!0,Zi(E,U,G),E.side=wn,E.needsUpdate=!0,Zi(E,U,G),E.side=fn):Zi(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),f=Ee.get(G),f.init(U),C.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==G&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ge=ee[le];tt(ge,G,F),V.add(ge)}else tt(ee,G,F),V.add(ee)}),f=C.pop(),V},this.compileAsync=function(E,U,G=null){const V=this.compile(E,U,G);return new Promise(F=>{function ee(){if(V.forEach(function(le){fe.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){F(E);return}setTimeout(ee,10)}De.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ye=null;function sn(E){Ye&&Ye(E)}function $t(){Rn.stop()}function La(){Rn.start()}const Rn=new yl;Rn.setAnimationLoop(sn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(E){Ye=E,ne.setAnimationLoop(E),E===null?Rn.stop():Rn.start()},ne.addEventListener("sessionstart",$t),ne.addEventListener("sessionend",La),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,R),f=Ee.get(E,C.length),f.init(U),C.push(f),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(Z,tn,U.reversedDepth),Y=this.localClippingEnabled,Ue=ie.init(this.clippingPlanes,Y),m=X.get(E,L.length),m.init(),L.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=A.xr.getDepthSensingMesh();ee!==null&&Or(ee,U,-1/0,A.sortObjects)}Or(E,U,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(j,se),Fe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Fe&&Se.addToRenderList(m,E),this.info.render.frame++,Ue===!0&&ie.beginShadows();const G=f.state.shadowsArray;xe.render(G,E,U),Ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let le=0,ge=ee.length;le<ge;le++){const de=ee[le];Ia(V,F,E,de)}Fe&&Se.render(E);for(let le=0,ge=ee.length;le<ge;le++){const de=ee[le];Da(m,E,de,de.viewport)}}else F.length>0&&Ia(V,F,E,U),Fe&&Se.render(E),Da(m,E,U);R!==null&&y===0&&(Le.updateMultisampleRenderTarget(R),Le.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(A,E,U),oe.resetDefaultState(),_=-1,g=null,C.pop(),C.length>0?(f=C[C.length-1],Ue===!0&&ie.setGlobalState(A.clippingPlanes,f.state.camera)):f=null,L.pop(),L.length>0?m=L[L.length-1]:m=null};function Or(E,U,G,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xe.intersectsSprite(E)){V&&ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const le=O.update(E),ge=E.material;ge.visible&&m.push(E,le,ge,G,ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xe.intersectsObject(E))){const le=O.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ye.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ye.copy(le.boundingSphere.center)),ye.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const de=le.groups;for(let Re=0,Pe=de.length;Re<Pe;Re++){const Te=de[Re],ze=ge[Te.materialIndex];ze&&ze.visible&&m.push(E,le,ze,G,ye.z,Te)}}else ge.visible&&m.push(E,le,ge,G,ye.z,null)}}const ee=E.children;for(let le=0,ge=ee.length;le<ge;le++)Or(ee[le],U,G,V)}function Da(E,U,G,V){const F=E.opaque,ee=E.transmissive,le=E.transparent;f.setupLightsView(G),Ue===!0&&ie.setGlobalState(A.clippingPlanes,G),V&&ue.viewport(b.copy(V)),F.length>0&&$i(F,U,G),ee.length>0&&$i(ee,U,G),le.length>0&&$i(le,U,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ia(E,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new qn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Vi:pn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=f.state.transmissionRenderTarget[V.id],le=V.viewport||b;ee.setSize(le.z*A.transmissionResolutionScale,le.w*A.transmissionResolutionScale);const ge=A.getRenderTarget(),de=A.getActiveCubeFace(),Re=A.getActiveMipmapLevel();A.setRenderTarget(ee),A.getClearColor(B),z=A.getClearAlpha(),z<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&Se.render(G);const Pe=A.toneMapping;A.toneMapping=An;const Te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ue===!0&&ie.setGlobalState(A.clippingPlanes,V),$i(E,G,V),Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee),De.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ke=0,lt=U.length;Ke<lt;Ke++){const nt=U[Ke],et=nt.object,Ae=nt.geometry,at=nt.material,Ve=nt.group;if(at.side===fn&&et.layers.test(V.layers)){const Tt=at.side;at.side=yt,at.needsUpdate=!0,Ua(et,G,V,Ae,at,Ve),at.side=Tt,at.needsUpdate=!0,ze=!0}}ze===!0&&(Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee))}A.setRenderTarget(ge,de,Re),A.setClearColor(B,z),Te!==void 0&&(V.viewport=Te),A.toneMapping=Pe}function $i(E,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=E.length;F<ee;F++){const le=E[F],ge=le.object,de=le.geometry,Re=le.group;let Pe=le.material;Pe.allowOverride===!0&&V!==null&&(Pe=V),ge.layers.test(G.layers)&&Ua(ge,U,G,de,Pe,Re)}}function Ua(E,U,G,V,F,ee){E.onBeforeRender(A,U,G,V,F,ee),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(A,U,G,V,E,ee),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=yt,F.needsUpdate=!0,A.renderBufferDirect(G,U,V,F,E,ee),F.side=wn,F.needsUpdate=!0,A.renderBufferDirect(G,U,V,F,E,ee),F.side=fn):A.renderBufferDirect(G,U,V,F,E,ee),E.onAfterRender(A,U,G,V,F,ee)}function Zi(E,U,G){U.isScene!==!0&&(U=_e);const V=fe.get(E),F=f.state.lights,ee=f.state.shadowsArray,le=F.state.version,ge=q.getParameters(E,F.state,ee,U,G),de=q.getProgramCacheKey(ge);let Re=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?Qe:rt).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",$),Re=new Map,V.programs=Re);let Pe=Re.get(de);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===le)return Na(E,ge),Pe}else ge.uniforms=q.getUniforms(E),E.onBeforeCompile(ge,A),Pe=q.acquireProgram(ge,de),Re.set(de,Pe),V.uniforms=ge.uniforms;const Te=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ie.uniform),Na(E,ge),V.needsLights=Nl(E),V.lightsStateVersion=le,V.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function Fa(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Na(E,U){const G=fe.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ul(E,U,G,V,F){U.isScene!==!0&&(U=_e),Le.resetTextureUnits();const ee=U.fog,le=V.isMeshStandardMaterial?U.environment:null,ge=R===null?A.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ei,de=(V.isMeshStandardMaterial?Qe:rt).get(V.envMap||le),Re=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!G.morphAttributes.position,ze=!!G.morphAttributes.normal,Ke=!!G.morphAttributes.color;let lt=An;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=A.toneMapping);const nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=nt!==void 0?nt.length:0,Ae=fe.get(V),at=f.state.lights;if(Ue===!0&&(Y===!0||E!==g)){const vt=E===g&&V.id===_;ie.setState(V,E,vt)}let Ve=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==at.state.version||Ae.outputColorSpace!==ge||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==de||V.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==ze||Ae.morphColors!==Ke||Ae.toneMapping!==lt||Ae.morphTargetsCount!==et)&&(Ve=!0):(Ve=!0,Ae.__version=V.version);let Tt=Ae.currentProgram;Ve===!0&&(Tt=Zi(V,U,F));let Kn=!1,bt=!1,Ai=!1;const ot=Tt.getUniforms(),It=Ae.uniforms;if(ue.useProgram(Tt.program)&&(Kn=!0,bt=!0,Ai=!0),V.id!==_&&(_=V.id,bt=!0),Kn||g!==E){ue.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(P,"projectionMatrix",E.projectionMatrix),ot.setValue(P,"viewMatrix",E.matrixWorldInverse);const Mt=ot.map.cameraPosition;Mt!==void 0&&Mt.setValue(P,he.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&ot.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,bt=!0,Ai=!0)}if(F.isSkinnedMesh){ot.setOptional(P,F,"bindMatrix"),ot.setOptional(P,F,"bindMatrixInverse");const vt=F.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ot.setValue(P,"boneTexture",vt.boneTexture,Le))}F.isBatchedMesh&&(ot.setOptional(P,F,"batchingTexture"),ot.setValue(P,"batchingTexture",F._matricesTexture,Le),ot.setOptional(P,F,"batchingIdTexture"),ot.setValue(P,"batchingIdTexture",F._indirectTexture,Le),ot.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ot.setValue(P,"batchingColorTexture",F._colorsTexture,Le));const Ut=G.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&te.update(F,G,Tt),(bt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ot.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(It.envMap.value=de,It.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(It.envMapIntensity.value=U.environmentIntensity),bt&&(ot.setValue(P,"toneMappingExposure",A.toneMappingExposure),Ae.needsLights&&Fl(It,Ai),ee&&V.fog===!0&&J.refreshFogUniforms(It,ee),J.refreshMaterialUniforms(It,V,W,K,f.state.transmissionRenderTarget[E.id]),wr.upload(P,Fa(Ae),It,Le)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wr.upload(P,Fa(Ae),It,Le),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(P,"center",F.center),ot.setValue(P,"modelViewMatrix",F.modelViewMatrix),ot.setValue(P,"normalMatrix",F.normalMatrix),ot.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const vt=V.uniformsGroups;for(let Mt=0,Br=vt.length;Mt<Br;Mt++){const Cn=vt[Mt];Ne.update(Cn,Tt),Ne.bind(Cn,Tt)}}return Tt}function Fl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Nl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,G){const V=fe.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),fe.get(E.texture).__webglTexture=U,fe.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const G=fe.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Ol=P.createFramebuffer();this.setRenderTarget=function(E,U=0,G=0){R=E,M=U,y=G;let V=!0,F=null,ee=!1,le=!1;if(E){const de=fe.get(E);if(de.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)Le.setupRenderTarget(E);else if(de.__hasExternalTextures)Le.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&fe.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);const Pe=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?F=Pe[U][G]:F=Pe[U],ee=!0):E.samples>0&&Le.useMultisampledRTT(E)===!1?F=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[G]:F=Pe,b.copy(E.viewport),I.copy(E.scissor),N=E.scissorTest}else b.copy(me).multiplyScalar(W).floor(),I.copy(be).multiplyScalar(W).floor(),N=ke;if(G!==0&&(F=Ol),ue.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&ue.drawBuffers(E,F),ue.viewport(b),ue.scissor(I),ue.setScissorTest(N),ee){const de=fe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,G)}else if(le){const de=U;for(let Re=0;Re<E.textures.length;Re++){const Pe=fe.get(E.textures[Re]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,G,de)}}else if(E!==null&&G!==0){const de=fe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,G)}_=-1},this.readRenderTargetPixels=function(E,U,G,V,F,ee,le,ge=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ue.bindFramebuffer(P.FRAMEBUFFER,de);try{const Re=E.textures[ge],Pe=Re.format,Te=Re.type;if(!we.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&G>=0&&G<=E.height-F&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,G,V,F,Me.convert(Pe),Me.convert(Te),ee))}finally{const Re=R!==null?fe.get(R).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,V,F,ee,le,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(U>=0&&U<=E.width-V&&G>=0&&G<=E.height-F){ue.bindFramebuffer(P.FRAMEBUFFER,de);const Re=E.textures[ge],Pe=Re.format,Te=Re.type;if(!we.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,G,V,F,Me.convert(Pe),Me.convert(Te),0);const Ke=R!==null?fe.get(R).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,Ke);const lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rh(P,lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(ze),P.deleteSync(lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,G=0){const V=Math.pow(2,-G),F=Math.floor(E.image.width*V),ee=Math.floor(E.image.height*V),le=U!==null?U.x:0,ge=U!==null?U.y:0;Le.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,le,ge,F,ee),ue.unbindTexture()};const Bl=P.createFramebuffer(),kl=P.createFramebuffer();this.copyTextureToTexture=function(E,U,G=null,V=null,F=0,ee=null){ee===null&&(F!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let le,ge,de,Re,Pe,Te,ze,Ke,lt;const nt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(G!==null)le=G.max.x-G.min.x,ge=G.max.y-G.min.y,de=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Pe=G.min.y,Te=G.isBox3?G.min.z:0;else{const Ut=Math.pow(2,-F);le=Math.floor(nt.width*Ut),ge=Math.floor(nt.height*Ut),E.isDataArrayTexture?de=nt.depth:E.isData3DTexture?de=Math.floor(nt.depth*Ut):de=1,Re=0,Pe=0,Te=0}V!==null?(ze=V.x,Ke=V.y,lt=V.z):(ze=0,Ke=0,lt=0);const et=Me.convert(U.format),Ae=Me.convert(U.type);let at;U.isData3DTexture?(Le.setTexture3D(U,0),at=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Le.setTexture2DArray(U,0),at=P.TEXTURE_2D_ARRAY):(Le.setTexture2D(U,0),at=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),Tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Kn=P.getParameter(P.UNPACK_SKIP_PIXELS),bt=P.getParameter(P.UNPACK_SKIP_ROWS),Ai=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const ot=E.isDataArrayTexture||E.isData3DTexture,It=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Ut=fe.get(E),vt=fe.get(U),Mt=fe.get(Ut.__renderTarget),Br=fe.get(vt.__renderTarget);ue.bindFramebuffer(P.READ_FRAMEBUFFER,Mt.__webglFramebuffer),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let Cn=0;Cn<de;Cn++)ot&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(E).__webglTexture,F,Te+Cn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(U).__webglTexture,ee,lt+Cn)),P.blitFramebuffer(Re,Pe,le,ge,ze,Ke,le,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||fe.has(E)){const Ut=fe.get(E),vt=fe.get(U);ue.bindFramebuffer(P.READ_FRAMEBUFFER,Bl),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,kl);for(let Mt=0;Mt<de;Mt++)ot?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,F,Te+Mt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,F),It?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,ee,lt+Mt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,ee),F!==0?P.blitFramebuffer(Re,Pe,le,ge,ze,Ke,le,ge,P.COLOR_BUFFER_BIT,P.NEAREST):It?P.copyTexSubImage3D(at,ee,ze,Ke,lt+Mt,Re,Pe,le,ge):P.copyTexSubImage2D(at,ee,ze,Ke,Re,Pe,le,ge);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else It?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(at,ee,ze,Ke,lt,le,ge,de,et,Ae,nt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(at,ee,ze,Ke,lt,le,ge,de,et,nt.data):P.texSubImage3D(at,ee,ze,Ke,lt,le,ge,de,et,Ae,nt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ee,ze,Ke,le,ge,et,Ae,nt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ee,ze,Ke,nt.width,nt.height,et,nt.data):P.texSubImage2D(P.TEXTURE_2D,ee,ze,Ke,le,ge,et,Ae,nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Kn),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ai),ee===0&&U.generateMipmaps&&P.generateMipmap(at),ue.unbindTexture()},this.initRenderTarget=function(E){fe.get(E).__webglFramebuffer===void 0&&Le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Le.setTextureCube(E,0):E.isData3DTexture?Le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Le.setTexture2DArray(E,0):Le.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){M=0,y=0,R=null,ue.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class He{constructor(e,t){this.x=0,this.y=0,e&&(this.x=e),t&&(this.y=t)}}class Zt{constructor(e=0,t=0){this.width=0,this.height=0,this.width=e,this.height=t}aspect(){return this.width/this.height}get isEmpty(){return this.width===0&&this.height===0}}class No{constructor(e,t,n,r){this.x=0,this.y=0,this.width=0,this.height=0,e&&(this.x=e),t&&(this.y=t),n&&(this.width=n),r&&(this.height=r)}get location(){return new He(this.x,this.y)}set location(e){this.x=e.x,this.y=e.y}get size(){return new Zt(this.width,this.height)}set size(e){this.width=e.width,this.height=e.height}get left(){return Math.min(this.x,this.x+this.width)}get right(){return Math.max(this.x,this.x+this.width)}get top(){return Math.min(this.y,this.y+this.height)}get bottom(){return Math.max(this.y,this.y+this.height)}}const Am=10,Oo=1,wm="#222",Rm="#2F4F4F",Bo=.5,Cm=10,Pm="rendersurface";class Lm{constructor(){this.#e=new Zt,this.#t=new Zt(1,1),this.render=()=>{this.#s.render(this.#i,this.#n),requestAnimationFrame(this.render)},this.#i=new Ph,this.#n=new El(-1,1,1,-1,.1,Cm),this.#n.position.z=1,this.#s=new bm,this.#s.setClearColor(wm),this.#s.autoClear=!0,this.#s.domElement.classList.add(Pm),this.#a=new Ki(1,1),this.#l=new Ur({color:Rm}),this.#u=new nn(this.#a,this.#l),this.#i.add(this.#u)}#e;#t;#i;#n;#s;#a;#l;#u;get camera(){return this.#n}get element(){return this.#s.domElement}startRender(){this.render()}setSize(e,t){this.#e=new Zt(e,t),this.#s.setSize(e,t,!1),this.#h(),this.#c()}#c(){const e=this.#f(),t=this.#n;t.left=-e.width/2,t.right=e.width/2,t.top=e.height/2,t.bottom=-e.height/2,t.updateProjectionMatrix()}set material(e){this.#u.material=e,e.needsUpdate=!0}setImageSize(e,t){this.#t=new Zt(e,t),this.#h()}#h(){const e=this.#f(),t=this.#t.width/this.#t.height,n=e.width/e.height,r=new Zt(e.width,e.height);n<t?(r.width=e.width,r.height=e.width*(this.#t.height/this.#t.width)):t<n&&(r.height=e.height,r.width=e.height*(this.#t.width/this.#t.height)),this.#u.scale.set(r.width,r.height,1)}get zoom(){return this.#n.zoom}set zoom(e){const t=this.#n.zoom,n=this.getClampedZoom(e);t!=n&&(this.#n.zoom=n,this.#n.updateProjectionMatrix(),this.#n.zoom==1&&(this.cameraPosition=new He(0,0)))}zoomAt(e,t,n){const r=this.getDisplayedImageRectangle();if(t<r.left||r.right<t||n<r.top||r.bottom<n)return;const s=this.getClampedZoom(e);if(this.zoom==s)return;const a=t-r.x,o=n-r.y,c=new He(a/r.width,o/r.height);if(this.zoom=s,this.zoom!=1){const l=this.getDisplayedImageRectangle(),u=new He(c.x*l.width,c.y*l.height);l.x=t-u.x,l.y=n-u.y,this.imageLocation=l.location}}getClampedZoom(e){return Math.max(Oo,Math.min(Am,e))}get cameraPosition(){return new He(this.#n.position.x,this.#n.position.y)}set cameraPosition(e){this.#n.zoom==1&&(e.x=0,e.y=0),this.#n.position.x=e.x,this.#n.position.y=e.y,this.#n.updateMatrixWorld()}get imageLocation(){return this.getDisplayedImageRectangle().location}set imageLocation(e){const t=this.getUnmovedDisplayedImageRectangle(),n=new He(e.x,e.y);if(t.width<this.#e.width)n.x=t.x;else{const l=0<e.x,u=e.x+t.width<this.#e.width;l?n.x=0:u&&(n.x=this.#e.width-t.width)}if(t.height<this.#e.height)n.y=t.y;else{const l=0<e.y,u=e.y+t.height<this.#e.height;l?n.y=0:u&&(n.y=this.#e.height-t.height)}const r=new He(n.x-t.x,n.y-t.y),s=this.#f(),a=new He(r.x/this.#e.width,r.y/this.#e.height),o=new He(a.x*s.width,a.y*s.height),c=new He(-o.x/this.#n.zoom,o.y/this.#n.zoom);this.cameraPosition=c}#f(){let e=new Zt(1,1);return this.#e.width<this.#e.height?e.height=this.#e.height/this.#e.width:this.#e.width>this.#e.height&&(e.width=this.#e.width/this.#e.height),e}resetView(){this.zoom=Oo,this.cameraPosition=new He(0,0)}getDiffAppliedCameraPosition(e,t,n,r){const s=this.#f(),a=e-n/this.#e.width*s.width/this.#n.zoom,o=t+r/this.#e.height*s.height/this.#n.zoom;return new He(a,o)}offsetToImagePoint(e,t){let n=this.getDisplayedImageRectangle();const r=new He((e-n.x)/n.width,(t-n.y)/n.height);return new He(Math.floor(this.#t.width*r.x),Math.floor(this.#t.height*r.y))}offsetToWorldPoint(e,t){const n=new No(this.#n.position.x,this.#n.position.y,this.#e.width/this.#e.height/this.#n.zoom,1/this.#n.zoom),r=new He(e/this.#e.width,t/this.#e.height);return new He(n.width*r.x-n.width/2+n.x,n.height/2-n.height*r.y+n.y)}imagePointToOffset(e,t,n){n||(n=this.getDisplayedImageRectangle());const r=new He((e+Bo)/this.#t.width,(t+Bo)/this.#t.height);return new He(n.x+r.x*n.width,n.y+r.y*n.height)}isOnImage(e,t){const n=this.getDisplayedImageRectangle();return!(e<n.x||n.right<e||t<n.top||n.bottom<t)}getDisplayedImageRectangle(){const e=this.getUnmovedDisplayedImageRectangle();if(this.#n.zoom!=1){const t=this.#f();e.x-=this.#n.position.x/t.width*this.#e.width*this.#n.zoom,e.y+=this.#n.position.y/t.height*this.#e.height*this.#n.zoom}return e}getUnmovedDisplayedImageRectangle(){const e=this.#t,t=e.width/e.height,n=this.#e,r=n.width/n.height;let s=n.width,a=n.height,o=0,c=0;return t>r?(s=n.width,a=n.width*(e.height/e.width),o=0,c=(n.height-a)/2):t<r&&(s=n.height*(e.width/e.height),a=n.height,o=(n.width-s)/2,c=0),s=s*this.#n.zoom,a=a*this.#n.zoom,o=(n.width-s)/2,c=(n.height-a)/2,new No(o,c,s,a)}getCameraPositionFromImageLocation(e){const t=this.getUnmovedDisplayedImageRectangle(),n=new He(t.x-e.x,t.y-e.y),r=this.#f(),s=new Zt(n.x/this.#e.width,n.y/this.#e.height),a=new He(s.width*r.width,s.height*r.height),o=new He(a.x/this.#n.zoom,a.y/this.#n.zoom);return console.log(o),o}}const Dm="marker";class Rl{constructor(){this.#i=new He,this.#n=new He,this.#s="",this.#a=!0,this.#l=!0,this.name="",this.#u="normal";const e=this.#c();this.#e=e.marker,this.#t=e.tips}#e;#t;#i;#n;#s;#a;#l;#u;#c(){const e=document.createElement("div");e.classList.add(Dm);const t=document.createElement("div");t.classList.add("finder"),e.appendChild(t);const n=document.createElement("div");return n.classList.add("tips"),e.appendChild(n),{marker:e,tips:n}}#h(e,t){this.#e.style.left=e+"px",this.#e.style.top=t+"px"}get element(){return this.#e}get location(){return this.#i}set location(e){this.#i=e,this.#h(e.x,e.y)}get imagePoint(){return this.#n}set imagePoint(e){this.#n=e}get tipsVisible(){return this.#a}set tipsVisible(e){this.#a=e,this.#t.style.display=e?"":"none"}setTipsContent(e){e?(this.#t.innerHTML="",this.#t.appendChild(e),this.tipsVisible=!0):this.tipsVisible=!1}get visible(){return this.#l}set visible(e){e!=this.#l&&(this.#l=e,this.element.style.display=e?"":"none")}get type(){return this.#u}set type(e){switch(this.#u=e,e){case"baseLuminance":this.#e.classList.add("circle");break;case"normal":default:this.#e.classList.remove("circle");break}}}const Im="markercontainer";class Um{#e;#t=[];#i;constructor(){this.#e=this.#n(),this.#i=new Rl,this.#i.element.classList.add("baseluminance"),this.#i.name="baseLuminance",this.#i.type="baseLuminance",this.#i.visible=!1,this.#e.appendChild(this.baseLuminanceMarker.element)}get element(){return this.#e}#n(){const e=document.createElement("div");return e.classList.add(Im),e}addMarker(e){this.#t.push(e),this.#e.appendChild(e.element)}removeMarker(e){const t=this.#t.findIndex(n=>n===e);t!==-1&&(this.#t.splice(t,1),this.#e.removeChild(e.element))}clearMarker(){for(let e=0;e<this.markers.length;e++){const t=this.markers[e];this.#e.removeChild(t.element)}this.#t=[]}hideAllCommonMarker(){for(let e=0;e<this.#t.length;e++){const t=this.#t[e];t.visible=!1}}showAllCommonMarker(){for(let e=0;e<this.#t.length;e++){const t=this.#t[e];t.visible=!0}}get markers(){return this.#t}get baseLuminanceMarker(){return this.#i}}function ko(i){return new CustomEvent("markermoved",{detail:{marker:i}})}function Fm(i){return new CustomEvent("markercreated",{detail:{marker:i}})}class Nm{constructor(){this.#t=new Map,this.#i=new He,this.#n=new He,this.#s=new He,this.#a=new He,this.#l=1,this.#u=0,this.#c="none",this.#h="none",this.#f="createMarker",this.#p=null,this.#d=new Zt,this.#o=new Um,this.#r=new Lm,this.addMarker=t=>{this.#_(t),this.#o.addMarker(t)},this.removeMarker=t=>{this.#o.removeMarker(t)},this.showAllCommonMarker=()=>{this.#o.showAllCommonMarker()},this.hideAllCommonMarker=()=>{this.#o.hideAllCommonMarker()},this.#M=t=>{t.preventDefault(),t.deltaY>0?this.zoomAt(this.#r.zoom-.5,t.offsetX,t.offsetY):this.zoomAt(this.#r.zoom+.5,t.offsetX,t.offsetY)},this.#E=t=>{t.stopPropagation(),this.#t.set(t.pointerId,t);try{t.target.setPointerCapture?.(t.pointerId)}catch{}switch(this.#t.size){case 1:if(t.preventDefault?.(),this.#h="pan",!this.#r.isOnImage(t.clientX,t.clientY))return;const r=t.target;if(r.classList.contains("markercontainer"))this.#c="view";else if(r.classList.contains("finder")){this.#c="marker";const o=r.closest(".marker"),c=this.#R(o);if(!c)return;this.#p=c}else{this.#c="none",this.#t.delete(t.pointerId);try{t.target.releasePointerCapture?.(t.pointerId)}catch{}return}switch(this.#i=new He(t.clientX,t.clientY),this.#c){case"view":this.#n=this.cameraPosition(),this.#a=this.#r.imageLocation;break;case"marker":this.#s=this.#p.location;break}break;case 2:t.preventDefault?.(),this.#h="pinch";const[s,a]=Array.from(this.#t.values());this.#u=Math.hypot(a.clientX-s.clientX,a.clientY-s.clientY),this.#l=this.#r.zoom,this.#c="pinch";break;default:this.#h="none";break}if(!this.#r.isOnImage(t.clientX,t.clientY))return;const n=t.target;if(n.classList.contains("markercontainer"))this.#c="view";else if(n.classList.contains("finder")){this.#c="marker";const r=n.closest(".marker"),s=this.#R(r);if(!s)return;this.#p=s}else{this.#t.delete(t.pointerId);try{t.target.releasePointerCapture?.(t.pointerId)}catch{}return}switch(this.#i=new He(t.clientX,t.clientY),this.#c){case"view":this.#n=this.cameraPosition(),this.#a=this.#r.imageLocation;break;case"marker":this.#s=this.#p.location;break}},this.#y=t=>{switch(t.preventDefault?.(),t.stopPropagation(),this.#t.has(t.pointerId)&&this.#t.set(t.pointerId,t),this.#h){case"pan":const n=t.clientX-this.#i.x,r=t.clientY-this.#i.y;switch(this.#c){case"view":this.#r.imageLocation=new He(this.#a.x+n,this.#a.y+r),this.#g();break;case"marker":const l=new He(this.#s.x+n,this.#s.y+r);let u=this.#r.offsetToImagePoint(l.x,l.y);u=new He(Math.max(0,Math.min(u.x,this.#d.width-1)),Math.max(0,Math.min(u.y,this.#d.height-1)));const h=this.#p;h.imagePoint=u,this.#_(h),this.#w(h);break}break;case"pinch":const[s,a]=Array.from(this.#t.values()),c=Math.hypot(a.clientX-s.clientX,a.clientY-s.clientY)/this.#u;this.#r.zoom=this.#l*c,this.#g?.();break}},this.#v=t=>{t.stopPropagation(),t.preventDefault?.(),this.#t.delete(t.pointerId);try{t.target.releasePointerCapture?.(t.pointerId)}catch{}switch(this.#h){case"pinch":break;case"pan":const n=4,r=this.#i.x-n<=t.clientX&&t.clientX<=this.#i.x+n&&this.#i.y-n<=t.clientY&&t.clientY<=this.#i.y+n;switch(this.#c){case"view":r&&this.#b(t);break;case"marker":r&&this.#A(this.#p,t);break}}this.#h="none",this.#c="none",this.#p=null},this.#T=t=>{t.preventDefault?.()},this.#b=t=>{if(this.#d.isEmpty)return;const n=this.#r.offsetToImagePoint(t.offsetX,t.offsetY);if(n.x<0||this.#d.width<=n.x||n.y<0||this.#d.height<=n.y)return;const r=this.#r.imagePointToOffset(n.x,n.y);let s;switch(this.#f){case"createMarker":s=this.#S(r,n),this.onMarkerCreated?.(Fm(s)),this.#o.addMarker(s);break;case"moveLuminanceMarker":s=this.#o.baseLuminanceMarker,s.location=r,s.imagePoint=n,this.onMarkerMoved?.(ko(s));break}},this.#A=(t,n)=>{t.type!="baseLuminance"&&this.#o.removeMarker(t)},this.onClick=null,this.onMarkerCreated=null,this.onMarkerMoved=null,this.onBaseLuminanceMarkerLoaded=null,this.onCameraMoved=null,this.onCameraZoomed=null,this.#e=e(),this.#e.appendChild(this.#r.element),this.#e.appendChild(this.#o.element),this.#e.addEventListener("wheel",this.#M),this.#e.addEventListener("pointerdown",this.#E,{passive:!1}),this.#e.addEventListener("pointermove",this.#y,{passive:!1}),this.#e.addEventListener("pointerup",this.#v,{passive:!1}),this.#e.addEventListener("pointerleave",this.#v,{passive:!1}),this.#e.addEventListener("touchend",this.#T,{passive:!1}),this.#m=new ResizeObserver(t=>{for(const n of t)n.target==this.#e&&this.#x()}),this.#m.observe(this.#e),this.#x();function e(){const t=document.createElement("div");return t.classList.add("mainview"),t}}#e;#t;#i;#n;#s;#a;#l;#u;#c;#h;#f;#p;#d;#o;#r;#m;initializeView(e,t){this.#d=new Zt(e,t),this.#r.resetView(),this.#r.setImageSize(e,t),this.#o.clearMarker(),this.#o.baseLuminanceMarker.visible=!1}getBaseLuminanceMarker(){return this.#o.baseLuminanceMarker}setBaseLuminanceMarkerImagePosition(e){this.#o.baseLuminanceMarker.imagePoint=e,this.#_(this.#o.baseLuminanceMarker),this.#w(this.#o.baseLuminanceMarker)}updateBaseLuminanceMarkerPosition(){this.#_(this.#o.baseLuminanceMarker)}get markers(){return this.#o.markers}get element(){return this.#e}get zoom(){return this.#r.zoom}set zoom(e){this.#r.zoom=e,this.#g()}get clickAction(){return this.#f}set clickAction(e){this.#f=e}zoomAt(e,t,n){this.#r.zoomAt(e,t,n),this.#g()}startRender(){this.#r.startRender()}setImage(e){this.#r.material=e}get baseMarkerVisible(){return this.#o.baseLuminanceMarker.visible}set baseMarkerVisible(e){this.#o.baseLuminanceMarker.visible=e}showImage(e){this.#r.material=e}#x(){const e=this.#e.clientWidth,t=this.#e.clientHeight;this.#r.setSize(e,t),this.#g()}cameraPosition(){return this.#r.cameraPosition}getDiffAppliedCameraPosition(e,t,n,r){return this.#r.getDiffAppliedCameraPosition(e,t,n,r)}setCameraPosition(e,t){this.#r.cameraPosition=new He(e,t),this.#g()}resetPosition(){this.#r.resetView()}offsetToImagePoint(e,t){return this.#r.offsetToImagePoint(e,t)}imagePointToOffset(e,t){return this.#r.imagePointToOffset(e,t)}#_(e){e.location=this.#r.imagePointToOffset(e.imagePoint.x,e.imagePoint.y)}#g(){const e=this.#r.getDisplayedImageRectangle(),t=this.#o.markers;for(let r=0;r<t.length;r++){const s=t[r];s.location=this.#r.imagePointToOffset(s.imagePoint.x,s.imagePoint.y,e)}const n=this.#o.baseLuminanceMarker;n.location=this.#r.imagePointToOffset(n.imagePoint.x,n.imagePoint.y,e)}#S(e,t){const n=new Rl;return n.location=e,n.imagePoint=t,n}#R(e){let t=this.#o.markers.find(r=>r.element==e);if(t)return t;const n=this.#o.baseLuminanceMarker;return e===n.element?n:null}#M;#E;#y;#v;#T;#b;createMarker(e){const t=this.#r.imagePointToOffset(e.x,e.y);return this.#S(t,e)}#A;#w(e){this.onMarkerMoved?.(ko(e))}}function Pr(i,e,t){return Math.max(e,Math.min(t,i))}const Om=80,Bm=120,km="scalebar";class Nr{constructor(){this.#a="",this.figureType="luminance",this.#l=!1,this.#u=!0,this.#c=!0,this.#f=t=>{this.configPanelVisible=!this.#l};const e=this.#h();this.#e=e.scalebar,this.#t=e.title,this.#i=e.drawArea,this.#i.width=Om,this.#i.height=Bm,this.#n=e.configButton,this.#s=e.configPanel,this.#n.addEventListener("click",this.#f)}#e;#t;#i;#n;#s;#a;get title(){return this.#a}set title(e){this.#a=e,this.#t.textContent=e}#l;#u;#c;#h(){const e=document.createElement("div");e.classList.add(km);const t=document.createElement("h5");t.classList.add("title"),e.appendChild(t);const n=document.createElement("div");n.classList.add("content");const r=document.createElement("canvas");n.appendChild(r),e.appendChild(n);const s=document.createElement("div");s.classList.add("openconfigbutton"),e.appendChild(s);const a=document.createElement("div");return a.classList.add("configpanel"),a.style.display="none",e.appendChild(a),{scalebar:e,title:t,drawArea:r,configButton:s,configPanel:a}}#f;get configPanelVisible(){return this.#l}set configPanelVisible(e){this.#l=e,this.#s.style.display=e?"":"none"}get element(){return this.#e}get canvasElement(){return this.#i}get configPanelElement(){return this.#s}get configable(){return this.#c}set configable(e){this.#c!==e&&(this.#c=e,this.#n.style.display=e?"":"none")}}const Cl=20,Tn=5,Rt=.5;function Ms(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e,t){const r=i.getContext("2d");r.clearRect(0,0,i.width,i.height);const s=Cl,a=i.height-Tn*2;for(let d=0;d<a;d++){const p=1-d/a*2,x=Math.floor(Ms(1.5-Math.abs(2*p+1),.15,.85)*255),T=Math.floor(Ms(1.5-Math.abs(2*p),.15,.85)*255),m=Math.floor(Ms(1.5-Math.abs(2*p-1),.15,.85)*255);r.fillStyle=`rgb(${x} ${T} ${m})`,r.fillRect(0+Rt,Tn+(a-d)+Rt,s,1)}r.strokeRect(0+Rt,Tn+Rt,s,a),r.fillStyle="black";const o=Math.log10(e),l=(Math.log10(t)-o)/5;let u=[e];for(let d=1;d<5;d++)u.push(Math.pow(10,o+l*d));u.push(t);const h=a/5;for(let d=0;d<u.length;d++){const p=a+Tn-d*h+Rt,x=d==0||d==u.length-1?8:5;r.beginPath(),r.moveTo(s,p),r.lineTo(s+x,p),r.stroke();const T=u[d];let m=0;1<=T?m=0:m=Math.floor(Math.abs(Math.log10(T))),r.fillText(u[d].toFixed(m),s+10,p+3)}}function zm(i){const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const t=["0","1/10","1/3","1/2","2","3","10","∞"],n=["#80f","#00f","#0ff","#f5f5f5","#ff0","#f80","#f00"],r=Cl,s=i.height-Tn*2,a=s/n.length;for(let o=0;o<n.length;o++){let c=s+Tn-o*a;e.fillStyle=n[o],e.fillRect(0+Rt,c-a+Rt,r,a+Rt)}e.fillStyle="black";for(let o=0;o<=t.length;o++){let c=s+Tn-o*a;const l=o==0||o==t.length-1?8:5;e.beginPath(),e.moveTo(r,c+Rt),e.lineTo(r+l,c+Rt),e.stroke(),e.closePath();const u=t[o];e.fillText(u,r+10,c+3+Rt)}e.strokeRect(0+Rt,Tn+Rt,r,s)}const ui=[{name:"--",value:Number.NaN},{name:"N10",value:1},{name:"N9.5",value:.8775},{name:"N9",value:.7669},{name:"N8.5",value:.6668},{name:"N8",value:.5762},{name:"N7.5",value:.4941},{name:"N7",value:.4198},{name:"N6.5",value:.3529},{name:"N6",value:.293},{name:"N5.5",value:.2397},{name:"N5",value:.1927},{name:"N4.5",value:.1519},{name:"N4",value:.117},{name:"N3.5",value:.08778},{name:"N3",value:.06391},{name:"N2.5",value:.04498},{name:"N2",value:.03048},{name:"N1.5",value:.01971},{name:"N1",value:.0118}],fi=1e4,Di=.01;class Gm extends Nr{constructor(){super(),this.#e=1,this.#t=fi,this.#i=.279,this.onMinChanged=null,this.onMaxChanged=null,this.onReflectionChanged=null,this.element.classList.add("illuminance"),this.title="照度";const e=this.#u();this.configPanelElement.appendChild(e.content),this.#n=e.selectMunsel,this.#s=e.minInpput,this.#a=e.maxInput,this.#l=e.refInput,this.#s.addEventListener("change",t=>{this.#e=parseFloat(this.#s.value),this.#e<=0&&(this.#e=Di),this.drawScale(),this.onMinChanged?.(t)}),this.#a.addEventListener("change",t=>{this.#t=parseFloat(this.#a.value),this.#t<=0&&(this.#t=fi),this.drawScale(),this.onMaxChanged?.(t)}),this.#n.addEventListener("change",t=>{const n=this.#n.selectedIndex;if(n!=0){const r=ui[n].value;this.#l.value=String(r),this.#i=r,this.onReflectionChanged?.(t)}}),this.#l.addEventListener("change",t=>{const n=parseFloat(this.#l.value);n&&(this.#i=n,this.#c(),this.onReflectionChanged?.(t))}),this.drawScale()}#e;#t;#i;#n;#s;#a;#l;#u(){const e=document.createDocumentFragment(),t=document.createElement("p"),n=document.createElement("span");n.classList.add("title"),n.textContent="範囲",t.appendChild(n);const r=document.createElement("input");r.type="number",r.step=String(1),r.max=String(fi),r.min=String(Di),r.pattern="/*d/";const s=document.createElement("input");s.type="number",s.step=String(1),s.max=String(fi),s.min=String(Di),s.pattern="/*d/",t.appendChild(r),t.appendChild(document.createTextNode(" - ")),t.appendChild(s),e.appendChild(t);const a=document.createElement("p"),o=document.createElement("span");o.classList.add("title"),o.textContent="反射率",a.appendChild(o);const c=document.createElement("select");for(let u=0;u<ui.length;u++){const h=document.createElement("option");h.value=ui[u].name,h.innerHTML=ui[u].name,c.appendChild(h)}a.appendChild(c);const l=document.createElement("input");return l.type="number",l.step=String(.01),l.min=String(0),l.max=String(1),l.value=String(1),l.pattern="[0-9][.][0-9]{4}",a.appendChild(l),e.appendChild(a),{content:e,minInpput:r,maxInput:s,refInput:l,selectMunsel:c}}get min(){return this.#e}set min(e){this.#e=Pr(e,Di,fi),this.#s.value=String(this.#e),this.drawScale()}get max(){return this.#t}set max(e){this.#t=Pr(e,Di,fi),this.#a.value=String(this.#t),this.drawScale()}get reflection(){return this.#i}set reflection(e){this.#i=e,this.#c()}#c(){let e=-1;const t=this.#i;for(let n=0;n<ui.length;n++)if(t==ui[n].value){e=n;break}e!=-1&&(this.#n.selectedIndex=e)}#h(){}drawScale(){Pl(this.canvasElement,this.#e,this.#t)}}const xr=1e5,Sr=1e-4,zo=0;var Vt,Wt,Hn,Vn,Lr,Ll;const Pa=class Pa extends Nr{constructor(){super();$n(this,Lr);$n(this,Vt);$n(this,Wt);$n(this,Hn);$n(this,Vn);Bt(this,Vt,1),Bt(this,Wt,1e4),this.onMinChanged=null,this.onMaxChanged=null,this.element.classList.add("luminance"),this.title="輝度";const t=Ba(this,Lr,Ll).call(this);this.configPanelElement.appendChild(t.content),Bt(this,Hn,t.minInput),Bt(this,Vn,t.maxInput),xt(this,Hn).addEventListener("change",n=>{Bt(this,Vt,parseFloat(xt(this,Hn).value)),xt(this,Vt)<=0&&Bt(this,Vt,Sr),this.drawScale(),this.onMinChanged?.(n)}),xt(this,Vn).addEventListener("change",n=>{Bt(this,Wt,parseFloat(xt(this,Vn).value)),xt(this,Wt)<=0&&Bt(this,Wt,Sr),this.drawScale(),this.onMaxChanged?.(n)}),this.drawScale()}drawScale(){Pl(this.canvasElement,xt(this,Vt),xt(this,Wt))}get min(){return xt(this,Vt)}set min(t){Bt(this,Vt,Pr(t,Sr,xr)),xt(this,Hn).value=String(xt(this,Vt)),this.drawScale()}get max(){return xt(this,Wt)}set max(t){Bt(this,Wt,Pr(t,Sr,xr)),xt(this,Vn).value=String(xt(this,Wt)),this.drawScale()}};Vt=new WeakMap,Wt=new WeakMap,Hn=new WeakMap,Vn=new WeakMap,Lr=new WeakSet,Ll=function(){const t=document.createDocumentFragment(),n=document.createElement("p"),r=document.createElement("span");r.classList.add("title"),r.textContent="範囲",n.appendChild(r);const s=document.createElement("input");s.type="number",s.max=String(xr),s.min=String(zo),s.step=String(1),s.pattern="/[0-9]*/";const a=document.createElement("input");return a.type="number",a.max=String(xr),a.min=String(zo),a.step=String(1),a.pattern="/[0-9]*/",n.appendChild(s),n.appendChild(document.createTextNode(" - ")),n.appendChild(a),t.appendChild(n),{content:t,minInput:s,maxInput:a}},Pa.SCALEBAR_WIDTH=20;let ga=Pa;const Go=1e5,Ho=1e-4;class Hm extends Nr{constructor(){super(),this.onMinChanged=null,this.onMaxChanged=null,this.element.classList.add("luminanceRatio"),this.title="輝度比",this.configable=!1,this.drawScale()}#e(){const e=document.createElement("table"),t=document.createElement("tr"),n=document.createElement("td");n.appendChild(document.createTextNode("範囲"));const r=document.createElement("td"),s=document.createElement("input");s.type="number",s.max=String(Go),s.min=String(Ho),s.pattern="/*d/";const a=document.createElement("input");return a.type="number",a.max=String(Go),a.min=String(Ho),a.pattern="/*d/",r.appendChild(s),r.appendChild(document.createTextNode(" - ")),r.appendChild(a),t.appendChild(n),t.appendChild(r),e.appendChild(t),{configTable:e,minInput:s,maxInput:a}}drawScale(){zm(this.canvasElement)}}const Vm="scalebar";class Wm extends Nr{#e;#t;#i;#n;#s;#a="";get title(){return this.#a}set title(e){}constructor(){super();const e=this.#l();this.#e=e.scalebar,this.#t=e.title,this.#i=e.drawArea,this.#n=e.configButton,this.#s=e.configPanel}#l(){const e=document.createElement("div");e.classList.add(Vm);const t=document.createElement("h5");t.classList.add("title"),e.appendChild(t);const n=document.createElement("div");n.classList.add("content");const r=document.createElement("canvas");n.appendChild(r),e.appendChild(n);const s=document.createElement("div");s.classList.add("openconfig"),e.appendChild(s);const a=document.createElement("div");return a.classList.add("configpanel"),e.appendChild(a),{scalebar:e,title:t,drawArea:r,configButton:s,configPanel:a}}setLuminanceStyle(){}setLuminanceRatioStyle(){}setIlluminanceStyle(){}setOverflowStyle(){}}const Xm="scalebarcontainer";class qm{#e;#t=new ga;#i=new Hm;#n=new Gm;#s=new Wm;get luminanceScaleBar(){return this.#t}get luminanceRatioScaleBar(){return this.#i}get illuminanceScaleBar(){return this.#n}get photometricOverflowScaleBar(){return this.#s}#a=!0;#l=null;#u="original";constructor(){this.#e=this.#c()}#c(){const e=document.createElement("div");return e.classList.add(Xm),e}showScalebar(e){switch(this.removeScaleBar(),e){case"original":break;case"luminance":this.#l=this.#t;break;case"illuminance":this.#l=this.#n;break;case"luminanceRatio":this.#l=this.#i;break;case"photometricOverflow":this.#l=null;break}this.#u=e,this.#l&&(this.#e.appendChild(this.#l.element),this.#u=e)}removeScaleBar(){this.#l&&(this.#e.removeChild(this.#l.element),this.#l=null)}get visible(){return this.#a}set visible(e){this.#a=e,this.#e.style.display=e?"":"none"}get element(){return this.#e}}const Mr=`
varying vec2 vUv;
void main() {
	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
}
`,Ym=`
varying vec2 vUv;
uniform sampler2D uTexLM;
uniform float uMin;
uniform float uMax;

float log10(float x){
	return 0.43429448190325176 * log(x);
}

void main() {
	float lm = float(texture2D(uTexLM, vUv));
	lm = lm == 0.0 ? 0.000001 : lm;
	float value = max(uMin, min(uMax, lm));
	float ratio = (log10(value)-log10(uMin))/(log10(uMax) - log10(uMin));
	float t = 1.0 - (ratio * 2.0);

	vec4 color = vec4(
		clamp(1.5 - abs(2.0 * t + 1.0), 0.15, 0.85),
		clamp(1.5 - abs(2.0 * t), 0.15, 0.85),
		clamp(1.5 - abs(2.0 * t - 1.0), 0.15, 0.85),
		1.0);

	gl_FragColor = color;
}
`,Km=`
varying vec2 vUv;
uniform sampler2D uTexRA;
uniform sampler2D uTexRAHOF;
uniform sampler2D uTexLM;
uniform float uBaseLm;
uniform float uMin;
uniform float uMax;

float log10(float x){
	return 0.43429448190325176 * log(x);
}

const vec4 RED = vec4(1.0, 0.0, 0.0, 1.0);
const vec4 YELLOW = vec4(1.0, 1.0, 0.0, 1.0);
const vec4 ORANGE = vec4(1.0, 0.5, 0.0, 1.0);
const vec4 LIGHTGREEN = vec4(0.0, 1.0, 0.0, 1.0);
const vec4 LIGHTBLUE = vec4(0, 1.0, 1.0, 1.0);
const vec4 BLUE = vec4(0.0, 0.0, 1.0, 1.0);
const vec4 WHITESMOKE = vec4(0.96,0.96,0.96,1.0);
const vec4 VIOLETLIKE = vec4(0.5, 0, 0.9, 1.0);

void main() {
	// vec4 raColor = vec4(texture2D(uTexRA, vUv).rgb, 0.8);
	// float of = float(texture2D(uTexRAHOF, vUv));
	float lm = float(texture2D(uTexLM, vUv));
	float value = lm/uBaseLm;

	vec4 color;
	if(value >= 10.0){
		color = RED;
	} 
	else if( value >= 3.0){
		color = ORANGE;
	}
	else if( value >= 2.0){
		color = YELLOW;
	}
	else if( value >= 0.5){
		color = WHITESMOKE;
	}
	else if( value >= 0.3333){
		color = LIGHTBLUE;
	}
	else if( value >= 0.1){
		color = BLUE;
	}
	else{
		color = VIOLETLIKE;
	}
	/*
	if(of == 2.0)
	{
		gl_FragColor = RED;
	}
	else if(of == 1.0)
	{
		gl_FragColor = VIOLETLIKE;
	}
	else
	{*/
		gl_FragColor = color;
	//}
}
`,$m=`
varying vec2 vUv;
uniform sampler2D uTexP;
uniform sampler2D uTexLM;
uniform float uMin;
uniform float uMax;
uniform float uRefRatio;

const float PI = 3.141592653589793;

float log10(float x){
	return 0.43429448190325176 * log(x);
}

const float FLOAT_MAX = 3.402823466e+38F;

void main() {
	vec4 raColor = vec4(texture2D(uTexP, vUv).rgb, 0.5);
	float lm = float(texture2D(uTexLM, vUv));
	if(lm <= -FLOAT_MAX || FLOAT_MAX <= lm){
		gl_FragColor = raColor;
	}
	else{
		float il = lm == 0.0 ? 0.000001 : ((lm * PI) / uRefRatio);
		il = max(uMin, min(uMax, il));
		float ratio = (log10(il)-log10(uMin))/(log10(uMax) - log10(uMin));
		float t = 1.0-(ratio * 2.0);

		vec4 color = vec4(
			clamp(1.5 - abs(2.0 * t + 1.0), 0.15, 0.85),
			clamp(1.5 - abs(2.0 * t), 0.15, 0.85),
			clamp(1.5 - abs(2.0 * t - 1.0), 0.15, 0.85),
			1.0);

		gl_FragColor = color;
		//gl_FragColor = vec4(vec3(t * 0.5 + 0.5), 1.0);
	}
}
`,Zm=`
varying vec2 vUv;
uniform sampler2D uTexP;
uniform sampler2D uTexLM;

//const vec4 WHITE = vec4(1.0,1.0,1.0,1.0);
const vec4 RED = vec4(1.0,0.0,0.0,1.0);
const vec4 BLUE = vec4(0.0,0.0,1.0,1.0);
const vec4 BLACK = vec4(0.0,0.0,0.0,1.0);
const float FLOAT_MAX = 3.402823466e+38F;

void main() {
	vec4 raColor = vec4(texture2D(uTexP, vUv).rgb, 0.8);
	float value = float(texture2D(uTexLM, vUv));
	gl_FragColor = 
	   value >= FLOAT_MAX ? RED
	 : value <= -FLOAT_MAX ? BLUE 
	 : raColor;
}
`;class Jm{#e;#t;#i;constructor(e,t,n){this.#i=e,this.#e=t,this.#t=n}get width(){return this.#e}get height(){return this.#t}getValue(e,t){return this.#i[this.#e*t+e]}setValue(e,t,n){this.#i[this.#e*t+e]=n}}class jm{#e=0;#t=0;#i=new Map;#n=new Map;#s=new Map;get images(){return this.#i}get materials(){return this.#n}get imageWidth(){return this.#e}get imageHeight(){return this.#t}async loadAsync(e,t,n,r){this.clear(),this.#e=n,this.#t=r,this.#i.set("luminance",new Jm(t,n,r));const s=this.createDataTexture(t,n,r),a=await this.createTextureFromFile(e);a.colorSpace=Ct,this.#s.set("original",a),this.#s.set("luminance",s),this.#n.set("original",this.createBasicMaterial(a)),this.#n.set("luminance",this.createLuminanceMaterial(s)),this.#n.set("illuminance",this.createIlluminanceMaterial(a,s)),this.#n.set("luminanceRatio",this.createLuminanceRatioMaterial(s)),this.#n.set("photometricOverflow",this.createPhotometricOverflowMaterial(a,s))}clear(){this.#i.clear();for(const e of this.#n)e[1].dispose();this.#n.clear();for(const e of this.#s)e[1].dispose();this.#s.clear()}async createTextureFromFile(e){return new Promise((t,n)=>{const r=URL.createObjectURL(e);new zh().load(r,a=>{URL.revokeObjectURL(r),t(a)},void 0,a=>n(a))})}createDataTexture(e,t,n){let r=new Lh(e,t,n,Ea,en);return r.needsUpdate=!0,r.flipY=!0,r}createBasicMaterial(e){return new Ur({name:"original",map:e})}createLuminanceMaterial(e,t=1e-4,n=1e4){return new Ot({name:"luminance",uniforms:{uTexLM:{value:e},uMin:{value:t},uMax:{value:n}},vertexShader:Mr,fragmentShader:Ym})}createLuminanceRatioMaterial(e,t=0,n=30,r=200){return new Ot({name:"luminanceRatio",uniforms:{uTexLM:{value:e},uMin:{value:t},uMax:{value:n},uBaseLm:{value:r}},vertexShader:Mr,fragmentShader:Km})}createIlluminanceMaterial(e,t,n=1,r=3e3,s=.5){return new Ot({name:"illuminance",uniforms:{uTexP:{value:e},uTexLM:{value:t},uMin:{value:n},uMax:{value:r},uRefRatio:{value:s}},vertexShader:Mr,fragmentShader:$m})}createPhotometricOverflowMaterial(e,t){return new Ot({name:"photometricOverflow",uniforms:{uTexP:{value:e},uTexLM:{value:t}},transparent:!0,vertexShader:Mr,fragmentShader:Zm})}}const Dl={FLOAT32_MAX:34028234663852886e22};function Es(i){return Dl.FLOAT32_MAX<=i}function ys(i){return i<=-34028234663852886e22}function Ts(i){return Dl.FLOAT32_MAX<=Math.abs(i)}function Qm(){const i=new Date,e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0"),r=String(i.getHours()).padStart(2,"0"),s=String(i.getMinutes()).padStart(2,"0"),a=String(i.getSeconds()).padStart(2,"0");return`${e}${t}${n}-${r}${s}${a}`}const eg="file-select-button";function tg(){const i=document.createElement("input");return i.type="file",i}class ng extends gi{constructor(e){super(e),this.#t=null,this.#i=t=>{const n=this.#e.files?.[0];n&&(this.#t=n,this.onFileSelected?.(t))},this.onFileSelected=null,this.element.classList.add(eg),e&&this.element.classList.add(e),this.#e=tg(),this.element.appendChild(this.#e),this.element.addEventListener("click",t=>{this.#e.click()}),this.#e.addEventListener("change",this.#i)}#e;#t;get selectedFile(){return this.#t}#i}function ig(i){const e=document.createElement("div");return i&&e.classList.add(i),e}class rg extends Hi{#e="";constructor(e){const t=ig(e);super(t)}get text(){return this.#e}set text(e){this.element.textContent=e}}const Vo="--checked",Il="toggle-button";function sg(i){const e=document.createElement("div");return e.classList.add(Il),i&&e.classList.add(i),e}class Wo extends Hi{constructor(e){const t=sg(e);t.classList.add(Il),super(t),this.#e=!1,this.#t=n=>{this.#e=!this.#e,this.onCheckedChanged?.(n)},this.onCheckedChanged=null,t.addEventListener("click",this.#t)}#e;#t;get checked(){return this.#e}set checked(e){e!=this.#e&&(this.#e=e,this.#e?this.element.classList.add(Vo):this.element.classList.remove(Vo))}}const ag="illuminance-control-bar";function og(i){const e=document.createElement("ul");return e.classList.add(ag),i&&e.classList.add(i),e}class lg extends Hi{constructor(e){const t=og(e);super(t),this.#n=n=>{this.onMeasureWhiteButtonClick?.(n)},this.#s=n=>{this.onMeasureGrayscaleButtonClick?.(n)},this.#a=n=>{this.onMeasureIlluminanceSensorButtonClick?.(n)},this.onMeasureWhiteButtonClick=null,this.onMeasureGrayscaleButtonClick=null,this.onMeasureIlluminanceSensorButtonClick=null,this.#e=new gi("measure-white-button"),this.#t=new gi("measure-grayscale-button"),this.#i=new gi("measure-illuminance-sensor-button"),this.#e.onClick=this.#n,this.#t.onClick=this.#s,this.#i.onClick=this.#a,this.addItem(this.#e.element),this.addItem(this.#t.element),this.addItem(this.#i.element)}#e;#t;#i;addItem(e){const t=document.createElement("li");t.classList.add("item"),t.appendChild(e),this.element.appendChild(t)}#n;#s;#a}class cg{constructor(e){this.track=null,this.imageCapture=null,this.#e=e}#e;async checkCameraAvailable(){if(typeof window.ImageCapture!="function")return!1;try{const t=(await navigator.mediaDevices.getUserMedia({video:!0})).getVideoTracks()[0];if(!t)return!1;try{const r=typeof new window.ImageCapture(t).takePhoto=="function";return t.stop(),r}catch{return t.stop(),!1}}catch{return!1}}async startCameraPreview(){const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});this.#e.srcObject=e,await this.#e.play(),this.track=e.getVideoTracks()[0],this.imageCapture=new ImageCapture(this.track)}async capturePhoto(e){if(!this.imageCapture)return null;try{const t=await this.imageCapture.takePhoto();return new File([t],e,{type:t.type})}catch(t){return console.warn("撮影がキャンセルまたはエラー:",t),null}finally{this.track?.stop()}}}const hg="camera-view";function ug(){return document.createElement("video")}function fg(){const i=document.createElement("button");return i.classList.add("capture-button"),i}function dg(){const i=document.createElement("button");return i.classList.add("cancel-button"),i}function pg(i,e,t){const n=document.createElement("div");return n.classList.add(hg),n.appendChild(i),n.appendChild(e),n.appendChild(t),n}class mg extends Hi{#e;#t;#i;#n;#s;#a;#l="";constructor(){const e=ug(),t=fg(),n=dg(),r=pg(e,t,n);super(r),this.#e=e,this.#t=t,this.#i=n,this.#a=new cg(this.#e),this.#t.addEventListener("click",this.#u),this.#i.addEventListener("click",this.#c)}async capturePhoto(e){return new Promise(async(t,n)=>{this.visible=!0,this.#l=e,this.#n=t,this.#s=n,await this.#a.startCameraPreview()})}open(e){e.appendChild(this.element)}close(){this.element.parentElement?.removeChild(this.element)}#u=async()=>{if(!this.#n||!this.#s)return;const e=await this.#a.capturePhoto(this.#l);e?this.#n(e):this.#s(),this.#h()};#c=()=>{this.#s&&(this.#s(),this.#h())};#h(){this.#s=void 0,this.#n=void 0,this.element.parentElement?.removeChild(this.element)}}const gg=["original","luminance","luminanceRatio","illuminance","photometricOverflow"];class _g{constructor(e){this.#e=new jo,this.#t=new jm,this.#n=!0,this.#s=!0,this.#E=async t=>{this.#l.selectedFile&&this.#M(this.#l.selectedFile)},this.#y=t=>{const n=this.#t.materials.get("luminance");n.uniforms.uMin.value=this.#r.luminanceScaleBar.min},this.#v=t=>{const n=this.#t.materials.get("luminance");n.uniforms.uMax.value=this.#r.luminanceScaleBar.max},this.#T=t=>{const n=this.#t.materials.get("illuminance");n.uniforms.uMax.value=this.#r.illuminanceScaleBar.max},this.#b=t=>{const n=this.#t.materials.get("illuminance");n.uniforms.uMin.value=this.#r.illuminanceScaleBar.min},this.#A=t=>{const n=this.#t.materials.get("illuminance");this.#S(),n.uniforms.uRefRatio.value=this.#r.illuminanceScaleBar.reflection},this.#w=t=>{const n=this.imageSelector.selectedImageType;switch(this.#o.setImage(this.#t.materials.get(n)),this.#m.visible=!1,this.#o.baseMarkerVisible=!1,this.#a.visible=!1,n){case"luminanceRatio":this.#o.baseMarkerVisible=!0,this.#a.visible=!0;break;case"illuminance":this.#o.baseMarkerVisible=!0,this.#a.visible=!0,this.#m.visible=!0;break}this.#k(),this.#r.showScalebar(n)},this.#D=t=>{let n;this.#a.checked?(n=this.#t.materials.get("original"),this.#o.clickAction="moveLuminanceMarker"):(n=this.#t.materials.get(this.imageSelector.selectedImageType),this.#o.clickAction="createMarker"),this.#o.setImage(n),this.#G()},this.#I=t=>{this.#G()},this.#U=async t=>{const r="lumimaplite-"+Qm();let s=null;try{this.#d.open(this.#i);s=await this.#d.capturePhoto(r);}catch(a){console.warn("撮影がキャンセルされた、またはエラー:",a);}finally{this.#d.close();}s&&this.#M(s);},this.#F=async t=>{this.#s&&this.onFileShareRequested?.(t)},this.#N=t=>{this.#P(t.detail.marker)},this.#O=t=>{const n=t.detail.marker;if(n.name==="baseLuminance"){this.#e.imagingParameter.luminanceRatio.baseLuminance=this.#t.images.get("luminance")?.getValue(n.imagePoint.x,n.imagePoint.y),this.#C(n),this.#k();const r=this.#t.materials.get("luminanceRatio");r.uniforms.uBaseLm.value=this.#e.imagingParameter.luminanceRatio.baseLuminance}else this.#P(n)},this.#B=t=>{this.#C(t.detail.marker)},this.onFileSelected=null,this.onFileShareRequested=null,this.#i=e,this.#p=new hc,this.#d=new mg,this.#d.visible=!1,this.#o=new Nm,this.#o.startRender(),this.#h=new dc,this.#h.visible=!1,this.#r=new qm,this.#l=new ng("file-select-button"),this.#u=new gi("file-save-button"),this.#c=new gi("shootcambutton"),this.#a=new Wo("show-origin-toggle-button"),this.#a.visible=!1,this.#f=new Wo("marker-visible-toggle-button"),this.#f.visible=!1,this.#f.checked=!0,this.#m=new rg("reflectionpanel"),this.#m.visible=!1,this.#x=new lg,this.#i.appendChild(this.#p.element),this.#i.appendChild(this.#o.element),this.#i.appendChild(this.#h.element),this.#i.appendChild(this.#l.element),this.#i.appendChild(this.#c.element),this.#i.appendChild(this.#a.element),this.#i.appendChild(this.#r.element),this.#i.appendChild(this.#f.element),this.#i.appendChild(this.#m.element),this.#i.appendChild(this.#x.element),this.#i.appendChild(this.#u.element),this.#r.luminanceScaleBar.onMaxChanged=this.#v,this.#r.luminanceScaleBar.onMinChanged=this.#y,this.#r.illuminanceScaleBar.onMaxChanged=this.#T,this.#r.illuminanceScaleBar.onMinChanged=this.#b,this.#r.illuminanceScaleBar.onReflectionChanged=this.#A,this.#l.onFileSelected=this.#E,this.#o.onMarkerCreated=this.#N,this.#o.onMarkerMoved=this.#O,this.#o.onBaseLuminanceMarkerLoaded=this.#B,this.#h.items=gg,this.#h.onSelectionChanged=this.#w,this.#a.checked=!1,this.#a.visible=!1,this.#a.onCheckedChanged=this.#D,this.#f.onCheckedChanged=this.#I,this.#c.onClick=this.#U,this.#u.onClick=this.#F}#e;#t;#i;#n;#s;#a;#l;#u;#c;#h;#f;#p;#d;#o;#r;#m;#x;get element(){return this.#i}get controlBar(){return this.#p}get imageSelector(){return this.#h}get mainView(){return this.#o}get cameraEnabled(){return this.#n}set cameraEnabled(e){this.#n=e,e?this.#c.element.parentElement||this.#i.appendChild(this.#c.element):this.#c.element.parentElement&&this.#c.element.parentElement.removeChild(this.#c.element)}get fileSavable(){return this.#s}set fileSavable(e){}async loadAsync(e,t,n,r){const s=this.#t;await s.loadAsync(e,t,n,r),this.#_(this.#e.imagingParameter),this.#g(this.#e.imagingParameter),this.#S(),this.#h.visible=!0,this.#f.visible=!0,this.#o.initializeView(s.imageWidth,s.imageHeight),this.#o.setBaseLuminanceMarkerImagePosition(this.getInitialBaseLuminanceMarkerImagePosition());const a=s.materials.get(this.#e.initialImageType);a&&this.#R(this.#e.initialImageType,a)}#_(e){const t=this.#t.materials;if(t.has("luminance")){const n=t.get("luminance");n.uniforms.uMax.value=e.luminance.max,n.uniforms.uMin.value=e.luminance.min}if(t.has("illuminance")){const n=t.get("illuminance");n.uniforms.uMax.value=e.illuminance.max,n.uniforms.uMin.value=e.illuminance.min,n.uniforms.uRefRatio.value=e.illuminance.ref}if(t.has("luminanceRatio")){const n=t.get("luminanceRatio");n.uniforms.uMax.value=e.luminanceRatio.max,n.uniforms.uMin.value=e.luminanceRatio.min,n.uniforms.uBaseLm.value=e.luminanceRatio.baseLuminance}}#g(e){const t=this.#r.luminanceScaleBar;t.min=e.luminance.min,t.max=e.luminance.max;const n=this.#r.illuminanceScaleBar;n.min=e.illuminance.min,n.max=e.illuminance.max,n.reflection=e.illuminance.ref}#S(){const e=this.#r.illuminanceScaleBar.reflection;this.#m.text=e.toFixed(4)}#R(e,t){switch(this.#h.selectedImageType=e,this.#r.showScalebar(e),this.#o.setImage(t),e){case"luminanceRatio":case"illuminance":this.#a.visible=!0;break;default:this.#a.visible=!1;break}this.#a.checked=!1}getInitialBaseLuminanceMarkerImagePosition(){const e=this.#t.images.get("luminance");let t=Math.floor(e.width/2),n=Math.floor(e.height/2),r=n,s=0;for(;r<e.height&&(s=e.getValue(t,r),!!Ts(s));r++);return Ts(s)&&(r=n),new He(t,r)}#M(e){this.onFileSelected?.(new CustomEvent("fileSelected",{detail:{selectedFile:e}}))}#E;#y;#v;#T;#b;#A;#w;#D;#I;#U;#F;#N;#O;#B;#k(){for(let e=0;e<this.mainView.markers.length;e++){const t=this.mainView.markers[e];this.#P(t)}}#P(e){switch(this.imageSelector.selectedImageType){case"original":this.#H(e);break;case"luminance":case"photometricOverflow":this.#C(e);break;case"luminanceRatio":this.#V(e);break;case"illuminance":this.#W(e);break;default:this.#Y(e);break}}#H(e){this.#C(e)}#C(e){let n=this.#t.images.get("luminance").getValue(e.imagePoint.x,e.imagePoint.y);const r=this.#z(n);this.#L(e,[r])}#V(e){let n=this.#t.images.get("luminance").getValue(e.imagePoint.x,e.imagePoint.y),r=[];const s=this.#z(n);if(r.push(s),!Ts(n)){const a=this.#X(n);r.push(a)}this.#L(e,r)}#W(e){let n=this.#t.images.get("luminance").getValue(e.imagePoint.x,e.imagePoint.y);const r=this.#q(n);this.#L(e,[r])}#z(e){let t=document.createElement("p");if(Es(e))t.textContent="オーバーフロー";else if(ys(e))t.textContent="アンダーフロー";else{t.textContent=e.toFixed(2)+" cd/m";const n=document.createElement("sup");n.textContent="2",t.appendChild(n)}return t}#X(e){let t=document.createElement("p");return Es(e)?t.textContent="オーバーフロー":ys(e)?t.textContent="アンダーフロー":t.textContent=(e/this.#e.imagingParameter.luminanceRatio.baseLuminance).toFixed(2),t}#q(e){let t=document.createElement("p");return Es(e)?t.textContent="オーバーフロー":ys(e)?t.textContent="アンダーフロー":t.textContent=(e*Math.PI/this.#r.illuminanceScaleBar.reflection).toFixed(2)+" lx",t}#L(e,t){if(t.length!=0){let n=document.createDocumentFragment();for(let r=0;r<t.length;r++)n.appendChild(t[r]);e.setTipsContent(n)}else e.setTipsContent(void 0)}#Y(e){e.tipsVisible=!1}#K(){let e=this.#f.checked;return e||!1}#G(){this.#K()?this.#o.showAllCommonMarker():this.#o.hideAllCommonMarker()}}var Er={exports:{}},Xo;function vg(){return Xo||(Xo=1,(function(i,e){(function(){var t={};t.version="1.0.4",t.remove=function(S){var M=!1;if(S.slice(0,2)!="ÿØ")if(S.slice(0,23)=="data:image/jpeg;base64,"||S.slice(0,22)=="data:image/jpg;base64,")S=d(S.split(",")[1]),M=!0;else throw new Error("Given data is not jpeg.");var y=m(S),R=y.filter(function(g){return!(g.slice(0,2)=="ÿá"&&g.slice(4,10)=="Exif\0\0")}),_=R.join("");return M&&(_="data:image/jpeg;base64,"+h(_)),_},t.insert=function(S,M){var y=!1;if(S.slice(0,6)!="Exif\0\0")throw new Error("Given data is not exif.");if(M.slice(0,2)!="ÿØ")if(M.slice(0,23)=="data:image/jpeg;base64,"||M.slice(0,22)=="data:image/jpg;base64,")M=d(M.split(",")[1]),y=!0;else throw new Error("Given data is not jpeg.");var R="ÿá"+p(">H",[S.length+2])+S,_=m(M),g=L(_,R);return y&&(g="data:image/jpeg;base64,"+h(g)),g},t.load=function(S){var M;if(typeof S=="string")if(S.slice(0,2)=="ÿØ")M=S;else if(S.slice(0,23)=="data:image/jpeg;base64,"||S.slice(0,22)=="data:image/jpg;base64,")M=d(S.split(",")[1]);else if(S.slice(0,4)=="Exif")M=S.slice(6);else throw new Error("'load' gots invalid file data.");else throw new Error("'load' gots invalid type argument.");var y={"0th":{},Exif:{},GPS:{},Interop:{},"1st":{},thumbnail:null},R=new u(M);if(R.tiftag===null)return y;R.tiftag.slice(0,2)=="II"?R.endian_mark="<":R.endian_mark=">";var _=x(R.endian_mark+"L",R.tiftag.slice(4,8))[0];y["0th"]=R.get_ifd(_,"0th");var g=y["0th"].first_ifd_pointer;if(delete y["0th"].first_ifd_pointer,34665 in y["0th"]&&(_=y["0th"][34665],y.Exif=R.get_ifd(_,"Exif")),34853 in y["0th"]&&(_=y["0th"][34853],y.GPS=R.get_ifd(_,"GPS")),40965 in y.Exif&&(_=y.Exif[40965],y.Interop=R.get_ifd(_,"Interop")),g!="\0\0\0\0"&&(_=x(R.endian_mark+"L",g)[0],y["1st"]=R.get_ifd(_,"1st"),513 in y["1st"]&&514 in y["1st"])){var b=y["1st"][513]+y["1st"][514],I=R.tiftag.slice(y["1st"][513],b);y.thumbnail=I}return y},t.dump=function(S){var M=8,y=n(S),R="Exif\0\0MM\0*\0\0\0\b",_=!1,g=!1,b=!1,I=!1,N,B,z,k,K;"0th"in y?N=y["0th"]:N={},"Exif"in y&&Object.keys(y.Exif).length||"Interop"in y&&Object.keys(y.Interop).length?(N[34665]=1,_=!0,B=y.Exif,"Interop"in y&&Object.keys(y.Interop).length?(B[40965]=1,b=!0,z=y.Interop):Object.keys(B).indexOf(t.ExifIFD.InteroperabilityTag.toString())>-1&&delete B[40965]):Object.keys(N).indexOf(t.ImageIFD.ExifTag.toString())>-1&&delete N[34665],"GPS"in y&&Object.keys(y.GPS).length?(N[t.ImageIFD.GPSTag]=1,g=!0,k=y.GPS):Object.keys(N).indexOf(t.ImageIFD.GPSTag.toString())>-1&&delete N[t.ImageIFD.GPSTag],"1st"in y&&"thumbnail"in y&&y.thumbnail!=null&&(I=!0,y["1st"][513]=1,y["1st"][514]=1,K=y["1st"]);var W=l(N,"0th",0),j=W[0].length+_*12+g*12+4+W[1].length,se,me="",be=0,ke,Xe="",Ue=0,Y,Z="",he=0,ye,_e="",Fe;if(_&&(se=l(B,"Exif",j),be=se[0].length+b*12+se[1].length),g&&(ke=l(k,"GPS",j+be),Xe=ke.join(""),Ue=Xe.length),b){var st=j+be+Ue;Y=l(z,"Interop",st),Z=Y.join(""),he=Z.length}if(I){var st=j+be+Ue+he;if(ye=l(K,"1st",st),Fe=r(y.thumbnail),Fe.length>64e3)throw new Error("Given thumbnail is too large. max 64kB")}var P="",je="",De="",we="\0\0\0\0";if(_){var ue=M+j,qe=p(">L",[ue]),fe=34665,Le=p(">H",[fe]),rt=p(">H",[C.Long]),Qe=p(">L",[1]);P=Le+rt+Qe+qe}if(g){var ue=M+j+be,qe=p(">L",[ue]),fe=34853,Le=p(">H",[fe]),rt=p(">H",[C.Long]),Qe=p(">L",[1]);je=Le+rt+Qe+qe}if(b){var ue=M+j+be+Ue,qe=p(">L",[ue]),fe=40965,Le=p(">H",[fe]),rt=p(">H",[C.Long]),Qe=p(">L",[1]);De=Le+rt+Qe+qe}if(I){var ue=M+j+be+Ue+he;we=p(">L",[ue]);var w=ue+ye[0].length+24+4+ye[1].length,v="\0\0\0\0"+p(">L",[w]),O="\0\0\0\0"+p(">L",[Fe.length]);_e=ye[0]+v+O+"\0\0\0\0"+ye[1]+Fe}var q=W[0]+P+je+we+W[1];return _&&(me=se[0]+De+se[1]),R+q+me+Xe+Z+_e};function n(S){return JSON.parse(JSON.stringify(S))}function r(S){for(var M=m(S);"ÿà"<=M[1].slice(0,2)&&M[1].slice(0,2)<="ÿï";)M=[M[0]].concat(M.slice(2));return M.join("")}function s(S){return p(">"+T("B",S.length),S)}function a(S){return p(">"+T("H",S.length),S)}function o(S){return p(">"+T("L",S.length),S)}function c(S,M,y){var R="",_="",g,b,I,N;if(M=="Byte")g=S.length,g<=4?_=s(S)+T("\0",4-g):(_=p(">L",[y]),R=s(S));else if(M=="Short")g=S.length,g<=2?_=a(S)+T("\0\0",2-g):(_=p(">L",[y]),R=a(S));else if(M=="Long")g=S.length,g<=1?_=o(S):(_=p(">L",[y]),R=o(S));else if(M=="Ascii")b=S+"\0",g=b.length,g>4?(_=p(">L",[y]),R=b):_=b+T("\0",4-g);else if(M=="Rational"){if(typeof S[0]=="number")g=1,I=S[0],N=S[1],b=p(">L",[I])+p(">L",[N]);else{g=S.length,b="";for(var B=0;B<g;B++)I=S[B][0],N=S[B][1],b+=p(">L",[I])+p(">L",[N])}_=p(">L",[y]),R=b}else if(M=="SRational"){if(typeof S[0]=="number")g=1,I=S[0],N=S[1],b=p(">l",[I])+p(">l",[N]);else{g=S.length,b="";for(var B=0;B<g;B++)I=S[B][0],N=S[B][1],b+=p(">l",[I])+p(">l",[N])}_=p(">L",[y]),R=b}else M=="Undefined"&&(g=S.length,g>4?(_=p(">L",[y]),R=S):_=S+T("\0",4-g));var z=p(">L",[g]);return[z,_,R]}function l(S,M,y){var R=8,_=Object.keys(S).length,g=p(">H",[_]),b;["0th","1st"].indexOf(M)>-1?b=2+_*12+4:b=2+_*12;var I="",N="",B;for(var B in S)if(typeof B=="string"&&(B=parseInt(B)),!(M=="0th"&&[34665,34853].indexOf(B)>-1)){{if(M=="Exif"&&B==40965)continue;if(M=="1st"&&[513,514].indexOf(B)>-1)continue}var z=S[B],k=p(">H",[B]),K=A[M][B].type,W=p(">H",[C[K]]);typeof z=="number"&&(z=[z]);var j=R+b+y+N.length,se=c(z,K,j),me=se[0],be=se[1],ke=se[2];I+=k+W+me+be,N+=ke}return[g+I,N]}function u(S){var M,y;if(S.slice(0,2)=="ÿØ")M=m(S),y=f(M),y?this.tiftag=y.slice(10):this.tiftag=null;else if(["II","MM"].indexOf(S.slice(0,2))>-1)this.tiftag=S;else if(S.slice(0,4)=="Exif")this.tiftag=S.slice(6);else throw new Error("Given file is neither JPEG nor TIFF.")}if(u.prototype={get_ifd:function(S,M){var y={},R=x(this.endian_mark+"H",this.tiftag.slice(S,S+2))[0],_=S+2,g;["0th","1st"].indexOf(M)>-1?g="Image":g=M;for(var b=0;b<R;b++){S=_+12*b;var I=x(this.endian_mark+"H",this.tiftag.slice(S,S+2))[0],N=x(this.endian_mark+"H",this.tiftag.slice(S+2,S+4))[0],B=x(this.endian_mark+"L",this.tiftag.slice(S+4,S+8))[0],z=this.tiftag.slice(S+8,S+12),k=[N,B,z];I in A[g]&&(y[I]=this.convert_value(k))}return M=="0th"&&(S=_+12*R,y.first_ifd_pointer=this.tiftag.slice(S,S+4)),y},convert_value:function(S){var M=null,y=S[0],R=S[1],_=S[2],g;if(y==1)R>4?(g=x(this.endian_mark+"L",_)[0],M=x(this.endian_mark+T("B",R),this.tiftag.slice(g,g+R))):M=x(this.endian_mark+T("B",R),_.slice(0,R));else if(y==2)R>4?(g=x(this.endian_mark+"L",_)[0],M=this.tiftag.slice(g,g+R-1)):M=_.slice(0,R-1);else if(y==3)R>2?(g=x(this.endian_mark+"L",_)[0],M=x(this.endian_mark+T("H",R),this.tiftag.slice(g,g+R*2))):M=x(this.endian_mark+T("H",R),_.slice(0,R*2));else if(y==4)R>1?(g=x(this.endian_mark+"L",_)[0],M=x(this.endian_mark+T("L",R),this.tiftag.slice(g,g+R*4))):M=x(this.endian_mark+T("L",R),_);else if(y==5)if(g=x(this.endian_mark+"L",_)[0],R>1){M=[];for(var b=0;b<R;b++)M.push([x(this.endian_mark+"L",this.tiftag.slice(g+b*8,g+4+b*8))[0],x(this.endian_mark+"L",this.tiftag.slice(g+4+b*8,g+8+b*8))[0]])}else M=[x(this.endian_mark+"L",this.tiftag.slice(g,g+4))[0],x(this.endian_mark+"L",this.tiftag.slice(g+4,g+8))[0]];else if(y==7)R>4?(g=x(this.endian_mark+"L",_)[0],M=this.tiftag.slice(g,g+R)):M=_.slice(0,R);else if(y==9)R>1?(g=x(this.endian_mark+"L",_)[0],M=x(this.endian_mark+T("l",R),this.tiftag.slice(g,g+R*4))):M=x(this.endian_mark+T("l",R),_);else if(y==10)if(g=x(this.endian_mark+"L",_)[0],R>1){M=[];for(var b=0;b<R;b++)M.push([x(this.endian_mark+"l",this.tiftag.slice(g+b*8,g+4+b*8))[0],x(this.endian_mark+"l",this.tiftag.slice(g+4+b*8,g+8+b*8))[0]])}else M=[x(this.endian_mark+"l",this.tiftag.slice(g,g+4))[0],x(this.endian_mark+"l",this.tiftag.slice(g+4,g+8))[0]];else throw new Error("Exif might be wrong. Got incorrect value type to decode. type:"+y);return M instanceof Array&&M.length==1?M[0]:M}},typeof window<"u"&&typeof window.btoa=="function")var h=window.btoa;if(typeof h>"u")var h=function(M){for(var y="",R,_,g,b,I,N,B,z=0,k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";z<M.length;)R=M.charCodeAt(z++),_=M.charCodeAt(z++),g=M.charCodeAt(z++),b=R>>2,I=(R&3)<<4|_>>4,N=(_&15)<<2|g>>6,B=g&63,isNaN(_)?N=B=64:isNaN(g)&&(B=64),y=y+k.charAt(b)+k.charAt(I)+k.charAt(N)+k.charAt(B);return y};if(typeof window<"u"&&typeof window.atob=="function")var d=window.atob;if(typeof d>"u")var d=function(M){var y="",R,_,g,b,I,N,B,z=0,k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(M=M.replace(/[^A-Za-z0-9\+\/\=]/g,"");z<M.length;)b=k.indexOf(M.charAt(z++)),I=k.indexOf(M.charAt(z++)),N=k.indexOf(M.charAt(z++)),B=k.indexOf(M.charAt(z++)),R=b<<2|I>>4,_=(I&15)<<4|N>>2,g=(N&3)<<6|B,y=y+String.fromCharCode(R),N!=64&&(y=y+String.fromCharCode(_)),B!=64&&(y=y+String.fromCharCode(g));return y};function p(S,M){if(!(M instanceof Array))throw new Error("'pack' error. Got invalid type argument.");if(S.length-1!=M.length)throw new Error("'pack' error. "+(S.length-1)+" marks, "+M.length+" elements.");var y;if(S[0]=="<")y=!0;else if(S[0]==">")y=!1;else throw new Error("");for(var R="",_=1,g=null,b=null,I=null;b=S[_];){if(b.toLowerCase()=="b"){if(g=M[_-1],b=="b"&&g<0&&(g+=256),g>255||g<0)throw new Error("'pack' error.");I=String.fromCharCode(g)}else if(b=="H"){if(g=M[_-1],g>65535||g<0)throw new Error("'pack' error.");I=String.fromCharCode(Math.floor(g%65536/256))+String.fromCharCode(g%256),y&&(I=I.split("").reverse().join(""))}else if(b.toLowerCase()=="l"){if(g=M[_-1],b=="l"&&g<0&&(g+=4294967296),g>4294967295||g<0)throw new Error("'pack' error.");I=String.fromCharCode(Math.floor(g/16777216))+String.fromCharCode(Math.floor(g%16777216/65536))+String.fromCharCode(Math.floor(g%65536/256))+String.fromCharCode(g%256),y&&(I=I.split("").reverse().join(""))}else throw new Error("'pack' error.");R+=I,_+=1}return R}function x(S,M){if(typeof M!="string")throw new Error("'unpack' error. Got invalid type argument.");for(var y=0,R=1;R<S.length;R++)if(S[R].toLowerCase()=="b")y+=1;else if(S[R].toLowerCase()=="h")y+=2;else if(S[R].toLowerCase()=="l")y+=4;else throw new Error("'unpack' error. Got invalid mark.");if(y!=M.length)throw new Error("'unpack' error. Mismatch between symbol and string length. "+y+":"+M.length);var _;if(S[0]=="<")_=!0;else if(S[0]==">")_=!1;else throw new Error("'unpack' error.");for(var g=[],b=0,I=1,N=null,B=null,z=null,k="";B=S[I];){if(B.toLowerCase()=="b")z=1,k=M.slice(b,b+z),N=k.charCodeAt(0),B=="b"&&N>=128&&(N-=256);else if(B=="H")z=2,k=M.slice(b,b+z),_&&(k=k.split("").reverse().join("")),N=k.charCodeAt(0)*256+k.charCodeAt(1);else if(B.toLowerCase()=="l")z=4,k=M.slice(b,b+z),_&&(k=k.split("").reverse().join("")),N=k.charCodeAt(0)*16777216+k.charCodeAt(1)*65536+k.charCodeAt(2)*256+k.charCodeAt(3),B=="l"&&N>=2147483648&&(N-=4294967296);else throw new Error("'unpack' error. "+B);g.push(N),b+=z,I+=1}return g}function T(S,M){for(var y="",R=0;R<M;R++)y+=S;return y}function m(S){if(S.slice(0,2)!="ÿØ")throw new Error("Given data isn't JPEG.");for(var M=2,y=["ÿØ"];;){if(S.slice(M,M+2)=="ÿÚ"){y.push(S.slice(M));break}else{var R=x(">H",S.slice(M+2,M+4))[0],_=M+R+2;y.push(S.slice(M,_)),M=_}if(M>=S.length)throw new Error("Wrong JPEG data.")}return y}function f(S){for(var M,y=0;y<S.length;y++)if(M=S[y],M.slice(0,2)=="ÿá"&&M.slice(4,10)=="Exif\0\0")return M;return null}function L(S,M){var y=!1,R=[];return S.forEach(function(_,g){_.slice(0,2)=="ÿá"&&_.slice(4,10)=="Exif\0\0"&&(y?R.unshift(g):(S[g]=M,y=!0))}),R.forEach(function(_){S.splice(_,1)}),!y&&M&&(S=[S[0],M].concat(S.slice(1))),S.join("")}var C={Byte:1,Ascii:2,Short:3,Long:4,Rational:5,Undefined:7,SLong:9,SRational:10},A={Image:{11:{name:"ProcessingSoftware",type:"Ascii"},254:{name:"NewSubfileType",type:"Long"},255:{name:"SubfileType",type:"Short"},256:{name:"ImageWidth",type:"Long"},257:{name:"ImageLength",type:"Long"},258:{name:"BitsPerSample",type:"Short"},259:{name:"Compression",type:"Short"},262:{name:"PhotometricInterpretation",type:"Short"},263:{name:"Threshholding",type:"Short"},264:{name:"CellWidth",type:"Short"},265:{name:"CellLength",type:"Short"},266:{name:"FillOrder",type:"Short"},269:{name:"DocumentName",type:"Ascii"},270:{name:"ImageDescription",type:"Ascii"},271:{name:"Make",type:"Ascii"},272:{name:"Model",type:"Ascii"},273:{name:"StripOffsets",type:"Long"},274:{name:"Orientation",type:"Short"},277:{name:"SamplesPerPixel",type:"Short"},278:{name:"RowsPerStrip",type:"Long"},279:{name:"StripByteCounts",type:"Long"},282:{name:"XResolution",type:"Rational"},283:{name:"YResolution",type:"Rational"},284:{name:"PlanarConfiguration",type:"Short"},290:{name:"GrayResponseUnit",type:"Short"},291:{name:"GrayResponseCurve",type:"Short"},292:{name:"T4Options",type:"Long"},293:{name:"T6Options",type:"Long"},296:{name:"ResolutionUnit",type:"Short"},301:{name:"TransferFunction",type:"Short"},305:{name:"Software",type:"Ascii"},306:{name:"DateTime",type:"Ascii"},315:{name:"Artist",type:"Ascii"},316:{name:"HostComputer",type:"Ascii"},317:{name:"Predictor",type:"Short"},318:{name:"WhitePoint",type:"Rational"},319:{name:"PrimaryChromaticities",type:"Rational"},320:{name:"ColorMap",type:"Short"},321:{name:"HalftoneHints",type:"Short"},322:{name:"TileWidth",type:"Short"},323:{name:"TileLength",type:"Short"},324:{name:"TileOffsets",type:"Short"},325:{name:"TileByteCounts",type:"Short"},330:{name:"SubIFDs",type:"Long"},332:{name:"InkSet",type:"Short"},333:{name:"InkNames",type:"Ascii"},334:{name:"NumberOfInks",type:"Short"},336:{name:"DotRange",type:"Byte"},337:{name:"TargetPrinter",type:"Ascii"},338:{name:"ExtraSamples",type:"Short"},339:{name:"SampleFormat",type:"Short"},340:{name:"SMinSampleValue",type:"Short"},341:{name:"SMaxSampleValue",type:"Short"},342:{name:"TransferRange",type:"Short"},343:{name:"ClipPath",type:"Byte"},344:{name:"XClipPathUnits",type:"Long"},345:{name:"YClipPathUnits",type:"Long"},346:{name:"Indexed",type:"Short"},347:{name:"JPEGTables",type:"Undefined"},351:{name:"OPIProxy",type:"Short"},512:{name:"JPEGProc",type:"Long"},513:{name:"JPEGInterchangeFormat",type:"Long"},514:{name:"JPEGInterchangeFormatLength",type:"Long"},515:{name:"JPEGRestartInterval",type:"Short"},517:{name:"JPEGLosslessPredictors",type:"Short"},518:{name:"JPEGPointTransforms",type:"Short"},519:{name:"JPEGQTables",type:"Long"},520:{name:"JPEGDCTables",type:"Long"},521:{name:"JPEGACTables",type:"Long"},529:{name:"YCbCrCoefficients",type:"Rational"},530:{name:"YCbCrSubSampling",type:"Short"},531:{name:"YCbCrPositioning",type:"Short"},532:{name:"ReferenceBlackWhite",type:"Rational"},700:{name:"XMLPacket",type:"Byte"},18246:{name:"Rating",type:"Short"},18249:{name:"RatingPercent",type:"Short"},32781:{name:"ImageID",type:"Ascii"},33421:{name:"CFARepeatPatternDim",type:"Short"},33422:{name:"CFAPattern",type:"Byte"},33423:{name:"BatteryLevel",type:"Rational"},33432:{name:"Copyright",type:"Ascii"},33434:{name:"ExposureTime",type:"Rational"},34377:{name:"ImageResources",type:"Byte"},34665:{name:"ExifTag",type:"Long"},34675:{name:"InterColorProfile",type:"Undefined"},34853:{name:"GPSTag",type:"Long"},34857:{name:"Interlace",type:"Short"},34858:{name:"TimeZoneOffset",type:"Long"},34859:{name:"SelfTimerMode",type:"Short"},37387:{name:"FlashEnergy",type:"Rational"},37388:{name:"SpatialFrequencyResponse",type:"Undefined"},37389:{name:"Noise",type:"Undefined"},37390:{name:"FocalPlaneXResolution",type:"Rational"},37391:{name:"FocalPlaneYResolution",type:"Rational"},37392:{name:"FocalPlaneResolutionUnit",type:"Short"},37393:{name:"ImageNumber",type:"Long"},37394:{name:"SecurityClassification",type:"Ascii"},37395:{name:"ImageHistory",type:"Ascii"},37397:{name:"ExposureIndex",type:"Rational"},37398:{name:"TIFFEPStandardID",type:"Byte"},37399:{name:"SensingMethod",type:"Short"},40091:{name:"XPTitle",type:"Byte"},40092:{name:"XPComment",type:"Byte"},40093:{name:"XPAuthor",type:"Byte"},40094:{name:"XPKeywords",type:"Byte"},40095:{name:"XPSubject",type:"Byte"},50341:{name:"PrintImageMatching",type:"Undefined"},50706:{name:"DNGVersion",type:"Byte"},50707:{name:"DNGBackwardVersion",type:"Byte"},50708:{name:"UniqueCameraModel",type:"Ascii"},50709:{name:"LocalizedCameraModel",type:"Byte"},50710:{name:"CFAPlaneColor",type:"Byte"},50711:{name:"CFALayout",type:"Short"},50712:{name:"LinearizationTable",type:"Short"},50713:{name:"BlackLevelRepeatDim",type:"Short"},50714:{name:"BlackLevel",type:"Rational"},50715:{name:"BlackLevelDeltaH",type:"SRational"},50716:{name:"BlackLevelDeltaV",type:"SRational"},50717:{name:"WhiteLevel",type:"Short"},50718:{name:"DefaultScale",type:"Rational"},50719:{name:"DefaultCropOrigin",type:"Short"},50720:{name:"DefaultCropSize",type:"Short"},50721:{name:"ColorMatrix1",type:"SRational"},50722:{name:"ColorMatrix2",type:"SRational"},50723:{name:"CameraCalibration1",type:"SRational"},50724:{name:"CameraCalibration2",type:"SRational"},50725:{name:"ReductionMatrix1",type:"SRational"},50726:{name:"ReductionMatrix2",type:"SRational"},50727:{name:"AnalogBalance",type:"Rational"},50728:{name:"AsShotNeutral",type:"Short"},50729:{name:"AsShotWhiteXY",type:"Rational"},50730:{name:"BaselineExposure",type:"SRational"},50731:{name:"BaselineNoise",type:"Rational"},50732:{name:"BaselineSharpness",type:"Rational"},50733:{name:"BayerGreenSplit",type:"Long"},50734:{name:"LinearResponseLimit",type:"Rational"},50735:{name:"CameraSerialNumber",type:"Ascii"},50736:{name:"LensInfo",type:"Rational"},50737:{name:"ChromaBlurRadius",type:"Rational"},50738:{name:"AntiAliasStrength",type:"Rational"},50739:{name:"ShadowScale",type:"SRational"},50740:{name:"DNGPrivateData",type:"Byte"},50741:{name:"MakerNoteSafety",type:"Short"},50778:{name:"CalibrationIlluminant1",type:"Short"},50779:{name:"CalibrationIlluminant2",type:"Short"},50780:{name:"BestQualityScale",type:"Rational"},50781:{name:"RawDataUniqueID",type:"Byte"},50827:{name:"OriginalRawFileName",type:"Byte"},50828:{name:"OriginalRawFileData",type:"Undefined"},50829:{name:"ActiveArea",type:"Short"},50830:{name:"MaskedAreas",type:"Short"},50831:{name:"AsShotICCProfile",type:"Undefined"},50832:{name:"AsShotPreProfileMatrix",type:"SRational"},50833:{name:"CurrentICCProfile",type:"Undefined"},50834:{name:"CurrentPreProfileMatrix",type:"SRational"},50879:{name:"ColorimetricReference",type:"Short"},50931:{name:"CameraCalibrationSignature",type:"Byte"},50932:{name:"ProfileCalibrationSignature",type:"Byte"},50934:{name:"AsShotProfileName",type:"Byte"},50935:{name:"NoiseReductionApplied",type:"Rational"},50936:{name:"ProfileName",type:"Byte"},50937:{name:"ProfileHueSatMapDims",type:"Long"},50938:{name:"ProfileHueSatMapData1",type:"Float"},50939:{name:"ProfileHueSatMapData2",type:"Float"},50940:{name:"ProfileToneCurve",type:"Float"},50941:{name:"ProfileEmbedPolicy",type:"Long"},50942:{name:"ProfileCopyright",type:"Byte"},50964:{name:"ForwardMatrix1",type:"SRational"},50965:{name:"ForwardMatrix2",type:"SRational"},50966:{name:"PreviewApplicationName",type:"Byte"},50967:{name:"PreviewApplicationVersion",type:"Byte"},50968:{name:"PreviewSettingsName",type:"Byte"},50969:{name:"PreviewSettingsDigest",type:"Byte"},50970:{name:"PreviewColorSpace",type:"Long"},50971:{name:"PreviewDateTime",type:"Ascii"},50972:{name:"RawImageDigest",type:"Undefined"},50973:{name:"OriginalRawFileDigest",type:"Undefined"},50974:{name:"SubTileBlockSize",type:"Long"},50975:{name:"RowInterleaveFactor",type:"Long"},50981:{name:"ProfileLookTableDims",type:"Long"},50982:{name:"ProfileLookTableData",type:"Float"},51008:{name:"OpcodeList1",type:"Undefined"},51009:{name:"OpcodeList2",type:"Undefined"},51022:{name:"OpcodeList3",type:"Undefined"}},Exif:{33434:{name:"ExposureTime",type:"Rational"},33437:{name:"FNumber",type:"Rational"},34850:{name:"ExposureProgram",type:"Short"},34852:{name:"SpectralSensitivity",type:"Ascii"},34855:{name:"ISOSpeedRatings",type:"Short"},34856:{name:"OECF",type:"Undefined"},34864:{name:"SensitivityType",type:"Short"},34865:{name:"StandardOutputSensitivity",type:"Long"},34866:{name:"RecommendedExposureIndex",type:"Long"},34867:{name:"ISOSpeed",type:"Long"},34868:{name:"ISOSpeedLatitudeyyy",type:"Long"},34869:{name:"ISOSpeedLatitudezzz",type:"Long"},36864:{name:"ExifVersion",type:"Undefined"},36867:{name:"DateTimeOriginal",type:"Ascii"},36868:{name:"DateTimeDigitized",type:"Ascii"},37121:{name:"ComponentsConfiguration",type:"Undefined"},37122:{name:"CompressedBitsPerPixel",type:"Rational"},37377:{name:"ShutterSpeedValue",type:"SRational"},37378:{name:"ApertureValue",type:"Rational"},37379:{name:"BrightnessValue",type:"SRational"},37380:{name:"ExposureBiasValue",type:"SRational"},37381:{name:"MaxApertureValue",type:"Rational"},37382:{name:"SubjectDistance",type:"Rational"},37383:{name:"MeteringMode",type:"Short"},37384:{name:"LightSource",type:"Short"},37385:{name:"Flash",type:"Short"},37386:{name:"FocalLength",type:"Rational"},37396:{name:"SubjectArea",type:"Short"},37500:{name:"MakerNote",type:"Undefined"},37510:{name:"UserComment",type:"Ascii"},37520:{name:"SubSecTime",type:"Ascii"},37521:{name:"SubSecTimeOriginal",type:"Ascii"},37522:{name:"SubSecTimeDigitized",type:"Ascii"},40960:{name:"FlashpixVersion",type:"Undefined"},40961:{name:"ColorSpace",type:"Short"},40962:{name:"PixelXDimension",type:"Long"},40963:{name:"PixelYDimension",type:"Long"},40964:{name:"RelatedSoundFile",type:"Ascii"},40965:{name:"InteroperabilityTag",type:"Long"},41483:{name:"FlashEnergy",type:"Rational"},41484:{name:"SpatialFrequencyResponse",type:"Undefined"},41486:{name:"FocalPlaneXResolution",type:"Rational"},41487:{name:"FocalPlaneYResolution",type:"Rational"},41488:{name:"FocalPlaneResolutionUnit",type:"Short"},41492:{name:"SubjectLocation",type:"Short"},41493:{name:"ExposureIndex",type:"Rational"},41495:{name:"SensingMethod",type:"Short"},41728:{name:"FileSource",type:"Undefined"},41729:{name:"SceneType",type:"Undefined"},41730:{name:"CFAPattern",type:"Undefined"},41985:{name:"CustomRendered",type:"Short"},41986:{name:"ExposureMode",type:"Short"},41987:{name:"WhiteBalance",type:"Short"},41988:{name:"DigitalZoomRatio",type:"Rational"},41989:{name:"FocalLengthIn35mmFilm",type:"Short"},41990:{name:"SceneCaptureType",type:"Short"},41991:{name:"GainControl",type:"Short"},41992:{name:"Contrast",type:"Short"},41993:{name:"Saturation",type:"Short"},41994:{name:"Sharpness",type:"Short"},41995:{name:"DeviceSettingDescription",type:"Undefined"},41996:{name:"SubjectDistanceRange",type:"Short"},42016:{name:"ImageUniqueID",type:"Ascii"},42032:{name:"CameraOwnerName",type:"Ascii"},42033:{name:"BodySerialNumber",type:"Ascii"},42034:{name:"LensSpecification",type:"Rational"},42035:{name:"LensMake",type:"Ascii"},42036:{name:"LensModel",type:"Ascii"},42037:{name:"LensSerialNumber",type:"Ascii"},42240:{name:"Gamma",type:"Rational"}},GPS:{0:{name:"GPSVersionID",type:"Byte"},1:{name:"GPSLatitudeRef",type:"Ascii"},2:{name:"GPSLatitude",type:"Rational"},3:{name:"GPSLongitudeRef",type:"Ascii"},4:{name:"GPSLongitude",type:"Rational"},5:{name:"GPSAltitudeRef",type:"Byte"},6:{name:"GPSAltitude",type:"Rational"},7:{name:"GPSTimeStamp",type:"Rational"},8:{name:"GPSSatellites",type:"Ascii"},9:{name:"GPSStatus",type:"Ascii"},10:{name:"GPSMeasureMode",type:"Ascii"},11:{name:"GPSDOP",type:"Rational"},12:{name:"GPSSpeedRef",type:"Ascii"},13:{name:"GPSSpeed",type:"Rational"},14:{name:"GPSTrackRef",type:"Ascii"},15:{name:"GPSTrack",type:"Rational"},16:{name:"GPSImgDirectionRef",type:"Ascii"},17:{name:"GPSImgDirection",type:"Rational"},18:{name:"GPSMapDatum",type:"Ascii"},19:{name:"GPSDestLatitudeRef",type:"Ascii"},20:{name:"GPSDestLatitude",type:"Rational"},21:{name:"GPSDestLongitudeRef",type:"Ascii"},22:{name:"GPSDestLongitude",type:"Rational"},23:{name:"GPSDestBearingRef",type:"Ascii"},24:{name:"GPSDestBearing",type:"Rational"},25:{name:"GPSDestDistanceRef",type:"Ascii"},26:{name:"GPSDestDistance",type:"Rational"},27:{name:"GPSProcessingMethod",type:"Undefined"},28:{name:"GPSAreaInformation",type:"Undefined"},29:{name:"GPSDateStamp",type:"Ascii"},30:{name:"GPSDifferential",type:"Short"},31:{name:"GPSHPositioningError",type:"Rational"}},Interop:{1:{name:"InteroperabilityIndex",type:"Ascii"}}};A["0th"]=A.Image,A["1st"]=A.Image,t.TAGS=A,t.ImageIFD={ProcessingSoftware:11,NewSubfileType:254,SubfileType:255,ImageWidth:256,ImageLength:257,BitsPerSample:258,Compression:259,PhotometricInterpretation:262,Threshholding:263,CellWidth:264,CellLength:265,FillOrder:266,DocumentName:269,ImageDescription:270,Make:271,Model:272,StripOffsets:273,Orientation:274,SamplesPerPixel:277,RowsPerStrip:278,StripByteCounts:279,XResolution:282,YResolution:283,PlanarConfiguration:284,GrayResponseUnit:290,GrayResponseCurve:291,T4Options:292,T6Options:293,ResolutionUnit:296,TransferFunction:301,Software:305,DateTime:306,Artist:315,HostComputer:316,Predictor:317,WhitePoint:318,PrimaryChromaticities:319,ColorMap:320,HalftoneHints:321,TileWidth:322,TileLength:323,TileOffsets:324,TileByteCounts:325,SubIFDs:330,InkSet:332,InkNames:333,NumberOfInks:334,DotRange:336,TargetPrinter:337,ExtraSamples:338,SampleFormat:339,SMinSampleValue:340,SMaxSampleValue:341,TransferRange:342,ClipPath:343,XClipPathUnits:344,YClipPathUnits:345,Indexed:346,JPEGTables:347,OPIProxy:351,JPEGProc:512,JPEGInterchangeFormat:513,JPEGInterchangeFormatLength:514,JPEGRestartInterval:515,JPEGLosslessPredictors:517,JPEGPointTransforms:518,JPEGQTables:519,JPEGDCTables:520,JPEGACTables:521,YCbCrCoefficients:529,YCbCrSubSampling:530,YCbCrPositioning:531,ReferenceBlackWhite:532,XMLPacket:700,Rating:18246,RatingPercent:18249,ImageID:32781,CFARepeatPatternDim:33421,CFAPattern:33422,BatteryLevel:33423,Copyright:33432,ExposureTime:33434,ImageResources:34377,ExifTag:34665,InterColorProfile:34675,GPSTag:34853,Interlace:34857,TimeZoneOffset:34858,SelfTimerMode:34859,FlashEnergy:37387,SpatialFrequencyResponse:37388,Noise:37389,FocalPlaneXResolution:37390,FocalPlaneYResolution:37391,FocalPlaneResolutionUnit:37392,ImageNumber:37393,SecurityClassification:37394,ImageHistory:37395,ExposureIndex:37397,TIFFEPStandardID:37398,SensingMethod:37399,XPTitle:40091,XPComment:40092,XPAuthor:40093,XPKeywords:40094,XPSubject:40095,PrintImageMatching:50341,DNGVersion:50706,DNGBackwardVersion:50707,UniqueCameraModel:50708,LocalizedCameraModel:50709,CFAPlaneColor:50710,CFALayout:50711,LinearizationTable:50712,BlackLevelRepeatDim:50713,BlackLevel:50714,BlackLevelDeltaH:50715,BlackLevelDeltaV:50716,WhiteLevel:50717,DefaultScale:50718,DefaultCropOrigin:50719,DefaultCropSize:50720,ColorMatrix1:50721,ColorMatrix2:50722,CameraCalibration1:50723,CameraCalibration2:50724,ReductionMatrix1:50725,ReductionMatrix2:50726,AnalogBalance:50727,AsShotNeutral:50728,AsShotWhiteXY:50729,BaselineExposure:50730,BaselineNoise:50731,BaselineSharpness:50732,BayerGreenSplit:50733,LinearResponseLimit:50734,CameraSerialNumber:50735,LensInfo:50736,ChromaBlurRadius:50737,AntiAliasStrength:50738,ShadowScale:50739,DNGPrivateData:50740,MakerNoteSafety:50741,CalibrationIlluminant1:50778,CalibrationIlluminant2:50779,BestQualityScale:50780,RawDataUniqueID:50781,OriginalRawFileName:50827,OriginalRawFileData:50828,ActiveArea:50829,MaskedAreas:50830,AsShotICCProfile:50831,AsShotPreProfileMatrix:50832,CurrentICCProfile:50833,CurrentPreProfileMatrix:50834,ColorimetricReference:50879,CameraCalibrationSignature:50931,ProfileCalibrationSignature:50932,AsShotProfileName:50934,NoiseReductionApplied:50935,ProfileName:50936,ProfileHueSatMapDims:50937,ProfileHueSatMapData1:50938,ProfileHueSatMapData2:50939,ProfileToneCurve:50940,ProfileEmbedPolicy:50941,ProfileCopyright:50942,ForwardMatrix1:50964,ForwardMatrix2:50965,PreviewApplicationName:50966,PreviewApplicationVersion:50967,PreviewSettingsName:50968,PreviewSettingsDigest:50969,PreviewColorSpace:50970,PreviewDateTime:50971,RawImageDigest:50972,OriginalRawFileDigest:50973,SubTileBlockSize:50974,RowInterleaveFactor:50975,ProfileLookTableDims:50981,ProfileLookTableData:50982,OpcodeList1:51008,OpcodeList2:51009,OpcodeList3:51022,NoiseProfile:51041},t.ExifIFD={ExposureTime:33434,FNumber:33437,ExposureProgram:34850,SpectralSensitivity:34852,ISOSpeedRatings:34855,OECF:34856,SensitivityType:34864,StandardOutputSensitivity:34865,RecommendedExposureIndex:34866,ISOSpeed:34867,ISOSpeedLatitudeyyy:34868,ISOSpeedLatitudezzz:34869,ExifVersion:36864,DateTimeOriginal:36867,DateTimeDigitized:36868,ComponentsConfiguration:37121,CompressedBitsPerPixel:37122,ShutterSpeedValue:37377,ApertureValue:37378,BrightnessValue:37379,ExposureBiasValue:37380,MaxApertureValue:37381,SubjectDistance:37382,MeteringMode:37383,LightSource:37384,Flash:37385,FocalLength:37386,SubjectArea:37396,MakerNote:37500,UserComment:37510,SubSecTime:37520,SubSecTimeOriginal:37521,SubSecTimeDigitized:37522,FlashpixVersion:40960,ColorSpace:40961,PixelXDimension:40962,PixelYDimension:40963,RelatedSoundFile:40964,InteroperabilityTag:40965,FlashEnergy:41483,SpatialFrequencyResponse:41484,FocalPlaneXResolution:41486,FocalPlaneYResolution:41487,FocalPlaneResolutionUnit:41488,SubjectLocation:41492,ExposureIndex:41493,SensingMethod:41495,FileSource:41728,SceneType:41729,CFAPattern:41730,CustomRendered:41985,ExposureMode:41986,WhiteBalance:41987,DigitalZoomRatio:41988,FocalLengthIn35mmFilm:41989,SceneCaptureType:41990,GainControl:41991,Contrast:41992,Saturation:41993,Sharpness:41994,DeviceSettingDescription:41995,SubjectDistanceRange:41996,ImageUniqueID:42016,CameraOwnerName:42032,BodySerialNumber:42033,LensSpecification:42034,LensMake:42035,LensModel:42036,LensSerialNumber:42037,Gamma:42240},t.GPSIFD={GPSVersionID:0,GPSLatitudeRef:1,GPSLatitude:2,GPSLongitudeRef:3,GPSLongitude:4,GPSAltitudeRef:5,GPSAltitude:6,GPSTimeStamp:7,GPSSatellites:8,GPSStatus:9,GPSMeasureMode:10,GPSDOP:11,GPSSpeedRef:12,GPSSpeed:13,GPSTrackRef:14,GPSTrack:15,GPSImgDirectionRef:16,GPSImgDirection:17,GPSMapDatum:18,GPSDestLatitudeRef:19,GPSDestLatitude:20,GPSDestLongitudeRef:21,GPSDestLongitude:22,GPSDestBearingRef:23,GPSDestBearing:24,GPSDestDistanceRef:25,GPSDestDistance:26,GPSProcessingMethod:27,GPSAreaInformation:28,GPSDateStamp:29,GPSDifferential:30,GPSHPositioningError:31},t.InteropIFD={InteroperabilityIndex:1},t.GPSHelper={degToDmsRational:function(S){var M=Math.abs(S),y=M%1*60,R=y%1*60,_=Math.floor(M),g=Math.floor(y),b=Math.round(R*100);return[[_,1],[g,1],[b,100]]},dmsRationalToDeg:function(S,M){var y=M==="S"||M==="W"?-1:1,R=S[0][0]/S[0][1]+S[1][0]/S[1][1]/60+S[2][0]/S[2][1]/3600;return R*y}},i.exports&&(e=i.exports=t),e.piexif=t})()})(Er,Er.exports)),Er.exports}var di=vg();function xg(i){return new Promise((e,t)=>{const n=new FileReader;n.onload=function(r){try{const s=r.target.result,a=di.load(s),o=Sg(a);e(o)}catch(s){t(s)}},n.onerror=()=>t(n.error),n.readAsDataURL(i)})}function Sg(i){const e={"0th":di.ImageIFD,Exif:di.ExifIFD,GPS:di.GPSIFD,Interop:di.InteropIFD,"1st":di.ImageIFD},t={};for(const n in i){if(!e[n])continue;const r={},s=e[n],a=i[n];for(const o in a){let c=o;for(const l in s)if(s[l]==o){c=l;break}r[c]=a[o]}t[n]=r}return t}async function Mg(){if(typeof window.ImageCapture!="function")return!1;try{const e=(await navigator.mediaDevices.getUserMedia({video:!0})).getVideoTracks()[0];if(!e)return!1;try{const n=typeof new window.ImageCapture(e).takePhoto=="function";return e.stop(),n}catch{return e.stop(),!1}}catch{return!1}}class Eg{#e=new jo;#t=null;#i;constructor(e){this.#i=new _g(e)}async init(){this.#i.onFileSelected=this.#n,this.#i.onFileShareRequested=this.#s,this.#i.cameraEnabled=await Mg()}async loadAsync(e){const t=await xg(e);if(!t||!t.Exif||!t.Exif.ShutterSpeedValue){alert("撮影環境情報のないファイルを読み込みました。解析を行うにはシャッタースピードなどの情報が必要です。");return}try{let n;if(e.type=="image/jpeg")n=await oc(e);else throw new Error("unsupported file type.");const r=n.grayscale,s=n.width,a=n.height;await this.#i.loadAsync(e,r,s,a)}catch(n){n instanceof Error?(console.error(n.message),alert(n.message)):(console.error(n),alert(n))}}#n=e=>{this.loadAsync(e.detail.selectedFile)};#s=async e=>{if(this.#t)try{await navigator.share({files:[this.#t],title:"写真を保存",text:"この画像を保存/共有します"})}catch(t){alert("ファイル保存に失敗しました。"+t)}};checkFileShareable(e){return navigator.canShare&&navigator.canShare({files:[e]})}}"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js");document.addEventListener("DOMContentLoaded",async function(){const i=document.querySelector(".lumimaplite");i&&await new Eg(i).init()});
//# sourceMappingURL=index-B4TelVqN.js.map
