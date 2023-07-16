const logo = document.querySelector<HTMLDivElement>("#logo")
const animationButton = document.querySelector("#animate-button")
const animationCheckbox =
  document.querySelector<HTMLInputElement>("#animate-checkbox")

let isAnimationEnabled = true

function toggleAnimation() {
  if (!logo || !animationCheckbox) return
  if (isAnimationEnabled) {
    isAnimationEnabled = false
    animationCheckbox.checked = isAnimationEnabled
    logo.classList.remove("animate-bounce")
  } else {
    isAnimationEnabled = true
    animationCheckbox.checked = isAnimationEnabled
    logo.classList.add("animate-bounce")
  }
}

animationButton?.addEventListener("click", toggleAnimation)

setTimeout(() => {
  if (!logo || !animationCheckbox) return
  isAnimationEnabled = false
  animationCheckbox.checked = isAnimationEnabled
  logo.classList.remove("animate-bounce")
}, 3490)
