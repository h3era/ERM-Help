var lastResFind=""; 		// последний удачный результат
var copy_page=""; 		// копия страницы в ихсодном виде
function TrimStr(s) {
	s = s.replace( /^\s+/g, '');
	return s.replace( /\s+$/g, '');
}

function FindOnPage(inputId) {	//ищет текст на странице, в параметр передается ID поля для ввода
	var obj = window.document.getElementById(inputId);
	var textToFind;
	if (obj) {textToFind = TrimStr(obj.value);	//обрезаем пробелы
	} else {alert("Объект не найден");return;
		}
	if (textToFind == "") {alert("Где инфа для поиска?");return;
	}
 
	if(document.body.innerHTML.indexOf(textToFind)=="-1")
	alert("Объект не найден. Ваша мораль снижается...");
 
	if(copy_page.length>0)
	document.body.innerHTML=copy_page;else copy_page=document.body.innerHTML;

	document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");								//стираем предыдущие якори для скрола
	document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:yellow'>"+textToFind+"</a>");	//Заменяем найденный текст ссылками с якорем;
	lastResFind=textToFind; 				// сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
	window.location = '#'+textToFind;			//перемещаем скрол к последнему найденному совпадению
}


document.body.onkeyup = function(event) {		// активация кнопки по Enter
	var e = event || window.event;
	var code = e.keyCode || e.which;
	if(code == 13) {
	FindOnPage('text-to-find');
	}
}
