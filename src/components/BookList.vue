<template>
    	<div class="book-list">
	        <div class="header">
	            <div class="heading">{{ header}}</div>
	            <div class="more">更多...</div>
	        </div>
	        <div class="book-items">
	            <div class="book" v-for="book in books" tag="div" @click = "$emit('onSelectBook', book)">
	                <div class="cover">
	                    <img :src="book.img_url"/>
	                </div>
	                <div class="title">{{ book.title }}</div>
	                <div class="authors">{{ book.authors | join }}</div>
	            </div>
	        </div>
	    </div>
</template>

<script>

    export default{
        props: [
            'header',
            'books'
        ],
        filters:{
            join(args){
                return args.join(',');
            }
        }
    }
</script>

<style>
.book-list {
  margin: 0 14px;
}
  .book-list > .header {
    display: table;
    width: 100%;
    border-bottom: 1px solid #efefef;
   }

    .header > .heading {
      display: table-cell;
      padding: 12px;
    }

    .header > .more {
      display: table-cell;
      text-align: right;
      vertical-align: middle;
      font-size: 10px;
      color: #cccccc;
      padding-right: 14px;
    }

  .book-list .book-items {
    display: table;
    width: 100%;
    padding-top: 12px;
  }

  .book-list .book {
    font-size: 10px;
    text-align: center;
    float: left;
    width: 33%;
    margin: 12px auto;
   }

    .book .cover {
    }

    .book .title, .book .authors {
      margin: 5px auto;
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .book .authors {
      color: #898989;
      margin-top: 10px;
      text-align: left;
    }
</style>
