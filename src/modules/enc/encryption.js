const {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  publicEncrypt,
  privateDecrypt,
} = await import('node:crypto');

import { Buffer } from 'buffer';
import dir from './dir.json';

const getPublicKey = (sendTo) => {
  switch (sendTo.toLowerCase()) {
    case 'w':
      return dir.work.public;
    case 'h':
      return dir.surface.public;
    default:
      return;
  }
};

const getPrivateKey = (sendFrom) => {
  switch (sendFrom.toLowerCase()) {
    case 'w':
      return dir.work.public;
    case 'h':
      return dir.surface.public;
    default:
      return;
  }
};

const encryptObject = (object, sendTo) => {
  const aesKey = randomBytes(32);
  // const aesKey = crypto.randomBytes(32);
  const data = Buffer.from(JSON.stringify(object), 'utf8');
  const aesCipher = createCipheriv('aes-256-cbc', aesKey, Buffer.alloc(16, 0));
  // const aesCipher = crypto.createCipheriv(
  //   'aes-256-cbc',
  //   aesKey,
  //   Buffer.alloc(16, 0),
  // );
  const encryptedData = Buffer.concat([
    aesCipher.update(data),
    aesCipher.final(),
  ]);

  const publicKey = getPublicKey(sendTo);
  const encryptedKey = publicEncrypt(publicKey, aesKey);
  // const encryptedKey = crypto.publicEncrypt(publicKey, aesKey);

  return {
    key: encryptedKey.toString('base64'),
    data: encryptedData.toString('base64'),
  };
};

const decryptObject = (encryptedKey, encryptedData, sendFrom) => {
  const privateKey = getPrivateKey(sendFrom);
  const aesKey = privateDecrypt(
    privateKey,
    Buffer.from(encryptedKey, 'base64'),
  );
  // const aesKey = crypto.privateDecrypt(
  //   privateKey,
  //   Buffer.from(encryptedKey, 'base64'),
  // );
  const aesDecipher = createDecipheriv(
    'aes-256-cbc',
    aesKey,
    Buffer.alloc(16, 0),
  );
  // const aesDecipher = crypto.createDecipheriv(
  //   'aes-256-cbc',
  //   aesKey,
  //   Buffer.alloc(16, 0),
  // );
  const decryptedData = Buffer.concat([
    aesDecipher.update(Buffer.from(encryptedData, 'base64')),
    aesDecipher.final(),
  ]);
  const object = JSON.parse(decryptedData.toString('utf8'));

  return object;
};

export { encryptObject, decryptObject };
