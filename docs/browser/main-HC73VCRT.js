import{A as w,B as O,C as E,E as et,F as nt,G as it,H as ot,I as st,J as at,K as N,L as y,M as rt,N as ct,O as W,P as g,Z as pt,_ as lt,a as z,b as h,c as T,d as Y,e as s,f as tt,g as p,h as l,i as $,j as V,k,l as c,m as o,n as i,o as v,p as P,q as S,r as I,s as d,t as m,u as a,v as b,w as f,x as M,y as x,z as D}from"./chunk-4JTEPESQ.js";var F=class e{constructor(n,t){this.el=n;this.renderer=t}set appTaskStatus(n){n?this.renderer.setStyle(this.el.nativeElement,"background-color","green"):this.renderer.setStyle(this.el.nativeElement,"background-color","red")}static \u0275fac=function(t){return new(t||e)(p(Y),p(tt))};static \u0275dir=V({type:e,selectors:[["","appTaskStatus",""]],inputs:{appTaskStatus:"appTaskStatus"},standalone:!1})};var B=class e{taskTitle="";constructor(){}onClick(n){n.preventDefault(),n.stopPropagation(),confirm(`\xBFQuieres eliminar la tarea ${this.taskTitle}?`)===!0&&alert(`Eliminada la tarea ${this.taskTitle}`)}static \u0275fac=function(t){return new(t||e)};static \u0275dir=V({type:e,selectors:[["","appConfirmDelete",""]],hostBindings:function(t,r){t&1&&d("click",function(C){return r.onClick(C)})},inputs:{taskTitle:[0,"appConfirmDelete","taskTitle"]},standalone:!1})};var R=class e{constructor(n){this.router=n}taskId=null;detailsTask(){if(this.taskId===void 0||this.taskId===null)throw new Error("No task found");this.router.navigate([`tasks/details/${this.taskId}`])}static \u0275fac=function(t){return new(t||e)(p(y))};static \u0275cmp=l({type:e,selectors:[["app-details-button"]],inputs:{taskId:"taskId"},standalone:!1,decls:2,vars:0,consts:[[1,"task_details",3,"click"]],template:function(t,r){t&1&&(o(0,"button",0),d("click",function(){return r.detailsTask()}),a(1,"Detalles"),i())},styles:[".task_details[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:130px;background-color:#2979aa;color:#fff;padding:5px;border:none;outline:none}"]})};var ft=e=>({"justify-content":e}),gt=e=>({line_through:e}),kt=()=>({color:"white"});function _t(e,n){if(e&1&&(o(0,"span",15),a(1," Pendiente "),i()),e&2){let t=m().$implicit;c("appTaskStatus",t.completed)}}function Ct(e,n){if(e&1&&(o(0,"span",16),a(1," Completa "),i()),e&2){let t=m().$implicit;c("appTaskStatus",t.completed)}}function vt(e,n){if(e&1){let t=I();o(0,"div",7)(1,"small"),a(2),i(),k(3,_t,2,1,"span",8)(4,Ct,2,1,"span",9),o(5,"span",10),a(6),i(),o(7,"input",11),d("change",function(){let u=h(t).$implicit,C=m(2);return T(C.completeTask(u))}),i(),v(8,"app-details-button",12),o(9,"button",13),d("click",function(){let u=h(t).$implicit,C=m(2);return T(C.deleteTask(u.id))}),a(10,"Eliminar"),i(),o(11,"button",14),d("click",function(){let u=h(t).$implicit,C=m(2);return T(C.editTask(u.id))}),a(12,"Editar"),i()()}if(e&2){let t=n.$implicit;s(2),f(" ",t.id," "),s(),c("ngIf",!t.completed),s(),c("ngIf",t.completed),s(),c("ngClass",x(8,gt,t.completed)),s(),b(t.title),s(),c("checked",t.completed),s(),c("taskId",t.id),s(),c("appConfirmDelete",t.title)}}function xt(e,n){e&1&&(o(0,"span",17),a(1," No hay tareas "),i()),e&2&&c("ngStyle",M(1,kt))}function ht(e,n){if(e&1&&(P(0),o(1,"h1",1),a(2),i(),o(3,"h2",2),a(4,"Tareas"),i(),o(5,"div",3)(6,"div",4),k(7,vt,13,10,"div",5)(8,xt,2,2,"span",6),i()(),S()),e&2){let t=m();s(2),f(" N\xFAmero de tareas: ",t.tasks.length,""),s(4),c("ngStyle",x(4,ft,t.tasks.length===0?"center":"")),s(),c("ngForOf",t.tasks),s(),c("ngIf",t.tasks.length===0)}}var H=class e{constructor(n,t){this.service=n;this.router=t;this.tasks=this.service.getTasks(),this.subscription=this.service.taskChanged.subscribe(r=>{this.tasks=r}),this.router.events.subscribe(()=>{this.router.url!=="/tasks"?this.view=!1:this.view=!0})}tasks=[];subscription;view=!0;completeTask(n){this.service.completeTask(n.id)}deleteTask(n){this.service.deleteTask(n)}editTask(n){this.router.navigate([`/edit/${n}`])}static \u0275fac=function(t){return new(t||e)(p(g),p(y))};static \u0275cmp=l({type:e,selectors:[["app-list-task"]],standalone:!1,decls:2,vars:1,consts:[[4,"ngIf"],[1,"number_task"],[1,"title"],[1,"flex"],[1,"container_task",3,"ngStyle"],["class","task",4,"ngFor","ngForOf"],[3,"ngStyle",4,"ngIf"],[1,"task"],["class","status",3,"appTaskStatus",4,"ngIf"],["class","statusTrue",3,"appTaskStatus",4,"ngIf"],[3,"ngClass"],["type","checkbox",1,"task_check",3,"change","checked"],[3,"taskId"],[1,"task_delete",3,"click","appConfirmDelete"],[1,"task_edit",3,"click"],[1,"status",3,"appTaskStatus"],[1,"statusTrue",3,"appTaskStatus"],[3,"ngStyle"]],template:function(t,r){t&1&&(k(0,ht,9,6,"ng-container",0),v(1,"router-outlet")),t&2&&c("ngIf",r.view)},dependencies:[D,w,O,E,N,F,B,R],styles:[".title[_ngcontent-%COMP%]{color:#ccc}.flex[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]{margin:70px auto 0;width:90%;display:flex;flex-direction:column;align-items:center;overflow:auto;max-height:450px;min-height:450px;overflow-x:hidden}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{padding:30px;margin:10px;box-shadow:3px 3px 10px #222;background-color:#3f3f3f;border:1px solid #3f3f3f;width:50%;position:relative;color:#ccc;border-radius:10px}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], .flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .statusTrue[_ngcontent-%COMP%]{position:absolute;left:0;top:5px;border-radius:0 5px 5px 0;padding:5px;font-size:50%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_delete[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:10px;background-color:red;padding:5px;border:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_edit[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:75px;background-color:green;padding:5px;border:none;outline:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_check[_ngcontent-%COMP%]{position:absolute;right:200px;top:27%;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .line_through[_ngcontent-%COMP%]{text-decoration:line-through}.number_task[_ngcontent-%COMP%]{position:absolute;right:10px;background-color:gray;color:#fff;padding:5px;border-radius:10px;font-size:.9rem}"]})};var Tt=e=>({"justify-content":e}),bt=e=>({line_through:e}),Mt=()=>({color:"white"});function Ot(e,n){if(e&1&&(o(0,"span",10),a(1," Pendiente "),i()),e&2){let t=m().$implicit;c("appTaskStatus",t.completed)}}function yt(e,n){if(e&1&&(o(0,"span",11),a(1," Completa "),i()),e&2){let t=m().$implicit;c("appTaskStatus",t.completed)}}function Pt(e,n){if(e&1&&(o(0,"div",5)(1,"small"),a(2),i(),k(3,Ot,2,1,"span",6)(4,yt,2,1,"span",7),o(5,"span",8),a(6),i(),v(7,"app-details-button",9),i()),e&2){let t=n.$implicit;s(2),f(" ",t.id," "),s(),c("ngIf",!t.completed),s(),c("ngIf",t.completed),s(),c("ngClass",x(6,bt,t.completed)),s(),b(t.title),s(),c("taskId",t.id)}}function St(e,n){e&1&&(o(0,"span",12),a(1," No hay tareas completadas "),i()),e&2&&c("ngStyle",M(1,Mt))}var G=class e{constructor(n){this.service=n}tasksCompleted=[];ngOnInit(){this.tasksCompleted=this.service.getTasksCompleted()}static \u0275fac=function(t){return new(t||e)(p(g))};static \u0275cmp=l({type:e,selectors:[["app-completed-tasks"]],standalone:!1,decls:6,vars:6,consts:[[1,"number_task"],[1,"flex"],[1,"container_task",3,"ngStyle"],["class","task",4,"ngFor","ngForOf"],[3,"ngStyle",4,"ngIf"],[1,"task"],["class","status",3,"appTaskStatus",4,"ngIf"],["class","statusTrue",3,"appTaskStatus",4,"ngIf"],[3,"ngClass"],[3,"taskId"],[1,"status",3,"appTaskStatus"],[1,"statusTrue",3,"appTaskStatus"],[3,"ngStyle"]],template:function(t,r){t&1&&(o(0,"h1",0),a(1),i(),o(2,"div",1)(3,"div",2),k(4,Pt,8,8,"div",3)(5,St,2,2,"span",4),i()()),t&2&&(s(),f(" N\xFAmero de tareas completadas: ",r.tasksCompleted.length,""),s(2),c("ngStyle",x(4,Tt,r.tasksCompleted.length===0?"center":"")),s(),c("ngForOf",r.tasksCompleted),s(),c("ngIf",r.tasksCompleted.length===0))},dependencies:[D,w,O,E,F,R],styles:[".flex[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]{margin:130px auto 0;width:90%;display:flex;flex-direction:column;align-items:center;overflow:auto;max-height:450px;min-height:450px;overflow-x:hidden}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{padding:30px;margin:10px;box-shadow:3px 3px 10px #222;background-color:#3f3f3f;border:1px solid #3f3f3f;width:50%;position:relative;color:#ccc;border-radius:10px}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], .flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .statusTrue[_ngcontent-%COMP%]{position:absolute;left:0;top:5px;border-radius:0 5px 5px 0;padding:5px;font-size:50%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_delete[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:10px;background-color:red;padding:5px;border:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_edit[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:75px;background-color:green;padding:5px;border:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_check[_ngcontent-%COMP%]{position:absolute;right:150px;top:27%;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .line_through[_ngcontent-%COMP%]{text-decoration:line-through}.number_task[_ngcontent-%COMP%]{position:absolute;right:10px;background-color:gray;color:#fff;padding:5px;border-radius:10px;font-size:.9rem}"]})};var Q=class e{constructor(n,t){this.router=n;this.service=t}task;tasks=[];ngOnInit(){let n=Number(this.router.snapshot.paramMap.get("id"));this.task=this.service.getTaskById(n)}static \u0275fac=function(t){return new(t||e)(p(at),p(g))};static \u0275cmp=l({type:e,selectors:[["app-details-tasks"]],standalone:!1,decls:8,vars:3,consts:[[1,"container_task"],[1,"task"],[1,"task_title"],[1,"task_id"],[1,"task_description"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),a(3),i(),o(4,"span",3),a(5),i(),o(6,"p",4),a(7),i()()()),t&2&&(s(3),f("",r.task==null?null:r.task.title," "),s(2),f("ID: ",r.task==null?null:r.task.id,""),s(2),b(r.task==null?null:r.task.description))},styles:[".container_task[_ngcontent-%COMP%]{width:100%;height:90vh;display:flex;align-items:center;justify-content:center}.container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{width:50%;max-width:max-content;min-width:50%;height:auto;max-height:70%;min-height:70%;background-color:#3f3f3f;display:flex;align-items:center;justify-content:center;flex-direction:column;border-radius:10px}.container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_title[_ngcontent-%COMP%]{font-size:3.5rem}.container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_id[_ngcontent-%COMP%]{font-size:1.5rem}"]})};var It=e=>({"justify-content":e}),Dt=e=>({line_through:e}),wt=()=>({color:"white"});function Et(e,n){if(e&1){let t=I();o(0,"div",5)(1,"small"),a(2),i(),o(3,"span",6),a(4),i(),o(5,"button",7),d("click",function(){let u=h(t).$implicit,C=m();return T(C.returnTask(u))}),a(6,"Restaurar tarea"),i()()}if(e&2){let t=n.$implicit;s(2),f(" ",t.id," "),s(),c("ngClass",x(3,Dt,t.completed)),s(),b(t.title)}}function Nt(e,n){e&1&&(o(0,"span",8),a(1," No hay tareas eliminadas "),i()),e&2&&c("ngStyle",M(1,wt))}var U=class e{constructor(n){this.service=n}tasksDeleted=[];tasksDeletedSub;ngOnInit(){this.tasksDeleted=this.service.getTasksDeleted(),this.tasksDeletedSub=this.service.taskDeletedChanged.subscribe(n=>{this.tasksDeleted=n})}ngOnDestroy(){this.tasksDeletedSub.unsubscribe()}returnTask(n){this.service.returnTasksDeleted(n)}static \u0275fac=function(t){return new(t||e)(p(g))};static \u0275cmp=l({type:e,selectors:[["app-deleted-tasks"]],standalone:!1,decls:8,vars:6,consts:[[1,"number_task"],[1,"flex"],[1,"container_task",3,"ngStyle"],["class","task",4,"ngFor","ngForOf"],[3,"ngStyle",4,"ngIf"],[1,"task"],[3,"ngClass"],[1,"task_return",3,"click"],[3,"ngStyle"]],template:function(t,r){t&1&&(P(0),o(1,"h1",0),a(2),i(),o(3,"div",1)(4,"div",2),k(5,Et,7,5,"div",3)(6,Nt,2,2,"span",4),i()(),S(),v(7,"router-outlet")),t&2&&(s(2),f(" N\xFAmero de tareas eliminadas: ",r.tasksDeleted.length,""),s(2),c("ngStyle",x(4,It,r.tasksDeleted.length===0?"center":"")),s(),c("ngForOf",r.tasksDeleted),s(),c("ngIf",r.tasksDeleted.length===0))},dependencies:[D,w,O,E,N],styles:[".flex[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]{margin:130px auto 0;width:90%;display:flex;flex-direction:column;align-items:center;overflow:auto;max-height:450px;min-height:450px;overflow-x:hidden}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{padding:30px;margin:10px;box-shadow:3px 3px 10px #222;background-color:#3f3f3f;border:1px solid #3f3f3f;width:50%;position:relative;color:#ccc;border-radius:10px}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], .flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .statusTrue[_ngcontent-%COMP%]{position:absolute;left:0;top:5px;border-radius:0 5px 5px 0;padding:5px;font-size:50%}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_return[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:10px;background-color:green;padding:5px;border:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_edit[_ngcontent-%COMP%]{position:absolute;top:25%;cursor:pointer;right:75px;background-color:green;padding:5px;border:none;outline:none;color:#fff;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .task_check[_ngcontent-%COMP%]{position:absolute;right:200px;top:27%;z-index:10}.flex[_ngcontent-%COMP%]   .container_task[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .line_through[_ngcontent-%COMP%]{text-decoration:line-through}.number_task[_ngcontent-%COMP%]{position:absolute;right:10px;background-color:gray;color:#fff;padding:5px;border-radius:10px;font-size:.9rem}"]})};var Z=class e{constructor(n,t){this.service=n;this.router=t}isLogin(){alert("Inicio de sesi\xF3n exitoso"),this.service.login(),setTimeout(()=>{this.router.navigate(["/tasks"])},1500)}static \u0275fac=function(t){return new(t||e)(p(g),p(y))};static \u0275cmp=l({type:e,selectors:[["app-login"]],standalone:!1,decls:3,vars:0,consts:[[1,"container"],[3,"click"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"button",1),d("click",function(){return r.isLogin()}),a(2,"Iniciar sesi\xF3n"),i()())},styles:[".container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;width:fit-content;border:none}"]})};var Ft=[{path:"tasks",component:H,children:[{path:"completed",component:G},{path:"details/:id",component:Q},{path:"deleted",component:U}]},{path:"create",loadChildren:()=>import("./chunk-L2JKXK36.js").then(e=>e.AddTaskModule)},{path:"",redirectTo:"tasks",pathMatch:"full"},{path:"edit/:id",loadChildren:()=>import("./chunk-RVDDITJ3.js").then(e=>e.EditTaskModule)},{path:"login",component:Z}],q=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=$({type:e});static \u0275inj=z({imports:[W.forRoot(Ft),W]})};var Rt=()=>({exact:!0});function Lt(e,n){if(e&1){let t=I();P(0),o(1,"nav",1)(2,"a",2),a(3,"Todas"),i(),o(4,"a",3),a(5,"Completadas"),i(),o(6,"a",4),a(7,"Eliminadas"),i()(),o(8,"button",5),d("click",function(){h(t);let u=m();return T(u.openTask())}),a(9,"Agregar tarea"),i(),S()}e&2&&(s(2),c("routerLinkActiveOptions",M(1,Rt)))}var J=class e{constructor(n,t){this.service=n;this.router=t;this.subscription=this.service.taskChanged.subscribe(r=>{this.tasks=r}),t.events.subscribe(()=>{t.url!=="/tasks"&&(this.view=!1),(t.url==="/tasks/completed"||t.url==="/tasks/deleted"||t.url==="/tasks")&&(this.view=!0)})}cambio=!1;tasks=[];tasksUpload=[];open=!1;view=!0;subscription;ngOnInit(){this.tasks=this.service.getTasks()}ngOnDestroy(){this.subscription.unsubscribe()}addTask(n){this.service.addTask(n)}openTask(){this.open=!0,this.router.navigate(["/create"])}markTaskCompleted(n){this.service.completeTask(n.id)}deleteTask(n){this.service.deleteTask(n)}static \u0275fac=function(t){return new(t||e)(p(g),p(y))};static \u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!1,decls:2,vars:1,consts:[[4,"ngIf"],[1,"tabs"],["routerLink","/tasks","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","/tasks/completed","routerLinkActive","active"],["routerLink","/tasks/deleted","routerLinkActive","active"],[1,"add_button",3,"click"]],template:function(t,r){t&1&&(k(0,Lt,10,2,"ng-container",0),v(1,"router-outlet")),t&2&&c("ngIf",r.view)},dependencies:[O,N,rt,ct],styles:[".add_button[_ngcontent-%COMP%]{position:absolute;right:40px;bottom:40px;padding:10px;border:none;outline:none;background-color:#2979aa;color:#fff;cursor:pointer}.tabs[_ngcontent-%COMP%]{width:auto;height:auto;position:absolute;padding:10px;left:10px;top:70px;display:flex;align-items:center;justify-content:space-around;gap:10px}.tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:gray}.tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff}"]})};var K=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=$({type:e,bootstrap:[J]});static \u0275inj=z({providers:[st(ot())],imports:[it,q,pt,lt,et]})};nt().bootstrapModule(K,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
