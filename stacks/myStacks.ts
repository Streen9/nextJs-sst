import { StackContext, Api, Bucket, NextjsSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "/",
    },
  });

  const bucketConfig = new Bucket(stack, "sl-next-1-bucker");
  new NextjsSite(stack, "sl-next-site", { bind: [bucketConfig] });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
