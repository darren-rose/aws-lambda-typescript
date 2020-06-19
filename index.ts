import {Context, Handler} from 'aws-lambda';

interface Request {
    key1: string,
    key2: string,
    key3: string
}

interface Response {
    message: string
}

export const handler : Handler<Request, Response> = async (event: Request, context: Context) : Promise<Response> => {
    console.log('awsRequestId', context.awsRequestId);

    let result : Response = { message :`Hello World ${event.key1}` };

    return result;
}