export const optionsCloudinary = (multiple = false) => ({
  cloudName: "dapa84kxy",
  uploadPreset: "barberapp",
  sources: ["local", "camera"],
  showAdvancedOptions: false,
  cropping: !multiple,
  multiple,
  defaultSource: "local",
});
