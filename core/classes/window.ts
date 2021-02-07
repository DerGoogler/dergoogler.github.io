export class window {
    static push = class {
        static loacation(arg: any) {
            window.location = arg
        }
        static searchParameter(arg: any) {
            window.location.search = arg
        }
        static open(url: string) {
            window.open(url)
        }
    }
}