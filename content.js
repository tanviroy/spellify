var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) { // This checks for type text
            var text = node.nodeValue;
             var replacedText = text.replace(/ the /gi, ' Expecto patronum ')
                                    .replace(/The/gi, ' Expecto patronum ')
                                    .replace(/ of /gi, ' Accio ')
                                    .replace(/Of /gi, ' Accio ')
                                    .replace(/ and /gi, ' Wingardium Leviosa ')
                                    .replace(/And /gi, ' Wingardium Leviosa ')
                                    .replace(/ a /gi, ' Expelliarmus ')
                                    .replace(/A /gi, ' Expelliarmus ')
                                    .replace(/ to /gi, ' Lumos ')
                                    .replace(/To /gi, ' Lumos ')
                                    .replace(/ in /gi, ' Alohomora ')
                                    .replace(/In /gi, ' Alohomora ')
                                    .replace(/ is /gi, ' Avada Kedavra ')
                                    .replace(/Is /gi, ' Avada Kedavra ')
                                    .replace(/ you /gi, ' Sectumsempra ')
                                    .replace(/You /gi, ' Sectumsempra ')
                                    .replace(/ that /gi, ' Obliviate ')
                                    .replace(/That /gi, ' Obliviate ')
                                    .replace(/ it /gi, ' Riddikulus ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

// My first chrome extension ever!