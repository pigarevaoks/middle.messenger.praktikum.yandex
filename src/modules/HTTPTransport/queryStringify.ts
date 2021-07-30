export default function queryStringify(data: string): string {
    const arr = Object.entries(data)
    const res: any[] = []
    arr.forEach((item: [string, any]) => {
        if (typeof item[1] === 'object' && Array.isArray(item[1])) {
            res.push(`${item[0]}=${item[1].join(',')}`)
        } else if (typeof item[1] === 'object') {
            res.push(`${item[0]}=[object Object]`)
        } else {
            res.push(`${item[0]}=${item[1]}`)
        }
    })

    return `?${res.join('&')}`
}
