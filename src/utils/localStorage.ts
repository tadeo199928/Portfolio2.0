export function setLocalStorage(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting localStorage:", error);
  }
}

export function getItem(key: string) {
    try{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.log(error)
    }
}