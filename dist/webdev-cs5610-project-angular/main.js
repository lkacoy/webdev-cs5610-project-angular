(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../webdev-summer2018-angular/src/app/models/user.model.client.ts":
/*!************************************************************************!*\
  !*** ../webdev-summer2018-angular/src/app/models/user.model.client.ts ***!
  \************************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-search/blog-search.component */ "./src/app/blog-search/blog-search.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog-list/blog-list.component.ts");
/* harmony import */ var _services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/bloggerApi.service.client */ "./src/app/services/bloggerApi.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blog_info_blog_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog-info/blog-info.component */ "./src/app/blog-info/blog-info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-home/project-home.component */ "./src/app/project-home/project-home.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_7__["BlogSearchComponent"],
                _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"],
                _blog_info_blog_info_component__WEBPACK_IMPORTED_MODULE_11__["BlogInfoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_14__["ProjectHomeComponent"],
                _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_15__["CreatePostComponent"],
                _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_17__["PostViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            providers: [
                _services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_9__["BloggerApiServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__["UserServiceClient"],
                _services_post_service_client__WEBPACK_IMPORTED_MODULE_16__["PostServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-search/blog-search.component */ "./src/app/blog-search/blog-search.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/blog-list/blog-list.component.ts");
/* harmony import */ var _blog_info_blog_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-info/blog-info.component */ "./src/app/blog-info/blog-info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-home/project-home.component */ "./src/app/project-home/project-home.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-view/post-view.component */ "./src/app/post-view/post-view.component.ts");











var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _project_home_project_home_component__WEBPACK_IMPORTED_MODULE_8__["ProjectHomeComponent"] },
    { path: 'blog-list', component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_5__["BlogListComponent"] },
    { path: 'blog-search', component: _blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_4__["BlogSearchComponent"] },
    { path: 'createPost', component: _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__["CreatePostComponent"] },
    { path: 'viewPost/:id', component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_10__["PostViewComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'blog-info/:id', component: _blog_info_blog_info_component__WEBPACK_IMPORTED_MODULE_6__["BlogInfoComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/blog-info/blog-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-info/blog-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-info/blog-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-info/blog-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>About {{info.title}}</h1>\n  Written by: {{info.name}} <br/>\n  Description: {{info.description}} <br/>\n  Post Count: {{info.posts}} <br/>\n  Allows Questions?: {{info.ask}} <br/>\n  Allows Anonymous Questions?: {{info.ask_anon}} <br/>\n  Link to the Blog: <a href=\"{{info.url}}\">{{info.url}}</a><br/>\n  <button class=\"btn btn-info\" (click)=\"goBack()\">Go Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/blog-info/blog-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-info/blog-info.component.ts ***!
  \**************************************************/
/*! exports provided: BlogInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogInfoComponent", function() { return BlogInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bloggerApi.service.client */ "./src/app/services/bloggerApi.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogInfoComponent = /** @class */ (function () {
    function BlogInfoComponent(router, blogService) {
        this.router = router;
        this.blogService = blogService;
    }
    BlogInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.router.snapshot.params['id']);
        console.log(this.router.snapshot.data);
        this.router.params.subscribe(function (params) { return _this.getBlogInfo(params['id']); });
    };
    BlogInfoComponent.prototype.getBlogInfo = function (id) {
        var _this = this;
        this.blogService.findBlogInfo(id)
            .then(function (info) { return _this.info = info.response.blog; });
    };
    BlogInfoComponent.prototype.goBack = function () {
        parent.history.go(-1);
    };
    BlogInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-info',
            template: __webpack_require__(/*! ./blog-info.component.html */ "./src/app/blog-info/blog-info.component.html"),
            styles: [__webpack_require__(/*! ./blog-info.component.css */ "./src/app/blog-info/blog-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_2__["BloggerApiServiceClient"]])
    ], BlogInfoComponent);
    return BlogInfoComponent;
}());



/***/ }),

/***/ "./src/app/blog-list/blog-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-list/blog-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-blog-search></app-blog-search>\n</div>\n"

/***/ }),

