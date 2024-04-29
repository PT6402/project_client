import { useEffect, useRef } from "react";

import Dropzone from "dropzone";

import "dropzone/dist/dropzone.css";

import IBox from "components/common/IBox";

import DropzoneRoot from "components/common/IDropzone/DropzoneRoot";

function IDropzone({ options }) {
  const dropzoneRef = useRef();

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <DropzoneRoot
      component="form"
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <IBox className="fallback">
        <IBox component="input" name="file" type="file" multiple />
      </IBox>
    </DropzoneRoot>
  );
}

export default IDropzone;
