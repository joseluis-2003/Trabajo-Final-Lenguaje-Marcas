// Método que selecciona el primer elemento que cumpla dicho XPath
function getElementByXpath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Método que selecciona los elementos que cumplan dicho XPath
function getElementsByXpath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
}

// Método para consultar por consola elementos que cumplan dicho XPath
function selectQuery(xpath) {
    console.log("***********************************************************");
    console.log("Query: '" + xpath + "'");
    let it = getElementsByXpath(xpath);
    let el = it.iterateNext();

    while (el) {
        console.log(el);
        el = it.iterateNext();
    }
}

console.log("***********************************************************");


// Todos los elementos hijos de cardContainer
selectQuery("//div[@id='transformed-html-container']/*");


// Con un path completo (es decir, empezando desde html) obtener el texto del primer li de la card cuyo id es Kenobi
function getKenobiFirstLiText() {
    var kenobiCard = document.getElementById('Kenobi');
    var firstLi = kenobiCard.querySelector('li:first-child');
    return firstLi.textContent.trim();
  }
 
 selectQuery("/html/body/div/ul[@id='Kenobi']/li[1]/text()");
  console.log("Texto del primer <li> de la card 'Kenobi':");
  console.log(getKenobiFirstLiText());
  console.log("***********************************************************");



// El valor del id de la tercera carta
selectQuery("(//div[@id='transformed-html-container']/div[3]/@id)");


// El texto del h3 de la sexta carta
selectQuery("(//div[6]/h2)");


// Todas las cards que contengan la clase Maestro
selectQuery("//div[@id='transformed-html-container']/div[contains(@class, 'Maestro')]");

// El elemento h2 de la card cuyo id es Windu
selectQuery("//div[@id='Windu']/h2");

// Todas las cards que contengan la clase Maestro y el sable Verde
selectQuery("//div[contains(@class, 'Maestro') and ul/li[4][contains(text(), 'Verde')]]");

// El texto completo de todos los elementos que contengan el texto "DBY"
selectQuery("//*[contains(text(), 'DBY')]/text()");

// Todas las cards de jedis que falleciesen antes de la batalla de Yavin (ABY)
selectQuery("//div[contains(@class, 'Jedi')][contains(ul/li[contains(text(), 'Fallecimiento:')], 'ABY')]/h2");





// Todas las cards que falleciesen en una estrella de la muerte y que tengan sable azul
selectQuery("//div[contains(., 'Estrella de la muerte')][.//li[contains(., 'Sable de luz: Azul')]]");




console.log("***********************************************************");