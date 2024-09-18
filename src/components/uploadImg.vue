<!--单图上传组件/按钮-->
<template>
  <el-upload
    action="uploadUrl"
    name="avatar"
    :multiple="false"
    :show-file-list="false"
    :before-upload="beforeUpload"
    with-credentials
  >
    <button>上传</button>
  </el-upload>
</template>
<script>
function imageToBase64(image) {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);

  return canvas.toDataURL("image/jpeg"); // 替换为相应的MIME类型
}
function blobToDataURI(blob, callback) {
  let reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function (e) {
    callback(e.target.result);
  };
}
import { compress, compressAccurately } from "image-conversion";
import { ElMessage } from "element-plus";
export default {
  setup(props, { emit }) {
    // ...省略其他
    const beforeUpload = (file) => {
      const typeList = ["image/jpeg", "image/png", "image/gif"];
      const isTypeValid = typeList.includes(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isTypeValid) {
        ElMessage.error("图片格式只能是 JPG/PNG/GIF!");
      }
      if (!isLt2M) {
        ElMessage.error("图片大小不能超过 2MB!");
      }

      return new Promise((resolve, reject) => {
        if (file.size / 1024 > 200) {
          // 大于 200 kb 就压缩
          compress(file, {
            quality: 0.6,
            type: "image/jpeg",
            width: 400,
            height: 768,
            scale: 0.5,
          }).then((res) => {
            // The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            blobToDataURI(res, (img) => {
              console.log(img);
            });
            resolve(res);
          });
          //   compressAccurately(file, {
          //     size: 32, //The compressed image size is 100kb
          //     accuracy: 0.8, //the accuracy of image compression size,range 0.8-0.99,default 0.95;
          //     //this means if the picture size is set to 1000Kb and the
          //     //accuracy is 0.9, the image with the compression result
          //     //of 900Kb-1100Kb is considered acceptable;
          //     type: "image/jpeg",
          //     width: 400,
          //     height: 800,
          //     scale: 0.3,
          //   }).then((res) => {
          //     // The res in the promise is a compressed Blob type (which can be treated as a File type) file;
          //     blobToDataURI(res, (img) => {
          //       console.log(img);
          //     });
          //     resolve(res);
          //   });
        } else if (isTypeValid && isLt2M) {
          // 无需压缩直接返回原文件
          resolve(file);
        } else {
          reject();
        }
      });
    };
    return {
      beforeUpload,
    };
  },
};
</script>
