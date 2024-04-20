export class StorageService {
  public get(key: string): any {
    return JSON.parse(globalThis.localStorage.getItem(key) as string);
  }

  public set(key: string, payload: any): void {
    globalThis.localStorage.setItem(key, JSON.stringify(payload));
  }

  public remove(key: string): void {
    globalThis.localStorage.removeItem(key);
  }
}
