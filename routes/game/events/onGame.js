function onGame(io, socket) {
  const { user } = socket;
  const username = user.get('username');

  socket.on('pickTeam', async (data) => {
    const { game } = socket;
    const { team: picks } = data;

    if (!game) return;

    await game.fetch();
    game.pickTeam({ username, picks });
  });

  socket.on('voteForMission', async (data) => {
    const { game } = socket;
    const { vote } = data;

    if (!game) return;

    await game.fetch();
    game.voteForMission({ username, vote });
  });

  socket.on('voteForSuccess', async (data) => {
    const { game } = socket;
    const { vote } = data;

    if (!game) return;

    await game.fetch();
    game.voteForSuccess({ username, vote });
  });

  socket.on('ladyOfTheLake', async (data) => {
    const { game } = socket;
    const { carded } = data;

    if (!game) return;

    await game.fetch();
    game.ladyOfTheLake({ username, target: carded });
  });

  socket.on('shootPlayer', async (data) => {
    const { game } = socket;
    const { shot } = data;

    if (!game) return;

    await game.fetch();
    game.shootPlayer({ username, shot });
  });
}

module.exports = onGame;
