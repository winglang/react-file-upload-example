bring aws;
bring cloud;
bring fs;
bring util;

let bucket = new cloud.Bucket(public: true) as "UploadBucket";
// let bucket = new aws.BucketRef("");

let website = new cloud.Website(
  path: fs.join(@dirname, "./website/build"),
) as "UploadWebsite";

let api = new cloud.Api(cors: true) as "UploadApi";

api.get("/upload", inflight (req) => {
  let key = util.uuidv4();
  let url = bucket.signedUrl(
    key,
    action: cloud.BucketSignedUrlAction.UPLOAD,
  );

  return {
    status: 200,
    body: Json.stringify({ url }),
  };
});

website.addJson("config.json", {
  uploadUrl: "{api.url}/upload"
});
