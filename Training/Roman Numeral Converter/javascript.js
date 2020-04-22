var ans, ans2, ans3, len, mul, i, val, pos, delta,_A,_B;
var ansArray = [];

function ansObj(val, pos) {
    this.value = val;
    this.position = pos;
}


var dictionary = {
    name: ["I", "V", "X", "L", "C", "D", "M"],
    nValue: [1, 5, 10, 50, 100, 500, 1000]
}

convertToRoman(789);
//dictionary.nValue[0] =1
//dictionary.nValue[1] =5
//ansArray[0]=7

function convertToRoman(input) {
    answer = input.toString();
    len = answer.length;
    i = len - 1;


    for (i = len - 1, Q = 1; i >= 0; i--, Q = Q * 10) {
        var modValue = Q * answer[i];
        ansArray.push(modValue);
    }




    for (A = 0, B = A + 1,_B = 0,_A = 0; len > _A; _A++) {

        
        
        for (; 3 >= _A; _A++) {
            ansArray_W = ansArray[A];
            dicValue = dictionary.nValue[A];

            calc = dictionary.nValue[A] * (_A) + dictionary.nValue[B] * (_B);
            delta = ansArray_W - calc;
            if (delta != 0) {
                delta = 0;
                calc = 0;
                if (3 == _A) {
                    delta = -1;
                    break;
                }

            }
            else if (delta === 0) {
                break;
            }
            else {
                delta = 0;
                break;

            }



            for (; 3 >= _B; _B++) {
                ansArray_W = ansArray[A];
                dicValue = dictionary.nValue[A];

                calc = dictionary.nValue[A] * (_A) + dictionary.nValue[B] * (_B);
                delta = ansArray_W - calc;
                if (delta != 0) {
                    delta = 0;
                    calc = 0;
                    if(3 == _B){
                        delta = -1;
                    }
                    break;
                    
                }
                else if (delta === 0) {
                    break;
                }
                else {
                    delta = 0;
                    break;

                }
            }
        }


    }
}