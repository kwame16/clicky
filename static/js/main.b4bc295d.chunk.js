(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(2),r=a.n(i),o=(a(15),a(7)),l=a(3),m=a(4),s=a(8),d=a(5),g=a(9),h=function(e){return n.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},u=function(e){return n.a.createElement("div",{className:e.helper?"row ".concat(e.helper):"row"},e.children)},k=function(e){var t=e.base,a=void 0===t?12:t,c=e.md,i=e.lg,r=e.xl,o=e.children,l="col-".concat(a);return c&&(l=l.concat(" col-md-".concat(c))),i&&(l=l.concat(" col-lg-".concat(i))),r&&(l=l.concat(" col-xl-".concat(r))),n.a.createElement("div",{className:l},o)},f=function(e){return n.a.createElement("div",{className:"card mt-2 ".concat(e.dark?"bg-dark":"bg-light")},e.header&&n.a.createElement("div",{className:"card-header ".concat(e.dark?"text-light":"text-dark")},e.header),n.a.createElement("div",{className:"card-body"},e.children))},p=function(e){return n.a.createElement("div",{className:e.dark?"jumbotron bg-dark text-light text-center":"jumbotron bg-light text-dark text-center"},n.a.createElement("span",{className:"m-3",style:{fontSize:20*e.score||30}},"Score: ",e.score),n.a.createElement("span",{className:"m-3",style:{fontSize:20*e.highScore||30}},"High Score: ",e.highScore))},v=function(e){var t=e.id,a=e.name,c=e.image,i=e.handleClickOnImage;return n.a.createElement("img",{src:c,alt:a,className:"img-fluid w-100",onClick:function(){return i(t)}})},E=a(6),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={choices:E,clicked:[],highScore:0},a.randomize=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e},a.resetGame=function(){var e=a.randomize(a.state.choices);a.setState({clicked:[],choices:e})},a.handleClickOnImage=function(e){a.state.clicked.includes(e)?a.resetGame():a.setState((function(t){return{clicked:[].concat(Object(o.a)(t.clicked),[e]),choices:a.randomize(a.state.choices)}}),(function(){a.checkHighScore(),a.handleWin()}))},a.checkHighScore=function(){a.state.clicked.length>a.state.highScore&&a.setState({highScore:a.state.clicked.length})},a.handleWin=function(){a.state.clicked.length===a.state.choices.length&&(alert("You won!"),a.resetGame())},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({choices:this.randomize(this.state.choices)})}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state,a=t.clicked,c=t.choices,i=t.highScore;return n.a.createElement(h,null,n.a.createElement(p,{score:a.length,highScore:i,dark:!0}),n.a.createElement(u,{helper:"justify-content-center"},c.map((function(t){var a=t.id,c=t.name,i=t.image;return n.a.createElement(k,{key:a,md:2},n.a.createElement(f,{header:c,dark:!0},n.a.createElement(v,{id:a,name:c,image:i,handleClickOnImage:e.handleClickOnImage})))}))))}}]),t}(c.Component);r.a.render(n.a.createElement(S,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"Arnold","image":"./images/Arnold.jpg"},{"id":2,"name":"Dag and Norbert\'s","image":"./images/angrybeavers.jpg"},{"id":3,"name":"Dexter","image":"./images/dexter.jpg"},{"id":4,"name":"Ed, Edd & Eddy","image":"./images/ed-edd-eddy.jpg"},{"id":5,"name":"Gerald","image":"./images/gerald.jpg"},{"id":6,"name":"Twister","image":"./images/twister.jpg"},{"id":7,"name":"Otto","image":"./images/otto.jpg"},{"id":8,"name":"Skeeter","image":"./images/skeeter.jpg"},{"id":9,"name":"Suga-Mama","image":"./images/suga-mama.jpg"},{"id":10,"name":"Tommy Pickles","image":"./images/tommy-pickles.jpg"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.b4bc295d.chunk.js.map