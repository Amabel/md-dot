import { UAParser } from 'ua-parser-js'

const getOS = () => new UAParser().getOS()

export const isMacOS = () => {
  return getOS().name!.search(/mac/i) > -1
}

export const isMobileOrTablet = () => {
  const device = new UAParser().getDevice()
  return device.type === 'mobile' || device.type === 'tablet'
}
