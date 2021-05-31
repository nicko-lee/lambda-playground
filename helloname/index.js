exports.handler = async (event) => {
    console.log("event: " + JSON.stringify(event));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello ' + event.queryStringParameters.name),
    };
    return response;
};
