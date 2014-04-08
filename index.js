'use strict'

/**
 * It will remove :hover selectors from the rules or the rules completely when
 * all selectors contain :hover.
 *
 * @author Oleg Slobodskoi 2014
 */


var hoverRegex = /:hover/

module.exports = function() {
    var sheets = document.styleSheets,
        sheetIndex, ruleIndex, selIndex,
        sheet, rule, rulsLn,
        selectors, selectorText

    if (!('ontouchend' in document) || !sheets || !sheets.length) return

    for (sheetIndex = 0; sheetIndex < sheets.length; ++sheetIndex) {
        sheet = sheets[sheetIndex]
        if (!sheet.cssRules) continue

        rulsLn = sheet.cssRules.length
        for (ruleIndex = 0; ruleIndex < rulsLn; ++ruleIndex) {
            rule = sheet.cssRules[ruleIndex]

            if (rule && rule.selectorText && hoverRegex.test(rule.selectorText)) {
                selectors = rule.selectorText.split(',')
                selectorText = ''

                for (selIndex = 0; selIndex < selectors.length; ++selIndex) {
                    if (!hoverRegex.test(selectors[selIndex])) {
                        if (selectorText) selectorText += ','
                        selectorText += selectors[selIndex]
                    }
                }

                if (selectorText) {
                    rule.selectorText = selectorText

                // All selectors contain :hover.
                } else {
                    sheet.deleteRule(ruleIndex)
                }
            }
        }
    }
}
