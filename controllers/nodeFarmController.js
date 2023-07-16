const fs = require('fs')

const templateCard = fs.readFileSync(`${__dirname}/../templates/template-card.html`,'utf-8')
const templateOverview = fs.readFileSync(`${__dirname}/../templates/template-overview.html`,'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/../templates/template-product.html`,'utf-8')
const data = fs.readFileSync(`${__dirname}/../dev-data/data.json`)
const dataObj = JSON.parse(data)

//----------------------------------
function replacetemplate(temp,product){
   let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName)
   output = output.replace(/{%IMAGE%}/g,product.image)
   output = output.replace(/{%PRICE%}/g,product.price)
   output = output.replace(/{%FROM%}/g,product.from)
   output = output.replace(/{%NUTRIENTS%}/g,product.nutrients)
   output = output.replace(/{%QUANTITY%}/g,product.quantity)
   output = output.replace(/{%DESCRIPTION%}/g,product.description)
   output = output.replace(/{%ID%}/g,product.id)

   if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'Not Organic')
   return output
}

exports.serveOverview = (req,res)=>{
   const cardsHTML = dataObj.map(el=>replacetemplate(templateCard,el))
   const output = templateOverview.replace('{%PRODUCT_CARDS%}',cardsHTML)
   res.status(200).send(output)
}

exports.serveProduct = (req,res)=>{
   const pid = req.params.id*1;
   const output = replacetemplate(templateProduct,dataObj[pid])
   res.send(output)
}