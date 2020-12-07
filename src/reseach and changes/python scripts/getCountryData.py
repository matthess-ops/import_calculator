import requests
import shutil
import re
import json
import unicodedata
from slugify import slugify
import os
import urllib3
import json
import requests




#this function get all necessary country data from restcountries, for example alpha3code, currency symbol, see temp dictonary in this function for all fiels
def readCountryData():

    euroCountries = [
      'AUT',
      'BEL',
      'BGR',
      'HRV',
      'CYP',
      'CZE',
      'DNK',
      'EST',
      'FIN',
      'FRA',
      'DEU',
      'GRC',
      'HUN',
      'IRL',
      'ITA',
      'LVA',
      'LTU',
      'LUX',
      'MLT',
      'NLD',
      'POL',
      'PRT',
      'ROU',
      'SVK',
      'SVN',
      'ESP',
      'SWE',
      'GBR',
    ]
    response = requests.get('https://restcountries.eu/rest/v2/all')
    json_data = json.loads(response.text)

    allCountryData ={}


    for i in range(len(json_data)):
        country = json_data[i]
        importTaxRate = 21.0
        importDutyRate= 4.2


        for m in range(len(euroCountries)):
            if(euroCountries[m]== country['alpha3Code']):
                importDutyRate = 0.0
                importTaxRate=0.0

        print(importDutyRate,country['name'])
        symbol = ""
        if country['currencies'][0]['symbol']!= 'None':
            symbol =country['currencies'][0]['symbol']



        temp = {
        'nameEnglish': country['name'] ,
        'alpha2Code': country['alpha2Code'],
        'alpha3Code': country['alpha3Code'],
        'primaryCurrencyCode': country['currencies'][0]['code'],
        'primaryCurrencyName': country['currencies'][0]['name'],
        'primaryCurrencySymbol': symbol,
        'nameDutch': country['translations']['nl'],
        'importTaxRate': importTaxRate,
        'importDutyRate':importDutyRate
    
        }
        allCountryData[country['alpha3Code']] =temp





    with open('countryData.txt', 'w', encoding='utf8') as outfile:
        json.dump(allCountryData, outfile, ensure_ascii=False)




readCountryData() 


# def readfile():
#     source = open("valuta_delim.txt","r")
#     jsonarray ={}
#     for line in source:
#         split = line[:-1].split("&")
#         cleannum = split[1][1:]
#         cleanName =" ".join(split[0][2:-1].split(" ")[:-1])
#         cleanCode =split[0][2:-1].split(" ")[-1][1:-1]

#         jsonelement = {"currencyCode":cleanCode,"currencyNameDutch":cleanName,"exchangeRate":float(cleannum.replace(",","."))}
#         jsonarray[cleanCode] = jsonelement
        
       

#     source.close()
 

#     with open('exchangeRates.txt', 'w') as outfile:
#         json.dump(jsonarray, outfile)
# readfile()



# def readsource():

#     source = open("valutawijzer.txt","r", encoding="utf-8")
#     alllines = ""
#     for line in source:
#         alllines= alllines+line[:-1]

#     source.close()
#     return alllines


# def textFinder(searchStr1,searchStr2,txt):
#     searchStr1Index=txt.find(searchStr1)
#     searchStr2Index=txt.find(searchStr2,searchStr1Index)
#     subString = txt[searchStr1Index+len(searchStr1):searchStr2Index]
#     return subString.lstrip().rstrip(),searchStr2Index


# def coverLink(txt):
 
#     subString,searchStr2Index = textFinder('/>&nbsp;','<td width="40%"',txt)
#     # subString2 = textFinder('src="','" /></',subString )
#     # print("coverLink="+subString2+"@")
#     print(subString)
#     return subString,searchStr2Index


# def all(txt):
#     # len(txt)
#     shouldgo = True
#     while(shouldgo == True):
#         substring,index =coverLink(txt)

#         # print(len(txt[index:]),len(txt))
#         new =txt[index:]
#         if(new ==txt):
#             shouldgo =False
#         else:
#             txt= txt[index]




# txt = readsource()
# all(txt)
