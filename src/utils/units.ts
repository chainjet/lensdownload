export function parseBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let unitIndex = 0

  while (bytes >= 1024) {
    bytes /= 1024
    unitIndex++
  }

  return `${bytes.toFixed(2)} ${units[unitIndex]}`
}
