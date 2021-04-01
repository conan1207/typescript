// exception은 예상하지 못 한 이슈
// 예상할 수 있는 에러는 error state
//  error state 인지 exception인지 구분 필요
// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000000000000); Error 뜸

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'Not exist!'){
        throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents';
}

function closeFile(fileName: string){
    //
}

const fileName = 'file';

function run(){
    // try catch로 에러를 잡아주면 프로그램이 죽지 않죠...
try {
    console.log(readFile(fileName));
    
} catch(e){
    console.log('catched!');
    
} finally { // finally는 항상 호출됨, 마무리 되어야 하는...
    closeFile(fileName);
    console.log('bye bye');
    
}
}

run(); // finally가 없이 밖에 구문이 밖에 있을 시, 캐치에 문제 있으면 바로 리턴 돼서 아래 구문이 작동 안 함..
