import readline from 'readline';
import delay from 'delay';

import Client from './app';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question(
  'informe o endereço do servidor no formato - IP:PORTA => ',
  async (address) => {
    const info = address.split(':');
    const obj = {
      ip: info[0],
      port: info[1],
    };

    const client = new Client();
    const con = client.connect(obj);

    await delay(100);

    client.option(leitor, con);
  }
);
