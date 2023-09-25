import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18next.use(initReactI18next).use(Backend).init({
    fallbackLng: import.meta.env.VITE_LANGUAGE,
    ns: [
        import.meta.env.VITE_LANGUAGE
    ],
    debug: false
}).catch(error => console.error(error))

export default i18next
