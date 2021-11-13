export default function queryStringify<TRequest>(data: TRequest) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }
    const values = [];
    for (const key in data) {
        values.push(`${key}=${data[key]}`);
    }
    return `?${values.join("&")}`;
}
