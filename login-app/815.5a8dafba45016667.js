"use strict";(self.webpackChunkfrontdesign=self.webpackChunkfrontdesign||[]).push([[815],{815:(C,h,s)=>{s.r(h),s.d(h,{EmployeeModule:()=>w});var d=s(6895),c=s(6773),i=s(433),e=s(8256),f=s(2340),g=s(529);let u=(()=>{class o{constructor(t){this.http=t,this.serverURL=f.N.serverURL}getDeptDetails(){return this.http.get(`${this.serverURL}/employee/getDeptDetails`,{withCredentials:!0})}submitDoc(t){return this.http.post(`${this.serverURL}/employee/submitDoc`,t,{withCredentials:!0})}submitDocmentdetails(t){return this.http.post(`${this.serverURL}/employee/submitDocmentdetails`,t,{withCredentials:!0})}getDocumentDetails(){return this.http.get(`${this.serverURL}/employee/getDocumentDetails`,{withCredentials:!0})}requestData(t){return this.http.post(`${this.serverURL}/employee/requestData`,t,{withCredentials:!0})}submitReuploadDocmentdetails(t){return this.http.post(`${this.serverURL}/employee/submitReuploadDocmentdetails`,t,{withCredentials:!0})}submitReuploadDocment(t){return this.http.post(`${this.serverURL}/employee/submitReuploadDocment`,t,{withCredentials:!0})}getDeptidDetails(){return this.http.get(`${this.serverURL}/employee/getDeptidDetails`,{withCredentials:!0})}getdeptidData(){return this.http.get(`${this.serverURL}/employee/getdeptidData`,{withCredentials:!0})}getredeptidData(){return this.http.get(`${this.serverURL}/employee/getredeptidData`,{withCredentials:!0})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=s(4383);function F(o,a){if(1&o&&(e.TgZ(0,"option",21),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.hij("",t.docName," ")}}function D(o,a){if(1&o&&(e.TgZ(0,"span",22)(1,"span",23),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.bankFileFileGood)}}let Z=(()=>{class o{constructor(t,n,r,l){this.fb=t,this.router=n,this.employeeService=r,this.toastr=l,this.isSubmitDisabled=!1,this.documentForm=this.fb.group({documentName:["",i.kI.required],docId:["",i.kI.required],description:["",i.kI.required],attachedDocument:["",i.kI.required]})}ngOnInit(){this.loadDetails()}get mrf(){return this.documentForm.controls}get documentName(){return this.documentForm.get("documentName")}get docId(){return this.documentForm.get("docId")}get description(){return this.documentForm.get("description")}loadDetails(){this.employeeService.getredeptidData().subscribe(t=>{this.documentDetails=t},t=>this.toastr.error(t.statusText,t.status))}selectedbankFile(t){if(this.documentFileUrl=t.target.files[0],null!=this.documentFileUrl){var n=this.documentFileUrl.size;["image/jpeg","image/png","image/jpg","application/pdf"].includes(this.documentFileUrl.type)?(this.bankFileFileGood="",this.showbankFileError=!0,n>5e6&&(alert("file size too large"),this.documentForm.patchValue({attachedDocument:""}),this.showbankFileError=!0,this.bankFileFileGood="File size too large")):(this.bankFileFileGood="Wrong file Type Selected",this.documentForm.patchValue({attachedDocument:""}),this.showbankFileError=!0)}else window.alert("Upload Mandatory Files")}onSubmit(){const t={documentName:this.documentForm.value.documentName.docName,description:this.documentForm.value.description,docId:this.documentForm.value.documentName.docId},n=new FormData;n.append("documentFile",this.documentFileUrl),n.append("value",JSON.stringify(t)),this.employeeService.submitReuploadDocment(n).subscribe(r=>{!0===r?(alert("Data submitted successfully"),this.documentForm.reset(),this.loadDetails()):alert("Unexpected response from the server.")},r=>{alert(`Error: ${r.statusText} (Status: ${r.status})`)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(c.F0),e.Y36(u),e.Y36(b._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-reupload-document"]],decls:38,vars:3,consts:[[1,"main-card","mb-3","card"],[1,"card-header"],[1,"header-icon","lnr-license","icon-gradient","bg-plum-plate"],["novalidate","","autocomplete","off","role","form",3,"formGroup"],["documentFormID",""],[1,"card-body"],[1,"card-title"],[1,"row"],[1,"col-md-4","col-sm-6","col-xs-12"],["for","ddlFinancialYear",1,"control-label"],[1,"text-danger"],["id","ddlFinacialYear","formControlName","documentName","name","documentName","id","documentName","required","",1,"form-control"],["value","","disabled",""],[3,"ngValue",4,"ngFor","ngForOf"],["for","ddlFarmerwithImplements",1,"control-label"],["type","file","accept","image/jpeg, image/png,image/jpg, application/pdf","placeholder","","formControlName","attachedDocument","name","attachedDocument","id","attachedDocument","required","",1,"form-control",3,"change"],["for","",2,"font-size","10px","color","red"],["style","color:red;font-size: 15px; margin-left: 40px;",4,"ngIf"],["type","text","placeholder","remark","formControlName","description","name","description","id","description","required","",1,"form-control"],[1,"d-block","text-right","card-footer"],["type","submit",1,"btn","btn-primary",3,"click"],[3,"ngValue"],[2,"color","red","font-size","15px","margin-left","40px"],[2,"color","red"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e._uU(3,"Document Reupload "),e.qZA(),e.TgZ(4,"form",3,4)(6,"div",5),e._UZ(7,"h5",6),e.TgZ(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Document Name "),e.TgZ(12,"span",10),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"select",11)(15,"option",12),e._uU(16,"---Select Dept Id---"),e.qZA(),e.YNc(17,F,2,2,"option",13),e.qZA()(),e.TgZ(18,"div",8)(19,"label",14),e._uU(20,"Upload Bank Payment File"),e.TgZ(21,"span",10),e._uU(22,"*"),e.qZA()(),e.TgZ(23,"input",15),e.NdJ("change",function(l){return n.selectedbankFile(l)}),e.qZA(),e.TgZ(24,"label",16),e._uU(25,"\xa0\xa0 **File size should be less than 2MB"),e.qZA(),e._UZ(26,"br"),e.YNc(27,D,3,1,"span",17),e.qZA(),e.TgZ(28,"div",8)(29,"label",9),e._uU(30,"Document Remark "),e.TgZ(31,"span",10),e._uU(32,"*"),e.qZA()(),e._UZ(33,"input",18),e.qZA()(),e._UZ(34,"br"),e.qZA(),e.TgZ(35,"div",19)(36,"button",20),e.NdJ("click",function(){return n.onSubmit()}),e._uU(37,"Submit"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.documentForm),e.xp6(13),e.Q6J("ngForOf",n.documentDetails),e.xp6(10),e.Q6J("ngIf",n.showbankFileError))},dependencies:[d.sg,d.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u]}),o})();function v(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"a",8),e._UZ(7,"i",9),e._uU(8," Open File "),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"textarea",10),e.NdJ("ngModelChange",function(r){const p=e.CHM(t).$implicit;return e.KtG(p.replyText=r)}),e.qZA()(),e.TgZ(13,"td")(14,"button",11),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.sendReply(l.replyText,l.docId))}),e._uU(15,"Request"),e.qZA()()()}if(2&o){const t=a.$implicit,n=a.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.hij(" ",t.docName," "),e.xp6(2),e.Q6J("href",t.docPath,e.LSH),e.xp6(4),e.Oqu(t.Remark),e.xp6(2),e.Q6J("ngModel",t.replyText)}}function _(o,a){if(1&o&&(e.TgZ(0,"option",21),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.hij("",t.docName," ")}}function U(o,a){if(1&o&&(e.TgZ(0,"span",22)(1,"span",23),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.bankFileFileGood)}}const m={role:"Employee"},q=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"views",component:(()=>{class o{constructor(t,n,r){this.fb=t,this.router=n,this.employeeService=r,this.replyText=""}ngOnInit(){this.loadDetails()}loadDetails(){this.employeeService.getDocumentDetails().subscribe(t=>{this.documentDetails=t,console.log(this.documentDetails)},t=>{alert(`Error: ${t.statusText} (Status: ${t.status})`)})}sendReply(t,n){this.employeeService.requestData({reply:t,id:n}).subscribe(l=>{"true"===l[0].msg&&alert("Data inserted successfully")},l=>{alert(`Error: ${l.statusText} (Status Code: ${l.status})`)})}photoshow(t){const n=new Image;n.src=t;const r=window.open("");r?r.document.write(n.outerHTML):console.error("Failed to open a new window. Please check pop-up settings.")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(c.F0),e.Y36(u))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-empview"]],decls:24,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],["id","example",1,"table","table-bordered","dt-responsive","nowrap","table-striped","align-middle",2,"width","100%"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",3,"href"],["aria-hidden","true",1,"fa","fa-eye",2,"font-size","24px","display","block","margin-bottom","4px"],["placeholder","Write your reply...",3,"ngModel","ngModelChange"],[1,"btn","btn-sm","btn-soft-info",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Documents Details"),e.qZA()(),e.TgZ(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th"),e._uU(11,"SR No."),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Document Name"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Document Details"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Remarks"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Request"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Action"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,v,16,5,"tr",7),e.qZA()()()()()()),2&t&&(e.xp6(23),e.Q6J("ngForOf",n.documentDetails))},dependencies:[d.sg,i.Fj,i.JJ,i.On]}),o})(),data:m},{path:"reupload",component:Z,data:m},{path:"docentry",component:(()=>{class o{constructor(t,n,r){this.fb=t,this.router=n,this.employeeService=r,this.isSubmitDisabled=!1,this.documentForm=this.fb.group({documentName:["",i.kI.required],docId:["",i.kI.required],description:["",i.kI.required],attachedDocument:["",i.kI.required]})}ngOnInit(){this.loadDetails()}get mrf(){return this.documentForm.controls}get documentName(){return this.documentForm.get("documentName")}get docId(){return this.documentForm.get("docId")}get description(){return this.documentForm.get("description")}loadDetails(){this.employeeService.getdeptidData().subscribe(t=>{this.documentDetails=t})}selectedbankFile(t){if(this.documentFileUrl=t.target.files[0],null!=this.documentFileUrl){var n=this.documentFileUrl.size;["image/jpeg","image/png","image/jpg","application/pdf"].includes(this.documentFileUrl.type)?(this.bankFileFileGood="",this.showbankFileError=!0,n>5e6&&(alert("file size too large"),this.documentForm.patchValue({attachedDocument:""}),this.showbankFileError=!0,this.bankFileFileGood="File size too large")):(this.bankFileFileGood="Wrong file Type Selected",this.documentForm.patchValue({attachedDocument:""}),this.showbankFileError=!0)}else window.alert("Upload Mandatory Files")}onSubmit(){const t={documentName:this.documentForm.value.documentName.docName,description:this.documentForm.value.description,docId:this.documentForm.value.documentName.docNameId},n=new FormData;n.append("documentFile",this.documentFileUrl),n.append("value",JSON.stringify(t)),this.employeeService.submitReuploadDocmentdetails(n).subscribe(r=>{!0===r?(alert("Data submitted successfully"),this.documentForm.reset(),this.loadDetails()):alert("Unexpected response from the server.")},r=>{alert(`Error: ${r.statusText} (Status: ${r.status})`)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(c.F0),e.Y36(u))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-docupload"]],decls:38,vars:3,consts:[[1,"main-card","mb-3","card"],[1,"card-header"],[1,"header-icon","lnr-license","icon-gradient","bg-plum-plate"],["novalidate","","autocomplete","off","role","form",3,"formGroup"],["documentFormID",""],[1,"card-body"],[1,"card-title"],[1,"row"],[1,"col-md-4","col-sm-6","col-xs-12"],["for","ddlFinancialYear",1,"control-label"],[1,"text-danger"],["id","ddlFinacialYear","formControlName","documentName","name","documentName","id","documentName","required","",1,"form-control"],["value","","disabled",""],[3,"ngValue",4,"ngFor","ngForOf"],["for","ddlFarmerwithImplements",1,"control-label"],["type","file","accept","image/jpeg, image/png,image/jpg, application/pdf","placeholder","","formControlName","attachedDocument","name","attachedDocument","id","attachedDocument","required","",1,"form-control",3,"change"],["for","",2,"font-size","10px","color","red"],["style","color:red;font-size: 15px; margin-left: 40px;",4,"ngIf"],["type","text","placeholder","remark","formControlName","description","name","description","id","description","required","",1,"form-control"],[1,"d-block","text-right","card-footer"],["type","submit",1,"btn","btn-primary",3,"click"],[3,"ngValue"],[2,"color","red","font-size","15px","margin-left","40px"],[2,"color","red"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e._uU(3,"Document Entry "),e.qZA(),e.TgZ(4,"form",3,4)(6,"div",5),e._UZ(7,"h5",6),e.TgZ(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Document Name "),e.TgZ(12,"span",10),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"select",11)(15,"option",12),e._uU(16,"---Select Dept Id---"),e.qZA(),e.YNc(17,_,2,2,"option",13),e.qZA()(),e.TgZ(18,"div",8)(19,"label",14),e._uU(20,"Upload Bank Payment File"),e.TgZ(21,"span",10),e._uU(22,"*"),e.qZA()(),e.TgZ(23,"input",15),e.NdJ("change",function(l){return n.selectedbankFile(l)}),e.qZA(),e.TgZ(24,"label",16),e._uU(25,"\xa0\xa0 **File size should be less than 2MB"),e.qZA(),e._UZ(26,"br"),e.YNc(27,U,3,1,"span",17),e.qZA(),e.TgZ(28,"div",8)(29,"label",9),e._uU(30,"Document Remark "),e.TgZ(31,"span",10),e._uU(32,"*"),e.qZA()(),e._UZ(33,"input",18),e.qZA()(),e._UZ(34,"br"),e.qZA(),e.TgZ(35,"div",19)(36,"button",20),e.NdJ("click",function(){return n.onSubmit()}),e._uU(37,"Submit"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.documentForm),e.xp6(13),e.Q6J("ngForOf",n.documentDetails),e.xp6(10),e.Q6J("ngIf",n.showbankFileError))},dependencies:[d.sg,d.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u]}),o})(),data:m}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(q),c.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,x,i.u5,i.UX,g.JF]}),o})()}}]);