function searchFunction() {
    var input,filter,figure,a,i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    article = document.getElementById('wrapper');
    figure = article.getElementsByTagName('figure');


    for(i=0; i< figure.length; i++){
        a = figure[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            figure[i].style.display = "";
        }
        else{
            figure[i].style.display = 'none';
        }
    }
}