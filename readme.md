## Remove :hover rules from all stylesheets.

Hover state doesn't exist on touch based devices as there is no pointer, but browser still trigger it the way that element remains :hover state after interaction is done.

There are some ways to avoid this:

1. Don't use :hover. (Difficult when the app works for the desktop web too or/and :hover declarations come from some framework)
1. Preprocess css, remove all :hover selectors/rules and create a separate build.
1. Remove :hover selectors/rules from stylesheets at runtime.

This small script implements the last solution. For the most cases it should be enough. In my tests it takes some milliseconds. Also this can be done after the DOM is ready, so it shouldn't impact  app performance.

It will remove :hover selectors from the rules or the rules completely when all selectors contain :hover.


## Api

    // Commonjs
    var removeHover = require('remove-hover')
    removeHover()

    //Globals
    removeHover()

## License

MIT
