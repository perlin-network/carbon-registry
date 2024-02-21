import './signUp.scss';
import { message, Upload } from 'antd';

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.66406 13.3333L9.9974 10M9.9974 10L13.3307 13.3333M9.9974 10V17.5M16.6641 13.9524C17.682 13.1117 18.3307 11.8399 18.3307 10.4167C18.3307 7.88536 16.2787 5.83333 13.7474 5.83333C13.5653 5.83333 13.3949 5.73833 13.3025 5.58145C12.2158 3.73736 10.2094 2.5 7.91406 2.5C4.46228 2.5 1.66406 5.29822 1.66406 8.75C1.66406 10.4718 2.36027 12.0309 3.48652 13.1613"
      stroke="#475467"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UploadArea = (props: { name?: string }) => {
  const action = 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188';

  const onDrop = (e: any) => {
    console.log('Dropped files', e.dataTransfer.files);
  };

  const onChange = (info: any) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Upload.Dragger
      name={props.name}
      action={action}
      maxCount={1}
      onDrop={onDrop}
      onChange={onChange}
    >
      <div className="upload-icon">
        <UploadIcon />
      </div>
      <p className="ant-upload-hint">PNG, JPG, PDF, MS Word, PPT (max. 20mb)</p>
      <p className="ant-upload-text">
        <strong>Click to upload</strong> or drag and drop
      </p>
    </Upload.Dragger>
  );
};

export default UploadArea;
