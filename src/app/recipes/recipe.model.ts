export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath:string){
        this.name = name;
        this.description =desc;
        this.imagePath = imagePath;
    }
}

// a model should just be a blueprint for a class we create