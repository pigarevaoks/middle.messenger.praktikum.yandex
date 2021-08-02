import {IBlock} from 'modules/block'
import {render} from 'utils/render'

export type TRouteProps = {
    [key: string]: string
}

export default class Route {
    _pathname: string
    _blockClass: any
    _block: IBlock | null
    _props: TRouteProps
    _lastPathname: string

    constructor(pathname: string, view: any, props: TRouteProps) {
        this._pathname = pathname
        this._blockClass = view
        this._block = null
        this._props = props
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
            this._lastPathname = pathname
        }
    }

    leave() {
        console.log('leave', this._block)
        if (this._block) {
            this._block.hide()
        }
    }

    match(pathname: string) {
        return !!pathname.match(this._pathname)
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass()
            this._block && render(this._props.rootQuery, this._block)
            return
        }

        this._block.show()
    }

    getPathname() {
        return this._lastPathname
    }
}
