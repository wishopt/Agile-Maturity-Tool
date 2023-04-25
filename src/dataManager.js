const dataManager = {
    loadFromLocalStorage(key) {
        savedData = localStorage.getItem(key)
        if (savedData == (null || undefined)) {
            throw new Error(`LocalStorage data for '${key}' is empty`)
        } else {
            return JSON.parse(savedData)
        }
    },

    saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
}

export default dataManager