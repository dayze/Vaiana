module.exports = {
  setMainMarginTop () {
    let main = document.querySelector('main')
    let home = document.querySelector('main #home')
    if (home === null) {
      main.style.marginTop = this.getNavHeight() + 'px'
    }
  },
  getNavHeight () {
    let nav = document.querySelector('div[role=navigation]')
    return nav.offsetHeight
  }

}
