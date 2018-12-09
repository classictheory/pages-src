function formatWoWCurrency (val, abbr, html) {
  let isHtml = (typeof html !== "undefined" && html == true)

  if (typeof val == 'number') {
    val = val.toString()
  }
  if (val == 0 || val == "00") {
    return ''
  }
  if (isHtml) {
    return `<span class="value">${val}</span><span class="currency-affix">${abbr}</span>`
  }
  return `${val}${abbr}`
}

function parseWoWCurrency(val) {
  let gold = 0
  let silver = 0
  let str = val.toString()
  let l = str.length

  if (l > 4) {
    gold = parseInt(str.substring(0, l - 4))
  }
  if (l > 2) {
    silver = parseInt(str.substring(l - 4, l - 2))
  }
  let copper = parseInt(str.substring(l - 2))

  return {
    gold: gold,
    silver: silver,
    copper: copper
  }
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.filter('number', (value) => {
    return value.toLocaleString()
  })
  Vue.filter('gold', (value) => {
    let wowValue = parseWoWCurrency(value)
    let output = ``

    if (wowValue.gold > 0) {
      output += formatWoWCurrency(wowValue.gold, 'g')
    }
    if (wowValue.silver > 0) {
      output += formatWoWCurrency(wowValue.silver, 's')
    }
    output += formatWoWCurrency(wowValue.copper, 'c')

    return output
  })
  Vue.filter('gold_html', (value) => {
    let wowValue = parseWoWCurrency(value)
    let output = ``

    if (wowValue.gold > 0) {
      output += `<span class="wow-currency--gold">${formatWoWCurrency(wowValue.gold, 'g', true)}</span>`
    }
    if (wowValue.silver > 0) {
      output += `<span class="wow-currency--silver">${formatWoWCurrency(wowValue.silver, 's', true)}</span>`
    }
    output += `<span class="wow-currency--copper">${formatWoWCurrency(wowValue.copper, 'c', true)}</span>`

    return output
  })
}