export default function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 220)},${Math.floor(
    Math.random() * 220,
  )},${Math.floor(Math.random() * 220)})`;
}
