const abcs = 'abcdefghijklmnopqrstuvwxyz'.split('');

const model = () => {
  const m = { __typename: 'Model' };

  for (let i = 0, length = abcs.length; i < length; i += 1) {
    m[abcs[i]] = i;
  }

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
