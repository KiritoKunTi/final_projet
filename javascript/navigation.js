Vue.component('navigation', {
    template: `
        <div>
        <div class="container">
            <div class="header">
                <div class="wrapper">
                    <div>
                        <a href="index.html"><img class="logo" src="./image/navigation/SpaceX-Logo.svg"></img>
                    </div>
                    <div class="items">
                        <a v-for="nav in navs" v-bind:href="nav.link" class="item-text capital hover">{{ nav.item }}</a>
                    </div>
                    <div class="sign-up">
                        <a href="sign_in.html" class="button_sign-up capital hover">sign up</a>
                    </div>
                </div>
                <header>
                <div class="menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </header>

                <div class="menu">
                    <nav>
                        <li><a v-for="nav in navs" v-bind:href="nav.link" class="item-text capital">{{ nav.item }}</a></li>
                        <li><a href="sign_in.html" class="item-text capital">sign up</a></li>
                    </nav>
                </div>
            </div>
            
        </div>         
        </div>`
    ,
    data() {
        return {
            navs: [
                {item: 'falcon 9', link: 'falcon9.html'},
                {item: 'falcan heavy', link: 'falconheavy.html'},
                {item: 'dragon', link: 'dragon.html'},
                {item: 'starship', link: 'starship.html'},
                {item: 'rideshare', link: 'rideshare.html'},
                {item: 'moon', link: 'moon.html'},
                {item: 'mars', link: 'mars.html'},
                {item: 'find your future', link: 'fyf.html'}
            ]
        }
    },
})

new Vue({
    el: '#demo'
})

const nav = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else{
        nav.classList.remove('hide');
    }
    if(currentScrollPos > window.innerHeight) {
        nav.classList.add('back-color');
    } else {
        nav.classList.remove('back-color');
    }

    prevScrollpos = currentScrollPos;
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})