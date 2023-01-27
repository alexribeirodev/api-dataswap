export function parseJSONSafe(str: any) {
    let json = str
    try {
        json = JSON.parse(json)
    } catch (err) {
        json = str
    }

    return json
}