// 创建文件夹
function createFolder(folderPath) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
          console.error('Error creating folder:', err);
          return;
      }
      console.log('Folder created successfully.');
  });
}

// 删除文件
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
      if (err) {
          console.error('Error deleting file:', err);
          return;
      }
      console.log('File deleted successfully.');
  });
}