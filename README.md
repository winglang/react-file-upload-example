An example of an app with a React front-end that allows users to upload files to an S3 bucket.

## Usage

Prerequisites:

- Install the latest version of [Wing](https://www.winglang.io/docs).
- Set up an AWS account.

Install the dependencies and build the website:

```sh
cd website
npm install
npm run build
cd ..
```

To build the project and run it locally using the Wing console:

```sh
wing run main.w
```

To compile the project to Terraform/OpenTofu and deploy it to AWS:

```sh
wing compile -t tf-aws main.w
cd target/main.tfaws
terraform init
terraform apply
```
