type Plain = string;
type Cipher = string;

type Encrypt = (p: Plain) => Cipher;
type Decrypt = (c: Cipher) => Plain;

type Shift = (text: Plain | Cipher, key: number) => Plain | Cipher;

const caesarKey = 3;

const shift: Shift = (text, key) => {
  const uppercase = text.toUpperCase();
  const splitted = uppercase.split('');
  return splitted.map((char) => {
    return String.fromCharCode(((char.charCodeAt() - 65 + key) % 26) + 65);
  }).join('');
};

const encrypt: Encrypt = (p) => shift(p, caesarKey);

const decrypt: Decrypt = (c) => shift(c, -Math.abs(caesarKey));
