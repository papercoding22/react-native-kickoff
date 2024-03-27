import {MMKV} from 'react-native-mmkv';

class LocalStorage {
  private mmkv: MMKV;

  constructor() {
    this.mmkv = new MMKV();
  }

  setItem(key: string, value: string) {
    this.mmkv.set(key, value);
  }

  getItem(key: string): string | undefined {
    return this.mmkv.getString(key);
  }

  removeItem(key: string) {
    this.mmkv.delete(key);
  }

  contains(key: string): boolean {
    return this.mmkv.contains(key);
  }

  clearAll() {
    this.mmkv.clearAll();
  }
}

export default new LocalStorage();
