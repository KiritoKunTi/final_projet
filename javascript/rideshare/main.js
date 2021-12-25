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
                {item: 'moon', link: 'moon.html'},
                {item: 'mars', link: 'mars.html'}
            ]
        }
    },
})

new Vue({
    el: '#main',
    data: {
        mass: "",
        price: 0+"$"
    },
    methods: {
        calculate: function(){
            this.price = this.mass * 3000;
            this.price += "$";
        }
    }
});

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