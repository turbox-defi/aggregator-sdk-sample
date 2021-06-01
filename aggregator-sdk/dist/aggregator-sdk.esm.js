import { getDefaultProvider, JsonRpcProvider } from '@ethersproject/providers';
import JSBI from 'jsbi';
export { default as JSBI } from 'jsbi';
import invariant from 'tiny-invariant';
import { getAddress, getCreate2Address } from '@ethersproject/address';
import _Big from 'big.js';
import toFormat from 'toformat';
import _Decimal from 'decimal.js-light';
import { parseUnits, formatEther, formatUnits } from '@ethersproject/units';
import { keccak256, pack } from '@ethersproject/solidity';
import { Contract } from '@ethersproject/contracts';
import { getNetwork } from '@ethersproject/networks';
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json';
import { setMulticallAddress, Provider, Contract as Contract$1 } from 'ethers-multicall';
import { flatMap } from 'lodash-es';
import IUniswapV2Router02 from '@uniswap/v2-periphery/build/IUniswapV2Router02.json';
import IUniswapV2Factory from '@uniswap/v2-core/build/IUniswapV2Factory.json';
import { BigNumber } from '@ethersproject/bignumber';
import format from 'date-fns/format';
import { Interface } from '@ethersproject/abi';
import axios from 'axios';

var _SOLIDITY_TYPE_MAXIMA;
var ChainId;

(function (ChainId) {
  ChainId[ChainId["BSCMAINNET"] = 56] = "BSCMAINNET";
  ChainId[ChainId["BSCTESTNET"] = 97] = "BSCTESTNET";
  ChainId[ChainId["HECOMAINNET"] = 128] = "HECOMAINNET";
})(ChainId || (ChainId = {}));

var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));

var FACTORY_ADDRESS = '0xBCfCcbde45cE874adCB698cC183deBcF17952812';
var INIT_CODE_HASH = '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66';
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100); // export const _998 = JSBI.BigInt(998)

var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var SolidityType;

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));

var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var TokenInTradingError = /*#__PURE__*/function (_Error3) {
  _inheritsLoose(TokenInTradingError, _Error3);

  function TokenInTradingError() {
    return _Error3.apply(this, arguments) || this;
  }

  return TokenInTradingError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
} // warns if addresses are not checksummed

function validateAndParseAddress(address) {
  try {
    var checksummedAddress = getAddress(address); // warning(address === checksummedAddress, `${address} is not checksummed.`)

    return checksummedAddress;
  } catch (error) {
     process.env.NODE_ENV !== "production" ? invariant(false, address + " is not a valid address.") : invariant(false) ;
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof JSBI ? bigintIsh : typeof bigintIsh === 'bigint' ? JSBI.BigInt(bigintIsh.toString()) : JSBI.BigInt(bigintIsh);
} // mock the on-chain sqrt function

function sqrt(y) {
  validateSolidityTypeInstance(y, SolidityType.uint256);
  var z = ZERO;
  var x;

  if (JSBI.greaterThan(y, THREE)) {
    z = y;
    x = JSBI.add(JSBI.divide(y, TWO), ONE);

    while (JSBI.lessThan(x, z)) {
      z = x;
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE;
  }

  return z;
} // given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */

var Currency =
/**
 * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function Currency(decimals, symbol, name) {
  validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};
/**
 * The only instance of the base class `Currency`.
 */

Currency.ETHER = /*#__PURE__*/new Currency(18, 'BNB', 'Binance');
var ETHER = Currency.ETHER;

var _WETH;
var ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_Currency) {
  _inheritsLoose(Token, _Currency);

  function Token(chainId, address, decimals, symbol, name, logoUrl) {
    var _this;

    _this = _Currency.call(this, decimals, symbol, name) || this;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address).toLowerCase();
    _this.logoUrl = logoUrl;
    return _this;
  }

  Token.getETHToken = function getETHToken(chainId) {
    var symbol = "ETH";
    var logoUrl = "";

    switch (chainId) {
      case ChainId.BSCMAINNET:
      case ChainId.BSCTESTNET:
        symbol = "BNB";
        logoUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBydqCg4lAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwvapJxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowMMz38XoAAAAASUVORK5CYII=";
        break;

      case ChainId.HECOMAINNET:
        symbol = "HT";
        logoUrl = "data:image/png;base64,UklGRqgFAABXRUJQVlA4TJsFAAAvMUAMEDVJyvZftZUq7u7u7u7uitvInQCMYGbH/eDuLiO4Q1xGPExd1trrrLMS/B+y0ECDMNdmRKDSYUegz270R/poh1vmNEEKkIIHzm3bpp776z/bX2zbTjq26tOyTtY670GQbTttq0plRttifXKYTbIsCZJs07bi+t5n27Zt27Zt2zZGtu03sm1927b/OWsCgHuJoSAB6O3X0ILoyUCBH4LmmEr2568E0XKMzZ4IBMlfa/TOgt1JCpssjCDGgHuTQnOItTz7oY4TNxF9YSTbFCfW5NC8EeADDwTQ818gCjyZHJpTqMbwukHwNw9aQPRD/pUSfITKM8b6IICImCCOHMlfCQIdzV8J8eAIIqIrVH7SoxURqCOcRCj0VEFE9If/lRmcBSogJvsogKQ3DHnGCnEWxT9XvHiqUDARGL+TFE6YMkOcP4wgPUraWZBVNKL0hRGJAm/+0zwQiAHvLYqKS5CV8U1OFZr/oUSE9GSimk+QMkNEIPQLpSLBR1NC84lRozcJg14qUko0uLc0/umFaNepRIO3kNELgQyh9U5SGBFq9OLh0JabQQmEf9Xp7UHAoTDiseKmG1mThbVl2S8jABw+E/z2tb3stpUD2SkTQvOnCutuZA2Qv5Yb7AAAdm3t2E2dcdfQmFI2zZ/xTpgRDXOiOPoPWb0RyDB1rMm+iMT66auFplJ+qkvlu7k7JJ5+qfHctuTvxGxTjS+MInOMeDVeLQEAcOXjm2DpD72q0gKq4gLa6vxl7cTNg1uFwTUI+qawKEHwp0q9I5Db1/Z6+nr+qCosIMv6er67ZfEow2mSDU8MeIzMvsj/bFP++fSII0afHeHdI1mWH5k6Y8fJ+0DkU2rM84WByZ0iTM6KmgHIv9rK/FkmtdX568bZsxmXcaG5I6UrhSkSPO0OKw7kvsM1q7E9rch0Y3vqPvNe4XmUGwL94P/IqITIH6v1NkC19vt0dXlBJHS1/GLbykGaw62k8CnCMLL6wv/zjfl3ksJRNs2dDXS1/FqWVJcLah91IRymRcMZKd12scSCCxNDMwK5e3fL+kBmNHeHtjtJYRxrCq8aBH9WpJRQ6G2DXheo9oku5xmLsT1tnrhDaseawjsHwP9R2huBDKHqF2XrylFe38jPxhjGDK3p3qFT4XKswOjlB6MMIfC9ep0IkL/M3aFRXSwgs+jr+cmOjT2fY3lGL18ElfKGIZ1UB9QtSycFXTW/kJ3UonMLgBEJ5X293pBmG3Yl6lIBNkNjurX/cMXhWJtO64OL5ooBL+dFxUbZs7th0TfzscxubI0bx66J2rEZUfNGSg8kMEkY/0JZP3XV11TKNwc+30kK49ip/JmUJswi3QuBZKERqPbRLeUNm7q8oPaJLgQ4Vhhi/WCQSABqaJbB0C6z62r5ydaloziPcWrRCOmhi4JppJE7SWGJF7r6PMD2yNIb2q//PWB5vCg01j6kKPHi3or4oSeufn5gtNV5gGlMV8tvtyyftIFrd1iRCPCG4gqDXg5oJAkwdcZuJnW5gG3UVfziA8XGEH/4F4Fva8MHUazDPucNi7E9Le7e3rID50XxT04VmnxgILxgSBNGRtMzgdg4ezbVVMsPBmNrvNw0d5YB7sNq9kho1I2ISgj0sk2rSOze3tLrm3lNytgaz7avH3TAiQVE9khp9DkiPsw1Nd5JCgsAYBt2Pppy+UPRlAti6o4Lm+dPEuDUwTDs6aQmf/knohIGvWjUKRD7j1Y0ps44+kiWVaUF1dXyffu4y963v2YGJy/MKkqh0S8KvPypfE0jdezJ3wgAAFuWjlKGxnSpKiygKZdf5t7QsmH2InLt9w0Dzp9sw19sTI8BdwLhLxHSm+6wygRsmLmYGFvjU0t/KDl2RSQQc2bUzPV64wJj8AQ1H2X0yeF2rO919u5t2IAjAA==";
        break;
    }

    return new Token(chainId, ADDRESS_ZERO, 18, symbol, symbol, logoUrl);
  };

  var _proto = Token.prototype;

  _proto.isETH = function isETH() {
    return this.address == ADDRESS_ZERO || this.address == "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" || this == ETHER;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  ;

  _proto.equals = function equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    } else if (this.isETH() && other.isETH() && this.chainId === other.chainId) {
      return true;
    }

    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address !== other.address) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  };

  return Token;
}(Currency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
var WETH = (_WETH = {}, _WETH[ChainId.BSCMAINNET] = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'), _WETH[ChainId.BSCTESTNET] = /*#__PURE__*/new Token(ChainId.BSCTESTNET, '0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e', 18, 'WBNB', 'Wrapped BNB'), _WETH[ChainId.HECOMAINNET] = /*#__PURE__*/new Token(ChainId.HECOMAINNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'WHT Token'), _WETH);

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = ONE;
    }

    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  } // performs floor division


  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  };

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  // amount _must_ be raw, i.e. in the native representation
  function CurrencyAmount(currency, amount) {
    var _this;

    var parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);
    _this = _Fraction.call(this, parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals))) || this;
    _this.currency = currency;
    return _this;
  }
  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */


  CurrencyAmount.ether = function ether(amount) {
    return new CurrencyAmount(ETHER, amount);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.toSignificant.call(this, significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.toFixed.call(this, decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "raw",
    get: function get() {
      return this.numerator;
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var TokenAmount = /*#__PURE__*/function (_CurrencyAmount) {
  _inheritsLoose(TokenAmount, _CurrencyAmount);

  // amount _must_ be raw, i.e. in the native representation
  function TokenAmount(token, amount) {
    var _this;

    _this = _CurrencyAmount.call(this, token, amount) || this;
    _this.token = token;
    return _this;
  } //通过正常代币数量构建TokenAmount对象，区别于以wei为单位的构造函数


  TokenAmount.getTokenAmountByExact = function getTokenAmountByExact(token, amount) {
    var typedValueParsed = parseUnits(amount, token.decimals).toString(); //   if (typedValueParsed !== '0') {
    //       return currency instanceof Token
    //           ? new TokenAmount(currency, JSBI.BigInt(typedValueParsed))
    //           : CurrencyAmount.ether(JSBI.BigInt(typedValueParsed))
    //   }
    //
    // const parsedAmount = parseBigintIsh(amount);
    // return new TokenAmount(token,JSBI.multiply(parsedAmount,JSBI.exponentiate(TEN, JSBI.BigInt(token.decimals))));

    return new TokenAmount(token, JSBI.BigInt(typedValueParsed));
  };

  var _proto = TokenAmount.prototype;

  _proto.add = function add(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw));
  };

  return TokenAmount;
}(CurrencyAmount);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  // denominator and numerator _must_ be raw, i.e. in the native representation
  function Price(baseCurrency, quoteCurrency, denominator, numerator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(TEN, JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(TEN, JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }

  Price.fromRoute = function fromRoute(route) {
    var prices = [];

    for (var _iterator = _createForOfIteratorHelperLoose(route.pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      prices.push(route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw));
    }

    return prices.slice(1).reduce(function (accumulator, currentValue) {
      return accumulator.multiply(currentValue);
    }, prices[0]);
  };

  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  };

  _proto.multiply = function multiply(other) {
    !currencyEquals(this.quoteCurrency, other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  } // performs floor division on overflow
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyEquals(currencyAmount.currency, this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
    }

    return CurrencyAmount.ether(_Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjusted.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "raw",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }, {
    key: "adjusted",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var PAIR_ADDRESS_CACHE = {};
var Pair = /*#__PURE__*/function () {
  function Pair(tokenAmountA, tokenAmountB, factoryAddress, initCodeHash) {
    if (factoryAddress === void 0) {
      factoryAddress = FACTORY_ADDRESS;
    }

    if (initCodeHash === void 0) {
      initCodeHash = INIT_CODE_HASH;
    }

    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(tokenAmounts[0].token.chainId, Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token, factoryAddress, initCodeHash), 18, 'UNI-V2', 'Uniswap V2');
    this.tokenAmounts = tokenAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB, factoryAddress, initCodeHash) {
    var _PAIR_ADDRESS_CACHE, _PAIR_ADDRESS_CACHE$f, _PAIR_ADDRESS_CACHE$f2;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PAIR_ADDRESS_CACHE = PAIR_ADDRESS_CACHE) == null ? void 0 : (_PAIR_ADDRESS_CACHE$f = _PAIR_ADDRESS_CACHE[factoryAddress]) == null ? void 0 : (_PAIR_ADDRESS_CACHE$f2 = _PAIR_ADDRESS_CACHE$f[tokens[0].address]) == null ? void 0 : _PAIR_ADDRESS_CACHE$f2[tokens[1].address]) === undefined) {
      var _PAIR_ADDRESS_CACHE2, _PAIR_ADDRESS_CACHE3, _PAIR_ADDRESS_CACHE3$, _extends2, _extends3, _extends4;

      PAIR_ADDRESS_CACHE = _extends({}, PAIR_ADDRESS_CACHE, (_extends4 = {}, _extends4[factoryAddress] = _extends({}, (_PAIR_ADDRESS_CACHE2 = PAIR_ADDRESS_CACHE) == null ? void 0 : _PAIR_ADDRESS_CACHE2[factoryAddress], (_extends3 = {}, _extends3[tokens[0].address] = _extends({}, (_PAIR_ADDRESS_CACHE3 = PAIR_ADDRESS_CACHE) == null ? void 0 : (_PAIR_ADDRESS_CACHE3$ = _PAIR_ADDRESS_CACHE3[factoryAddress]) == null ? void 0 : _PAIR_ADDRESS_CACHE3$[tokens[0].address], (_extends2 = {}, _extends2[tokens[1].address] = getCreate2Address(factoryAddress, keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), initCodeHash), _extends2)), _extends3)), _extends4));
    }

    return PAIR_ADDRESS_CACHE[factoryAddress][tokens[0].address][tokens[1].address];
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount) {
    !this.involvesToken(inputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.token);
    var outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0); // const inputAmountWithFee = JSBI.multiply(inputAmount.raw, _998)

    var inputAmountWithFee = JSBI.multiply(inputAmount.raw, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.raw);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.raw, _1000), inputAmountWithFee);
    var outputAmount = new TokenAmount(inputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount) {
    !this.involvesToken(outputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO) || JSBI.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    } // console.log("outputAmount="+outputAmount.toFixed(2));


    var outputReserve = this.reserveOf(outputAmount.token); // console.log("outputReserve="+outputReserve.toFixed(2));

    var inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0); // console.log("inputReserve="+inputReserve.toFixed(2));

    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.raw, outputAmount.raw), _1000); // console.log("numerator="+numerator);
    // const denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), _998)

    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), _997); // console.log("denominator="+denominator);

    var inputAmount = new TokenAmount(outputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE)); // console.log("inputAmount="+inputAmount.toFixed(2));

    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.raw, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return new TokenAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOTAL_SUPPLY') : invariant(false) : void 0;
    !liquidity.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    !JSBI.lessThanOrEqual(liquidity.raw, totalSupply.raw) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ? process.env.NODE_ENV !== "production" ? invariant(false, 'K_LAST') : invariant(false) : void 0;
      var kLastParsed = parseBigintIsh(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.raw, this.reserve1.raw));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.raw, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return new TokenAmount(token, JSBI.divide(JSBI.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw));
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].token;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].token;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !pairs.every(function (pair) {
      return pair.chainId === pairs[0].chainId;
    }) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(input instanceof Token && pairs[0].involvesToken(input) || input === ETHER && pairs[0].involvesToken(WETH[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
    !(typeof output === 'undefined' || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output === ETHER && pairs[pairs.length - 1].involvesToken(WETH[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
    var path = [input instanceof Token ? input : WETH[pairs[0].chainId]];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PATH') : invariant(false) : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output != null ? output : path[path.length - 1];
  }

  _createClass(Route, [{
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

var _100_PERCENT = /*#__PURE__*/new Fraction(_100);

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    return _Fraction.apply(this, arguments) || this;
  }

  var _proto = Percent.prototype;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var exactQuote = midPrice.raw.multiply(inputAmount.raw); // calculate slippage := (exactQuote - outputAmount) / exactQuote

  var slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
} // comparator function that allows sorting trades by their output amounts, in decreasing order, and then input amounts
// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first


function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !currencyEquals(a.inputAmount.currency, b.inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT_CURRENCY') : invariant(false) : void 0;
  !currencyEquals(a.outputAmount.currency, b.outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT_CURRENCY') : invariant(false) : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Given a currency amount and a chain ID, returns the equivalent representation as the token amount.
 * In other words, if the currency is ETHER, returns the WETH token amount for the given chain. Otherwise, returns
 * the input currency amount.
 */

function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount) return currencyAmount;
  if (currencyAmount.currency === ETHER) return new TokenAmount(WETH[chainId], currencyAmount.raw);
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}

function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency === ETHER) return WETH[chainId];
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */


var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType) {
    var amounts = new Array(route.path.length);
    var nextPairs = new Array(route.pairs.length);

    if (tradeType === TradeType.EXACT_INPUT) {
      !currencyEquals(amount.currency, route.input) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
      amounts[0] = wrappedAmount(amount, route.chainId);

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(amounts[i]),
            outputAmount = _pair$getOutputAmount[0],
            nextPair = _pair$getOutputAmount[1];

        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      !currencyEquals(amount.currency, route.output) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(amounts[_i]),
            inputAmount = _pair$getInputAmount[0],
            _nextPair = _pair$getInputAmount[1];

        amounts[_i - 1] = inputAmount;
        nextPairs[_i - 1] = _nextPair;
      }
    }

    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === TradeType.EXACT_INPUT ? amount : route.input === ETHER ? CurrencyAmount.ether(amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === TradeType.EXACT_OUTPUT ? amount : route.output === ETHER ? CurrencyAmount.ether(amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw);
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.ether(slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, // used in recursion.
  currentPairs, originalAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountIn === void 0) {
      originalAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountIn === currencyAmountIn || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountIn = wrappedAmount(currencyAmountIn, chainId);
    var tokenOut = wrappedCurrency(currencyOut, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), originalAmountIn.currency, currencyOut), originalAmountIn, TradeType.EXACT_INPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, amountOut, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), originalAmountIn, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, // used in recursion.
  currentPairs, originalAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountOut === void 0) {
      originalAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountOut === currencyAmountOut || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountOut = wrappedAmount(currencyAmountOut, chainId);
    var tokenIn = wrappedCurrency(currencyIn, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, originalAmountOut.currency), originalAmountOut, TradeType.EXACT_OUTPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, amountIn, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), originalAmountOut, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var WalletWrapper = /*#__PURE__*/function () {
  function WalletWrapper(wallet) {
    this.wallet = wallet;
  }

  var _proto = WalletWrapper.prototype;

  _proto.getAddress = /*#__PURE__*/function () {
    var _getAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.wallet.getAddress();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getAddress() {
      return _getAddress.apply(this, arguments);
    }

    return getAddress;
  }();

  _proto.getBalance = /*#__PURE__*/function () {
    var _getBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.wallet.getBalance();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getBalance() {
      return _getBalance.apply(this, arguments);
    }

    return getBalance;
  }();

  _proto.getSignerOrProvider = function getSignerOrProvider() {
    return this.wallet;
  };

  _proto.getGasPrice = /*#__PURE__*/function () {
    var _getGasPrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.wallet.getGasPrice();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getGasPrice() {
      return _getGasPrice.apply(this, arguments);
    }

    return getGasPrice;
  }();

  return WalletWrapper;
}();
var Web3WalletWrapper = /*#__PURE__*/function () {
  function Web3WalletWrapper(provider, address) {
    this.provider = provider;
    this.address = address;
  }

  var _proto2 = Web3WalletWrapper.prototype;

  _proto2.getAddress = /*#__PURE__*/function () {
    var _getAddress2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.address);

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getAddress() {
      return _getAddress2.apply(this, arguments);
    }

    return getAddress;
  }();

  _proto2.getBalance = /*#__PURE__*/function () {
    var _getBalance2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.provider.getBalance(this.address);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getBalance() {
      return _getBalance2.apply(this, arguments);
    }

    return getBalance;
  }();

  _proto2.getSignerOrProvider = function getSignerOrProvider() {
    return this.provider.getSigner();
  };

  _proto2.getGasPrice = /*#__PURE__*/function () {
    var _getGasPrice2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6() {
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.provider.getGasPrice();

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getGasPrice() {
      return _getGasPrice2.apply(this, arguments);
    }

    return getGasPrice;
  }();

  return Web3WalletWrapper;
}();

function toHex(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}

var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency === ETHER;
    var etherOut = trade.outputAmount.currency === ETHER; // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ETHER_IN_OUT') : invariant(false) : void 0;
    !(options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapETHForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

var ERC20 = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var _TOKEN_DECIMALS_CACHE;
var TOKEN_DECIMALS_CACHE = (_TOKEN_DECIMALS_CACHE = {}, _TOKEN_DECIMALS_CACHE[ChainId.BSCMAINNET] = {
  '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': 9 // DGD

}, _TOKEN_DECIMALS_CACHE);
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */

var Fetcher = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Fetcher() {}
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */


  Fetcher.fetchTokenData =
  /*#__PURE__*/
  function () {
    var _fetchTokenData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(chainId, address, provider, symbol, name) {
      var _TOKEN_DECIMALS_CACHE2, _TOKEN_DECIMALS_CACHE3;

      var parsedDecimals;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (provider === void 0) {
                provider = /*#__PURE__*/getDefaultProvider( /*#__PURE__*/getNetwork(chainId));
              }

              if (!(typeof ((_TOKEN_DECIMALS_CACHE2 = TOKEN_DECIMALS_CACHE) == null ? void 0 : (_TOKEN_DECIMALS_CACHE3 = _TOKEN_DECIMALS_CACHE2[chainId]) == null ? void 0 : _TOKEN_DECIMALS_CACHE3[address]) === 'number')) {
                _context.next = 5;
                break;
              }

              _context.t0 = TOKEN_DECIMALS_CACHE[chainId][address];
              _context.next = 8;
              break;

            case 5:
              _context.next = 7;
              return new Contract(address, ERC20, provider).decimals().then(function (decimals) {
                var _TOKEN_DECIMALS_CACHE4, _extends2, _extends3;

                TOKEN_DECIMALS_CACHE = _extends({}, TOKEN_DECIMALS_CACHE, (_extends3 = {}, _extends3[chainId] = _extends({}, (_TOKEN_DECIMALS_CACHE4 = TOKEN_DECIMALS_CACHE) == null ? void 0 : _TOKEN_DECIMALS_CACHE4[chainId], (_extends2 = {}, _extends2[address] = decimals, _extends2)), _extends3));
                return decimals;
              });

            case 7:
              _context.t0 = _context.sent;

            case 8:
              parsedDecimals = _context.t0;
              return _context.abrupt("return", new Token(chainId, address, parsedDecimals, symbol, name));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchTokenData(_x, _x2, _x3, _x4, _x5) {
      return _fetchTokenData.apply(this, arguments);
    }

    return fetchTokenData;
  }()
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  ;

  Fetcher.fetchPairData =
  /*#__PURE__*/
  function () {
    var _fetchPairData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(tokenA, tokenB, provider, factoryAddress, initCodeHash) {
      var address, _yield$Contract$getRe, reserves0, reserves1, balances;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (provider === void 0) {
                provider = /*#__PURE__*/getDefaultProvider( /*#__PURE__*/getNetwork(tokenA.chainId));
              }

              if (factoryAddress === void 0) {
                factoryAddress = FACTORY_ADDRESS;
              }

              if (initCodeHash === void 0) {
                initCodeHash = INIT_CODE_HASH;
              }

              !(tokenA.chainId === tokenB.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
              address = Pair.getAddress(tokenA, tokenB, factoryAddress, initCodeHash);
              _context2.next = 7;
              return new Contract(address, IUniswapV2Pair.abi, provider).getReserves();

            case 7:
              _yield$Contract$getRe = _context2.sent;
              reserves0 = _yield$Contract$getRe[0];
              reserves1 = _yield$Contract$getRe[1];
              balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
              return _context2.abrupt("return", new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1])));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function fetchPairData(_x6, _x7, _x8, _x9, _x10) {
      return _fetchPairData.apply(this, arguments);
    }

    return fetchPairData;
  }();

  return Fetcher;
}();

var ChainConfig = /*#__PURE__*/function () {
  function ChainConfig(chainId, rpcUrl, multicallAddress, newHarborRouterAddress, scanApiAddress, scanApiKey) {
    this.chainId = ChainId.BSCMAINNET;
    this.chainId = chainId;
    this.rpcUrl = rpcUrl;
    this.multicallAddress = multicallAddress;
    this.newHarborRouterAddress = newHarborRouterAddress;
    this.scanApiAddress = scanApiAddress;
    this.scanApiKKey = scanApiKey;
  }

  ChainConfig.getChainConfig = function getChainConfig(chainId) {
    switch (chainId) {
      case ChainId.BSCMAINNET:
        return new ChainConfig(chainId, "https://bsc-dataseed4.ninicoin.io", "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb", // "0xE63C03b74A3726c63adE7CdF32EeBeb557481317",
        // "0x21465c61d6114eA976F6F96B413aB6a035386523",
        // "0x8d4cb4063d44e1fa7b070acb7fcb89bfcf48c91d",
        // "0x3960E4FA3C0D79dCc6e33B4Fc9F1C1C88aB7b849",
        "0x4555C48f963e50905ad0f1D04087FdD58e083Efb", "https://api.bscscan.com/api", "3V7QJGERW2R8X4TGHABHGXZGEYR9E4CC9G");

      case ChainId.BSCTESTNET:
        return new ChainConfig(chainId, "https://data-seed-prebsc-1-s1.binance.org:8545", "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A", "0xe8d52cf7f86f8Fd4790D0A09cA4AED736E915697");

      case ChainId.HECOMAINNET:
        return new ChainConfig(chainId, "https://http-mainnet.hecochain.com", "0xdf457735ad205b4ce80dc0c7c702189d340ff7de", // "0x33748d22F127481D5c794B532136b3498A9bdB68",
        // "0x0ADE7cfe1ce0fa994bf73b6d2926941eC31E1D81",
        // "0x8d4CB4063D44E1Fa7B070ACb7fcb89BFcf48c91D",
        // "0xa2Ea3274B893B1b14DDf908DAf49d87cb63f4A7d",
        // "0x3960E4FA3C0D79dCc6e33B4Fc9F1C1C88aB7b849",
        // "0x7Db606416a7A36396Be883CD59cA9f52f491bf36",
        // "0x1CE0b2740276f2f910a9beE1bCFE1227f536a134",
        "0x4108A7ED3D451De24b759D30D5377D909621757b", "https://api.hecoinfo.com/api");
    }
  };

  return ChainConfig;
}();

var ProviderUtil = /*#__PURE__*/function () {
  function ProviderUtil() {}

  // public static readonly jsonRPCProvider:JsonRpcProvider=new JsonRpcProvider(NETWORK_URL);
  ProviderUtil.getMultiCallProvider = function getMultiCallProvider(chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    setMulticallAddress(chainId, ChainConfig.getChainConfig(chainId).multicallAddress);
    return new Provider(ProviderUtil.getJsonRPCProvider(chainId));
  };

  ProviderUtil.getJsonRPCProvider = function getJsonRPCProvider(chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    return new JsonRpcProvider(ChainConfig.getChainConfig(chainId).rpcUrl);
  };

  return ProviderUtil;
}();

var name = "newharbor";
var timestamp = "2020-08-25T15:41:29.665Z";
var version = {
	major: 1,
	minor: 3,
	patch: 1
};
var tags = {
};
var logoURI = "/images/coins/wbnb.png";
var keywords = [
	"newharbor",
	"default"
];
var tokens = [
	{
		name: "WBNB Token",
		symbol: "WBNB",
		address: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
		chainId: 97,
		decimals: 18,
		logoURI: "/images/coins/BUSD.png"
	},
	{
		name: "Binance USD",
		symbol: "BUSD",
		address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
		chainId: 97,
		decimals: 18,
		logoURI: "/images/coins/BUSD.png"
	},
	{
		name: "USDT",
		symbol: "USDT",
		address: "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd",
		chainId: 97,
		decimals: 18,
		logoURI: "/images/coins/USDT.png"
	},
	{
		name: "ETH",
		symbol: "ETH",
		address: "0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378",
		chainId: 97,
		decimals: 18,
		logoURI: "/images/coins/ETH.png"
	},
	{
		name: "LP3 Token",
		symbol: "LP3",
		address: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
		chainId: 97,
		decimals: 18,
		logoURI: "/images/coins/ETH.png"
	},
	{
		name: "WBNB Token",
		symbol: "WBNB",
		address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Bakery Token",
		symbol: "BAKE",
		address: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/bake.png"
	},
	{
		name: "BUSD Token",
		symbol: "BUSD",
		address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/BUSD.png"
	},
	{
		name: "Ethereum Token",
		symbol: "ETH",
		address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/ETH.png"
	},
	{
		name: "BTCB Token",
		symbol: "BTCB",
		address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/BTC-icon.png"
	},
	{
		name: "BAND Protocol Token",
		symbol: "BAND",
		address: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/band.png"
	},
	{
		name: "EOS Token",
		symbol: "EOS",
		address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/eos.png"
	},
	{
		name: "Tether USD",
		symbol: "USDT",
		address: "0x55d398326f99059ff775485246999027b3197955",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/USDT-icon.png"
	},
	{
		name: "XRP Token",
		symbol: "XRP",
		address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/XRP-icon.png"
	},
	{
		name: "Bitcoin Cash Token",
		symbol: "BCH",
		address: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/BCH-icon.png"
	},
	{
		name: "Litecoin Token",
		symbol: "LTC",
		address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/LTC-icon.png"
	},
	{
		name: "Cardano Token",
		symbol: "ADA",
		address: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Cosmos Token",
		symbol: "ATOM",
		address: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Tezos Token",
		symbol: "XTZ",
		address: "0x16939ef78684453bfdfb47825f8a5f714f12623a",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Ontology Token",
		symbol: "ONT",
		address: "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Zcash Token",
		symbol: "ZEC",
		address: "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Dai Token",
		symbol: "DAI",
		address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/DAI-icon.png"
	},
	{
		name: "YFII.finance Token",
		symbol: "YFII",
		address: "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Cream",
		symbol: "CREAM",
		address: "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Prometeus",
		symbol: "PROM",
		address: "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
		chainId: 56,
		decimals: 18
	},
	{
		name: "CanYaCoin",
		symbol: "CAN",
		address: "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Polkadot Token",
		symbol: "DOT",
		address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
		chainId: 56,
		decimals: 18
	},
	{
		name: "PancakeSwap Token",
		symbol: "CAKE",
		address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Streamity",
		symbol: "STM",
		address: "0x90df11a8cce420675e73922419e3f4f3fe13cccb",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Ankr",
		symbol: "ANKR",
		address: "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
		chainId: 56,
		decimals: 18
	},
	{
		name: "ChainLink Token",
		symbol: "LINK",
		address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Burger Swap",
		symbol: "BURGER",
		address: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Dice.finance Token",
		symbol: "DICE",
		address: "0x748ad98b14c814b28812eb42ad219c8672909879",
		chainId: 56,
		decimals: 18
	},
	{
		name: "JNTR/b",
		symbol: "JNTR/b",
		address: "0x3c037c4c2296f280bb318d725d0b454b76c199b9",
		chainId: 56,
		decimals: 18
	},
	{
		name: "SPARTAN PROTOCOL TOKEN",
		symbol: "SPART",
		address: "0xe4ae305ebe1abe663f261bc00534067c80ad677c",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Trust Wallet",
		symbol: "TWT",
		address: "0x4b0f1812e5df2a09796481ff14017e6005508003",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Venus",
		symbol: "XVS",
		address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Beer Garden",
		symbol: "Beer",
		address: "0xbb8db5e17bbe9c90da8e3445e335b82d7cc53575",
		chainId: 56,
		decimals: 18
	},
	{
		name: "AlphaToken",
		symbol: "ALPHA",
		address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Beefy.finance",
		symbol: "BIFI",
		address: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
		chainId: 56,
		decimals: 18
	},
	{
		name: "yearn.finance",
		symbol: "YFI",
		address: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Uniswap",
		symbol: "UNI",
		address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
		chainId: 56,
		decimals: 18
	},
	{
		name: "fry.world",
		symbol: "FRIES",
		address: "0x393B312C01048b3ed2720bF1B090084C09e408A1",
		chainId: 56,
		decimals: 18
	},
	{
		name: "StableXSwap",
		symbol: "STAX",
		address: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
		chainId: 56,
		decimals: 18,
		logoURI: "/images/coins/STAX.png"
	},
	{
		name: "Filecoin",
		symbol: "FIL",
		address: "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
		chainId: 56,
		decimals: 18
	},
	{
		name: "KAVA",
		symbol: "KAVA",
		address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035",
		chainId: 56,
		decimals: 6
	},
	{
		name: "USDX",
		symbol: "USDX",
		address: "0x1203355742e76875154c0d13eb81dcd7711dc7d9",
		chainId: 56,
		decimals: 6
	},
	{
		name: "Injective Protocol",
		symbol: "INJ",
		address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Swipe",
		symbol: "SXP",
		address: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Binance-Peg USD Coin",
		symbol: "USDC",
		address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
		chainId: 56,
		decimals: 18
	},
	{
		name: "CertiK Token",
		symbol: "CTK",
		address: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
		chainId: 56,
		decimals: 6
	},
	{
		name: "NAR Token",
		symbol: "NAR",
		address: "0xa1303e6199b319a891b79685f0537d289af1fc83",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Nyanswop Token",
		symbol: "NYA",
		address: "0xbfa0841f7a90c4ce6643f651756ee340991f99d5",
		chainId: 56,
		decimals: 18
	},
	{
		name: "DANGO",
		symbol: "DANGO",
		address: "0x0957c57c9eb7744850dcc95db5a06ed4a246236e",
		chainId: 56,
		decimals: 6
	},
	{
		name: "HARD",
		symbol: "HARD",
		address: "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
		chainId: 56,
		decimals: 6
	},
	{
		name: "ROOBEE",
		symbol: "bROOBEE",
		address: "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Unifi Token",
		symbol: "UNFI",
		address: "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
		chainId: 56,
		decimals: 18
	},
	{
		name: "BLINk",
		symbol: "BLK",
		address: "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
		chainId: 56,
		decimals: 6
	},
	{
		name: "QUSD Stablecoin",
		symbol: "QUSD",
		address: "0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Qian Governance Token",
		symbol: "KUN",
		address: "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584",
		chainId: 56,
		decimals: 18
	},
	{
		name: "VAI Stablecoin",
		symbol: "VAI",
		address: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Juventus",
		symbol: "JUV",
		address: "0xc40c9a843e1c6d01b7578284a9028854f6683b1b",
		chainId: 56,
		decimals: 2
	},
	{
		name: "Paris Saint-Germain",
		symbol: "PSG",
		address: "0xbc5609612b7c44bef426de600b5fd1379db2ecf1",
		chainId: 56,
		decimals: 2
	},
	{
		name: "Ditto",
		symbol: "DITTO",
		address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
		chainId: 56,
		decimals: 9
	},
	{
		name: "Math",
		symbol: "MATH",
		address: "0xf218184af829cf2b0019f8e6f0b2423498a36983",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Fuel",
		symbol: "FUEL",
		address: "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Nuls",
		symbol: "NULS",
		address: "0x8cd6e29d3686d24d3c2018cee54621ea0f89313b",
		chainId: 56,
		decimals: 8
	},
	{
		name: "NerveNetwork",
		symbol: "NVT",
		address: "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
		chainId: 56,
		decimals: 8
	},
	{
		name: "Reef",
		symbol: "REEF",
		address: "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
		chainId: 56,
		decimals: 18
	},
	{
		name: "OG",
		symbol: "OG",
		address: "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c",
		chainId: 56,
		decimals: 2
	},
	{
		name: "Atletico de Madrid",
		symbol: "ATM",
		address: "0x25e9d05365c867e59c1904e7463af9f312296f9e",
		chainId: 56,
		decimals: 2
	},
	{
		name: "AS Roma",
		symbol: "ASR",
		address: "0x80d5f92c2c8c682070c95495313ddb680b267320",
		chainId: 56,
		decimals: 2
	},
	{
		name: "AllianceBlock",
		symbol: "bALBT",
		address: "0x72faa679e1008ad8382959ff48e392042a8b06f7",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Tenet",
		symbol: "TEN",
		address: "0xdff8cb622790b7f92686c722b02cab55592f152c",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Helmet.insure",
		symbol: "Helmet",
		address: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
		chainId: 56,
		decimals: 18
	},
	{
		name: "BSCEX",
		symbol: "BSCX",
		address: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Standard BTC Hashrate Token",
		symbol: "BTCST",
		address: "0x78650b139471520656b9e7aa7a5e9276814a38e9",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Frontier Token",
		symbol: "FRONT",
		address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Soteria",
		symbol: "wSOTE",
		address: "0x541e619858737031a1244a5d0cd47e5ef480342c",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Mirror TSLA Token",
		symbol: "mTSLA",
		address: "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Mirror AMZN Token",
		symbol: "mAMZN",
		address: "0x3947B992DC0147D2D89dF0392213781b04B25075",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Mirror NFLX Token",
		symbol: "mNFLX",
		address: "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Mirror GOOGL Token",
		symbol: "mGOOGL",
		address: "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
		chainId: 56,
		decimals: 18
	},
	{
		name: "UST Token",
		symbol: "UST",
		address: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
		chainId: 56,
		decimals: 18
	},
	{
		name: "JULb",
		symbol: "JULb",
		address: "0x32dFFc3fE8E3EF3571bF8a72c0d0015C5373f41D",
		chainId: 56,
		decimals: 18
	},
	{
		name: "JulD",
		symbol: "JulD",
		address: "0x5A41F637C3f7553dBa6dDC2D3cA92641096577ea",
		chainId: 56,
		decimals: 18
	},
	{
		name: "FREE coin BSC",
		symbol: "FREE",
		address: "0x12e34cDf6A031a10FE241864c32fB03a4FDaD739",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Pet Token",
		symbol: "PET",
		address: "0x4d4e595d643dc61EA7FCbF12e4b1AAA39f9975B8",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Weapon Token",
		symbol: "WEAPON",
		address: "0x3664d30A612824617e3Cf6935d6c762c8B476eDA",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Fruit Token",
		symbol: "FRUIT",
		address: "0x9CF518B83804d30Fb007e17757D317D9B03619a5",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Binance Beacon ETH",
		symbol: "BETH",
		address: "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
		chainId: 56,
		decimals: 18
	},
	{
		name: "BNB48 Club Token",
		symbol: "KOGE",
		address: "0xe6DF05CE8C8301223373CF5B969AFCb1498c5528",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Cross Finance",
		symbol: "CRP",
		address: "0x1Ad8D89074AFA789A027B9a31d0bd14e254711D0",
		chainId: 56,
		decimals: 18
	},
	{
		name: "USDY",
		symbol: "USDY",
		address: "0xE955cA3c79Da781bF3e3Da48F7a4A487F54bB1D4",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Basic Attention Token",
		symbol: "BAT",
		address: "0x101d82428437127bF1608F699CD651e6Abf9766E",
		chainId: 56,
		decimals: 18
	},
	{
		name: "BSC FARM",
		symbol: "BSC",
		address: "0x17bc015607Fdf93e7C949e9Ca22f96907cFBeF88",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Juggernaut DeFi",
		symbol: "JGN",
		address: "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Coke Token",
		symbol: "COKE",
		address: "0x0950c852436B3e25e6fe798a74489A4686B18159",
		chainId: 56,
		decimals: 18
	},
	{
		name: "THUGS",
		symbol: "THUGS",
		address: "0xE10e9822A5de22F8761919310DDA35CD997d63c0",
		chainId: 56,
		decimals: 18
	},
	{
		name: "DrugsV2",
		symbol: "DRUGS",
		address: "0x339550404Ca4d831D12B1b2e4768869997390010",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Advocate Coin",
		symbol: "ACC",
		address: "0x4DF1E1164fcF7Bf4C70861543A672994Dc574c30",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Club Hoes V2",
		symbol: "HoesV2",
		address: "0x25410971f3BDbe52B2aEe818491dA7d51FeA9154",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Club Hoes",
		symbol: "HOES",
		address: "0x8191113581cBfa3fcdC6B0d2e6F84753D4850080",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Billion Happiness",
		symbol: "BHC",
		address: "0x6fd7c98458a943f469E1Cf4eA85B173f5Cd342F4",
		chainId: 56,
		decimals: 18
	},
	{
		name: "BSCswap Governance Token V2",
		symbol: "BSWAP",
		address: "0xf388Ee045CAb30321db3fb69EAb7DfB0c20f10EC",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Valknut Finance",
		symbol: "VNF",
		address: "0x3D9bF3fDDc3513bf103a70E9B499E99b99373DD2",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Binch.Finance",
		symbol: "BINCH",
		address: "0x31656Cc4C6AD29648e16cE0Eb3F424F73a9372D8",
		chainId: 56,
		decimals: 18
	},
	{
		name: "SugarToken",
		symbol: "SGR",
		address: "0x32a3cBB5e0c65e5C03F8bd617Eecec1C46f414AD",
		chainId: 56,
		decimals: 18
	},
	{
		name: "bDollar",
		symbol: "BDO",
		address: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
		chainId: 56,
		decimals: 18
	},
	{
		name: "SodaToken",
		symbol: "SODA",
		address: "0xf59418cF51326C1BAB26fA96BD33eB968ef7257F",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Litentry",
		symbol: "LIT",
		address: "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
		chainId: 56,
		decimals: 18
	},
	{
		name: "zSeedToken",
		symbol: "zSEED",
		address: "0x5cd50Aae14E14B3fdF3fF13c7A40e8cf5ae8b0A5",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Ape like banana",
		symbol: "BANANA",
		address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95",
		chainId: 56,
		decimals: 18
	},
	{
		name: "Ice Cream",
		symbol: "ICREAM",
		address: "0x58f651DDE51CAa87c4111B16ee0A6Fab061Ee564",
		chainId: 56,
		decimals: 18
	},
	{
		name: "POKE",
		symbol: "POKE",
		address: "0xcdAd3683335a4a96d2c437Dd4513b061E4AEc4ff",
		chainId: 56,
		decimals: 18
	},
	{
		name: "LAVA",
		symbol: "LAVA",
		address: "0x56f95662e71f30b333b456439248c6de589082a4",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/LAVA.png"
	},
	{
		name: "USDT",
		symbol: "USDT",
		address: "0xa71edc38d189767582c38a3145b5873052c3e47a",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/USDT.png"
	},
	{
		name: "HUSD",
		symbol: "HUSD",
		address: "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
		chainId: 128,
		decimals: 8,
		logoURI: "/images/coins/HUSD.png"
	},
	{
		name: "ETH",
		symbol: "ETH",
		address: "0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/ETH.png"
	},
	{
		name: "HBTC",
		symbol: "HBTC",
		address: "0x66a79d23e58475d2738179ca52cd0b41d73f0bea",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HBTC.png"
	},
	{
		name: "WHT Token",
		symbol: "WHT",
		address: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/coins/WHT.png"
	},
	{
		name: "HPT",
		symbol: "HPT",
		address: "0xe499ef4616993730ced0f31fa2703b92b50bb536",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HPT.png"
	},
	{
		name: "UNI",
		symbol: "UNI",
		address: "0x22c54ce8321a4015740ee1109d9cbc25815c46e6",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/UNI.png"
	},
	{
		name: "SNX",
		symbol: "SNX",
		address: "0x777850281719d5a96c29812ab72f822e0e09f3da",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/SNX.png"
	},
	{
		name: "AAVE",
		symbol: "AAVE",
		address: "0x202b4936fe1a82a4965220860ae46d7d3939bb25",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/AAVE.png"
	},
	{
		name: "HLTC",
		symbol: "HLTC",
		address: "0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HLTC.png"
	},
	{
		name: "HDOT",
		symbol: "HDOT",
		address: "0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HDOT.png"
	},
	{
		name: "HFIL",
		symbol: "HFIL",
		address: "0xae3a768f9ab104c69a7cd6041fe16ffa235d1810",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HFIL.png"
	},
	{
		name: "HBCH",
		symbol: "HBCH",
		address: "0xef3cebd77e0c52cb6f60875d9306397b5caca375",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HBCH.png"
	},
	{
		name: "FILDA",
		symbol: "FILDA",
		address: "0xe36ffd17b2661eb57144ceaef942d95295e637f0",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/FILDA.png"
	},
	{
		name: "SKM",
		symbol: "SKM",
		address: "0x96674f8da3f9c6acb4a56b393af9a490d70d16d0",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/SKM.png"
	},
	{
		name: "BAL",
		symbol: "BAL",
		address: "0x045de15ca76e76426e8fc7cba8392a3138078d0f",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/BAL.png"
	},
	{
		name: "BXS",
		symbol: "BXS",
		address: "0xbe0e001a5553f4421dc250a20bbdab0e735495e3",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/BXS.png"
	},
	{
		name: "HFI",
		symbol: "HFI",
		address: "0x98fc3b60ed4a504f588342a53746405e355f9347",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/HFI.png"
	},
	{
		name: "LINK",
		symbol: "LINK",
		address: "0x9e004545c59d359f6b7bfb06a26390b087717b42",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/LINK.png"
	},
	{
		name: "MDX",
		symbol: "MDX",
		address: "0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/MDX.png"
	},
	{
		name: "SVLN2",
		symbol: "SVLN2",
		address: "0x4e252342cf35ff02c4cca9bc655129f5b4a2f901",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/SVLN2.png"
	},
	{
		name: "SOVI",
		symbol: "SOVI",
		address: "0x49e16563a2ba84e560780946f0fb73a8b32c841e",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/SOVI.png"
	},
	{
		name: "BEE",
		symbol: "BEE",
		address: "0xB1F80844a1B84c61ab80CafD88B1f8c09f9342e1",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/BEE.png"
	},
	{
		name: "REC",
		symbol: "REC",
		address: "0xb934895F338517555035746b5A5C0e2f69EdA3Dc",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/REC.png"
	},
	{
		name: "RES",
		symbol: "RES",
		address: "0x6F0cbF52dE80FF546b2e5038CBC29C36416a33CF",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/RES.png"
	},
	{
		name: "GENE",
		symbol: "GENE",
		address: "0x2cfa849e8506910b2564afe5bdef33ba66c730aa",
		chainId: 128,
		decimals: 18,
		logoURI: "/images/coins/GENE.png"
	}
];
var defaultTokenJson = {
	name: name,
	timestamp: timestamp,
	version: version,
	tags: tags,
	logoURI: logoURI,
	keywords: keywords,
	tokens: tokens
};

var TokenList = /*#__PURE__*/function () {
  function TokenList() {}

  TokenList.isETH = function isETH(token) {
    if (token instanceof Token) {
      return token.isETH();
    } else {
      return token == Currency.ETHER;
    }
  };

  TokenList.getAllTokenList = function getAllTokenList(chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    var list = defaultTokenJson.tokens;
    var tokens = list.map(function (tokenInfo) {
      return new Token(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name, tokenInfo.logoURI);
    }).filter(function (x) {
      return x.chainId == chainId;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(this.additionalTokenList), _step; !(_step = _iterator()).done;) {
      var tokenInfo = _step.value;
      var token = new Token(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name, tokenInfo.logoURI);

      if (tokenInfo.chainId == chainId && !TokenList.exists(token, tokens)) {
        tokens.push(token);
      }
    }

    return tokens;
  };

  TokenList.exists = function exists(token, tokenList) {
    return tokenList.filter(function (t) {
      return t.equals(token);
    }).length > 0;
  };

  TokenList.addAdditionalTokenList = function addAdditionalTokenList(tokenList) {
    this.additionalTokenList = this.additionalTokenList.concat(tokenList);
  };

  TokenList.getToken = function getToken(address, chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    var temp = TokenList.getAllTokenList(chainId).filter(function (x) {
      return x.address.toLowerCase() == address.toLowerCase();
    });
    return temp.length > 0 ? temp[0] : null;
  };

  TokenList.getTokenBySymbol = function getTokenBySymbol(symbol, chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    var temp = TokenList.getAllTokenList(chainId).filter(function (x) {
      var _x$symbol;

      return ((_x$symbol = x.symbol) == null ? void 0 : _x$symbol.toLowerCase()) == symbol.toLowerCase();
    });
    return temp.length > 0 ? temp[0] : null;
  };

  return TokenList;
}();
TokenList.DAI = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin');
TokenList.BUSD = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD');
TokenList.USDT = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD');
TokenList.EOS = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 18, 'EOS', 'EOS Token');
TokenList.DOT = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 18, 'DOT', 'Polkadot Token');
TokenList.ETH = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 18, 'ETH', 'Ethereum Token');
TokenList.WBNB = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB');
TokenList.FRIES = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x393b312c01048b3ed2720bf1b090084c09e408a1', 18, 'FRIES', 'fry.world');
TokenList.BURGER = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xae9269f27437f0fcbc232d39ec814844a51d6b8f', 18, 'BURGER', 'Burger Swap');
TokenList.BAI = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xaA8012a0Ea627767545a8E435C2A2BD51f60173D', 18, 'BAI', 'BAI Stablecoin');
TokenList.BAKE = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xe02df9e3e622debdd69fb838bb799e3f168902c5', 18, 'BAKE', 'Bakery Token');
TokenList.BTCB = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', 18, 'BTCB', 'BTCB Token');
TokenList.BAND = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18', 18, 'BAND', 'BAND Protocol Token');
TokenList.XRP = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', 18, 'XRP', 'XRP Token');
TokenList.BCH = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf', 18, 'BCH', 'Bitcoin Cash Token');
TokenList.LTC = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', 18, 'LTC', 'Litecoin Token');
TokenList.ADA = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', 18, 'ADA', 'Cardano Token');
TokenList.CAKE = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'CAKE', 'PancakeSwap Token');
TokenList.THUGS = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xE10e9822A5de22F8761919310DDA35CD997d63c0', 18, 'THUGS', 'THUGS');
TokenList.NYA = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xbfa0841f7a90c4ce6643f651756ee340991f99d5', 18, 'NYA', 'Nyanswop Token');
TokenList.TWT = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x4b0f1812e5df2a09796481ff14017e6005508003', 18, 'TWT', 'Trust Wallet');
TokenList.FUEL = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A', 18, 'FUEL', 'FUEL');
TokenList.QUSD = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E', 18, 'QUSD', 'QUSD Stablecoin');
TokenList.BANANA = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95', 18, 'BANANA', 'Ape like banana');
TokenList.ICREAM = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x58f651DDE51CAa87c4111B16ee0A6Fab061Ee564', 18, 'ICREAM', 'Ice Cream');
TokenList.USDC = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18, 'USDC', 'Binance-Peg USD Coin');
TokenList.KUN = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584', 18, 'KUN', 'Qian Governance Token');
TokenList.VAI = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7', 18, 'VAI', 'VAI');
TokenList.UST = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0x23396cF899Ca06c4472205fC903bDB4de249D6fC', 18, 'UST', 'UST');
TokenList.POKE = /*#__PURE__*/new Token(ChainId.BSCMAINNET, '0xcdAd3683335a4a96d2c437Dd4513b061E4AEc4ff', 18, 'POKE', 'POKE');
TokenList.WHT = /*#__PURE__*/new Token(ChainId.HECOMAINNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'WHT Token');
TokenList.HUSD = /*#__PURE__*/new Token(ChainId.HECOMAINNET, '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047', 8, 'HUSD', 'Heco USD');
TokenList.HUSDT = /*#__PURE__*/new Token(ChainId.HECOMAINNET, '0xa71EdC38d189767582C38A3145b5873052c3e47a', 18, 'USDT', 'Tether USD');
TokenList.HETH = /*#__PURE__*/new Token(ChainId.HECOMAINNET, '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd', 18, 'ETH', 'Ethereum Token');
TokenList.BUSD_BSC_TEST = /*#__PURE__*/new Token(ChainId.BSCTESTNET, '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', 18, 'BUSD', 'Binance USD');
TokenList.USDT_BSC_TEST = /*#__PURE__*/new Token(ChainId.BSCTESTNET, '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd', 18, 'USDT', 'Tether USD');
TokenList.ETH_BSC_TEST = /*#__PURE__*/new Token(ChainId.BSCTESTNET, '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378', 18, 'ETH', 'ETH');
TokenList.additionalTokenList = [];

