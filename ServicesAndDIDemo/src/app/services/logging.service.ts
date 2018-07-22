export class LoggingService{
    logInfo(msg:string):void{
        console.log("Info: "+msg)
    }
    logDebug(msg:string):void{
        console.log("Debug: "+msg)
    }
}