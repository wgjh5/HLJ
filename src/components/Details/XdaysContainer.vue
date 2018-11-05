<template>
	<section class="recent-days-container">
		<div>
			<div class="header"><label class="head-tit">可约时间</label>
				<div class="date-model unable">不可约</div>
				<div class="date-model able">可约</div><button class="view-more"><span>查看30天</span><span class="SVGInline"><svg class="SVGInline-svg"
						 style="width: 1em;height: 1em;" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
							 fill="#999" fill-rule="evenodd"></path>
						</svg></span></button>
			</div>
			<div class="ruler-cont">
				<div class="tit"><label class="label">时段</label>
					<div class="ruler">
						<div class="ruler-number"><span><i>08</i></span><span><i>10</i></span><span><i>12</i></span><span><i>14</i></span><span><i>16</i></span><span><i>18</i></span><span><i>20</i></span><span><i>22</i></span><span><i>24</i></span></div>
						<div class="ruler-line"></div>
					</div>
				</div>
			</div>
			<div class="days-wrapper">
				<div class="day"><label class="label">今天</label>
					<div class="hours">
						<div class="hour">
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour3"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
						</div>
					</div>
				</div>
				<div class="day"><label class="label">明天</label>
					<div class="hours">
						<div class="hour">
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour2"></div>
							<div class="hour2"></div>
							<div class="hour2"></div>
							<div class="hour2"></div>
							<div class="hour2"></div>
							<div class="hour2"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
						</div>
					</div>
				</div>
				<div class="day"><label class="label">后天</label>
					<div class="hours">
						<div class="hour">
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour1"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
							<div class="hour0"></div>
						</div>
					</div>
				</div>
			</div>
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
.product-detail-container .recent-days-container {
    border-top: 1px solid #f7f7f7;
}
.product-detail-container > section {
    border-bottom: 0.5rem solid #f7f7f7;
}
.recent-days-container {
    height: 100%;
    font-size: 0.75rem;
    padding-top: 0.5rem;
    overflow: hidden;
    color: #666;
    position: relative;
}
.recent-days-container .header {
    padding-left: 0.75rem;
    padding-bottom: .5rem;
    width: 100%;
}
.recent-days-container .header .head-tit {
    color: #1a1a1a;
    display: inline-block;
    margin-right: 1rem;
}
.recent-days-container .header .date-model.unable:before {
    background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_5288d222b95157c5133d1407a850daba.png) 0 0 no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-color: #f0f0f0;
}
.recent-days-container .header .date-model:before {
    margin-right: 0.1rem;
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: -1px;
    background: #c6eab9;
    vertical-align: text-bottom;
}
.recent-days-container .header .date-model.able {
    margin-left: 0.5rem;
}
.recent-days-container .header .date-model {
    color: #666;
    line-height: .75rem;
    font-size: 0.6rem;
    display: inline;
    vertical-align: text-bottom;
}
.recent-days-container .header .view-more {
    font-size: 0.6rem;
    color: #666;
    float: right;
    padding-top: 1px;
    padding-right: 0.6rem;
}
.SVGInline {
    line-height: 1;
    vertical-align: middle;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    display: inline-block !important;
}
.SVGInline-svg {
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.recent-days-container .tit, .recent-days-container .day {
    position: relative;
    width: 100%;
    margin-bottom: .75rem;
}
.recent-days-container .label {
    width: 15%;
    position: absolute;
    top: 0;
    left: 0.75rem;
    font-size: 0.6rem;
}
.recent-days-container .ruler-cont .ruler {
    width: 100%;
    margin-bottom: .5rem;
    background: #fff;
    overflow: hidden;
}
.recent-days-container .ruler-cont .ruler .ruler-number {
    padding-bottom: 1.2rem;
    position: relative;
    margin-left: 15%;
    width: 100%;
}
.recent-days-container .ruler-cont .ruler .ruler-line {
    width: 100%;
    height: 1px;
    background: #dedede;
}
.recent-days-container .ruler-cont .ruler .ruler-number span {
    display: block;
    width: 10%;
    height: 1rem;
    position: relative;
    float: left;
}


.recent-days-container .ruler-cont .ruler .ruler-number span i {
    font-size: 0.6rem;
    font-style: normal;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
.recent-days-container .ruler-cont .ruler .ruler-number span:after {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 1px;
    height: 4px;
    background: #999;
    left: 0;
}
.recent-days-container .ruler-cont .ruler .ruler-number span:before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 1px;
    height: 2px;
    background: #999;
    left: -50%;
}
.recent-days-container .tit, .recent-days-container .day {
    position: relative;
    width: 100%;
    margin-bottom: .75rem;
}
.recent-days-container .label {
    width: 15%;
    position: absolute;
    top: 0;
    left: 0.75rem;
    font-size: 0.6rem;
}
.recent-days-container .hours {
    width: 100%;
}
	.recent-days-container .hours .hour {
    position: relative;
    overflow: hidden;
    margin-left: 15%;
    margin-right: 5%;
}
.recent-days-container .hours .hour .hour1, .recent-days-container .hours .hour .hour0, .recent-days-container .hours .hour .hour3, .recent-days-container .hours .hour .hour2 {
    float: left;
    width: 3.125%;
    height: .6rem;
    background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_5288d222b95157c5133d1407a850daba.png) 0 0 no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-color: #f0f0f0;
}
.recent-days-container .hours .hour .hour1 {
    background: #c6eab9;
}
</style>
