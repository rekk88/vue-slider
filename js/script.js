const app = new Vue({
    
    el: '#app',
    
    data:{
       src : ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg'],
       counter : 0,
       
    },

    methods:{
        imgSucc: function(){
           
            if(this.counter >= (this.src.lenght)){
                this.counter = 0;

            }
            else{
                this.counter++;
            }
        }
    }

});