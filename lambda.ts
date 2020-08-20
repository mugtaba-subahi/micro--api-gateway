import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { ApolloGateway } from '@apollo/gateway';

const createHandler = async () => {
  const gateway = new ApolloGateway({
    serviceList: [
      { "name": "users", "url": "https://api.zadif.com/users" },
      { "name": "posts", "url": "https://api.zadif.com/posts" }
    ]
 });

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    introspection: true,
    playground: { endpoint: '/gateway' }
  });
  return server.createHandler();
};

export const graphql = (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  createHandler().then(handler => handler(event, context, callback));
};
