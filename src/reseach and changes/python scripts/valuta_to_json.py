import requests
import shutil
import re
import json
import unicodedata
from slugify import slugify
import os
import urllib3
import time

## this function formats the data from "valuta_delim.txt" , which
## comes from valutawijzer.nl to an json object. Which can be loaded in javascript.
def readfile():
    source = open("valuta_delim.txt","r")
    jsonarray ={}
    for line in source:
        split = line[:-1].split("&")
        cleannum = split[1][1:]
        cleanName =" ".join(split[0][2:-1].split(" ")[:-1])
        cleanCode =split[0][2:-1].split(" ")[-1][1:-1]

        jsonelement = {"currencyCode":cleanCode,"currencyNameDutch":cleanName,"exchangeRate":float(cleannum.replace(",","."))}
        jsonarray[cleanCode] = jsonelement
        
   

    source.close()
    with open('exchangeRates.txt', 'w', encoding='utf8') as outfile:
        json.dump(jsonarray, outfile, ensure_ascii=False)

readfile()



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
