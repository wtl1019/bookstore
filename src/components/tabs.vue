<template>
  <div class="tabs">
        <ul>
            <router-link :to="{ name : 'Home'}" tag="li" exact>
                <div>
                    <img src="../assets/images/home.svg">
                </div>
                <div>首页</div>
            </router-link>
            <router-link :to="{ name: 'Catagry' }" tag="li">
                <div>
                    <img src="../assets/images/category.svg">
                </div>
                <div>分类</div>
            </router-link>
            <router-link :to="{ name: 'Cart' }" tag="li">
                <div><img src="../assets/images/cart.svg"></div>
                <div>购物车</div>
            </router-link>
            <router-link :to="{ name: 'Me'}" tag="li">
                <div><img src="../assets/images/me.svg"></div>
                <div>我</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
}

  .tabs > ul, .tabs > ul > li {
    margin: 0;
    padding: 0;
  }

  ul {
    display: table;
    width: 100%;
  }
  ul > li {
      text-align: center;
      font-size: 10px;
      display: table-cell;
      padding: 8px 12px;
    }
    ul > li.active {
        color: #D0021B;
      }
</style>
