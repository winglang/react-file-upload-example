> [!WARNING]
> This example is not functioning right now.

An example of an app with a React front-end that allows users to upload files to an S3 bucket.

## Usage

Prerequisites:

- Install the latest version of [Wing](https://www.winglang.io/docs).
- Set up an AWS account. 


Set up and deploy to AWS:

```sh
npm install
cd website
npm install
npm run build
cd ..
wing compile -t tf-aws main.w
cd target/main.tfaws
terraform init
terraform apply
```
