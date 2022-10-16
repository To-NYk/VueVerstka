<template>
    <!-- <div class="container-fluid header"> -->
        <nav class="navbar navbar-expand-lg navbar-lightbg-light">
            
            <div class="container-fluid justify-content-center header">
                <div class="collapse collapse-fontsize menu-nav navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <!-- Убрал me-auto -->
                    <li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
                    <router-link class="nav-link active" aria-current="page" :to="menu.path">
                        {{ menu.name }}
                    </router-link>
                    </li>
                </ul>
                <form>
                    <div class="input-group">
                    <input
                    type="text"
                     class="form-control clear shadow-none"
                     placeholder="Поиск по названию картины"
                     >
                     
                    <div class="input-group-append ">
                        <button @click="" class="btn btn-outline-secondary">Поиск</button>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </nav>
    <!-- </div> -->
</template>

<script>
import "../global.scss";
import Picture from './Picture.vue';


export default {
   
    name: 'Header',
    components: {
        Picture
    },
    data() {
        return {
            search: "",
            list: [
            {
                id: 1,
                imageSrc: "https://imageup.ru/img34/4044250/painting-63186_1280-1.png",
                title: '«Рождение Венеры» Сандро Боттичелли',
                price: '2 000 000 $',
                discount: '1 000 000 $'
            },
            {
                id: 2,
                imageSrc: 'https://imageup.ru/img22/4044251/ae973f6678e037cd297053384aa7dca0-1.png',
                title: '«Тайная вечеря»  Леонардо да Винчи',
                price: '3 000 000 $',
            },
            {
                id: 3,
                imageSrc: 'https://imageup.ru/img190/4044252/image-19-1.png',
                title: '«Сотворение Адама» Микеланджело',
                price: '6 000 000 $',
                discount: '5 000 000 $'
            },
            {
                id: 4,
                imageSrc: 'https://imageup.ru/img198/4044891/rembrandt.png',
                title: '«Урок анатомии»  Рембрандт',
                price: '',
                discount: '',
                note: 'Продана на акуционе'
            },
            ],
            headerMenuList: [
                {name: 'Каталог', path: '/'},
                {name: 'Доставка', path: '/'},
                {name: 'Оплата', path: '/'},
                {name: 'Контакты', path: '/'},
                {name: 'О Компании', path: '/'}
            ]
        }
    },
  methods: {

  },
  computed: {
    filteredPictures() {
      return this.pictures.filter((picture) => { 
        picture.title.toLowerCase().includes(this.search.toLowerCase())
      });
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
// * {
//   font-family: 'Merriweather', serif;
// }

</style>