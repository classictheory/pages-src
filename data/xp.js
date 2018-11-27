export const WoWExperience = {
  1: 400,
  2: 900,
  3: 1400,
  4: 2100,
  5: 2800,
  6: 3600,
  7: 4500,
  8: 5400,
}

export const TwentyArray = [...Array(20).keys()]

/**
 * Get the list of experience in a 3 column table form.
 * @returns {{column1: {}, column2: {}, column3: {}}}
 */
function getXpTables() {
  let XPTables = {
    column1: {},
    column2: {},
    column3: {},
  }
// // Levels 1-20
  let twentyLevels = TwentyArray

  twentyLevels.forEach(function (i) {
    // Column1
    let col1level = i + 1;
    XPTables.column1[col1level] = WoWExperience[col1level]
    let col2level = i + 21;
    XPTables.column2[col2level] = WoWExperience[col2level]
    let col3level = i + 41;
    // Don't add level 60
    if (col3level !== 60) {
      XPTables.column3[col3level] = WoWExperience[col3level]
    }
    XPTables.column3[60] = '-'
  })

  return XPTables
}

export const ExperienceTables = getXpTables();