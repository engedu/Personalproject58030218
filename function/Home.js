function searchFunction() {
    var input,filter,figure,a,i;//ประกาศตัวแปร
    input = document.getElementById('myinput');//เรียก elment ID=myinput เก็บค่าไว้ในตัวแปร input
    filter = input.value.toUpperCase();//การ input ค่าให้เป็นตัวอักษรพิมพใหญ่
    article = document.getElementById('wrapper');//เรียก elment ID=wrapper เก็บค่าไว้ในตัวแปร article
    figure = article.getElementsByTagName('figure');//เรียกNode list ที่เป็น figure element จากในarticle element เก็บค่าไว้ในตัวแปร figure


    for(i=0; i< figure.length; i++){  //i แทนตำแหน่ง array เช็คว่า i เริ่มต้นที่ 0 i น้อยกว่า nodelist figure ถ้าเป็นจริงจะทำงาน
        a = figure[i].getElementsByTagName('a')[0];//เรียกelent nodelist a ตำแหน่งที่ 0 เก็บไว้ใน a
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){//ถ้ามีการ input ข้อความลงไปจะเช็คว่าตำแหน่งมากกว่า -1 หรือไม่ถ้าเป็นจริงจะทำงาน
            figure[i].style.display = "";//แสดง display ข้อความที่เราพิมพ์ใน input ออกมา
        }
        else{
            figure[i].style.display = 'none';//ถ้าไม่จริงจะไม่แสดงอะไรที่ กรหยสฟั
        }
    }
}