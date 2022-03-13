class WebSet {
  constructor(name, web) {
    this.name = name
    this.web = web
  }
  getWebNum() {
    return this.web.length
  }

  *[Symbol.iterator]() {
    yield* this.web
  }
  
}

class Web {
  constructor(text, url, desc, icon) {
    this.text = text
    this.url = url
    this.desc = desc
    this.icon = icon
  }
}

export function getWebSet(webObj) {
  const webArr = ((opt) => {
    for (let i of webObj.children) {
      opt.push(new Web(i.text, i.url, i.desc, i.icon))
    }
    return opt
  })([])
  return new WebSet(webObj.title, webArr)
}
