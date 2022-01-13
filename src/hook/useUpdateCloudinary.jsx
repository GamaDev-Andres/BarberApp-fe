import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { optionsCloudinary } from "../helpers/cloudinaryWidget";

const useUpdateCloudinary = (multiple) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setopen] = useState(false);

  const handleOpen = useCallback(() => {
    setopen(true);
  }, []);

  useEffect(() => {
    const widget = cloudinary.createUploadWidget(
      optionsCloudinary(multiple),
      (err, result) => {
        if (!err) {
          console.log("Upload Widget event - ", result);

          if (result.event === "queues-end") {
            const arrData = result.info.files;
            const arrFotos = arrData.map((data) => {
              return data.uploadInfo.secure_url;
            });
            console.log(arrFotos);

            setData(arrFotos);
          }
          if (result.event === "abort" || result.event === "close") {
            console.log("TERMINEEE");
            setLoading(false);
            setopen(false);
          }
        } else {
          Swal.fire("error", "Hubo un error subiendo el archivo", "error").then(
            (res) => {
              setLoading(false);
              setopen(false);
            }
          );
        }
      }
    );
    if (open) {
      setLoading(true);

      widget.open();
    }

    return () => {
      setLoading(false);
    };
  }, [open]);

  return { data, loading, handleOpen };
};

export default useUpdateCloudinary;