var ONE_HUNDRED_PERCENT = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(10000), /*#__PURE__*/JSBI.BigInt(10000)); // 千5

var PERCENT_05 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(5), /*#__PURE__*/JSBI.BigInt(1000)); // 千2

var PERCENT_02 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(2), /*#__PURE__*/JSBI.BigInt(1000)); // 千25

var PERCENT_025 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(25), /*#__PURE__*/JSBI.BigInt(10000)); // 千3

var PERCENT_03 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(3), /*#__PURE__*/JSBI.BigInt(1000)); // 千35

var PERCENT_035 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(35), /*#__PURE__*/JSBI.BigInt(10000)); // 百2

var PERCENT_2 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(2), /*#__PURE__*/JSBI.BigInt(100)); // 百1

var PERCENT_1 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(1), /*#__PURE__*/JSBI.BigInt(100)); // 百3

var PERCENT_3 = /*#__PURE__*/new Percent( /*#__PURE__*/JSBI.BigInt(3), /*#__PURE__*/JSBI.BigInt(100));

var abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_factory",
				type: "address"
			},
			{
				internalType: "address",
				name: "_WBNB",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "WBNB",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountADesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountTokenDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityBNB",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountIn",
		outputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountOut",
		outputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsIn",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsOut",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveB",
				type: "uint256"
			}
		],
		name: "quote",
		outputs: [
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityBNB",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityBNBSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountBNB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityBNBWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBNBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountBNB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapBNBForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactBNBForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactBNBForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForBNB",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForBNBSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactBNB",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];
var IUniswapV2Router02ForBNB = {
	abi: abi
};

var abi$1 = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_factory",
				type: "address"
			},
			{
				internalType: "address",
				name: "_WHT",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "WHT",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountADesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountTokenDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHTMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityHT",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHT",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountIn",
		outputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountOut",
		outputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsIn",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsOut",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveB",
				type: "uint256"
			}
		],
		name: "quote",
		outputs: [
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHTMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityHT",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHT",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHTMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityHTSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountHT",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHTMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityHTWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHT",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountHTMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityHTWithPermitSupportingFeeOnTransferTokens",
		outputs: [
			{
				internalType: "uint256",
				name: "amountHT",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "approveMax",
				type: "bool"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "removeLiquidityWithPermit",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapHTForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactHTForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactHTForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForHT",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForHTSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactHT",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];
var IUniswapV2Router02ForHT = {
	abi: abi$1
};

var abi$2 = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "player",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		name: "AddLiquidity",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_oldOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_newOwner",
				type: "address"
			}
		],
		name: "OwnerChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "player",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		name: "RemoveLiquidity",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "receiver",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromToken",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "toToken",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "inAmount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "outAmount",
				type: "uint256"
			}
		],
		name: "SwapToken",
		type: "event"
	},
	{
		inputs: [
		],
		name: "CONFIG",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "DGAS",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "FACTORY",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "GOVERNANCE",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "PERCENT_DENOMINATOR",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "POOL",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "TRANSFER_LISTENER",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "WETH",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "_amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_amountB",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_liquidity",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amountTokenDesired",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "addLiquidityETH",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_newOwner",
				type: "address"
			}
		],
		name: "changeOwner",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			}
		],
		name: "existPair",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountIn",
		outputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "reserveOut",
				type: "uint256"
			}
		],
		name: "getAmountOut",
		outputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsIn",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			}
		],
		name: "getAmountsOut",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			}
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_DGAS",
				type: "address"
			},
			{
				internalType: "address",
				name: "_CONFIG",
				type: "address"
			},
			{
				internalType: "address",
				name: "_FACTORY",
				type: "address"
			},
			{
				internalType: "address",
				name: "_WETH",
				type: "address"
			},
			{
				internalType: "address",
				name: "_GOVERNANCE",
				type: "address"
			},
			{
				internalType: "address",
				name: "_TRANSFER_LISTENER",
				type: "address"
			},
			{
				internalType: "address",
				name: "_POOL",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "isPause",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "pair",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "address[]",
				name: "users",
				type: "address[]"
			}
		],
		name: "migrateLiquidity",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			}
		],
		name: "pairFor",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "pause",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenA",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenB",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountAMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountBMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidity",
		outputs: [
			{
				internalType: "uint256",
				name: "amountA",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountB",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountTokenMin",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETHMin",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "removeLiquidityETH",
		outputs: [
			{
				internalType: "uint256",
				name: "amountToken",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountETH",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "resume",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapETHForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactETHForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountIn",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountOutMin",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapExactTokensForTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			}
		],
		name: "swapPrecondition",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactETH",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amountOut",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amountInMax",
				type: "uint256"
			},
			{
				internalType: "address[]",
				name: "path",
				type: "address[]"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			}
		],
		name: "swapTokensForExactTokens",
		outputs: [
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "version",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	}
];
var IUniswapV2Router02ForBurger = {
	abi: abi$2
};

