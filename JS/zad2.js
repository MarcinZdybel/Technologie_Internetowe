function count(event){
    event.preventDefault();

    var a = document.getElementById('inputA').value;
    var b = document.getElementById('inputB').value;
    var c = document.getElementById('inputC').value;

    var d = (b*b)-(4*a*c);

    if(d>0){
        var x1 = (-b-Math.sqrt(d))/2*a;
        var x2 = (-b+Math.sqrt(d))/2*a;

        document.getElementById('result').innerHTML=`Wynik 1: ${x1}</br>Wynik 2: ${x2}`;
    }else if(d==0)
        document.getElementById('result').innerHTML=`Wynik: ${(-b/2*a)}`;
    else
        document.getElementById('result').innerHTML='Brak rozwiązania';

    console.log(d);
}