const button = document.querySelector('button'); // ! tells TS that we will get eventually get a value, and we know this button exists and will not give a null value

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

if(button){
  button.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));
}

// tsconfig.json notes
// // because tsconfig is ES6, these are available. therefore, TS assumes it exists and doesn't throw a warning/error
// const mapping = new Map()

// "sourceMap": true -> generates .map files that act as a bridge to connect the js files to the input files. this shows both .js and .ts files in sources tab of dev tools

// rootDir and outDir are both set to be really clear where input files live and where output files will be generated
// rootDir - set specifically where files are stored in, this ensures TS compiler does not look in other folders (our exmaple in src folder). 
// outDir - we tell TS compiler where created files should be stored. typical projects create a dist folder to store js files

// noEmit - have TS compiler only check the files without creating output files
// noEmitOnError - setting to true will not generate any output files that have an error. in example above, we know there will be a button but TS doesn't know that. we know it will work, but we need to work around it

/* Type Checking */
// "strict": true - setting to true will enable all checking below it. we have the option to only enable some checking
// "strictNullChecks" tells TS to be stript with how we access & work with values that might potentially hold a null value
// "strictBindCallApply" - checks on which fn you are calling bind, call, or apply and checks if what you are checking makes sense