/***/ "./src/app/blog-list/blog-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-list/blog-list.component.ts ***!
  \**************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogListComponent = /** @class */ (function () {
    function BlogListComponent() {
    }
    BlogListComponent.prototype.ngOnInit = function () {
    };
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.component.html */ "./src/app/blog-list/blog-list.component.html"),
            styles: [__webpack_require__(/*! ./blog-list.component.css */ "./src/app/blog-list/blog-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/blog-search/blog-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-search/blog-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-search/blog-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-search/blog-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group row\">\r\n    <label for=\"topic\" class=\"col-sm-2 col-form-label\">Topic Search</label>\r\n    <input [(ngModel)]=\"keyword\" name=\"topic\" type=\"text\" class=\"form-control col-sm-5\" id=\"topic\" aria-describedby=\"topic\" placeholder=\"Search for something that interests you!\">\r\n    <label for=\"numResults\" class=\"col-sm-2 col-form-label\">Number Of Results</label>\r\n    <select [(ngModel)]=\"limit\" id=\"numResults\" name=\"numResults\" class=\"form-control col-sm-1 mr-2\">\r\n      <option value=\"1\">1</option>\r\n      <option value=\"2\">2</option>\r\n      <option value=\"3\">3</option>\r\n      <option value=\"4\">4</option>\r\n      <option value=\"5\">5</option>\r\n      <option value=\"6\">6</option>\r\n      <option value=\"7\">7</option>\r\n      <option value=\"8\">8</option>\r\n      <option value=\"9\">9</option>\r\n      <option value=\"10\">10</option>\r\n      <option value=\"11\">11</option>\r\n      <option value=\"12\">12</option>\r\n      <option value=\"13\">13</option>\r\n      <option value=\"14\">14</option>\r\n      <option value=\"15\">15</option>\r\n      <option value=\"16\">16</option>\r\n      <option value=\"17\">17</option>\r\n      <option value=\"18\">18</option>\r\n      <option value=\"19\">19</option>\r\n      <option value=\"20\">20</option>\r\n    </select>\r\n    <button type=\"submit\" (click)=\"searchPostsByTag(keyword, limit)\" class=\"btn btn-primary\">Search</button>\r\n  </div>\r\n</form>\r\n<h3>Blog Results ({{blogs.length}})</h3>\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n  <tr>\r\n    <th scope=\"col\"></th>\r\n    <th scope=\"col\">Blog Name</th>\r\n    <th scope=\"col\">Summary</th>\r\n    <th scope=\"col\">Link to Tumblr</th>\r\n  </tr>\r\n  </thead>\r\n  <tr *ngFor=\"let blog of blogs\">\r\n    <td><button class=\"btn btn-info\" (click)=\"viewBlogInfo(blog.blog_name)\">View Blog Info</button></td>\r\n    <td>{{blog.blog_name}}</td>\r\n    <td>{{blog.summary}}</td>\r\n    <td><a href=\"{{blog.post_url}}\">{{blog.post_url}}</a></td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/blog-search/blog-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-search/blog-search.component.ts ***!
  \******************************************************/
/*! exports provided: BlogSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSearchComponent", function() { return BlogSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bloggerApi.service.client */ "./src/app/services/bloggerApi.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogSearchComponent = /** @class */ (function () {
    function BlogSearchComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.blogs = [];
    }
    BlogSearchComponent.prototype.ngOnInit = function () {
    };
    BlogSearchComponent.prototype.searchPostsByTag = function (keyword, limit) {
        var _this = this;
        this.blogService.findPostsBySearchCriteria(keyword, limit)
            .then(function (response) { return _this.blogs = response.response; });
    };
    BlogSearchComponent.prototype.viewBlogInfo = function (blogName) {
        this.router.navigateByUrl('/blog-info/' + blogName);
    };
    BlogSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-search',
            template: __webpack_require__(/*! ./blog-search.component.html */ "./src/app/blog-search/blog-search.component.html"),
            styles: [__webpack_require__(/*! ./blog-search.component.css */ "./src/app/blog-search/blog-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bloggerApi_service_client__WEBPACK_IMPORTED_MODULE_1__["BloggerApiServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogSearchComponent);
    return BlogSearchComponent;
}());



/***/ }),

