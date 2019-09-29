const makeResponseResult = (error = null, data = {}) => ({
  success: !error,
  payload: data,
  error: error || undefined,
});


module.exports.makeResponseResult = makeResponseResult;
