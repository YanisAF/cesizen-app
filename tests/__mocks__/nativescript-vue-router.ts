// Mock router-vue-native pour Jest
import { ref } from 'vue'

const mockRoute = ref({ params: {}, query: {}, name: 'Home', path: '/' })
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  go: jest.fn(),
  beforeEach: jest.fn(),
  currentRoute: mockRoute
}

export const useRouter = jest.fn(() => mockRouter)
export const useRoute = jest.fn(() => mockRoute)
export const createRouter = jest.fn(() => mockRouter)
export const RouterView = { template: '<div />' }

export default mockRouter
