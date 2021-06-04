class Security {
 constructor(){
    // code to create the input and button elements
    this.access = createInput("Code 1")         
    this.access.position(100,90)
    this.access.style('background','white')

    this.button1 = createButon('check')
    this.button1.position(100,20)
    this.button1 .style('background','lightgrey')
}

    display(){

        //code to make the buttons function as expected

         this.button1.mousePressed(()=>{
             if(System.authenticate(accessCode1,this.access1.value())){
                 this.button1.hide();
                 this.sccess.hide();
                 score++
                }

         })
    }
}