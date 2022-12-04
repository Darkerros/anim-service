class DataValidError extends Error{
    constructor(message) {
        super();
        this.message = message
    }

    static baddata (message){
        return new DataValidError(message)
    }

    static baddata (message){
        return new DataValidError(message)
    }
}

module.exports = DataValidError;