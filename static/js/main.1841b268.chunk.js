(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(25),a(7)),s=a(18),i=a(2),m=a(3),u=a(5),g=a(4),h=a(19),p=a.n(h),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return p.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=18301790-18086bbe5ae929649d07b40f0&image_type=photo&orientation=horizontal&per_page=12"))},f=a(6),I=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){27===t.keyCode&&e.props.clearFullScreenImage()},e.componentDidMount=function(){return window.addEventListener("keydown",e.handleCloseModal)},e.componentWillUnmount=function(){return window.removeEventListener("keydown",e.handleCloseModal)},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.fullScreenImage?r.a.createElement("div",{className:"Overlay",onClick:this.props.clearFullScreenImage},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:this.props.fullScreenImage.largeImageURL,alt:""}))):null}}]),a}(n.Component),S=function(e){var t=e.search,a=e.handleInput,n=e.getImages;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:n},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",name:"search",value:t,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})))};v.propTypes={search:I.a.string,handleInput:I.a.func,getImages:I.a.func};var b=function(e){var t=e.element,a=e.openImage;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t.previewURL,alt:t.tags,className:"ImageGalleryItem-image",onClick:function(){return a(t.id)}}))},E=function(e){var t=e.imgExist,a=e.loadMore;return t?r.a.createElement("button",{onClick:a},"Load more"):null},y=function(e){var t=e.images,a=e.openImage,n=e.loadMore;return r.a.createElement("div",null,r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(b,{key:e.id,element:e,openImage:a})}))),r.a.createElement(E,{imgExist:!!t.length,loadMore:n}))},k=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInput=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.getImages=function(t){t.preventDefault(),e.state.search?d(e.state.search).then((function(t){var a=t.data;e.setState((function(e){e.images;return{images:Object(o.a)(a.hits),page:1}}))})):e.setState({images:[],page:0})},e.loadMore=function(t){t.preventDefault(),d(e.state.search,e.state.page+1).then((function(t){var a=t.data;e.setState((function(e){var t=e.images,n=e.page;return{images:[].concat(Object(o.a)(t),Object(o.a)(a.hits)),page:++n}}))}))},e.openImage=function(t){e.setState((function(e){return{fullScreenImage:e.images.find((function(e){return e.id===t}))}}))},e.clearFullScreenImage=function(t){console.log(t),e.setState({fullScreenImage:null})},e.state={images:[],search:"",page:0,fullScreenImage:null},e}return Object(m.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){var a=t.images,n=this.state.images;return a.length<n.length?n.length-a.length:0}},{key:"componentDidUpdate",value:function(e,t,a){a&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,{search:this.state.search,handleInput:this.handleInput,getImages:this.getImages}),r.a.createElement(y,{images:this.state.images,openImage:this.openImage,loadMore:this.loadMore}),r.a.createElement(v,{fullScreenImage:this.state.fullScreenImage,clearFullScreenImage:this.clearFullScreenImage}))}}]),a}(n.Component);k.defaultProps={images:[],search:"",page:0,fullScreenImage:null},c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1841b268.chunk.js.map