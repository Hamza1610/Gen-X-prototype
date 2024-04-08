const liveScores: any[] = ['qwee', 33, 23, true];

liveScores.push('General');
console.log(liveScores);

let normalScores: { today: any, tomorrow: any, yesterday: any};

normalScores = { today: 33, tomorrow: 53, yesterday: 'fds'};
console.log(normalScores);

normalScores.today = 'Wawoo';
console.log(normalScores);
