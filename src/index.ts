import BonjourService, { Service, Browser }                     from './lib/bonjour'
import type { ServiceReferer, ServiceConfig, BrowserConfig }    from './lib/bonjour'

class Bonjour extends BonjourService {}

export { Bonjour, Service, Browser }
export type { ServiceReferer, ServiceConfig, BrowserConfig }
export default Bonjour

module.exports = Object.assign(Bonjour, {
    Bonjour,
    Service,
    Browser,
    default: Bonjour
})
