/**
 * Question from:
 * https://30secondsofinterviews.org/
 */

/**
 * Create a function batches that returns the maximum number of whole
 * batches that can be cooked from a recipe:
 * It accepts two objects as arguments: the first object is the recipe
 * for the food, while the second object is the available ingredients.
 * Each ingredient's value is a number representing how many units there are.
 *
 * `batches(recipe, available)`
 */

// recipe and available are both objects
function batches(recipe, available) {
  const minRatio = Object.keys(recipe).reduce(
    (min, item) => Math.min(available[item] / recipe[item], min) || 0,
    Infinity,
  )

  return Math.floor(minRatio)
}

// recipe and available are both objects
// function batches(recipe, available) {
//   const ratios = Object.keys(recipe).map(
//     (item) => Math.floor(available[item] / recipe[item]) || 0,
//   )

//   return Math.min(...ratios)
// }

module.exports = batches
