<template>
  <div>
    <p>
        МОСКОВСКАЯ ГОСУДАРСТВЕННАЯ ЮРИДИЧЕСКАЯ АКАДЕМИЯ (МГЮА),<br>
        ИНСТИТУТ ЧАСТНОГО ПРАВА,<br>
        Бакалавриат, 4 курс
    </p>

    <div id="wrapper" class="clearfix">
      <span class="title">Средний балл (GPA)</span>
      <canvas id="demo" width="300" height="300" ref="myCanvas"></canvas>
      <div id="name">
        <span class="persent">{{ counter.toFixed(1) }}%</span>
      </div>
      <span class="title">Годы обучения</span>
      <span class="year">2019 – 2023</span>
    </div>

  </div>
</template>

<script>


export default {
	name: 'education-info',
	components: {

     },
    data() {
      return {
        counter: 0,
        timer: null,
        targetNumber: 87.1,
        
      }
    },
    mounted() {
        const canvas = this.$refs.myCanvas;
        const c = canvas.getContext('2d');
  
        // Здесь можно проводить рисование на Canvas
        var value1 = 87.2,
            value2 = 12.8,
            opacity = 0.8,
            width = 30,
            x = 150,
            y = 150,
            radius = 135,
            arrow = 0;

        function drawCircle(color,start, end) {
          c.beginPath();
          c.lineWidth = width;
          c.strokeStyle = color;
          c.arc(x,y,radius,start,end,false);
          c.stroke();
        }

        function drawDemo1() {
          
          var radian = Math.PI*2/360;
          var step = radian;
          var rad1 = radian*(value1*3.6),
              rad2 = radian*(value2*3.6);
  
          
          c.clearRect(0,0,canvas.width,canvas.height);
          
          if(arrow<(Math.PI*2)-radian) {
            arrow+=step*2;
          }
          
          if (arrow>=0 && arrow<rad1) {
          
            drawCircle("rgba(52, 211, 153," + opacity + ")",0,arrow);
            // document.querySelector("li:eq(0) h2")
            //   .css("border-left","20px solid " + 
            //       "rgba(52, 211, 153," + opacity + ")")
            //   .css("padding-left","10px");
            //   document.querySelector(".chrome")
            //   .css("color","rgba(109,105,97,1)");
          }
          
          if (arrow>=rad1 && arrow<(rad1+rad2)) {
          
            drawCircle("rgba(52, 211, 153," + opacity + ")",0,rad1);
            drawCircle("rgba(118,143,76," + opacity + ")",rad1,arrow);
            // document.querySelector("li:eq(1) h2")
            //   .css("border-left","20px solid " + 
            //       "rgba(118,143,76," + opacity + ")")
            //   .css("padding-left","10px");
            // document.querySelector(".ff")
            //   .css("color","rgba(109,105,97,1)");
            
          }
        }

        setInterval(drawDemo1,20)

        this.timer = setInterval(() => {
          this.counter += 0.1;
          if (this.counter >= this.targetNumber) {
            clearInterval(this.timer);
          }
        }, 4);

    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  }
	
</script>
<style scoped>
  #wrapper {
    position: relative;
    padding: 50px 0;
    width: fit-content;
  }
  #demo {
    margin: 30px 100px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

    ul {
    list-style: none;
    margin-left: 100px;
  }

  #name  {
	position: absolute;
  width: 200px;
	height: 50px;
  top:200px;
  left: 150px;
}

.title, .persent,.year {
  display: block;
  text-align: center;
  width: 100%;
}
.persent {
  font-size: 400%;
}

</style>