export default class StringUtils {
  static getContent(str: string | null | undefined) {
    if (str === null || str === undefined) {
      return str
    }
    return str.replaceAll('\n', '').replace(/  +/g, ' ').trim()
  }

  static convertH2M(str: string) {
    let timeParts: string[] = str.includes(':') ? str.split(':') : []

    if (timeParts.length < 1) {
      str = str.includes("'") ? str.replace("'", '') : str
      timeParts = str.toLowerCase().includes('h') ? str.split('h') : []
    }

    if (timeParts.length < 1) {
      return str
    }

    return Number(timeParts[0]) * 60 + Number(timeParts[1])
  }
}
