import {
  createContractClient
} from '@stakeordie/griptape.js';

const counterDef = {
  messages: {
    incrementCount() {
      const handleMsg = {
        increment: {}
      };
      return { handleMsg };
    }
  },

  queries: {
    getCount() {
      return { get_count: {} };
    }
  }
};

export const counterContract = createContractClient({
  id: 'counter',
  //at: 'secret1vk6j69amm37zkhgqgtvjkymjeee4yhxvmmyxja',
  at: 'secret1ua50nx20ehllr44yf87cdlt55jzucuwcu2k4tg',
  definition: counterDef
});
