import DefaultTheme from 'vitepress/theme'
import GlobalVars from '../components/GlobalVars.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Register global components
        app.component('GlobalVars', GlobalVars)
    }
}
