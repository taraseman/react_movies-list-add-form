(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),l=a.n(r),m=(a(15),a(9)),s=a(1),o=a(2),c=a(4),d=a(3),h=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var u=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};u.defaultProps={movies:[]};var p=a(7),g=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",imgUrl:"",imdbUrl:"",imdbId:"",description:"",showErrorUrl:!1},e.ChangeUniversalHandler=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(p.a)({},i,n))},e.testUrl=function(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(e)},e.handlerSubmit=function(t){t.preventDefault();var a=e.props.addMovie,i=e.state,n=i.title,r=i.imgUrl,l=i.imdbUrl,m=i.imdbId,s=i.description,o=e.testUrl(r),c=e.testUrl(l);o&&c?(a({title:n,description:s,imgUrl:r,imdbUrl:l,imdbId:m}),e.resetForm()):e.setState({showErrorUrl:!0})},e.resetForm=function(){e.setState({title:"",imgUrl:"",imdbUrl:"",imdbId:"",description:"",showErrorUrl:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.imgUrl,i=e.newImdbUrl,r=e.imdbId,l=e.description,m=e.showErrorUrl;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"form__title"},"Add new film"),m&&n.a.createElement("div",{className:"form__error"},n.a.createElement("h1",null,"Invalid URL!"),n.a.createElement("p",null,"Please write another One.")),n.a.createElement("form",{className:"form",onSubmit:this.handlerSubmit},n.a.createElement("label",null,"Title:",n.a.createElement("input",{name:"title",required:!0,placeholder:"Title",value:t,onChange:this.ChangeUniversalHandler})),n.a.createElement("label",null,"imgUrl:",n.a.createElement("input",{name:"imgUrl",placeholder:"imgUrl",value:a,onChange:this.ChangeUniversalHandler})),n.a.createElement("label",null,"imdbUrl:",n.a.createElement("input",{name:"imdbUrl",placeholder:"imdbUrl",value:i,onChange:this.ChangeUniversalHandler})),n.a.createElement("label",null,"imdbId:",n.a.createElement("input",{name:"imdbId",required:!0,placeholder:"imdbId",value:r,onChange:this.ChangeUniversalHandler})),n.a.createElement("textarea",{name:"description",placeholder:"Description",className:"form__text-area",value:l,onChange:this.ChangeUniversalHandler}),n.a.createElement("button",{type:"submit",className:"form__button"},"ADD")))}}]),a}(i.Component)),v=a(8),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(u,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(g,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.6bb00160.chunk.js.map