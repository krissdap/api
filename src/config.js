import path from 'path';

export const serverPort = process.env.SERVER_PORT || 8080;

export const https = process.env.HTTPS === 'true' ? true : false;
export const httpsKeyPath =
  process.env.HTTPS_KEY_PATH != null
    ? process.env.HTTPS_KEY_PATH
    : path.join(__dirname, '..', 'devHttpsKey', 'key.pem');
export const httpsCertPath =
  process.env.HTTPS_CERT_PATH != null
    ? process.env.HTTPS_CERT_PATH
    : path.join(__dirname, '..', 'devHttpsKey', 'cert.pem');

export const clientHttpErrorCode = process.env.CLIENT_HTTP_ERROR_CODE || 400;
export const serverHttpErrorCode = process.env.SERVER_HTTP_ERROR_CODE || 500;

export const logDirectoryPath = process.env.LOG_DIRECTORY_PATH || __dirname;

export const role = process.env.ROLE;

export const defaultMqBindingPort = (() => {
  if (process.env.ROLE === 'idp') return 5555;
  if (process.env.ROLE === 'rp') return 5556;
  if (process.env.ROLE === 'as') return 5557;
})();

export const defaultTendermintPort = (() => {
  if (process.env.ROLE === 'idp' || process.env.ROLE === 'ndid') return '45000';
  if (process.env.ROLE === 'rp') return '45001';
  if (process.env.ROLE === 'as') return '45002';
})();

export const tendermintIp =
  process.env.TENDERMINT_IP == null ? 'localhost' : process.env.TENDERMINT_IP;

export const tendermintPort =
  process.env.TENDERMINT_PORT == null
    ? defaultTendermintPort
    : process.env.TENDERMINT_PORT;

export const tendermintAddress = `${tendermintIp}:${tendermintPort}`;

export const tendermintBaseHttpUrl = `http://${tendermintIp}:${tendermintPort}`;

export const tendermintBaseWsUrl = `ws://${tendermintIp}:${tendermintPort}`;

export const nodeId = process.env.NODE_ID;

export const mqRegister = {
  ip: process.env.MQ_CONTACT_IP || 'localhost',
  port:
    process.env.MQ_BINDING_PORT == null
      ? defaultMqBindingPort
      : parseInt(process.env.MQ_BINDING_PORT),
};

export const useExternalCryptoService =
  process.env.USE_EXTERNAL_CRYPTO_SERVICE === 'true' ? true : false;

export const privateKeyPath = useExternalCryptoService
  ? null
  : process.env.PRIVATE_KEY_PATH == null
    ? path.join(__dirname, '..', 'devKey', role, nodeId)
    : process.env.PRIVATE_KEY_PATH;

export const masterPrivateKeyPath = useExternalCryptoService
  ? null
  : process.env.MASTER_PRIVATE_KEY_PATH == null
    ? path.join(__dirname, '..', 'devKey', role, nodeId + '_master')
    : process.env.MASTER_PRIVATE_KEY_PATH;

//in byte
export const challengeLength = 2;
export const zkRandomLengthForIdp = 128;
