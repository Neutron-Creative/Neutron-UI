export { default as Button } from '../../components/Button.vue'
export { default as Container } from '../../components/Container.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyContainer = import('../../components/Container.vue' /* webpackChunkName: "components/Container" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
