const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO check it the user is logged in
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    // NOTE need the info arg later when returning an item from the db
    }, info)
    return item
  }
}

module.exports = Mutations
