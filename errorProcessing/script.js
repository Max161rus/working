'use strict';

// конструкцию try catch можно применять для обработки ошибок
//в try записываем предполагаемую ошибку
//если она подтверждается то выполняется блок catch
//если нет, то блок try выполняется до конца

try{
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally{

}

console.log('Still normal');