const Environment = require('../../routes/constructors/environment');

const beforeGameSave = async (request) => {
  const game = request.object;
  const context = request.context;
  const environment = Environment.getGlobal();

  environment.checkActiveGames({ game, beforeSave: true });

  return true;
};

module.exports = beforeGameSave;
