export const load = () => {
    try {
        const serialized = sessionStorage.getItem(import.meta.env.VITE_SERIALIZE_KEY)
        if (serialized !== null) return JSON.parse(serialized)
    } catch (error) {}
    return undefined
}

export const persist = state => {
    try {
        const serialize = JSON.stringify(state)
        sessionStorage.setItem(import.meta.env.VITE_SERIALIZE_KEY, serialize)
    } catch (error) {}
}
