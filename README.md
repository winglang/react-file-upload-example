> [!WARNING]
> This example is only currently supported when deployed to AWS using the `tf-aws` target.
> It may not work with the Wing local simulator. [Tracking issue](https://github.com/winglang/wing/issues/1383).

An example of an app with a React front-end that allows users to upload files to an S3 bucket.

## Usage

Prerequisites:

- Install the latest version of [Wing](https://www.winglang.io/docs).
- Set up an AWS account. 


To build the project and deploy it to AWS:

```sh
cd website
npm install
npm run build
cd ..
wing compile -t tf-aws main.w
cd target/main.tfaws
terraform init
terraform apply
```
