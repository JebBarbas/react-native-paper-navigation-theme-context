"use strict";
// Super complicated test script :0 //
const runtest = async () => {
    console.log('Running tests ...');
    try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }
    catch {
        console.error('Tests failed');
        throw new Error('Tests failed');
    }
    console.log('Tests passed');
};
runtest();
//# sourceMappingURL=test.js.map