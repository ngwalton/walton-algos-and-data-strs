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
    (min, k) => Math.min(available[k] / recipe[k], min) || 0,
    Infinity,
  )

  return Math.floor(minRatio)
}

// recipe and available are both objects
// function batches(recipe, available) {
//   const ratios = Object.entries(recipe).map(
//     ([ingredient, amount]) => Math.floor(available[ingredient] / amount) || 0,
//   )

//   return Math.min(...ratios)
// }

module.exports = batches
