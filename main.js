Vue.component('menu_kebabs', {
    data(){ 
        return {
            menu_ass: [
                {
                    img: "kebab1.png",
                    name: "Шаверма на тарелке",
                    price: "300 руб.",
                },
                {
                    img: "kebab2.png",
                    name: "Шаверма в лаваше сырная",
                    price: "250 руб.",
                },
                {
                    img: "kebab3.png",
                    name: "Шаверма в лаваше класс.",
                    price: "240 руб.",
                },
                {
                    img: "kebab4.png",
                    name: "Шаверма в пите",
                    price: "200 руб.",
                },
            ]
        }
    },
    template: '<div class="kebabs"><div class="kebab" v-for="assort in menu_ass"><img :src="`img/`+`${assort.img}`" alt="`${assort.name}`"><span>{{assort.name}}</span> <br><span>{{assort.price}}</span></div></div>'
})
Vue.component('menu_burgers', {
    data(){
        return {
            menu_ass: [
                {
                    img: "burger1.png",
                    name: "Бургер с сыром",
                    price: "200 руб.",
                },
                {
                    img: "burger2.png",
                    name: "Бургер с курицей",
                    price: "230 руб.",
                },
                {
                    img: "burger3.png",
                    name: "Бургер с говядина",
                    price: "350 руб.",
                },
                {
                    img: "burger4.png",
                    name: "Бургер с беконом",
                    price: "350 руб.",
                },
            ]
        }
    },
    template: '<div class="burgers"><div class="burger" v-for="assort in menu_ass"><img :src="`img/`+`${assort.img}`" alt="`${assort.name}`"><span>{{assort.name}}</span> <br><span>{{assort.price}}</span></div></div>'
})
Vue.component('menu_dops', {
    data(){
        return {
            menu_ass: [
                {
                    img: "dop1.png",
                    name: "Картофель фри",
                    price: "100 руб.",
                },
                {
                    img: "dop2.png",
                    name: "Наггетсы (6 шт.)",
                    price: "120 руб.",
                },
                {
                    img: "dop3.png",
                    name: "Луковые кольца",
                    price: "150 руб.",
                },
            ]
        }
    },
    template: '<div class="dops"><div class="dop" v-for="assort in menu_ass"><img :src="`img/`+`${assort.img}`" alt="`${assort.name}`"><span>{{assort.name}}</span> <br><span>{{assort.price}}</span></div></div>'
})
Vue.component('container_hover', {
    data(){
        return {
            menu_ass: [
                {
                    img: "kebab1.png",
                    name: "Шаверма на тарелке",
                    price: "300 руб.",
                    comp1: "Куриное мясо",
                    comp2: "Сыр Моцарелла",
                    comp3: "Жареный картофель",
                    comp4: "Морковь по-корейски",
                    comp5: "Лук красный",
                    comp6: "Фирменный соус",
                },
                {
                    img: "kebab2.png",
                    name: "Шаверма в лаваше сырная",
                    price: "250 руб.",
                    comp1: "Куриное мясо",
                    comp2: "Плавленный Чеддер",
                    comp3: "Свежий огурец",
                    comp4: "Морковь по-корейски",
                    comp5: "Фирменный соус",
                    comp6: "Ловаш сырный",
                },
                {
                    img: "kebab3.png",
                    name: "Шаверма в лаваше класс.",
                    price: "240 руб.",
                    comp1: "Куриное мясо",
                    comp2: "Свежий огурец",
                    comp3: "Помидор",
                    comp4: "Сыр Моцарелла",
                    comp5: "Морковь по-корейски",
                    comp6: "Фирменный соус",
                },
                {
                    img: "kebab4.png",
                    name: "Шаверма в пите",
                    price: "200 руб.",
                    comp1: "Куриное мясо",
                    comp2: "Свежий огурец",
                    comp3: "Помидор",
                    comp4: "Салат",
                    comp5: "Лук красный",
                    comp6: "Фирменный соус",
                },
            ],
        }
    },
    template: '<div class="containers_hover"><div class="container_hover" v-for="assort in menu_ass"><div class="container_hover_photo" ><img :src="`img/`+`${assort.img}`" alt="`${assort.name}`"></div><div class="container_hover_name"><ul><li class="container_hover_list_name">Название:</li><li>{{assort.name}}</li><li class="container_hover_list_name">Цена:</li><li>{{assort.price}}</li></ul></div><div class="container_hover_compound"><ul><li class="container_hover_list_name">Состав:</li><li>{{assort.comp1}}</li><li>{{assort.comp2}}</li><li>{{assort.comp3}}</li><li>{{assort.comp4}}</li><li>{{assort.comp5}}</li><li>{{assort.comp6}}</li></ul></div></div></div>'
})
Vue.component('container_hover2', {
    data(){
        return {
            menu_ass: [
                {
                    img: "burger1.png",
                    name: "Бургер с сыром",
                    price: "200 руб.",
                    comp1: "Котлета свинная",
                    comp2: "Плавленный Чеддер",
                    comp3: "Маринованный огурец",
                    comp4: "Фирменный соус",
                },
                {
                    img: "burger2.png",
                    name: "Бургер с курицей",
                    price: "230 руб.",
                    comp1: "Котлета куриная",
                    comp2: "Маринованный огурец",
                    comp3: "Салат",
                    comp4: "Фирменный соус",
                },
                {
                    img: "burger3.png",
                    name: "Бургер с говядиной",
                    price: "350 руб.",
                    comp1: "Котлета говяжья",
                    comp2: "Плавленный Чеддер",
                    comp3: "Помидор",
                    comp4: "Лук красный",
                    comp5: "Фирменный соус",
                },
                {
                    img: "burger4.png",
                    name: "Бургер с беконом",
                    price: "350 руб.",
                    comp1: "Свинина",
                    comp2: "Бекон",
                    comp3: "Плавленный Чеддер",
                    comp4: "Салат",
                    comp5: "Фирменный соус",
                },
            ],
        }
    },
    template: '<div class="containers_hover"><div class="container_hover" v-for="assort in menu_ass"><div class="container_hover_photo" ><img :src="`img/`+`${assort.img}`" alt="`${assort.name}`"></div><div class="container_hover_name"><ul><li class="container_hover_list_name">Название:</li><li>{{assort.name}}</li><li class="container_hover_list_name">Цена:</li><li>{{assort.price}}</li></ul></div><div class="container_hover_compound"><ul><li class="container_hover_list_name">Состав:</li><li>{{assort.comp1}}</li><li>{{assort.comp2}}</li><li>{{assort.comp3}}</li><li>{{assort.comp4}}</li><li>{{assort.comp5}}</li></ul></div></div></div>'
})

var menu = new Vue({
    el: '.menu1',
    data: {
        layout: 'grid',
        articles: [{
            
        }]
    }
})

var menu = new Vue({
    el: '.menu2',
    data: {
        layout: 'grid',
        articles: [{
            
        }]
    }
})
var menu = new Vue({
    el: '.menu3',
    data: {
        layout: 'grid',
        articles: [{
            
        }]
    }
})


let block1 = document.getElementById('promo_block1'),
    block2 = document.getElementById('promo_block2'),    
    block3 = document.getElementById('promo_block3');

    
    block1.addEventListener("mouseover", meow);
    block1.addEventListener("mouseleave", not_meow);
    block2.addEventListener("mouseover", meow);
    block2.addEventListener("mouseleave", not_meow);
    block3.addEventListener("mouseover", meow);
    block3.addEventListener("mouseleave", not_meow);
    

function meow() {
    this.classList.remove('not_transition');
    this.classList.add('transition');
}
function not_meow() {
    this.classList.remove('transition');
    this.classList.add('not_transition');
}
