// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    //see point 1, in changes for next version.txt, research and changes folder
    // load this with php from server
    this.downloadedExchangeRates = {
      AFN: {
        currencyCode: "AFN",
        currencyNameDutch: "Afghaanse Afhani",
        exchangeRate: 90.4403
      },
      DZD: {
        currencyCode: "DZD",
        currencyNameDutch: "Algerijnse Dinar",
        exchangeRate: 151.648
      },
      AOA: {
        currencyCode: "AOA",
        currencyNameDutch: "Angolese Kwanza",
        exchangeRate: 766.577
      },
      ARS: {
        currencyCode: "ARS",
        currencyNameDutch: "Argentijnse Peso",
        exchangeRate: 91.3076
      },
      AWG: {
        currencyCode: "AWG",
        currencyNameDutch: "Arubaanse florin",
        exchangeRate: 2.11832
      },
      AZN: {
        currencyCode: "AZN",
        currencyNameDutch: "Azerbeidzjaanse manat",
        exchangeRate: 2.00357
      },
      BHD: {
        currencyCode: "BHD",
        currencyNameDutch: "Bahreinse dinar",
        exchangeRate: 0.443684
      },
      BZD: {
        currencyCode: "BZD",
        currencyNameDutch: "Belizaanse dollar",
        exchangeRate: 2.3721
      },
      BMD: {
        currencyCode: "BMD",
        currencyNameDutch: "Bermudaanse dollar",
        exchangeRate: 1.17684
      },
      BTC: {
        currencyCode: "BTC",
        currencyNameDutch: "Bitcoin",
        exchangeRate: 0.000100151
      },
      BAM: {
        currencyCode: "BAM",
        currencyNameDutch: "Bosnische mark",
        exchangeRate: 1.95609
      },
      BRL: {
        currencyCode: "BRL",
        currencyNameDutch: "Braziliaanse Real",
        exchangeRate: 6.59832
      },
      BND: {
        currencyCode: "BND",
        currencyNameDutch: "Brunei dollar",
        exchangeRate: 1.59719
      },
      BIF: {
        currencyCode: "BIF",
        currencyNameDutch: "Burundese frank",
        exchangeRate: 2277.27
      },
      KHR: {
        currencyCode: "KHR",
        currencyNameDutch: "Cambodjaanse riel",
        exchangeRate: 4830.17
      },
      XAF: {
        currencyCode: "XAF",
        currencyNameDutch: "Centraal-Afrikaanse frank",
        exchangeRate: 655.957
      },
      CNY: {
        currencyCode: "CNY",
        currencyNameDutch: "Chinese Yuan",
        exchangeRate: 7.8639
      },
      KMF: {
        currencyCode: "KMF",
        currencyNameDutch: "Comorese frank",
        exchangeRate: 494.509
      },
      CRC: {
        currencyCode: "CRC",
        currencyNameDutch: "Costa Ricaanse colon",
        exchangeRate: 709.968
      },
      CUC: {
        currencyCode: "CUC",
        currencyNameDutch: "Cubaanse convertibele peso",
        exchangeRate: 1.17714
      },
      DJF: {
        currencyCode: "DJF",
        currencyNameDutch: "Djiboutiaanse frank",
        exchangeRate: 209.501
      },
      EGP: {
        currencyCode: "EGP",
        currencyNameDutch: "Egyptische Pond",
        exchangeRate: 18.4774
      },
      ETH: {
        currencyCode: "ETH",
        currencyNameDutch: "Ethereum",
        exchangeRate: 0.0031039
      },
      EUR: {
        currencyCode: "EUR",
        currencyNameDutch: "Euro",
        exchangeRate: 1.0
      },
      FJD: {
        currencyCode: "FJD",
        currencyNameDutch: "Fiji-dollar",
        exchangeRate: 2.5185
      },
      GMD: {
        currencyCode: "GMD",
        currencyNameDutch: "Gambiaanse dalasi",
        exchangeRate: 60.9016
      },
      GHS: {
        currencyCode: "GHS",
        currencyNameDutch: "Ghanese cedi",
        exchangeRate: 6.84451
      },
      XAU: {
        currencyCode: "XAU",
        currencyNameDutch: "Goud per troy ounce",
        exchangeRate: 0.00061825
      },
      GNF: {
        currencyCode: "GNF",
        currencyNameDutch: "Guineese frank",
        exchangeRate: 11525.8
      },
      HTG: {
        currencyCode: "HTG",
        currencyNameDutch: "HaÃ¯tiaanse gourde",
        exchangeRate: 74.1397
      },
      HUF: {
        currencyCode: "HUF",
        currencyNameDutch: "Hongaarse Forint",
        exchangeRate: 364.989
      },
      ISK: {
        currencyCode: "ISK",
        currencyNameDutch: "IJslandse Kroon",
        exchangeRate: 163.593
      },
      IDR: {
        currencyCode: "IDR",
        currencyNameDutch: "Indonesische Rupia",
        exchangeRate: 17303.4
      },
      IRR: {
        currencyCode: "IRR",
        currencyNameDutch: "Iraanse Rial",
        exchangeRate: 49550.9
      },
      JMD: {
        currencyCode: "JMD",
        currencyNameDutch: "Jamaicaanse dollar",
        exchangeRate: 171.428
      },
      YER: {
        currencyCode: "YER",
        currencyNameDutch: "Jemenitische rial",
        exchangeRate: 294.622
      },
      KYD: {
        currencyCode: "KYD",
        currencyNameDutch: "Kaaimaneilandse dollar",
        exchangeRate: 0.980714
      },
      KZT: {
        currencyCode: "KZT",
        currencyNameDutch: "Kazachse tenge",
        exchangeRate: 503.857
      },
      KGS: {
        currencyCode: "KGS",
        currencyNameDutch: "Kirgizische som",
        exchangeRate: 95.6167
      },
      KRW: {
        currencyCode: "KRW",
        currencyNameDutch: "Koreaanse Won",
        exchangeRate: 1341.55
      },
      LAK: {
        currencyCode: "LAK",
        currencyNameDutch: "Laotiaanse kip",
        exchangeRate: 10877.1
      },
      LBP: {
        currencyCode: "LBP",
        currencyNameDutch: "Libanees pond",
        exchangeRate: 1781.49
      },
      LYD: {
        currencyCode: "LYD",
        currencyNameDutch: "Libische dinar",
        exchangeRate: 1.60833
      },
      MOP: {
        currencyCode: "MOP",
        currencyNameDutch: "Macause pataca",
        exchangeRate: 9.3943
      },
      MGA: {
        currencyCode: "MGA",
        currencyNameDutch: "Malagassische ariary",
        exchangeRate: 4624.41
      },
      MVR: {
        currencyCode: "MVR",
        currencyNameDutch: "Maldivische rufiyaa",
        exchangeRate: 18.1234
      },
      MAD: {
        currencyCode: "MAD",
        currencyNameDutch: "Marokkaanse dirham",
        exchangeRate: 10.8219
      },
      MUR: {
        currencyCode: "MUR",
        currencyNameDutch: "Mauritiaanse roepie",
        exchangeRate: 46.9678
      },
      MDL: {
        currencyCode: "MDL",
        currencyNameDutch: "Moldavische leu",
        exchangeRate: 19.9095
      },
      MMK: {
        currencyCode: "MMK",
        currencyNameDutch: "Myanmarese kyat",
        exchangeRate: 1519.28
      },
      NPR: {
        currencyCode: "NPR",
        currencyNameDutch: "Nepalese roepie",
        exchangeRate: 138.039
      },
      NZD: {
        currencyCode: "NZD",
        currencyNameDutch: "Nieuw-Zeelandse Dollar",
        exchangeRate: 1.78386
      },
      NGN: {
        currencyCode: "NGN",
        currencyNameDutch: "Nigeriaanse Naira",
        exchangeRate: 449.554
      },
      NOK: {
        currencyCode: "NOK",
        currencyNameDutch: "Noorse Kroon",
        exchangeRate: 10.9848
      },
      UAH: {
        currencyCode: "UAH",
        currencyNameDutch: "Oekraiense Grivna",
        exchangeRate: 33.3836
      },
      OMR: {
        currencyCode: "OMR",
        currencyNameDutch: "Omaanse rial",
        exchangeRate: 0.453079
      },
      PKR: {
        currencyCode: "PKR",
        currencyNameDutch: "Pakistaanse Roepie",
        exchangeRate: 191.223
      },
      PGK: {
        currencyCode: "PGK",
        currencyNameDutch: "Papoease kina",
        exchangeRate: 4.11931
      },
      PLN: {
        currencyCode: "PLN",
        currencyNameDutch: "Poolse Zloty",
        exchangeRate: 4.57217
      },
      XRP: {
        currencyCode: "XRP",
        currencyNameDutch: "Ripple",
        exchangeRate: 4.75445
      },
      RUB: {
        currencyCode: "RUB",
        currencyNameDutch: "Russische Roebel",
        exchangeRate: 91.3139
      },
      SBD: {
        currencyCode: "SBD",
        currencyNameDutch: "Salomon-dollar",
        exchangeRate: 9.50988
      },
      STD: {
        currencyCode: "STD",
        currencyNameDutch: "Santomese dobra",
        exchangeRate: 24718.9
      },
      RSD: {
        currencyCode: "RSD",
        currencyNameDutch: "Servische Dinar",
        exchangeRate: 117.602
      },
      SLL: {
        currencyCode: "SLL",
        currencyNameDutch: "Sierra Leoonse leone",
        exchangeRate: 11727.2
      },
      SHP: {
        currencyCode: "SHP",
        currencyNameDutch: "Sint-Heleens pond",
        exchangeRate: 0.908962
      },
      SOS: {
        currencyCode: "SOS",
        currencyNameDutch: "Somalische shilling",
        exchangeRate: 682.914
      },
      SRD: {
        currencyCode: "SRD",
        currencyNameDutch: "Surinaamse dollar",
        exchangeRate: 16.657
      },
      SYP: {
        currencyCode: "SYP",
        currencyNameDutch: "Syrisch pond",
        exchangeRate: 603.056
      },
      TWD: {
        currencyCode: "TWD",
        currencyNameDutch: "Taiwanese Dollar",
        exchangeRate: 33.826
      },
      THB: {
        currencyCode: "THB",
        currencyNameDutch: "Thaise Baht",
        exchangeRate: 36.721
      },
      TTD: {
        currencyCode: "TTD",
        currencyNameDutch: "Trinidad en Tobago dollar",
        exchangeRate: 7.98693
      },
      TND: {
        currencyCode: "TND",
        currencyNameDutch: "Tunesische Dinar",
        exchangeRate: 3.24073
      },
      UYU: {
        currencyCode: "UYU",
        currencyNameDutch: "Uruguayaanse peso",
        exchangeRate: 50.4934
      },
      VUV: {
        currencyCode: "VUV",
        currencyNameDutch: "Vanuatuaanse vatu",
        exchangeRate: 1345.74
      },
      VND: {
        currencyCode: "VND",
        currencyNameDutch: "Vietnamese Dong",
        exchangeRate: 27272.8
      },
      XAG: {
        currencyCode: "XAG",
        currencyNameDutch: "Zilver",
        exchangeRate: 0.0482382
      },
      SEK: {
        currencyCode: "SEK",
        currencyNameDutch: "Zweedse Kroon",
        exchangeRate: 10.3923
      },
      ALL: {
        currencyCode: "ALL",
        currencyNameDutch: "Albanese Lek",
        exchangeRate: 124.137
      },
      USD: {
        currencyCode: "USD",
        currencyNameDutch: "Amerikaanse Dollar",
        exchangeRate: 1.17684
      },
      ANG: {
        currencyCode: "ANG",
        currencyNameDutch: "Antilliaanse Gulden",
        exchangeRate: 2.11245
      },
      AMD: {
        currencyCode: "AMD",
        currencyNameDutch: "Armeense Dram",
        exchangeRate: 566.786
      },
      AUD: {
        currencyCode: "AUD",
        currencyNameDutch: "Australische Dollar",
        exchangeRate: 1.66591
      },
      BSD: {
        currencyCode: "BSD",
        currencyNameDutch: "Bahamaanse dollar",
        exchangeRate: 1.17684
      },
      BBD: {
        currencyCode: "BBD",
        currencyNameDutch: "Barbadiaanse dollar",
        exchangeRate: 2.35368
      },
      BDT: {
        currencyCode: "BDT",
        currencyNameDutch: "Bengaalse taka",
        exchangeRate: 99.7887
      },
      BTN: {
        currencyCode: "BTN",
        currencyNameDutch: "Bhutaanse ngultrum",
        exchangeRate: 86.2747
      },
      BOB: {
        currencyCode: "BOB",
        currencyNameDutch: "Boliviaanse boliviano",
        exchangeRate: 8.12595
      },
      BWP: {
        currencyCode: "BWP",
        currencyNameDutch: "Botswaanse pula",
        exchangeRate: 13.4649
      },
      GBP: {
        currencyCode: "GBP",
        currencyNameDutch: "Britse Pond",
        exchangeRate: 0.908962
      },
      BGN: {
        currencyCode: "BGN",
        currencyNameDutch: "Bulgaarse Lev",
        exchangeRate: 1.95603
      },
      XPF: {
        currencyCode: "XPF",
        currencyNameDutch: "CFP-frank",
        exchangeRate: 119.332
      },
      CAD: {
        currencyCode: "CAD",
        currencyNameDutch: "Canadese Dollar",
        exchangeRate: 1.55223
      },
      CLP: {
        currencyCode: "CLP",
        currencyNameDutch: "Chileense Peso",
        exchangeRate: 926.881
      },
      COP: {
        currencyCode: "COP",
        currencyNameDutch: "Colombiaanse Peso",
        exchangeRate: 4528.09
      },
      CDF: {
        currencyCode: "CDF",
        currencyNameDutch: "Congolese frank",
        exchangeRate: 2308.85
      },
      CUP: {
        currencyCode: "CUP",
        currencyNameDutch: "Cubaanse Peso",
        exchangeRate: 30.3037
      },
      DKK: {
        currencyCode: "DKK",
        currencyNameDutch: "Deense Kroon",
        exchangeRate: 7.44163
      },
      DOP: {
        currencyCode: "DOP",
        currencyNameDutch: "Dominicaanse Peso",
        exchangeRate: 68.7292
      },
      ERN: {
        currencyCode: "ERN",
        currencyNameDutch: "Eritrese nakfa",
        exchangeRate: 17.6526
      },
      ETB: {
        currencyCode: "ETB",
        currencyNameDutch: "Ethiopische birr",
        exchangeRate: 43.8516
      },
      FKP: {
        currencyCode: "FKP",
        currencyNameDutch: "Falklandeilands pond",
        exchangeRate: 0.908962
      },
      PHP: {
        currencyCode: "PHP",
        currencyNameDutch: "Filipijnse Peso",
        exchangeRate: 57.1426
      },
      GEL: {
        currencyCode: "GEL",
        currencyNameDutch: "Georgische lari",
        exchangeRate: 3.8012
      },
      GIP: {
        currencyCode: "GIP",
        currencyNameDutch: "Gibraltarees pond",
        exchangeRate: 0.908962
      },
      GTQ: {
        currencyCode: "GTQ",
        currencyNameDutch: "Guatemalaanse quetzal",
        exchangeRate: 9.15567
      },
      GYD: {
        currencyCode: "GYD",
        currencyNameDutch: "Guyaanse dollar",
        exchangeRate: 246.058
      },
      HNL: {
        currencyCode: "HNL",
        currencyNameDutch: "Hondurese lempira",
        exchangeRate: 28.8588
      },
      HKD: {
        currencyCode: "HKD",
        currencyNameDutch: "Hongkongse Dollar",
        exchangeRate: 9.12059
      },
      INR: {
        currencyCode: "INR",
        currencyNameDutch: "Indiase Roepie",
        exchangeRate: 86.3688
      },
      IQD: {
        currencyCode: "IQD",
        currencyNameDutch: "Iraakse Dinar",
        exchangeRate: 1403.12
      },
      ILS: {
        currencyCode: "ILS",
        currencyNameDutch: "Israelische Sjekel",
        exchangeRate: 3.98381
      },
      JPY: {
        currencyCode: "JPY",
        currencyNameDutch: "Japanse Yen",
        exchangeRate: 124.109
      },
      JOD: {
        currencyCode: "JOD",
        currencyNameDutch: "Jordaanse dinar",
        exchangeRate: 0.834381
      },
      CVE: {
        currencyCode: "CVE",
        currencyNameDutch: "Kaapverdische escudo",
        exchangeRate: 111.212
      },
      KES: {
        currencyCode: "KES",
        currencyNameDutch: "Keniaanse shilling",
        exchangeRate: 127.982
      },
      KWD: {
        currencyCode: "KWD",
        currencyNameDutch: "Koeweitse dinar",
        exchangeRate: 0.360046
      },
      HRK: {
        currencyCode: "HRK",
        currencyNameDutch: "Kroatische Kuna",
        exchangeRate: 7.58475
      },
      LSL: {
        currencyCode: "LSL",
        currencyNameDutch: "Lesothaanse loti",
        exchangeRate: 19.4091
      },
      LRD: {
        currencyCode: "LRD",
        currencyNameDutch: "Liberiaanse dollar",
        exchangeRate: 230.014
      },
      LTC: {
        currencyCode: "LTC",
        currencyNameDutch: "Litecoin",
        exchangeRate: 0.0244615
      },
      MKD: {
        currencyCode: "MKD",
        currencyNameDutch: "Macedonische denar",
        exchangeRate: 61.6211
      },
      MWK: {
        currencyCode: "MWK",
        currencyNameDutch: "Malawische kwacha",
        exchangeRate: 888.297
      },
      MYR: {
        currencyCode: "MYR",
        currencyNameDutch: "Maleisische Ringgit",
        exchangeRate: 4.88025
      },
      MRO: {
        currencyCode: "MRO",
        currencyNameDutch: "Mauritaanse ouguiya",
        exchangeRate: 420.133
      },
      MXN: {
        currencyCode: "MXN",
        currencyNameDutch: "Mexicaanse Peso",
        exchangeRate: 24.9479
      },
      MNT: {
        currencyCode: "MNT",
        currencyNameDutch: "Mongolische tugrik",
        exchangeRate: 3339.84
      },
      NAD: {
        currencyCode: "NAD",
        currencyNameDutch: "Namibische dollar",
        exchangeRate: 19.465
      },
      NIO: {
        currencyCode: "NIO",
        currencyNameDutch: "Nicaraguaanse CÃ³rdoba Oro",
        exchangeRate: 40.956
      },
      PEN: {
        currencyCode: "PEN",
        currencyNameDutch: "Nieuwe Peruviaanse sol",
        exchangeRate: 4.22151
      },
      KPW: {
        currencyCode: "KPW",
        currencyNameDutch: "Noord-Koreaanse won",
        exchangeRate: 1059.16
      },
      UGX: {
        currencyCode: "UGX",
        currencyNameDutch: "Oegandese shilling",
        exchangeRate: 4403.81
      },
      UZS: {
        currencyCode: "UZS",
        currencyNameDutch: "Oezbeekse sum",
        exchangeRate: 12204.6
      },
      XCD: {
        currencyCode: "XCD",
        currencyNameDutch: "Oost-Caribische dollar",
        exchangeRate: 3.18047
      },
      PAB: {
        currencyCode: "PAB",
        currencyNameDutch: "Panamese balboa",
        exchangeRate: 1.17684
      },
      PYG: {
        currencyCode: "PYG",
        currencyNameDutch: "Paraguayaanse guaranÃ­",
        exchangeRate: 8268.39
      },
      QAR: {
        currencyCode: "QAR",
        currencyNameDutch: "Qatarese Rial",
        exchangeRate: 4.28518
      },
      RON: {
        currencyCode: "RON",
        currencyNameDutch: "Roemeense Leu",
        exchangeRate: 4.87566
      },
      RWF: {
        currencyCode: "RWF",
        currencyNameDutch: "Rwandese frank",
        exchangeRate: 1149.95
      },
      WST: {
        currencyCode: "WST",
        currencyNameDutch: "Samoaanse tala",
        exchangeRate: 3.08649
      },
      SAR: {
        currencyCode: "SAR",
        currencyNameDutch: "Saoedi-Arabische Riyal",
        exchangeRate: 4.41472
      },
      SCR: {
        currencyCode: "SCR",
        currencyNameDutch: "Seychelse roepie",
        exchangeRate: 21.5464
      },
      SGD: {
        currencyCode: "SGD",
        currencyNameDutch: "Singaporese Dollar",
        exchangeRate: 1.59852
      },
      SDG: {
        currencyCode: "SDG",
        currencyNameDutch: "Soedanees pond",
        exchangeRate: 65.05
      },
      LKR: {
        currencyCode: "LKR",
        currencyNameDutch: "Sri Lankaanse Roepie",
        exchangeRate: 217.011
      },
      SZL: {
        currencyCode: "SZL",
        currencyNameDutch: "Swazische lilangeni",
        exchangeRate: 19.3924
      },
      TJS: {
        currencyCode: "TJS",
        currencyNameDutch: "Tadzjiekse somoni",
        exchangeRate: 12.145
      },
      TZS: {
        currencyCode: "TZS",
        currencyNameDutch: "Tanzaniaanse shilling",
        exchangeRate: 2730.25
      },
      TOP: {
        currencyCode: "TOP",
        currencyNameDutch: "Tongaanse pa'anga",
        exchangeRate: 2.7306
      },
      CZK: {
        currencyCode: "CZK",
        currencyNameDutch: "Tsjechische Kroon",
        exchangeRate: 27.2615
      },
      TRY: {
        currencyCode: "TRY",
        currencyNameDutch: "Turkse Lira",
        exchangeRate: 9.27112
      },
      AED: {
        currencyCode: "AED",
        currencyNameDutch: "VAE Dirham",
        exchangeRate: 4.32278
      },
      VEF: {
        currencyCode: "VEF",
        currencyNameDutch: "Venezolaanse bolivar",
        exchangeRate: 292.431
      },
      BYN: {
        currencyCode: "BYN",
        currencyNameDutch: "Wit-Russische roebel",
        exchangeRate: 3.0161
      },
      ZAR: {
        currencyCode: "ZAR",
        currencyNameDutch: "Zuid-Afrikaanse Rand",
        exchangeRate: 19.444
      },
      CHF: {
        currencyCode: "CHF",
        currencyNameDutch: "Zwitserse Frank",
        exchangeRate: 1.07157
      }
    }; // load this stuff with php

    this.downloadedCountryData = {
      AFG: {
        nameEnglish: "Afghanistan",
        alpha2Code: "AF",
        alpha3Code: "AFG",
        primaryCurrencyCode: "AFN",
        primaryCurrencyName: "Afghan afghani",
        primaryCurrencySymbol: "؋",
        nameDutch: "Afghanistan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ALA: {
        nameEnglish: "Åland Islands",
        alpha2Code: "AX",
        alpha3Code: "ALA",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Ålandeilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ALB: {
        nameEnglish: "Albania",
        alpha2Code: "AL",
        alpha3Code: "ALB",
        primaryCurrencyCode: "ALL",
        primaryCurrencyName: "Albanian lek",
        primaryCurrencySymbol: "L",
        nameDutch: "Albanië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      DZA: {
        nameEnglish: "Algeria",
        alpha2Code: "DZ",
        alpha3Code: "DZA",
        primaryCurrencyCode: "DZD",
        primaryCurrencyName: "Algerian dinar",
        primaryCurrencySymbol: "د.ج",
        nameDutch: "Algerije",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ASM: {
        nameEnglish: "American Samoa",
        alpha2Code: "AS",
        alpha3Code: "ASM",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United State Dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Amerikaans Samoa",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      AND: {
        nameEnglish: "Andorra",
        alpha2Code: "AD",
        alpha3Code: "AND",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Andorra",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      AGO: {
        nameEnglish: "Angola",
        alpha2Code: "AO",
        alpha3Code: "AGO",
        primaryCurrencyCode: "AOA",
        primaryCurrencyName: "Angolan kwanza",
        primaryCurrencySymbol: "Kz",
        nameDutch: "Angola",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      AIA: {
        nameEnglish: "Anguilla",
        alpha2Code: "AI",
        alpha3Code: "AIA",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Anguilla",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ATA: {
        nameEnglish: "Antarctica",
        alpha2Code: "AQ",
        alpha3Code: "ATA",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Antarctica",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ATG: {
        nameEnglish: "Antigua and Barbuda",
        alpha2Code: "AG",
        alpha3Code: "ATG",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Antigua en Barbuda",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ARG: {
        nameEnglish: "Argentina",
        alpha2Code: "AR",
        alpha3Code: "ARG",
        primaryCurrencyCode: "ARS",
        primaryCurrencyName: "Argentine peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Argentinië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ARM: {
        nameEnglish: "Armenia",
        alpha2Code: "AM",
        alpha3Code: "ARM",
        primaryCurrencyCode: "AMD",
        primaryCurrencyName: "Armenian dram",
        primaryCurrencySymbol: null,
        nameDutch: "Armenië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ABW: {
        nameEnglish: "Aruba",
        alpha2Code: "AW",
        alpha3Code: "ABW",
        primaryCurrencyCode: "AWG",
        primaryCurrencyName: "Aruban florin",
        primaryCurrencySymbol: "ƒ",
        nameDutch: "Aruba",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      AUS: {
        nameEnglish: "Australia",
        alpha2Code: "AU",
        alpha3Code: "AUS",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Australië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      AUT: {
        nameEnglish: "Austria",
        alpha2Code: "AT",
        alpha3Code: "AUT",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Oostenrijk",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      AZE: {
        nameEnglish: "Azerbaijan",
        alpha2Code: "AZ",
        alpha3Code: "AZE",
        primaryCurrencyCode: "AZN",
        primaryCurrencyName: "Azerbaijani manat",
        primaryCurrencySymbol: null,
        nameDutch: "Azerbeidzjan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BHS: {
        nameEnglish: "Bahamas",
        alpha2Code: "BS",
        alpha3Code: "BHS",
        primaryCurrencyCode: "BSD",
        primaryCurrencyName: "Bahamian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Bahama’s",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BHR: {
        nameEnglish: "Bahrain",
        alpha2Code: "BH",
        alpha3Code: "BHR",
        primaryCurrencyCode: "BHD",
        primaryCurrencyName: "Bahraini dinar",
        primaryCurrencySymbol: ".د.ب",
        nameDutch: "Bahrein",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BGD: {
        nameEnglish: "Bangladesh",
        alpha2Code: "BD",
        alpha3Code: "BGD",
        primaryCurrencyCode: "BDT",
        primaryCurrencyName: "Bangladeshi taka",
        primaryCurrencySymbol: "৳",
        nameDutch: "Bangladesh",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BRB: {
        nameEnglish: "Barbados",
        alpha2Code: "BB",
        alpha3Code: "BRB",
        primaryCurrencyCode: "BBD",
        primaryCurrencyName: "Barbadian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Barbados",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BLR: {
        nameEnglish: "Belarus",
        alpha2Code: "BY",
        alpha3Code: "BLR",
        primaryCurrencyCode: "BYN",
        primaryCurrencyName: "New Belarusian ruble",
        primaryCurrencySymbol: "Br",
        nameDutch: "Wit-Rusland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BEL: {
        nameEnglish: "Belgium",
        alpha2Code: "BE",
        alpha3Code: "BEL",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "België",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      BLZ: {
        nameEnglish: "Belize",
        alpha2Code: "BZ",
        alpha3Code: "BLZ",
        primaryCurrencyCode: "BZD",
        primaryCurrencyName: "Belize dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Belize",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BEN: {
        nameEnglish: "Benin",
        alpha2Code: "BJ",
        alpha3Code: "BEN",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Benin",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BMU: {
        nameEnglish: "Bermuda",
        alpha2Code: "BM",
        alpha3Code: "BMU",
        primaryCurrencyCode: "BMD",
        primaryCurrencyName: "Bermudian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Bermuda",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BTN: {
        nameEnglish: "Bhutan",
        alpha2Code: "BT",
        alpha3Code: "BTN",
        primaryCurrencyCode: "BTN",
        primaryCurrencyName: "Bhutanese ngultrum",
        primaryCurrencySymbol: "Nu.",
        nameDutch: "Bhutan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BOL: {
        nameEnglish: "Bolivia (Plurinational State of)",
        alpha2Code: "BO",
        alpha3Code: "BOL",
        primaryCurrencyCode: "BOB",
        primaryCurrencyName: "Bolivian boliviano",
        primaryCurrencySymbol: "Bs.",
        nameDutch: "Bolivia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BES: {
        nameEnglish: "Bonaire, Sint Eustatius and Saba",
        alpha2Code: "BQ",
        alpha3Code: "BES",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: null,
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BIH: {
        nameEnglish: "Bosnia and Herzegovina",
        alpha2Code: "BA",
        alpha3Code: "BIH",
        primaryCurrencyCode: "BAM",
        primaryCurrencyName: "Bosnia and Herzegovina convertible mark",
        primaryCurrencySymbol: null,
        nameDutch: "Bosnië en Herzegovina",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BWA: {
        nameEnglish: "Botswana",
        alpha2Code: "BW",
        alpha3Code: "BWA",
        primaryCurrencyCode: "BWP",
        primaryCurrencyName: "Botswana pula",
        primaryCurrencySymbol: "P",
        nameDutch: "Botswana",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BVT: {
        nameEnglish: "Bouvet Island",
        alpha2Code: "BV",
        alpha3Code: "BVT",
        primaryCurrencyCode: "NOK",
        primaryCurrencyName: "Norwegian krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Bouveteiland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BRA: {
        nameEnglish: "Brazil",
        alpha2Code: "BR",
        alpha3Code: "BRA",
        primaryCurrencyCode: "BRL",
        primaryCurrencyName: "Brazilian real",
        primaryCurrencySymbol: "R$",
        nameDutch: "Brazilië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IOT: {
        nameEnglish: "British Indian Ocean Territory",
        alpha2Code: "IO",
        alpha3Code: "IOT",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Britse Gebieden in de Indische Oceaan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      UMI: {
        nameEnglish: "United States Minor Outlying Islands",
        alpha2Code: "UM",
        alpha3Code: "UMI",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States Dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Kleine afgelegen eilanden van de Verenigde Staten",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VGB: {
        nameEnglish: "Virgin Islands (British)",
        alpha2Code: "VG",
        alpha3Code: "VGB",
        primaryCurrencyCode: null,
        primaryCurrencyName: "[D]",
        primaryCurrencySymbol: "$",
        nameDutch: "Britse Maagdeneilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VIR: {
        nameEnglish: "Virgin Islands (U.S.)",
        alpha2Code: "VI",
        alpha3Code: "VIR",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Verenigde Staten Maagdeneilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BRN: {
        nameEnglish: "Brunei Darussalam",
        alpha2Code: "BN",
        alpha3Code: "BRN",
        primaryCurrencyCode: "BND",
        primaryCurrencyName: "Brunei dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Brunei",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BGR: {
        nameEnglish: "Bulgaria",
        alpha2Code: "BG",
        alpha3Code: "BGR",
        primaryCurrencyCode: "BGN",
        primaryCurrencyName: "Bulgarian lev",
        primaryCurrencySymbol: "лв",
        nameDutch: "Bulgarije",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      BFA: {
        nameEnglish: "Burkina Faso",
        alpha2Code: "BF",
        alpha3Code: "BFA",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Burkina Faso",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BDI: {
        nameEnglish: "Burundi",
        alpha2Code: "BI",
        alpha3Code: "BDI",
        primaryCurrencyCode: "BIF",
        primaryCurrencyName: "Burundian franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Burundi",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KHM: {
        nameEnglish: "Cambodia",
        alpha2Code: "KH",
        alpha3Code: "KHM",
        primaryCurrencyCode: "KHR",
        primaryCurrencyName: "Cambodian riel",
        primaryCurrencySymbol: "៛",
        nameDutch: "Cambodja",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CMR: {
        nameEnglish: "Cameroon",
        alpha2Code: "CM",
        alpha3Code: "CMR",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Kameroen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CAN: {
        nameEnglish: "Canada",
        alpha2Code: "CA",
        alpha3Code: "CAN",
        primaryCurrencyCode: "CAD",
        primaryCurrencyName: "Canadian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Canada",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CPV: {
        nameEnglish: "Cabo Verde",
        alpha2Code: "CV",
        alpha3Code: "CPV",
        primaryCurrencyCode: "CVE",
        primaryCurrencyName: "Cape Verdean escudo",
        primaryCurrencySymbol: "Esc",
        nameDutch: "Kaapverdië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CYM: {
        nameEnglish: "Cayman Islands",
        alpha2Code: "KY",
        alpha3Code: "CYM",
        primaryCurrencyCode: "KYD",
        primaryCurrencyName: "Cayman Islands dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Caymaneilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CAF: {
        nameEnglish: "Central African Republic",
        alpha2Code: "CF",
        alpha3Code: "CAF",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Centraal-Afrikaanse Republiek",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TCD: {
        nameEnglish: "Chad",
        alpha2Code: "TD",
        alpha3Code: "TCD",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Tsjaad",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CHL: {
        nameEnglish: "Chile",
        alpha2Code: "CL",
        alpha3Code: "CHL",
        primaryCurrencyCode: "CLP",
        primaryCurrencyName: "Chilean peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Chili",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CHN: {
        nameEnglish: "China",
        alpha2Code: "CN",
        alpha3Code: "CHN",
        primaryCurrencyCode: "CNY",
        primaryCurrencyName: "Chinese yuan",
        primaryCurrencySymbol: "¥",
        nameDutch: "China",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CXR: {
        nameEnglish: "Christmas Island",
        alpha2Code: "CX",
        alpha3Code: "CXR",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Christmaseiland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CCK: {
        nameEnglish: "Cocos (Keeling) Islands",
        alpha2Code: "CC",
        alpha3Code: "CCK",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Cocoseilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      COL: {
        nameEnglish: "Colombia",
        alpha2Code: "CO",
        alpha3Code: "COL",
        primaryCurrencyCode: "COP",
        primaryCurrencyName: "Colombian peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Colombia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      COM: {
        nameEnglish: "Comoros",
        alpha2Code: "KM",
        alpha3Code: "COM",
        primaryCurrencyCode: "KMF",
        primaryCurrencyName: "Comorian franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Comoren",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      COG: {
        nameEnglish: "Congo",
        alpha2Code: "CG",
        alpha3Code: "COG",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Congo [Republiek]",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      COD: {
        nameEnglish: "Congo (Democratic Republic of the)",
        alpha2Code: "CD",
        alpha3Code: "COD",
        primaryCurrencyCode: "CDF",
        primaryCurrencyName: "Congolese franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Congo [DRC]",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      COK: {
        nameEnglish: "Cook Islands",
        alpha2Code: "CK",
        alpha3Code: "COK",
        primaryCurrencyCode: "NZD",
        primaryCurrencyName: "New Zealand dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Cookeilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CRI: {
        nameEnglish: "Costa Rica",
        alpha2Code: "CR",
        alpha3Code: "CRI",
        primaryCurrencyCode: "CRC",
        primaryCurrencyName: "Costa Rican colón",
        primaryCurrencySymbol: "₡",
        nameDutch: "Costa Rica",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HRV: {
        nameEnglish: "Croatia",
        alpha2Code: "HR",
        alpha3Code: "HRV",
        primaryCurrencyCode: "HRK",
        primaryCurrencyName: "Croatian kuna",
        primaryCurrencySymbol: "kn",
        nameDutch: "Kroatië",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      CUB: {
        nameEnglish: "Cuba",
        alpha2Code: "CU",
        alpha3Code: "CUB",
        primaryCurrencyCode: "CUC",
        primaryCurrencyName: "Cuban convertible peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Cuba",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CUW: {
        nameEnglish: "Curaçao",
        alpha2Code: "CW",
        alpha3Code: "CUW",
        primaryCurrencyCode: "ANG",
        primaryCurrencyName: "Netherlands Antillean guilder",
        primaryCurrencySymbol: "ƒ",
        nameDutch: "Curaçao",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CYP: {
        nameEnglish: "Cyprus",
        alpha2Code: "CY",
        alpha3Code: "CYP",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Cyprus",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      CZE: {
        nameEnglish: "Czech Republic",
        alpha2Code: "CZ",
        alpha3Code: "CZE",
        primaryCurrencyCode: "CZK",
        primaryCurrencyName: "Czech koruna",
        primaryCurrencySymbol: "Kč",
        nameDutch: "Tsjechië",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      DNK: {
        nameEnglish: "Denmark",
        alpha2Code: "DK",
        alpha3Code: "DNK",
        primaryCurrencyCode: "DKK",
        primaryCurrencyName: "Danish krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Denemarken",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      DJI: {
        nameEnglish: "Djibouti",
        alpha2Code: "DJ",
        alpha3Code: "DJI",
        primaryCurrencyCode: "DJF",
        primaryCurrencyName: "Djiboutian franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Djibouti",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      DMA: {
        nameEnglish: "Dominica",
        alpha2Code: "DM",
        alpha3Code: "DMA",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Dominica",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      DOM: {
        nameEnglish: "Dominican Republic",
        alpha2Code: "DO",
        alpha3Code: "DOM",
        primaryCurrencyCode: "DOP",
        primaryCurrencyName: "Dominican peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Dominicaanse Republiek",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ECU: {
        nameEnglish: "Ecuador",
        alpha2Code: "EC",
        alpha3Code: "ECU",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Ecuador",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      EGY: {
        nameEnglish: "Egypt",
        alpha2Code: "EG",
        alpha3Code: "EGY",
        primaryCurrencyCode: "EGP",
        primaryCurrencyName: "Egyptian pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Egypte",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SLV: {
        nameEnglish: "El Salvador",
        alpha2Code: "SV",
        alpha3Code: "SLV",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "El Salvador",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GNQ: {
        nameEnglish: "Equatorial Guinea",
        alpha2Code: "GQ",
        alpha3Code: "GNQ",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Equatoriaal-Guinea",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ERI: {
        nameEnglish: "Eritrea",
        alpha2Code: "ER",
        alpha3Code: "ERI",
        primaryCurrencyCode: "ERN",
        primaryCurrencyName: "Eritrean nakfa",
        primaryCurrencySymbol: "Nfk",
        nameDutch: "Eritrea",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      EST: {
        nameEnglish: "Estonia",
        alpha2Code: "EE",
        alpha3Code: "EST",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Estland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      ETH: {
        nameEnglish: "Ethiopia",
        alpha2Code: "ET",
        alpha3Code: "ETH",
        primaryCurrencyCode: "ETB",
        primaryCurrencyName: "Ethiopian birr",
        primaryCurrencySymbol: "Br",
        nameDutch: "Ethiopië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      FLK: {
        nameEnglish: "Falkland Islands (Malvinas)",
        alpha2Code: "FK",
        alpha3Code: "FLK",
        primaryCurrencyCode: "FKP",
        primaryCurrencyName: "Falkland Islands pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Falklandeilanden [Islas Malvinas]",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      FRO: {
        nameEnglish: "Faroe Islands",
        alpha2Code: "FO",
        alpha3Code: "FRO",
        primaryCurrencyCode: "DKK",
        primaryCurrencyName: "Danish krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Faeröer",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      FJI: {
        nameEnglish: "Fiji",
        alpha2Code: "FJ",
        alpha3Code: "FJI",
        primaryCurrencyCode: "FJD",
        primaryCurrencyName: "Fijian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Fiji",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      FIN: {
        nameEnglish: "Finland",
        alpha2Code: "FI",
        alpha3Code: "FIN",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Finland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      FRA: {
        nameEnglish: "France",
        alpha2Code: "FR",
        alpha3Code: "FRA",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Frankrijk",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      GUF: {
        nameEnglish: "French Guiana",
        alpha2Code: "GF",
        alpha3Code: "GUF",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Frans-Guyana",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PYF: {
        nameEnglish: "French Polynesia",
        alpha2Code: "PF",
        alpha3Code: "PYF",
        primaryCurrencyCode: "XPF",
        primaryCurrencyName: "CFP franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Frans-Polynesië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ATF: {
        nameEnglish: "French Southern Territories",
        alpha2Code: "TF",
        alpha3Code: "ATF",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Franse Gebieden in de zuidelijke Indische Oceaan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GAB: {
        nameEnglish: "Gabon",
        alpha2Code: "GA",
        alpha3Code: "GAB",
        primaryCurrencyCode: "XAF",
        primaryCurrencyName: "Central African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Gabon",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GMB: {
        nameEnglish: "Gambia",
        alpha2Code: "GM",
        alpha3Code: "GMB",
        primaryCurrencyCode: "GMD",
        primaryCurrencyName: "Gambian dalasi",
        primaryCurrencySymbol: "D",
        nameDutch: "Gambia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GEO: {
        nameEnglish: "Georgia",
        alpha2Code: "GE",
        alpha3Code: "GEO",
        primaryCurrencyCode: "GEL",
        primaryCurrencyName: "Georgian Lari",
        primaryCurrencySymbol: "ლ",
        nameDutch: "Georgië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      DEU: {
        nameEnglish: "Germany",
        alpha2Code: "DE",
        alpha3Code: "DEU",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Duitsland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      GHA: {
        nameEnglish: "Ghana",
        alpha2Code: "GH",
        alpha3Code: "GHA",
        primaryCurrencyCode: "GHS",
        primaryCurrencyName: "Ghanaian cedi",
        primaryCurrencySymbol: "₵",
        nameDutch: "Ghana",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GIB: {
        nameEnglish: "Gibraltar",
        alpha2Code: "GI",
        alpha3Code: "GIB",
        primaryCurrencyCode: "GIP",
        primaryCurrencyName: "Gibraltar pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Gibraltar",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GRC: {
        nameEnglish: "Greece",
        alpha2Code: "GR",
        alpha3Code: "GRC",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Griekenland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      GRL: {
        nameEnglish: "Greenland",
        alpha2Code: "GL",
        alpha3Code: "GRL",
        primaryCurrencyCode: "DKK",
        primaryCurrencyName: "Danish krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Groenland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GRD: {
        nameEnglish: "Grenada",
        alpha2Code: "GD",
        alpha3Code: "GRD",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Grenada",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GLP: {
        nameEnglish: "Guadeloupe",
        alpha2Code: "GP",
        alpha3Code: "GLP",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Guadeloupe",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GUM: {
        nameEnglish: "Guam",
        alpha2Code: "GU",
        alpha3Code: "GUM",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Guam",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GTM: {
        nameEnglish: "Guatemala",
        alpha2Code: "GT",
        alpha3Code: "GTM",
        primaryCurrencyCode: "GTQ",
        primaryCurrencyName: "Guatemalan quetzal",
        primaryCurrencySymbol: "Q",
        nameDutch: "Guatemala",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GGY: {
        nameEnglish: "Guernsey",
        alpha2Code: "GG",
        alpha3Code: "GGY",
        primaryCurrencyCode: "GBP",
        primaryCurrencyName: "British pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Guernsey",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GIN: {
        nameEnglish: "Guinea",
        alpha2Code: "GN",
        alpha3Code: "GIN",
        primaryCurrencyCode: "GNF",
        primaryCurrencyName: "Guinean franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Guinee",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GNB: {
        nameEnglish: "Guinea-Bissau",
        alpha2Code: "GW",
        alpha3Code: "GNB",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Guinee-Bissau",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GUY: {
        nameEnglish: "Guyana",
        alpha2Code: "GY",
        alpha3Code: "GUY",
        primaryCurrencyCode: "GYD",
        primaryCurrencyName: "Guyanese dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Guyana",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HTI: {
        nameEnglish: "Haiti",
        alpha2Code: "HT",
        alpha3Code: "HTI",
        primaryCurrencyCode: "HTG",
        primaryCurrencyName: "Haitian gourde",
        primaryCurrencySymbol: "G",
        nameDutch: "Haïti",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HMD: {
        nameEnglish: "Heard Island and McDonald Islands",
        alpha2Code: "HM",
        alpha3Code: "HMD",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Heard- en McDonaldeilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VAT: {
        nameEnglish: "Holy See",
        alpha2Code: "VA",
        alpha3Code: "VAT",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Heilige Stoel",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HND: {
        nameEnglish: "Honduras",
        alpha2Code: "HN",
        alpha3Code: "HND",
        primaryCurrencyCode: "HNL",
        primaryCurrencyName: "Honduran lempira",
        primaryCurrencySymbol: "L",
        nameDutch: "Honduras",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HKG: {
        nameEnglish: "Hong Kong",
        alpha2Code: "HK",
        alpha3Code: "HKG",
        primaryCurrencyCode: "HKD",
        primaryCurrencyName: "Hong Kong dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Hongkong",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      HUN: {
        nameEnglish: "Hungary",
        alpha2Code: "HU",
        alpha3Code: "HUN",
        primaryCurrencyCode: "HUF",
        primaryCurrencyName: "Hungarian forint",
        primaryCurrencySymbol: "Ft",
        nameDutch: "Hongarije",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      ISL: {
        nameEnglish: "Iceland",
        alpha2Code: "IS",
        alpha3Code: "ISL",
        primaryCurrencyCode: "ISK",
        primaryCurrencyName: "Icelandic króna",
        primaryCurrencySymbol: "kr",
        nameDutch: "IJsland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IND: {
        nameEnglish: "India",
        alpha2Code: "IN",
        alpha3Code: "IND",
        primaryCurrencyCode: "INR",
        primaryCurrencyName: "Indian rupee",
        primaryCurrencySymbol: "₹",
        nameDutch: "India",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IDN: {
        nameEnglish: "Indonesia",
        alpha2Code: "ID",
        alpha3Code: "IDN",
        primaryCurrencyCode: "IDR",
        primaryCurrencyName: "Indonesian rupiah",
        primaryCurrencySymbol: "Rp",
        nameDutch: "Indonesië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      CIV: {
        nameEnglish: "Côte d'Ivoire",
        alpha2Code: "CI",
        alpha3Code: "CIV",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Ivoorkust",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IRN: {
        nameEnglish: "Iran (Islamic Republic of)",
        alpha2Code: "IR",
        alpha3Code: "IRN",
        primaryCurrencyCode: "IRR",
        primaryCurrencyName: "Iranian rial",
        primaryCurrencySymbol: "﷼",
        nameDutch: "Iran",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IRQ: {
        nameEnglish: "Iraq",
        alpha2Code: "IQ",
        alpha3Code: "IRQ",
        primaryCurrencyCode: "IQD",
        primaryCurrencyName: "Iraqi dinar",
        primaryCurrencySymbol: "ع.د",
        nameDutch: "Irak",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      IRL: {
        nameEnglish: "Ireland",
        alpha2Code: "IE",
        alpha3Code: "IRL",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Ierland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      IMN: {
        nameEnglish: "Isle of Man",
        alpha2Code: "IM",
        alpha3Code: "IMN",
        primaryCurrencyCode: "GBP",
        primaryCurrencyName: "British pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Isle of Man",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ISR: {
        nameEnglish: "Israel",
        alpha2Code: "IL",
        alpha3Code: "ISR",
        primaryCurrencyCode: "ILS",
        primaryCurrencyName: "Israeli new shekel",
        primaryCurrencySymbol: "₪",
        nameDutch: "Israël",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ITA: {
        nameEnglish: "Italy",
        alpha2Code: "IT",
        alpha3Code: "ITA",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Italië",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      JAM: {
        nameEnglish: "Jamaica",
        alpha2Code: "JM",
        alpha3Code: "JAM",
        primaryCurrencyCode: "JMD",
        primaryCurrencyName: "Jamaican dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Jamaica",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      JPN: {
        nameEnglish: "Japan",
        alpha2Code: "JP",
        alpha3Code: "JPN",
        primaryCurrencyCode: "JPY",
        primaryCurrencyName: "Japanese yen",
        primaryCurrencySymbol: "¥",
        nameDutch: "Japan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      JEY: {
        nameEnglish: "Jersey",
        alpha2Code: "JE",
        alpha3Code: "JEY",
        primaryCurrencyCode: "GBP",
        primaryCurrencyName: "British pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Jersey",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      JOR: {
        nameEnglish: "Jordan",
        alpha2Code: "JO",
        alpha3Code: "JOR",
        primaryCurrencyCode: "JOD",
        primaryCurrencyName: "Jordanian dinar",
        primaryCurrencySymbol: "د.ا",
        nameDutch: "Jordanië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KAZ: {
        nameEnglish: "Kazakhstan",
        alpha2Code: "KZ",
        alpha3Code: "KAZ",
        primaryCurrencyCode: "KZT",
        primaryCurrencyName: "Kazakhstani tenge",
        primaryCurrencySymbol: null,
        nameDutch: "Kazachstan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KEN: {
        nameEnglish: "Kenya",
        alpha2Code: "KE",
        alpha3Code: "KEN",
        primaryCurrencyCode: "KES",
        primaryCurrencyName: "Kenyan shilling",
        primaryCurrencySymbol: "Sh",
        nameDutch: "Kenia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KIR: {
        nameEnglish: "Kiribati",
        alpha2Code: "KI",
        alpha3Code: "KIR",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Kiribati",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KWT: {
        nameEnglish: "Kuwait",
        alpha2Code: "KW",
        alpha3Code: "KWT",
        primaryCurrencyCode: "KWD",
        primaryCurrencyName: "Kuwaiti dinar",
        primaryCurrencySymbol: "د.ك",
        nameDutch: "Koeweit",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KGZ: {
        nameEnglish: "Kyrgyzstan",
        alpha2Code: "KG",
        alpha3Code: "KGZ",
        primaryCurrencyCode: "KGS",
        primaryCurrencyName: "Kyrgyzstani som",
        primaryCurrencySymbol: "с",
        nameDutch: "Kirgizië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LAO: {
        nameEnglish: "Lao People's Democratic Republic",
        alpha2Code: "LA",
        alpha3Code: "LAO",
        primaryCurrencyCode: "LAK",
        primaryCurrencyName: "Lao kip",
        primaryCurrencySymbol: "₭",
        nameDutch: "Laos",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LVA: {
        nameEnglish: "Latvia",
        alpha2Code: "LV",
        alpha3Code: "LVA",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Letland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      LBN: {
        nameEnglish: "Lebanon",
        alpha2Code: "LB",
        alpha3Code: "LBN",
        primaryCurrencyCode: "LBP",
        primaryCurrencyName: "Lebanese pound",
        primaryCurrencySymbol: "ل.ل",
        nameDutch: "Libanon",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LSO: {
        nameEnglish: "Lesotho",
        alpha2Code: "LS",
        alpha3Code: "LSO",
        primaryCurrencyCode: "LSL",
        primaryCurrencyName: "Lesotho loti",
        primaryCurrencySymbol: "L",
        nameDutch: "Lesotho",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LBR: {
        nameEnglish: "Liberia",
        alpha2Code: "LR",
        alpha3Code: "LBR",
        primaryCurrencyCode: "LRD",
        primaryCurrencyName: "Liberian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Liberia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LBY: {
        nameEnglish: "Libya",
        alpha2Code: "LY",
        alpha3Code: "LBY",
        primaryCurrencyCode: "LYD",
        primaryCurrencyName: "Libyan dinar",
        primaryCurrencySymbol: "ل.د",
        nameDutch: "Libië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LIE: {
        nameEnglish: "Liechtenstein",
        alpha2Code: "LI",
        alpha3Code: "LIE",
        primaryCurrencyCode: "CHF",
        primaryCurrencyName: "Swiss franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Liechtenstein",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LTU: {
        nameEnglish: "Lithuania",
        alpha2Code: "LT",
        alpha3Code: "LTU",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Litouwen",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      LUX: {
        nameEnglish: "Luxembourg",
        alpha2Code: "LU",
        alpha3Code: "LUX",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Luxemburg",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      MAC: {
        nameEnglish: "Macao",
        alpha2Code: "MO",
        alpha3Code: "MAC",
        primaryCurrencyCode: "MOP",
        primaryCurrencyName: "Macanese pataca",
        primaryCurrencySymbol: "P",
        nameDutch: "Macao",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MKD: {
        nameEnglish: "Macedonia (the former Yugoslav Republic of)",
        alpha2Code: "MK",
        alpha3Code: "MKD",
        primaryCurrencyCode: "MKD",
        primaryCurrencyName: "Macedonian denar",
        primaryCurrencySymbol: "ден",
        nameDutch: "Macedonië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MDG: {
        nameEnglish: "Madagascar",
        alpha2Code: "MG",
        alpha3Code: "MDG",
        primaryCurrencyCode: "MGA",
        primaryCurrencyName: "Malagasy ariary",
        primaryCurrencySymbol: "Ar",
        nameDutch: "Madagaskar",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MWI: {
        nameEnglish: "Malawi",
        alpha2Code: "MW",
        alpha3Code: "MWI",
        primaryCurrencyCode: "MWK",
        primaryCurrencyName: "Malawian kwacha",
        primaryCurrencySymbol: "MK",
        nameDutch: "Malawi",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MYS: {
        nameEnglish: "Malaysia",
        alpha2Code: "MY",
        alpha3Code: "MYS",
        primaryCurrencyCode: "MYR",
        primaryCurrencyName: "Malaysian ringgit",
        primaryCurrencySymbol: "RM",
        nameDutch: "Maleisië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MDV: {
        nameEnglish: "Maldives",
        alpha2Code: "MV",
        alpha3Code: "MDV",
        primaryCurrencyCode: "MVR",
        primaryCurrencyName: "Maldivian rufiyaa",
        primaryCurrencySymbol: ".ރ",
        nameDutch: "Maldiven",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MLI: {
        nameEnglish: "Mali",
        alpha2Code: "ML",
        alpha3Code: "MLI",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Mali",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MLT: {
        nameEnglish: "Malta",
        alpha2Code: "MT",
        alpha3Code: "MLT",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Malta",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      MHL: {
        nameEnglish: "Marshall Islands",
        alpha2Code: "MH",
        alpha3Code: "MHL",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Marshalleilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MTQ: {
        nameEnglish: "Martinique",
        alpha2Code: "MQ",
        alpha3Code: "MTQ",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Martinique",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MRT: {
        nameEnglish: "Mauritania",
        alpha2Code: "MR",
        alpha3Code: "MRT",
        primaryCurrencyCode: "MRO",
        primaryCurrencyName: "Mauritanian ouguiya",
        primaryCurrencySymbol: "UM",
        nameDutch: "Mauritanië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MUS: {
        nameEnglish: "Mauritius",
        alpha2Code: "MU",
        alpha3Code: "MUS",
        primaryCurrencyCode: "MUR",
        primaryCurrencyName: "Mauritian rupee",
        primaryCurrencySymbol: "₨",
        nameDutch: "Mauritius",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MYT: {
        nameEnglish: "Mayotte",
        alpha2Code: "YT",
        alpha3Code: "MYT",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Mayotte",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MEX: {
        nameEnglish: "Mexico",
        alpha2Code: "MX",
        alpha3Code: "MEX",
        primaryCurrencyCode: "MXN",
        primaryCurrencyName: "Mexican peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Mexico",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      FSM: {
        nameEnglish: "Micronesia (Federated States of)",
        alpha2Code: "FM",
        alpha3Code: "FSM",
        primaryCurrencyCode: null,
        primaryCurrencyName: "[D]",
        primaryCurrencySymbol: "$",
        nameDutch: "Micronesië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MDA: {
        nameEnglish: "Moldova (Republic of)",
        alpha2Code: "MD",
        alpha3Code: "MDA",
        primaryCurrencyCode: "MDL",
        primaryCurrencyName: "Moldovan leu",
        primaryCurrencySymbol: "L",
        nameDutch: "Moldavië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MCO: {
        nameEnglish: "Monaco",
        alpha2Code: "MC",
        alpha3Code: "MCO",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Monaco",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MNG: {
        nameEnglish: "Mongolia",
        alpha2Code: "MN",
        alpha3Code: "MNG",
        primaryCurrencyCode: "MNT",
        primaryCurrencyName: "Mongolian tögrög",
        primaryCurrencySymbol: "₮",
        nameDutch: "Mongolië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MNE: {
        nameEnglish: "Montenegro",
        alpha2Code: "ME",
        alpha3Code: "MNE",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Montenegro",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MSR: {
        nameEnglish: "Montserrat",
        alpha2Code: "MS",
        alpha3Code: "MSR",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Montserrat",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MAR: {
        nameEnglish: "Morocco",
        alpha2Code: "MA",
        alpha3Code: "MAR",
        primaryCurrencyCode: "MAD",
        primaryCurrencyName: "Moroccan dirham",
        primaryCurrencySymbol: "د.م.",
        nameDutch: "Marokko",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MOZ: {
        nameEnglish: "Mozambique",
        alpha2Code: "MZ",
        alpha3Code: "MOZ",
        primaryCurrencyCode: "MZN",
        primaryCurrencyName: "Mozambican metical",
        primaryCurrencySymbol: "MT",
        nameDutch: "Mozambique",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MMR: {
        nameEnglish: "Myanmar",
        alpha2Code: "MM",
        alpha3Code: "MMR",
        primaryCurrencyCode: "MMK",
        primaryCurrencyName: "Burmese kyat",
        primaryCurrencySymbol: "Ks",
        nameDutch: "Myanmar",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NAM: {
        nameEnglish: "Namibia",
        alpha2Code: "NA",
        alpha3Code: "NAM",
        primaryCurrencyCode: "NAD",
        primaryCurrencyName: "Namibian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Namibië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NRU: {
        nameEnglish: "Nauru",
        alpha2Code: "NR",
        alpha3Code: "NRU",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Nauru",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NPL: {
        nameEnglish: "Nepal",
        alpha2Code: "NP",
        alpha3Code: "NPL",
        primaryCurrencyCode: "NPR",
        primaryCurrencyName: "Nepalese rupee",
        primaryCurrencySymbol: "₨",
        nameDutch: "Nepal",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NLD: {
        nameEnglish: "Netherlands",
        alpha2Code: "NL",
        alpha3Code: "NLD",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Nederland",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      NCL: {
        nameEnglish: "New Caledonia",
        alpha2Code: "NC",
        alpha3Code: "NCL",
        primaryCurrencyCode: "XPF",
        primaryCurrencyName: "CFP franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Nieuw-Caledonië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NZL: {
        nameEnglish: "New Zealand",
        alpha2Code: "NZ",
        alpha3Code: "NZL",
        primaryCurrencyCode: "NZD",
        primaryCurrencyName: "New Zealand dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Nieuw-Zeeland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NIC: {
        nameEnglish: "Nicaragua",
        alpha2Code: "NI",
        alpha3Code: "NIC",
        primaryCurrencyCode: "NIO",
        primaryCurrencyName: "Nicaraguan córdoba",
        primaryCurrencySymbol: "C$",
        nameDutch: "Nicaragua",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NER: {
        nameEnglish: "Niger",
        alpha2Code: "NE",
        alpha3Code: "NER",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Niger",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NGA: {
        nameEnglish: "Nigeria",
        alpha2Code: "NG",
        alpha3Code: "NGA",
        primaryCurrencyCode: "NGN",
        primaryCurrencyName: "Nigerian naira",
        primaryCurrencySymbol: "₦",
        nameDutch: "Nigeria",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NIU: {
        nameEnglish: "Niue",
        alpha2Code: "NU",
        alpha3Code: "NIU",
        primaryCurrencyCode: "NZD",
        primaryCurrencyName: "New Zealand dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Niue",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NFK: {
        nameEnglish: "Norfolk Island",
        alpha2Code: "NF",
        alpha3Code: "NFK",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Norfolkeiland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PRK: {
        nameEnglish: "Korea (Democratic People's Republic of)",
        alpha2Code: "KP",
        alpha3Code: "PRK",
        primaryCurrencyCode: "KPW",
        primaryCurrencyName: "North Korean won",
        primaryCurrencySymbol: "₩",
        nameDutch: "Noord-Korea",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MNP: {
        nameEnglish: "Northern Mariana Islands",
        alpha2Code: "MP",
        alpha3Code: "MNP",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Noordelijke Marianeneilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      NOR: {
        nameEnglish: "Norway",
        alpha2Code: "NO",
        alpha3Code: "NOR",
        primaryCurrencyCode: "NOK",
        primaryCurrencyName: "Norwegian krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Noorwegen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      OMN: {
        nameEnglish: "Oman",
        alpha2Code: "OM",
        alpha3Code: "OMN",
        primaryCurrencyCode: "OMR",
        primaryCurrencyName: "Omani rial",
        primaryCurrencySymbol: "ر.ع.",
        nameDutch: "Oman",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PAK: {
        nameEnglish: "Pakistan",
        alpha2Code: "PK",
        alpha3Code: "PAK",
        primaryCurrencyCode: "PKR",
        primaryCurrencyName: "Pakistani rupee",
        primaryCurrencySymbol: "₨",
        nameDutch: "Pakistan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PLW: {
        nameEnglish: "Palau",
        alpha2Code: "PW",
        alpha3Code: "PLW",
        primaryCurrencyCode: "(none)",
        primaryCurrencyName: "[E]",
        primaryCurrencySymbol: "$",
        nameDutch: "Palau",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PSE: {
        nameEnglish: "Palestine, State of",
        alpha2Code: "PS",
        alpha3Code: "PSE",
        primaryCurrencyCode: "ILS",
        primaryCurrencyName: "Israeli new sheqel",
        primaryCurrencySymbol: "₪",
        nameDutch: "Palestijnse gebieden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PAN: {
        nameEnglish: "Panama",
        alpha2Code: "PA",
        alpha3Code: "PAN",
        primaryCurrencyCode: "PAB",
        primaryCurrencyName: "Panamanian balboa",
        primaryCurrencySymbol: "B/.",
        nameDutch: "Panama",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PNG: {
        nameEnglish: "Papua New Guinea",
        alpha2Code: "PG",
        alpha3Code: "PNG",
        primaryCurrencyCode: "PGK",
        primaryCurrencyName: "Papua New Guinean kina",
        primaryCurrencySymbol: "K",
        nameDutch: "Papoea-Nieuw-Guinea",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PRY: {
        nameEnglish: "Paraguay",
        alpha2Code: "PY",
        alpha3Code: "PRY",
        primaryCurrencyCode: "PYG",
        primaryCurrencyName: "Paraguayan guaraní",
        primaryCurrencySymbol: "₲",
        nameDutch: "Paraguay",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PER: {
        nameEnglish: "Peru",
        alpha2Code: "PE",
        alpha3Code: "PER",
        primaryCurrencyCode: "PEN",
        primaryCurrencyName: "Peruvian sol",
        primaryCurrencySymbol: "S/.",
        nameDutch: "Peru",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PHL: {
        nameEnglish: "Philippines",
        alpha2Code: "PH",
        alpha3Code: "PHL",
        primaryCurrencyCode: "PHP",
        primaryCurrencyName: "Philippine peso",
        primaryCurrencySymbol: "₱",
        nameDutch: "Filipijnen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      PCN: {
        nameEnglish: "Pitcairn",
        alpha2Code: "PN",
        alpha3Code: "PCN",
        primaryCurrencyCode: "NZD",
        primaryCurrencyName: "New Zealand dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Pitcairneilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      POL: {
        nameEnglish: "Poland",
        alpha2Code: "PL",
        alpha3Code: "POL",
        primaryCurrencyCode: "PLN",
        primaryCurrencyName: "Polish złoty",
        primaryCurrencySymbol: "zł",
        nameDutch: "Polen",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      PRT: {
        nameEnglish: "Portugal",
        alpha2Code: "PT",
        alpha3Code: "PRT",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Portugal",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      PRI: {
        nameEnglish: "Puerto Rico",
        alpha2Code: "PR",
        alpha3Code: "PRI",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Puerto Rico",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      QAT: {
        nameEnglish: "Qatar",
        alpha2Code: "QA",
        alpha3Code: "QAT",
        primaryCurrencyCode: "QAR",
        primaryCurrencyName: "Qatari riyal",
        primaryCurrencySymbol: "ر.ق",
        nameDutch: "Qatar",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KOS: {
        nameEnglish: "Republic of Kosovo",
        alpha2Code: "XK",
        alpha3Code: "KOS",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: null,
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      REU: {
        nameEnglish: "Réunion",
        alpha2Code: "RE",
        alpha3Code: "REU",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Réunion",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ROU: {
        nameEnglish: "Romania",
        alpha2Code: "RO",
        alpha3Code: "ROU",
        primaryCurrencyCode: "RON",
        primaryCurrencyName: "Romanian leu",
        primaryCurrencySymbol: "lei",
        nameDutch: "Roemenië",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      RUS: {
        nameEnglish: "Russian Federation",
        alpha2Code: "RU",
        alpha3Code: "RUS",
        primaryCurrencyCode: "RUB",
        primaryCurrencyName: "Russian ruble",
        primaryCurrencySymbol: "₽",
        nameDutch: "Rusland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      RWA: {
        nameEnglish: "Rwanda",
        alpha2Code: "RW",
        alpha3Code: "RWA",
        primaryCurrencyCode: "RWF",
        primaryCurrencyName: "Rwandan franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Rwanda",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      BLM: {
        nameEnglish: "Saint Barthélemy",
        alpha2Code: "BL",
        alpha3Code: "BLM",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Saint Barthélemy",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SHN: {
        nameEnglish: "Saint Helena, Ascension and Tristan da Cunha",
        alpha2Code: "SH",
        alpha3Code: "SHN",
        primaryCurrencyCode: "SHP",
        primaryCurrencyName: "Saint Helena pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Sint-Helena",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KNA: {
        nameEnglish: "Saint Kitts and Nevis",
        alpha2Code: "KN",
        alpha3Code: "KNA",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Saint Kitts en Nevis",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      LCA: {
        nameEnglish: "Saint Lucia",
        alpha2Code: "LC",
        alpha3Code: "LCA",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Saint Lucia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      MAF: {
        nameEnglish: "Saint Martin (French part)",
        alpha2Code: "MF",
        alpha3Code: "MAF",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Saint-Martin",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SPM: {
        nameEnglish: "Saint Pierre and Miquelon",
        alpha2Code: "PM",
        alpha3Code: "SPM",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Saint Pierre en Miquelon",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VCT: {
        nameEnglish: "Saint Vincent and the Grenadines",
        alpha2Code: "VC",
        alpha3Code: "VCT",
        primaryCurrencyCode: "XCD",
        primaryCurrencyName: "East Caribbean dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Saint Vincent en de Grenadines",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      WSM: {
        nameEnglish: "Samoa",
        alpha2Code: "WS",
        alpha3Code: "WSM",
        primaryCurrencyCode: "WST",
        primaryCurrencyName: "Samoan tālā",
        primaryCurrencySymbol: "T",
        nameDutch: "Samoa",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SMR: {
        nameEnglish: "San Marino",
        alpha2Code: "SM",
        alpha3Code: "SMR",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "San Marino",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      STP: {
        nameEnglish: "Sao Tome and Principe",
        alpha2Code: "ST",
        alpha3Code: "STP",
        primaryCurrencyCode: "STD",
        primaryCurrencyName: "São Tomé and Príncipe dobra",
        primaryCurrencySymbol: "Db",
        nameDutch: "Sao Tomé en Principe",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SAU: {
        nameEnglish: "Saudi Arabia",
        alpha2Code: "SA",
        alpha3Code: "SAU",
        primaryCurrencyCode: "SAR",
        primaryCurrencyName: "Saudi riyal",
        primaryCurrencySymbol: "ر.س",
        nameDutch: "Saoedi-Arabië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SEN: {
        nameEnglish: "Senegal",
        alpha2Code: "SN",
        alpha3Code: "SEN",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Senegal",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SRB: {
        nameEnglish: "Serbia",
        alpha2Code: "RS",
        alpha3Code: "SRB",
        primaryCurrencyCode: "RSD",
        primaryCurrencyName: "Serbian dinar",
        primaryCurrencySymbol: "дин.",
        nameDutch: "Servië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SYC: {
        nameEnglish: "Seychelles",
        alpha2Code: "SC",
        alpha3Code: "SYC",
        primaryCurrencyCode: "SCR",
        primaryCurrencyName: "Seychellois rupee",
        primaryCurrencySymbol: "₨",
        nameDutch: "Seychellen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SLE: {
        nameEnglish: "Sierra Leone",
        alpha2Code: "SL",
        alpha3Code: "SLE",
        primaryCurrencyCode: "SLL",
        primaryCurrencyName: "Sierra Leonean leone",
        primaryCurrencySymbol: "Le",
        nameDutch: "Sierra Leone",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SGP: {
        nameEnglish: "Singapore",
        alpha2Code: "SG",
        alpha3Code: "SGP",
        primaryCurrencyCode: "BND",
        primaryCurrencyName: "Brunei dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Singapore",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SXM: {
        nameEnglish: "Sint Maarten (Dutch part)",
        alpha2Code: "SX",
        alpha3Code: "SXM",
        primaryCurrencyCode: "ANG",
        primaryCurrencyName: "Netherlands Antillean guilder",
        primaryCurrencySymbol: "ƒ",
        nameDutch: "Sint Maarten",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SVK: {
        nameEnglish: "Slovakia",
        alpha2Code: "SK",
        alpha3Code: "SVK",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Slowakije",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      SVN: {
        nameEnglish: "Slovenia",
        alpha2Code: "SI",
        alpha3Code: "SVN",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Slovenië",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      SLB: {
        nameEnglish: "Solomon Islands",
        alpha2Code: "SB",
        alpha3Code: "SLB",
        primaryCurrencyCode: "SBD",
        primaryCurrencyName: "Solomon Islands dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Salomonseilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SOM: {
        nameEnglish: "Somalia",
        alpha2Code: "SO",
        alpha3Code: "SOM",
        primaryCurrencyCode: "SOS",
        primaryCurrencyName: "Somali shilling",
        primaryCurrencySymbol: "Sh",
        nameDutch: "Somalië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ZAF: {
        nameEnglish: "South Africa",
        alpha2Code: "ZA",
        alpha3Code: "ZAF",
        primaryCurrencyCode: "ZAR",
        primaryCurrencyName: "South African rand",
        primaryCurrencySymbol: "R",
        nameDutch: "Zuid-Afrika",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SGS: {
        nameEnglish: "South Georgia and the South Sandwich Islands",
        alpha2Code: "GS",
        alpha3Code: "SGS",
        primaryCurrencyCode: "GBP",
        primaryCurrencyName: "British pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Zuid-Georgia en Zuidelijke Sandwicheilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      KOR: {
        nameEnglish: "Korea (Republic of)",
        alpha2Code: "KR",
        alpha3Code: "KOR",
        primaryCurrencyCode: "KRW",
        primaryCurrencyName: "South Korean won",
        primaryCurrencySymbol: "₩",
        nameDutch: "Zuid-Korea",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SSD: {
        nameEnglish: "South Sudan",
        alpha2Code: "SS",
        alpha3Code: "SSD",
        primaryCurrencyCode: "SSP",
        primaryCurrencyName: "South Sudanese pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Zuid-Soedan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ESP: {
        nameEnglish: "Spain",
        alpha2Code: "ES",
        alpha3Code: "ESP",
        primaryCurrencyCode: "EUR",
        primaryCurrencyName: "Euro",
        primaryCurrencySymbol: "€",
        nameDutch: "Spanje",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      LKA: {
        nameEnglish: "Sri Lanka",
        alpha2Code: "LK",
        alpha3Code: "LKA",
        primaryCurrencyCode: "LKR",
        primaryCurrencyName: "Sri Lankan rupee",
        primaryCurrencySymbol: "Rs",
        nameDutch: "Sri Lanka",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SDN: {
        nameEnglish: "Sudan",
        alpha2Code: "SD",
        alpha3Code: "SDN",
        primaryCurrencyCode: "SDG",
        primaryCurrencyName: "Sudanese pound",
        primaryCurrencySymbol: "ج.س.",
        nameDutch: "Soedan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SUR: {
        nameEnglish: "Suriname",
        alpha2Code: "SR",
        alpha3Code: "SUR",
        primaryCurrencyCode: "SRD",
        primaryCurrencyName: "Surinamese dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Suriname",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SJM: {
        nameEnglish: "Svalbard and Jan Mayen",
        alpha2Code: "SJ",
        alpha3Code: "SJM",
        primaryCurrencyCode: "NOK",
        primaryCurrencyName: "Norwegian krone",
        primaryCurrencySymbol: "kr",
        nameDutch: "Svalbard en Jan Mayen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SWZ: {
        nameEnglish: "Swaziland",
        alpha2Code: "SZ",
        alpha3Code: "SWZ",
        primaryCurrencyCode: "SZL",
        primaryCurrencyName: "Swazi lilangeni",
        primaryCurrencySymbol: "L",
        nameDutch: "Swaziland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SWE: {
        nameEnglish: "Sweden",
        alpha2Code: "SE",
        alpha3Code: "SWE",
        primaryCurrencyCode: "SEK",
        primaryCurrencyName: "Swedish krona",
        primaryCurrencySymbol: "kr",
        nameDutch: "Zweden",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      CHE: {
        nameEnglish: "Switzerland",
        alpha2Code: "CH",
        alpha3Code: "CHE",
        primaryCurrencyCode: "CHF",
        primaryCurrencyName: "Swiss franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Zwitserland",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      SYR: {
        nameEnglish: "Syrian Arab Republic",
        alpha2Code: "SY",
        alpha3Code: "SYR",
        primaryCurrencyCode: "SYP",
        primaryCurrencyName: "Syrian pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Syrië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TWN: {
        nameEnglish: "Taiwan",
        alpha2Code: "TW",
        alpha3Code: "TWN",
        primaryCurrencyCode: "TWD",
        primaryCurrencyName: "New Taiwan dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Taiwan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TJK: {
        nameEnglish: "Tajikistan",
        alpha2Code: "TJ",
        alpha3Code: "TJK",
        primaryCurrencyCode: "TJS",
        primaryCurrencyName: "Tajikistani somoni",
        primaryCurrencySymbol: "ЅМ",
        nameDutch: "Tadzjikistan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TZA: {
        nameEnglish: "Tanzania, United Republic of",
        alpha2Code: "TZ",
        alpha3Code: "TZA",
        primaryCurrencyCode: "TZS",
        primaryCurrencyName: "Tanzanian shilling",
        primaryCurrencySymbol: "Sh",
        nameDutch: "Tanzania",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      THA: {
        nameEnglish: "Thailand",
        alpha2Code: "TH",
        alpha3Code: "THA",
        primaryCurrencyCode: "THB",
        primaryCurrencyName: "Thai baht",
        primaryCurrencySymbol: "฿",
        nameDutch: "Thailand",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TLS: {
        nameEnglish: "Timor-Leste",
        alpha2Code: "TL",
        alpha3Code: "TLS",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Oost-Timor",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TGO: {
        nameEnglish: "Togo",
        alpha2Code: "TG",
        alpha3Code: "TGO",
        primaryCurrencyCode: "XOF",
        primaryCurrencyName: "West African CFA franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Togo",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TKL: {
        nameEnglish: "Tokelau",
        alpha2Code: "TK",
        alpha3Code: "TKL",
        primaryCurrencyCode: "NZD",
        primaryCurrencyName: "New Zealand dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Tokelau",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TON: {
        nameEnglish: "Tonga",
        alpha2Code: "TO",
        alpha3Code: "TON",
        primaryCurrencyCode: "TOP",
        primaryCurrencyName: "Tongan paʻanga",
        primaryCurrencySymbol: "T$",
        nameDutch: "Tonga",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TTO: {
        nameEnglish: "Trinidad and Tobago",
        alpha2Code: "TT",
        alpha3Code: "TTO",
        primaryCurrencyCode: "TTD",
        primaryCurrencyName: "Trinidad and Tobago dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Trinidad en Tobago",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TUN: {
        nameEnglish: "Tunisia",
        alpha2Code: "TN",
        alpha3Code: "TUN",
        primaryCurrencyCode: "TND",
        primaryCurrencyName: "Tunisian dinar",
        primaryCurrencySymbol: "د.ت",
        nameDutch: "Tunesië",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TUR: {
        nameEnglish: "Turkey",
        alpha2Code: "TR",
        alpha3Code: "TUR",
        primaryCurrencyCode: "TRY",
        primaryCurrencyName: "Turkish lira",
        primaryCurrencySymbol: null,
        nameDutch: "Turkije",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TKM: {
        nameEnglish: "Turkmenistan",
        alpha2Code: "TM",
        alpha3Code: "TKM",
        primaryCurrencyCode: "TMT",
        primaryCurrencyName: "Turkmenistan manat",
        primaryCurrencySymbol: "m",
        nameDutch: "Turkmenistan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TCA: {
        nameEnglish: "Turks and Caicos Islands",
        alpha2Code: "TC",
        alpha3Code: "TCA",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Turks- en Caicoseilanden",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      TUV: {
        nameEnglish: "Tuvalu",
        alpha2Code: "TV",
        alpha3Code: "TUV",
        primaryCurrencyCode: "AUD",
        primaryCurrencyName: "Australian dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Tuvalu",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      UGA: {
        nameEnglish: "Uganda",
        alpha2Code: "UG",
        alpha3Code: "UGA",
        primaryCurrencyCode: "UGX",
        primaryCurrencyName: "Ugandan shilling",
        primaryCurrencySymbol: "Sh",
        nameDutch: "Oeganda",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      UKR: {
        nameEnglish: "Ukraine",
        alpha2Code: "UA",
        alpha3Code: "UKR",
        primaryCurrencyCode: "UAH",
        primaryCurrencyName: "Ukrainian hryvnia",
        primaryCurrencySymbol: "₴",
        nameDutch: "Oekraïne",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ARE: {
        nameEnglish: "United Arab Emirates",
        alpha2Code: "AE",
        alpha3Code: "ARE",
        primaryCurrencyCode: "AED",
        primaryCurrencyName: "United Arab Emirates dirham",
        primaryCurrencySymbol: "د.إ",
        nameDutch: "Verenigde Arabische Emiraten",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      GBR: {
        nameEnglish: "United Kingdom of Great Britain and Northern Ireland",
        alpha2Code: "GB",
        alpha3Code: "GBR",
        primaryCurrencyCode: "GBP",
        primaryCurrencyName: "British pound",
        primaryCurrencySymbol: "£",
        nameDutch: "Verenigd Koninkrijk",
        importTaxRate: 0.0,
        importDutyRate: 0.0
      },
      USA: {
        nameEnglish: "United States of America",
        alpha2Code: "US",
        alpha3Code: "USA",
        primaryCurrencyCode: "USD",
        primaryCurrencyName: "United States dollar",
        primaryCurrencySymbol: "$",
        nameDutch: "Verenigde Staten",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      URY: {
        nameEnglish: "Uruguay",
        alpha2Code: "UY",
        alpha3Code: "URY",
        primaryCurrencyCode: "UYU",
        primaryCurrencyName: "Uruguayan peso",
        primaryCurrencySymbol: "$",
        nameDutch: "Uruguay",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      UZB: {
        nameEnglish: "Uzbekistan",
        alpha2Code: "UZ",
        alpha3Code: "UZB",
        primaryCurrencyCode: "UZS",
        primaryCurrencyName: "Uzbekistani so'm",
        primaryCurrencySymbol: null,
        nameDutch: "Oezbekistan",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VUT: {
        nameEnglish: "Vanuatu",
        alpha2Code: "VU",
        alpha3Code: "VUT",
        primaryCurrencyCode: "VUV",
        primaryCurrencyName: "Vanuatu vatu",
        primaryCurrencySymbol: "Vt",
        nameDutch: "Vanuatu",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VEN: {
        nameEnglish: "Venezuela (Bolivarian Republic of)",
        alpha2Code: "VE",
        alpha3Code: "VEN",
        primaryCurrencyCode: "VEF",
        primaryCurrencyName: "Venezuelan bolívar",
        primaryCurrencySymbol: "Bs F",
        nameDutch: "Venezuela",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      VNM: {
        nameEnglish: "Viet Nam",
        alpha2Code: "VN",
        alpha3Code: "VNM",
        primaryCurrencyCode: "VND",
        primaryCurrencyName: "Vietnamese đồng",
        primaryCurrencySymbol: "₫",
        nameDutch: "Vietnam",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      WLF: {
        nameEnglish: "Wallis and Futuna",
        alpha2Code: "WF",
        alpha3Code: "WLF",
        primaryCurrencyCode: "XPF",
        primaryCurrencyName: "CFP franc",
        primaryCurrencySymbol: "Fr",
        nameDutch: "Wallis en Futuna",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ESH: {
        nameEnglish: "Western Sahara",
        alpha2Code: "EH",
        alpha3Code: "ESH",
        primaryCurrencyCode: "MAD",
        primaryCurrencyName: "Moroccan dirham",
        primaryCurrencySymbol: "د.م.",
        nameDutch: "Westelijke Sahara",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      YEM: {
        nameEnglish: "Yemen",
        alpha2Code: "YE",
        alpha3Code: "YEM",
        primaryCurrencyCode: "YER",
        primaryCurrencyName: "Yemeni rial",
        primaryCurrencySymbol: "﷼",
        nameDutch: "Jemen",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ZMB: {
        nameEnglish: "Zambia",
        alpha2Code: "ZM",
        alpha3Code: "ZMB",
        primaryCurrencyCode: "ZMW",
        primaryCurrencyName: "Zambian kwacha",
        primaryCurrencySymbol: "ZK",
        nameDutch: "Zambia",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      },
      ZWE: {
        nameEnglish: "Zimbabwe",
        alpha2Code: "ZW",
        alpha3Code: "ZWE",
        primaryCurrencyCode: "BWP",
        primaryCurrencyName: "Botswana pula",
        primaryCurrencySymbol: "P",
        nameDutch: "Zimbabwe",
        importTaxRate: 21.0,
        importDutyRate: 4.2
      }
    };
    this.writeExchangeRatesToLocal();
    this.writeCountriesDataToLocal();
    this.exchangeRates = this.readExchangeRatesToLocal();
    this.countriesData = this.readCountriesDataToLocal();
    this.countriesLastUsedValues = this.createReadCountriesLastUsedValues();
    this.lastCountryCode = this.createReadLastCountryCode(); // this is dummy data, its get overwritten/ usefull for debugging
    // these are input values

    this.countries = [{
      alpha3Code: "NLD",
      nameEnglish: "Yemen",
      nameDutch: "Jemen"
    }, {
      alpha3Code: "GLD",
      nameEnglish: "Overijssel",
      nameDutch: "Rijssen"
    }];
    this.currencies = [{
      primaryCurrencyCode: "YER",
      primaryCurrencyName: "Yemeni rial",
      primaryCurrencyNameDutch: "Yemeense Real",
      primaryCurrencySymbol: "﷼"
    }];
    this.importDutyPercentage = "2332.34";
    this.taxPercentage = "25.23";
    this.clearanceCosts = "1234.32";
    this.exchangeRate = "3";
    this.symbol = "$";
    this.orderAmount = "";
    this.shippingCosts = ""; //end input values
    // start constants values// should be loaded with php

    this.shipmentServices = [{
      costs: "10.50",
      shipper: "UPS"
    }, {
      costs: "13.0",
      shipper: "POSTNL"
    }, {
      costs: "10.50",
      shipper: "FEDEX"
    }, {
      costs: "10.00",
      shipper: "CUSTOM"
    }]; //end constant values
    // start output values

    this.dateToDay = "";
    this.totalOrderAmount = "--,--";
    this.importDutyAmount = "--,--";
    this.taxAmount = "--,--";
    this.combinedAmount = "--,--";
    this.totalAdditionalAmount = "--,--"; // end output values
    // this method overwrites the input values

    this._loadStartUIValues();
  } //binder to bind input values 


  _createClass(Model, [{
    key: "bindInputUIFieldsChange",
    value: function bindInputUIFieldsChange(callback) {
      this.onInputUIFieldsChange = callback;
    } //binder to bind output values

  }, {
    key: "bindOutputUIFieldsChange",
    value: function bindOutputUIFieldsChange(callback) {
      this.outputUIFieldsChange = callback;
    } //there is only one commit, it passes the changed input/output values
    //to the controller/view

  }, {
    key: "_commit",
    value: function _commit(whichFunction) {
      this.onInputUIFieldsChange(this.countries, this.currencies, this.importDutyPercentage, this.taxPercentage, this.clearanceCosts, this.shipmentServices, this.exchangeRate, this.dateToday, this.symbol, this.orderAmount, this.shippingCosts);
      this.outputUIFieldsChange(this.totalAdditionalAmount, this.combinedAmount, this.taxAmount, this.importDutyAmount, this.totalOrderAmount);
    }
  }, {
    key: "_roundToTwo",
    value: function _roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    }
  }, {
    key: "_calculateOutputValues",
    value: function _calculateOutputValues() {
      var conversionToEU = 1.0 / parseFloat(this.exchangeRate);
      this.totalOrderAmount = this._roundToTwo((parseFloat(this.orderAmount) + parseFloat(this.shippingCosts)) * conversionToEU); // it total order cost is below 22 euros no importduty and no tax
      // but if the order is from outside the EU clearance costs are included 

      if (this.totalOrderAmount < 22) {
        this.importDutyAmount = 0;
        this.taxAmount = 0; // if tax percentage is 0 this means that the packege comes from a
        // eu country. Thus no clearance costs are included.

        if (this.taxPercentage == 0) {
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount);
        } else {
          // package from outside the eu clearance costs are inclued
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount + parseFloat(this.clearanceCosts));
        }

        this.combinedAmount = this.totalOrderAmount;
      } // if total order costs is between 22 and 150 euros. no import Duty included,
      // but tax is included
      // 


      if (this.totalOrderAmount > 22 && this.totalOrderAmount < 150) {
        this.importDutyAmount = 0;
        this.taxAmount = this._roundToTwo(this.totalOrderAmount / 100 * parseFloat(this.taxPercentage)); // if tax percentage is 0 this means that the packege comes from a
        // eu country. Thus no clearance costs are included.
        // CHANGE: the check to see if a country is from the eu or not by checking
        // if this.taxPercentage ==0 is not a nice solution.

        if (this.taxPercentage == 0) {
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount);
        } else {
          // package from outside the eu clearance costs are inclued
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount + parseFloat(this.clearanceCosts));
        }

        this.combinedAmount = this.totalOrderAmount + this.totalAdditionalAmount;
      } // if total order costs is higher than 150 euro. import duty and tax are included


      if (this.totalOrderAmount > 150) {
        this.importDutyAmount = this._roundToTwo(this.totalOrderAmount / 100 * parseFloat(this.importDutyPercentage));
        this.taxAmount = this._roundToTwo(this.totalOrderAmount / 100 * parseFloat(this.taxPercentage)); // if tax percentage is 0 this means that the packege comes from a
        // eu country. Thus no clearance costs are included.
        // CHANGE: the check to see if a country is from the eu or not by checking
        // if this.taxPercentage ==0 is not a nice solution.

        if (this.taxPercentage == 0) {
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount);
        } else {
          // package from outside the eu clearance costs are inclued
          this.totalAdditionalAmount = this._roundToTwo(this.importDutyAmount + this.taxAmount + parseFloat(this.clearanceCosts));
        }

        this.combinedAmount = this._roundToTwo(this.totalOrderAmount + this.totalAdditionalAmount);
      }

      this._commit("_calculateOutputValues()");
    } //method that retrieves the currency symbol for a curryency code
    //for example currencyCode "USD" wil give currency symbol "$"

  }, {
    key: "_updateCurrencySymbolByCurrencyCode",
    value: function _updateCurrencySymbolByCurrencyCode(currencyCode) {
      var _this = this;

      try {
        Object.keys(this.countriesData).forEach(function (key) {
          if (_this.countriesData[key]["primaryCurrencyCode"] == currencyCode) {
            _this.symbol = _this.countriesData[key]["primaryCurrencySymbol"];
          }
        });
      } catch (err) {
        this.symbol = "";
      }
    } // Saves the country alpha3code aka countryCode and the associated input values to localstorage
    // This is done so that on next page load the previously used country and associated
    // input values can be preloaded. Thus potentially saving the user input clicks, increasing
    // user friendlyness.

  }, {
    key: "_addCountryToLastUsedValues",
    value: function _addCountryToLastUsedValues() {
      this.lastCountryCode = this.countries[0].alpha3Code;
      var newValues = {
        alpha3Code: this.countries[0].alpha3Code,
        currencyCode: this.currencies[0].primaryCurrencyCode,
        importDuties: this.importDutyPercentage,
        taxRate: this.taxPercentage,
        clearanceCosts: this.clearanceCosts,
        shipmentService: this.shipmentServices[0].shipper
      }; // this could be cleaner by not user an intermediate variable

      this.countriesLastUsedValues[this.countries[0].alpha3Code] = newValues; // could be cleaner by making setting and stringifying a seperate function
      //thus preventing double code

      localStorage.setItem("countriesLastUsedValues", JSON.stringify(this.countriesLastUsedValues));
      localStorage.setItem("lastCountryCode", JSON.stringify(this.lastCountryCode));
      this.countriesLastUsedValues = this.createReadCountriesLastUsedValues();
      this.lastCountryCode = this.createReadLastCountryCode();
    } //this method is used when shipment costs and order costs are put to zero. To
    // reset the below output values

  }, {
    key: "_restOutputUIValues",
    value: function _restOutputUIValues() {
      this.totalAdditionalAmount = "--,--";
      this.combinedAmount = "--,--";
      this.taxAmount = "--,--";
      this.importDutyAmount = "--,--";
      this.totalOrderAmount = "--,--";

      this._commit("_restOutputUIValues()");
    } // check if all input values have values. It they all have values calculate 
    // the output values and save the countryCode and inputValues to localStorage

  }, {
    key: "_checkAllInputFieldsHasValues",
    value: function _checkAllInputFieldsHasValues() {
      if (this.orderAmount != "") {
        if (this.shippingCosts != "") {
          if (this.countries[0].nameEnglish != undefined) {
            if (this.currencies[0].primaryCurrencyName != undefined) {
              if (this.importDutyPercentage != null) {
                if (this.taxPercentage != null) {
                  if (this.clearanceCosts != null) {
                    if (this.shipmentServices != "") {
                      if (this.exchangeRate != null) {
                        this._calculateOutputValues();

                        this._addCountryToLastUsedValues();
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          this._restOutputUIValues();
        }
      } else {
        this._restOutputUIValues();
      }
    } //controller triggered

  }, {
    key: "changeCurrenyName",
    value: function changeCurrenyName(currencyCode) {
      this._updateCurrenciesForCurrencySelect([currencyCode, "USD", "EUR"]);

      this.exchangeRate = this.exchangeRates[currencyCode]["exchangeRate"];

      this._updateCurrencySymbolByCurrencyCode(currencyCode);

      this._commit("changeCurrenyName()");
    } //controller triggered

  }, {
    key: "changeOrderAmount",
    value: function changeOrderAmount(orderAmount) {
      //maybe do input validation here if text =  number is not sufficient
      this.orderAmount = orderAmount;
    } //controller triggered

  }, {
    key: "changeShippingCosts",
    value: function changeShippingCosts(shippingCosts) {
      //maybe do input validation here if text =  number is not sufficient
      this.shippingCosts = shippingCosts;
    } //controller triggered

  }, {
    key: "changeImportDutyPercentage",
    value: function changeImportDutyPercentage(importDutyPercentage) {
      this.importDutyPercentage = importDutyPercentage;
    } //controller triggered

  }, {
    key: "changeTaxPercentage",
    value: function changeTaxPercentage(taxPercentage) {
      this.taxPercentage = taxPercentage;
    } //controller triggered

  }, {
    key: "changeClearanceCosts",
    value: function changeClearanceCosts(clearanceCosts) {
      this.clearanceCosts = clearanceCosts;
    } //controller triggered
    // if a user switches from shipmentSerice (for example POSTNL) the previouly entered clearance costs is
    // changed to the associated clearance costs (13,00 euro) of that shipmentSerivce.
    //shipmentService object consists of shipper (POSTNL,UPS etc) and the clearance costs
    //associated to that shipperName. 

  }, {
    key: "changeShipmentService",
    value: function changeShipmentService(shipperInput) {
      var shipperElement = null;
      var newClearanceCosts = this.shipmentServices.find(function (shipmentService) {
        if (shipmentService.shipper == shipperInput) {
          shipperElement = shipmentService; //make return with shipperElement en clearance costs

          return shipmentService["costs"];
        }
      });
      this.clearanceCosts = newClearanceCosts.costs;
      var copyShipmentServices = this.shipmentServices; //the order of shipment Services in the shipment Services dropdown/select is reorderd so that
      //the selected shipment that has been selected is now the top service.

      copyShipmentServices = copyShipmentServices.filter(function (shipper) {
        return shipper.shipper !== shipperInput;
      });
      copyShipmentServices.splice(0, 0, shipperElement);
      this.shipmentServices = copyShipmentServices;

      this._commit("changeShipmentService(shipmentService)");
    } // controller triggered. if the user selects another country from the countries dropDown,
    //this function is method is called. It check if the countryCode has an associated countryCode and
    //therefore 

  }, {
    key: "changeCountryName",
    value: function changeCountryName(inAlpha3Code) {
      this._restOutputUIValues();

      this.orderAmount = "";
      this.shippingCosts = "";

      if (this.countriesLastUsedValues[inAlpha3Code] === undefined) {
        // the selected country doesnt have previous used values thus keep default.
        this._updateCountriesForCountrySelect([inAlpha3Code]);

        var countryCurrencyCode = this.countriesData[inAlpha3Code]["primaryCurrencyCode"];

        this._updateCurrenciesForCurrencySelect([countryCurrencyCode, "USD", "EUR"]);

        this.exchangeRate = this.exchangeRates[countryCurrencyCode]["exchangeRate"];

        this._updateCurrencySymbolByCurrencyCode(countryCurrencyCode);

        this.importDutyPercentage = this.countriesData[inAlpha3Code].importDutyRate;
        this.taxPercentage = this.countriesData[inAlpha3Code].importTaxRate;

        this._commit("changeCountryName(inAlpha3Code) no found countryCode");
      } else {
        this._updateCountriesForCountrySelect([inAlpha3Code]);

        var _countryCurrencyCode = this.countriesLastUsedValues[inAlpha3Code].currencyCode;

        this._updateCurrenciesForCurrencySelect([_countryCurrencyCode, "USD", "EUR"]);

        this.exchangeRate = this.exchangeRates[_countryCurrencyCode]["exchangeRate"];

        this._updateCurrencySymbolByCurrencyCode(_countryCurrencyCode);

        this.importDutyPercentage = this.countriesLastUsedValues[inAlpha3Code].importDuties;
        this.taxPercentage = this.countriesLastUsedValues[inAlpha3Code].taxRate;
        this.changeShipmentService(this.countriesLastUsedValues[inAlpha3Code].shipmentService); //first do changeShipmentService because that writes the clearancecost associated with the
        //picked the shipmentService. Hower the user can change this to another clearanceCosts. Thus
        //below the clearanceCosts are overwritten

        this.clearanceCosts = this.countriesLastUsedValues[inAlpha3Code].clearanceCosts;

        this._commit("changeCountryName(inAlpha3Code) found countryCode");
      }
    }
  }, {
    key: "_updateCurrenciesForCurrencySelect",
    value: function _updateCurrenciesForCurrencySelect(currenciesArray) {
      var _this2 = this;

      var importantCurrenciesArray = currenciesArray.reverse(); // reverse array

      var sortedCurrenciesKeys = Object.keys(this.exchangeRates).sort();
      importantCurrenciesArray.forEach(function (currencyCode) {
        sortedCurrenciesKeys = sortedCurrenciesKeys.filter(function (e) {
          return e !== currencyCode;
        }); // remove countrycode

        sortedCurrenciesKeys.splice(0, 0, currencyCode); // place countrycode as first in array
      });
      var sortedCurrencies = [];
      sortedCurrenciesKeys.forEach(function (element) {
        var nameEnglish = "dummy";
        var curSymbol = "dummy";
        Object.keys(_this2.countriesData).forEach(function (country) {
          if (_this2.countriesData[country]["primaryCurrencyCode"] == _this2.exchangeRates[element].currencyCode) {
            nameEnglish = _this2.countriesData[country]["primaryCurrencyName"];
            curSymbol = _this2.countriesData[country]["primaryCurrencySymbol"];
          }
        });
        var newElement = {
          primaryCurrencyCode: _this2.exchangeRates[element].currencyCode,
          primaryCurrencyName: nameEnglish,
          primaryCurrencyNameDutch: _this2.exchangeRates[element].currencyNameDutch,
          primaryCurrencySymbol: curSymbol
        };
        sortedCurrencies.push(newElement);
      });
      this.currencies = sortedCurrencies;
    }
  }, {
    key: "_updateCountriesForCountrySelect",
    value: function _updateCountriesForCountrySelect(countriesArray) {
      var _this3 = this;

      var copiedCountriesData = this.countriesData;
      var importantCountriesArray = countriesArray.reverse(); // reverse array
      //because when a countrycode is added in the foreach the sequence of first,second etc
      // is reversed in the new array. This should not happen because the first country
      //should be first

      var sortedCountryKeys = Object.keys(copiedCountriesData).sort();
      importantCountriesArray.forEach(function (countryCode) {
        sortedCountryKeys = sortedCountryKeys.filter(function (e) {
          return e !== countryCode;
        }); // remove countrycode

        sortedCountryKeys.splice(0, 0, countryCode); // place countrycode as first in array
      });
      var sortedCountries = [];
      sortedCountryKeys.forEach(function (element) {
        var newElement = {
          alpha3Code: _this3.countriesData[element].alpha3Code,
          nameEnglish: _this3.countriesData[element].nameEnglish,
          nameDutch: _this3.countriesData[element].nameDutch
        };
        sortedCountries.push(newElement);
      });
      this.countries = sortedCountries;
    } // load the start values of country en currency and the rest

  }, {
    key: "_loadStartUIValues",
    value: function _loadStartUIValues() {
      if (this._checkIfUserHasLocalData() == false) {
        // first time visitor site, thus order country select alphbetically and put china and usa as first two options in select
        this._updateCountriesForCountrySelect(["CHN", "USA", "NLD"]);

        this.importDutyPercentage = "4.2";
        this.taxPercentage = "21.0";
        this.clearanceCosts = "13.0";
        this.exchangeRate = this.exchangeRates["USD"]["exchangeRate"];
        this.symbol = "$"; // most people that order from china pay in euros

        this._updateCurrenciesForCurrencySelect(["USD", "EUR", "CNY"]);
      } else {
        var lastUSedValues = this.countriesLastUsedValues[this.lastCountryCode];

        this._updateCountriesForCountrySelect([this.lastCountryCode, "USA", "NLD"]);

        this.importDutyPercentage = lastUSedValues.importDuties;
        this.taxPercentage = lastUSedValues.taxRate;
        this.clearanceCosts = lastUSedValues.clearanceCosts;
        this.exchangeRate = this.exchangeRates[lastUSedValues.currencyCode]["exchangeRate"];

        this._updateCurrencySymbolByCurrencyCode(lastUSedValues.currencyCode);

        this._updateCurrenciesForCurrencySelect([lastUSedValues.currencyCode, "USD", "EUR"]);
      }
    }
  }, {
    key: "_checkIfUserHasLocalData",
    value: function _checkIfUserHasLocalData() {
      if (this.lastCountryCode == "undefined") {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "writeExchangeRatesToLocal",
    value: function writeExchangeRatesToLocal() {
      localStorage.setItem("exchangeRates", JSON.stringify(this.downloadedExchangeRates));
    }
  }, {
    key: "writeCountriesDataToLocal",
    value: function writeCountriesDataToLocal() {
      localStorage.setItem("countryData", JSON.stringify(this.downloadedCountryData));
    }
  }, {
    key: "readExchangeRatesToLocal",
    value: function readExchangeRatesToLocal() {
      return JSON.parse(localStorage.getItem("exchangeRates")) || [];
    }
  }, {
    key: "readCountriesDataToLocal",
    value: function readCountriesDataToLocal() {
      return JSON.parse(localStorage.getItem("countryData"));
    } // if countriesLastUsedValues does not exists write this to localstorage
    // then read countriesLastUsedValues from localStorage

  }, {
    key: "createReadCountriesLastUsedValues",
    value: function createReadCountriesLastUsedValues() {
      if (localStorage.getItem("countriesLastUsedValues") === null) {
        localStorage.setItem("countriesLastUsedValues", JSON.stringify({}));
      }

      return JSON.parse(localStorage.getItem("countriesLastUsedValues")) || [];
    }
  }, {
    key: "createReadLastCountryCode",
    value: function createReadLastCountryCode() {
      if (localStorage.getItem("lastCountryCode") === null) {
        localStorage.setItem("lastCountryCode", JSON.stringify("undefined"));
      }

      return JSON.parse(localStorage.getItem("lastCountryCode"));
    }
  }]);

  return Model;
}();

exports.default = Model;
},{}],"js/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    //these are all input elements
    this.countryName = document.getElementById("country__select");
    this.currencyName = document.getElementById("currency__select");
    this.orderAmount = document.getElementById("order-amount__input");
    this.shippingCosts = document.getElementById("shipping-costs__input");
    this.importDutyPercentage = document.getElementById("import-duty-percentage__input");
    this.taxPercentage = document.getElementById("tax-percentage__input");
    this.clearanceCosts = document.getElementById("clearance-costs__input");
    this.shipmentService = document.getElementById("shipment-service__select");
    this.valutaSymbol = document.getElementsByClassName("valuta-symbol__p"); //these are all output elements

    this.exchangeRate = document.getElementById("exchange-rate__p");
    this.dateTodayField = document.getElementById("date-today__p");
    this.totalOrderAmount = document.getElementById("total-order-amount__p");
    this.importDutyAmount = document.getElementById("import-duty-amount__p");
    this.taxAmount = document.getElementById("tax-amount__p");
    this.totalAdditionalAmount = document.getElementById("total-additional-amount__p"); //spellings mistake

    this.combinedAmount = document.getElementById("total-combined-amount__p"); // this.bodyAction = document.body;
  }

  _createClass(View, [{
    key: "displayTotalAdditionalAmount",
    value: function displayTotalAdditionalAmount(totalAdditionalAmount) {
      this.totalAdditionalAmount.textContent = totalAdditionalAmount;
    }
  }, {
    key: "displayCombinedAmount",
    value: function displayCombinedAmount(combinedAmount) {
      this.combinedAmount.textContent = combinedAmount;
    }
  }, {
    key: "displayTaxAmount",
    value: function displayTaxAmount(taxAmount) {
      this.taxAmount.textContent = taxAmount;
    }
  }, {
    key: "displayImportDutyAmount",
    value: function displayImportDutyAmount(importDutyAmount) {
      this.importDutyAmount.textContent = importDutyAmount;
    }
  }, {
    key: "displayTotalOrderAmount",
    value: function displayTotalOrderAmount(totalOrderAmount) {
      this.totalOrderAmount.textContent = totalOrderAmount;
    }
  }, {
    key: "_clearOptionsFromSelect",
    value: function _clearOptionsFromSelect(selectToClear) {
      while (selectToClear.options.length > 0) {
        selectToClear.remove(0);
      }
    } // changes all currency/valuta symbols to the currency selected currency symbol

  }, {
    key: "displayValutaSymbol",
    value: function displayValutaSymbol(symbol) {
      Array.from(this.valutaSymbol).forEach(function (element) {
        element.textContent = symbol;
      });
    } //updates the country list

  }, {
    key: "displayCountries",
    value: function displayCountries(countries) {
      var _this = this;

      this._clearOptionsFromSelect(this.countryName);

      countries.forEach(function (country) {
        var option = document.createElement("option");
        option.text = country.nameDutch + "/" + country.nameEnglish;
        option.value = country.alpha3Code;

        _this.countryName.add(option);
      });
    } //updates the currency list

  }, {
    key: "displayCurrencies",
    value: function displayCurrencies(currencies) {
      var _this2 = this;

      this._clearOptionsFromSelect(this.currencyName);

      currencies.forEach(function (currency) {
        var option = document.createElement("option");
        var curCode = currency.primaryCurrencyCode;
        option.text = currency.primaryCurrencyNameDutch + "/" + currency.primaryCurrencyName;
        option.value = currency.primaryCurrencyCode;

        _this2.currencyName.add(option);
      });
    }
  }, {
    key: "displayOrderAmount",
    value: function displayOrderAmount(orderAmount) {
      this.orderAmount.value = orderAmount;
    }
  }, {
    key: "displayShippingCosts",
    value: function displayShippingCosts(shippingCosts) {
      this.shippingCosts.value = shippingCosts;
    }
  }, {
    key: "displayImportDutyPercentage",
    value: function displayImportDutyPercentage(importDutyPercentage) {
      this.importDutyPercentage.value = importDutyPercentage;
    }
  }, {
    key: "displayTaxPercentage",
    value: function displayTaxPercentage(taxPercentage) {
      this.taxPercentage.value = taxPercentage;
    }
  }, {
    key: "displayClearanceCosts",
    value: function displayClearanceCosts(clearanceCosts) {
      this.clearanceCosts.value = clearanceCosts;
    }
  }, {
    key: "displayShipmentService",
    value: function displayShipmentService(shipmentServiceIn) {
      var _this3 = this;

      this._clearOptionsFromSelect(this.shipmentService);

      shipmentServiceIn.forEach(function (shipper) {
        var option = document.createElement("option");
        option.text = shipper.shipper;
        option.value = shipper.shipper;

        _this3.shipmentService.add(option);
      });
    }
  }, {
    key: "displayExchangeRate",
    value: function displayExchangeRate(exchangeRate) {
      this.exchangeRate.textContent = exchangeRate;
    }
  }, {
    key: "displayDate",
    value: function displayDate(dateTodayIn) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      this.dateTodayField.textContent = today;
    }
  }, {
    key: "bindCountryName",
    value: function bindCountryName(handler) {
      $("#country__select").on("select2:select", function (e) {
        var data = e.params.data;
        handler(data.id); // I set the value however the values got put in id. Something weird going on with select 2
      });
    }
  }, {
    key: "bindCurrencyName",
    value: function bindCurrencyName(handler) {
      $("#currency__select").on("select2:select", function (e) {
        var data = e.params.data;
        handler(data.id);
      });
    }
  }, {
    key: "bindOrderAmount",
    value: function bindOrderAmount(handler) {
      this.orderAmount.addEventListener("input", function (e) {
        var data = this.value;
        handler(data);
      });
    }
  }, {
    key: "bindShippingCosts",
    value: function bindShippingCosts(handler) {
      this.shippingCosts.addEventListener("input", function (e) {
        var data = this.value;
        handler(data);
      });
    }
  }, {
    key: "bindImportDutyPercentage",
    value: function bindImportDutyPercentage(handler) {
      this.importDutyPercentage.addEventListener("input", function (e) {
        var data = this.value;
        handler(data);
      });
    }
  }, {
    key: "bindTaxPercentage",
    value: function bindTaxPercentage(handler) {
      this.taxPercentage.addEventListener("input", function (e) {
        var data = this.value;
        handler(data);
      });
    }
  }, {
    key: "bindClearanceCosts",
    value: function bindClearanceCosts(handler) {
      this.clearanceCosts.addEventListener("input", function (e) {
        var data = this.value;
        handler(data);
      });
    }
  }, {
    key: "bindShipmentService",
    value: function bindShipmentService(handler) {
      $("#shipment-service__select").on("select2:select", function (e) {
        var data = e.params.data;
        handler(data.text);
      });
    }
  }]);

  return View;
}();

exports.default = View;
},{}],"js/controller.js":[function(require,module,exports) {
"use strict";

var _model = _interopRequireDefault(require("./model"));

var _view = _interopRequireDefault(require("./view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Controller = function Controller(model, view) {
  var _this = this;

  _classCallCheck(this, Controller);

  _defineProperty(this, "onOutputUIFieldsChange", function (totalAdditionalAmount, combinedAmount, taxAmount, importDutyAmount, totalOrderAmount) {
    _this.view.displayTotalAdditionalAmount(totalAdditionalAmount), _this.view.displayCombinedAmount(combinedAmount), _this.view.displayTaxAmount(taxAmount), _this.view.displayImportDutyAmount(importDutyAmount), _this.view.displayTotalOrderAmount(totalOrderAmount);
  });

  _defineProperty(this, "onInputUIFieldsChange", function (countries, currencies, importDutyPercentage, taxPercentage, clearanceCosts, shipmentServices, exchangeRate, dateToday, symbol, orderAmount, shippingCosts) {
    _this.view.displayImportDutyPercentage(importDutyPercentage);

    _this.view.displayCountries(countries);

    _this.view.displayCurrencies(currencies);

    _this.view.displayClearanceCosts(clearanceCosts);

    _this.view.displayTaxPercentage(taxPercentage);

    _this.view.displayShipmentService(shipmentServices);

    _this.view.displayExchangeRate(exchangeRate);

    _this.view.displayDate(dateToday);

    _this.view.displayValutaSymbol(symbol);

    _this.view.displayOrderAmount(orderAmount);

    _this.view.displayShippingCosts(shippingCosts);
  });

  _defineProperty(this, "handleCountryName", function (countryName) {
    _this.model.changeCountryName(countryName);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleCurrencyName", function (currencyCode) {
    _this.model.changeCurrenyName(currencyCode);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleOrderAmount", function (orderAmount) {
    _this.model.changeOrderAmount(orderAmount);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleShippingCosts", function (shippingCosts) {
    _this.model.changeShippingCosts(shippingCosts);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleImportDutyPercentage", function (importDutyPercentage) {
    _this.model.changeImportDutyPercentage(importDutyPercentage);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleTaxPercentage", function (taxPercentage) {
    _this.model.changeTaxPercentage(taxPercentage);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleClearanceCosts", function (clearanceCosts) {
    _this.model.changeClearanceCosts(clearanceCosts);

    _this.model._checkAllInputFieldsHasValues();
  });

  _defineProperty(this, "handleShipmentService", function (shipmentService) {
    _this.model.changeShipmentService(shipmentService);

    _this.model._checkAllInputFieldsHasValues();
  });

  this.model = model;
  this.view = view;
  this.model.bindInputUIFieldsChange(this.onInputUIFieldsChange);
  this.model.bindOutputUIFieldsChange(this.onOutputUIFieldsChange);
  this.view.bindCountryName(this.handleCountryName);
  this.view.bindCurrencyName(this.handleCurrencyName);
  this.view.bindOrderAmount(this.handleOrderAmount);
  this.view.bindShippingCosts(this.handleShippingCosts);
  this.view.bindImportDutyPercentage(this.handleImportDutyPercentage);
  this.view.bindTaxPercentage(this.handleTaxPercentage);
  this.view.bindClearanceCosts(this.handleClearanceCosts);
  this.view.bindShipmentService(this.handleShipmentService);
  this.onOutputUIFieldsChange(this.model.totalAdditionalAmount, this.model.combinedAmount, this.model.taxAmount, this.model.importDutyAmount, this.model.totalOrderAmount);
  this.onInputUIFieldsChange(this.model.countries, this.model.currencies, this.model.importDutyPercentage, this.model.taxPercentage, this.model.clearanceCosts, this.model.shipmentServices, this.model.exchangeRate, this.model.dateToday, this.model.symbol);
};

var app = new Controller(new _model.default(), new _view.default());
},{"./model":"js/model.js","./view":"js/view.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49678" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/controller.js"], null)
//# sourceMappingURL=/controller.f22f2928.js.map