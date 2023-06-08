export default class LocalStorage {
  public static getItem(key: string): any | null {
    const itemJson = localStorage.getItem(key)
    if (itemJson === null) {
      return null
    }

    const item = JSON.parse(itemJson) as LocalStorageItem
    const now = new Date()
    if (now.getTime() > item.expireAt) {
      localStorage.removeItem(key)
      
      return null
    }

    return item.value
  }

  public static setItem(key: string, value: any, expireSeconds: number): void {
    const now = new Date();
    const item = {
      value: value,
      expireAt: now.getTime() + expireSeconds
    } as LocalStorageItem

    localStorage.setItem(key, JSON.stringify(item))
  }
}

type LocalStorageItem = {
  value: any;
  expireAt: number;
}
