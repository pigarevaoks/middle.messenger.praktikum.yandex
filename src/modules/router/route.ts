import {IBlock} from "../../modules/block/index";

export type TRouteProps = {
    [key: string]: string
}

function render(query: string, block: IBlock) {
    const root = document.querySelector(query);
    root && root.append(block.element);
    return root;
}

export default class Route {
    _pathname: string
    _blockClass: any
    _block: IBlock | null
    _props: TRouteProps
    _lastPathname: string

    constructor(pathname: string, view: any, props: TRouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            this._lastPathname = pathname;
        }
    }

    leave() {
        if (this._block) {
            this._block.element.remove();
        }
    }

    match(pathname: string) {
        return !!pathname.match(this._pathname);
    }

    render() {
        this._block = new this._blockClass();
        this._block && render(this._props.rootQuery, this._block);
    }

    getPathname() {
        return this._lastPathname;
    }
}
