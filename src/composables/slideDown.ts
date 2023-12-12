export default function slideDown(
    target: HTMLElement,
    displayType: string,
    duration = 400
) {
    target.classList.remove('hidden')
    target.classList.add(displayType)
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = '0px'
    target.style.paddingTop = '0px'
    target.style.paddingBottom = '0px'
    target.style.marginTop = '0px'
    target.style.marginBottom = '0px'
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
    }, duration)
}
