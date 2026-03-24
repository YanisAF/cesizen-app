// Mock nativescript-vue pour Jest
export { createApp, defineComponent, ref, computed, reactive, onMounted, watch } from 'vue'
export const Frame = { template: '<div><slot /></div>' }
export const Page = { template: '<div><slot /></div>' }
export const ActionBar = { template: '<div><slot /></div>' }
export default {}
