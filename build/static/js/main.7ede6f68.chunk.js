(this["webpackJsonpnetflix-datastax-clone"]=this["webpackJsonpnetflix-datastax-clone"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),i=n(3),o=n.n(i),j=n(4),l=n(2),u=(n(12),n(0)),b=function(e){var t=e.movie,n=Object(c.useState)(!1),s=Object(l.a)(n,2),a=s[0],r=s[1];return Object(u.jsxs)("div",{className:"card",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[!a&&Object(u.jsx)("video",{className:"video",controls:!0,children:Object(u.jsx)("source",{src:t.thumbnail,type:"video/mp4"})}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("video",{className:"video",controls:!0,autoPlay:!0,loop:!0,children:Object(u.jsx)("source",{src:t.thumbnail,type:"video/mp4"})}),Object(u.jsx)("div",{className:"info-box",children:Object(u.jsx)("p",{children:t.title})})]})]})},d=function(e){var t=e.genre,n=Object(c.useState)(null),s=Object(l.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(null),d=Object(l.a)(i,2),O=d[0],f=d[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getMovies",{method:"POST",body:JSON.stringify({genre:t,pageState:O})});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c.data.movies_by_genre.values),f(c.data.movies_by_genre.pageState);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{id:t,children:t}),a&&Object(u.jsxs)("div",{className:"movie-section",children:[a.map((function(e,t){return Object(u.jsx)(b,{movie:e},t)})),Object(u.jsx)("div",{className:"more-button",onClick:function(){f(O),h()},children:Object(u.jsx)("i",{className:"fas fa-angle-right"})})]})]})},O=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getMovies",{method:"POST",body:JSON.stringify({genre:"Sci-Fi",pageState:null})});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.data.movies_by_genre.values,s(c[Math.floor(Math.random()*c.length)]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(u.jsx)(u.Fragment,{children:n&&Object(u.jsxs)("div",{className:"hero",children:[Object(u.jsx)("video",{className:"hero-video",muted:!0,controls:!0,autoPlay:!0,loop:!0,children:Object(u.jsx)("source",{src:n.thumbnail,type:"video/mp4"})}),Object(u.jsxs)("div",{className:"info-section",children:[Object(u.jsx)("h3",{className:"hero-blurb",children:n.synopsis}),Object(u.jsxs)("div",{className:"button-section",children:[Object(u.jsxs)("div",{className:"button play",children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-play"})}),"Play"]}),Object(u.jsxs)("div",{className:"button more",children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-info-circle"})}),"More info"]})]})]})]})})},f=function(){return Object(u.jsx)("div",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("div",{className:"logo"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Home"})})]})})},h=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(4),r=Object(l.a)(a,2),i=r[0],b=r[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getGenres",{method:"POST",body:i});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.data.reference_list.values);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(i),Object(c.useEffect)((function(){h()}),[i]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(O,{}),n&&Object(u.jsx)("div",{className:"container",children:Object.values(n).map((function(e){return Object(u.jsx)(d,{genre:e.value},e.value)}))}),Object(u.jsx)("div",{className:"page-end",onMouseEnter:function(){b(i+4)}})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7ede6f68.chunk.js.map