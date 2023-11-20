import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Duration } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

// 3 ways of creating a Bucket

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number){
    super(scope, id);

    new Bucket(this, 'MyL3Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(expiration)
      }]
    });
  }
}


export class AwsCdkHandsOnStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration:{
        rules:[{
          expirationInDays: 1,
          status: 'Enabled',
        }]
      }
    });

    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(2)
      }]
    });

    new L3Bucket(this, 'MyL3Bucket', 3);

  }
}
