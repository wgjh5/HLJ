<template>
	<section class="ItemProduct-components">
		<h4>
			<!-- react-text: 457 -->项目产品（
			<!-- /react-text -->
			<!-- react-text: 458 -->1
			<!-- /react-text -->
			<!-- react-text: 459 -->）
			<!-- /react-text -->
		</h4>
		<div>
			<ul class="list-product">
				<li>
					<div class="pic">
						<div class="product-img">
							<div class="ui-image-component status-show"><img class="image" src="https://img-ucdn-static.helijia.com/zmw/upload/itemmaterial/20180404/f79e63bfbe964ad3811da4eb30914986.png!/0/w-150/format-webp"><img
								 class="draft" src="https://img-ucdn-static.helijia.com/zmw/upload/itemmaterial/20180404/f79e63bfbe964ad3811da4eb30914986.png!/0/w-100/quality-10/format-webp"></div>
						</div>
					</div>
					<div class="intro">
						<h4>VERET鲜活维C焕亮精华套</h4>
						<div class="desc">
							<!-- react-text: 471 -->成分：
							<!-- /react-text -->
							<!-- react-text: 472 -->VERET产品
							<!-- /react-text -->
						</div>
						<div>
							<!-- react-text: 474 -->品牌：
							<!-- /react-text -->
							<!-- react-text: 475 -->VERET
							<!-- /react-text -->
						</div>
						<div>
							<!-- react-text: 477 -->产地：
							<!-- /react-text -->
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
/* @import url("../../assets/base.css"); */
.ItemProduct-components {
  background: #fff;
  padding: 0.75rem 0;
}

.ItemProduct-components > h4 {
  padding-left: 0.75rem;
}

.ItemProduct-components > div {
  overflow: auto;
  padding-left: 0.75rem;
}

.ItemProduct-components .list-product {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.ItemProduct-components .list-product li {
  -webkit-box-flex: 1;
  -webkit-flex: 1 auto;
     -moz-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  overflow: hidden;
  min-width: 12rem;
  padding-right: 0.4rem;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.ItemProduct-components .list-product li .pic {
  float: left;
  width: 40%;
  max-width: 4.7rem;
  padding-right: 0.25rem;
}

.ItemProduct-components .list-product li .pic .product-img img {
  height: 4.7rem;
}

.ItemProduct-components .list-product li .intro {
  float: left;
  width: 60%;
}

.ItemProduct-components .list-product li .intro h4 {
  padding: 0;
  margin: 0;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.6rem;
  font-weight: normal;
  color: #1a1a1a;
}

.ItemProduct-components .list-product li .intro div {
  margin-top: 0.25rem;
  color: #666;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.55rem;
}

.ItemProduct-components .list-product li .intro div.desc {
  white-space: normal;
  max-height: 1.5rem;
  line-height: 0.8rem;
}

.show-pro-detail .top-bar {
  height: 2.5rem;
  width: 100%;
  text-align: center;
  position: absolute;
  background: #000;
  color: #fff;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.9rem;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.show-pro-detail .top-bar .close {
  position: absolute;
  left: 0.5rem;
  top: 0.55rem;
  padding: 0.1rem 0.2rem;
}

</style>