var abi$3 = [
	{
		name: "TokenExchange",
		inputs: [
			{
				type: "address",
				name: "buyer",
				indexed: true
			},
			{
				type: "int128",
				name: "sold_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_sold",
				indexed: false
			},
			{
				type: "int128",
				name: "bought_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_bought",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "TokenExchangeUnderlying",
		inputs: [
			{
				type: "address",
				name: "buyer",
				indexed: true
			},
			{
				type: "int128",
				name: "sold_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_sold",
				indexed: false
			},
			{
				type: "int128",
				name: "bought_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_bought",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "AddLiquidity",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[2]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[2]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "invariant",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidity",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[2]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[2]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidityOne",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256",
				name: "token_amount",
				indexed: false
			},
			{
				type: "uint256",
				name: "coin_amount",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidityImbalance",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[2]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[2]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "invariant",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "CommitNewAdmin",
		inputs: [
			{
				type: "uint256",
				name: "deadline",
				indexed: true
			},
			{
				type: "address",
				name: "admin",
				indexed: true
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "NewAdmin",
		inputs: [
			{
				type: "address",
				name: "admin",
				indexed: true
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "CommitNewFee",
		inputs: [
			{
				type: "uint256",
				name: "deadline",
				indexed: true
			},
			{
				type: "uint256",
				name: "fee",
				indexed: false
			},
			{
				type: "uint256",
				name: "admin_fee",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "NewFee",
		inputs: [
			{
				type: "uint256",
				name: "fee",
				indexed: false
			},
			{
				type: "uint256",
				name: "admin_fee",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RampA",
		inputs: [
			{
				type: "uint256",
				name: "old_A",
				indexed: false
			},
			{
				type: "uint256",
				name: "new_A",
				indexed: false
			},
			{
				type: "uint256",
				name: "initial_time",
				indexed: false
			},
			{
				type: "uint256",
				name: "future_time",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "StopRampA",
		inputs: [
			{
				type: "uint256",
				name: "A",
				indexed: false
			},
			{
				type: "uint256",
				name: "t",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_owner"
			},
			{
				type: "address[2]",
				name: "_coins"
			},
			{
				type: "address",
				name: "_pool_token"
			},
			{
				type: "address",
				name: "_base_pool"
			},
			{
				type: "uint256",
				name: "_A"
			},
			{
				type: "uint256",
				name: "_fee"
			},
			{
				type: "uint256",
				name: "_admin_fee"
			},
			{
				type: "address",
				name: "_admin_fee_address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		name: "A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "A_precise",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "get_virtual_price",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "calc_token_amount",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[2]",
				name: "amounts"
			},
			{
				type: "bool",
				name: "is_deposit"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "add_liquidity",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[2]",
				name: "amounts"
			},
			{
				type: "uint256",
				name: "min_mint_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "get_dy",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "get_dy_underlying",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "exchange",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			},
			{
				type: "uint256",
				name: "min_dy"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "exchange_underlying",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			},
			{
				type: "uint256",
				name: "min_dy"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "remove_liquidity",
		outputs: [
			{
				type: "uint256[2]",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_amount"
			},
			{
				type: "uint256[2]",
				name: "min_amounts"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "remove_liquidity_imbalance",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[2]",
				name: "amounts"
			},
			{
				type: "uint256",
				name: "max_burn_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "calc_withdraw_one_coin",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_token_amount"
			},
			{
				type: "int128",
				name: "i"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "remove_liquidity_one_coin",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_token_amount"
			},
			{
				type: "int128",
				name: "i"
			},
			{
				type: "uint256",
				name: "_min_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "ramp_A",
		outputs: [
		],
		inputs: [
			{
				type: "uint256",
				name: "_future_A"
			},
			{
				type: "uint256",
				name: "_future_time"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "stop_ramp_A",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "commit_new_fee",
		outputs: [
		],
		inputs: [
			{
				type: "uint256",
				name: "new_fee"
			},
			{
				type: "uint256",
				name: "new_admin_fee"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "apply_new_fee",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "revert_new_parameters",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "commit_transfer_ownership",
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_owner"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "apply_transfer_ownership",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "revert_transfer_ownership",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "admin_balances",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "i"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "withdraw_admin_fees",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "donate_admin_fees",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "kill_me",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "unkill_me",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "set_admin_fee_address",
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_admin_fee_address"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "coins",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "arg0"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "balances",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "arg0"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_fee_address",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "owner",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "token",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "base_pool",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "base_virtual_price",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "base_cache_updated",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "base_coins",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "arg0"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "initial_A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "initial_A_time",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_A_time",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_actions_deadline",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "transfer_ownership_deadline",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_admin_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_owner",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	}
];
var ACSPool = {
	abi: abi$3
};

var _DexFactory, _DexFactory2, _DexFactory3;

function toHex$1(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}

var ZERO_HEX$1 = '0x0';
var DexType;

(function (DexType) {
  DexType[DexType["UniswapV2"] = 0] = "UniswapV2";
  DexType[DexType["Acryptos"] = 1] = "Acryptos";
})(DexType || (DexType = {}));

var DexSubType;

(function (DexSubType) {
  DexSubType[DexSubType["UniswapV2ETH"] = 0] = "UniswapV2ETH";
  DexSubType[DexSubType["UniswapV2BNB"] = 1] = "UniswapV2BNB";
  DexSubType[DexSubType["UniswapV2BURGER"] = 2] = "UniswapV2BURGER";
  DexSubType[DexSubType["AcryptoS"] = 3] = "AcryptoS";
  DexSubType[DexSubType["UniswapV2HT"] = 4] = "UniswapV2HT";
})(DexSubType || (DexSubType = {}));

var DexFactory = /*#__PURE__*/function () {
  function DexFactory(name, factoryAddress, initCodeHash, baseFee, interToken, routerAddress, chainId, type, config, subType) {
    if (baseFee === void 0) {
      baseFee = PERCENT_03;
    }

    if (interToken === void 0) {
      interToken = DexFactory.BASE_INTER_TOKEN;
    }

    if (routerAddress === void 0) {
      routerAddress = "";
    }

    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    if (type === void 0) {
      type = DexType.UniswapV2;
    }

    if (config === void 0) {
      config = {};
    }

    if (subType === void 0) {
      subType = DexSubType.UniswapV2ETH;
    }

    this.config = {};
    this.subType = DexSubType.UniswapV2ETH;
    this.name = name;
    this.factoryAddress = factoryAddress;
    this.initCodeHash = initCodeHash;
    this.interToken = interToken;
    this.baseFee = baseFee;
    this.routerAddress = routerAddress;
    this.chainId = chainId;
    this.type = type;
    this.config = config;
    this.subType = subType;
  }

  DexFactory.getAllDexFactory = function getAllDexFactory(chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    switch (chainId) {
      case ChainId.BSCMAINNET:
        return [DexFactory.PANCAKESWAP, DexFactory.STREETSWAP, DexFactory.BURGERSWAP, DexFactory.BAKERYSWAP, DexFactory.BSCSWAP, DexFactory.JULSWAP, DexFactory.SOFTDRINKSWAP, DexFactory.SWAPKING, DexFactory.BAMBOOSWAP, DexFactory.STORMSWAP, DexFactory.NARWHALSWAP, DexFactory.NYANSWOP, DexFactory.CHEESESWAP, DexFactory.DANKSWAP, DexFactory.ICECREAMSWAP, DexFactory.PHOSWAP, DexFactory.APESWAP, DexFactory.ACS4QUSD, DexFactory.ACS4UST, DexFactory.ACS4VAI, DexFactory.VALUEDEFI, DexFactory.MDEX_BSC, DexFactory.PANCAKESWAPV2, DexFactory.BALLSWAP];

      case ChainId.HECOMAINNET:
        return [DexFactory.MDEX, DexFactory.LAVASWAP, DexFactory.DOGESWAP, DexFactory.MDIS, DexFactory.UNISAVE, DexFactory.PIPPISHRIMP, DexFactory.AVANTSPORT, DexFactory.COMPLUS, DexFactory.CIRCLESWAP, DexFactory.BXH];

      default:
        return [];
    }
  };

  DexFactory.getDexFactory = function getDexFactory(name, chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    var temp = this.getAllDexFactory(chainId).filter(function (x) {
      return x.name.toLowerCase() == name.toLowerCase();
    });
    return temp.length > 0 ? temp[0] : null;
  }
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  ;

  var _proto = DexFactory.prototype;

  _proto.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = TokenList.isETH(trade.inputAmount.currency);
    var etherOut = TokenList.isETH(trade.outputAmount.currency); // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ETHER_IN_OUT') : invariant(false) : void 0;
    !(options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex$1(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex$1(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          if (this.subType == DexSubType.UniswapV2ETH) {
            methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens';
          } else {
            if (this.subType == DexSubType.UniswapV2BURGER) {
              methodName = "swapExactETHForTokens";
            } else if (this.subType == DexSubType.UniswapV2HT) {
              methodName = useFeeOnTransfer ? 'swapExactHTForTokensSupportingFeeOnTransferTokens' : 'swapExactHTForTokens';
            } else {
              methodName = useFeeOnTransfer ? 'swapExactBNBForTokensSupportingFeeOnTransferTokens' : 'swapExactBNBForTokens';
            }
          } // (uint amountOutMin, address[] calldata path, address to, uint deadline)


          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          if (this.subType == DexSubType.UniswapV2ETH) {
            methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH';
          } else {
            if (this.subType == DexSubType.UniswapV2BURGER) {
              methodName = "swapExactTokensForETH";
            } else if (this.subType == DexSubType.UniswapV2HT) {
              methodName = useFeeOnTransfer ? 'swapExactTokensForHTSupportingFeeOnTransferTokens' : 'swapExactTokensForHT';
            } else {
              methodName = useFeeOnTransfer ? 'swapExactTokensForBNBSupportingFeeOnTransferTokens' : 'swapExactTokensForBNB';
            }
          } // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)


          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX$1;
        } else {
          if (this.subType == DexSubType.UniswapV2BURGER) {
            methodName = "swapExactTokensForTokens";
          } else {
            methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens';
          } // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)


          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX$1;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapETHForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX$1;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX$1;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  _proto.getRouter02Json = function getRouter02Json() {
    // if(this===DexFactory.PANCAKESWAP || this===DexFactory.SOFTDRINKSWAP || this===DexFactory.DANKSWAP || this===DexFactory.ICECREAMSWAP
    //   || this===DexFactory.PHOSWAP || this===DexFactory.APESWAP || this===DexFactory.LAVASWAP
    //   || this===DexFactory.MDEX || this===DexFactory.VALUEDEFI)
    if (this.subType == DexSubType.UniswapV2ETH) {
      return IUniswapV2Router02.abi;
    } else if (this.subType == DexSubType.UniswapV2BURGER) {
      return IUniswapV2Router02ForBurger.abi;
    } else if (this.type == DexType.Acryptos) {
      return ACSPool.abi;
    } else if (this.subType == DexSubType.UniswapV2HT) {
      return IUniswapV2Router02ForHT.abi;
    } else {
      return IUniswapV2Router02ForBNB.abi;
    }
  };

  _proto.fetchDexFactoryAddress = /*#__PURE__*/function () {
    var _fetchDexFactoryAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var contract, address;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contract = new Contract(this.routerAddress, this.getRouter02Json(), ProviderUtil.getJsonRPCProvider(this.chainId));
              _context.next = 3;
              return contract.factory();

            case 3:
              address = _context.sent;
              return _context.abrupt("return", address);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fetchDexFactoryAddress() {
      return _fetchDexFactoryAddress.apply(this, arguments);
    }

    return fetchDexFactoryAddress;
  }();

  _proto.isAutoSwapSupported = function isAutoSwapSupported() {
    return this.routerAddress != null && this.routerAddress != "";
  };

  _createClass(DexFactory, [{
    key: "key",
    get: function get() {
      return this.name + "|" + this.chainId + "|" + this.factoryAddress;
    }
  }]);

  return DexFactory;
}(); // 可用作交易作为中介的代币列表

DexFactory.BASE_INTER_TOKEN = [TokenList.WBNB, TokenList.DAI, TokenList.BUSD, TokenList.USDT, TokenList.EOS, TokenList.DOT];
DexFactory.PANCAKESWAP_TEST = /*#__PURE__*/new DexFactory("PancakeSwapTest", "0xBCfCcbde45cE874adCB698cC183deBcF17952812", "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66", PERCENT_02, DexFactory.BASE_INTER_TOKEN, "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F", ChainId.BSCTESTNET);
DexFactory.PANCAKESWAP = /*#__PURE__*/new DexFactory("PancakeSwap", "0xBCfCcbde45cE874adCB698cC183deBcF17952812", "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66", PERCENT_02, DexFactory.BASE_INTER_TOKEN, "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F");
DexFactory.PANCAKESWAPV2 = /*#__PURE__*/new DexFactory("PancakeSwapV2", "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5", PERCENT_025, DexFactory.BASE_INTER_TOKEN, "0x10ED43C718714eb63d5aA57B78B54704E256024E");
DexFactory.STREETSWAP = /*#__PURE__*/new DexFactory("StreetSwap", "0xaC653cE27E04C6ac565FD87F18128aD33ca03Ba2", "0x0b3961eeccfbf746d2d5c59ee3c8ae3a5dcf8dc9b0dfb6f89e1e8ca0b32b544b", PERCENT_03, [TokenList.BAI, TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0x3bc677674df90A9e5D741f28f6CA303357D0E4Ec", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.BURGERSWAP = /*#__PURE__*/new DexFactory("BurgerSwap", "0x8a1E9d3aEbBBd5bA2A64d3355A48dD5E9b511256", "0x9e2f28ebeccb25f4ead99c3f563bb6a201e2014a501d90dd0a9382bb1f5f4d0e", PERCENT_03, [TokenList.WBNB, TokenList.DAI, TokenList.BUSD, TokenList.USDT, TokenList.EOS, TokenList.DOT, TokenList.BURGER, TokenList.KUN], "0x42591f57f707739b95C5C486c014B525f19d70ca", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BURGER); // public static BURGERSWAP:DexFactory=new DexFactory("BurgerSwap",
//   "0x8a1E9d3aEbBBd5bA2A64d3355A48dD5E9b511256",
//   "0x9e2f28ebeccb25f4ead99c3f563bb6a201e2014a501d90dd0a9382bb1f5f4d0e",
//   PERCENT_03,
//   [TokenList.WBNB,TokenList.DAI, TokenList.BUSD, TokenList.USDT, TokenList.EOS, TokenList.DOT,TokenList.BURGER,TokenList.KUN],
//   "0xBf6527834dBB89cdC97A79FCD62E6c08B19F8ec0",
//   ChainId.BSCMAINNET,DexType.UniswapV2,{},DexSubType.UniswapV2BURGER
// );

DexFactory.BAKERYSWAP = /*#__PURE__*/new DexFactory("BakerySwap", "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7", "", PERCENT_03, [TokenList.BAI, TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.BSCSWAP = /*#__PURE__*/new DexFactory("BscSwap", "0xCe8fd65646F2a2a897755A1188C04aCe94D2B8D0", "", PERCENT_03, [TokenList.BAI, TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0xd954551853F55deb4Ae31407c423e67B1621424A", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.JULSWAP = /*#__PURE__*/new DexFactory("JulSwap", "0x553990F2CBA90272390f62C5BDb1681fFc899675", "0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0xbd67d157502A23309Db761c41965600c2Ec788b2", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.SOFTDRINKSWAP = /*#__PURE__*/new DexFactory("SoftDrinkSwap", "0xbcaE2c6cB2477fCcF75d0b0c4e6059Da00c4086a", "0xe0d22d674b32bd59ffdb3afe16b141394eaba6ffb2d2e8d8329eabde70d606a1", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0x7833f7d66248E4fbD705CD83DcC74288ff98d313", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.SWAPKING = /*#__PURE__*/new DexFactory("SwapKing", "0x14a19EDcb52bcb2c94FCf34c6bbAf28A0A328912", "", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0x3214ed1aefc609b22e02fc299618b40e8cf53e1d", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.BAMBOOSWAP = /*#__PURE__*/new DexFactory("BambooSwap", "0xD5Da6ea22EF4c69ED0bea50fc03Df6c561c5573F", "", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "007ace54baa6e841797f1e85d0170483775be47aea", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.STORMSWAP = /*#__PURE__*/new DexFactory("StormSwap", "0x720767Aea828a9730123679f3cE3DE01369b4575", "0x72bef119148700d90368b970fce6840043d95e856d185214cc25bfcf11c88825", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], undefined, ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.NARWHALSWAP = /*#__PURE__*/new DexFactory("NarwhalSwap", "0xB9fA84912FF2383a617d8b433E926Adf0Dd3FEa1", "0x8a30072f74333632d4cca8ddbfc623703398716ee4a6a93f48d4fc610b5b4cf4", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0xE85C6ab56A3422E7bAfd71e81Eb7d0f290646078", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.NYANSWOP = /*#__PURE__*/new DexFactory("NyanSwop", "0xF38D202723a9376C034eD5b8Cecb4EFe8f249836", "", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB, TokenList.NYA], "0xc946764369623F560a5962D32c1D16D45F1BD6fa", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.CHEESESWAP = /*#__PURE__*/new DexFactory("CheeseSwap", "0xdd538E4Fd1b69B7863E1F741213276A6Cf1EfB3B", "0xf52c5189a89e7ca2ef4f19f2798e3900fba7a316de7cef6c5a9446621ba86286", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0x3047799262d8D2EF41eD2a222205968bC9B0d895", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.DANKSWAP = /*#__PURE__*/new DexFactory("DankSwap", "0x087E6071164e6FDC0d931ad38CB38DbFA64B081c", "0x728f9c289f203c4ec32d66e925d2a908a382703d877ee77075ca8590a11dc811", PERCENT_02, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB, TokenList.EOS, TokenList.DOT], "0xc2e39a7F30AA635C65A8e58659aC8b4ccb9b0126", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.ICECREAMSWAP = /*#__PURE__*/new DexFactory("IcecreamSwap", "0xc8c9aB92AB70E954aF23c49f98aaCc1f94EBEeD7", "0x6d90885b4866ce73c2cb450002c250f386aa4cced6e7a07099a083e99fb5a796", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB, TokenList.ICREAM], "0x6728f3c8241C44Cc741C9553Ff7824ba9E932A4A", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.PHOSWAP = /*#__PURE__*/new DexFactory("PhoSwap", "0xA74f588D6CBCcc5586D7d8b3f85fFF574f10193E", "0x480b2496b18eb6eebcebea2d3e11be585fc4150e122006346b55cfd3c35ae8e4", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB, TokenList.EOS, TokenList.DOT], "0xF66404514D933975CFAe9f8fa5aB435E9F1E4C03", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.APESWAP = /*#__PURE__*/new DexFactory("ApeSwap", "0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6", "0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB, TokenList.BANANA], "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.VALUEDEFI = /*#__PURE__*/new DexFactory("ValueDefi", "0x1B8E12F839BD4e73A47adDF76cF7F0097d74c14C", "", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.WBNB], "0xb7e19a1188776f32E8C2B790D9ca578F2896Da7C", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.MDEX_BSC = /*#__PURE__*/new DexFactory("MDEX-BSC", "0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8", "0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0x7DAe51BD3E3376B8c7c4900E9107f12Be3AF1bA8", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.BALLSWAP = /*#__PURE__*/new DexFactory("BallSwap", "0xa1dda6eD4a863cF84784851680cFE4F99b05B389", "0x121e9cacd58992d7d1704df26584cb526887833f0af3d4a6707cac3bf451c07d", PERCENT_03, [TokenList.USDT, TokenList.BUSD, TokenList.DAI, TokenList.WBNB], "0xF3FcB02c0Ae2FB04e8dAEFCA49D29557Ec1F68e5", ChainId.BSCMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2BNB);
DexFactory.ACS4QUSD = /*#__PURE__*/new DexFactory("ACS4QUSD", "", "", PERCENT_03, [], "0x3919874C7bc0699cF59c981C5eb668823FA4f958", ChainId.BSCMAINNET, DexType.Acryptos, (_DexFactory = {}, _DexFactory["coins"] = [TokenList.QUSD, TokenList.BUSD, TokenList.USDT, TokenList.DAI, TokenList.USDC], _DexFactory["N_COINS"] = 2, _DexFactory["base_pool"] = "0xb3f0c9ea1f05e312093fdb031e789a756659b0ac", _DexFactory["N_BASE_COINS"] = 4, _DexFactory["lp_token"] = "0x83d69ef5c9837e21e2389d47d791714f5771f29b", _DexFactory), DexSubType.AcryptoS);
DexFactory.ACS4VAI = /*#__PURE__*/new DexFactory("ACS4VAI", "", "", PERCENT_03, [], "0x191409D5A4EfFe25b0f4240557BA2192D18a191e", ChainId.BSCMAINNET, DexType.Acryptos, (_DexFactory2 = {}, _DexFactory2["coins"] = [TokenList.VAI, TokenList.BUSD, TokenList.USDT, TokenList.DAI, TokenList.USDC], _DexFactory2["N_COINS"] = 2, _DexFactory2["base_pool"] = "0xb3f0c9ea1f05e312093fdb031e789a756659b0ac", _DexFactory2["N_BASE_COINS"] = 4, _DexFactory2["lp_token"] = "0x83d69ef5c9837e21e2389d47d791714f5771f29b", _DexFactory2), DexSubType.AcryptoS);
DexFactory.ACS4UST = /*#__PURE__*/new DexFactory("ACS4UST", "", "", PERCENT_03, [], "0x99c92765EfC472a9709Ced86310D64C4573c4b77", ChainId.BSCMAINNET, DexType.Acryptos, (_DexFactory3 = {}, _DexFactory3["coins"] = [TokenList.UST, TokenList.BUSD, TokenList.USDT, TokenList.DAI, TokenList.USDC], _DexFactory3["N_COINS"] = 2, _DexFactory3["base_pool"] = "0xb3f0c9ea1f05e312093fdb031e789a756659b0ac", _DexFactory3["N_BASE_COINS"] = 4, _DexFactory3["lp_token"] = "0x83d69ef5c9837e21e2389d47d791714f5771f29b", _DexFactory3), DexSubType.AcryptoS);
DexFactory.MDEX = /*#__PURE__*/new DexFactory("MDEX", "0xb0b670fc1F7724119963018DB0BfA86aDb22d941", "0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0xED7d5F38C79115ca12fe6C0041abb22F0A06C300", ChainId.HECOMAINNET);
DexFactory.LAVASWAP = /*#__PURE__*/new DexFactory("LavaSwap", "0x1EA26C17d061E8a7Cc33B20d8d8Dad131d7fb392", "", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0xe38623b265b5acc9f35e696381769e556ed932f9", ChainId.HECOMAINNET);
DexFactory.DOGESWAP = /*#__PURE__*/new DexFactory("DogeSwap", "0x0419082bb45f47fe5c530ea489e16478819910f3", "0x06d32be9fe9b1c75a1ce7e2b362c735bcb731596b9330b99412fde52d753e3f0", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x539A9Fbb81D1D2DC805c698B55C8DF81cbA6b350", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.MDIS = /*#__PURE__*/new DexFactory("MDIS", "0x2F3F03b6a1B1d73b01390E234AE813bc06d5B8e8", "0xc5a24d8158ef97c42050dd7ff53c64db08633f3aa6250cc47b90e63eaeddb4ff", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x40367258BB8b9195446E99079391D7Ccb5AaeaB9", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.UNISAVE = /*#__PURE__*/new DexFactory("Unisave", "0x32CE36F6eA8d97f9fC19Aab83b9c6D2F52D74470", "0xc5a24d8158ef97c42050dd7ff53c64db08633f3aa6250cc47b90e63eaeddb4ff", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x039B5818e51dfEC86c1D56A4668787AF0Ed1c068", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.PIPPISHRIMP = /*#__PURE__*/new DexFactory("PippiShrimp", "0x979efE7cA072b72d6388f415d042951dDF13036e", "0xd805d4c8a7fb3567167020352386905de5d4bd188fe2284675e3ed584653df75", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0xBe4AB2603140F134869cb32aB4BC56d762Ae900B", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.AVANTSPORT = /*#__PURE__*/new DexFactory("AvantSport", "0x6f76F87eda2a29320e2487A3517b77D1a2bF9402", "0xa4e2028dd474965345edff03ac8858e368959d8d10f44d94dc19b67291973e01", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x278e88D15ce69F6b9c93f50dE3D49e81cdBbFa40", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.COMPLUS = /*#__PURE__*/new DexFactory("Complus", "0xc32CCcf795940cA8491cD4F31161509DB28Ab719", "0x60e3516f18fde9a9c4ebc26c58261547ac802f880fe552105fb55bddcf7021c4", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x1ebCd140160594421DFae5055D62948883BFa24A", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.CIRCLESWAP = /*#__PURE__*/new DexFactory("CircleSwap", "0xB49f19289857f4499781AaB9afd4A428C4BE9CA8", "", PERCENT_035, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0xecEAb8fAd5fD9b61b473007C749957cBB1A14D04", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);
DexFactory.BXH = /*#__PURE__*/new DexFactory("BXH", "0xe0367ec2bd4Ba22B1593E4fEFcB91D29DE6C512a", "0xc109ad0262416bd34b17cc00feda5fa51c2a97264a7b53e4421343f2d9255531", PERCENT_03, [TokenList.HUSDT, TokenList.HUSD, TokenList.WHT], "0x00eFB96dBFE641246E961b472C0C3fC472f6a694", ChainId.HECOMAINNET, DexType.UniswapV2, {}, DexSubType.UniswapV2ETH);

var ADDRESS_NULL = "0x0000000000000000000000000000000000000000"; // export const ADDRESS_BSC_MAINNET_MULTICALL = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";
// export const ADDRESS_BSC_TESTNET_MULTICALL = "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A";

var PairUtil = /*#__PURE__*/function () {
  function PairUtil() {}

  //可用于交易中最佳路由计算的所有Pair对
  PairUtil.getAllCommonPairs =
  /*#__PURE__*/
  function () {
    var _getAllCommonPairs = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenA, tokenB, dexFactory) {
      var bases, basePairs, allPairCombinations, result;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const chainId=ChainId.MAINNET;
              bases = dexFactory.interToken;
              basePairs = flatMap(bases, function (base) {
                return bases.map(function (otherBase) {
                  return [base, otherBase];
                });
              }).filter(function (_ref) {
                var t0 = _ref[0],
                    t1 = _ref[1];
                return t0.address !== t1.address;
              });
              allPairCombinations = tokenA && tokenB ? [// the direct pair
              [tokenA, tokenB]].concat(bases.map(function (base) {
                return [tokenA, base];
              }), bases.map(function (base) {
                return [tokenB, base];
              }), basePairs).filter(function (tokens) {
                return Boolean(tokens[0] && tokens[1]);
              }).filter(function (_ref2) {
                var t0 = _ref2[0],
                    t1 = _ref2[1];
                return t0.address !== t1.address;
              }) : [];
              _context.next = 5;
              return PairUtil.fetchPairsData(allPairCombinations, dexFactory);

            case 5:
              result = _context.sent;
              return _context.abrupt("return", result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAllCommonPairs(_x, _x2, _x3) {
      return _getAllCommonPairs.apply(this, arguments);
    }

    return getAllCommonPairs;
  }()
  /**
   * 获取一对Token的pair地址
   * @param  tokenA     tokenA对象
   * @param  tokenB     tokenB对象
   * @param  dexFactory 交易所
   * @return            Pair地址
   */
  ;

  PairUtil.getAddress =
  /*#__PURE__*/
  function () {
    var _getAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(tokenA, tokenB, dexFactory) {
      var _PairUtil$PAIR_ADDRES, _PairUtil$PAIR_ADDRES2;

      var key, _extends2, contract, pairAddress;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              key = dexFactory.factoryAddress + tokenA.address + tokenB.address;

              if (!(((_PairUtil$PAIR_ADDRES = PairUtil.PAIR_ADDRESS_CACHE) == null ? void 0 : _PairUtil$PAIR_ADDRES[key]) === undefined)) {
                _context2.next = 9;
                break;
              }

              contract = new Contract(dexFactory.factoryAddress, IUniswapV2Factory.abi, ProviderUtil.getJsonRPCProvider(dexFactory.chainId));
              _context2.next = 5;
              return contract.getPair(tokenA.address, tokenB.address);

            case 5:
              pairAddress = _context2.sent;

              if (!(pairAddress == ADDRESS_NULL)) {
                _context2.next = 8;
                break;
              }

              throw "No pair found";

            case 8:
              PairUtil.PAIR_ADDRESS_CACHE = _extends({}, PairUtil.PAIR_ADDRESS_CACHE, (_extends2 = {}, _extends2[key] = pairAddress, _extends2));

            case 9:
              return _context2.abrupt("return", (_PairUtil$PAIR_ADDRES2 = PairUtil.PAIR_ADDRESS_CACHE) == null ? void 0 : _PairUtil$PAIR_ADDRES2[key]);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getAddress(_x4, _x5, _x6) {
      return _getAddress.apply(this, arguments);
    }

    return getAddress;
  }()
  /**
   * 返回一组token对的pair地址
   * 采用multicall查询
   * @param  tokenPairs token对数组
   * @param  dexFactory 交易所
   * @return            Pair地址数组，如果其中不存在pair的，返回0x0000000000000000000000000000000000000000
   */
  ;

  PairUtil.getAddresses =
  /*#__PURE__*/
  function () {
    var _getAddresses = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(tokenPairs, dexFactory) {
      var allInCache, result, _iterator, _step, _PairUtil$PAIR_ADDRES3, _PairUtil$PAIR_ADDRES4, _step$value, _tokenA, _tokenB, _key, contract, calls, multiCallProvider, i, _extends3, _tokenPairs$i, tokenA, tokenB, key;

      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              allInCache = true;
              result = [];
              _iterator = _createForOfIteratorHelperLoose(tokenPairs);

            case 3:
              if ((_step = _iterator()).done) {
                _context3.next = 14;
                break;
              }

              _step$value = _step.value, _tokenA = _step$value[0], _tokenB = _step$value[1];
              _key = dexFactory.factoryAddress + _tokenA.address + _tokenB.address;

              if (!(((_PairUtil$PAIR_ADDRES3 = PairUtil.PAIR_ADDRESS_CACHE) == null ? void 0 : _PairUtil$PAIR_ADDRES3[_key]) === undefined)) {
                _context3.next = 11;
                break;
              }

              allInCache = false;
              return _context3.abrupt("break", 14);

            case 11:
              result = result.concat((_PairUtil$PAIR_ADDRES4 = PairUtil.PAIR_ADDRESS_CACHE) == null ? void 0 : _PairUtil$PAIR_ADDRES4[_key]);

            case 12:
              _context3.next = 3;
              break;

            case 14:
              if (!allInCache) {
                _context3.next = 16;
                break;
              }

              return _context3.abrupt("return", result);

            case 16:
              //只要有一个没中，全部从链上查询
              result = [];
              contract = new Contract$1(dexFactory.factoryAddress, IUniswapV2Factory.abi);
              calls = tokenPairs.map(function (_ref3) {
                var tokenA = _ref3[0],
                    tokenB = _ref3[1];
                return contract.getPair(tokenA.address, tokenB.address);
              });
              multiCallProvider = ProviderUtil.getMultiCallProvider(dexFactory.chainId);
              _context3.next = 22;
              return multiCallProvider.init();

            case 22:
              _context3.next = 24;
              return multiCallProvider.all(calls);

            case 24:
              result = _context3.sent;

              //处理缓存
              for (i in result) {
                if (result[i] != ADDRESS_NULL) {
                  _tokenPairs$i = tokenPairs[i], tokenA = _tokenPairs$i[0], tokenB = _tokenPairs$i[1];
                  key = dexFactory.factoryAddress + tokenA.address + tokenB.address;
                  PairUtil.PAIR_ADDRESS_CACHE = _extends({}, PairUtil.PAIR_ADDRESS_CACHE, (_extends3 = {}, _extends3[key] = result[i], _extends3));
                }
              }

              return _context3.abrupt("return", result);

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getAddresses(_x7, _x8) {
      return _getAddresses.apply(this, arguments);
    }

    return getAddresses;
  }()
  /**
   * 获取Pair的存量等实时数据
   * @param  tokenPairs [description]
   * @param  dexFactory [description]
   * @return            [description]
   */
  ;

  PairUtil.fetchPairsData =
  /*#__PURE__*/
  function () {
    var _fetchPairsData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(tokenPairs, dexFactory) {
      var pairs;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.fetchPairsDataBatch([{
                tokenPairs: tokenPairs,
                dexFactory: dexFactory
              }]);

            case 2:
              pairs = _context4.sent;
              return _context4.abrupt("return", pairs.map(function (p) {
                return p.pair;
              }));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function fetchPairsData(_x9, _x10) {
      return _fetchPairsData.apply(this, arguments);
    }

    return fetchPairsData;
  }();

  PairUtil.fetchPairsDataBatch = /*#__PURE__*/function () {
    var _fetchPairsDataBatch = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(input) {
      var tPairs, contractCalls, dexes, _iterator2, _step2, item, tokenPairs, dexFactory, addresses, _i, address, contract, contractCall, multiCallProvider, results, pairs, i, _tPairs$i, tokenA, tokenB, _results$i, reserves0, reserves1, balances, pair;

      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              tPairs = []; //过滤掉空值的pairs

              contractCalls = []; //与tPAirs长度对应，过滤掉空值

              dexes = [];
              _iterator2 = _createForOfIteratorHelperLoose(input);

            case 4:
              if ((_step2 = _iterator2()).done) {
                _context5.next = 14;
                break;
              }

              item = _step2.value;
              tokenPairs = item.tokenPairs;
              dexFactory = item.dexFactory;
              _context5.next = 10;
              return PairUtil.getAddresses(tokenPairs, dexFactory);

            case 10:
              addresses = _context5.sent;

              for (_i in addresses) {
                address = addresses[_i];

                if (address != ADDRESS_NULL) {
                  contract = new Contract$1(address, IUniswapV2Pair.abi);
                  contractCall = contract.getReserves();
                  contractCalls.push(contractCall);
                  tPairs.push(tokenPairs[_i]);
                  dexes.push(dexFactory);
                }
              }

            case 12:
              _context5.next = 4;
              break;

            case 14:
              multiCallProvider = ProviderUtil.getMultiCallProvider(input[0].dexFactory.chainId);
              _context5.next = 17;
              return multiCallProvider.init();

            case 17:
              _context5.next = 19;
              return multiCallProvider.all(contractCalls);

            case 19:
              results = _context5.sent;
              pairs = [];

              for (i = 0; i < tPairs.length; i++) {
                _tPairs$i = tPairs[i], tokenA = _tPairs$i[0], tokenB = _tPairs$i[1];
                _results$i = results[i], reserves0 = _results$i[0], reserves1 = _results$i[1]; // console.log(tokenA.symbol+"<=>"+tokenB.symbol);

                balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
                pair = new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]));
                pairs.push({
                  pair: pair,
                  dexFactory: dexes[i]
                });
              }

              return _context5.abrupt("return", pairs);

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function fetchPairsDataBatch(_x11) {
      return _fetchPairsDataBatch.apply(this, arguments);
    }

    return fetchPairsDataBatch;
  }();

  PairUtil.getAllPairs = /*#__PURE__*/function () {
    var _getAllPairs = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(dexFactory, additionalTokenInfos, useCache) {
      var _this$PAIRS_CACHE, _this$PAIRS_CACHE2, _extends6;

      var factoryContract, pairLength, mcFactoryContract, calls, MULTICALL_MAX, callCount, result, j, call;
      return runtime_1.wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (additionalTokenInfos === void 0) {
                additionalTokenInfos = [];
              }

              if (useCache === void 0) {
                useCache = true;
              }

              console.time("getAllPairs " + dexFactory.name);

              if (!(useCache && ((_this$PAIRS_CACHE = this.PAIRS_CACHE) == null ? void 0 : _this$PAIRS_CACHE[dexFactory.factoryAddress]) !== undefined)) {
                _context8.next = 5;
                break;
              }

              return _context8.abrupt("return", (_this$PAIRS_CACHE2 = this.PAIRS_CACHE) == null ? void 0 : _this$PAIRS_CACHE2[dexFactory.factoryAddress]);

            case 5:
              factoryContract = new Contract(dexFactory.factoryAddress, IUniswapV2Factory.abi, ProviderUtil.getJsonRPCProvider(dexFactory.chainId));
              _context8.next = 8;
              return factoryContract.allPairsLength();

            case 8:
              pairLength = _context8.sent;
              console.log(dexFactory.name + " pair length: " + pairLength);
              mcFactoryContract = new Contract$1(dexFactory.factoryAddress, IUniswapV2Factory.abi);
              calls = [];
              MULTICALL_MAX = 100;
              callCount = 0;
              result = [];
              j = 0;

            case 16:
              if (!(j < pairLength)) {
                _context8.next = 25;
                break;
              }

              call = mcFactoryContract.allPairs(j);
              calls.push(call);
              callCount++;

              if (!(callCount == MULTICALL_MAX - 1 || j == pairLength - 1)) {
                _context8.next = 22;
                break;
              }

              return _context8.delegateYield( /*#__PURE__*/runtime_1.mark(function _callee6() {
                var multiCallProvider, pairAddresses, pairCalls, _iterator3, _step3, address, mcPairContract, tokenAddresses, _loop, i, _ret;

                return runtime_1.wrap(function _callee6$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        multiCallProvider = ProviderUtil.getMultiCallProvider(dexFactory.chainId);
                        _context7.next = 3;
                        return multiCallProvider.init();

                      case 3:
                        _context7.next = 5;
                        return PairUtil.multicallAllWithRetry(multiCallProvider, calls);

                      case 5:
                        pairAddresses = _context7.sent;
                        pairCalls = [];

                        for (_iterator3 = _createForOfIteratorHelperLoose(pairAddresses); !(_step3 = _iterator3()).done;) {
                          address = _step3.value;
                          mcPairContract = new Contract$1(address, IUniswapV2Pair.abi);
                          pairCalls.push(mcPairContract.token0());
                          pairCalls.push(mcPairContract.token1());
                        }

                        _context7.next = 10;
                        return PairUtil.multicallAllWithRetry(multiCallProvider, pairCalls);

                      case 10:
                        tokenAddresses = _context7.sent;
                        _loop = /*#__PURE__*/runtime_1.mark(function _loop(i) {
                          var token1, _PairUtil$TOKEN_SYMBO, temp, _extends4, findToken, tokenContract, symbol, decimal, token2, _PairUtil$TOKEN_SYMBO2, _temp, _extends5, _findToken, _tokenContract, _symbol, _decimal;

                          return runtime_1.wrap(function _loop$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  _context6.prev = 0;
                                  token1 = TokenList.getToken(tokenAddresses[i], dexFactory.chainId);

                                  if (!(token1 == null)) {
                                    _context6.next = 22;
                                    break;
                                  }

                                  temp = (_PairUtil$TOKEN_SYMBO = PairUtil.TOKEN_SYMBOL_CACHE) == null ? void 0 : _PairUtil$TOKEN_SYMBO[tokenAddresses[i]];

                                  if (!(temp == undefined)) {
                                    _context6.next = 21;
                                    break;
                                  }

                                  findToken = additionalTokenInfos.filter(function (t) {
                                    return t.address == tokenAddresses[i] && t.chainId == dexFactory.chainId;
                                  });

                                  if (!(findToken.length > 0)) {
                                    _context6.next = 10;
                                    break;
                                  }

                                  temp = {
                                    decimal: findToken[0].decimals,
                                    symbol: findToken[0].symbol
                                  };
                                  _context6.next = 20;
                                  break;

                                case 10:
                                  tokenContract = new Contract(tokenAddresses[i], ERC20, ProviderUtil.getJsonRPCProvider(dexFactory.chainId));
                                  _context6.next = 13;
                                  return tokenContract.symbol();

                                case 13:
                                  symbol = _context6.sent;
                                  console.log("detected unknown token symbol: " + symbol);
                                  _context6.next = 17;
                                  return tokenContract.decimals();

                                case 17:
                                  decimal = _context6.sent;
                                  console.log("detected unknown token decimals: " + decimal);
                                  temp = {
                                    decimal: decimal,
                                    symbol: symbol
                                  };

                                case 20:
                                  PairUtil.TOKEN_SYMBOL_CACHE = _extends({}, PairUtil.TOKEN_SYMBOL_CACHE, (_extends4 = {}, _extends4[tokenAddresses[i]] = temp, _extends4));

                                case 21:
                                  token1 = new Token(dexFactory.chainId, tokenAddresses[i], temp.decimal, temp.symbol);

                                case 22:
                                  token2 = TokenList.getToken(tokenAddresses[i + 1], dexFactory.chainId);

                                  if (!(token2 == null)) {
                                    _context6.next = 43;
                                    break;
                                  }

                                  _temp = (_PairUtil$TOKEN_SYMBO2 = PairUtil.TOKEN_SYMBOL_CACHE) == null ? void 0 : _PairUtil$TOKEN_SYMBO2[tokenAddresses[i + 1]];

                                  if (!(_temp == undefined)) {
                                    _context6.next = 42;
                                    break;
                                  }

                                  _findToken = additionalTokenInfos.filter(function (t) {
                                    return t.address == tokenAddresses[i + 1] && t.chainId == dexFactory.chainId;
                                  });

                                  if (!(_findToken.length > 0)) {
                                    _context6.next = 31;
                                    break;
                                  }

                                  _temp = {
                                    decimal: _findToken[0].decimals,
                                    symbol: _findToken[0].symbol
                                  };
                                  _context6.next = 41;
                                  break;

                                case 31:
                                  _tokenContract = new Contract(tokenAddresses[i + 1], ERC20, ProviderUtil.getJsonRPCProvider(dexFactory.chainId));
                                  _context6.next = 34;
                                  return _tokenContract.symbol();

                                case 34:
                                  _symbol = _context6.sent;
                                  console.log("detected unknown token symbol: " + _symbol);
                                  _context6.next = 38;
                                  return _tokenContract.decimals();

                                case 38:
                                  _decimal = _context6.sent;
                                  console.log("detected unknown token decimals: " + _decimal);
                                  _temp = {
                                    decimal: _decimal,
                                    symbol: _symbol
                                  };

                                case 41:
                                  PairUtil.TOKEN_SYMBOL_CACHE = _extends({}, PairUtil.TOKEN_SYMBOL_CACHE, (_extends5 = {}, _extends5[tokenAddresses[i + 1]] = _temp, _extends5));

                                case 42:
                                  token2 = new Token(dexFactory.chainId, tokenAddresses[i + 1], _temp.decimal, _temp.symbol);

                                case 43:
                                  result.push([token1, token2]);
                                  console.log(j + " [" + token1.symbol + "," + token2.symbol + "]");
                                  _context6.next = 50;
                                  break;

                                case 47:
                                  _context6.prev = 47;
                                  _context6.t0 = _context6["catch"](0);
                                  return _context6.abrupt("return", "continue");

                                case 50:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _loop, null, [[0, 47]]);
                        });
                        i = 0;

                      case 13:
                        if (!(i < tokenAddresses.length)) {
                          _context7.next = 21;
                          break;
                        }

                        return _context7.delegateYield(_loop(i), "t0", 15);

                      case 15:
                        _ret = _context7.t0;

                        if (!(_ret === "continue")) {
                          _context7.next = 18;
                          break;
                        }

                        return _context7.abrupt("continue", 18);

                      case 18:
                        i = i + 2;
                        _context7.next = 13;
                        break;

                      case 21:
                        calls = [];
                        callCount = 0;

                      case 23:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee6);
              })(), "t0", 22);

            case 22:
              j++;
              _context8.next = 16;
              break;

            case 25:
              this.PAIRS_CACHE = _extends({}, this.PAIRS_CACHE, (_extends6 = {}, _extends6[dexFactory.factoryAddress] = result, _extends6));
              console.timeEnd("getAllPairs " + dexFactory.name);
              return _context8.abrupt("return", result);

            case 28:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7, this);
    }));

    function getAllPairs(_x12, _x13, _x14) {
      return _getAllPairs.apply(this, arguments);
    }

    return getAllPairs;
  }();

  PairUtil.multicallAllWithRetry = /*#__PURE__*/function () {
    var _multicallAllWithRetry = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(provider, calls, retry) {
      return runtime_1.wrap(function _callee8$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (retry === void 0) {
                retry = 10;
              }

            case 1:
              if (!(retry-- > 0)) {
                _context9.next = 13;
                break;
              }

              _context9.prev = 2;
              _context9.next = 5;
              return provider.all(calls);

            case 5:
              return _context9.abrupt("return", _context9.sent);

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](2);
              console.error(_context9.t0);

            case 11:
              _context9.next = 1;
              break;

            case 13:
              throw new Error("muticall retry failed");

            case 14:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee8, null, [[2, 8]]);
    }));

    function multicallAllWithRetry(_x15, _x16, _x17) {
      return _multicallAllWithRetry.apply(this, arguments);
    }

    return multicallAllWithRetry;
  }();

  PairUtil.searchPairsByToken = /*#__PURE__*/function () {
    var _searchPairsByToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(token) {
      var result, _iterator4, _step4, dexFactory, pairs, _iterator5, _step5, _step5$value, token1, token2, _result, _result2, _extends7, list;

      return runtime_1.wrap(function _callee9$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              result = {};
              _iterator4 = _createForOfIteratorHelperLoose(DexFactory.getAllDexFactory(token.chainId));

            case 2:
              if ((_step4 = _iterator4()).done) {
                _context10.next = 10;
                break;
              }

              dexFactory = _step4.value;
              _context10.next = 6;
              return this.getAllPairs(dexFactory);

            case 6:
              pairs = _context10.sent;

              for (_iterator5 = _createForOfIteratorHelperLoose(pairs); !(_step5 = _iterator5()).done;) {
                _step5$value = _step5.value, token1 = _step5$value[0], token2 = _step5$value[1];

                if (token.equals(token1) || token.equals(token2)) {
                  if (((_result = result) == null ? void 0 : _result[dexFactory.name]) == undefined) {
                    result = _extends({}, result, (_extends7 = {}, _extends7[dexFactory.name] = [], _extends7));
                  }

                  list = (_result2 = result) == null ? void 0 : _result2[dexFactory.name];
                  list.push([token1, token2]);
                }
              }

            case 8:
              _context10.next = 2;
              break;

            case 10:
              return _context10.abrupt("return", result);

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee9, this);
    }));

    function searchPairsByToken(_x18) {
      return _searchPairsByToken.apply(this, arguments);
    }

    return searchPairsByToken;
  }();

  PairUtil.searchPairsByTokenAndDex = /*#__PURE__*/function () {
    var _searchPairsByTokenAndDex = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(token, dexFactory) {
      var pairs, list, _iterator6, _step6, _step6$value, token1, token2;

      return runtime_1.wrap(function _callee10$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getAllPairs(dexFactory);

            case 2:
              pairs = _context11.sent;
              list = [];

              for (_iterator6 = _createForOfIteratorHelperLoose(pairs); !(_step6 = _iterator6()).done;) {
                _step6$value = _step6.value, token1 = _step6$value[0], token2 = _step6$value[1];

                if (token.equals(token1) || token.equals(token2)) {
                  list.push([token1, token2]);
                }
              }

              return _context11.abrupt("return", list);

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee10, this);
    }));

    function searchPairsByTokenAndDex(_x19, _x20) {
      return _searchPairsByTokenAndDex.apply(this, arguments);
    }

    return searchPairsByTokenAndDex;
  }();

  return PairUtil;
}();
PairUtil.PAIR_ADDRESS_CACHE = {};
PairUtil.TOKEN_SYMBOL_CACHE = {};
PairUtil.PAIRS_CACHE = {};

var PriceUtil = /*#__PURE__*/function () {
  function PriceUtil() {}

  // computes price breakdown for the trade
  PriceUtil.computeTradePriceBreakdown = function computeTradePriceBreakdown(trade, baseFee) {
    if (baseFee === void 0) {
      baseFee = new Percent(JSBI.BigInt(20), JSBI.BigInt(10000));
    }

    var INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(baseFee); // for each hop in our trade, take away the x*y=k price impact from 0.3% fees
    // e.g. for 3 tokens/2 hops: 1 - ((1 - .03) * (1-.03))``

    var realizedLPFee = ONE_HUNDRED_PERCENT.subtract(trade.route.pairs.reduce(function (currentFee) {
      return currentFee.multiply(INPUT_FRACTION_AFTER_FEE);
    }, ONE_HUNDRED_PERCENT)); // remove lp fees from price impact

    var priceImpactWithoutFeeFraction = trade.priceImpact.subtract(realizedLPFee); // the x*y=k impact

    var priceImpactWithoutFeePercent = new Percent(priceImpactWithoutFeeFraction == null ? void 0 : priceImpactWithoutFeeFraction.numerator, priceImpactWithoutFeeFraction == null ? void 0 : priceImpactWithoutFeeFraction.denominator); // the amount of the input that accrues to LPs

    var realizedLPFeeAmount = realizedLPFee && trade && (trade.inputAmount instanceof TokenAmount ? new TokenAmount(trade.inputAmount.token, realizedLPFee.multiply(trade.inputAmount.raw).quotient) : CurrencyAmount.ether(realizedLPFee.multiply(trade.inputAmount.raw).quotient));
    return {
      priceImpactWithoutFee: priceImpactWithoutFeePercent,
      realizedLPFee: realizedLPFeeAmount
    };
  };

  PriceUtil.getSwapPercent = function getSwapPercent(allowedSlippage) {
    return new Percent(JSBI.BigInt(allowedSlippage * 10), JSBI.BigInt(1000));
  };

  return PriceUtil;
}();

function nowTimeString() {
  var newdate = new Date();
  return format(newdate, 'yyyy-MM-dd HH:mm:ss');
}
/**
     * 等待指定的时间
     * @param ms
     */

function sleep(_x) {
  return _sleep.apply(this, arguments);
}

function _sleep() {
  _sleep = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(ms) {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              setTimeout(function () {
                resolve('');
              }, ms);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sleep.apply(this, arguments);
}

var ACryptoS = /*#__PURE__*/function () {
  function ACryptoS() {}

  ACryptoS.getBestTradeExactIn = /*#__PURE__*/function () {
    var _getBestTradeExactIn = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenIn, amountIn, tokenOut, dexFactory) {
      var inputAmount, i, j, dx, contract, dy, outputAmount;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              !(dexFactory.type == DexType.Acryptos) ? process.env.NODE_ENV !== "production" ? invariant(false, "Must be ACryptoS Dex") : invariant(false) : void 0;
              inputAmount = TokenAmount.getTokenAmountByExact(tokenIn, amountIn);
              i = ACryptoS.getTokenIndex(tokenIn, dexFactory);
              !(i >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, tokenIn.symbol + " is not supported") : invariant(false) : void 0;
              j = ACryptoS.getTokenIndex(tokenOut, dexFactory);
              !(j >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, tokenOut.symbol + " is not supported") : invariant(false) : void 0;
              dx = BigNumber.from(inputAmount.raw.toString());
              contract = new Contract(dexFactory.routerAddress, dexFactory.getRouter02Json(), ProviderUtil.getJsonRPCProvider(dexFactory.chainId));
              _context.next = 10;
              return contract.get_dy_underlying(i, j, dx);

            case 10:
              dy = _context.sent;
              outputAmount = new TokenAmount(tokenOut, dy.toString());
              console.log("Best Trade: " + inputAmount.toFixed(4) + " " + tokenIn.symbol + " => " + outputAmount.toFixed(4) + " " + tokenOut.symbol);
              return _context.abrupt("return", new ACSTrade(inputAmount, outputAmount));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getBestTradeExactIn(_x, _x2, _x3, _x4) {
      return _getBestTradeExactIn.apply(this, arguments);
    }

    return getBestTradeExactIn;
  }();

  ACryptoS.getBestTradeExactInStatic = function getBestTradeExactInStatic(tokenIn, amountIn, tokenOut, dexFactory, curvePool) {
    var inputAmount = TokenAmount.getTokenAmountByExact(tokenIn, amountIn);
    var i = ACryptoS.getTokenIndex(tokenIn, dexFactory);
    !(i >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, tokenIn.symbol + " is not supported") : invariant(false) : void 0;
    var j = ACryptoS.getTokenIndex(tokenOut, dexFactory);
    !(j >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, tokenOut.symbol + " is not supported") : invariant(false) : void 0;
    var dx = BigNumber.from(inputAmount.raw.toString());
    var dy = curvePool.get_dy_underlying(i, j, dx);
    var outputAmount = new TokenAmount(tokenOut, dy.toString());
    console.log("Best Trade: " + inputAmount.toFixed(4) + " " + tokenIn.symbol + " => " + outputAmount.toFixed(4) + " " + tokenOut.symbol);
    return new ACSTrade(inputAmount, outputAmount);
  };

  ACryptoS.getTokenIndex = function getTokenIndex(token, dexFactory) {
    var coins = dexFactory.config["coins"];

    for (var i = 0; i < coins.length; i++) {
      if (token.equals(coins[i])) return i;
    }

    return -1;
  };

  ACryptoS.estimateGasLimit = /*#__PURE__*/function () {
    var _estimateGasLimit = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(trade, wallet) {
      var i, j, dx, min_dy, routerContract, gasLimit;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(nowTimeString() + " Prepare estimate gas limit for ACryptoS swap");
              !(trade.dex.type == DexType.Acryptos) ? process.env.NODE_ENV !== "production" ? invariant(false, "Must be ACryptoS Dex") : invariant(false) : void 0;
              i = ACryptoS.getTokenIndex(trade.tokenIn, trade.dex);
              !(i >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, trade.tokenIn.symbol + " is not supported") : invariant(false) : void 0;
              j = ACryptoS.getTokenIndex(trade.tokenOut, trade.dex);
              !(j >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, trade.tokenOut.symbol + " is not supported") : invariant(false) : void 0;
              dx = BigNumber.from(trade.amountIn.raw.toString());
              min_dy = BigNumber.from(trade.minimumAmountOut.raw.toString());
              routerContract = new Contract(trade.dex.routerAddress, trade.dex.getRouter02Json(), wallet.getSignerOrProvider());
              _context2.next = 11;
              return routerContract.estimateGas.exchange_underlying(i, j, dx, min_dy);

            case 11:
              gasLimit = _context2.sent;
              return _context2.abrupt("return", gasLimit);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function estimateGasLimit(_x5, _x6) {
      return _estimateGasLimit.apply(this, arguments);
    }

    return estimateGasLimit;
  }();

  ACryptoS.executeTrade = /*#__PURE__*/function () {
    var _executeTrade = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(trade, wallet) {
      var i, j, dx, min_dy, routerContract, tx;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(nowTimeString() + " Prepare execute ACryptoS swap");
              !(trade.dex.type == DexType.Acryptos) ? process.env.NODE_ENV !== "production" ? invariant(false, "Must be ACryptoS Dex") : invariant(false) : void 0;
              i = ACryptoS.getTokenIndex(trade.tokenIn, trade.dex);
              !(i >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, trade.tokenIn.symbol + " is not supported") : invariant(false) : void 0;
              j = ACryptoS.getTokenIndex(trade.tokenOut, trade.dex);
              !(j >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, trade.tokenOut.symbol + " is not supported") : invariant(false) : void 0;
              dx = BigNumber.from(trade.amountIn.raw.toString());
              min_dy = BigNumber.from(trade.minimumAmountOut.raw.toString());
              routerContract = new Contract(trade.dex.routerAddress, trade.dex.getRouter02Json(), wallet.getSignerOrProvider());
              _context3.next = 11;
              return routerContract.exchange_underlying(i, j, dx, min_dy);

            case 11:
              tx = _context3.sent;
              console.log(nowTimeString() + " Trade executing");
              console.log(tx);
              _context3.next = 16;
              return tx.wait();

            case 16:
              console.log(nowTimeString() + " SUCCESS!!!!!");

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function executeTrade(_x7, _x8) {
      return _executeTrade.apply(this, arguments);
    }

    return executeTrade;
  }();

  return ACryptoS;
}();
var ACSTrade = /*#__PURE__*/function () {
  function ACSTrade(inputAmount, outputAmount) {
    this.inputAmount = inputAmount;
    this.outputAmount = outputAmount;
  }

  var _proto = ACSTrade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
    return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(slippageAdjustedAmountOut);
  };

  return ACSTrade;
}();

var TradeUtil = /*#__PURE__*/function () {
  function TradeUtil() {}

  /**
   * 指定输入的代币和数量，寻找最优化输出的交易方案
   * @param  tokenIn    输入的代币类型
   * @param  amountIn   输入的代币数量（非WEI单位）
   * @param  tokenOut   输出的代币类型
   * @param  dexFactory 指定的交易所
   * @return            最优化输出的交易（Trade对象）
   */
  TradeUtil.getBestTradeExactIn =
  /*#__PURE__*/
  function () {
    var _getBestTradeExactIn = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenIn, amountIn, tokenOut, dexFactory, maxHops) {
      var allowedPairs;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (maxHops === void 0) {
                maxHops = 3;
              }

              console.log("Searching best trade for " + amountIn + " " + tokenIn.symbol + " to " + tokenOut.symbol + " in DEX " + dexFactory.name);

              if (!(dexFactory.type == DexType.UniswapV2)) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return PairUtil.getAllCommonPairs(tokenIn, tokenOut, dexFactory);

            case 5:
              allowedPairs = _context.sent;
              return _context.abrupt("return", TradeUtil.getBestTradeExactInByAllowPairs(tokenIn, amountIn, tokenOut, allowedPairs, maxHops));

            case 9:
              if (!(dexFactory.type == DexType.Acryptos)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", ACryptoS.getBestTradeExactIn(tokenIn, amountIn, tokenOut, dexFactory));

            case 11:
              throw new Error("Unsupported Dex Type");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getBestTradeExactIn(_x, _x2, _x3, _x4, _x5) {
      return _getBestTradeExactIn.apply(this, arguments);
    }

    return getBestTradeExactIn;
  }()
  /**
   * 已知所有相关Pair的存量数据，寻找最优化输出的交易方案
   * 无须访问服务端
   * @param  tokenIn    输入的代币类型
   * @param  amountIn   输入的代币数量（非WEI单位）
   * @param  tokenOut   输出的代币类型
   * @param  allowedPairs 所有相关Pair的存量数据
   * @param  maxHops      最大路由跳转数量
   * @return             最优化输出的交易（Trade对象）
   */
  ;

  TradeUtil.getBestTradeExactInByAllowPairs = function getBestTradeExactInByAllowPairs(tokenIn, amountIn, tokenOut, allowedPairs, maxHops) {
    var _Trade$bestTradeExact;

    if (maxHops === void 0) {
      maxHops = 3;
    }

    var trade = (_Trade$bestTradeExact = Trade.bestTradeExactIn(allowedPairs, TokenAmount.getTokenAmountByExact(tokenIn, amountIn), tokenOut, {
      maxHops: maxHops,
      maxNumResults: 1
    })[0]) != null ? _Trade$bestTradeExact : null;

    if (trade != null) {
      console.log("Best Trade: " + trade.inputAmount.toFixed(4) + " " + tokenIn.symbol + " => " + trade.outputAmount.toFixed(4) + " " + tokenOut.symbol + " | Price impact: " + PriceUtil.computeTradePriceBreakdown(trade).priceImpactWithoutFee.toFixed(2) + "%");
      var routeStr = "";

      for (var i = 0; i < trade.route.path.length; ++i) {
        if (i < trade.route.path.length - 1) routeStr += trade.route.path[i].symbol + "=>";else routeStr += trade.route.path[i].symbol;
      }

      console.log("Route: " + routeStr);
    } else {
      console.log("No trade found.");
    }

    return trade;
  };

  return TradeUtil;
}();

var WalletUtil = /*#__PURE__*/function () {
  function WalletUtil() {}

  WalletUtil.getTokenContract = function getTokenContract(token) {
    return new Contract(token.address, ERC20, ProviderUtil.getJsonRPCProvider(token.chainId));
  };

  WalletUtil.getBalance = /*#__PURE__*/function () {
    var _getBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(wallet, token) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!TokenList.isETH(token)) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return wallet.getBalance();

            case 3:
              return _context.abrupt("return", _context.sent);

            case 6:
              if (!(token instanceof Token)) {
                _context.next = 14;
                break;
              }

              _context.t0 = this.getTokenContract(token);
              _context.next = 10;
              return wallet.getAddress();

            case 10:
              _context.t1 = _context.sent;
              _context.next = 13;
              return _context.t0.balanceOf.call(_context.t0, _context.t1);

            case 13:
              return _context.abrupt("return", _context.sent);

            case 14:
              throw new Error();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getBalance(_x, _x2) {
      return _getBalance.apply(this, arguments);
    }

    return getBalance;
  }();

  WalletUtil.getAllowance = /*#__PURE__*/function () {
    var _getAllowance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(wallet, token, spenderAddress) {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = this.getTokenContract(token);
              _context2.next = 3;
              return wallet.getAddress();

            case 3:
              _context2.t1 = _context2.sent;
              _context2.t2 = spenderAddress;
              _context2.next = 7;
              return _context2.t0.allowance.call(_context2.t0, _context2.t1, _context2.t2);

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getAllowance(_x3, _x4, _x5) {
      return _getAllowance.apply(this, arguments);
    }

    return getAllowance;
  }();

  WalletUtil.approve = /*#__PURE__*/function () {
    var _approve = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(wallet, token, spenderAddress, amount) {
      var contract, tx;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("Approve " + token.symbol + " for spender[" + spenderAddress + "], amount: " + amount);
              contract = new Contract(token.address, ERC20, wallet.getSignerOrProvider());
              _context3.next = 4;
              return contract.approve(spenderAddress, amount);

            case 4:
              tx = _context3.sent;
              console.log(tx);
              _context3.next = 8;
              return tx.wait();

            case 8:
              console.log("Approved!!!");

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function approve(_x6, _x7, _x8, _x9) {
      return _approve.apply(this, arguments);
    }

    return approve;
  }();

  WalletUtil.getAllTokenBalance = /*#__PURE__*/function () {
    var _getAllTokenBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(wallet, chainId) {
      var allTokens, result, walletAddress, contractCalls, i, token, multiContract, call, multiCallProvider, balanceList, _i, _token;

      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              allTokens = TokenList.getAllTokenList(chainId);
              _context4.t0 = Token.getETHToken(chainId);
              _context4.next = 4;
              return wallet.getBalance();

            case 4:
              _context4.t1 = _context4.sent;
              _context4.t2 = {
                token: _context4.t0,
                balance: _context4.t1
              };
              result = [_context4.t2];
              _context4.next = 9;
              return wallet.getAddress();

            case 9:
              walletAddress = _context4.sent;
              contractCalls = [];

              for (i = 0; i < allTokens.length; i++) {
                token = allTokens[i];
                multiContract = new Contract$1(token.address, ERC20);
                call = multiContract.balanceOf(walletAddress);
                contractCalls.push(call);
              }

              multiCallProvider = ProviderUtil.getMultiCallProvider(chainId);
              _context4.next = 15;
              return multiCallProvider.init();

            case 15:
              _context4.next = 17;
              return multiCallProvider.all(contractCalls);

            case 17:
              balanceList = _context4.sent;

              for (_i = 0; _i < allTokens.length; _i++) {
                _token = allTokens[_i];
                result.push({
                  token: _token,
                  balance: balanceList[_i]
                });
              }

              return _context4.abrupt("return", result);

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function getAllTokenBalance(_x10, _x11) {
      return _getAllTokenBalance.apply(this, arguments);
    }

    return getAllTokenBalance;
  }();

  return WalletUtil;
}();

function isZero(hexNumberString) {
  return /^0x0*$/.test(hexNumberString);
}
var SwapUtil = /*#__PURE__*/function () {
  function SwapUtil() {}

  /**
   * 预测Gas Fee消耗
   * @param  trade    要预测的交易
   * @param  wallet   钱包，保证钱包中有足够的余额执行本次交易，才能得到预测结果
   * @param  deadline 交易时限，单位秒
   * @return          Gas Limit
   */
  SwapUtil.estimateGasLimit =
  /*#__PURE__*/
  function () {
    var _estimateGasLimit = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(trade, // recipient:string,
    // signerOrProvider:Signer|Provider|undefined,
    wallet, deadline, feeOnTransfer) {
      var swapParameters, routerContract, value, options, _routerContract$estim, gasLimit, _routerContract$callS;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (deadline === void 0) {
                deadline = 20 * 60;
              }

              if (feeOnTransfer === void 0) {
                feeOnTransfer = true;
              }

              if (!(trade.dex.type == DexType.UniswapV2)) {
                _context.next = 39;
                break;
              }

              _context.t0 = trade.dex;
              _context.t1 = trade.trade;
              _context.t2 = feeOnTransfer;
              _context.t3 = trade.allowedSlippage;
              _context.next = 9;
              return wallet.getAddress();

            case 9:
              _context.t4 = _context.sent;
              _context.t5 = deadline;
              _context.t6 = {
                feeOnTransfer: _context.t2,
                allowedSlippage: _context.t3,
                recipient: _context.t4,
                ttl: _context.t5
              };
              swapParameters = _context.t0.swapCallParameters.call(_context.t0, _context.t1, _context.t6);
              !trade.dex.isAutoSwapSupported() ? process.env.NODE_ENV !== "production" ? invariant(false, "ROUTER_ADDRESS") : invariant(false) : void 0;
              console.log(nowTimeString() + " Prepare estimate gas limit parameters: " + JSON.stringify(swapParameters));
              routerContract = new Contract(trade.dex.routerAddress, trade.dex.getRouter02Json(), wallet.getSignerOrProvider());
              value = swapParameters.value;
              options = !value || isZero(value) ? {} : {
                value: value
              };
              _context.prev = 18;
              _context.next = 21;
              return (_routerContract$estim = routerContract.estimateGas)[swapParameters.methodName].apply(_routerContract$estim, swapParameters.args.concat([options]));

            case 21:
              gasLimit = _context.sent;
              return _context.abrupt("return", gasLimit);

            case 25:
              _context.prev = 25;
              _context.t7 = _context["catch"](18);
              console.error("Failed to estimate gas fee", _context.t7);

              if (!feeOnTransfer) {
                _context.next = 33;
                break;
              }

              console.log(nowTimeString() + " Try to estimate gas fee again");
              return _context.abrupt("return", SwapUtil.estimateGasLimit(trade, wallet, deadline, false));

            case 33:
              console.log('Trying eth_call to extract error');
              _context.next = 36;
              return (_routerContract$callS = routerContract.callStatic)[swapParameters.methodName].apply(_routerContract$callS, swapParameters.args.concat([options])).then(function (result) {
                console.log('Unexpected successful call after failed estimate gas', _context.t7, result);
                throw new Error('Unexpected issue with estimating the gas. Please try again.');
              })["catch"](function (callError) {
                console.log('Call threw error', callError);
                var errorMessage;

                switch (callError.reason) {
                  case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
                  case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
                    errorMessage = 'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.';
                    break;

                  default:
                    errorMessage = "The transaction cannot succeed due to error: " + callError.reason + ". This is probably an issue with one of the tokens you are swapping.";
                }

                throw new Error(errorMessage);
              });

            case 36:
              throw _context.t7;

            case 37:
              _context.next = 43;
              break;

            case 39:
              if (!(trade.dex.type == DexType.Acryptos)) {
                _context.next = 43;
                break;
              }

              _context.next = 42;
              return ACryptoS.estimateGasLimit(trade, wallet);

            case 42:
              return _context.abrupt("return", _context.sent);

            case 43:
              throw new Error("Unsupported DEX Type");

            case 44:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[18, 25]]);
    }));

    function estimateGasLimit(_x, _x2, _x3, _x4) {
      return _estimateGasLimit.apply(this, arguments);
    }

    return estimateGasLimit;
  }()
  /**
   * 执行交易
   * @param  trade    要执行的交易
   * @param  wallet   钱包，保证钱包中有足够的余额执行本次交易
   * @param  deadline 交易时限，单位秒
   * @return          交易最终输出金额
   */
  ;

  SwapUtil.executeTrade =
  /*#__PURE__*/
  function () {
    var _executeTrade = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(trade, // recipient:string,
    // signerOrProvider:Signer|Provider|undefined,
    wallet, deadline, feeOnTransfer, checkTradingTokens) {
      var _extends2;

      var inBalanceBefore, outBalanceBefore, _routerContract$funct, swapParameters, routerContract, value, options, tx, outBalanceAfter, gap, _extends3;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (deadline === void 0) {
                deadline = 20 * 60;
              }

              if (feeOnTransfer === void 0) {
                feeOnTransfer = true;
              }

              if (checkTradingTokens === void 0) {
                checkTradingTokens = true;
              }

              !trade.dex.isAutoSwapSupported() ? process.env.NODE_ENV !== "production" ? invariant(false, "AUTO SWAP NOT SUPPORTED") : invariant(false) : void 0;

              if (!checkTradingTokens) {
                _context2.next = 9;
                break;
              }

              if (!this.TRADING_TOKENS[trade.tokenIn.address]) {
                _context2.next = 7;
                break;
              }

              throw new TokenInTradingError("TOKEN[" + trade.tokenIn.symbol + "] IN TRADING");

            case 7:
              if (!this.TRADING_TOKENS[trade.tokenOut.address]) {
                _context2.next = 9;
                break;
              }

              throw new TokenInTradingError("TOKEN[" + trade.tokenOut.symbol + "] IN TRADING");

            case 9:
              this.TRADING_TOKENS = _extends({}, this.TRADING_TOKENS, (_extends2 = {}, _extends2[trade.tokenIn.address] = true, _extends2[trade.tokenOut.address] = true, _extends2));
              _context2.prev = 10;
              _context2.next = 13;
              return WalletUtil.getBalance(wallet, trade.tokenIn);

            case 13:
              inBalanceBefore = _context2.sent;
              !JSBI.greaterThanOrEqual(JSBI.BigInt(inBalanceBefore.toString()), trade.amountIn.raw) ? process.env.NODE_ENV !== "production" ? invariant(false, "NO ENOUGH BALANCE") : invariant(false) : void 0;
              _context2.next = 17;
              return WalletUtil.getBalance(wallet, trade.tokenOut);

            case 17:
              outBalanceBefore = _context2.sent;
              console.log(nowTimeString() + " " + trade.tokenOut.symbol + " balance before trade: " + formatEther(outBalanceBefore) + " " + trade.tokenOut.symbol);

              if (!(trade.dex.type == DexType.UniswapV2)) {
                _context2.next = 59;
                break;
              }

              _context2.prev = 20;
              _context2.t0 = trade.dex;
              _context2.t1 = trade.trade;
              _context2.t2 = feeOnTransfer;
              _context2.t3 = trade.allowedSlippage;
              _context2.next = 27;
              return wallet.getAddress();

            case 27:
              _context2.t4 = _context2.sent;
              _context2.t5 = deadline;
              _context2.t6 = {
                feeOnTransfer: _context2.t2,
                allowedSlippage: _context2.t3,
                recipient: _context2.t4,
                ttl: _context2.t5
              };
              swapParameters = _context2.t0.swapCallParameters.call(_context2.t0, _context2.t1, _context2.t6);
              console.log(nowTimeString() + " Prepare swap parameters: " + JSON.stringify(swapParameters));
              routerContract = new Contract(trade.dex.routerAddress, trade.dex.getRouter02Json(), wallet.getSignerOrProvider());
              value = swapParameters.value;
              options = !value || isZero(value) ? {} : {
                value: value
              };
              _context2.next = 37;
              return (_routerContract$funct = routerContract.functions)[swapParameters.methodName].apply(_routerContract$funct, swapParameters.args.concat([options]));

            case 37:
              tx = _context2.sent;
              console.log(nowTimeString() + " Trade executing");
              console.log(tx);
              _context2.next = 42;
              return tx.wait();

            case 42:
              console.log(nowTimeString() + " SUCCESS!!!!!");
              _context2.next = 57;
              break;

            case 46:
              _context2.prev = 46;
              _context2.t7 = _context2["catch"](20);
              console.error("Failed to execute trade", _context2.t7);

              if (!feeOnTransfer) {
                _context2.next = 56;
                break;
              }

              console.log("Try to execute trade again");
              _context2.next = 53;
              return SwapUtil.executeTrade(trade, wallet, deadline, false, false);

            case 53:
              return _context2.abrupt("return", _context2.sent);

            case 56:
              throw _context2.t7;

            case 57:
              _context2.next = 65;
              break;

            case 59:
              if (!(trade.dex.type == DexType.Acryptos)) {
                _context2.next = 64;
                break;
              }

              _context2.next = 62;
              return ACryptoS.executeTrade(trade, wallet);

            case 62:
              _context2.next = 65;
              break;

            case 64:
              throw new Error("Unsupported DEX Type");

            case 65:
              _context2.next = 67;
              return WalletUtil.getBalance(wallet, trade.tokenOut);

            case 67:
              outBalanceAfter = _context2.sent;
              console.log(nowTimeString() + " " + trade.tokenOut.symbol + " balance after trade: " + formatEther(outBalanceAfter) + " " + trade.tokenOut.symbol);
              gap = outBalanceAfter.sub(outBalanceBefore);
              console.log(nowTimeString() + " Actual received：" + formatEther(gap) + " " + trade.tokenOut.symbol);
              return _context2.abrupt("return", gap);

            case 74:
              _context2.prev = 74;
              _context2.t8 = _context2["catch"](10);
              throw _context2.t8;

            case 77:
              _context2.prev = 77;
              this.TRADING_TOKENS = _extends({}, this.TRADING_TOKENS, (_extends3 = {}, _extends3[trade.tokenIn.address] = false, _extends3[trade.tokenOut.address] = false, _extends3));
              return _context2.finish(77);

            case 80:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[10, 74, 77, 80], [20, 46]]);
    }));

    function executeTrade(_x5, _x6, _x7, _x8, _x9) {
      return _executeTrade.apply(this, arguments);
    }

    return executeTrade;
  }();

  return SwapUtil;
}();
SwapUtil.TRADING_TOKENS = {};

var ScanUtil = /*#__PURE__*/function () {
  function ScanUtil() {}

  ScanUtil.getTransactionsByAddress = /*#__PURE__*/function () {
    var _getTransactionsByAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(address, chainId, sort, page, pageSize) {
      var _ChainConfig$getChain;

      var apiUrl, apiKey, params, json, result, _iterator, _step, t;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (sort === void 0) {
                sort = "desc";
              }

              if (page === void 0) {
                page = 1;
              }

              if (pageSize === void 0) {
                pageSize = 100;
              }

              apiUrl = ChainConfig.getChainConfig(chainId).scanApiAddress;
              !apiUrl ? process.env.NODE_ENV !== "production" ? invariant(false, "Scan API adddress not set") : invariant(false) : void 0;
              apiKey = (_ChainConfig$getChain = ChainConfig.getChainConfig(chainId).scanApiKKey) != null ? _ChainConfig$getChain : "YourApiKeyToken";
              params = {
                module: "account",
                action: "txlist",
                address: address,
                startblock: 1,
                endblock: 99999999,
                sort: sort,
                apikey: apiKey,
                page: page,
                offset: pageSize
              };
              _context.next = 9;
              return axios.get(apiUrl, {
                params: params
              });

            case 9:
              json = _context.sent;
              result = [];

              for (_iterator = _createForOfIteratorHelperLoose(json.data.result); !(_step = _iterator()).done;) {
                t = _step.value;
                result.push({
                  hash: t.hash,
                  to: t.to,
                  from: t.from,
                  nonce: Number(t.nonce),
                  gasLimit: BigNumber.from(t.gas),
                  gasPrice: BigNumber.from(t.gasPrice),
                  data: t.input,
                  value: BigNumber.from(t.value),
                  chainId: chainId
                });
              }

              return _context.abrupt("return", result);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getTransactionsByAddress(_x, _x2, _x3, _x4, _x5) {
      return _getTransactionsByAddress.apply(this, arguments);
    }

    return getTransactionsByAddress;
  }();

  ScanUtil.getParsedTransactionByHash = /*#__PURE__*/function () {
    var _getParsedTransactionByHash = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(hash, chainId, abi) {
      var provider, trans, inter;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              provider = ProviderUtil.getJsonRPCProvider(chainId);
              _context2.next = 3;
              return provider.getTransaction(hash);

            case 3:
              trans = _context2.sent;
              inter = new Interface(abi);
              return _context2.abrupt("return", inter.parseTransaction(trans));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getParsedTransactionByHash(_x6, _x7, _x8) {
      return _getParsedTransactionByHash.apply(this, arguments);
    }

    return getParsedTransactionByHash;
  }();

  return ScanUtil;
}();

var WETH_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "guy",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "src",
				type: "address"
			},
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "deposit",
		outputs: [
		],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			},
			{
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "guy",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Withdrawal",
		type: "event"
	}
];

var _DEFAULT_DEX;
var TokenUtil = /*#__PURE__*/function () {
  function TokenUtil() {}

  /**
   * [getTokenTransferFee description]
   * @param  token [description]
   * @return       return 50 if fee percent is 5%
   */
  TokenUtil.getTokenTransferFee =
  /*#__PURE__*/
  function () {
    var _getTokenTransferFee = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(token) {
      var provider, page, maxPage, lastFee, transactions, inter, _iterator, _step, trans, desc, amt, to, receipt, sumReceiveAmt, _iterator2, _step2, rawLog, log, fee;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log("Analyzing the transfer fee of [" + token.symbol + "]");
              provider = ProviderUtil.getJsonRPCProvider(token.chainId);
              page = 1;
              maxPage = 100;

            case 5:
              if (!(page <= maxPage)) {
                _context.next = 41;
                break;
              }

              _context.next = 8;
              return ScanUtil.getTransactionsByAddress(token.address, token.chainId, "desc", page);

            case 8:
              transactions = _context.sent;
              inter = new Interface(ERC20); // console.log(transactions);

              _iterator = _createForOfIteratorHelperLoose(transactions);

            case 11:
              if ((_step = _iterator()).done) {
                _context.next = 38;
                break;
              }

              trans = _step.value;

              if (!(trans.to.toLowerCase() != token.address.toLowerCase())) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("continue", 36);

            case 15:
              if (trans.hash) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("continue", 36);

            case 17:
              desc = inter.parseTransaction(trans);

              if (!(desc.signature == "transfer(address,uint256)")) {
                _context.next = 36;
                break;
              }

              amt = desc.args._value;
              to = desc.args._to;
              _context.next = 23;
              return provider.getTransactionReceipt(trans.hash);

            case 23:
              receipt = _context.sent;
              sumReceiveAmt = BigNumber.from(0);

              for (_iterator2 = _createForOfIteratorHelperLoose(receipt.logs); !(_step2 = _iterator2()).done;) {
                rawLog = _step2.value;
                log = inter.parseLog(rawLog);

                if (rawLog.topics[0] == TokenUtil.TRANSFER_HASH) {
                  //it's a transfer event
                  if (log.args.to.toLowerCase() == to.toLowerCase()) {
                    sumReceiveAmt = sumReceiveAmt.add(log.args.value);
                  }
                }
              }

              if (!sumReceiveAmt.gt(0)) {
                _context.next = 36;
                break;
              }

              fee = amt.sub(sumReceiveAmt).mul(1000).div(amt);
              console.log("The transfer fee of [" + token.symbol + "] may be " + fee + "‰");

              if (!(lastFee && fee.eq(lastFee))) {
                _context.next = 34;
                break;
              }

              console.log("Double checked! The transfer fee of [" + token.symbol + "] should be " + fee + "‰");
              return _context.abrupt("return", fee);

            case 34:
              lastFee = fee;
              return _context.abrupt("continue", 36);

            case 36:
              _context.next = 11;
              break;

            case 38:
              page++;
              _context.next = 5;
              break;

            case 41:
              if (!lastFee) {
                _context.next = 44;
                break;
              }

              console.log("Only one event! The transfer fee of [" + token.symbol + "] should be " + lastFee + "‰");
              return _context.abrupt("return", lastFee);

            case 44:
              _context.next = 49;
              break;

            case 46:
              _context.prev = 46;
              _context.t0 = _context["catch"](0);
              console.error("Error occurred when finding transfer fee for [" + token.symbol + "]", _context.t0);

            case 49:
              console.log("No transfer fee founded for [" + token.symbol + "]");
              return _context.abrupt("return", BigNumber.from(0));

            case 51:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 46]]);
    }));

    function getTokenTransferFee(_x) {
      return _getTokenTransferFee.apply(this, arguments);
    }

    return getTokenTransferFee;
  }();

  TokenUtil.wrapWETH = /*#__PURE__*/function () {
    var _wrapWETH = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(wallet, amount, chainId) {
      var contract, tx;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              contract = new Contract(WETH == null ? void 0 : WETH[chainId].address, WETH_ABI, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " Wrap " + formatEther(amount) + " " + Token.getETHToken(chainId).symbol + " to " + (WETH == null ? void 0 : WETH[chainId].symbol));
              _context2.next = 4;
              return contract.callStatic["deposit"]({
                value: amount
              });

            case 4:
              _context2.next = 6;
              return contract.deposit({
                value: amount
              });

            case 6:
              tx = _context2.sent;
              _context2.next = 9;
              return tx.wait();

            case 9:
              console.log(nowTimeString() + " Success!!!");

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function wrapWETH(_x2, _x3, _x4) {
      return _wrapWETH.apply(this, arguments);
    }

    return wrapWETH;
  }();

  TokenUtil.unwrapWETH = /*#__PURE__*/function () {
    var _unwrapWETH = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(wallet, amount, chainId) {
      var contract, tx;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              contract = new Contract(WETH == null ? void 0 : WETH[chainId].address, WETH_ABI, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " Unwrap " + formatEther(amount) + " " + (WETH == null ? void 0 : WETH[chainId].symbol) + " to " + Token.getETHToken(chainId).symbol);
              _context3.next = 4;
              return contract.callStatic["withdraw"](amount);

            case 4:
              _context3.next = 6;
              return contract.withdraw(amount);

            case 6:
              tx = _context3.sent;
              _context3.next = 9;
              return tx.wait();

            case 9:
              console.log(nowTimeString() + " Success!!!");

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function unwrapWETH(_x5, _x6, _x7) {
      return _unwrapWETH.apply(this, arguments);
    }

    return unwrapWETH;
  }();

  TokenUtil.getTokenByAddress = /*#__PURE__*/function () {
    var _getTokenByAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(address, chainId) {
      var isAddressSearch, tokenContract, symbol, decimal, name;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isAddressSearch = isAddress(address);

              if (!isAddressSearch) {
                _context4.next = 16;
                break;
              }

              tokenContract = new Contract(isAddressSearch, ERC20, ProviderUtil.getJsonRPCProvider(chainId));
              _context4.next = 5;
              return tokenContract.symbol();

            case 5:
              symbol = _context4.sent;
              console.log("detected unknown token symbol: " + symbol);
              _context4.next = 9;
              return tokenContract.decimals();

            case 9:
              decimal = _context4.sent;
              console.log("detected unknown token decimals: " + decimal);
              _context4.next = 13;
              return tokenContract.name();

            case 13:
              name = _context4.sent;
              console.log("detected unknown token name: " + name);
              return _context4.abrupt("return", new Token(chainId, address, decimal, symbol, name));

            case 16:
              return _context4.abrupt("return");

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function getTokenByAddress(_x8, _x9) {
      return _getTokenByAddress.apply(this, arguments);
    }

    return getTokenByAddress;
  }();

  return TokenUtil;
}();
TokenUtil.TRANSFER_HASH = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"; // returns the checksummed address if the address is valid, otherwise returns false

function isAddress(value) {
  try {
    return getAddress(value);
  } catch (_unused) {
    return false;
  }
}
var DEFAULT_DEX = (_DEFAULT_DEX = {}, _DEFAULT_DEX[ChainId.BSCMAINNET] = DexFactory.PANCAKESWAP, _DEFAULT_DEX[ChainId.HECOMAINNET] = DexFactory.MDEX, _DEFAULT_DEX[ChainId.BSCTESTNET] = DexFactory.PANCAKESWAP_TEST, _DEFAULT_DEX);
var ETH_PRICE_CACHE;
function getETHPrice(_x10) {
  return _getETHPrice.apply(this, arguments);
}

function _getETHPrice() {
  _getETHPrice = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(toToken) {
    var _ETH_PRICE_CACHE, _ETH_PRICE_CACHE2, _extends2;

    var key, _ETH_PRICE_CACHE3, trade, price;

    return runtime_1.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            key = toToken.address + "|" + toToken.chainId;

            if (!(((_ETH_PRICE_CACHE = ETH_PRICE_CACHE) == null ? void 0 : _ETH_PRICE_CACHE[key]) != undefined && ((_ETH_PRICE_CACHE2 = ETH_PRICE_CACHE) == null ? void 0 : _ETH_PRICE_CACHE2[key].timestamp) >= new Date().getTime() - 30 * 60 * 1000)) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", (_ETH_PRICE_CACHE3 = ETH_PRICE_CACHE) == null ? void 0 : _ETH_PRICE_CACHE3[key].price);

          case 3:
            _context5.next = 5;
            return TradeUtil.getBestTradeExactIn(WETH[toToken.chainId], "1", toToken, DEFAULT_DEX[toToken.chainId]);

          case 5:
            trade = _context5.sent;
            price = BigNumber.from(trade.outputAmount.raw.toString());
            console.log("Current " + WETH[toToken.chainId].symbol + " price：1 " + WETH[toToken.chainId].symbol + "=" + formatUnits(price, toToken.decimals) + toToken.symbol);
            ETH_PRICE_CACHE = _extends({}, ETH_PRICE_CACHE, (_extends2 = {}, _extends2[key] = {
              price: price,
              timestamp: new Date().getTime()
            }, _extends2));
            return _context5.abrupt("return", price);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getETHPrice.apply(this, arguments);
}

var contractName = "NewHarborRouter";
var abi$4 = [
	{
		inputs: [
			{
				internalType: "address[]",
				name: "_dexRouterAddress",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "_dexSwapFunctionsIndex",
				type: "uint256[]"
			},
			{
				internalType: "bool[]",
				name: "_dexInternalRouteSupported",
				type: "bool[]"
			},
			{
				internalType: "address",
				name: "_weth",
				type: "address"
			},
			{
				internalType: "address",
				name: "_feeAddress",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_feePercent",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "routerAddress",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "fromToken",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "toToken",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "flags",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "contract IERC20[]",
				name: "shuttleTokens",
				type: "address[]"
			}
		],
		name: "CallExternalSwap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "Paused",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "caller",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "fromToken",
				type: "address"
			},
			{
				indexed: true,
				internalType: "contract IERC20",
				name: "toToken",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "inputAmount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "minReturnAmount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "actualReturnAmount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "fee",
				type: "uint256"
			}
		],
		name: "Swapped",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "Unpaused",
		type: "event"
	},
	{
		inputs: [
		],
		name: "feePercent",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "paused",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "_dexRouterAddress",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "_dexSwapFunctionsIndex",
				type: "uint256[]"
			},
			{
				internalType: "bool[]",
				name: "_dexInternalRouteSupported",
				type: "bool[]"
			},
			{
				internalType: "address",
				name: "_weth",
				type: "address"
			},
			{
				internalType: "address",
				name: "_feeAddress",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_feePercent",
				type: "uint256"
			}
		],
		name: "updateConfig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "poolAddress",
				type: "address"
			},
			{
				internalType: "address[]",
				name: "coins",
				type: "address[]"
			}
		],
		name: "addCurveCoins",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "splitAmount",
				type: "uint256[]"
			},
			{
				components: [
					{
						internalType: "contract IERC20[]",
						name: "tokens",
						type: "address[]"
					},
					{
						internalType: "uint256[]",
						name: "distributions",
						type: "uint256[]"
					}
				],
				internalType: "struct NewHarborRouter.SwapRoute[]",
				name: "routes",
				type: "tuple[]"
			},
			{
				internalType: "uint256",
				name: "minReturnAmount",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "flags",
				type: "uint256"
			}
		],
		name: "swap",
		outputs: [
			{
				internalType: "uint256",
				name: "returnAmount",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "pause",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "unpause",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "kill",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var NewHarborRouter = {
	contractName: contractName,
	abi: abi$4
};

var NewHarborRouterUtil = /*#__PURE__*/function () {
  function NewHarborRouterUtil() {}

  NewHarborRouterUtil.getAbi = function getAbi() {
    return NewHarborRouter.abi;
  };

  return NewHarborRouterUtil;
}();

var defaultInAmountUSDT = "65";
var defaultInAmountBNB = "5";
var list = [
	{
		tokenIn: "WBNB",
		tokenShuttle: "TWT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "JulSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "TWT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "JulSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "DOT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "JulSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "DOT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "JulSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "ETH",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "nyanswop"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "ETH",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "nyanswop",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "THUGS",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "StreetSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "THUGS",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "StreetSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "FUEL",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "StreetSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "FUEL",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "StreetSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "CheeseSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "CheeseSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "CheeseSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "CheeseSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "CheeseSwap",
		dex2: "StormSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "StormSwap",
		dex2: "CheeseSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "THUGS",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "NarwhalSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "THUGS",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "BscSwap",
		dex2: "NarwhalSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "JulSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "JulSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BakerySwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BakerySwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BakerySwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BakerySwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "ETH",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "ETH",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BscSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "USDT",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "USDT",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BscSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BurgerSwap",
		dex2: "BscSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BscSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "WBNB",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "USDT",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "BUSD",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "BUSD",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "WBNB",
		tokenShuttle: "FRIES",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "FRIES",
		tokenShuttle: "USDT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "BurgerSwap",
		dex2: "PancakeSwap"
	},
	{
		tokenIn: "FRIES",
		tokenShuttle: "USDT",
		chainId: 56,
		allowedSlippage: 2,
		dex1: "PancakeSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "BUSD",
		tokenShuttle: "BURGER",
		tokenOut: "QUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BurgerSwap",
		dex2: "BurgerSwap"
	},
	{
		tokenIn: "QUSD",
		tokenShuttle: "BURGER",
		tokenOut: "BUSD",
		chainId: 56,
		allowedSlippage: 0.5,
		dex1: "BurgerSwap",
		dex2: "BurgerSwap"
	}
];
var searchChanceJsonData = {
	defaultInAmountUSDT: defaultInAmountUSDT,
	defaultInAmountBNB: defaultInAmountBNB,
	list: list
};

var SearchChanceJsonData = /*#__PURE__*/function () {
  function SearchChanceJsonData() {}

  SearchChanceJsonData.getChanceJsonData = function getChanceJsonData() {
    return searchChanceJsonData;
  };

  return SearchChanceJsonData;
}();

var ChangeModel = function ChangeModel(tokenIn, tokenShuttle, dex1, dex2, chainId, allowedSlippage, tokenOut) {
  this.tokenIn = tokenIn;
  this.tokenShuttle = tokenShuttle;
  this.tokenOut = tokenOut;
  this.dex1 = dex1;
  this.dex2 = dex2;
  this.chainId = chainId;
  this.allowedSlippage = allowedSlippage;
};

function wrappedCurrency$1(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency === ETHER) return WETH[chainId];
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}

var DexTrade = /*#__PURE__*/function () {
  function DexTrade(dex, trade, allowedSlippage) {
    if (allowedSlippage === void 0) {
      allowedSlippage = PERCENT_05;
    }

    this.dex = dex;
    this.trade = trade;
    this.allowedSlippage = allowedSlippage;
  }

  _createClass(DexTrade, [{
    key: "minimumAmountOut",
    get: function get() {
      return this.trade.minimumAmountOut(this.allowedSlippage);
    }
  }, {
    key: "amountIn",
    get: function get() {
      return this.trade.inputAmount;
    }
  }, {
    key: "tokenIn",
    get: function get() {
      return wrappedCurrency$1(this.trade.inputAmount.currency, this.dex.chainId);
    }
  }, {
    key: "tokenOut",
    get: function get() {
      return wrappedCurrency$1(this.trade.outputAmount.currency, this.dex.chainId);
    }
  }]);

  return DexTrade;
}();
/**
 * Arbi计划
 */

var ArbiPlan = /*#__PURE__*/function () {
  function ArbiPlan(trades) {
    this.trades = [];
    !(trades.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "TRADES LENGTH ZERO") : invariant(false) : void 0;
    this.trades = trades;
  }

  _createClass(ArbiPlan, [{
    key: "firstTrade",
    get: function get() {
      return this.trades[0];
    }
  }, {
    key: "lastTrade",
    get: function get() {
      return this.trades[this.trades.length - 1];
    }
  }, {
    key: "inputToken",
    get: function get() {
      return wrappedCurrency$1(this.firstTrade.amountIn.currency, this.firstTrade.dex.chainId);
    }
  }, {
    key: "outputToken",
    get: function get() {
      return wrappedCurrency$1(this.lastTrade.minimumAmountOut.currency, this.lastTrade.dex.chainId);
    }
  }, {
    key: "revenue",
    get: function get() {
      return new Fraction(JSBI.subtract(this.lastTrade.minimumAmountOut.raw, this.firstTrade.amountIn.raw), this.firstTrade.amountIn.denominator);
    }
  }]);

  return ArbiPlan;
}();

var ArbiUtil = /*#__PURE__*/function () {
  function ArbiUtil() {}

  //tokenOut 为null时 tokenOwned 为输出token，否则tokenOut为输出token
  ArbiUtil.findArbiPlanExactInAndDex =
  /*#__PURE__*/
  function () {
    var _findArbiPlanExactInAndDex = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenOwned, tokenShuttle, dex1, dex2, tokenOut) {
      var trade2TokenOut, trade1, trade2In, trade2, dexTrade1, dexTrade2;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (tokenOut != null && tokenOut != undefined) {
                trade2TokenOut = tokenOut;
              } else {
                trade2TokenOut = tokenOwned.token;
              }

              _context.next = 3;
              return TradeUtil.getBestTradeExactIn(tokenOwned.token, tokenOwned.toExact(), tokenShuttle, dex1.dexFactory);

            case 3:
              trade1 = _context.sent;
              !(trade1 != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "TRADE1") : invariant(false) : void 0;
              trade2In = trade1.minimumAmountOut(dex1.allowedSlippage);
              _context.next = 8;
              return TradeUtil.getBestTradeExactIn(tokenShuttle, trade2In.toExact(), trade2TokenOut, dex2.dexFactory);

            case 8:
              trade2 = _context.sent;
              !(trade2 != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "TRADE2") : invariant(false) : void 0; // const finalOut=trade2.minimumAmountOut(dex2.allowedSlippage);

              dexTrade1 = new DexTrade(dex1.dexFactory, trade1, dex1.allowedSlippage);
              dexTrade2 = new DexTrade(dex2.dexFactory, trade2, dex2.allowedSlippage);
              return _context.abrupt("return", new ArbiPlan([dexTrade1, dexTrade2]));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findArbiPlanExactInAndDex(_x, _x2, _x3, _x4, _x5) {
      return _findArbiPlanExactInAndDex.apply(this, arguments);
    }

    return findArbiPlanExactInAndDex;
  }();

  return ArbiUtil;
}();

var _AggSwapRoute$DEX_IND;
var AggSwapRoute = /*#__PURE__*/function () {
  function AggSwapRoute(inputAmount, tokens, distributions) {
    !(tokens.length >= 2) ? process.env.NODE_ENV !== "production" ? invariant(false, "At least 2 tokens for a route") : invariant(false) : void 0;
    !(tokens.length - 1 == distributions.length) ? process.env.NODE_ENV !== "production" ? invariant(false, "The length of tokens must match the length of dex distribution") : invariant(false) : void 0;
    this.inputAmount = inputAmount;
    this.tokens = tokens;
    this.distributions = distributions;
    this.checkDistributions();
  }

  AggSwapRoute.getSupportedDEXes = function getSupportedDEXes(chainId) {
    var _this = this;

    var all = DexFactory.getAllDexFactory(chainId);
    return all.filter(function (x) {
      var _this$DEX_INDEX_MAP;

      return ((_this$DEX_INDEX_MAP = _this.DEX_INDEX_MAP) == null ? void 0 : _this$DEX_INDEX_MAP[x.key]) != undefined;
    });
  };

  var _proto = AggSwapRoute.prototype;

  _proto.checkDistributions = function checkDistributions() {
    for (var _iterator = _createForOfIteratorHelperLoose(this.distributions), _step; !(_step = _iterator()).done;) {
      var d = _step.value;
      !(d.length <= 16) ? process.env.NODE_ENV !== "production" ? invariant(false, "The length of dex assign cant be greater than 16") : invariant(false) : void 0;
      var sum = 0;

      for (var _iterator2 = _createForOfIteratorHelperLoose(d), _step2; !(_step2 = _iterator2()).done;) {
        var da = _step2.value;
        !(da.percentage >= 0 && da.percentage <= 100) ? process.env.NODE_ENV !== "production" ? invariant(false, "The percentage is illegal") : invariant(false) : void 0;
        sum += da.percentage;
      }

      !(sum == 100) ? process.env.NODE_ENV !== "production" ? invariant(false, "The sum of percentage must be equal to 100") : invariant(false) : void 0;
    }
  };

  _proto.toSwapRouteParameter = function toSwapRouteParameter() {
    var tokenAddresses = this.tokens.map(function (token) {
      return token.address;
    });
    var distWrap = [];

    for (var _iterator3 = _createForOfIteratorHelperLoose(this.distributions), _step3; !(_step3 = _iterator3()).done;) {
      var d = _step3.value;
      var distStr = "";

      for (var _iterator4 = _createForOfIteratorHelperLoose(d), _step4; !(_step4 = _iterator4()).done;) {
        var da = _step4.value;
        var dexIndex = AggSwapRoute.DEX_INDEX_MAP[da.dexFactory.key];
        !(dexIndex != undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, "Dex is not supported") : invariant(false) : void 0;
        distStr = AggSwapRoute.toUInt8Hex(dexIndex) + distStr;
        var percentage = da.percentage;
        distStr = AggSwapRoute.toUInt8Hex(percentage) + distStr;
      } //uint256,相当于64个16进制数，不足就左侧补0


      while (distStr.length < 64) {
        distStr = "0" + distStr;
      }

      distStr = "0x" + distStr;
      distWrap.push(BigNumber.from(distStr));
    }

    return new SwapRouteParameter(tokenAddresses, distWrap);
  };

  AggSwapRoute.toUInt8Hex = function toUInt8Hex(x) {
    var s = x.toString(16);

    if (s.length > 2) {
      s = s.substring(s.length - 2);
    } else if (s.length == 1) {
      s = "0" + s;
    } else if (s.length == 0) {
      s = "00";
    }

    return s;
  };

  _createClass(AggSwapRoute, [{
    key: "fromToken",
    get: function get() {
      return this.tokens[0];
    }
  }, {
    key: "toToken",
    get: function get() {
      return this.tokens[this.tokens.length - 1];
    }
  }]);

  return AggSwapRoute;
}();
AggSwapRoute.DEX_INDEX_MAP = (_AggSwapRoute$DEX_IND = {}, _AggSwapRoute$DEX_IND[DexFactory.PANCAKESWAP.key] = 0, _AggSwapRoute$DEX_IND[DexFactory.BURGERSWAP.key] = 1, _AggSwapRoute$DEX_IND[DexFactory.ACS4QUSD.key] = 2, _AggSwapRoute$DEX_IND[DexFactory.BAKERYSWAP.key] = 3, _AggSwapRoute$DEX_IND[DexFactory.BSCSWAP.key] = 4, _AggSwapRoute$DEX_IND[DexFactory.JULSWAP.key] = 5, _AggSwapRoute$DEX_IND[DexFactory.APESWAP.key] = 6, _AggSwapRoute$DEX_IND[DexFactory.STREETSWAP.key] = 7, _AggSwapRoute$DEX_IND[DexFactory.NARWHALSWAP.key] = 8, _AggSwapRoute$DEX_IND[DexFactory.NYANSWOP.key] = 9, _AggSwapRoute$DEX_IND[DexFactory.CHEESESWAP.key] = 10, _AggSwapRoute$DEX_IND[DexFactory.DANKSWAP.key] = 11, _AggSwapRoute$DEX_IND[DexFactory.PHOSWAP.key] = 12, _AggSwapRoute$DEX_IND[DexFactory.SOFTDRINKSWAP.key] = 13, _AggSwapRoute$DEX_IND[DexFactory.MDEX_BSC.key] = 15, _AggSwapRoute$DEX_IND[DexFactory.PANCAKESWAPV2.key] = 16, _AggSwapRoute$DEX_IND[DexFactory.BALLSWAP.key] = 17, _AggSwapRoute$DEX_IND[DexFactory.MDEX.key] = 0, _AggSwapRoute$DEX_IND[DexFactory.LAVASWAP.key] = 1, _AggSwapRoute$DEX_IND[DexFactory.DOGESWAP.key] = 2, _AggSwapRoute$DEX_IND[DexFactory.MDIS.key] = 3, _AggSwapRoute$DEX_IND[DexFactory.PIPPISHRIMP.key] = 5, _AggSwapRoute$DEX_IND[DexFactory.AVANTSPORT.key] = 6, _AggSwapRoute$DEX_IND[DexFactory.COMPLUS.key] = 7, _AggSwapRoute$DEX_IND[DexFactory.CIRCLESWAP.key] = 8, _AggSwapRoute$DEX_IND[DexFactory.BXH.key] = 9, _AggSwapRoute$DEX_IND);
var DexAssign = function DexAssign(dexFactory, percentage) {
  this.dexFactory = dexFactory;
  this.percentage = percentage;
};
var SwapRouteParameter = function SwapRouteParameter(tokens, distributions) {
  this.tokens = tokens;
  this.distributions = distributions;
};
var AggRouterSwapParameter = function AggRouterSwapParameter(splitAmount, routes, minReturnAmount, flags) {
  if (flags === void 0) {
    flags = BigNumber.from(0);
  }

  this.splitAmount = splitAmount;
  this.routes = routes;
  this.minReturnAmount = minReturnAmount;
  this.flags = flags;
};
var AggSwapPlan = /*#__PURE__*/function () {
  function AggSwapPlan(swapRouteList, minReturnAmount, chainId) {
    if (chainId === void 0) {
      chainId = ChainId.BSCMAINNET;
    }

    !(swapRouteList.length >= 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "At least 1 swap route needed") : invariant(false) : void 0;
    this.swapRouteList = swapRouteList;
    this.minReturnAmount = minReturnAmount;
    this.chainId = chainId;
    this.checkSwapRouteList();
  }

  var _proto2 = AggSwapPlan.prototype;

  _proto2.checkSwapRouteList = function checkSwapRouteList() {
    var fromToken = this.swapRouteList[0].fromToken;
    var toToken = this.swapRouteList[0].toToken;

    for (var _iterator5 = _createForOfIteratorHelperLoose(this.swapRouteList), _step5; !(_step5 = _iterator5()).done;) {
      var a = _step5.value;
      !a.fromToken.equals(fromToken) ? process.env.NODE_ENV !== "production" ? invariant(false, "The first token of the swap routes must be same") : invariant(false) : void 0;
      !a.toToken.equals(toToken) ? process.env.NODE_ENV !== "production" ? invariant(false, "The last token of the swap routes must be same") : invariant(false) : void 0;
    }
  };

  _proto2.getAggSwapCallArgs = function getAggSwapCallArgs() {
    var splitAmount = this.swapRouteList.map(function (r) {
      return r.inputAmount;
    });
    var routes = this.swapRouteList.map(function (r) {
      return r.toSwapRouteParameter();
    });
    return new AggRouterSwapParameter(splitAmount, routes, this.minReturnAmount);
  };

  _createClass(AggSwapPlan, [{
    key: "fromToken",
    get: function get() {
      return this.swapRouteList[0].fromToken;
    }
  }, {
    key: "toToken",
    get: function get() {
      return this.swapRouteList[0].toToken;
    }
  }, {
    key: "inputAmount",
    get: function get() {
      var sum = BigNumber.from(0);

      for (var _iterator6 = _createForOfIteratorHelperLoose(this.swapRouteList), _step6; !(_step6 = _iterator6()).done;) {
        var router = _step6.value;
        sum = sum.add(router.inputAmount);
      }

      return sum;
    }
  }]);

  return AggSwapPlan;
}();

var ZERO_HEX$2 = '0x0';
var CallMode;

(function (CallMode) {
  CallMode[CallMode["ESTIMATE_GAS"] = 0] = "ESTIMATE_GAS";
  CallMode[CallMode["CALL_STATIC"] = 1] = "CALL_STATIC";
  CallMode[CallMode["EXECUTE"] = 2] = "EXECUTE";
})(CallMode || (CallMode = {}));

var AggRouter = /*#__PURE__*/function () {
  function AggRouter() {}

  AggRouter.isZero = function isZero(hexNumberString) {
    return /^0x0*$/.test(hexNumberString);
  };

  AggRouter.swap = /*#__PURE__*/function () {
    var _swap = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(plan, wallet, callMode, gasLimit) {
      var routeAddress, inBalanceBefore, outBalanceBefore, contract, param, value, options, tx, rpt, outBalanceAfter, gap, gasFee, _gasLimit, _gasFee;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (callMode === void 0) {
                callMode = CallMode.EXECUTE;
              }

              routeAddress = ChainConfig.getChainConfig(plan.chainId).newHarborRouterAddress;
              !(routeAddress != undefined && validateAndParseAddress(routeAddress)) ? process.env.NODE_ENV !== "production" ? invariant(false, "Invalid router address") : invariant(false) : void 0;
              _context.next = 5;
              return WalletUtil.getBalance(wallet, plan.fromToken);

            case 5:
              inBalanceBefore = _context.sent;
              !inBalanceBefore.gte(plan.inputAmount) ? process.env.NODE_ENV !== "production" ? invariant(false, "No enough balance") : invariant(false) : void 0;
              _context.next = 9;
              return WalletUtil.getBalance(wallet, plan.toToken);

            case 9:
              outBalanceBefore = _context.sent;
              console.log(nowTimeString() + " " + plan.toToken.symbol + " balance before trade: " + formatUnits(outBalanceBefore, plan.toToken.decimals) + " " + plan.toToken.symbol);
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              param = plan.getAggSwapCallArgs();
              console.log("Prepare newharbor router swap parameters: " + JSON.stringify(param));
              value = ZERO_HEX$2;

              if (plan.fromToken.isETH()) {
                value = plan.inputAmount.toHexString();
              }

              options = AggRouter.isZero(value) ? {
                gasLimit: gasLimit
              } : {
                value: value,
                gasLimit: gasLimit
              };

              if (!(callMode == CallMode.EXECUTE)) {
                _context.next = 39;
                break;
              }

              _context.next = 20;
              return contract.callStatic["swap"](param.splitAmount, param.routes, param.minReturnAmount, 0, options);

            case 20:
              console.log(nowTimeString() + " NewHarbor Router swap executing...");
              _context.next = 23;
              return contract.swap(param.splitAmount, param.routes, param.minReturnAmount, 0, options);

            case 23:
              tx = _context.sent;
              console.log(tx);
              _context.next = 27;
              return tx.wait();

            case 27:
              rpt = _context.sent;
              console.log(nowTimeString() + " SUCCESS!!!!!");
              _context.next = 31;
              return WalletUtil.getBalance(wallet, plan.toToken);

            case 31:
              outBalanceAfter = _context.sent;
              console.log(nowTimeString() + " " + plan.toToken.symbol + " balance after trade: " + formatUnits(outBalanceAfter, plan.toToken.decimals) + " " + plan.toToken.symbol);
              gap = outBalanceAfter.sub(outBalanceBefore);
              gasFee = rpt.gasUsed.mul(tx.gasPrice);
              console.log(nowTimeString() + " Actual received：" + formatUnits(gap, plan.toToken.decimals) + " " + plan.toToken.symbol);
              return _context.abrupt("return", {
                gap: gap,
                gasFee: gasFee,
                gas: rpt.gasUsed
              });

            case 39:
              if (!(callMode == CallMode.CALL_STATIC)) {
                _context.next = 45;
                break;
              }

              _context.next = 42;
              return contract.callStatic["swap"](param.splitAmount, param.routes, param.minReturnAmount, 0, options);

            case 42:
              return _context.abrupt("return", {
                gap: BigNumber.from(0),
                gasFee: BigNumber.from(0),
                gas: BigNumber.from(0)
              });

            case 45:
              _context.next = 47;
              return contract.callStatic["swap"](param.splitAmount, param.routes, param.minReturnAmount, 0, options);

            case 47:
              console.log(nowTimeString() + " NewHarbor Router estimating swap gas...");
              _context.next = 50;
              return contract.estimateGas.swap(param.splitAmount, param.routes, param.minReturnAmount, 0, options);

            case 50:
              _gasLimit = _context.sent;
              _context.t0 = _gasLimit;
              _context.next = 54;
              return wallet.getGasPrice();

            case 54:
              _context.t1 = _context.sent;
              _gasFee = _context.t0.mul.call(_context.t0, _context.t1);
              console.log(nowTimeString() + " Estimated gas fee: " + formatEther(_gasFee));
              return _context.abrupt("return", {
                gap: BigNumber.from(0),
                gasFee: _gasFee,
                gas: _gasLimit
              });

            case 58:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function swap(_x, _x2, _x3, _x4) {
      return _swap.apply(this, arguments);
    }

    return swap;
  }();

  AggRouter.pauseRouter = /*#__PURE__*/function () {
    var _pauseRouter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(chainId, wallet) {
      var routeAddress, contract, tx;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              routeAddress = ChainConfig.getChainConfig(chainId).newHarborRouterAddress;

              if (routeAddress) {
                _context2.next = 3;
                break;
              }

              throw new Error("newHarborRouterAddress not set");

            case 3:
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " NewHarbor Router pausing");
              _context2.next = 7;
              return contract.pause();

            case 7:
              tx = _context2.sent;
              console.log(tx);
              _context2.next = 11;
              return tx.wait();

            case 11:
              console.log(nowTimeString() + " Paused!!!!!");

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function pauseRouter(_x5, _x6) {
      return _pauseRouter.apply(this, arguments);
    }

    return pauseRouter;
  }();

  AggRouter.unpauseRouter = /*#__PURE__*/function () {
    var _unpauseRouter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(chainId, wallet) {
      var routeAddress, contract, tx;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              routeAddress = ChainConfig.getChainConfig(chainId).newHarborRouterAddress;

              if (routeAddress) {
                _context3.next = 3;
                break;
              }

              throw new Error("newHarborRouterAddress not set");

            case 3:
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " NewHarbor Router unpausing");
              _context3.next = 7;
              return contract.unpause();

            case 7:
              tx = _context3.sent;
              console.log(tx);
              _context3.next = 11;
              return tx.wait();

            case 11:
              console.log(nowTimeString() + " Unpaused!!!!!");

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function unpauseRouter(_x7, _x8) {
      return _unpauseRouter.apply(this, arguments);
    }

    return unpauseRouter;
  }();

  AggRouter.addCurveCoins = /*#__PURE__*/function () {
    var _addCurveCoins = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(poolAddress, coins, chainId, wallet) {
      var routeAddress, contract, tx;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              routeAddress = ChainConfig.getChainConfig(chainId).newHarborRouterAddress;

              if (routeAddress) {
                _context4.next = 3;
                break;
              }

              throw new Error("newHarborRouterAddress not set");

            case 3:
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " NewHarbor Router adding curve coins");
              _context4.next = 7;
              return contract.addCurveCoins(poolAddress, coins);

            case 7:
              tx = _context4.sent;
              console.log(tx);
              _context4.next = 11;
              return tx.wait();

            case 11:
              console.log(nowTimeString() + " SUCCESS!!!!!");

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function addCurveCoins(_x9, _x10, _x11, _x12) {
      return _addCurveCoins.apply(this, arguments);
    }

    return addCurveCoins;
  }();

  AggRouter.updateConfig = /*#__PURE__*/function () {
    var _updateConfig = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(_dexRouterAddress, _dexSwapFunctionsIndex, _dexInternalRouteSupported, _weth, _feeAddress, _feePercent, chainId, wallet) {
      var routeAddress, contract, tx;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              routeAddress = ChainConfig.getChainConfig(chainId).newHarborRouterAddress;

              if (routeAddress) {
                _context5.next = 3;
                break;
              }

              throw new Error("newHarborRouterAddress not set");

            case 3:
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " NewHarbor Router updating config");
              _context5.next = 7;
              return contract.updateConfig(_dexRouterAddress, _dexSwapFunctionsIndex, _dexInternalRouteSupported, _weth, _feeAddress, _feePercent);

            case 7:
              tx = _context5.sent;
              console.log(tx);
              _context5.next = 11;
              return tx.wait();

            case 11:
              console.log(nowTimeString() + " SUCCESS!!!!!");

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateConfig(_x13, _x14, _x15, _x16, _x17, _x18, _x19, _x20) {
      return _updateConfig.apply(this, arguments);
    }

    return updateConfig;
  }();

  AggRouter.killRouter = /*#__PURE__*/function () {
    var _killRouter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(chainId, wallet) {
      var routeAddress, contract, tx;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              routeAddress = ChainConfig.getChainConfig(chainId).newHarborRouterAddress;

              if (routeAddress) {
                _context6.next = 3;
                break;
              }

              throw new Error("newHarborRouterAddress not set");

            case 3:
              contract = new Contract(routeAddress, NewHarborRouter.abi, wallet.getSignerOrProvider());
              console.log(nowTimeString() + " Killing NewHarbor Router ");
              _context6.next = 7;
              return contract.kill();

            case 7:
              tx = _context6.sent;
              console.log(tx);
              _context6.next = 11;
              return tx.wait();

            case 11:
              console.log(nowTimeString() + " Killed!!!!!");

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function killRouter(_x21, _x22) {
      return _killRouter.apply(this, arguments);
    }

    return killRouter;
  }();

  return AggRouter;
}();

var abi$5 = [
	{
		name: "TokenExchange",
		inputs: [
			{
				type: "address",
				name: "buyer",
				indexed: true
			},
			{
				type: "int128",
				name: "sold_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_sold",
				indexed: false
			},
			{
				type: "int128",
				name: "bought_id",
				indexed: false
			},
			{
				type: "uint256",
				name: "tokens_bought",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "AddLiquidity",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[4]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[4]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "invariant",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidity",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[4]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[4]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidityOne",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256",
				name: "token_amount",
				indexed: false
			},
			{
				type: "uint256",
				name: "coin_amount",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RemoveLiquidityImbalance",
		inputs: [
			{
				type: "address",
				name: "provider",
				indexed: true
			},
			{
				type: "uint256[4]",
				name: "token_amounts",
				indexed: false
			},
			{
				type: "uint256[4]",
				name: "fees",
				indexed: false
			},
			{
				type: "uint256",
				name: "invariant",
				indexed: false
			},
			{
				type: "uint256",
				name: "token_supply",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "CommitNewAdmin",
		inputs: [
			{
				type: "uint256",
				name: "deadline",
				indexed: true
			},
			{
				type: "address",
				name: "admin",
				indexed: true
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "NewAdmin",
		inputs: [
			{
				type: "address",
				name: "admin",
				indexed: true
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "CommitNewFee",
		inputs: [
			{
				type: "uint256",
				name: "deadline",
				indexed: true
			},
			{
				type: "uint256",
				name: "fee",
				indexed: false
			},
			{
				type: "uint256",
				name: "admin_fee",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "NewFee",
		inputs: [
			{
				type: "uint256",
				name: "fee",
				indexed: false
			},
			{
				type: "uint256",
				name: "admin_fee",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "RampA",
		inputs: [
			{
				type: "uint256",
				name: "old_A",
				indexed: false
			},
			{
				type: "uint256",
				name: "new_A",
				indexed: false
			},
			{
				type: "uint256",
				name: "initial_time",
				indexed: false
			},
			{
				type: "uint256",
				name: "future_time",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		name: "StopRampA",
		inputs: [
			{
				type: "uint256",
				name: "A",
				indexed: false
			},
			{
				type: "uint256",
				name: "t",
				indexed: false
			}
		],
		anonymous: false,
		type: "event"
	},
	{
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_owner"
			},
			{
				type: "address[4]",
				name: "_coins"
			},
			{
				type: "address",
				name: "_pool_token"
			},
			{
				type: "uint256",
				name: "_A"
			},
			{
				type: "uint256",
				name: "_fee"
			},
			{
				type: "uint256",
				name: "_admin_fee"
			},
			{
				type: "address",
				name: "_admin_fee_address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		name: "A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "A_precise",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "get_virtual_price",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "calc_token_amount",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[4]",
				name: "amounts"
			},
			{
				type: "bool",
				name: "is_deposit"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "add_liquidity",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[4]",
				name: "amounts"
			},
			{
				type: "uint256",
				name: "min_mint_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "get_dy",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "exchange",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "int128",
				name: "i"
			},
			{
				type: "int128",
				name: "j"
			},
			{
				type: "uint256",
				name: "dx"
			},
			{
				type: "uint256",
				name: "min_dy"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "remove_liquidity",
		outputs: [
			{
				type: "uint256[4]",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_amount"
			},
			{
				type: "uint256[4]",
				name: "min_amounts"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "remove_liquidity_imbalance",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256[4]",
				name: "amounts"
			},
			{
				type: "uint256",
				name: "max_burn_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "calc_withdraw_one_coin",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_token_amount"
			},
			{
				type: "int128",
				name: "i"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "remove_liquidity_one_coin",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "_token_amount"
			},
			{
				type: "int128",
				name: "i"
			},
			{
				type: "uint256",
				name: "_min_amount"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "ramp_A",
		outputs: [
		],
		inputs: [
			{
				type: "uint256",
				name: "_future_A"
			},
			{
				type: "uint256",
				name: "_future_time"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "stop_ramp_A",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "commit_new_fee",
		outputs: [
		],
		inputs: [
			{
				type: "uint256",
				name: "new_fee"
			},
			{
				type: "uint256",
				name: "new_admin_fee"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "apply_new_fee",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "revert_new_parameters",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "commit_transfer_ownership",
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_owner"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "apply_transfer_ownership",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "revert_transfer_ownership",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "admin_balances",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "i"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "withdraw_admin_fees",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "donate_admin_fees",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "kill_me",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "unkill_me",
		outputs: [
		],
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "set_admin_fee_address",
		outputs: [
		],
		inputs: [
			{
				type: "address",
				name: "_admin_fee_address"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		name: "coins",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "arg0"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "balances",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
			{
				type: "uint256",
				name: "arg0"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_fee_address",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "owner",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "lp_token",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "initial_A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_A",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "initial_A_time",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_A_time",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "admin_actions_deadline",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "transfer_ownership_deadline",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_admin_fee",
		outputs: [
			{
				type: "uint256",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	},
	{
		name: "future_owner",
		outputs: [
			{
				type: "address",
				name: ""
			}
		],
		inputs: [
		],
		stateMutability: "view",
		type: "function"
	}
];
var ACSBasePool = {
	abi: abi$5
};

var CurveBasePool = /*#__PURE__*/function () {
  function CurveBasePool(A, balances, tokens, lp_token_totalSupply, fee) {
    this.A_PRECISION = 100;
    this.FEE_DENOMINATOR = BigNumber.from(10).pow(10);
    this.balances = balances;
    this.N_COINS = tokens.length;
    this.MAX_COIN = this.N_COINS - 1;
    this.PRECISION = BigNumber.from(10).pow(tokens[0].decimals);
    this.RATES = tokens.map(function (t) {
      return BigNumber.from(10).pow(tokens[0].decimals);
    });
    this.PRECISION_MUL = tokens.map(function (t) {
      return 1;
    });
    this.A = BigNumber.from(A);
    this.lp_token_totalSupply = lp_token_totalSupply;
    this.tokens = tokens;
    this.fee = fee;
  }

  var _proto = CurveBasePool.prototype;

  _proto._A = function _A() {
    return this.A.mul(this.A_PRECISION);
  };

  _proto.A_precise = function A_precise() {
    return this._A();
  };

  _proto._xp = function _xp() {
    var _this = this;

    var result = this.RATES.map(function (t) {
      return BigNumber.from(t);
    });
    result = result.map(function (t, i) {
      return _this.balances[i].mul(t).div(_this.PRECISION);
    });
    return result;
  };

  _proto._xp_mem = function _xp_mem(_balances) {
    var _this2 = this;

    var result = this.RATES.map(function (t) {
      return BigNumber.from(t);
    });
    result = result.map(function (t, i) {
      return _balances[i].mul(t).div(_this2.PRECISION);
    });
    return result;
  };

  _proto.get_D = function get_D(xp, amp) {
    var S = BigNumber.from(0);
    var Dprev = BigNumber.from(0);

    for (var _iterator = _createForOfIteratorHelperLoose(xp), _step; !(_step = _iterator()).done;) {
      var _x = _step.value;
      S = S.add(_x);
    }

    if (S.eq(0)) return S;
    var D = S;
    var Ann = amp.mul(this.N_COINS);

    for (var i = 0; i < 255; i++) {
      var D_P = D;

      for (var _iterator2 = _createForOfIteratorHelperLoose(xp), _step2; !(_step2 = _iterator2()).done;) {
        var x = _step2.value;
        D_P = D_P.mul(D).div(x.mul(this.N_COINS));
      }

      Dprev = D;
      D = Ann.mul(S).div(this.A_PRECISION).add(D_P.mul(this.N_COINS)).mul(D).div(Ann.sub(this.A_PRECISION).mul(D).div(this.A_PRECISION).add(D_P.mul(this.N_COINS + 1)));

      if (D.gt(Dprev)) {
        if (D.sub(Dprev).lte(1)) break;
      } else {
        if (Dprev.sub(D).lte(1)) break;
      }
    }

    return D;
  };

  _proto.get_D_mem = function get_D_mem(_balances, amp) {
    return this.get_D(this._xp_mem(_balances), amp);
  };

  _proto.get_virtual_price = function get_virtual_price() {
    var D = this.get_D(this._xp(), this._A());
    return D.mul(this.PRECISION).div(this.lp_token_totalSupply);
  };

  _proto.calc_token_amount = function calc_token_amount(amounts, is_deposit) {
    var amp = this._A();

    var _balances = this.balances;
    var D0 = this.get_D_mem(_balances, amp);

    for (var i = 0; i < this.N_COINS; i++) {
      if (is_deposit) _balances[i] = _balances[i].add(amounts[i]);else _balances[i] = _balances[i].sub(amounts[i]);
    }

    var D1 = this.get_D_mem(_balances, amp);
    var token_amount = this.lp_token_totalSupply;
    var diff = BigNumber.from(0);

    if (is_deposit) {
      diff = D1.sub(D0);
    } else {
      diff = D0.sub(D1);
    }

    return diff.mul(token_amount).div(D0);
  };

  _proto.get_dy = function get_dy(i, j, dx) {
    var xp = this._xp();

    var rates = this.RATES;
    var x = xp[i].add(dx.mul(rates[i]).div(this.PRECISION));
    var y = this.get_y(i, j, x, xp);
    var dy = xp[j].sub(y).sub(1);

    var _fee = this.fee.mul(dy).div(this.FEE_DENOMINATOR);

    return dy.sub(_fee).mul(this.PRECISION).div(rates[j]);
  };

  _proto.get_y = function get_y(i, j, x, xp_) {
    var amp = this._A();

    var D = this.get_D(xp_, amp);
    var Ann = amp.mul(this.N_COINS);
    var c = D;
    var S_ = BigNumber.from(0);

    var _x = BigNumber.from(0);

    var y_prev = BigNumber.from(0);

    for (var _i = 0; _i < this.N_COINS; _i++) {
      if (_i == i) _x = x;else if (_i != j) _x = xp_[_i];else continue;
      S_ = S_.add(_x);
      c = c.mul(D).div(_x.mul(this.N_COINS));
    }

    c = c.mul(D).mul(this.A_PRECISION).div(Ann.mul(this.N_COINS));
    var b = S_.add(D.mul(this.A_PRECISION).div(Ann));
    var y = D;

    for (var _i2 = 0; _i2 < 255; _i2++) {
      y_prev = y;
      y = y.mul(y).add(c).div(y.mul(2).add(b).sub(D));
      if (y.gt(y_prev)) if (y.sub(y_prev).lte(1)) break;else if (y_prev.sub(y).lte(1)) break;
    }

    return y;
  };

  _proto.calc_withdraw_one_coin = function calc_withdraw_one_coin(_token_amount, i) {
    return this._calc_withdraw_one_coin(_token_amount, i)[0];
  };

  _proto._calc_withdraw_one_coin = function _calc_withdraw_one_coin(_token_amount, i) {
    var amp = this._A();

    var xp = this._xp();

    var D0 = this.get_D(xp, amp);
    var total_supply = this.lp_token_totalSupply;
    var D1 = D0.sub(_token_amount.mul(D0).div(total_supply));
    var new_y = this.get_y_D(amp, i, xp, D1);
    var xp_reduced = xp;

    var _fee = this.fee.mul(this.N_COINS).div(4 * (this.N_COINS - 1));

    for (var j = 0; j < this.N_COINS; j++) {
      var dx_expected = BigNumber.from(0);
      if (j == i) dx_expected = xp[j].mul(D1).div(D0).sub(new_y);else dx_expected = xp[j].sub(xp[j].mul(D1).div(D0));
      xp_reduced[j] = xp_reduced[j].sub(_fee.mul(dx_expected).div(this.FEE_DENOMINATOR));
    }

    var dy = xp_reduced[i].sub(this.get_y_D(amp, i, xp_reduced, D1));
    var precisions = this.PRECISION_MUL;
    dy = dy.sub(1).div(precisions[i]);
    var dy_0 = xp[i].sub(new_y).div(precisions[i]);
    return [dy, dy_0, total_supply];
  };

  _proto.get_y_D = function get_y_D(A_, i, xp, D) {
    var Ann = A_.mul(this.N_COINS);
    var c = D;
    var S_ = BigNumber.from(0);

    var _x = BigNumber.from(0);

    var y_prev = BigNumber.from(0);

    for (var _i = 0; _i < this.N_COINS; _i++) {
      if (_i != i) _x = xp[_i];else continue;
      S_ = S_.add(_x);
      c = c.mul(D).div(_x.mul(this.N_COINS));
    }

    c = c.mul(D).mul(this.A_PRECISION).div(Ann.mul(this.N_COINS));
    var b = S_.add(D.mul(this.A_PRECISION).div(Ann));
    var y = D;

    for (var _i3 = 0; _i3 < 255; _i3++) {
      y_prev = y;
      y = y.mul(y).add(c).div(y.mul(2).add(b).sub(D));

      if (y.gt(y_prev)) {
        if (y.sub(y_prev).lte(1)) break;
      } else {
        if (y_prev.sub(y).lte(1)) break;
      }
    }

    return y;
  };

  return CurveBasePool;
}();
var CurvePool = /*#__PURE__*/function () {
  function CurvePool(basePool, A, balances, tokens, fee) {
    this.PRECISION = BigNumber.from(10).pow(18);
    this.A_PRECISION = 100;
    this.FEE_DENOMINATOR = BigNumber.from(10).pow(10);
    this.base_virtual_price = basePool.get_virtual_price();
    this.balances = balances;
    this.RATES = tokens.map(function (t) {
      return BigNumber.from(10).pow(tokens[0].decimals);
    });
    this.N_COINS = tokens.length;
    this.MAX_COIN = this.N_COINS - 1;
    this.PRECISION = BigNumber.from(10).pow(tokens[0].decimals);
    this.RATES = tokens.map(function (t) {
      return BigNumber.from(10).pow(tokens[0].decimals);
    });
    this.PRECISION_MUL = tokens.map(function (t) {
      return 1;
    });
    this.A = BigNumber.from(A);
    this.BASE_N_COINS = basePool.N_COINS;
    this.basePool = basePool;
    this.fee = fee;
  }

  CurvePool.buildFromMultiDex = /*#__PURE__*/function () {
    var _buildFromMultiDex = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(dexes) {
      var contractCalls, _iterator3, _step3, _dexFactory$config, _dexFactory$config2, _dexFactory$config3, _dexFactory$config4, dexFactory, contract, n, i, _i4, basePoolAddress, contract2, lpTokenAddress, lpTokenContract, nb, _i5, _i6, provider, callResults, pools, curI, _iterator4, _step4, _dexFactory$config5, _dexFactory$config6, _dexFactory, _nb, _n, poolA, poolFee, poolTokens, _i7, tokenAddress, poolBalances, _i8, baseA, baseFee, baseTotalSupply, baseTokens, _i9, _tokenAddress, baseBalances, _i10, basePool, pool;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.time("Load latest data from dexes");
              contractCalls = [];

              for (_iterator3 = _createForOfIteratorHelperLoose(dexes); !(_step3 = _iterator3()).done;) {
                dexFactory = _step3.value;
                contract = new Contract$1(dexFactory.routerAddress, dexFactory.getRouter02Json());
                contractCalls.push(contract.A());
                contractCalls.push(contract.fee());
                n = (_dexFactory$config = dexFactory.config) == null ? void 0 : _dexFactory$config["N_COINS"];

                for (i = 0; i < n; i++) {
                  contractCalls.push(contract.coins(i));
                }

                for (_i4 = 0; _i4 < n; _i4++) {
                  contractCalls.push(contract.balances(_i4));
                }

                basePoolAddress = (_dexFactory$config2 = dexFactory.config) == null ? void 0 : _dexFactory$config2["base_pool"];
                contract2 = new Contract$1(basePoolAddress, ACSBasePool.abi);
                contractCalls.push(contract2.A());
                contractCalls.push(contract2.fee());
                lpTokenAddress = (_dexFactory$config3 = dexFactory.config) == null ? void 0 : _dexFactory$config3["lp_token"];
                lpTokenContract = new Contract$1(lpTokenAddress, ERC20);
                contractCalls.push(lpTokenContract.totalSupply());
                nb = (_dexFactory$config4 = dexFactory.config) == null ? void 0 : _dexFactory$config4["N_BASE_COINS"];

                for (_i5 = 0; _i5 < nb; _i5++) {
                  contractCalls.push(contract2.coins(_i5));
                }

                for (_i6 = 0; _i6 < nb; _i6++) {
                  contractCalls.push(contract2.balances(_i6));
                }
              }

              provider = ProviderUtil.getMultiCallProvider(dexes[0].chainId);
              _context.next = 6;
              return provider.init();

            case 6:
              _context.next = 8;
              return provider.all(contractCalls);

            case 8:
              callResults = _context.sent;
              pools = [];
              curI = 0;

              for (_iterator4 = _createForOfIteratorHelperLoose(dexes); !(_step4 = _iterator4()).done;) {
                _dexFactory = _step4.value;
                _nb = (_dexFactory$config5 = _dexFactory.config) == null ? void 0 : _dexFactory$config5["N_BASE_COINS"];
                _n = (_dexFactory$config6 = _dexFactory.config) == null ? void 0 : _dexFactory$config6["N_COINS"];
                poolA = callResults[curI++];
                poolFee = callResults[curI++];
                poolTokens = [];

                for (_i7 = 0; _i7 < _n; _i7++) {
                  tokenAddress = callResults[curI++];
                  poolTokens[_i7] = new Token(_dexFactory.chainId, tokenAddress, 18, "na");
                }

                poolBalances = [];

                for (_i8 = 0; _i8 < _n; _i8++) {
                  poolBalances[_i8] = callResults[curI++];
                }

                baseA = callResults[curI++];
                baseFee = callResults[curI++];
                baseTotalSupply = callResults[curI++];
                baseTokens = [];

                for (_i9 = 0; _i9 < _nb; _i9++) {
                  _tokenAddress = callResults[curI++];
                  baseTokens[_i9] = new Token(_dexFactory.chainId, _tokenAddress, 18, "na");
                }

                baseBalances = [];

                for (_i10 = 0; _i10 < _nb; _i10++) {
                  baseBalances[_i10] = callResults[curI++];
                }

                basePool = new CurveBasePool(baseA, baseBalances, baseTokens, baseTotalSupply, baseFee);
                pool = new CurvePool(basePool, poolA, poolBalances, poolTokens, poolFee);
                pools.push(pool);
              }

              console.timeEnd("Load latest data from dexes");
              return _context.abrupt("return", pools);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function buildFromMultiDex(_x2) {
      return _buildFromMultiDex.apply(this, arguments);
    }

    return buildFromMultiDex;
  }();

  CurvePool.buildFromDexFactory = /*#__PURE__*/function () {
    var _buildFromDexFactory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(dexFactory) {
      var _dexFactory$config7, _dexFactory$config8, _dexFactory$config9, _dexFactory$config10;

      var contractCalls, contract, n, i, _i11, basePoolAddress, contract2, lpTokenAddress, lpTokenContract, nb, _i12, _i13, provider, callResults, curI, poolA, poolFee, poolTokens, _i14, tokenAddress, poolBalances, _i15, baseA, baseFee, baseTotalSupply, baseTokens, _i16, _tokenAddress2, baseBalances, _i17, basePool, pool;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              !(dexFactory.type == DexType.Acryptos) ? process.env.NODE_ENV !== "production" ? invariant(false, "Must be Curve DEX") : invariant(false) : void 0;
              console.log("Load latest data from ", dexFactory.name);
              console.time("Load latest data");
              contractCalls = [];
              contract = new Contract$1(dexFactory.routerAddress, dexFactory.getRouter02Json());
              contractCalls.push(contract.A());
              contractCalls.push(contract.fee());
              n = (_dexFactory$config7 = dexFactory.config) == null ? void 0 : _dexFactory$config7["N_COINS"];

              for (i = 0; i < n; i++) {
                contractCalls.push(contract.coins(i));
              }

              for (_i11 = 0; _i11 < n; _i11++) {
                contractCalls.push(contract.balances(_i11));
              }

              basePoolAddress = (_dexFactory$config8 = dexFactory.config) == null ? void 0 : _dexFactory$config8["base_pool"];
              contract2 = new Contract$1(basePoolAddress, ACSBasePool.abi);
              contractCalls.push(contract2.A());
              contractCalls.push(contract2.fee());
              lpTokenAddress = (_dexFactory$config9 = dexFactory.config) == null ? void 0 : _dexFactory$config9["lp_token"];
              lpTokenContract = new Contract$1(lpTokenAddress, ERC20);
              contractCalls.push(lpTokenContract.totalSupply());
              nb = (_dexFactory$config10 = dexFactory.config) == null ? void 0 : _dexFactory$config10["N_BASE_COINS"];

              for (_i12 = 0; _i12 < nb; _i12++) {
                contractCalls.push(contract2.coins(_i12));
              }

              for (_i13 = 0; _i13 < nb; _i13++) {
                contractCalls.push(contract2.balances(_i13));
              }

              provider = ProviderUtil.getMultiCallProvider(dexFactory.chainId);
              _context2.next = 23;
              return provider.init();

            case 23:
              _context2.next = 25;
              return provider.all(contractCalls);

            case 25:
              callResults = _context2.sent;
              curI = 0;
              poolA = callResults[curI++];
              poolFee = callResults[curI++];
              poolTokens = [];

              for (_i14 = 0; _i14 < n; _i14++) {
                tokenAddress = callResults[curI++];
                poolTokens[_i14] = new Token(dexFactory.chainId, tokenAddress, 18, "na");
              }

              poolBalances = [];

              for (_i15 = 0; _i15 < n; _i15++) {
                poolBalances[_i15] = callResults[curI++];
              }

              baseA = callResults[curI++];
              baseFee = callResults[curI++];
              baseTotalSupply = callResults[curI++];
              baseTokens = [];

              for (_i16 = 0; _i16 < nb; _i16++) {
                _tokenAddress2 = callResults[curI++];
                baseTokens[_i16] = new Token(dexFactory.chainId, _tokenAddress2, 18, "na");
              }

              baseBalances = [];

              for (_i17 = 0; _i17 < nb; _i17++) {
                baseBalances[_i17] = callResults[curI++];
              }

              basePool = new CurveBasePool(baseA, baseBalances, baseTokens, baseTotalSupply, baseFee);
              pool = new CurvePool(basePool, poolA, poolBalances, poolTokens, poolFee);
              console.timeEnd("Load latest data");
              return _context2.abrupt("return", pool);

            case 44:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function buildFromDexFactory(_x3) {
      return _buildFromDexFactory.apply(this, arguments);
    }

    return buildFromDexFactory;
  }();

  var _proto2 = CurvePool.prototype;

  _proto2._vp_rate_ro = function _vp_rate_ro() {
    return this.base_virtual_price;
  };

  _proto2._A = function _A() {
    return this.A.mul(this.A_PRECISION);
  };

  _proto2.A_precise = function A_precise() {
    return this._A();
  };

  _proto2.get_D = function get_D(xp, amp) {
    var S = BigNumber.from(0);
    var Dprev = BigNumber.from(0);

    for (var _iterator5 = _createForOfIteratorHelperLoose(xp), _step5; !(_step5 = _iterator5()).done;) {
      var _x = _step5.value;
      S = S.add(_x);
    }

    if (S.eq(0)) return S;
    var D = S;
    var Ann = amp.mul(this.N_COINS);

    for (var i = 0; i < 255; i++) {
      var D_P = D;

      for (var _iterator6 = _createForOfIteratorHelperLoose(xp), _step6; !(_step6 = _iterator6()).done;) {
        var x = _step6.value;
        D_P = D_P.mul(D).div(x.mul(this.N_COINS));
      }

      Dprev = D;
      D = Ann.mul(S).div(this.A_PRECISION).add(D_P.mul(this.N_COINS)).mul(D).div(Ann.sub(this.A_PRECISION).mul(D).div(this.A_PRECISION).add(D_P.mul(this.N_COINS + 1)));

      if (D.gt(Dprev)) {
        if (D.sub(Dprev).lte(1)) break;
      } else {
        if (Dprev.sub(D).lte(1)) break;
      }
    }

    return D;
  };

  _proto2.get_D_mem = function get_D_mem(vp_rate, _balances, amp) {
    var xp = this._xp_mem(vp_rate, _balances);

    return this.get_D(xp, amp);
  };

  _proto2._xp_mem = function _xp_mem(vp_rate, _balances) {
    var _this3 = this;

    var result = this.RATES.map(function (t) {
      return BigNumber.from(t);
    });
    result[this.MAX_COIN] = vp_rate;
    result = result.map(function (t, i) {
      return _balances[i].mul(t).div(_this3.PRECISION);
    });
    return result;
  };

  _proto2._xp = function _xp(vp_rate) {
    var _this4 = this;

    var result = this.RATES.map(function (t, i) {
      return i == _this4.MAX_COIN ? vp_rate : t;
    });
    result = result.map(function (t, i) {
      return t.mul(_this4.balances[i]).div(_this4.PRECISION);
    });
    return result;
  };

  _proto2.get_y = function get_y(i, j, x, xp_) {
    var amp = this._A();

    var D = this.get_D(xp_, amp);
    var Ann = amp.mul(this.N_COINS);
    var c = D;
    var S_ = BigNumber.from(0);

    var _x = BigNumber.from(0);

    var y_prev = BigNumber.from(0);

    for (var _i = 0; _i < this.N_COINS; _i++) {
      if (_i == i) _x = x;else if (_i != j) _x = xp_[_i];else continue;
      S_ = S_.add(_x);
      c = c.mul(D).div(_x.mul(this.N_COINS));
    }

    c = c.mul(D).mul(this.A_PRECISION).div(Ann.mul(this.N_COINS));
    var b = S_.add(D.mul(this.A_PRECISION).div(Ann));
    var y = D;

    for (var _i18 = 0; _i18 < 255; _i18++) {
      y_prev = y;
      y = y.mul(y).add(c).div(y.mul(2).add(b).sub(D));

      if (y.gt(y_prev)) {
        if (y.sub(y_prev).lte(1)) break;
      } else {
        if (y_prev.sub(y).lte(1)) break;
      }
    }

    return y;
  };

  _proto2.get_dy_underlying = function get_dy_underlying(i, j, dx) {
    var vp_rate = this._vp_rate_ro();

    var xp = this._xp(vp_rate);

    var precesions = this.PRECISION_MUL;
    var base_i = i - this.MAX_COIN;
    var base_j = j - this.MAX_COIN;
    var meta_i = this.MAX_COIN;
    var meta_j = this.MAX_COIN;
    if (base_i < 0) meta_i = i;
    if (base_j < 0) meta_j = j;
    var x;
    if (base_i < 0) x = xp[i].add(dx.mul(precesions[i]));else {
      if (base_j < 0) {
        var base_inputs = this.basePool.tokens.map(function (t) {
          return BigNumber.from(0);
        });
        base_inputs[base_i] = dx;
        x = this.basePool.calc_token_amount(base_inputs, true).mul(vp_rate).div(this.PRECISION);
        x = x.sub(x.mul(this.basePool.fee).div(this.FEE_DENOMINATOR.mul(2)));
        x = x.add(xp[this.MAX_COIN]);
      } else {
        return this.basePool.get_dy(base_i, base_j, dx);
      }
    }
    var y = this.get_y(meta_i, meta_j, x, xp);
    var dy = xp[meta_j].sub(y).sub(1);
    dy = dy.sub(this.fee.mul(dy).div(this.FEE_DENOMINATOR));
    if (base_j < 0) dy = dy.div(precesions[meta_j]);else dy = this.basePool.calc_withdraw_one_coin(dy.mul(this.PRECISION).div(vp_rate), base_j);
    return dy;
  };

  return CurvePool;
}();

var GraphData = function GraphData() {
  this.allPairs = [];
};
var AggTokenGraph = /*#__PURE__*/function () {
  function AggTokenGraph(chainId, graphData) {
    this.graphData = new GraphData();
    this.pairHash = {};
    this.tokenIndex = {};
    this.transferFee = {};
    this.excludeToken = {};
    this.curvePools = {};
    this.chainId = chainId;
    this.graphData = graphData;

    for (var _iterator = _createForOfIteratorHelperLoose(graphData.allPairs), _step; !(_step = _iterator()).done;) {
      var pair = _step.value;
      this.addToIndex(pair);
    }

    console.log("Create graph successful!!!");
  } // public saveToFile(): void{
  //   invariant(this.chainId!=undefined);
  //   fs.writeFileSync(this.chainId+".graph",JSON.stringify(this.graphData));
  // }
  //
  // public static loadFromFile(chainId:ChainId):AggTokenGraph{
  //   const data=JSON.parse(fs.readFileSync(chainId+".graph").toString());
  //   return new AggTokenGraph(chainId,data);
  // }


  var _proto = AggTokenGraph.prototype;

  _proto.addToIndex = function addToIndex(aggPair) {
    var _this$pairHash;

    if (((_this$pairHash = this.pairHash) == null ? void 0 : _this$pairHash[AggTokenGraph.aggPairHashCode(aggPair)]) == undefined) {
      var _extends2, _this$tokenIndex, _this$tokenIndex3;

      this.pairHash = _extends({}, this.pairHash, (_extends2 = {}, _extends2[AggTokenGraph.aggPairHashCode(aggPair)] = aggPair, _extends2));

      if (((_this$tokenIndex = this.tokenIndex) == null ? void 0 : _this$tokenIndex[aggPair.token0.address]) != undefined) {
        var _this$tokenIndex2;

        (_this$tokenIndex2 = this.tokenIndex) == null ? void 0 : _this$tokenIndex2[aggPair.token0.address].push(aggPair);
      } else {
        var _extends3;

        this.tokenIndex = _extends({}, this.tokenIndex, (_extends3 = {}, _extends3[aggPair.token0.address] = [aggPair], _extends3));
      }

      if (((_this$tokenIndex3 = this.tokenIndex) == null ? void 0 : _this$tokenIndex3[aggPair.token1.address]) != undefined) {
        var _this$tokenIndex4;

        (_this$tokenIndex4 = this.tokenIndex) == null ? void 0 : _this$tokenIndex4[aggPair.token1.address].push(aggPair);
      } else {
        var _extends4;

        this.tokenIndex = _extends({}, this.tokenIndex, (_extends4 = {}, _extends4[aggPair.token1.address] = [aggPair], _extends4));
      }
    }
  };

  AggTokenGraph.loadFromChain = /*#__PURE__*/function () {
    var _loadFromChain = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(chainId, additionalTokens) {
      var dexes, data, _loop, _iterator2, _step2, graph;

      return runtime_1.wrap(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (additionalTokens === void 0) {
                additionalTokens = [];
              }

              dexes = AggSwapRoute.getSupportedDEXes(chainId);
              console.log("Fetch all pair from chain[" + chainId + "]: " + JSON.stringify(dexes.map(function (x) {
                return x.name;
              })));
              data = new GraphData();
              _loop = /*#__PURE__*/runtime_1.mark(function _loop() {
                var dex, pairs, i, BATCH, batchPairs, pairsData, _loop2, j, _i, pairData, aggPair, _dex$config, default_reserve, coins, _i2, _iterator3, _step3, coin1, _iterator4, _step4, coin2, _aggPair;

                return runtime_1.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        dex = _step2.value;
                        console.log("Load all pairs from " + dex.name + "...");

                        if (!(dex.type == DexType.UniswapV2)) {
                          _context2.next = 34;
                          break;
                        }

                        _context2.next = 5;
                        return PairUtil.getAllPairs(dex, additionalTokens, false);

                      case 5:
                        pairs = _context2.sent;
                        i = 0;
                        BATCH = 100;
                        batchPairs = [];
                        pairsData = [];
                        _loop2 = /*#__PURE__*/runtime_1.mark(function _loop2(j) {
                          var temp, retry;
                          return runtime_1.wrap(function _loop2$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  batchPairs.push(pairs[j]);
                                  i++;

                                  if (!(i == BATCH - 1 || j == pairs.length - 1)) {
                                    _context.next = 24;
                                    break;
                                  }

                                  retry = 10;

                                case 4:
                                  if (!(retry > 0)) {
                                    _context.next = 19;
                                    break;
                                  }

                                  _context.prev = 5;
                                  _context.next = 8;
                                  return PairUtil.fetchPairsData(batchPairs, dex);

                                case 8:
                                  temp = _context.sent;
                                  temp.map(function (pairData) {
                                    var aggPair = new AggPair(dex.name, pairData.token0, pairData.token1, pairData.reserve0.raw.toString(), pairData.reserve1.raw.toString());
                                    console.log(j + 1 + " Loading pair [" + aggPair.token0.symbol + "," + aggPair.token1.symbol + "]: " + formatUnits(pairData.reserve0.raw.toString(), aggPair.token0.decimals) + "," + formatUnits(pairData.reserve1.raw.toString(), aggPair.token1.decimals));
                                  });
                                  return _context.abrupt("break", 19);

                                case 13:
                                  _context.prev = 13;
                                  _context.t0 = _context["catch"](5);
                                  console.warn(_context.t0);
                                  retry--;

                                case 17:
                                  _context.next = 4;
                                  break;

                                case 19:
                                  if (temp) {
                                    _context.next = 21;
                                    break;
                                  }

                                  throw new Error("Can't fetch pair data");

                                case 21:
                                  pairsData = pairsData.concat(temp);
                                  i = 0;
                                  batchPairs = [];

                                case 24:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _loop2, null, [[5, 13]]);
                        });
                        j = 0;

                      case 12:
                        if (!(j < pairs.length)) {
                          _context2.next = 17;
                          break;
                        }

                        return _context2.delegateYield(_loop2(j), "t0", 14);

                      case 14:
                        j++;
                        _context2.next = 12;
                        break;

                      case 17:
                        _i = 0;

                      case 18:
                        if (!(_i < pairsData.length)) {
                          _context2.next = 32;
                          break;
                        }

                        _context2.prev = 19;
                        pairData = pairsData[_i];
                        aggPair = new AggPair(dex.name, pairData.token0, pairData.token1, pairData.reserve0.raw.toString(), pairData.reserve1.raw.toString()); // console.log((i + 1) + " Loading pair [" + aggPair.token0.symbol + "," + aggPair.token1.symbol + "]: "
                        //   + formatUnits(pairData.reserve0.raw.toString(), aggPair.token0.decimals) + "," + formatUnits(pairData.reserve1.raw.toString(), aggPair.token1.decimals));
                        // this.addToData(aggPair,data);

                        data.allPairs.push(aggPair);
                        _context2.next = 29;
                        break;

                      case 25:
                        _context2.prev = 25;
                        _context2.t1 = _context2["catch"](19);
                        console.warn(_context2.t1);
                        return _context2.abrupt("continue", 29);

                      case 29:
                        _i++;
                        _context2.next = 18;
                        break;

                      case 32:
                        _context2.next = 35;
                        break;

                      case 34:
                        if (dex.type == DexType.Acryptos) {
                          default_reserve = "1000000"; //100w

                          coins = (_dex$config = dex.config) == null ? void 0 : _dex$config["coins"];
                          _i2 = 1;

                          for (_iterator3 = _createForOfIteratorHelperLoose(coins); !(_step3 = _iterator3()).done;) {
                            coin1 = _step3.value;

                            for (_iterator4 = _createForOfIteratorHelperLoose(coins); !(_step4 = _iterator4()).done;) {
                              coin2 = _step4.value;

                              if (!coin1.equals(coin2)) {
                                _aggPair = new AggPair(dex.name, coin1, coin2, parseUnits(default_reserve, coin1.decimals), parseUnits(default_reserve, coin2.decimals));
                                console.log(_i2++ + " Loading pair [" + _aggPair.token0.symbol + "," + _aggPair.token1.symbol + "]"); // this.addToData(aggPair,data);

                                data.allPairs.push(_aggPair);
                              }
                            }
                          }
                        }

                      case 35:
                        console.log("Load all pairs from " + dex.name + " done!!!");

                      case 36:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop, null, [[19, 25]]);
              });
              _iterator2 = _createForOfIteratorHelperLoose(dexes);

            case 6:
              if ((_step2 = _iterator2()).done) {
                _context3.next = 10;
                break;
              }

              return _context3.delegateYield(_loop(), "t0", 8);

            case 8:
              _context3.next = 6;
              break;

            case 10:
              graph = new AggTokenGraph(chainId, data); // graph.saveToFile();

              return _context3.abrupt("return", graph);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee);
    }));

    function loadFromChain(_x, _x2) {
      return _loadFromChain.apply(this, arguments);
    }

    return loadFromChain;
  }()
  /**
   * Calculate available routes by input amount given,based on historical reserve data
   * It will be executed totally off chain.
   * @param  inputAmount           inputAmount
   * @param  fromToken             fromToken
   * @param  toToken               toToken
   * @param  maxDexHops            maxDexHops
   * @param  maxTokenHops          maxTokenHops
   * @param  maxPriceImpactPercent maxPriceImpactPercent,input 5 if refer to 0.5%x
   * @param  maxResults            max length of return routes
   * @param  usedDexes             just used for recursive call
   * @param  usedAggPairs          just used for recursive call
   * @return                       [description]
   */
  ;

  _proto.getAvailableRoutesStatic = function getAvailableRoutesStatic(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, usedDexes, usedAggPairs) {
    var _this$tokenIndex5,
        _this$tokenIndex6,
        _this = this;

    if (maxDexHops === void 0) {
      maxDexHops = 3;
    }

    if (maxTokenHops === void 0) {
      maxTokenHops = 5;
    }

    if (maxPriceImpactPercent === void 0) {
      maxPriceImpactPercent = 50;
    }

    if (minReturn === void 0) {
      minReturn = 0;
    }

    if (maxResults === void 0) {
      maxResults = 100;
    }

    if (usedDexes === void 0) {
      usedDexes = [];
    }

    if (usedAggPairs === void 0) {
      usedAggPairs = [];
    }

    if (maxResults == 0) return [];

    if (BigNumber.from(inputAmount).eq(0)) {
      return [];
    } // if(fromToken.address==toToken.address)
    //   return [];


    if (((_this$tokenIndex5 = this.tokenIndex) == null ? void 0 : _this$tokenIndex5[fromToken.address]) == undefined) return [];
    var pairContainsFromToken = (_this$tokenIndex6 = this.tokenIndex) == null ? void 0 : _this$tokenIndex6[fromToken.address];
    var result = [];

    var _loop3 = function _loop3() {
      var _this$excludeToken, _this$excludeToken2;

      var aggPair = _step5.value;

      if (usedAggPairs.filter(function (p) {
        return AggTokenGraph.aggPairEquals(p, aggPair);
      }).length > 0) {
        return "continue";
      } else if (execuldeDexes.filter(function (d) {
        return d.name == aggPair.dexName;
      }).length > 0) {
        return "continue";
      } else if ((_this$excludeToken = _this.excludeToken) != null && _this$excludeToken[aggPair.token0.address] || (_this$excludeToken2 = _this.excludeToken) != null && _this$excludeToken2[aggPair.token1.address]) {
        return "continue";
      } else if (fromToken.address != toToken.address && AggTokenGraph.aggPairContainsToken(toToken, aggPair)) {
        if (_this.aggPairOutputAmountStatic(aggPair, fromToken, BigNumber.from(inputAmount)).gte(minReturn)) {
          result.push([aggPair]);
          if (result.length >= maxResults) return {
            v: result
          };
        }
      }
    };

    for (var _iterator5 = _createForOfIteratorHelperLoose(pairContainsFromToken), _step5; !(_step5 = _iterator5()).done;) {
      var _ret = _loop3();

      if (_ret === "continue") continue;
      if (typeof _ret === "object") return _ret.v;
    } //以上先遍历一边，广度优先，然后开始递归调用


    var _loop4 = function _loop4() {
      var _this$excludeToken3, _this$excludeToken4;

      var aggPair = _step6.value;

      if (usedAggPairs.filter(function (p) {
        return AggTokenGraph.aggPairEquals(p, aggPair);
      }).length > 0) {
        return "continue";
      } else if (execuldeDexes.filter(function (d) {
        return d.name == aggPair.dexName;
      }).length > 0) {
        return "continue";
      } else if (fromToken.address != toToken.address && AggTokenGraph.aggPairContainsToken(toToken, aggPair)) {
        return "continue";
      } else if ((_this$excludeToken3 = _this.excludeToken) != null && _this$excludeToken3[aggPair.token0.address] || (_this$excludeToken4 = _this.excludeToken) != null && _this$excludeToken4[aggPair.token1.address]) {
        return "continue";
      } else {
        if (maxTokenHops == 1) //深度已到极限，不再做深度探索
          return "continue";

        if (usedAggPairs.filter(function (p) {
          var pairToToken = AggTokenGraph.aggPairAnother(aggPair, fromToken);
          return (pairToToken.address == p.token0.address || pairToToken.address == p.token1.address) && p.dexName == aggPair.dexName;
        }).length > 0) {
          //used token
          return "continue";
        }

        var dex = DexFactory.getDexFactory(aggPair.dexName, fromToken.chainId);
        if (dex == null) return "continue";

        var nextInputAmount = _this.aggPairOutputAmountStatic(aggPair, fromToken, BigNumber.from(inputAmount));

        if (nextInputAmount.lte(0)) return "continue";

        var priceImpact = _this.aggPairPriceImpact(aggPair, fromToken, BigNumber.from(inputAmount));

        if (priceImpact > maxPriceImpactPercent) return "continue";
        var nextMaxDexHops = maxDexHops;
        var nextUsedDexes = usedDexes;

        if (usedDexes.filter(function (d) {
          return d.name == dex.name;
        }).length == 0) {
          //新用了一个交易所
          nextMaxDexHops--;
          if (nextMaxDexHops == 0) return "continue";
          nextUsedDexes = usedDexes.concat([dex]);
        } //递归探索下面的路


        var nextRouteList = _this.getAvailableRoutesStatic(nextInputAmount, AggTokenGraph.aggPairAnother(aggPair, fromToken), toToken, nextMaxDexHops, maxTokenHops - 1, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults - result.length, nextUsedDexes, usedAggPairs.concat([aggPair]));

        for (var _iterator7 = _createForOfIteratorHelperLoose(nextRouteList), _step7; !(_step7 = _iterator7()).done;) {
          var route = _step7.value;
          var newRoute = [aggPair].concat(route);
          result.push(newRoute);
          if (result.length >= maxResults) return {
            v: result
          };
        }
      }
    };

    for (var _iterator6 = _createForOfIteratorHelperLoose(pairContainsFromToken), _step6; !(_step6 = _iterator6()).done;) {
      var _ret2 = _loop4();

      if (_ret2 === "continue") continue;
      if (typeof _ret2 === "object") return _ret2.v;
    }

    return result;
  };

  _proto.getBestRoutesStatic = function getBestRoutesStatic(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults) {
    var _AggTokenGraph$BEST_R, _extends5;

    if (maxDexHops === void 0) {
      maxDexHops = 3;
    }

    if (maxTokenHops === void 0) {
      maxTokenHops = 5;
    }

    if (maxPriceImpactPercent === void 0) {
      maxPriceImpactPercent = 50;
    }

    if (minReturn === void 0) {
      minReturn = 0;
    }

    if (maxResults === void 0) {
      maxResults = 100;
    }

    var key = "" + inputAmount + "|" + fromToken.address + "|" + toToken.address + "|" + maxDexHops + "|" + maxTokenHops + "|" + maxPriceImpactPercent + "|" + minReturn + "|" + maxResults;
    key = AggTokenGraph.hashCode(key);

    if (((_AggTokenGraph$BEST_R = AggTokenGraph.BEST_ROUTE_CACHE) == null ? void 0 : _AggTokenGraph$BEST_R[key]) != undefined) {
      var _AggTokenGraph$BEST_R2;

      return (_AggTokenGraph$BEST_R2 = AggTokenGraph.BEST_ROUTE_CACHE) == null ? void 0 : _AggTokenGraph$BEST_R2[key];
    }

    var route = this.getAvailableRoutesStatic(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults);
    var result = [];

    for (var _iterator8 = _createForOfIteratorHelperLoose(route), _step8; !(_step8 = _iterator8()).done;) {
      var r = _step8.value;
      result.push({
        route: r,
        outputAmount: this.aggPairRouteOutputAmountStatic(r, fromToken, BigNumber.from(inputAmount))
      });
    }

    result = result.sort(function (a, b) {
      return a.outputAmount.gte(b.outputAmount) ? -1 : 1;
    });
    result = result.slice(0, maxResults);
    AggTokenGraph.BEST_ROUTE_CACHE = _extends({}, AggTokenGraph.BEST_ROUTE_CACHE, (_extends5 = {}, _extends5[key] = result, _extends5));
    return result;
  }
  /**
   * [getBestRoutesValidated description]
   * @param  inputAmount           [description]
   * @param  fromToken             [description]
   * @param  toToken               [description]
   * @param  slippageTolerance     input 5 if refer to 0.5%
   * @param  maxDexHops            [description]
   * @param  maxTokenHops          [description]
   * @param  maxPriceImpactPercent input 5 if refer to 0.5%
   * @param  minReturn             [description]
   * @param  execuldeDexes         [description]
   * @param  maxResults            [description]
   * @param  maxStaticScan         [description]
   * @return                       [description]
   */
  ;

  _proto.getBestRoutesValidated =
  /*#__PURE__*/
  function () {
    var _getBestRoutesValidated = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(wallet, inputAmount, fromToken, toToken, slippageTolerance, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, maxStaticScan) {
      var bestRoutes, result, _iterator9, _step9, item, amount, plan;

      return runtime_1.wrap(function _callee2$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (slippageTolerance === void 0) {
                slippageTolerance = 5;
              }

              if (maxDexHops === void 0) {
                maxDexHops = 3;
              }

              if (maxTokenHops === void 0) {
                maxTokenHops = 5;
              }

              if (maxPriceImpactPercent === void 0) {
                maxPriceImpactPercent = 50;
              }

              if (minReturn === void 0) {
                minReturn = 0;
              }

              if (maxResults === void 0) {
                maxResults = 5;
              }

              if (maxStaticScan === void 0) {
                maxStaticScan = 1000;
              }

              _context4.next = 9;
              return this.getBestRoutes(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults * 10, maxStaticScan);

            case 9:
              bestRoutes = _context4.sent;
              result = [];
              _iterator9 = _createForOfIteratorHelperLoose(bestRoutes);

            case 12:
              if ((_step9 = _iterator9()).done) {
                _context4.next = 30;
                break;
              }

              item = _step9.value;
              amount = item.outputAmount;
              amount = amount.mul(1000).sub(amount.mul(slippageTolerance)).div(1000);
              plan = new AggSwapPlan([item.route], amount, fromToken.chainId);
              _context4.prev = 17;
              _context4.next = 20;
              return AggRouter.swap(plan, wallet, CallMode.CALL_STATIC);

            case 20:
              result.push(item);

              if (!(result.length >= maxResults)) {
                _context4.next = 23;
                break;
              }

              return _context4.abrupt("return", result);

            case 23:
              _context4.next = 28;
              break;

            case 25:
              _context4.prev = 25;
              _context4.t0 = _context4["catch"](17);
              console.log("Route: " + JSON.stringify(item.route.tokens.map(function (t) {
                return t.symbol;
              })) + " check failed", _context4.t0);

            case 28:
              _context4.next = 12;
              break;

            case 30:
              return _context4.abrupt("return", result);

            case 31:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee2, this, [[17, 25]]);
    }));

    function getBestRoutesValidated(_x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14) {
      return _getBestRoutesValidated.apply(this, arguments);
    }

    return getBestRoutesValidated;
  }();

  _proto.getBestRoutesGasConsidered = /*#__PURE__*/function () {
    var _getBestRoutesGasConsidered = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(wallet, inputAmount, fromToken, toToken, slippageTolerance, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, maxStaticScan) {
      var bestRoutes, result, ethPrice, test, gasResults, i, temp, item, gasResult, gasFee, itemResult, gasFeeByToToken;
      return runtime_1.wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (slippageTolerance === void 0) {
                slippageTolerance = 5;
              }

              if (maxDexHops === void 0) {
                maxDexHops = 3;
              }

              if (maxTokenHops === void 0) {
                maxTokenHops = 5;
              }

              if (maxPriceImpactPercent === void 0) {
                maxPriceImpactPercent = 50;
              }

              if (minReturn === void 0) {
                minReturn = 0;
              }

              if (maxResults === void 0) {
                maxResults = 5;
              }

              if (maxStaticScan === void 0) {
                maxStaticScan = 1000;
              }

              _context6.next = 9;
              return this.getBestRoutes(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults * 10, maxStaticScan);

            case 9:
              bestRoutes = _context6.sent;
              result = [];
              ethPrice = BigNumber.from(0);
              _context6.prev = 12;
              _context6.next = 15;
              return getETHPrice(toToken);

            case 15:
              ethPrice = _context6.sent;
              _context6.next = 21;
              break;

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](12);
              console.error(_context6.t0);

            case 21:
              test = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(item) {
                  var amount, plan;
                  return runtime_1.wrap(function _callee3$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          amount = item.outputAmount;
                          amount = amount.mul(1000).sub(amount.mul(slippageTolerance)).div(1000);
                          plan = new AggSwapPlan([item.route], amount, fromToken.chainId);
                          _context5.next = 5;
                          return AggRouter.swap(plan, wallet, CallMode.ESTIMATE_GAS);

                        case 5:
                          return _context5.abrupt("return", _context5.sent);

                        case 6:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function test(_x27) {
                  return _ref.apply(this, arguments);
                };
              }();

              console.log("Caculate real output by considering gas fee...");
              _context6.next = 25;
              return Promise.allSettled(bestRoutes.map(function (item) {
                return test(item);
              }));

            case 25:
              gasResults = _context6.sent;

              for (i = 0; i < gasResults.length; i++) {
                temp = gasResults[i];
                item = bestRoutes[i];

                if (temp.status == 'fulfilled') {
                  gasResult = temp.value;
                  gasFee = gasResult.gasFee;
                  itemResult = {
                    route: item.route,
                    outputAmount: item.outputAmount,
                    gasFee: BigNumber.from(0),
                    outputAmountExcludeGas: item.outputAmount
                  };
                  itemResult.gasFee = gasFee;
                  gasFeeByToToken = gasFee.mul(ethPrice).div(BigNumber.from(10).pow(18));
                  itemResult.outputAmountExcludeGas = itemResult.outputAmountExcludeGas.sub(gasFeeByToToken);
                  result.push(itemResult);
                } else if (temp.status == 'rejected') {
                  console.error("Esimate gas error", temp.reason);
                }
              }

              result = result.sort(function (a, b) {
                return a.outputAmountExcludeGas.gte(b.outputAmountExcludeGas) ? -1 : 1;
              });
              result = result.slice(0, maxResults);
              return _context6.abrupt("return", result);

            case 30:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4, this, [[12, 18]]);
    }));

    function getBestRoutesGasConsidered(_x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26) {
      return _getBestRoutesGasConsidered.apply(this, arguments);
    }

    return getBestRoutesGasConsidered;
  }();

  _proto.getBestRoutes = /*#__PURE__*/function () {
    var _getBestRoutes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, maxStaticScan) {
      var _routes, _routes2, routes, needUpdatePairs, allDexNames, acryptosDexes, _iterator10, _step10, route, _loop5, _iterator13, _step13, pools, i, _this$curvePools, dex, _extends6, pool, batchTts, _i3, _allDexNames, _needUpdatePairs, dexName, dexPairs, pairsData, _i4, _this$pairHash2, pairData, temp, _this$pairHash3, p, tempResult, OUTPUT_CACHE, _iterator11, _step11, _route, amt;

      return runtime_1.wrap(function _callee5$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (maxDexHops === void 0) {
                maxDexHops = 3;
              }

              if (maxTokenHops === void 0) {
                maxTokenHops = 5;
              }

              if (maxPriceImpactPercent === void 0) {
                maxPriceImpactPercent = 50;
              }

              if (minReturn === void 0) {
                minReturn = 0;
              }

              if (maxResults === void 0) {
                maxResults = 5;
              }

              if (maxStaticScan === void 0) {
                maxStaticScan = 1000;
              }

              if (!fromToken.isETH()) {
                _context7.next = 13;
                break;
              }

              _context7.next = 9;
              return this.getBestRoutes(inputAmount, WETH == null ? void 0 : WETH[fromToken.chainId], toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, maxStaticScan);

            case 9:
              _routes = _context7.sent;
              return _context7.abrupt("return", _routes.map(function (r) {
                r.route.tokens[0] = fromToken;
                return r;
              }));

            case 13:
              if (!toToken.isETH()) {
                _context7.next = 18;
                break;
              }

              _context7.next = 16;
              return this.getBestRoutes(inputAmount, fromToken, WETH == null ? void 0 : WETH[fromToken.chainId], maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxResults, maxStaticScan);

            case 16:
              _routes2 = _context7.sent;
              return _context7.abrupt("return", _routes2.map(function (r) {
                r.route.tokens[r.route.tokens.length - 1] = toToken;
                return r;
              }));

            case 18:
              routes = this.getBestRoutesStatic(inputAmount, fromToken, toToken, maxDexHops, maxTokenHops, maxPriceImpactPercent, minReturn, execuldeDexes, maxStaticScan);

              if (!(routes.length == 0)) {
                _context7.next = 21;
                break;
              }

              return _context7.abrupt("return", []);

            case 21:
              needUpdatePairs = {};
              allDexNames = []; //reset curvePools

              this.curvePools = {};
              acryptosDexes = [];

              for (_iterator10 = _createForOfIteratorHelperLoose(routes); !(_step10 = _iterator10()).done;) {
                route = _step10.value;

                _loop5 = function _loop5() {
                  var pair = _step13.value;
                  var dex = DexFactory.getDexFactory(pair.dexName, pair.token0.chainId);

                  if (dex != null && dex.type == DexType.UniswapV2) {
                    var _needUpdatePairs2, _needUpdatePairs3;

                    if (((_needUpdatePairs2 = needUpdatePairs) == null ? void 0 : _needUpdatePairs2[dex.name]) == undefined) {
                      var _extends7;

                      needUpdatePairs = _extends({}, needUpdatePairs, (_extends7 = {}, _extends7[dex.name] = {
                        pairs: [pair],
                        tokenPairs: [[new Token(pair.token0.chainId, pair.token0.address, pair.token0.decimals, pair.token0.symbol, pair.token0.name), new Token(pair.token1.chainId, pair.token1.address, pair.token1.decimals, pair.token1.symbol, pair.token1.name)]],
                        dexFactory: dex
                      }, _extends7));
                      allDexNames.push(dex.name);
                    } else if (((_needUpdatePairs3 = needUpdatePairs) == null ? void 0 : _needUpdatePairs3[dex.name].pairs.filter(function (p) {
                      return AggTokenGraph.aggPairHashCode(p) == AggTokenGraph.aggPairHashCode(pair);
                    }).length) == 0) {
                      var _needUpdatePairs4, _needUpdatePairs5;

                      (_needUpdatePairs4 = needUpdatePairs) == null ? void 0 : _needUpdatePairs4[dex.name].pairs.push(pair);
                      (_needUpdatePairs5 = needUpdatePairs) == null ? void 0 : _needUpdatePairs5[dex.name].tokenPairs.push([new Token(pair.token0.chainId, pair.token0.address, pair.token0.decimals, pair.token0.symbol, pair.token0.name), new Token(pair.token1.chainId, pair.token1.address, pair.token1.decimals, pair.token1.symbol, pair.token1.name)]);
                    }
                  } else if (dex != null && dex.type == DexType.Acryptos) {
                    if (acryptosDexes.filter(function (t) {
                      return t.name == dex.name;
                    }).length == 0) acryptosDexes.push(dex);
                  }
                };

                for (_iterator13 = _createForOfIteratorHelperLoose(route.route); !(_step13 = _iterator13()).done;) {
                  _loop5();
                }
              }

              if (!(acryptosDexes.length > 0)) {
                _context7.next = 31;
                break;
              }

              _context7.next = 29;
              return CurvePool.buildFromMultiDex(acryptosDexes);

            case 29:
              pools = _context7.sent;

              for (i = 0; i < acryptosDexes.length; i++) {
                dex = acryptosDexes[i];

                if (((_this$curvePools = this.curvePools) == null ? void 0 : _this$curvePools[dex.name]) == undefined) {
                  pool = pools[i];
                  this.curvePools = _extends({}, this.curvePools, (_extends6 = {}, _extends6[dex.name] = pool, _extends6));
                }
              }

            case 31:
              batchTts = [];

              for (_i3 = 0, _allDexNames = allDexNames; _i3 < _allDexNames.length; _i3++) {
                dexName = _allDexNames[_i3];
                dexPairs = (_needUpdatePairs = needUpdatePairs) == null ? void 0 : _needUpdatePairs[dexName];

                if (dexPairs) {
                  console.log("updating pair data of " + dexName + ", " + dexPairs.pairs.length + " pairs");
                  batchTts.push({
                    tokenPairs: dexPairs.tokenPairs,
                    dexFactory: dexPairs.dexFactory
                  });
                }
              }

              console.time("fetch pair data");
              _context7.next = 36;
              return PairUtil.fetchPairsDataBatch(batchTts);

            case 36:
              pairsData = _context7.sent;
              console.timeEnd("fetch pair data");

              for (_i4 = 0; _i4 < pairsData.length; _i4++) {
                pairData = pairsData[_i4];
                temp = new AggPair(pairData.dexFactory.name, pairData.pair.token0, pairData.pair.token1, pairData.pair.reserve0.raw.toString(), pairData.pair.reserve1.raw.toString());

                if (((_this$pairHash2 = this.pairHash) == null ? void 0 : _this$pairHash2[AggTokenGraph.aggPairHashCode(temp)]) != undefined) {
                  p = (_this$pairHash3 = this.pairHash) == null ? void 0 : _this$pairHash3[AggTokenGraph.aggPairHashCode(temp)];
                  p.reserve0 = temp.reserve0;
                  p.reserve1 = temp.reserve1;
                }
              }

              tempResult = [];
              OUTPUT_CACHE = {};
              _iterator11 = _createForOfIteratorHelperLoose(routes);

            case 42:
              if ((_step11 = _iterator11()).done) {
                _context7.next = 50;
                break;
              }

              _route = _step11.value;
              _context7.next = 46;
              return this.aggPairRouteOutputAmount(_route.route, fromToken, BigNumber.from(inputAmount), OUTPUT_CACHE);

            case 46:
              amt = _context7.sent;
              tempResult.push({
                route: _route.route,
                outputAmount: amt
              });

            case 48:
              _context7.next = 42;
              break;

            case 50:
              tempResult = tempResult.sort(function (a, b) {
                return a.outputAmount.gte(b.outputAmount) ? -1 : 1;
              });
              tempResult = tempResult.slice(0, maxResults);
              return _context7.abrupt("return", tempResult.map(function (t) {
                var nextFromToken = fromToken;
                var tokens = [];
                var das = [];

                for (var _iterator12 = _createForOfIteratorHelperLoose(t.route), _step12; !(_step12 = _iterator12()).done;) {
                  var pair = _step12.value;
                  tokens.push(AggTokenGraph.copyToken(pair.token0.address == nextFromToken.address ? pair.token0 : pair.token1));
                  nextFromToken = pair.token0.address == nextFromToken.address ? pair.token1 : pair.token0;

                  var _dex = DexFactory.getDexFactory(pair.dexName, fromToken.chainId);

                  !(_dex != null) ? process.env.NODE_ENV !== "production" ?  process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false)  :  process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false)  : void 0;
                  das.push([new DexAssign(_dex, 100)]);
                }

                tokens.push(AggTokenGraph.copyToken(nextFromToken));
                return {
                  route: new AggSwapRoute(BigNumber.from(inputAmount), tokens, das),
                  outputAmount: t.outputAmount
                };
              }));

            case 53:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee5, this);
    }));

    function getBestRoutes(_x28, _x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36, _x37) {
      return _getBestRoutes.apply(this, arguments);
    }

    return getBestRoutes;
  }();

  _proto.aggPairOutputAmount = /*#__PURE__*/function () {
    var _aggPairOutputAmount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(aggPair, inputToken, inputAmount) {
      var dexFactory, _this$curvePools2, tokenIn, tokenOut, curvePool, trade;

      return runtime_1.wrap(function _callee6$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              dexFactory = DexFactory.getDexFactory(aggPair.dexName, aggPair.token0.chainId);

              if (!(dexFactory == null)) {
                _context8.next = 3;
                break;
              }

              return _context8.abrupt("return", BigNumber.from(0));

            case 3:
              if (!(dexFactory.type == DexType.UniswapV2)) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt("return", this.aggPairOutputAmountStatic(aggPair, inputToken, inputAmount));

            case 7:
              if (!(dexFactory.type == DexType.Acryptos)) {
                _context8.next = 18;
                break;
              }

              console.time("query Acryptos price");
              tokenIn = AggTokenGraph.copyToken(inputToken);
              tokenOut = aggPair.token0.address == inputToken.address ? AggTokenGraph.copyToken(aggPair.token1) : AggTokenGraph.copyToken(aggPair.token0);
              curvePool = (_this$curvePools2 = this.curvePools) == null ? void 0 : _this$curvePools2[dexFactory.name];

              if (!curvePool) {
                _context8.next = 18;
                break;
              }

              _context8.next = 15;
              return ACryptoS.getBestTradeExactInStatic(tokenIn, formatUnits(inputAmount, inputToken.decimals), tokenOut, dexFactory, curvePool);

            case 15:
              trade = _context8.sent;
              console.timeEnd("query Acryptos price");
              return _context8.abrupt("return", BigNumber.from(trade.outputAmount.raw.toString()));

            case 18:
              return _context8.abrupt("return", BigNumber.from(0));

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee6, this);
    }));

    function aggPairOutputAmount(_x38, _x39, _x40) {
      return _aggPairOutputAmount.apply(this, arguments);
    }

    return aggPairOutputAmount;
  }();

  AggTokenGraph.copyToken = function copyToken(token) {
    return new Token(token.chainId, token.address, token.decimals, token.symbol, token.name);
  };

  AggTokenGraph.aggPairContainsToken = function aggPairContainsToken(token, aggPair) {
    return token.address == aggPair.token0.address || token.address == aggPair.token1.address;
  };

  AggTokenGraph.aggPairAnother = function aggPairAnother(aggPair, token) {
    !this.aggPairContainsToken(token, aggPair) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    return aggPair.token0.address == token.address ? aggPair.token1 : aggPair.token0;
  };

  AggTokenGraph.hashCode = function hashCode(s) {
    var h = 0;

    for (var i = 0; i < s.length; i++) {
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }

    return h.toString();
  };

  AggTokenGraph.aggPairHashCode = function aggPairHashCode(aggPair) {
    var s = aggPair.dexName + aggPair.token0.chainId + aggPair.token0.address + aggPair.token1.address;
    return this.hashCode(s);
  };

  AggTokenGraph.aggPairEquals = function aggPairEquals(aggPair, other) {
    return aggPair.token0.address == other.token0.address && aggPair.token1.address == other.token1.address && aggPair.dexName == other.dexName;
  };

  _proto.getTransferFee = function getTransferFee(token) {
    var _this$transferFee, _this$transferFee2;

    if (((_this$transferFee = this.transferFee) == null ? void 0 : _this$transferFee[token.address]) != undefined) return (_this$transferFee2 = this.transferFee) == null ? void 0 : _this$transferFee2[token.address];
    return BigNumber.from(0);
  };

  _proto.aggPairOutputAmountStatic = function aggPairOutputAmountStatic(aggPair, inputToken, inputAmount) {
    var dexFactory = DexFactory.getDexFactory(aggPair.dexName, aggPair.token0.chainId);
    if (dexFactory == null) return BigNumber.from(0);
    var inputReserve = BigNumber.from(aggPair.token0.address == inputToken.address ? aggPair.reserve0 : aggPair.reserve1);
    var outputReserve = BigNumber.from(aggPair.token0.address == inputToken.address ? aggPair.reserve1 : aggPair.reserve0);
    if (inputReserve.eq(0) || outputReserve.eq(0)) return BigNumber.from(0);
    var fee = BigNumber.from(1000).sub(dexFactory.baseFee.multiply("1000").toFixed(0));
    if (inputAmount.mul(fee).gte(inputReserve.mul(1000))) return BigNumber.from(0);
    var inputAmountWithFee = inputAmount.mul(fee);
    var numerator = inputAmountWithFee.mul(outputReserve);
    var denominator = inputReserve.mul(1000).add(inputAmountWithFee);
    var output = numerator.div(denominator);
    var outputToken = AggTokenGraph.aggPairAnother(aggPair, inputToken); // console.log("Input amount: "+formatUnits(inputAmount,inputToken.decimals)+" "+inputToken.symbol);
    // console.log(aggPair.dexName+" "+inputToken.symbol+" reserve: "+formatUnits(inputReserve,inputToken.decimals));
    // console.log(aggPair.dexName+" "+outputToken.symbol+" reserve: "+formatUnits(outputReserve,outputToken.decimals));

    var result = output.mul(1000).sub(output.mul(this.getTransferFee(outputToken))).div(1000); // console.log("Output amount: "+formatUnits(result,outputToken.decimals)+" "+outputToken.symbol);

    return result;
  };

  _proto.aggPairPriceImpact = function aggPairPriceImpact(aggPair, inputToken, inputAmount) {
    var inputReserve = BigNumber.from(aggPair.token0.address == inputToken.address ? aggPair.reserve0 : aggPair.reserve1);
    var outputReserve = BigNumber.from(aggPair.token0.address == inputToken.address ? aggPair.reserve1 : aggPair.reserve0);
    if (inputReserve.eq(0) || outputReserve.eq(0)) return BigNumber.from(1000);
    var dexFactory = DexFactory.getDexFactory(aggPair.dexName, aggPair.token0.chainId);
    if (dexFactory == null) return BigNumber.from(1000);
    var fee = BigNumber.from(1000).sub(dexFactory.baseFee.multiply("1000").toFixed(0));
    if (inputAmount.mul(fee).gte(inputReserve.mul(1000))) return BigNumber.from(1000);
    var inputAmountWithFee = inputAmount.mul(fee).div(1000); // console.log("inputAmountWithFee "+inputAmountWithFee);

    var outputAmount = this.aggPairOutputAmountStatic(aggPair, inputToken, inputAmount); // console.log("outputAmount "+outputAmount);

    var exactQuote = outputReserve.mul(inputAmountWithFee).div(inputReserve); // console.log("exactQuote "+exactQuote);

    if (exactQuote.eq(0)) return BigNumber.from(1000);
    return exactQuote.sub(outputAmount).mul(1000).div(exactQuote);
  };

  _proto.aggPairRouteOutputAmountStatic = function aggPairRouteOutputAmountStatic(route, inputToken, inputAmount) {
    var nextInputAmount = inputAmount;
    var nextInputToken = inputToken;

    for (var _iterator14 = _createForOfIteratorHelperLoose(route), _step14; !(_step14 = _iterator14()).done;) {
      var pair = _step14.value;
      nextInputAmount = this.aggPairOutputAmountStatic(pair, nextInputToken, nextInputAmount);
      nextInputToken = pair.token0.address == nextInputToken.address ? pair.token1 : pair.token0;
    }

    return nextInputAmount;
  };

  _proto.aggPairRouteOutputAmount = /*#__PURE__*/function () {
    var _aggPairRouteOutputAmount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(route, inputToken, inputAmount, outputCache) {
      var nextInputAmount, nextInputToken, _iterator15, _step15, _outputCache, pair, key, _outputCache2, _extends8;

      return runtime_1.wrap(function _callee7$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (outputCache === void 0) {
                outputCache = {};
              }

              nextInputAmount = inputAmount;
              nextInputToken = inputToken;
              _iterator15 = _createForOfIteratorHelperLoose(route);

            case 4:
              if ((_step15 = _iterator15()).done) {
                _context9.next = 18;
                break;
              }

              pair = _step15.value;
              key = AggTokenGraph.hashCode(AggTokenGraph.aggPairHashCode(pair) + "|" + nextInputToken.address + "|" + nextInputAmount.toString());

              if (!(((_outputCache = outputCache) == null ? void 0 : _outputCache[key]) != undefined)) {
                _context9.next = 11;
                break;
              }

              nextInputAmount = (_outputCache2 = outputCache) == null ? void 0 : _outputCache2[key];
              _context9.next = 15;
              break;

            case 11:
              _context9.next = 13;
              return this.aggPairOutputAmount(pair, nextInputToken, nextInputAmount);

            case 13:
              nextInputAmount = _context9.sent;
              outputCache = _extends({}, outputCache, (_extends8 = {}, _extends8[key] = nextInputAmount, _extends8));

            case 15:
              nextInputToken = pair.token0.address == nextInputToken.address ? pair.token1 : pair.token0;

            case 16:
              _context9.next = 4;
              break;

            case 18:
              return _context9.abrupt("return", nextInputAmount);

            case 19:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee7, this);
    }));

    function aggPairRouteOutputAmount(_x41, _x42, _x43, _x44) {
      return _aggPairRouteOutputAmount.apply(this, arguments);
    }

    return aggPairRouteOutputAmount;
  }();

  return AggTokenGraph;
}();
AggTokenGraph.BEST_ROUTE_CACHE = {};
var AggPair = function AggPair(dexName, token0, token1, reserve0, reserve1) {
  if (reserve0 === void 0) {
    reserve0 = 0;
  }

  if (reserve1 === void 0) {
    reserve1 = 0;
  }

  !(token0.chainId == token1.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, "Chain ID must be same") : invariant(false) : void 0;
  !!token0.equals(token1) ? process.env.NODE_ENV !== "production" ? invariant(false, "Require different tokens") : invariant(false) : void 0;
  !(DexFactory.getDexFactory(dexName, token0.chainId) != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "Dex name doesn't exist") : invariant(false) : void 0;
  this.dexName = dexName;

  if (token0.sortsBefore(token1)) {
    this.token0 = token0;
    this.reserve0 = BigNumber.from(reserve0);
    this.token1 = token1;
    this.reserve1 = BigNumber.from(reserve1);
  } else {
    this.token1 = token0;
    this.reserve1 = BigNumber.from(reserve0);
    this.token0 = token1;
    this.reserve0 = BigNumber.from(reserve1);
  }
};

export { ADDRESS_NULL, ADDRESS_ZERO, AggPair, AggRouter, AggRouterSwapParameter, AggSwapPlan, AggSwapRoute, AggTokenGraph, ArbiPlan, ArbiUtil, CallMode, ChainConfig, ChainId, ChangeModel, Currency, CurrencyAmount, DexAssign, DexFactory, DexSubType, DexTrade, DexType, ETHER, FACTORY_ADDRESS, Fetcher, Fraction, GraphData, INIT_CODE_HASH, InsufficientInputAmountError, InsufficientReservesError, MINIMUM_LIQUIDITY, NewHarborRouterUtil, ONE_HUNDRED_PERCENT, PERCENT_02, PERCENT_025, PERCENT_03, PERCENT_035, PERCENT_05, PERCENT_1, PERCENT_2, PERCENT_3, Pair, PairUtil, Percent, Price, PriceUtil, ProviderUtil, Rounding, Route, Router, ScanUtil, SearchChanceJsonData, SwapRouteParameter, SwapUtil, Token, TokenAmount, TokenInTradingError, TokenList, TokenUtil, Trade, TradeType, TradeUtil, WETH, WalletUtil, WalletWrapper, Web3WalletWrapper, currencyEquals, getETHPrice, inputOutputComparator, isAddress, nowTimeString, sleep, tradeComparator };
//# sourceMappingURL=aggregator-sdk.esm.js.map
