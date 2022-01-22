class Greeting {
    name: string = "N/A";

    //Optional parameter
    constructor(yourname?: string){
        this.name = yourname;
    }

    showName(): void {}
    showAny() {}

    showString():string{
        return "SE";
    }

}

const g = new Greeting("Software");
g.showString();
