// Large  Shirts: Modify the make_shirt () function so that shirts are large by default with a message that reads 
// I Love TypeScript make a large shirt and a medium shirt with the default message, and a shirt of any size with
// a different message...

function makeshirt(size : string = 'large', text : string = 'I love typescript'): void{
    console.log(`you have order a ${size}, shirt that says ${text}`)
}

makeshirt();
makeshirt('medium')

makeshirt('small', 'I need a big shirt to wear') 

