export default {
  bind(el, {value}) {
    M.Tooltip(el, {html: value})
  },
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el)

    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
