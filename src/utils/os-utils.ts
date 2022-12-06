import { UAParser } from 'ua-parser-js'

const getOS = () => new UAParser().getOS()

export const isMacOS = () => {
  return getOS().name!.search(/mac/i) > -1
}
