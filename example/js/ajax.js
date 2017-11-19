function example(name)
{
    if(name == "")
        return;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector('#infodiv').innerHTML = ajax.responseText;
        }
    };
    ajax.open('GET', name + '.html', true);
    ajax.send();
}
