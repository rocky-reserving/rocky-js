import crypto from 'crypto';
import { Buffer } from 'buffer';

const encryptObject = (object, publicKey) => {
  const aesKey = crypto.randomBytes(32);
  const data = Buffer.from(JSON.stringify(object), 'utf8');
  const aesCipher = crypto.createCipheriv(
    'aes-256-cbc',
    aesKey,
    Buffer.alloc(16, 0),
  );
  const encryptedData = Buffer.concat([
    aesCipher.update(data),
    aesCipher.final(),
  ]);
  const encryptedKey = crypto.publicEncrypt(publicKey, aesKey);

  return {
    key: encryptedKey.toString('base64'),
    data: encryptedData.toString('base64'),
  };
};

const decryptObject = (encryptedKey, encryptedData, privateKey) => {
  const aesKey = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedKey, 'base64'),
  );
  const aesDecipher = crypto.createDecipheriv(
    'aes-256-cbc',
    aesKey,
    Buffer.alloc(16, 0),
  );
  const decryptedData = Buffer.concat([
    aesDecipher.update(Buffer.from(encryptedData, 'base64')),
    aesDecipher.final(),
  ]);
  const object = JSON.parse(decryptedData.toString('utf8'));

  return object;
};

export { encryptObject, decryptObject };
