export function isScrolledToBottom() {
  return window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
}