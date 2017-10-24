const circleOfFifths = ['I', 'V', 'II', 'VI','III', 'VII', 'v', 'ii', 'vi', 'iii', 'vii', 'IV']

const ratioToCents = (ratio) => {
  const [num, dem] = ratio.split(':')
  return 1200 * Math.log2(num / dem)
}

const pythagoreanAscendingFifths = {
  I: '1:1',
  V: '3:2',
  II: '9:8',
  VI: '27:16',
  III: '81:64',
  VII: '243:128',
  v: '729:512',
  ii: '2187:2048',
  vi: '6561:4096',
  iii: '19683:16384',
  vii: '59049:32768',
  IV: '177147:131072',
}

const pythagoreanUpDownFifths = {
  I: '1:1',
  V: '3:2',
  II: '9:8',
  VI: '27:16',
  III: '81:64',
  VII: '243:128',
  v: '729:512',
  ii: '256:243',
  vi: '128:81',
  iii: '32:27',
  vii: '16:9',
  IV: '4:3',
}

const myRound = (num, inc) => {
  const x = 1 / inc
  return Math.round(num * x) / x
}

const logCents = (intervals) => {
  Object.keys(intervals).map((k) => {
    console.log(k, myRound(ratioToCents(intervals[k]), 0.1))
  })
}

logCents(pythagoreanUpDownFifths)
