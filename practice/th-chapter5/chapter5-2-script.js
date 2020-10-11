'use strict';

const  lang = document.querySelector('html').lang;

if(lang === 'ja') {
    document.querySelector('option[value="chapter5-2-ja.html"]').selected = true;
} else if(lang === 'en') {
    document.querySelector('option[value="chapter5-2-en.html"]').selected = true;
} else if(lang === 'zh') {
    document.querySelector('option[value="chapter5-2-zh.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
    location = document.getElementById('form').select.value;
}