











class Text {

    constructor(title){

        this.text = document.querySelector(title)
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
        }

        str(x = 0) {
            const bool = false
            
            this.text.innerHTML += this.fullText[x]
            x++
            
            if (x < this.fullText.length) {
                setTimeout(() => {
                    this.str(x)
                },200);
            
            } else if( this.text[x] == this.fullText.length ){

            // this.text.innerHTML = this.fullText[x]--
            // x--
            this.text.innerHTML = this.text.slice(0, -1) 
            setTimeout(() => {
                
            }, 200);

            } 
            
            
            

                
        }
            
}



const text = new Text('.text')





