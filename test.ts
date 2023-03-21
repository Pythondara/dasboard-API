// class Coord {
//     message = '1'
//     lat: number
//     long: number
//     protected test() {
//         if (this.lat > 0){

//         }
//     }

//     computeDistance(newLat: number, newLong: number): number{
//         return 0
//     }
//     constructor (lat: number, long: number) {
//         this.lat = lat
//         this.long = long
//         console.log(this.message)
//     }
// }

// const point = new Coord(0, 1)


// class MapLocation extends Coord {
//     private _name: string
//     get name() {
//         return this._name
//         }

//     set name(s: string) {
//         this._name = s + '_cool!'
//     }
//     override computeDistance(newLat: number, newLong: number): number{
//         console.log(this._name)
//         return 1
//     }
//     constructor(lat: number, long: number, name: string) {
//         super(lat, long)

//     }
// }


// const loc = new MapLocation(0, 1 , 'sdasd')

// interface LoggerService {
//     log: (s: string) => void
// }

// class Logger implements LoggerService {
//     public log(s: string) {
//         console.log(s)
//     }
//     private error() {
//     }
//     private a = '' 
// }

// const l = new Logger


// l.log('d')


// class MyClass<T> {
//        a: T
// }

// const b = new MyClass<string>()

// b.a


// abstract class Base {
//     print(s: string) {
//         console.log(s)
//     }
//     abstract error(s: string): void
// }

// class BaseExtended extends Base {
//     error(s:string) {
//         console.log(s)
//     }
// }

// new BaseExtended().print('s')



// class Animal {
//     name: string
// }


// class Dog {
//     name: string
//     tail: boolean
// }

// const puppy: Animal = new Dog()
