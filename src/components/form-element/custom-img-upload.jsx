import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ onFilesUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("Accepted Files:", acceptedFiles);
      onFilesUpload(acceptedFiles);
    },
    [onFilesUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div
      {...getRootProps({
        className: ` dropzone ${isDragActive ? "active" : ""}`,
        style: {
          border: "2px dashed rgb(124, 124, 124)",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
        },
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="dz-message">Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
      <span className="note needsclick text-secondary">
        (This is just a demo dropzone. Selected files are <strong>not</strong>{" "}
        actually uploaded.)
      </span>
      <div className="mt-2 d-flex w-100 flex-column ">
        <button to="/products/new" className="btn btn-light btn-sm w-25 m-auto">
          Upload&nbsp;Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
