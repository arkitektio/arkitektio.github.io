
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Accessor": [
      "ImageAccessor",
      "LabelAccessor"
    ],
    "DatasetImageFile": [
      "Dataset",
      "File",
      "Image"
    ],
    "Render": [
      "Snapshot",
      "Video"
    ],
    "View": [
      "AcquisitionView",
      "AffineTransformationView",
      "ChannelView",
      "ContinousScanView",
      "DerivedView",
      "FileView",
      "HistogramView",
      "InstanceMaskView",
      "LabelView",
      "MaskView",
      "OpticsView",
      "RGBView",
      "ROIView",
      "ReferenceView",
      "ScaleView",
      "TimepointView",
      "WellPositionView"
    ],
    "_Entity": [
      "File",
      "Image",
      "Table"
    ]
  }
};
      export default result;
    