/***/ "./src/app/create-post/create-post.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-post/create-post.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-post/create-post.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-post/create-post.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Create a New Blog Post</h1>\n\n  <div class=\"form-group\">\n    <label class=\"form-control-sm\">\n      Title\n    </label>\n    <input type=\"text\" [(ngModel)]=\"post.postTitle\" class=\"form-control-sm\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"form-control-sm\">\n      Topic\n    </label>\n    <select [(ngModel)]=\"post.topic\" name=\"topic\" id=\"topic\" class=\"form-control-sm\">\n      <option *ngFor=\"let topic of topicList\" [ngValue]=\"topic\">{{topic}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"form-control-sm\">\n      Write your content below:\n    </label>\n    <textarea class=\"form-control\" [(ngModel)]=\"post.postContent\" rows=\"15\" cols=\"50\"></textarea>\n  </div>\n\n\n  <div class=\"row mt-4\">\n    <button class=\"btn btn-danger mr-2\" (click)=\"deleteDraft()\">\n      Discard\n    </button>\n    <button class=\"btn btn-success mr-2\" (click)=\"saveDraft()\">\n      Save\n    </button>\n    <button class=\"btn btn-success\" (click)=\"publishPost()\">\n      Publish\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-post/create-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-post/create-post.component.ts ***!
  \******************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(service, router) {
        this.service = service;
        this.router = router;
        this.post = new _models_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"]();
        //list of acceptable topics
        this.topicList = [
            'Science',
            'Sports',
            'Politics',
            'Nature',
            'Shopping',
            'Recipes',
            'Travel',
        ];
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent.prototype.deleteDraft = function () {
        if (confirm('Continuing will delete your draft and you will be unable to return to make edits. Continue?')) {
            if (this.post._id) {
                this.service.deletePost(this.post);
            }
            this.router.navigateByUrl('/home');
        }
    };
    CreatePostComponent.prototype.saveDraft = function () {
        this.post.published = false;
        //if an id exists, the post already exists in the database
        //this means an update should be done rather than post
        if (this.post._id) {
            //update
        }
        else {
            this.service.createPost(this.post)
                .then(function (response) {
                console.log(response);
                alert('Your draft has been saved!');
            });
        }
    };
    CreatePostComponent.prototype.publishPost = function () {
        var _this = this;
        if (confirm('Continuing will make your content viewable to others. Continue?')) {
            this.post.published = true;
            this.service.createPost(this.post)
                .then(function (response) {
                console.log(response);
                alert('Your post has been published!');
                _this.router.navigateByUrl('/viewPost/' + response._id);
            });
        }
    };
    CreatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service_client__WEBPACK_IMPORTED_MODULE_1__["PostServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Welcome to Lexi's CS5610 Home Page!</h1>\n  <p>Below you will find all of the work I did for CS 5610 at Northeastern University. </p>\n  <p>\n    To proceed directly to my course project, which creates a blogging website, please click\n    <a routerLink=\"/home\">here</a>.\n  </p>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Github Repositories\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-summer-2018-java-server-akacoyannakis\">Java Server</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-summer2018-client-react-akacoyannakis\">React Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/cs5610-react-native\">React Native</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-summer2018-angular\">Angular Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-summer2018-node\">Node Server</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-cs5610-project-angular\">Project - Angular Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://github.com/lkacoy/webdev-cs5610-project\">Project - Node Server</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Heroku Instances\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://web2018-lexikacoyannakis.herokuapp.com/\">Java Server</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://web2018-react-lexikacoyannakis.herokuapp.com/\">React Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://angular-lexikacoyannakis.herokuapp.com/\">Angular Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://node-lexikacoyannakis.herokuapp.com/\">Node Server</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://cs5610project-angular-lexi.herokuapp.com/\">Project - Angular Client</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"https://cs5610project-node-lexi.herokuapp.com/\">Project - Node Server</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control mb-2 mt-4\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         type=\"password\"\n         class=\"form-control mb-2\"/>\n  <small id=\"forgotPassword\" class=\"form-text text-muted\">Forgot Password?</small>\n  <small id=\"loginError\" class=\"text-danger\" [hidden]=\"!this.loginError\">\n    Login was unsuccessful. Please try again.\n  </small>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block mt-4\">\n    Login\n  </button>\n\n  <small id=\"register\" class=\"form-text text-muted\">\n    Don't have an account? <a routerLink=\"/register\">Register New User</a>\n  </small>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.loginError = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        this.service
            .login(username, password)
            .then(function (response) {
            if (response && response.error) {
                _this.loginError = true;
            }
            else {
                _this.loginError = false;
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post-view/post-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-view/post-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-view/post-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-view/post-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>{{post.postTitle}}</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/post-view/post-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-view/post-view.component.ts ***!
  \**************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post.model */ "./src/app/models/post.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostViewComponent = /** @class */ (function () {
    function PostViewComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.post = new _models_post_model__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.activatedRoute.params.subscribe(function (params) { return _this.setParams(params); });
    }
    PostViewComponent.prototype.ngOnInit = function () {
    };
    PostViewComponent.prototype.setParams = function (params) {
        var _this = this;
        this.postId = params['id'];
        console.log(this.postId);
        this.service.findPostById(this.postId)
            .then(function (post) { return _this.post = post; });
    };
    PostViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-view',
            template: __webpack_require__(/*! ./post-view.component.html */ "./src/app/post-view/post-view.component.html"),
            styles: [__webpack_require__(/*! ./post-view.component.css */ "./src/app/post-view/post-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service_client__WEBPACK_IMPORTED_MODULE_1__["PostServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostViewComponent);
    return PostViewComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"role\" class=\"form-control\" readonly=\"{{role==='admin'}}\"/>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n  <button (click)=\"delete()\"\n          class=\"btn btn-block btn-danger\">\n    Delete Account\n  </button>\n\n  <a (click)=\"logout()\">Logout</a>\n  <a routerLink=\"/home\" class=\"ml-2\">Home</a>\n  <a routerLink=\"/admin\" class=\"ml-2\" [hidden]=\"!this.isAdmin\">Admin</a>\n  <a routerLink=\"/createPost\" class=\"ml-2\" [hidden]=\"checkRole()\">Create Post</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _webdev_summer2018_angular_src_app_models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webdev-summer2018-angular/src/app/models/user.model.client */ "../webdev-summer2018-angular/src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router) {
        this.service = service;
        this.router = router;
        this.user = new _webdev_summer2018_angular_src_app_models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.isAdmin = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            _this.username = user.username;
            _this.email = user.email;
            _this.firstName = user.firstName;
            _this.lastName = user.lastName;
            _this.role = user.role;
            if (user.role === 'admin')
                _this.isAdmin = true;
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.user.username = this.username;
        this.user.password = this.password;
        this.user.email = this.email;
        this.user.firstName = this.firstName;
        this.user.lastName = this.lastName;
        this.user.role = this.role;
        this.service.updateUser(this.user)
            .then(function (user) {
            _this.user = user;
            _this.router.navigateByUrl('/profile');
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.delete = function () {
        var _this = this;
        if (confirm('Continuing will delete your account permanently. Are you sure you wish to continue?')) {
            this.service.deleteUser(this.username).then(function () {
                return _this.router.navigateByUrl('/login');
            });
        }
    };
    ProfileComponent.prototype.checkRole = function () {
        if (this.role !== 'blogWriter') {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project-home/project-home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/project-home/project-home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project-home/project-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-home/project-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">\n  <h1>Welcome to Blogger Central!</h1>\n  <h3>Find and create blogs!</h3>\n\n  <p>Interested in finding some inspiration before creating your own? <a routerLink=\"/blog-list\">Search some blogs from Tumblr here!</a></p>\n\n  <span class=\"mr-4\"><a routerLink=\"/login\">Login</a></span>\n  <span class=\"mr-4\"><a routerLink=\"/register\">Create New Account</a></span>\n  <span><a routerLink=\"/\">Course Home Page</a></span>\n\n</div>\n"

/***/ }),

/***/ "./src/app/project-home/project-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-home/project-home.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectHomeComponent", function() { return ProjectHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectHomeComponent = /** @class */ (function () {
    function ProjectHomeComponent() {
    }
    ProjectHomeComponent.prototype.ngOnInit = function () {
    };
    ProjectHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-home',
            template: __webpack_require__(/*! ./project-home.component.html */ "./src/app/project-home/project-home.component.html"),
            styles: [__webpack_require__(/*! ./project-home.component.css */ "./src/app/project-home/project-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectHomeComponent);
    return ProjectHomeComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Create New Account</h1>\n  <form class=\"needs-validation\" novalidate>\n    <div class=\"form-group row\">\n      <label for=\"usernameInput\">Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" required class=\"form-control\" id=\"usernameInput\" name=\"username\" aria-describedby=\"usernameInput\" placeholder=\"Enter username\">\n      <small id=\"usernameRequired\" class=\"text-danger\">\n        Username is required.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" (ngModelChange)=\"verifyPasswordMatch()\" required class=\"form-control\"\n             id=\"password\" name=\"password\" placeholder=\"Password\">\n      <small id=\"passwordHelp\" class=\"text-danger\">\n        Password is required.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <input [(ngModel)]=\"password2\" required name=\"password2\"\n             type=\"password\"\n             placeholder=\"verify password\"\n             (ngModelChange)=\"verifyPasswordMatch()\"\n             class=\"form-control mb-2\"/>\n      <small id=\"passwordMatch\" class=\"text-danger\" [hidden]=\"!this.passwordNotMatch\">\n        Passwords do not match.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"firstName\" type=\"text\" required class=\"form-control\" id=\"firstName\" name=\"firstName\" placeHolder=\"First Name\">\n      <small id=\"firstNameRequired\" class=\"text-danger\">\n        First Name is required.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" [(ngModel)]=\"lastName\" required class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\">\n      <small id=\"lastNameRequired\" class=\"text-danger\">\n        Last Name is required.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" [(ngModel)]=\"email\" required class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email Address\">\n      <small id=\"emailRequired\" class=\"text-danger\">\n        Email address is required.\n      </small>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"role\">User Role</label>\n      <select [(ngModel)]=\"role\" name=\"role\" id=\"role\">\n        <option *ngFor=\"let r of roleOptions\" [ngValue]=\"r.value\">{{r.name}}</option>\n      </select>\n    </div>\n    <small id=\"usernameTaken\" class=\"text-danger\" [hidden]=\"!this.usernameTakenError\">\n      Username has already been taken. Please try a new username.\n    </small>\n    <button (click)=\"register(username, password)\" type=\"submit\" class=\"btn btn-primary\">Create New Account</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.passwordNotMatch = false;
        this.usernameTakenError = false;
        this.roleOptions = [
            { value: 'blogFollower', name: 'Blog Follower' },
            { value: 'blogWriter', name: 'Blog Writer' }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.verifyPasswordMatch = function () {
        if (this.password && this.password !== this.password2) {
            this.passwordNotMatch = true;
        }
        else {
            this.passwordNotMatch = false;
        }
        console.log(this.passwordNotMatch);
    };
    RegisterComponent.prototype.register = function (username, password) {
        var _this = this;
        var user = { username: this.username, password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email,
            role: this.role };
        this.service
            .createUser(user)
            .then(function (response) {
            if (response && response.error) {
                _this.usernameTakenError = true;
            }
            else {
                _this.usernameTakenError = false;
                _this.router.navigate(['profile']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/bloggerApi.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/bloggerApi.service.client.ts ***!
  \*******************************************************/
/*! exports provided: BloggerApiServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerApiServiceClient", function() { return BloggerApiServiceClient; });
var BloggerApiServiceClient = /** @class */ (function () {
    function BloggerApiServiceClient() {
        this.FIND_BY_TAG = 'https://api.tumblr.com/v2/tagged?tag=KEYWORD&limit=LIMIT&api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';
        this.FIND_BLOG_INFO = 'https://api.tumblr.com/v2/blog/KEYWORD/info?api_key=fe1SEpCDiutEE7EDxpcnSo3RhfLoUjUNq0d7mk2xbnW2q1uesn';
    }
    BloggerApiServiceClient.prototype.findPostsBySearchCriteria = function (keyword, limit) {
        var url = this.FIND_BY_TAG.replace('KEYWORD', keyword).replace('LIMIT', limit);
        return fetch(url)
            .then(function (response) { return response.json(); });
    };
    BloggerApiServiceClient.prototype.findBlogInfo = function (id) {
        var url = this.FIND_BLOG_INFO.replace('KEYWORD', id);
        return fetch(url)
            .then(function (response) { return response.json(); });
    };
    return BloggerApiServiceClient;
}());



/***/ }),

/***/ "./src/app/services/post.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/post.service.client.ts ***!
  \*************************************************/
/*! exports provided: PostServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceClient", function() { return PostServiceClient; });
var PostServiceClient = /** @class */ (function () {
    function PostServiceClient() {
    }
    PostServiceClient.prototype.createPost = function (post) {
        return fetch('http://localhost:3000/api/post', {
            method: 'post',
            body: JSON.stringify(post),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    PostServiceClient.prototype.deletePost = function (post) {
        return fetch('http://localhost:3000/api/post', {
            method: 'delete',
            body: JSON.stringify(post),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    PostServiceClient.prototype.findPostById = function (postId) {
        return fetch('http://localhost:3000/api/post/' + postId)
            .then(function (response) { return response.json(); });
    };
    return PostServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('http://localhost:3000/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response != null) {
                return response.json();
            }
            else {
                return;
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('http://localhost:3000/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (user) {
        return fetch('http://localhost:3000/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response != null) {
                return response.json();
            }
            else {
                return;
            }
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch('http://localhost:3000/api/profile', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.deleteUser = function (username) {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lkaco\Documents\Web_Dev\webdev-cs5610-project-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map