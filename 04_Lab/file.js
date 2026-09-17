function countVowels() {
    var str = document.getElementById("inputData").value;
    var strToArray = str.split("")
    console.log(strToArray);
    var count = 0;
    var countA=0;countE=0;countO=0;countI=0;countU=0;
    for(i=0;i<strToArray.length;i++)
    {
        if(strToArray[i] == 'a' || strToArray[i] == 'e' ||strToArray[i] == 'i' ||strToArray[i] == 'o' ||strToArray[i] == 'u' )
        {
            count++;            
        }
        if(strToArray[i] == 'a' )
        {
            countA++;           
        }
        if(strToArray[i] == 'e' )
        {
            countE++;           
        }
        if(strToArray[i] == 'i' )
        {
            countI++;           
        }
        if(strToArray[i] == 'o' )
        {
            countO++;
        }
        if(strToArray[i] == 'u' )
        {
            countU++;
            
        }
    }
    console.log("Number of vowels are : "+count);
    console.log("Total Numbers of a : " + countA);
    console.log("Total Numbers of e : " + countE);
    console.log("Total Numbers of i : " + countI);
    console.log("Total Numbers of o : " + countO);
    console.log("Total Numbers of u : " + countU);
    document.getElementById("result").innerHTML = "<p>Total Counts are : " + count+  "</p>" + "<p>Toatal A Counts are:"+countA+"</p>";
}