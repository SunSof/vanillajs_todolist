parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BzzN":[function(require,module,exports) {
function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function t(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?e(Object(n),!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a=[{_id:"5d2ca9e2e03d40b326596aa7",completed:!1,body:"Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",title:"Eu ea incididunt sunt consectetur fugiat non."},{_id:"5d2ca9e29c8a94095c1288e0",completed:!1,body:"Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",title:"Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."},{_id:"5d2ca9e2e03d40b3232496aa7",completed:!1,body:"Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",title:"Eu ea incididunt sunt consectetur fugiat non."},{_id:"5d2ca9e29c8a94095564788e0",completed:!1,body:"Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",title:"Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."}];!function(e){var i=a.reduce(function(e,t){return e[t._id]=t,e},{}),n=document.querySelector(".tasks-list-section .list-group"),r=document.forms.addTask,c=r.elements.title,o=r.elements.body,d=document.querySelector(".btn-unfinished"),u=document.querySelector(".btn-all-tasks");u.classList.add("btn"),document.querySelector(".btn-unfinished").classList.add("btn","unfinished");var l=document.querySelector(".btn-finished");function s(e){if(e){var t=document.createDocumentFragment();Object.values(e).forEach(function(e){var i=p(e);t.appendChild(i)}),n.appendChild(t)}else console.error("Submit task list!")}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e._id,i=e.title,a=e.body,n=e.completed,r=document.createElement("li");r.classList.add("list-group-item","d-flex","align-items-center","flex-wrap","mt-2"),r.setAttribute("data-task-id",t);var c=document.createElement("span");c.textContent=i,c.classList.add("span-text");var o=document.createElement("button");o.textContent="Delete task",o.classList.add("btn","delete-btn");var d=document.createElement("button");d.textContent="Task completed",d.classList.add("btn","btn-warning","performed-btn");var u=document.createElement("p");return u.textContent=a,u.classList.add("mt-2","w-100","p-text"),r.appendChild(c),r.appendChild(u),r.appendChild(d),r.appendChild(o),n&&r.classList.add("color"),r}function m(){var e=document.querySelector("ul").children,t=document.querySelector(".notification");0==e.length?function(){var e=document.createElement("li");e.classList.add("list-group-item","d-flex","align-items-center","flex-wrap","mt-2","notification");var t=document.createElement("span");t.textContent="The task list is empty!",t.style.fontWeight="bold",e.appendChild(t),document.querySelector(".list-group").appendChild(e)}():t&&t.remove()}function f(){for(var e=document.querySelector(".list-group");e.firstChild;)e.removeChild(e.lastChild)}l.classList.add("btn","finished"),s(i),r.addEventListener("submit",function(e){m(),e.preventDefault();var a=c.value,d=o.value;if(!a||!d)return void alert("Enter the title and body");var u=p((l=a,s=d,f={title:l,body:s,completed:!1,_id:"task-".concat(Math.random())},i[f._id]=f,t({},f)));var l,s,f;n.insertAdjacentElement("afterbegin",u),r.reset()}),n.addEventListener("click",function(e){var t=e.target;if(t.classList.contains("delete-btn")){var a=t.closest("[data-task-id]"),n=a.dataset.taskId,r=function(e){var t=i[e].title,a=confirm("Do you want to delete a task: ".concat(t));return a?(delete i[e],a):a}(n);!function(e,t){if(!e)return;t.remove()}(r,a)}m()}),n.addEventListener("click",function(e){var t=e.target;if(t.classList.contains("performed-btn")){var a=t.closest("[data-task-id]"),n=a.dataset.taskId;i[n].completed?(a.classList.remove("color"),i[n].completed=!1):(a.classList.add("color"),i[n].completed=!0)}}),l.addEventListener("click",function(){f(),e=i,t=document.createDocumentFragment(),Object.values(e).forEach(function(e){if(e.completed){var i=p(e);t.appendChild(i)}}),n.appendChild(t);var e,t}),d.addEventListener("click",function(){f(),e=i,t=document.createDocumentFragment(),Object.values(e).forEach(function(e){if(!e.completed){var i=p(e);t.appendChild(i)}}),n.appendChild(t);var e,t}),u.addEventListener("click",function(){f(),s(i)}),m()}();
},{}]},{},["BzzN"], null)
//# sourceMappingURL=https://sunsof.github.io/vanillajs_todolist/todolist.21146b77.js.map