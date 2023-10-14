import { SSTConfig } from "sst";
import { NextjsSite, Bucket } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "serverless-next",
      region: "us-east-1",
      stage1: "dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucketConfig = new Bucket(stack, "slNextBucket");
      const site = new NextjsSite(stack, "site", { bind: [bucketConfig] });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
