import { parse } from 'toml'
import AppConfig from "../types/AppConfig";
import appConfigStr from './config.toml?raw'

const appConfig = <AppConfig>parse(appConfigStr)

export default appConfig
