export default class View {
  constructor() {
 

    //these are all input elements
    this.countryName = document.getElementById("country__select");
    this.currencyName = document.getElementById("currency__select");
    this.orderAmount = document.getElementById("order-amount__input");
    this.shippingCosts = document.getElementById("shipping-costs__input");
    this.importDutyPercentage = document.getElementById(
      "import-duty-percentage__input"
    );
    this.taxPercentage = document.getElementById("tax-percentage__input");
    this.clearanceCosts = document.getElementById("clearance-costs__input");
    this.shipmentService = document.getElementById("shipment-service__select");
    this.valutaSymbol = document.getElementsByClassName("valuta-symbol__p");
    //these are all output elements
    this.exchangeRate = document.getElementById("exchange-rate__p");
    this.dateTodayField = document.getElementById("date-today__p");
    this.totalOrderAmount = document.getElementById(
      "total-order-amount__p"
    );
    this.importDutyAmount = document.getElementById("import-duty-amount__p");
    this.taxAmount = document.getElementById("tax-amount__p");
    this.totalAdditionalAmount = document.getElementById(
      "total-additional-amount__p"
    ); //spellings mistake
    this.combinedAmount = document.getElementById("total-combined-amount__p");
    // this.bodyAction = document.body;
  }

displayTotalAdditionalAmount(totalAdditionalAmount){
  this.totalAdditionalAmount.textContent = totalAdditionalAmount
}

displayCombinedAmount(combinedAmount){
  this.combinedAmount.textContent =combinedAmount
}

displayTaxAmount(taxAmount){
  this.taxAmount.textContent = taxAmount
}
  displayImportDutyAmount(importDutyAmount){
    this.importDutyAmount.textContent = importDutyAmount
  }


  displayTotalOrderAmount(totalOrderAmount){
    this.totalOrderAmount.textContent =totalOrderAmount
  }



  _clearOptionsFromSelect(selectToClear) {
    while (selectToClear.options.length > 0) {
      selectToClear.remove(0);
    }
  }
  // changes all currency/valuta symbols to the currency selected currency symbol
  displayValutaSymbol(symbol) {
    Array.from(this.valutaSymbol).forEach((element) => {
      element.textContent = symbol;
    });
  }
  //updates the country list
  displayCountries(countries) {
    this._clearOptionsFromSelect(this.countryName);
    countries.forEach((country) => {
      let option = document.createElement("option");
      option.text = country.nameDutch + "/" + country.nameEnglish;
      option.value = country.alpha3Code;
      this.countryName.add(option);
    });
  }

  //updates the currency list
  displayCurrencies(currencies) {
    this._clearOptionsFromSelect(this.currencyName);
    currencies.forEach((currency) => {
      let option = document.createElement("option");
      const curCode = currency.primaryCurrencyCode; 
      option.text =
        currency.primaryCurrencyNameDutch + "/" + currency.primaryCurrencyName;
      option.value = currency.primaryCurrencyCode;
      this.currencyName.add(option);
    });
  }

  displayOrderAmount(orderAmount) {
    this.orderAmount.value = orderAmount;
  }

  displayShippingCosts(shippingCosts) {
    this.shippingCosts.value = shippingCosts;
  }

  displayImportDutyPercentage(importDutyPercentage) {
    this.importDutyPercentage.value = importDutyPercentage;
  }
  displayTaxPercentage(taxPercentage) {
    this.taxPercentage.value = taxPercentage;
  }
  displayClearanceCosts(clearanceCosts) {
    this.clearanceCosts.value = clearanceCosts;
  }
  displayShipmentService(shipmentServiceIn) {
    this._clearOptionsFromSelect(this.shipmentService);
    shipmentServiceIn.forEach((shipper) => {
      let option = document.createElement("option");

      option.text = shipper.shipper;
      option.value = shipper.shipper;
      this.shipmentService.add(option);
    });
  }

  displayExchangeRate(exchangeRate) {
    this.exchangeRate.textContent = exchangeRate;
  }

  displayDate(dateTodayIn) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    this.dateTodayField.textContent = today;
  }

  bindCountryName(handler) {
    $("#country__select").on("select2:select", function (e) {
      var data = e.params.data;
      handler(data.id); // I set the value however the values got put in id. Something weird going on with select 2
    });
  }

  bindCurrencyName(handler) {
    $("#currency__select").on("select2:select", function (e) {
      const data = e.params.data;
      handler(data.id);
    });
  }



  bindOrderAmount(handler) {
    this.orderAmount.addEventListener("input", function (e) {
      const data = this.value;
      handler(data);
    });
  }
  bindShippingCosts(handler) {
    this.shippingCosts.addEventListener("input", function (e) {
      const data = this.value;
      handler(data);
    });
  }

  bindImportDutyPercentage(handler) {
    this.importDutyPercentage.addEventListener("input", function (e) {
      const data = this.value;
      handler(data);
    });
  }

  bindTaxPercentage(handler) {
    this.taxPercentage.addEventListener("input", function (e) {
      const data = this.value;
      handler(data);
    });
  }

  bindClearanceCosts(handler) {
    this.clearanceCosts.addEventListener("input", function (e) {
      const data = this.value;
      handler(data);
    });
  }

  bindShipmentService(handler) {
    $("#shipment-service__select").on("select2:select", function (e) {
      var data = e.params.data;
      handler(data.text);
    });
  }
}
