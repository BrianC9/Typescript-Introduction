function greet(name:string | null | undefined):void{
    if (name)
        console.log(`Hello ${name} !!`)
    else
        console.log("Hello !!");
}

greet("Julian")
greet(null)