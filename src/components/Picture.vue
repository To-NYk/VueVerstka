<template>
    <!-- <div class="pictures">
        <div class="container">
            <div class="row" v-for="pictures in pictures" :key="pictures.id">
                <h2 class="h2">Картины эпохи Возрождения</h2>
            </div>
            <div class="col">
                <div class="pictures">
                    <img :src="pictures.image" alt="pictures" class="pictures__img"> -->
                    <!-- <img :src="require(`../assets/img/${pictures.image}.png`)" :alt="pictures" class="pictures__img"> -->
                    <!-- <h2 class="pictures__h2">{{ pictures.title }}</h2>
                    <p class="pictures__price">{{ pictures.price }}</p>
                    <p class="pictures__disc"></p>
                    <button class="btn">Купить</button>
                </div>
            </div>
        </div>
    </div> -->
    <!-- d-inline-flex flex-row justify-content-center -->
    
    <div class="container-fluid justify-content-centercontent">
        <h2>Картины эпохи Возрождения</h2>
        <!-- <div v-for="(picture, index) in list" v-bind:key="picture.id" class="flex-row d-inline-flex"> -->
        <div v-for="picture in list" v-bind:key="picture.title" class="flex-row d-inline-flex">
            <div class="card" >
                <div class="img">
                    <img :src="picture.imageSrc" alt="" />
                    <h6 class="pictures__title">{{ picture.title }}</h6>
                    <div class="price">
                        <p class="pictures__price sell">{{ picture.price }}</p>
                        <p class="pictures__price discount">{{ picture.discount }}</p>
                    </div>

                    <button 
                        @click="buying" 
                        class="btn btn-outline-secondary" 
                        :disabled="!picture.price"
                        >
                        <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                        <span v-if="loading" class="px-1">Купить</span>
                        <span v-else>Купить</span> 

                    </button>
                        <!-- <button class="btn btn-outline-secondary" :disabled="!picture.price">
                        <span>Купить</span> 

                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../global.scss";


export default {
    name: 'Picture',
    props: ["picture"],
 
    data() {
        return {
            loading:false,
            search: "",
            //
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
            ]
        }
    },
    methods: {
        buying(){
            this.loading=!false
            setTimeout(() =>{
                this.loading=!true
            }, 2000)

    },
    addToCart() {
        this.list.push({
            id: this.id,
            title: this.tit
        })
        localStorage.setItem('holds', JSON.stringify(this.holst))
        }
    },

    computed: {
    filteredPictures() {
      return this.picture.filter((picture) => { 
        picture.title.toLowerCase().includes(this.search.toLowerCase())
      });
    },
  },
}


</script>

<style>

</style>