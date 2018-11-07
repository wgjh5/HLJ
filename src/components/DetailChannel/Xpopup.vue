<template>
	<div v-show="subscribe==true" v-cloak id="popup" @click="popupHide">
		<div class="overlay"></div>
		<div class="content">
			<section class="srv-time-selector" v-show="switchShow">
				<div class="bar bar-1">
					<h1>选择服务时间</h1>
					<button @click="close"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" xmlns="http://www.w3.org/2000/svg"
							width="1024" height="1024" viewBox="0 0 1024 1024">
								<path class="svgpath" data-index="path_0" fill="#272636" d="M958.9 911.542l-47.094 47.075L511.63 558.422 111.432 958.617l-47.075-47.075 400.198-400.196-400.197-400.18 47.075-47.09 400.198 400.196L911.806 64.075l47.095 47.092-400.197 400.18 400.197 400.195z"></path>
							</svg></span></button>
				</div>
				<div class="bd">
					<div class="header">
						<div class="data-picker">
							<div class="wrapper">
								<button v-for="(date, index) in dates.nowMonth" :id="'scroll-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNow(index, $event)">
									{{date.week}} {{date.month}}/{{date.day}}
									<span>{{date.appointment ? '可预约' : '暂不可约'}}</span>
								</button>
								<button v-for="(date, index) in dates.nextMonth" :id="'scroll-next-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNext(index, $event)">
									{{date.week}} {{date.month}}/{{date.day}}
									<span>{{date.appointment ? '可预约' : '暂不可约'}}</span>
								</button>
							</div>
						</div>
						<button class="cal" @click="tableShow">
							<span class="SVGInline"><svg class="SVGInline-svg" style="width: 1rem;height: 1rem;" width="20" height="20" viewBox="0 0 20 20"
								 xmlns="http://www.w3.org/2000/svg">
									<defs>
										<linearGradient x1="14.248%" y1="10.242%" x2="88.363%" y2="82.293%" id="id-10a">
											<stop stop-color="#E0CC9B" offset="0%"></stop>
											<stop stop-color="#BD9D62" offset="100%"></stop>
										</linearGradient>
									</defs>
									<g transform="translate(2.308 2.308)" fill-rule="nonzero" fill="url(#id-10a)">
										<path d="M1.938 15.364H.98c-.575 0-.959-.383-.959-.959V.98C.02.404.404.02.98.02h.958v15.344zm12.467 0h-.959V.02h.96c.575 0 .958.384.958.96v13.425c0 .576-.383.96-.959.96zM1.938 13.446h11.508v1.918H1.938v-1.918zm0-10.549h11.508v1.918H1.938V2.897zM5.774.02H9.61v2.877H5.774V.02zM3.856 6.733h1.918v1.918H3.856zM2.897.02h1.918v1.918H2.897zM10.57.02h1.917v1.918H10.57zM6.733 6.733h1.918v1.918H6.733zM9.61 6.733h1.918v1.918H9.61zM3.856 9.61h1.918v1.918H3.856zM6.733 9.61h1.918v1.918H6.733zM9.61 9.61h1.918v1.918H9.61z"></path>
									</g>
								</svg></span>
							
							<span>30天</span>
						</button>						
					</div>
					<div :class="['no-sel', {'not-chose-time': isChoseTime}]" @click="notChoseTime" v-show="isChoseTimeShow">
						<p>暂不选择服务时间</p>
						<p>之后可以在我的订单页面选择</p>
					</div>
					<div class="hours">
						<div class="wrapper" v-for="date in dates.nowMonth" v-if="date.current && date.appointment">
							<div :class="{'chose-time': !isChoseTime}" v-if="isFirstDay === 0">
								<button  :class="['hour-this', {'not-can-use': (key + 20)/2 <= currentHours + 0.5}]" v-for="(hour, key) in date.hours" @click="timeChose( $event)">
									{{hour.hour}}
								
								</button>
							</div>
							<div :class="{'chose-time': !isChoseTime}" v-else>
								<button class="hour-this" v-for="(hour, key) in date.hours" @click="timeChose( $event)">{{hour.hour}}</button>
							</div>
						</div>
						<div class="wrapper" v-else-if="date.current && !date.appointment">
							<div class="tips">
								<!-- <img class="null-tips" src="css/images/baoqian_weici2_icon.png" alt="" /> -->
								<p>抱歉，今天的服务暂时不能预约哦~</p>
							</div>
						</div>
						<div class="wrapper"  v-for="date in dates.nextMonth" v-if="date.current && date.appointment">
							<div :class="{'chose-time': !isChoseTime}">
								<button class="hour-this" v-for="hour in date.hours" @click="timeChose($event)">{{hour.hour}}</button>
							</div>
						</div>
						<div class="wrapper" v-else-if="date.current && !date.appointment">
							<div class="tips">
								<!-- <img class="null-tips" src="css/images/baoqian_weici2_icon.png" alt="" /> -->
								<p>抱歉，今天的服务暂时不能预约哦~</p>
							</div>
						</div>
					</div>
					<div class="out">
						<button class="submit" @click="submitFunc">确定</button>
					</div>
				</div>
			</section>
			
			<section class="srv-time-selector" v-show="!switchShow">
				<div class="bar">
					<button  @click="tableHide"><span class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" width="26" height="26"
							 viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.9 23.092l-9.9-9.9 9.9-9.9a1 1 0 0 1 1.414 1.415l-8.486 8.485 8.486 8.486a1 1 0 0 1-1.415 1.414z" fill="#FFF"
								 fill-rule="evenodd"></path>
							</svg></span></button>
					<h1>选择服务时间</h1>
				</div>
				<div class="bd">
					<section class="days-component">
						<div class="weekdays">
							<div class="weekday">日</div>
							<div class="weekday">一</div>
							<div class="weekday">二</div>
							<div class="weekday">三</div>
							<div class="weekday">四</div>
							<div class="weekday">五</div>
							<div class="weekday">六</div>
						</div>
						<div class="days-body">
							<div>
								<div class="month">{{currentYears}}年{{currentMonth}}月</div>
								<div class="days">
									<div class="day" v-for="day in nullDay">{{day}}</div>
									<div class="day" v-for="(date, index) in dates.nowMonth" :id="'scroll-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNow(index, $event)">
										
										
										<a ><font v-show="index == 0">今天</font>{{date.day}}<span>{{date.appointment ? '' : '暂不可约'}}</span></a>
									</div>
								</div>
								<div class="month">{{currentYears}}年{{currentMonth + 1}}月</div>
								<div class="days">
									<div class="day" v-for="day in nextNullDay">{{day}}</div>
									<div class="day" v-for="(date, index) in dates.nextMonth" :id="'scroll-next-' + index" :class="[{current: date.current}, {'appointment': !date.appointment}]" @click="selectedNext(index, $event)">
										
										<a  ><span>{{date.appointment ? '' : '暂不可约'}}</span>{{date.day}}</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				switchShow: true,//日历true不显示
				currentMonth: null,
				currentHours: null,
				isFirstDay: 0,
				popupShow: false,
				isChoseTime: true,//暂不选择服务状态
				isChoseTimeShow: true,//暂不选择服务时间是否显示
				nextProtoWeek: null,
				nullDay: [],
				nextNullDay: [],
				dates: {
					nowMonth: [],//这个月
					nextMonth: []//下个月
				}
			};
		},
		computed: {
			subscribe: {
				// getter
				get: function() {
					return this.$store.getters.getSubscribe;
				},
				// setter
				set: function(newValue) {
					this.$store.state.subscribe = newValue;
				}
			},
			
		},
				
				methods: {
					selectedNow (index, event) {
						
						for(let i=0; i< this.dates.nowMonth.length;i++){
							this.dates.nowMonth[i].current = false;
						}
						
						for(let i=0; i< this.dates.nextMonth.length;i++){
							this.dates.nextMonth[i].current = false;
						}
						
						if (!this.dates.nowMonth[index].appointment) {//判断点击那天能是否预约
							this.isChoseTimeShow = false;//不能不显示预约时间选择面板
						} else {
							this.isChoseTimeShow = true;//否则初始化预约时间状态
							this.isChoseTime = true;
						}
						
						this.isFirstDay = index;//点击的日子
						this.tableHide();
						this.dates.nowMonth[index].current = true;//显示对应日子的服务时间
						
					},
					selectedNext (index, event) {
						
						for(let i=0; i< this.dates.nowMonth.length;i++){
							this.dates.nowMonth[i].current = false;
						}
						for(let i=0; i< this.dates.nextMonth.length;i++){
							this.dates.nextMonth[i].current = false;
						}
						
						if (!this.dates.nextMonth[index].appointment) {
							this.isChoseTimeShow = false;
						} else {
							this.isChoseTimeShow = true;
							this.isChoseTime = true;
						}					
						
						this.isChoseTime = true;
						this.tableHide();
		
						this.dates.nextMonth[index].current = true;
						
					},
					
					tableShow () {
						
						this.switchShow = false;
						
					},
					
					tableHide () {
						this.switchShow = true;
						
					},
					
					timeChose (event) {
						this.isChoseTime = false;
						let html = `<span class="checked-in-corner"><span class="SVGInline check"><svg class="SVGInline-svg check-svg" style="width: 0.8em;height: 0.8em;"
									 xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
										<path class="svgpath" data-index="path_0" fill="#272636" d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28.32-12.416 12.576-12.256 32.864.352 45.248l256.48 252.672c.096.096.224.128.32.224s.128.224.224.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-.832 12.288-2.496 1.312-.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672.096-.096.128-.256.224-.352.064-.096.192-.128.288-.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z"></path>
									</svg></span></span>`;
						$(event.target).siblings().removeClass('chosed').find(".checked-in-corner").remove(".checked-in-corner");
						$(event.target).addClass('chosed').append(html); 
						
					},
					
					notChoseTime () {
						$(".checked-in-corner").remove()
						this.isChoseTime = true;
					},
					
					popupHide () {
						this.popupShow = false;
					},
					
					// submit
					submitFunc () {
						var time, choseH, subInfo;
						
						for(let i =0;i<this.dates.nowMonth.length;i++){
							if (this.dates.nowMonth[i].current == true) {
								time = this.dates.nowMonth[i];
							}
						}
							
						for(let i=0;i< this.dates.nextMonth.length;i++){
							if (this.dates.nextMonth[i].current == true) {
								time = this.dates.nextMonth[i];
							}
						}
						
						var choseHours = $('.hour-this');
						var noSel = $('.no-sel');
						
						if(noSel.hasClass('not-chose-time')) {
							choseH = null;
						} else {
							for (var h = 0; h < choseHours.length; h++) {
								if(choseHours.eq(h).hasClass('chosed')) {
									choseH = choseHours.eq(h).text().trim();
								}
							}	
						}
						subInfo = {
							"day": time,
							"hour": choseH 
						}
						console.log(subInfo);
					},
					close(){
						this.$store.dispatch("setSubscribe", false);
					}
				},
				
				created: function() {
				
					var totalDays = 30,//30天
							date = new Date(),
							currentYears = date.getFullYear(),//年
							week = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六'),
							currentMonth = date.getMonth() + 1,//月0~11
							currentDay = date.getDate(),//日
							protoWeek = date.getDay(),//星期某一天0~6
							currentHours = date.getHours(),//月份某一天
							hours = [
								{'hour': '10:00'}, {'hour': '10:30'}, {'hour': '11:00'}, {'hour': '11:30'},
								{'hour': '12:00'}, {'hour': '12:30'}, {'hour': '13:00'}, {'hour': '13:30'},
								{'hour': '14:00'}, {'hour': '14:30'}, {'hour': '15:00'}, {'hour': '15:30'},
								{'hour': '16:00'}, {'hour': '16:30'}, {'hour': '17:00'}, {'hour': '17:30'},
								{'hour': '18:00'}, {'hour': '18:30'}
							];
							
					this.currentYears =	currentYears;	
					this.currentMonth =	currentMonth;	
					this.currentDay =	currentDay;
					this.currentHours = currentHours;
					console.log(this.currentDay);
					
					for (var i = 0; i < totalDays; i++) {
					
						var month = date.getMonth() + 1,
								day = date.getDate(),
								proteWeek = date.getDay(),
								timestamp = date.getTime(),//返回距 1970 年 1 月 1 日之间的毫秒数
								appointment = true;
								
								if(proteWeek == 0 || proteWeek == 6) {
									appointment = false;
								}
								
						var	d = {
									'timestamp': timestamp,
									'appointment': appointment,
									'month': month,
									'day': day,
									'proteWeek': proteWeek,
									'week': week[proteWeek], 
									'hours': hours,
									'current': false
								};
						
						if (month == currentMonth) {
							this.dates.nowMonth.push(d);
						} else {
							this.dates.nextMonth.push(d);
						}
						
						date.setDate(date.getDate() + 1);
					}
					
					
					this.dates.nowMonth[0].current = true;
					this.nextProtoWeek = this.dates.nextMonth[0].proteWeek;//星期几
	
										
					for(var j = 0; j < protoWeek; j++) {
					
						this.nullDay.push("");
						
					}
					
					for(var k = 0; k < this.nextProtoWeek; k++) {
					
						this.nextNullDay.push("");
						
					}
				},
				mounted(){
					
				}
	}
