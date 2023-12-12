export default function slideUp(
    target: HTMLElement,
    displayType: string,
    duration = 400
) {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = '0px'
    target.style.paddingTop = '0px'
    target.style.paddingBottom = '0px'
    target.style.marginTop = '0px'
    target.style.marginBottom = '0px'
    window.setTimeout(() => {
        target.classList.add('hidden')
        target.classList.remove(displayType)
        target.style.removeProperty('height')
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        //alert("!");
    }, duration)
}
