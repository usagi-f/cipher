type Plain = string;
type Cipher = string;

type Encrypt = (p: Plain) => Cipher;
type Decrypt = (c: Cipher) => Plain;

type Shift = (text: Plain | Cipher, key: number) => Plain | Cipher;

const caesarKey = 3;

const shift: Shift = (text, key) => {
  const normalized = text.replace(/\s+/g, '');
  const uppercase = normalized.toUpperCase();
  const splitted = uppercase.split('');
  return splitted.map((char) => {
    const quantity = (char.charCodeAt(0) - 65 + key) % 26;
    const shifted = Math.sign(quantity) >= 0 ? quantity : quantity + 26;
    return String.fromCharCode(shifted + 65);
  }).join('');
};

const encrypt: Encrypt = (p) => shift(p, caesarKey);

const decrypt: Decrypt = (c) => shift(c, -Math.abs(caesarKey));
