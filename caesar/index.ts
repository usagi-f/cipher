type Plain = string;
type Cipher = string;

type Encrypt = (p: Plain) => Cipher;
type Decrypt = (p: Cipher) => Plain;

const caesarKey = 3;

const encrypt: Encrypt = (p) => {
  const uppercasePlain = p.toUpperCase();
  const splittedPlain = uppercasePlain.split('');
  const shift = (code) => String.fromCharCode(((code - 65 + caesarKey) % 26) + 65);
  const result = splittedPlain.map((char) => shift(char.charCodeAt())).join('');
  return result;
};

const decrypt: Decrypt = (p) => {
  const uppercasePlain = p.toUpperCase();
  const splittedPlain = uppercasePlain.split('');
  const shift = (code) => String.fromCharCode(((code - 65 - caesarKey) % 26) + 65);
  const result = splittedPlain.map((char) => shift(char.charCodeAt())).join('');
  return result;
};
