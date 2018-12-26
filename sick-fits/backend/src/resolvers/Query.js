const Query = {
  async items(parent, args, ctx, info) {
    const res = ctx.db.query.items()
    return res
  }
};

module.exports = Query;
