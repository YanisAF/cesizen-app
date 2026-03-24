// Mock @nativescript/core pour l'environnement Jest (Node/jsdom)
const store: Record<string, string> = {}

export const ApplicationSettings = {
  setString: (key: string, value: string) => { store[key] = value },
  getString: (key: string): string | undefined => store[key],
  remove: (key: string) => { delete store[key] },
  clear: () => { Object.keys(store).forEach(k => delete store[k]) }
}

export const Application = {
  android: null,
  ios: null
}

export class Observable {
  addEventListener() {}
  removeEventListener() {}
  notify() {}
}

export class Frame {
  static topmost() { return { navigate: jest.fn(), goBack: jest.fn() } }
}

export const Utils = {
  openUrl: jest.fn()
}
