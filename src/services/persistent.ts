/* eslint-disable @typescript-eslint/no-explicit-any */
class PersistentService {
    static add(name: string, value: { [k: string]: any }) {
        localStorage.setItem(name, JSON.stringify(value))
    }

    static remove(name: string) {
        localStorage.removeItem(name)
    }

    static get(name: string): { [k: string]: any } | undefined {
        const value = localStorage.getItem(name)

        return value ? JSON.parse(value) : undefined
    }
}

export default PersistentService
