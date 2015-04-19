var cheerio = require('cheerio');
var request = require('request');

var link = 'http://www.forever21.com/Product/Product.aspx?Br=F21&Category=DRESS&ProductID=2000134198&VariantID=&recid=product_rr-_-2002247963-_-2000134198-_-613-_-1';

request(link, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var title = $('h1.product-title').text();
    var price = $('p.product-price').text();
    var imageUrl = $('.ItemImage').attr('src');

    var metadata = {
      title: title,
      price: price,
      imageUrl: imageUrl
    };
    console.log(metadata);
  }
});
