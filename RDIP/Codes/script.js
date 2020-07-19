var sentence = '{"English":[' +
    '{"a":"John ate an apple before afternoon", "b":"before afternoon John ate an apple", "c":"John before afternoon ate an apple"},' +
    '{"a":"some students like to study in the night", "b":"in the night some students like to study"},' +
    '{"a":"John and Mary went to church", "b":"Mary and John went to church"},' +
    '{"a":"John went to church after eating", "b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"did he go to market", "b":"he did go to market"},' +
    '{"a":"the woman who called my sister sells cosmetics", "b":"the woman who sells cosmetics called my sister",' +
    '"c":"my sister who sells cosmetics called the woman", "d":"my sister who called the woman sells cosmetics"},' +
    '{"a":"John goes to the library and studies", "b":"John studies and goes to the library"},' +
    '{"a":"John ate an apple so did she", "b":"she ate an apple so did John"},' +
    '{"a":"the teacher returned the book after she noticed the error", "b":"the teacher noticed the error after she returned the book",' +
    '"c":"after the teacher returned the book she noticed the error", "d":"after the teacher noticed the error she returned the book",' +
    '"e":"she returned the book after the teacher noticed the error", "f":"she noticed the error after the teacher returned the book",' +
    '"g":"after she returned the book the teacher noticed the error", "h":"after she noticed the error the teacher returned the book"},' +
    '{"a":"I told her that I bought a book yesterday", "b":"I told her yesterday that I bought a book", "c":"yesterday I told her that I bought a book",' +
    '"d":"I bought a book that I told her yesterday", "e":"I bought a book yesterday that I told her", "f":"yesterday I bought a book that I told her"}],' +

    '"Hindi":[' +
    '{"a":"राम और श्याम बाजार गयें", "b":"राम और श्याम गयें बाजार", "c":"बाजार गयें राम और श्याम", "d":"गयें बाजार राम और श्याम"},' +
    '{"a":"राम सोया और श्याम भी", "b":"श्याम सोया और राम भी", "c":"सोया श्याम और राम भी", "d":"सोया राम और श्याम भी"},' +
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम", "c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम",' +
    '"e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम",' +
    '"i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम"},' +
    '{"a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम"},' +
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया", "b":"मारकर बिल्लियों को कुत्ता सो गया", "c":"बिल्लियों को मारकर सो गया कुत्ता", "d":"मारकर बिल्लियों को सो गया कुत्ता",' +
    '"e":"कुत्ता सो गया बिल्लियों को मारकर", "f":"कुत्ता सो गया मारकर बिल्लियों को", "g":"सो गया कुत्ता बिल्लियों को मारकर", "h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
    '{"a":"एक लाल किताब वहाँ है", "b":"एक लाल किताब है वहाँ", "c":"वहाँ है एक लाल किताब", "d":"है वहाँ एक लाल किताब"},' +
    '{"a":"एक बड़ी सी किताब वहाँ है", "b":"एक बड़ी सी किताब है वहाँ", "c":"बड़ी सी एक किताब वहाँ है", "d":"बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब",' +
    '"f":"वहाँ है बड़ी सी एक किताब", "g":"है वहाँ एक बड़ी सी किताब", "h":"है वहाँ बड़ी सी एक किताब"}]}';

    var language="";
    var current_sentence = "";
    var formed_sentence = "";
    var word_array;
    var sentences = JSON.parse(sentence);

    function initialize(){
        language = "";
        current_sentence = "";
    }

    function exp_top(){
        clean();
        language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;
        if(language == "---Select Language---"){
            alert('Select a Language');
            document.getElementById("line1").style.display = "none";
            document.getElementById("line2").style.display = "none";
            document.getElementById("experiment-sentence").style.display = "none";
            document.getElementById("second-msg").style.display = "none";
            document.getElementById("second-msg2").style.display = "none";
            return false;
        }
        else if(language == "English" || language == "Hindi"){
            document.getElementById("line1").style.display = "initial";
            document.getElementById("line2").style.display = "initial";
            document.getElementById("experiment-sentence").style.display = "initial";
            document.getElementById("second-msg").style.display = "initial";
            document.getElementById("second-msg2").style.display = "initial";
            document.getElementById("line1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("line2").innerHTML = "(select the buttons in proper order)";
            sentence_selection(language);
    }
}

function sentence_selection(language){
    document.getElementById('experiment-sentence').innerHTML = "";
    if(language == "English"){
        var question = Math.floor(Math.random() * 10);
        current_sentence = sentences.English[question].a;
        sentence_to_buttons( sentences.English[question].a );
    }
    else if(language == "Hindi"){
        var question = Math.floor(Math.random() * 7);
        current_sentence = sentences.Hindi[question].a;
        sentence_to_buttons( sentences.Hindi[question].a );
    }
}

function sentence_to_buttons( str ){
    var arra = str.split(" ");
    word_array = shuffle(arra);
    adding_buttons(word_array);
}

function adding_buttons(arra){
    var k="1";
    for(i=0;i<arra.length;i++){
        var button = document.createElement("button");
        button.setAttribute("id",k);
        button.setAttribute("value",arra[i]);
        k += String(parseFloat(k) + 1);
        button.innerHTML = arra[i];
        document.getElementById('experiment-sentence').appendChild(button);
    }
    document.getElementById('formed-sentence').value = "";
}

function reform2(){
    clean();
    document.getElementById('experiment-sentence').innerHTML = "";
    adding_buttons(word_array);
}

function shuffle(a) {
    var j, c, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        c = a[i];
        a[i] = a[j];
        a[j] = c;
    }
    return a;
}

function assi(on){
    if(on == "experiment-sentence")
        return;
    document.getElementById('formed-sentence').innerHTML = String( document.getElementById('formed-sentence').innerHTML ) + " " + String( document.getElementById(on).value );
    for_sentence = document.getElementById('formed-sentence').innerHTML;
    document.getElementById(on).style.display = "none";
}


function reform(){
    document.getElementById('second-msg').innerHTML = "Formed Sentence ";
    document.getElementById('second-msg2').innerHTML = "(after selecting words):";
    document.getElementById("reform-button").style.display = "initial";
}

function clean(){
    language = "";
    current_sentence = "";
    formed_sentence = "";
    document.getElementById("second-msg").innerHTML = "";
    document.getElementById("second-msg2").innerHTML = "";
    document.getElementById('formed-sentence').innerHTML = "";
    document.getElementById("reform-button").style.display = "none";
}