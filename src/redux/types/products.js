import prefixer from './prefixer';

const prefix = '@@productTypes';

const types = {
  RES_PRODUCT_DATA: 'RES_PRODUCT_DATA',
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};

export default prefixer(types, prefix);
