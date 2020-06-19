import {Context, Handler} from 'aws-lambda';

import {Request, Response} from './models';

export const handler : Handler<Request, Response> = async (event: Request, context: Context) : Promise<Response> => {
    console.log('awsRequestId', context.awsRequestId);

    let result : Response = { message :`Hello World ${event.key1}` };

    return result;
}