const Mutations = {
  createDog(parent, args, ctx, info) {
    // Temporaritly simulate db on the global object
    global.dogs = global.dogs || []
    const newDog = { name: args.name }
    global.dogs.push(newDog)
    return newDog
  }
}

module.exports = Mutations
