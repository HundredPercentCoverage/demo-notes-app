export default function handler(lambda) {
  return async function (event, context) {
    let lambdaResultBody, statusCode;

    try {
      lambdaResultBody = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      console.error(e);
      lambdaResultBody = { error: e.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(lambdaResultBody),
      headers: {
        'Content-Type': 'application/json',
      }
    }
  };
}
