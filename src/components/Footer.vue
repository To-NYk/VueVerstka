<template>
     <!-- <div class="container-fluid ">
        <nav class="footbar navbar-expand-lg navbar-lightbg-light">
            <div class="container-fluid justify-content-center footer">
                <div class="collapse collapse-fontsize-bottom menu-nav navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item menu-link" v-for="(menu, index) in footerMenuList" :key="index">
                    <router-link class="nav-link active" aria-current="page" :to="menu.path">
                        {{ menu.name }}
                    </router-link>
                    </li>
                    <li class="icon">
                         <span>
                            <img src="../assets/img/phone-solid.svg" alt="" />
                             +7(812)555-55-55
                        </span>
                        </li>
                    <li class="icon">
                         <span>
                            <img src="../assets/img/location-dot-solid.svg" alt="" />
                            г. Санкт-Петербург. ул.Ефимова, 3
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div> -->
    <footer class="bg-light text-center text-lg-start footer">
    <!-- Copyright -->
    <!-- <div class="text-center p-3 footer"> -->
        <ul class="nav justify-content-center pb-3 footer">
            <li class="nav-item menu-link" v-for="(menu, index) in footerMenuList" :key="index">
                    <router-link class="nav-link active" aria-current="page" :to="menu.path">
                        {{ menu.name }}
                    </router-link>
                    </li>
                    <li class="icon">
                         <span>
                            <img src="../assets/img/phone-solid.svg" alt="" />
                             +7(812)555-55-55
                        </span>
                        </li>
                    <li class="icon">
                         <span>
                            <img src="../assets/img/location-dot-solid.svg" alt="" />
                            г. Санкт-Петербург. ул.Ефимова, 3
                        </span>
                    </li>
        </ul>
        <!-- <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> -->
    <!-- </div> -->
    <!-- Copyright -->
    </footer>
</template>

<script>
import "../global.scss";


export default {
    name: 'Footer',
    data() {
        return {
            footerMenuList: [
                {name: 'Каталог', path: '/'},
                {name: 'Доставка', path: '/'},
                {name: 'Оплата', path: '/'},
                {name: 'Контакты', path: '/'},
                {name: 'О Компании', path: '/'}
            ]
        }
    },
}
</script>

<style  lang="scss">

.footer__socials {
    list-style: none;
    display: flex;
    padding: 6px;
    margin-left: 500px;
}

.icon img {
    height: 14px;
    margin-left: 50px;
    margin-right: 10px;
}

.footbar {
    height: 96px;;
}

.nav-item {
    display: flex;
}
</style>
