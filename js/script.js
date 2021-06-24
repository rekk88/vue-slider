const app = new Vue({
    
    el: '#app',
    
    data:{
       src : ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg'],
       counter : 0,
       play : false,
    //    handle : '',
    },
    mounted() {
        // this.slide();
    },    
    methods:{
        imgSucc: function(){
           
            if(this.counter >= (this.src.length - 1)){
                this.counter = 0;

            }
            else{
                this.counter++;
            }
        },

        imgPrec: function(){
           
            if(this.counter == 0){
                this.counter = this.src.length - 1;

            }
            else{
                this.counter--;
            }
        },
        slide(){
            let handle = setInterval(this.avviso , 4000);
            // setInterval(function(){
            //     alert("sono passati 3 secondi")
            // },3000);
            
        },
        stop(handle){
            clearInterval(this.handle);
            console.log("ciao");
        },
        avviso(){
            // alert("sono passati 4 secondi");
            this.imgSucc();
        },

        

    }

});