</script>

<style scoped>
	 #popup {
		position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-size: .8rem;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
	}

	#popup .overlay{
     position:absolute;
     top:0;
     left:0;
     width:100%;
     height:100%;
     background:rgba(0,0,0,.2);
}
 #popup .content{
     position:absolute;
     bottom:0;
     left:0;
     width:100%;
     background:#fff;
}
 #popup .content .srv-time-selector{
}
 #popup .content .srv-time-selector .bar{
}
 #popup .content .srv-time-selector .bar>h1{
     text-align:center;
     font-weight:normal;
     margin:0;
     font-size:0.875rem;
     color:#222;
     height:2.625rem;
     line-height:2.625rem;
     border-bottom:0.0625rem solid #f0f0f0;
}
 #popup .content .srv-time-selector .bar>i{
}
 #popup .content .srv-time-selector .bd{
}
 #popup .content .srv-time-selector .bd .header{
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     width: 100%;
     overflow: hidden;
     background:#f7f7f7;
}
 #popup .content .srv-time-selector .bd .header .data-picker{
     overflow-x:auto;
     overflow-y:visible;
     -webkit-box-flex: 1;
     -moz-flex: 1;
     flex: 1;
}
 #popup .content .srv-time-selector .bd .header .data-picker .wrapper{
     white-space:nowrap;
}
 #popup .content .srv-time-selector .bd .header .data-picker .wrapper>button{
     position:relative;
     overflow:hidden;
     border-bottom: 0.125rem solid #f7f7f7;
     margin-right: 1rem;
     height: 3.125rem;
     text-align:center;
}
 #popup .content .srv-time-selector .bd .header .data-picker .wrapper>button.current, #popup .content .srv-time-selector .bd .header .data-picker .wrapper>button.current span{
    color: #BD9D62;
}
 #popup .content .srv-time-selector .bd .header .data-picker .wrapper>button.current:after{
     position:absolute;
     bottom:0;
     content:'';
     width:82%;
     display:block;
     height:0.125rem;
     background:#BD9D62;
}
 #popup .content .srv-time-selector .bd .header .data-picker .wrapper>button>span{
     display:block;
     color:#999;
     font-size:0.75rem;
}
 #popup .content .srv-time-selector .bd .header .cal{
     flex:0 0 5rem;
     -webkit-box-flex: 0;
     -ms-flex: 0 0 5rem;
     width:5rem;
     border-left:0.0625rem solid #e6e6e6;
     color:#999;
}
 #popup .content .srv-time-selector .bd .header .cal img{
     display:block;
     margin:0 auto;
}
 #popup .content .srv-time-selector .bd .header .cal>span{
}
 #popup .content .srv-time-selector .bd .no-sel{
     margin:0.625rem;
     padding:0.3125rem 0;
     text-align:center;
     border:1px solid #979797;
     color:#979797;
}
 #popup .content .srv-time-selector .bd .no-sel.not-chose-time{
     border: 1px solid #BD9D62;
     background: #fff;
     color: #BD9D62;
}
 #popup .content .srv-time-selector .bd .no-sel p:first-child{
     font-weight:bold;
     font-size:0.875rem;
}
 #popup .content .srv-time-selector .bd .no-sel>p{
     font-size:0.75rem;
}
 #popup .content .srv-time-selector .bd .hours{
     margin:0.625rem 0.625rem 0;
}
 #popup .content .srv-time-selector .bd .hours .wrapper{
     height:11.5rem;
     overflow:auto;
}
 #popup .content .srv-time-selector .bd .hours .wrapper .tips{
     text-align:center;
}
 #popup .content .srv-time-selector .bd .hours .wrapper .null-tips{
     margin:1.25rem 0 0.625rem;
}
 #popup .content .srv-time-selector .bd .hours .wrapper>div button{
     width:24.25%;
     margin-right:1%;
     margin-bottom:0.1875rem;
     border:1px solid #E1D2B8;
     padding:0.625rem 0;
     color: #BD9D62;
     background: #fff;
     position: relative;
}
 #popup .content .srv-time-selector .bd .hours .wrapper>div button.not-can-use{
     background:#f7f7f7;
     border: 1px solid #cbcbcb;
     pointer-events: none;
     color: #999;
}
 #popup .content .srv-time-selector .bd .hours .wrapper>div button:nth-child(4n){
     margin-right:0;
}
 #popup .content .srv-time-selector .bd .out{
     border-top:0.0625rem solid #f0f0f0;
     padding:0.3125rem 0.625rem;
}
 #popup .content .srv-time-selector .bd .out>button.submit{
     width:100%;
     vertical-align:middle;
	 height: 2.2rem;
    background: -webkit-gradient(linear, left top, right top, from(#DBCAA9), to(#BD9D62));
    background: -webkit-linear-gradient(left, #DBCAA9, #BD9D62);
    background: -o-linear-gradient(left, #DBCAA9, #BD9D62);
    background: linear-gradient(to right, #DBCAA9, #BD9D62);
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    border: 1px solid white;
}
 #popup .content .srv-time-selector .bar{
     position:relative;
}
 #popup .content .srv-time-selector .bar h1{
}
 #popup .content .srv-time-selector .bar img{
     display:inline-block;
     float:left;
     margin-top:0.875rem;
     margin-left:0.625rem;
}
 #popup .content .srv-time-selector .bar-1 img{
     position:absolute;
     right:0.625rem;
     top:0;
}
 #popup .content .srv-time-selector .bd{
}
 #popup .content .srv-time-selector .bd .days-component{
}
 #popup .content .srv-time-selector .bd .days-component .weekdays{
     overflow:hidden;
     background:#f7f7f7;
     height:3.25rem;
     line-height:3.25rem;
}
 #popup .content .srv-time-selector .bd .days-component .weekdays .weekday{
     float:left;
     width:14%;
     text-align:center;
     color:#333;
}
 #popup .content .srv-time-selector .bd .days-component .days-body{
     color:#333;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .month{
     text-align:center;
     border-top:0.0625rem solid #e6e6e6;
     border-bottom:0.0625rem solid #e6e6e6;
     height:2.625rem;
     line-height:2.625rem;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .days{
     overflow:hidden;
     padding:0.625rem 0;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day{
     position:relative;
     float:left;
     width:14%;
     height: 2.5rem;
     line-height:1.875rem;
     text-align:center;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day font{
     position:absolute;
     bottom:0;
     left:50%;
     margin-left:-1rem;
     font-size:0.3rem;
     color:#999;
     line-height:1;
     display:block;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day span{
	 position:absolute;
	 bottom:0;
	 left:50%;
	 margin-left:-1.5rem;
	 font-size:2%;
	 width: 3rem;
	 color:#999;
	 line-height:1;
	 display:block;
 }
 #popup .content .srv-time-selector .bd .days-component .days-body .day font{
	 transform: translate(-9%);
     top:0;
     color:red;
	 display: block;
    font-size: 70%;
    height: 33.3%;
    width: 100%;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day a{
     width: 100%;
     height:100%;
	 	display: flex;
	 justify-content:center;
	 align-items:Center;
     margin:0 auto;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day.current a{
	 width: 100%;
	 height:100%;
		 display: flex;
    justify-content:center;
    align-items:Center;
     background: #BD9D62;
	 text-align: center;
	vertical-align: middle;
     color:#fff;
}
 #popup .content .srv-time-selector .bd .days-component .days-body .day.current a font, #popup .content .srv-time-selector .bd .days-component .days-body .day.current a span{
	 color:#fff;
 }
 .SVGInline {
     line-height: 1;
     vertical-align: middle;
     -webkit-align-self: center;
     -ms-flex-item-align: center;
     align-self: center;
     display: inline-block;
}
 .srv-time-selector .bar .SVGInline-svg path {
     fill: #BD9D62;
}
 
</style>
