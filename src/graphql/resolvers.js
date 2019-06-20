const abcs = 'bcdefghijklmnopqrstuvwxyz'.split('');

let _index = 0;
let _ = [{ a: 'a', __typename: 'A' }, { b: 'b', __typename: 'B' }];
const _length = _.length;

const model = () => {
  const m = { __typename: 'Model' };

  for (let i = 0, length = abcs.length; i < length; i += 1) {
    m[abcs[i]] = i;
  }

  m._ = {
    ..._[_index],
  };

  _index = (_index + 1) % _length;

  return m;
};

export default {
  Query: {
    list: () => {
      const data = [];

      for (let i = 0; i < global.numberOfModels; i += 1) {
        data.push(model());
      }

      return data;
    },
  },
};
