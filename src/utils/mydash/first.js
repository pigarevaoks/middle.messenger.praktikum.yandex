export default function first(list) {
    if (Array.isArray(list)) {
        return list.shift()
    }

    return undefined
}
