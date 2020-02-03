const amphtmlValidator = require('amphtml-validator');

;(async () => {
    const validator = await amphtmlValidator.getInstance()

    if(process.argv[2]){
        var result = validator.validateString(process.argv[2]);
        var data = {
            status: result.status,
            errors: []
        }

        data.errors = result.errors.map(error => {
            return  `line ${error.line}, col ${error.col} : ${error.message} ${error.specUrl ? ` (see ${error.specUrl}) `: ``}`   
        })
        
        console.log(JSON.stringify(data, null, 2))
    }
})();
