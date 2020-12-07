// y

import Model from "./model";
import View from "./view";

class Controller {
  constructor(model, view) {
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


    this.onOutputUIFieldsChange(
      this.model.totalAdditionalAmount,
      this.model.combinedAmount,
      this.model.taxAmount   ,
      this.model.importDutyAmount    ,
      this.model.totalOrderAmount    )


    this.onInputUIFieldsChange(
      this.model.countries,
      this.model.currencies,
      this.model.importDutyPercentage,
      this.model.taxPercentage,
      this.model.clearanceCosts,
      this.model.shipmentServices,
      this.model.exchangeRate,
      this.model.dateToday,
      this.model.symbol
    );
  }

  onOutputUIFieldsChange=(
    totalAdditionalAmount,
    combinedAmount,
    taxAmount,
    importDutyAmount,
    totalOrderAmount

  ) =>{
    this.view.displayTotalAdditionalAmount(totalAdditionalAmount)   ,
    this.view.displayCombinedAmount(combinedAmount)   ,
    this.view.displayTaxAmount(taxAmount)   ,
    this.view.displayImportDutyAmount(importDutyAmount)   ,
    this.view.displayTotalOrderAmount(totalOrderAmount)  
  };

  onInputUIFieldsChange = (
    countries,
    currencies,
    importDutyPercentage,
    taxPercentage,
    clearanceCosts,
    shipmentServices,
    exchangeRate,
    dateToday,
    symbol,
    orderAmount,
    shippingCosts
  ) => {
    this.view.displayImportDutyPercentage(importDutyPercentage);
    this.view.displayCountries(countries);
    this.view.displayCurrencies(currencies);
    this.view.displayClearanceCosts(clearanceCosts);
    this.view.displayTaxPercentage(taxPercentage);
    this.view.displayShipmentService(shipmentServices);
    this.view.displayExchangeRate(exchangeRate)
    this.view.displayDate(dateToday)
    this.view.displayValutaSymbol(symbol)
    this.view.displayOrderAmount(orderAmount)
    this.view.displayShippingCosts(shippingCosts)
  };

  handleCountryName = (countryName) => {
    this.model.changeCountryName(countryName);
    this.model._checkAllInputFieldsHasValues()
  };

  handleCurrencyName = (currencyCode) => {
    this.model.changeCurrenyName(currencyCode)
    this.model._checkAllInputFieldsHasValues()

  };

  handleOrderAmount = (orderAmount) => {
    this.model.changeOrderAmount(orderAmount)
    this.model._checkAllInputFieldsHasValues()

  };

  handleShippingCosts = (shippingCosts) => {
    this.model.changeShippingCosts(shippingCosts)
    this.model._checkAllInputFieldsHasValues()


  };

  handleImportDutyPercentage = (importDutyPercentage) => {
    this.model.changeImportDutyPercentage(importDutyPercentage)
    this.model._checkAllInputFieldsHasValues()

  };

  handleTaxPercentage = (taxPercentage) => {
    this.model.changeTaxPercentage(taxPercentage)
    this.model._checkAllInputFieldsHasValues()

  };

  handleClearanceCosts = (clearanceCosts) => {
    this.model.changeClearanceCosts(clearanceCosts)
    this.model._checkAllInputFieldsHasValues()

  };

  handleShipmentService = (shipmentService) => {
    this.model.changeShipmentService(shipmentService)
    this.model._checkAllInputFieldsHasValues()

  };
}

const app = new Controller(new Model(), new View());
