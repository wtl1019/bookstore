<template>
  <div v-if="page_data">
    <div class="section">
            	<slider :sliders= "page_data.top"></slider>
                <div class="announcement">
                    <label>快讯</label>
	                <span>{{ page_data.announcement.text }}</span>
	            </div>
        </div>
        <div class="section">
        	<!--新书上架-->
        	<book-list :books="page_data.promotions" header="新书上架" @onSelectBook = "preview($event)"></book-list>
        </div>
        <div class="section">
        	<!--编辑推荐-->
        	<book-list :books="page_data.recommended" header="编辑推荐" @onSelectBook = "preview($event)"></book-list>
        </div>

        <modal-dialog ref="dialog">
        	<div slot="header"></div>
        	<div v-if="selected">
        		<h2>{{ selected.title }}</h2>
        	</div>
        </modal-dialog>
  </div>
</template>

<script>
    import Slider from "./components/slider"
    import BookList from "./components/BookList"
    import ModalDialog from "./components/dialog"

    import fetch from "./fixtures/fetch.js"

    const debug = process.env.NODE_ENV !== 'production'

    export default{
        data(){
        	return {
				page_data: undefined,
				selected: undefined
        	}
        },
        created(){
        	if(debug){
        		this.page_data = fetch.getHomeData();		
        	}
        	else{
	        	this.$http.get('/api/home')
	        	    .then((res) => {
	        	    	//for (prop in res.body ){
	        	    		//this[prop] = res.body[prop]
	        	    	//}
	        	    }, (error)=>{
	        	    	console.log('获取数据失败：${error}');
	        	    })
        	}
        },
        methods: {
        	preview(book){
        		//alert('显示图书详情：'+ book.title);
        		this.selected = book;
        		this.$refs.dialog.open();
        	}
        },
        components: {
        	Slider, 
        	BookList,
        	ModalDialog
        }
    }
</script>

<style>
	.announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }

    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;

    }

    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }
</style>
