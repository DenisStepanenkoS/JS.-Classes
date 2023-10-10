class RangeValidator{
    
    static fromToValid(from, to){
        return from >= to;
    }
    
    constructor(from, to){
        if(RangeValidator.fromToValid(from,to))
            throw new Error("must be \"from\" < \"to\"")
        this.from = from;
        this.to = to;
    }
    setFrom(from){
        if(RangeValidator.fromToValid(from, this.to))
            throw new Error("\"from\" must be < \"to\"");

        this.from = from;
    }
    setTo(to){
        if(RangeValidator.fromToValid(this.from, to))
            throw new Error("\"to\" must be > \"from\"");

        this.to = to;
    }
    
    getFrom(){
        return this.from;
    }
    getTo(){
        return this.to;
    }
    getRange(){
        return [this.from,this.to];
    }

    isValid(number){
        if(this.from <= number && number <= this.to)
            return true;
        return false;
    }

}

class car{
    
    constructor(mark, model, color, price, made_year){
        this.validator = new RangeValidator(0,2023);
        if (!this.validator.isValid(made_year))
            throw new Error("year is not valid");
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.price = price;
        this.made_year = made_year;  
    };
    getYear() {
        return this.made_year;
    }
    setYear(year){
        
        if (!this.validator.isValid(year))
            throw new Error("year is not valid");
        
        this.made_year = year;
    }
}
try{
    const car1 = new car("mark","model","color",1234,20);
    console.log(car1.color); 
    car1.setYear(-20);
}
catch (Error){
    console.log(Error);
}
