function showTitle(el, title) {
    const popover = getPopover()
    const popoverStyle = popover.style

    if (title === undefined) {
        popoverStyle.display = 'none'
    } else {
        const elRect = el.getBoundingClientRect()
        const elComputedStyle = window.getComputedStyle(el, null)
        const rightOffset = parseInt(elComputedStyle.getPropertyValue('padding-right')) || 0
        const topOffset = parseInt(elComputedStyle.getPropertyValue('padding-top')) || 0

        popoverStyle.visibility = 'hidden'
        popoverStyle.display = 'block'
        popover.querySelector('.popover-content').textContent = title
        popoverStyle.left = elRect.left - popover.offsetWidth / 2 + (el.offsetWidth - rightOffset) / 2 + 'px'
        popoverStyle.top = elRect.top - popover.offsetHeight + topOffset + 'px'
        popoverStyle.display = 'block'
        popoverStyle.visibility = 'visible'
    }
}

function getPopover() {
    let popover = document.querySelector('.title-popover')

    if (!popover) {
        const tpl = `
        <div class="popover title-popover top fade in" style="position:fixed;">
            <div class="arrow"></div>
            <div class="popover-content"></div>
        </div>
        `
        const fragment = document.createRange().createContextualFragment(tpl)
        document.body.appendChild(fragment)
        popover = document.querySelector('.title-popover')
    }

    return popover
}

export default {
    // el: 指令绑定的元素,可以用来操作DOM
    // binding: 一个对象 binding.value 是指令绑定的值 比如v-title='我是标题' binding.value就是我是标题
    // vnode: vue编译生产的虚拟节点
    bind(el, binding, vnode) {
        const events = ['mouseenter', 'mouseleave', 'click']
        const handler = (event) => {
            if (event.type === 'mouseenter') {
                showTitle(el, binding.value)
            } else {
                showTitle()
            }
        }
        events.forEach((event) => {
            el.addEventListener(event, handler, false)
        })

        el.destroy = () => {
            events.forEach((event) => {
                el.removeEventListener(event, handler, false)
            })
            el.destroy = null
        }
    },
    unbind(el) {
        el.destroy()
    }
}