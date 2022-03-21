// const a: string = "Hello World"
// const b: number = 45
// const c: boolean = false
// const d: null = null
// const arr: string[] = ["Hello World", "Sergio", "Pedri"]
//
// const users: {firstname: string, lastname: string, age: number} = {
//     firstname: "Serginho",
//     lastname: "Zoto",
//     age: 27
// }
//
// const date:Date = new Date();
//
// const cb:(e: MouseEvent) => void = (e: MouseEvent): number => {
//     return 3
// }
//
// const compteur = document.querySelector('#compteur')
//
// function printId(id: string | number): void {
//     console.log(id.toString())
// }
// printId(3)

const compteur = document.querySelector('#compteur')

let i = 0;

const increment = (e: Event) => {
    e.preventDefault()
    i+=5
    const span = compteur?.querySelector('span')
    if (span){
        span.innerText = i.toString();
    }
}

compteur?.addEventListener('click', increment)

//console.log(i)