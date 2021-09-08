export function verifyId(item) {
  if (item.ids <= 9) {
    return `#00${item.ids}`;
  } else if (item.ids >= 10 && item.ids <= 99) {
    return `#0${item.ids}`;
  } else {
    return `#${item.ids}`;
  }
}