document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown', () => ({
    open: false,
    message: 'Something',
    toggle() {
      this.open = !this.open
    }
  }))
})
