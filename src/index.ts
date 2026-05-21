import BonjourService, { Service as ServiceExport, Browser as BrowserExport, ServiceReferer as ServiceRefererExport, ServiceConfig as ServiceConfigExport } from './lib/bonjour'

class Bonjour extends BonjourService {}

namespace Bonjour {
    export const Bonjour        = BonjourService
    export const Service        = ServiceExport
    export const Browser        = BrowserExport
    export type ServiceReferer  = ServiceRefererExport
    export type ServiceConfig   = ServiceConfigExport
}

export = Bonjour