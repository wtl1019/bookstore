<template>
            	<!-- Slider main container -->
				<div class="swiper-container" ref="slider">
				    <!-- Additional required wrapper -->
				    <div class="swiper-wrapper">
				        <!-- Slides -->
                        <!--
				        <router-link class="swiper-slide" tag="div" :to = "{ name: 'BookDetail', params:{id: slide.id} }">
				        	<img src="../fixtures/sliders/t1.svg"/>
				        </router-link>
                        -->
                        <div class="swiper-slide" v-for="slide in sliders">
                            <img :src="slide.img_url"/>
                        </div>
				    </div>
				    <!-- If we need pagination -->
				    <div class="swiper-pagination" ref="pagination"></div>
				</div>
</template>

<script type="text/ecmascript-6">
    import Swiper from "swiper"
    import 'swiper/dist/css/swiper.css'

    export default{
        props: ['sliders'],
        mounted() {
            debugger
            new Swiper(this.$refs.slider, {
                pagination: this.$refs.pagination,
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
