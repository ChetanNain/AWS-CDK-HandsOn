#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkHandsOnStack } from '../lib/aws-cdk-hands_on-stack';

const app = new cdk.App();
new AwsCdkHandsOnStack(app, 'AwsCdkHandsOnStack', {
});