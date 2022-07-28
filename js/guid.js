let now = new Date();
let newId = now.getTime(); 
let prevId = -1;

export function getUniqueId()
{
    let newId = new Date().getTime();

    if (newId === prevId) 
    {
        newId = getUniqueId2(); 
    }
    prevId=newId;

    return newId; 
}

export function getUniqueId2()
{
    newId = (newId * 1664525 + 1013904223) % 4294967296;
    return newId;
}

export function test_getUniqueId(testingFunction, testSize)
{
    let test = new Array(testSize);

    for (let i=0; i<testSize; i++)
    {
        test[i] = testingFunction();
    }

    let i=0;
    let j=0;
    let fail=false;
    while (i<testSize-1 && !fail)
    {
        j=i+1;
        while (j<testSize && !fail)
        {
            if ( test[i] === test[j] ) 
            {
                fail=true;
            }
            j++;
        }
        i++;
    }
    
    if (fail)
        alert("no pasa el test");
    else
        alert("pasa el test");
}

